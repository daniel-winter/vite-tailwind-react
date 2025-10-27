import{j as e,M as o}from"./iframe-BFEqPYAy.js";import{useMDXComponents as r}from"./index-zNRtw0-0.js";import"./preload-helper-Dp1pzeXC.js";function i(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Foundation"}),`
`,e.jsx(n.h1,{id:"foundation",children:"Foundation"}),`
`,e.jsxs(n.p,{children:["This package provides the base layer of ",e.jsx(n.a,{href:"?path=/docs/adr-adr-kos001-library-requirements--overview#onion-layered-principle",children:"Kosmos"}),". It is providing all necessary design tokens which includes colors, spacings, fonts, typography, etc."]}),`
`,e.jsx(n.h2,{id:"output",children:"Output"}),`
`,e.jsxs(n.p,{children:["To generate a working output of the parsed tokens from Figma we are using the ",e.jsx(n.a,{href:"https://amzn.github.io/style-dictionary/#/",rel:"nofollow",children:"Style dictionary"})," package and the several so called transformers. These transformers supports us by transforming the design tokens into platform specific deliverables for CSS, SCSS etc."]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"config.ts"})," script generates a folder for all available brands where the tokens and the fonts are placed. The output is placed in the ",e.jsx(n.code,{children:"dist"})," folder:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dist/css/moebelix/dark-mode-mobile.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dist/css/moemax/dark-mode-mobile.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dist/css/xxxlutz/dark-mode-mobile.css"})}),`
`]}),`
`,e.jsxs(n.p,{children:["Here is a short excerpt from ",e.jsx(n.code,{children:"css/moebelix/dark-mode-mobile.css"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-css",children:`font-face {
  font-family: 'XXXLutz Sans';
  src: url('./fonts/Sans-Variable.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
}

/**
 * Do not edit directly, this file was auto-generated.
 */

:root {
  --k-border-radius-none: 0;
  --k-border-radius-default: 0;
  --k-border-radius-xxs: 0.0625rem;
  --k-border-radius-sm: 0.25rem;
  --k-border-radius-md: 0.5rem;
  --k-border-radius-lg: 1rem;
  --k-border-radius-pill: 9999px;
  --k-border-radius-circle: 50%;
  --k-border-width-default: 0.0625rem;
  --k-border-width-selected: 0.125rem;
  --k-border-width-hover: 0.125rem;
  --k-spacing-0: 0rem;
  --k-spacing-2: 0.125rem;
  --k-spacing-4: 0.25rem;
  --k-spacing-8: 0.5rem;
  ...
}
`})}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h3,{id:"build",children:"Build"}),`
`,e.jsxs(n.p,{children:["Design Token Studio is used to sync Figma and GitHub code. The ",e.jsx(n.code,{children:"tokens"})," folder in the foundation package is now the source of truth for all design tokens."]}),`
`,e.jsx(n.p,{children:"To build the foundation package, run:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`pnpm nx run foundation:build
`})}),`
`,e.jsxs(n.p,{children:["This command will also execute additionally the ",e.jsx(n.code,{children:"build-main.css.ts"}),` script, which bundles all automatically generated CSS files into one single file for each brand based on viewports and prefered color scheme (light/dark).
With that, the `,e.jsx(n.code,{children:"dist/css"})," folder will be extended with the following files:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dist/css/moebelix/main.css"})}),`
`,e.jsx(n.li,{children:e.jsx(n.code,{children:"dist/css/moebelix/main-min.css"})}),`
`]}),`
`,e.jsx(n.p,{children:"This is valid for all brands."}),`
`,e.jsx(n.h2,{id:"implementation",children:"Implementation"}),`
`,e.jsx(n.h3,{id:"via-cdn-link",children:"Via CDN link"}),`
`,e.jsx(n.p,{children:"If you want to use a specific release version use this URL (recommended):"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<link rel="stylesheet" href="https://kosmos.xxxl-dev.at/foundation/SEMANTIC_VERSION/css/YOUR_BRAND/light-mode-mobile.css">
`})}),`
`,e.jsx(n.p,{children:"Furthermore, it's also possible to use the latest version of the foundation layer to always be up to date:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`<link rel="stylesheet" href="https://kosmos.xxxl-dev.at/foundation/latest/css/YOUR_BRAND/main.css">

`})}),`
`,e.jsx(n.h3,{id:"or-via-npm-registry",children:"Or via NPM registry"}),`
`,e.jsx(n.p,{children:"Additionally, we also gonna provide the foundation layer as an NPM package which can be fetch like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm install @kosmos/foundation
`})}),`
`,e.jsx(n.p,{children:"After installation you can import the CSS file in your project like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@kosmos/foundation/css/BRAND/main.css'; ||
import '@kosmos/foundation/css/BRAND/dark-mode-mobile.css';
`})}),`
`,e.jsx(n.p,{children:"or the JS version like this:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`import '@kosmos/foundation/js/BRAND/light-mode-mobile.js';
`})})]})}function a(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{a as default};
