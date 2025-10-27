import{j as n,M as s,c as a}from"./iframe-BFEqPYAy.js";import{useMDXComponents as i}from"./index-zNRtw0-0.js";import"./preload-helper-Dp1pzeXC.js";const r=`**Kosmos** is a UI library that support you building different applications for all XXXLGroup rails (XXXLutz, Moebelix, Moemax, ...). It provides you different UI elements (atoms and molecules), tokens, icons and many more.

Documentation and more information about Kosmos can be found within the [docs folders](https://github.com/XXXLutz/kosmos/tree/main/docs).

## Tooling: pnpm & Nx

We use **pnpm** as our package manager for its speed, disk efficiency, and strict dependency resolution. pnpm is widely recognized as the top choice for modern monorepos, offering:

- **Performance:** 2x faster installs compared to npm and more efficient storage than Yarn, thanks to its content-addressable filesystem.
- **First-class workspace support:** Built specifically for monorepos, with built-in commands for filtering, affected package workflows, and more.
- **Strictness:** Prevents "phantom dependencies" by default, improving reliability for large teams and CI environments.

Learn more about pnpm: [pnpm.io](https://pnpm.io/)

We use **Nx** to organize and manage the monorepo. Nx provides powerful tools for structuring, building, testing, and maintaining large-scale monorepos efficiently.

Learn more: [nx.dev](https://nx.dev/)

## Installation

\`\`\`bash
pnpm install
\`\`\`

## Usage

### Storybook documentation

Start developing/adapting storybook documentation locally with

\`\`\`js
pnpm run storybook:dev
\`\`\`

Generate production build of storybook documentation with

\`\`\`js
pnpm run storybook:build
\`\`\`

Furthermore, its possible to analyze the production bundle with

\`\`\`js
pnpm nx run storybook:analyze-build
\`\`\`

This will generate and open a \`stats.html\` file where you can see which modules are taking up how much space.
Additionally, its possible to exchange the chart type with:

\`\`\`js
pnpm nx run storybook:analyze-build:sunburst
\`\`\`

Possible options/types are: \`'treemap' | 'sunburst' | 'network' | 'flamegraph'\`.
\`treemap\` is the default option.

### Foundation package documentation

Start developing/adapting the foundation package locally with

\`\`\`js
pnpm run foundation:build
\`\`\`

The foundation package contains design tokens and utilities. For more details, see the documentation [here](?path=/docs/foundation--overview).

Furthermore, this project uses [NX](https://nx.dev/) for running and defining tasks. There are following commands available:

### Tests

Run \`jest tests\` in all monorepos:

\`\`\`js
pnpm nx run-many -t jest:test
\`\`\`

### Linting

Run \`linting\` in all monorepos:

\`\`\`js
pnpm nx run-many -t lint
\`\`\`

Run \`linting\` only for one specific monorepo:

\`\`\`js
pnpm nx run @kosmos/storybook:lint
\`\`\`

### Build

Execute multiple \`build\` commands in all monorepos:

\`\`\`js
pnpm nx run-many -t build
\`\`\`
`;function t(e){const o={h2:"h2",...i(),...e.components};return n.jsxs(n.Fragment,{children:[n.jsx(s,{title:"Getting Started"}),`
`,n.jsx(o.h2,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(a,{children:r})]})}function d(e={}){const{wrapper:o}={...i(),...e.components};return o?n.jsx(o,{...e,children:n.jsx(t,{...e})}):t(e)}export{d as default};
