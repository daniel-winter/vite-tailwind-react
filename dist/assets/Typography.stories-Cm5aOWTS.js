import{r as m,e as t}from"./iframe-BNWelFxJ.js";import{T as H}from"./TokenHeader-DnlGuMTg.js";import{u as B,f as v,C as l,b as R}from"./useBrand-AUWqaolR.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CsqqX4PW.js";const w="_wrapper_1fm4m_1",z="_size_1fm4m_5",G="_item_1fm4m_9",r={wrapper:w,size:z,item:G},T="kFontText",I="kFontTextHero",P="kFontTextTitle",x=({type:o=T})=>{const{tokens:i}=B(),O=m.useMemo(()=>v(i,o),[i,o]),p=Object.entries(O),N=e=>!e.startsWith(I)&&!e.startsWith(P),h=m.useMemo(()=>o===T?p.filter(([e])=>N(e)):p,[p,o]);return t.createElement("div",{className:r.wrapper},t.createElement(H,null),h.map(([e,c])=>t.createElement("div",{key:e,className:r.item},t.createElement("div",{className:r.size},t.createElement(l,{name:e,filter:c,hasBackground:!0})),t.createElement("div",{className:r.size},t.createElement(l,{name:e,filter:c,hasBackground:!0,prefix:"$"})),t.createElement("span",{style:{font:`var(${R(e,c)})`}},"Example Text"))))};x.__docgenInfo={description:"Typography is an integral part of our design system. Good typography helps to present pages clearly and efficiently to the user.",methods:[],displayName:"Typography",props:{type:{required:!1,tsType:{name:"union",raw:"typeof TOKEN_GROUP | typeof FONT_HERO | typeof FONT_TITLE",elements:[{name:"TOKEN_GROUP"},{name:"FONT_HERO"},{name:"FONT_TITLE"}]},description:"possible typography types",defaultValue:{value:"'kFontText'",computed:!1}}}};const U={title:"Foundation/Typography",component:x},s={tags:["!autodocs"],args:{type:"kFontTextHero"}},a={args:{type:"kFontTextTitle"}},n={args:{type:"kFontText"},argTypes:{type:{control:"select"}}};var d,y,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    type: 'kFontTextHero'
  }
}`,...(u=(y=s.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var f,g,F;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    type: 'kFontTextTitle'
  }
}`,...(F=(g=a.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};var _,k,E;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'kFontText'
  },
  argTypes: {
    type: {
      control: 'select'
    }
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};const M=["HeroFont","TitleFonts","BodyFonts"];export{n as BodyFonts,s as HeroFont,a as TitleFonts,M as __namedExportsOrder,U as default};
