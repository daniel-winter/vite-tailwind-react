import{r as P,e as o}from"./iframe-BNWelFxJ.js";import{u as $,f as j,a as A,C as u}from"./useBrand-AUWqaolR.js";import{a as F}from"./utils-kCjDb0Pb.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-CsqqX4PW.js";const M="_wrapper_chzqk_1",O="_item_chzqk_16",H="_details_chzqk_26",J="_values_chzqk_33",e={wrapper:M,item:O,details:H,values:J},D=({colorGroup:r="kColorInteraction"})=>{const{tokens:d}=$(),q=P.useMemo(()=>j(d,r),[d,r]),w=A(q);return o.createElement("div",{className:e.wrapper},w.map(([i,p])=>{const{color:m,borderColor:V}=F(p);return o.createElement("div",{key:i,className:e.item,style:{backgroundColor:p,border:`1px solid ${V}`,color:m}},o.createElement("div",{className:e.details},o.createElement("div",null,o.createElement("div",{className:e.name},p)),o.createElement("div",{className:e.values},o.createElement("div",{className:e.css},o.createElement("span",null,"CSS: "),o.createElement(u,{color:m,name:i,filter:r})),o.createElement("div",{className:e.css},o.createElement("span",null,"SCSS: "),o.createElement(u,{color:m,name:i,filter:r,prefix:"$"})))))}))};D.__docgenInfo={description:"A unified color system helps users identify patterns and building a strong brand identification. The consistent use of colors in different projects enhances user experience, ensures design coherence, and simplifies maintenance.",methods:[],displayName:"ColorPalette",props:{colorGroup:{required:!1,tsType:{name:"union",raw:`| 'kColorInteraction'
| 'kColorText'
| 'kColorBorder'
| 'kColorIcon'
| 'kColorDataviz'
| 'kColorBg'`,elements:[{name:"literal",value:"'kColorInteraction'"},{name:"literal",value:"'kColorText'"},{name:"literal",value:"'kColorBorder'"},{name:"literal",value:"'kColorIcon'"},{name:"literal",value:"'kColorDataviz'"},{name:"literal",value:"'kColorBg'"}]},description:"possible color groups",defaultValue:{value:"'kColorInteraction'",computed:!1}}}};const W={title:"Foundation/Colors",component:D},a={tags:["!autodocs"],args:{colorGroup:"kColorInteraction"},argTypes:{colorGroup:{control:"select"}}},s={args:{colorGroup:"kColorText"}},t={args:{colorGroup:"kColorBorder"}},n={args:{colorGroup:"kColorIcon"}},l={args:{colorGroup:"kColorDataviz"}},c={args:{colorGroup:"kColorBg"}};var C,k,g;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  tags: ['!autodocs'],
  args: {
    colorGroup: 'kColorInteraction'
  },
  argTypes: {
    colorGroup: {
      control: 'select'
    }
  }
}`,...(g=(k=a.parameters)==null?void 0:k.docs)==null?void 0:g.source}}};var f,v,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    colorGroup: 'kColorText'
  }
}`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var _,I,E;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    colorGroup: 'kColorBorder'
  }
}`,...(E=(I=t.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var T,x,y;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    colorGroup: 'kColorIcon'
  }
}`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var G,S,z;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    colorGroup: 'kColorDataviz'
  }
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var h,N,b;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    colorGroup: 'kColorBg'
  }
}`,...(b=(N=c.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const X=["InteractionColors","TextColors","BorderColors","IconColors","DataVizColors","BackgroundColors"];export{c as BackgroundColors,t as BorderColors,l as DataVizColors,n as IconColors,a as InteractionColors,s as TextColors,X as __namedExportsOrder,W as default};
