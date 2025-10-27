import{r as y,e}from"./iframe-BNWelFxJ.js";import{u as T,f as x,s as b,c as P,C as c}from"./useBrand-AUWqaolR.js";import{T as C}from"./TokenHeader-DnlGuMTg.js";import{g as D}from"./utils-kCjDb0Pb.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CsqqX4PW.js";const I="_item_1s3oa_1",N="_value_1s3oa_10",S="_details_1s3oa_15",V="_isBorderRadius_1s3oa_21",F="_isBorderWidth_1s3oa_25",s={item:I,value:N,details:S,isBorderRadius:V,isBorderWidth:F},u="kBorderWidth",O="kBorderRadius",v=({value:t=u})=>{const{tokens:l}=T(),g=y.useMemo(()=>x(l,t),[l,t]),R=b(g);return e.createElement(e.Fragment,null,e.createElement(C,{isFirstCellVisible:!0,isPxCellVisible:!0,layoutVariant:"grid",cellSize:"unset",templateGrid:"compact"}),R.map(([r,o],f)=>{const n=r.startsWith(u),i=r.startsWith(O),W=r.endsWith("Pill"),E=i&&f>=6;return e.createElement("div",{key:r,className:s.item},e.createElement("div",{className:s.details},e.createElement("div",{className:P(s.value,{[s.isBorderRadius]:i,[s.isBorderWidth]:n}),style:{...i&&{borderRadius:o},...n&&{borderBottom:`${o} solid var(--k-color-bg-neutral-subtle)`},...W&&{width:"var(--k-spacing-96)"}}}),e.createElement("div",null,e.createElement(c,{name:r,filter:t,hasBackground:!0})),e.createElement("div",null,e.createElement(c,{name:r,filter:t,hasBackground:!0,prefix:"$"})),e.createElement("div",null,o),e.createElement("div",null,!E&&D(o))))}))};v.__docgenInfo={description:"",methods:[],displayName:"Border",props:{value:{required:!1,tsType:{name:"union",raw:"'kBorderRadius' | 'kBorderWidth'",elements:[{name:"literal",value:"'kBorderRadius'"},{name:"literal",value:"'kBorderWidth'"}]},description:"filter for 'kBorder' prefix",defaultValue:{value:"'kBorderWidth'",computed:!1}}}};const G={title:"Foundation/Border",component:v},a={tags:["!autodocs"],argTypes:{value:{control:"select"}},args:{value:"kBorderWidth"}},d={args:{value:"kBorderRadius"}};var m,B,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  argTypes: {
    value: {
      control: 'select'
    }
  },
  args: {
    value: 'kBorderWidth'
  }
}`,...(p=(B=a.parameters)==null?void 0:B.docs)==null?void 0:p.source}}};var h,k,_;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 'kBorderRadius'
  }
}`,...(_=(k=d.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};const M=["BorderWidth","BorderRadius"];export{d as BorderRadius,a as BorderWidth,M as __namedExportsOrder,G as default};
