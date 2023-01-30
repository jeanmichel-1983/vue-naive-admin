import{_ as y}from"./AppPage.a8c5b75a.js";import{c as f,e as _,d as N,u as T,f as x,bh as k,i as B,j as F,h as r,bb as v,cy as E,a0 as P,R as j,S as a,Q as h,Z as e,a1 as c,V as p,Y as A,X as b,T as O,U,F as W,bY as D,bv as H}from"./index.d3d187e2.js";import"./plugin-vue_export-helper.f63bf49c.js";import"./use-merged-state.6489845b.js";const I=f("statistic",[_("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),f("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[_("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[f("icon",{verticalAlign:"-0.125em"})]),_("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),_("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[f("icon",{verticalAlign:"-0.125em"})])])]),L=Object.assign(Object.assign({},x.props),{tabularNums:Boolean,label:String,value:[String,Number]}),Y=N({name:"Statistic",props:L,setup(n){const{mergedClsPrefixRef:t,inlineThemeDisabled:u,mergedRtlRef:d}=T(n),o=x("Statistic","-statistic",I,E,n,t),l=k("Statistic",d,t),s=B(()=>{const{self:{labelFontWeight:m,valueFontSize:g,valueFontWeight:z,valuePrefixTextColor:w,labelTextColor:S,valueSuffixTextColor:C,valueTextColor:R,labelFontSize:V},common:{cubicBezierEaseInOut:$}}=o.value;return{"--n-bezier":$,"--n-label-font-size":V,"--n-label-font-weight":m,"--n-label-text-color":S,"--n-value-font-weight":z,"--n-value-font-size":g,"--n-value-prefix-text-color":w,"--n-value-suffix-text-color":C,"--n-value-text-color":R}}),i=u?F("statistic",void 0,s,n):void 0;return{rtlEnabled:l,mergedClsPrefix:t,cssVars:u?void 0:s,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var n;const{mergedClsPrefix:t,$slots:{default:u,label:d,prefix:o,suffix:l}}=this;return(n=this.onRender)===null||n===void 0||n.call(this),r("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},v(d,s=>r("div",{class:`${t}-statistic__label`},this.label||s)),r("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},v(o,s=>s&&r("span",{class:`${t}-statistic-value__prefix`},s)),this.value!==void 0?r("span",{class:`${t}-statistic-value__content`},this.value):v(u,s=>s&&r("span",{class:`${t}-statistic-value__content`},s)),v(l,s=>s&&r("span",{class:`${t}-statistic-value__suffix`},s))))}}),Q={"flex-1":""},X={flex:"","items-center":""},Z=["src"],q={"ml-20":""},G={"text-16":""},J=e("p",{"mt-5":"","text-12":"","op-60":""},"\u4ECA\u5929\u53C8\u662F\u5143\u6C14\u6EE1\u6EE1\u7684\u4E00\u5929",-1),K={"ml-auto":"",flex:"","items-center":""},M=e("a",{href:"https://github.com/zclzone/vue-naive-admin"},[e("img",{allt:"stars",src:"https://badgen.net/github/stars/zclzone/vue-naive-admin"})],-1),ee=e("a",{href:"https://github.com/zclzone/vue-naive-admin"},[e("img",{allt:"forks",src:"https://badgen.net/github/forks/zclzone/vue-naive-admin"})],-1),te={flex:"","flex-wrap":"","justify-between":""},se=e("p",{"op-60":""},"\u4E00\u4E2A\u57FA\u4E8E Vue3.0\u3001Vite\u3001Naive UI \u7684\u8F7B\u91CF\u7EA7\u540E\u53F0\u7BA1\u7406\u6A21\u677F",-1),ae=e("div",{"w-300":"","h-0":""},null,-1),ne=e("div",{"w-300":"","h-0":""},null,-1),ie=e("div",{"w-300":"","h-0":""},null,-1),oe=e("div",{"w-300":"","h-0":""},null,-1),de={__name:"index",setup(n){const t=P();return(u,d)=>{const o=Y,l=D,s=H,i=y;return h(),j(i,{"show-footer":!0},{default:a(()=>[e("div",Q,[c(l,{"rounded-10":""},{default:a(()=>[e("div",X,[e("img",{"rounded-full":"",width:"60",src:p(t).avatar},null,8,Z),e("div",q,[e("p",G,"Hello, "+A(p(t).name),1),J]),e("div",K,[c(o,{label:"\u5F85\u529E",value:4},{suffix:a(()=>[b(" / 10 ")]),_:1}),c(o,{label:"Stars","w-100":"","ml-80":""},{default:a(()=>[M]),_:1}),c(o,{label:"Forks","w-100":"","ml-80":""},{default:a(()=>[ee]),_:1})])])]),_:1}),c(l,{title:"\u9879\u76EE",size:"small",segmented:!0,"mt-15":"","rounded-10":""},{"header-extra":a(()=>[c(s,{text:"",type:"primary"},{default:a(()=>[b("\u66F4\u591A")]),_:1})]),default:a(()=>[e("div",te,[(h(),O(W,null,U(10,m=>c(l,{key:m,class:"w-300 flex-shrink-0 mt-10 mb-10 cursor-pointer","hover:card-shadow":"",title:"Vue Naive Admin",size:"small"},{default:a(()=>[se]),_:2},1024)),64)),ae,ne,ie,oe])]),_:1})])]),_:1})}}};export{de as default};
