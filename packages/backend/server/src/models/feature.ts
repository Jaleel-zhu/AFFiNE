import { Injectable } from '@nestjs/common';
import { Transactional } from '@nestjs-cls/transactional';
import { Feature } from '@prisma/client';
import { z } from 'zod';

import { BaseModel } from './base';
import {
  type FeatureConfigs,
  type FeatureName,
  Features,
  FeatureType,
} from './common';

// TODO(@forehalo):
//   `version` column in `features` table will deprecated because it's makes the whole system complicated without any benefits.
//   It was brought to introduce a version control for features, but the version controlling is not and will not actually needed.
//   It even makes things harder when a new version of an existing feature is released.
//   We have to manually update all the users and workspaces binding to the latest version, which are thousands of handreds.
//   This is a huge burden for us and we should remove it.
@Injectable()
export class FeatureModel extends BaseModel {
  async get<T extends FeatureName>(name: T) {
    const feature = await this.get_unchecked(name);

    return {
      ...feature,
      configs: this.check(name, feature.configs),
    };
  }

  @Transactional()
  async upsert<T extends FeatureName>(name: T, configs: FeatureConfigs<T>) {
    const parsedConfigs = this.check(name, configs);

    // TODO(@forehalo):
    //   could be a simple upsert operation, but we got useless `version` column in the database
    //   will be fixed when `version` column gets deprecated
    const latest = await this.try_get_unchecked(name);

    let feature: Feature;
    if (!latest) {
      feature = await this.db.feature.create({
        data: {
          type: FeatureType.Feature,
          feature: name,
          configs: parsedConfigs,
        },
      });
    } else {
      feature = await this.db.feature.update({
        where: { id: latest.id },
        data: {
          configs: parsedConfigs,
        },
      });
    }

    this.logger.verbose(`Feature ${name} upserted`);

    return feature as Feature & { configs: FeatureConfigs<T> };
  }

  /**
   * Get the latest feature from database.
   *
   * @internal
   */
  async try_get_unchecked<T extends FeatureName>(name: T) {
    const feature = await this.db.feature.findFirst({
      where: { feature: name },
      orderBy: { version: 'desc' },
    });

    return feature as Omit<Feature, 'configs'> & {
      configs: Record<string, any>;
    };
  }

  /**
   * Get the latest feature from database.
   *
   * @throws {Error} If the feature is not found in DB.
   * @internal
   */
  async get_unchecked<T extends FeatureName>(name: T) {
    const feature = await this.try_get_unchecked(name);

    // All features are hardcoded in the codebase
    // It would be a fatal error if the feature is not found in DB.
    if (!feature) {
      throw new Error(`Feature ${name} not found`);
    }

    return feature;
  }

  check<T extends FeatureName>(name: T, config: any) {
    const shape = this.getConfigShape(name);
    const parseResult = shape.safeParse(config);

    if (!parseResult.success) {
      throw new Error(`Invalid feature config for ${name}`, {
        cause: parseResult.error,
      });
    }

    return parseResult.data as FeatureConfigs<T>;
  }

  getConfigShape(name: FeatureName): z.ZodObject<any> {
    return Features[name]?.shape.configs ?? z.object({});
  }
}