const canonicalHost = 'blocksuite.io';
const redirectHosts = new Set(['blocksuite.affine.pro', 'block-suite.com']);

export function onRequest(context) {
  const url = new URL(context.request.url);

  if (redirectHosts.has(url.hostname)) {
    url.hostname = canonicalHost;
    url.protocol = 'https:';

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
