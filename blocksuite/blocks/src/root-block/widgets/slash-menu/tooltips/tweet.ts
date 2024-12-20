import { html } from 'lit';
// prettier-ignore
export const TweetTooltip = html`<svg width="170" height="106" viewBox="0 0 170 106" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_24732_2246)">
<path d="M168 0H2C0.89543 0 0 0.89543 0 2V104C0 105.105 0.89543 106 2 106H168C169.105 106 170 105.105 170 104V2C170 0.89543 169.105 0 168 0Z" fill="white"/>
<mask id="mask0_24732_2246" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="170" height="106">
<path d="M168 0H2C0.89543 0 0 0.89543 0 2V104C0 105.105 0.89543 106 2 106H168C169.105 106 170 105.105 170 104V2C170 0.89543 169.105 0 168 0Z" fill="white"/>
</mask>
<g mask="url(#mask0_24732_2246)">
<text fill="#8E8D91" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="10" letter-spacing="0em"><tspan x="10" y="18.2727">Embed a X post (tweet).</tspan></text>
<path d="M174 28.5H12C10.067 28.5 8.5 30.067 8.5 32V209C8.5 210.933 10.067 212.5 12 212.5H174C175.933 212.5 177.5 210.933 177.5 209V32C177.5 30.067 175.933 28.5 174 28.5Z" fill="white" stroke="#E3E2E4"/>
<path d="M168.244 71H17.7557C16.7861 71 16 71.2054 16 71.4588V105.541C16 105.795 16.7861 106 17.7557 106H168.244C169.214 106 170 105.795 170 105.541V71.4588C170 71.2054 169.214 71 168.244 71Z" fill="url(#pattern0_24732_2246)" stroke="#E3E2E4" stroke-width="0.5"/>
<text fill="#121212" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="9" letter-spacing="0em"><tspan x="16" y="62.5454">To Shape, Not to Adapt.</tspan></text>
<path d="M32 42C32 37.5817 28.4183 34 24 34C19.5817 34 16 37.5817 16 42C16 46.4183 19.5817 50 24 50C28.4183 50 32 46.4183 32 42Z" fill="url(#pattern1_24732_2246)" stroke="#E3E2E4" stroke-width="0.5"/>
<text fill="#121212" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="9" letter-spacing="0em"><tspan x="38" y="45.0454">AFFiNE</tspan></text>
<text fill="#8E8D91" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="9" letter-spacing="0em"><tspan x="72" y="45.0454">@AFFiNEOfficial</tspan></text>
</g>
</g>
<defs>
<pattern id="pattern0_24732_2246" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_24732_2246" transform="scale(0.00324675 0.0142857)"/>
</pattern>
<pattern id="pattern1_24732_2246" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image1_24732_2246" transform="scale(0.0208333)"/>
</pattern>
<clipPath id="clip0_24732_2246">
<rect width="170" height="106" fill="white"/>
</clipPath>
<image id="image0_24732_2246" width="308" height="70" xlink:href="data:image/png;base64,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"/>
<image id="image1_24732_2246" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAA9lBMVEUAAAD///////////////////////////////////////////////////////////8BAQH9/f0UFBQGBgawsLD7+/vf39+RkZEwMDAYGBgJCQlsbGwtLS0kJCQPDw/29vaMjIx+fn5eXl5AQEAhISEMDAzu7u7j4+Ofn59jY2NYWFhJSUk0NDQqKiofHx/r6+vb29u9vb24uLitra2FhYV4eHhwcHBOTk5FRUU7OzsbGxsRERGBgYF5eXlnZ2fy8vLR0dHCwsKqqqqlpaWTk5OOjo6IiIh0dHTo6OjW1tbLy8vIyMizs7Ojo6OWlpZTU1NDQ0N2dnYEsD/KAAAAD3RSTlMAgO8gYN8Qz7+Qn1CvX7Cz4vbnAAAC20lEQVRIx41V53riMBAkgAFDch4hbNzovfde0nu993+Zk00IUkzOmR98YM/szFrLOuBBJCyfSkFFUaSYHA4FfBA5iSkCooLGSw8qXsR/lIh0cvh6cpQeinLkYUd/4RTSEZMzvvxDGTB63IVgwhNH4XEPhglnIcTy8vsUhQ3MC+VHRUK4RRbIqKqOEhEun3H9ik+zDtTdz5GgCB46lwS+mgFuiOOj58RDPN4AuQVDmihPFHfkWBshRUDNgF12FMTC6kERQkVcQVw02AKb2gdTqD0DRUW0OGIwAHCl5LaOIg8MvBZhseMZgG6dkAJTnHfR8nYRFQJdw0XrUs1TpFPfH23seyJW04nUAprawEC6hWVVIETERCyIgxvtsgTjtl/GtIKCYBEOyPxPrYIKpQD0+8YcmYKNJLKPPEMOCH/JBgy7baL1ul2YyDJdB0CRt/gjjMUjkF8VKahu2zbFHk8cRQrwHdjoDPFmAtn1eLxe4QMu2ip3EpyAvAEXU1yaFCv2aHqG9RfFMgCa5qpygtoSRbVNc+aSZseKku9uMDm3wJCscoLgl8EUpqahTWgDzWRN687NyUsHRiEDbA59H5rWTEzIKxqEWvp7SW9XKpYFTKukn0FFOzR9ut9CTXSrpIk1ocX77DWAUgelZ6LU1mXgnXzNhvwpSAFs5JYYEdoaoEEBal+rF3cLCgfDT4W8H41cGTNVeQb6hOq5LIDVnTZugyFjjdip5/ajEdkZ1N0ieSQJoZkJgHmhRIHsLN0nhAyB251FKLCbjVoZDSZrYk40N0OywsjjgVvXvbHsuXtgvwLSgJVKjQwsWF0XnelV6oAtkCduIrbjnZPIwxc3u0SfFtVi0gczJ1Kc0XcWxBfq3sC18Ie4j6O/40v8MvaDuIyd4/ZHwvNC8W1AVPjzRST+20cwfOS1K/3Mj3L9/iJWkI8jmsSP0iMiS5SEoyI95qV7NXJMcipLp3LYy/4HwhGNw7uiTMQAAAAASUVORK5CYII="/>
</defs>
</svg>
`;