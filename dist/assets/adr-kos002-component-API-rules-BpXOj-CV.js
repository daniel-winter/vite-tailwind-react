import{j as e,M as r}from"./iframe-BNWelFxJ.js";import{useMDXComponents as s}from"./index-9xe-tnWN.js";import"./preload-helper-Dp1pzeXC.js";function o(t){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Architecture decisions/ADR-KOS002 - Component API rules"}),`
`,e.jsx(n.h1,{id:"adr-kos002-component-api-rules",children:"ADR-KOS002: Component API rules"}),`
`,e.jsx(n.h2,{id:"status",children:"Status"}),`
`,e.jsx(n.p,{children:"Accepted ✅"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Deciders: Stefan Binder, Oriol Bover, Daniel Winter"}),`
`,e.jsx(n.li,{children:"Date: April 2025"}),`
`]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"Components are a fundamental part of any design system and one of the three pillars of Kosmos. Therefore, it's important to define component API rules to provide a consistent user experience."}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"We introduce a small ruleset, that should help developers creating and extending component APIs / props:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Avoid exposing className or style props in components"})}),`
`]}),`
`,e.jsx(n.p,{children:"Allowing users to add these props, let consumer apply arbitrary stylistic overrides. It's better to start strict and revisit from time to time if needed be more flexible."}),`
`,e.jsxs(n.ol,{start:"2",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Try not to inherit props from base elements unless necessary"})}),`
`]}),`
`,e.jsxs(n.p,{children:["By extending e.g. HTMLAttributes allows consumers to add several props to a component, exceptions can be ",e.jsx(n.code,{children:"aria-_"})," or ",e.jsx(n.code,{children:"data-_"})," attributes. Additionally, native UI elements like Buttons, Inputs, Form elements etc, can make use of these exception."]}),`
`,e.jsxs(n.ol,{start:"3",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"A consistent component API which represent the design system is easier to use"})}),`
`]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Consistent naming of props consistently across all components, e.g variant vs. theme etc."}),`
`,e.jsx(n.li,{children:"Props that belong together should be grouped together:"}),`
`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`  voucher?: {
    /** voucher code */
    code: string;
    /** text for code label */
    codeLabel: string;
    /** copy function for voucher code */
    onCopy?: (event: MouseEvent) => void;
  };
`})}),`
`,e.jsxs(n.p,{children:["All props that belong to the ",e.jsx(n.code,{children:"voucher"})," object are grouped together and are required, so that the consumer recognizes, that these props must used together to provide a consistent user experience."]}),`
`,e.jsxs(n.ol,{start:"4",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Components generally shouldn't handle their own positioning"})}),`
`]}),`
`,e.jsx(n.p,{children:"A single component should not have an outer margin, so that it could be use on different places without overrides needed. E.g. an wrapper around the component should add the margin etc."}),`
`,e.jsxs(n.ol,{start:"5",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Components should usually take up all given horizontal space"})}),`
`]}),`
`,e.jsx(n.p,{children:"Components should take the full horizontal space a parent is providing or they are inside."}),`
`,e.jsxs(n.ol,{start:"6",children:[`
`,e.jsx(n.li,{children:e.jsx(n.strong,{children:"Be cautious with JSX spread; Don’t apply it to external data"})}),`
`]}),`
`,e.jsx(n.p,{children:"Avoid forwarding props blindly from one component to another. These makes it possible to forward unintended props."}),`
`,e.jsx(n.h3,{id:"further-information",children:"Further information"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://gabe.pizza/notes-on-component-libraries/",rel:"nofollow",children:"Notes on maintaining an internal React component library"})}),`
`]})]})}function a(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(o,{...t})}):o(t)}export{a as default};
