import{j as e,M as i}from"./iframe-BNWelFxJ.js";import{useMDXComponents as t}from"./index-9xe-tnWN.js";import"./preload-helper-Dp1pzeXC.js";function r(o){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"General/Set up local registry"}),`
`,e.jsx(n.h2,{id:"set-up-a-local-npm-registry-with-verdaccio",children:"Set up a local npm registry with Verdaccio"}),`
`,e.jsx(n.p,{children:"If you want to test a new feature or bugfix locally and see how it works across other repositories, you can easily do so by setting up a local npm registry using Verdaccio."}),`
`,e.jsxs(n.p,{children:["Verdaccio is already pre-installed as dev dependency, together with the ",e.jsx(n.code,{children:"@nx/js"})," package which is needed."]}),`
`,e.jsx(n.p,{children:"The following steps guide you through the process:"}),`
`,e.jsx(n.h3,{id:"1-adapt-npmrc-file",children:"1. Adapt .npmrc file"}),`
`,e.jsxs(n.p,{children:["First, we have to disable or remove the following line within the root ",e.jsx(n.code,{children:".npmrc"})," file:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:"//nexus.xxxlgroup.com/repository/npm-kosmos-internal/:_authToken=${NODE_AUTH_TOKEN}\n"})}),`
`,e.jsx(n.h3,{id:"2-start-local-registry",children:"2. Start local registry"}),`
`,e.jsx(n.p,{children:"After that, we can start the local registry with:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`pnpm nx run kosmos:local-registry
`})}),`
`,e.jsxs(n.p,{children:["The registry is now available under ",e.jsx(n.a,{href:"http://localhost:4873/",rel:"nofollow",children:"http://localhost:4873/"}),"."]}),`
`,e.jsx(n.h3,{id:"3-publish-package-to-local-registry",children:"3. Publish package to local registry"}),`
`,e.jsx(n.p,{children:"Next, you have to move into the correct package/monorepo to publish it, e.g.:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`cd packages/foundation
`})}),`
`,e.jsxs(n.p,{children:["Only public available packages can be published. It does not work if ",e.jsx(n.code,{children:'"private": true'})," is set within the package.json file."]}),`
`,e.jsx(n.p,{children:"If you are in the designated package, you can run the following command:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`npm publish --registry http://localhost:4873
`})}),`
`,e.jsx(n.p,{children:"If you would do that on root level all packages would be published to your local registry. Except, if one or more repositories are private, it will throw an error and nothing would be published."}),`
`,e.jsx(n.h3,{id:"4-consuming-the-local-package-from-a-separate-repository",children:"4. Consuming the local package from a separate repository"}),`
`,e.jsx(n.p,{children:"After that, you can switch to another repository and start using the local package:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Add or update the specific dependency like e.g.: ",e.jsx(n.code,{children:'"@kosmos/foundation": "0.0.4"'})]}),`
`,e.jsxs(n.li,{children:["Exchange within the root ",e.jsx(n.code,{children:".npmrc"})," file the registry entry to:"]}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`registry = 'http://localhost:4873/';
`})}),`
`,e.jsx(n.p,{children:"This is necessary, so that you can fetch the local deployed package from your local registry."}),`
`,e.jsx(n.h4,{id:"a-few-things-to-keep-in-mind-when-working-with-local-npm-verdaccio-registry",children:"A few things to keep in mind when working with local npm verdaccio registry:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"If you want to publish a new version of a package, you have to raise the version with the package.json by hand, if not you get an error the next time you want to publish it."}),`
`,e.jsx(n.li,{children:'Closing and restarting the local registry will remove all "deployed" packages.'}),`
`]}),`
`]})]})}function c(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{c as default};
