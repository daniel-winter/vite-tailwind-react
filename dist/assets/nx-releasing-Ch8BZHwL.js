import{j as e,M as a}from"./iframe-BFEqPYAy.js";import{useMDXComponents as r}from"./index-zNRtw0-0.js";import"./preload-helper-Dp1pzeXC.js";function i(s){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",ul:"ul",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"General/Monorepos/Nx Releasing"}),`
`,e.jsx(n.h2,{id:"nx-releasing",children:"Nx Releasing"}),`
`,e.jsxs(n.p,{children:["Within Nx projects, you can use the ",e.jsx(n.code,{children:"nx release"}),` command to manage your releases. This command is designed to work with the Nx monorepo structure and can be customized for your specific needs.
An example of a first release command is (if there are no git tags available):`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx release --dry-run --first-release
`})}),`
`,e.jsx(n.p,{children:"or the shorthand"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx release --d
`})}),`
`,e.jsxs(n.p,{children:["With the ",e.jsx(n.code,{children:"--dry-run"})," or ",e.jsx(n.code,{children:"-d"})," flag, you get a preview what changes will be made before actually making them."]}),`
`,e.jsx(n.h3,{id:"nx-config",children:"NX config"}),`
`,e.jsxs(n.p,{children:["The configuration for the releases can be customized, definend in the ",e.jsx(n.code,{children:"nx.json"})," file on root level."]}),`
`,e.jsx(n.h4,{id:"project-relationship",children:"Project relationship"}),`
`,e.jsx(n.h5,{id:"fixed-mode-default",children:"Fixed mode (default)"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"All packages have the same version (are in sync)"}),`
`,e.jsx(n.li,{children:"If you change a single package -> all packages are incremented"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`"projectsRelationship": "fixed",
`})}),`
`,e.jsx(n.h5,{id:"independent-mode",children:"Independent mode"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Each package can have its own version"}),`
`,e.jsx(n.li,{children:"Only increments the version of the package that have been touched"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`"projectsRelationship": "independent",
`})}),`
`,e.jsx(n.h4,{id:"conventional-commit-types",children:"Conventional Commit Types"}),`
`,e.jsxs(n.p,{children:[`It's possible to also customize how Nx interprets conventional commits, for both versioning and changelog generation.
E.g. by default, the `,e.jsx(n.code,{children:"docs"})," type is disabled. Here's an example how we can enable it:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`"conventionalCommits": {
    "types": {
        "docs": true
    }
},
`})}),`
`,e.jsxs(n.p,{children:["Or you can define how ",e.jsx(n.code,{children:"docs"})," type releases are handled eg. as minor or patch version:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`"conventionalCommits": {
    "types": {
        "docs": {
          "semverBump": "patch"
        }
    }
},
`})}),`
`,e.jsx(n.h3,{id:"resources-and-further-reading",children:"Resources and further reading"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://nx.dev/recipes/nx-release/get-started-with-nx-release",rel:"nofollow",children:"Get Started with Nx Release"})}),`
`]})]})}function d(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{d as default};
