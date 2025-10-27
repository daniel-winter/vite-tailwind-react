import{r as m,e as i,U as p,j as e,M as x,S as u}from"./iframe-BNWelFxJ.js";import{useMDXComponents as a}from"./index-9xe-tnWN.js";import{a as j,I as g}from"./Icon-CsqqX4PW.js";import{ColoredIcon as f}from"./Icon.stories-BDJg6oIF.js";import"./preload-helper-Dp1pzeXC.js";const b="_searchBar_fg4vw_1",y="_input_fg4vw_7",w="_iconCount_fg4vw_17",_="_grid_fg4vw_23",I="_singleIcon_fg4vw_30",v="_iconName_fg4vw_40",o={searchBar:b,input:y,iconCount:w,grid:_,singleIcon:I,iconName:v},d=()=>{const[s,n]=m.useState(""),t=Object.entries(j).filter(([c])=>c.toLowerCase().includes(s.toLowerCase())),r=t.length,h=c=>{n(c.target.value)};return i.createElement(p,null,i.createElement("div",{className:o.searchBar},i.createElement("span",{className:o.iconCount},r," icons found"),i.createElement("input",{type:"text",placeholder:"Search icons...",name:"search",value:s,onChange:h,className:o.input})),i.createElement("div",{className:o.grid},t.map(([c])=>i.createElement("div",{key:c,className:o.singleIcon},i.createElement(g,{glyph:c,size:"lg"}),i.createElement("div",{className:o.iconName},c)))))};d.__docgenInfo={description:"",methods:[],displayName:"SearchableIcons"};function l(s){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Iconauts"}),`
`,e.jsx(n.h1,{id:"iconauts",children:"Iconauts"}),`
`,e.jsx(n.p,{children:"Iconauts are a set of scalable icons."}),`
`,e.jsx(n.h2,{id:"available-icons",children:"Available icons"}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.h4,{id:"import-as-react-icon-component",children:"Import as React Icon component"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Icon } from '@kosmos/icons';

const MyComponent = () => {
  return <Icon glyph="advice" size={32} color="#116644" />;
};
`})}),`
`,e.jsx(n.p,{children:"Output:"}),`
`,e.jsx(u,{of:f}),`
`,e.jsx(n.h4,{id:"import-with-html-and-css",children:"Import with HTML and CSS"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@kosmos-iconauts/dist/kosmos-icons.css';

<span className="kosmos-icons accessible-parking"></span>;
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"kosmos-icons"})," class is required to apply the base styles for the icon font, and the ",e.jsx(n.code,{children:"accessible-parking"}),` class is the specific icon to be displayed.
The exactly applied CSS properties and values can be found in the `,e.jsx(n.code,{children:"scripts/generate-css"})," file."]}),`
`,e.jsx(n.h2,{id:"generate-icons-index-file",children:"Generate icons index file"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx run kosmos/icons:generate:index
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"generate:index"})," command is based on the ",e.jsx(n.code,{children:"optimize"})," command, so that the manually added icon(s) will be optimized and indexed at once."]}),`
`,e.jsx(n.h2,{id:"build-dist-output",children:"Build dist output"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`pnpm nx run kosmos/icons:build
`})}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"build"})," command will execute the following steps:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icons:clean"})," -> removes the old dist folder"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icons:optimize"})," -> optimizes the SVG files with svgo"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icons:generate:index"})," -> generates the icons index file in the src/icons folder"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icons:build:ts"})," -> compiles TypeScript files"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icons:build:css"})," -> generates the kosmos icons CSS files"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"icons:build:fonts"})," -> generates the final icon files with svgtofont"]}),`
`]}),`
`,e.jsx(n.h2,{id:"add-new-icons-manually",children:"Add new icons manually"}),`
`,e.jsx(n.p,{children:"This sections describes how to add new icons manually to the iconauts package."}),`
`,e.jsx(n.p,{children:"Its very simple and easy to add a new icons, please follow these steps:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Place the SVG file in the ",e.jsx(n.code,{children:"src/icons"})," folder."]}),`
`,e.jsxs(n.li,{children:["Run the ",e.jsx(n.code,{children:"pnpm nx run kosmos/icons:build"})," command to regenerate the icons index file and build the dist output."]}),`
`]})]})}function M(s={}){const{wrapper:n}={...a(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(l,{...s})}):l(s)}export{M as default};
