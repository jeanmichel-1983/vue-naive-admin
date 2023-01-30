import{c as v,b as d,a as u,f as m,d as b,u as _,bo as y,i as l,j as C,w as $,h as c,ba as x,Q as z,T as S,Z as I,V as w,bp as R}from"./index.d3d187e2.js";import{f as k}from"./use-merged-state.6489845b.js";const B=v("icon",`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`,[d("color-transition",{transition:"color .3s var(--n-bezier)"}),d("depth",{color:"var(--n-color)"},[u("svg",{opacity:"var(--n-opacity)",transition:"opacity .3s var(--n-bezier)"})]),u("svg",{height:"1em",width:"1em"})]),N=Object.assign(Object.assign({},m.props),{depth:[String,Number],size:[Number,String],color:String,component:Object}),h=b({_n_icon__:!0,name:"Icon",inheritAttrs:!1,props:N,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:o}=_(e),i=m("Icon","-icon",B,y,e,n),s=l(()=>{const{depth:r}=e,{common:{cubicBezierEaseInOut:a},self:f}=i.value;if(r!==void 0){const{color:p,[`opacity${r}Depth`]:g}=f;return{"--n-bezier":a,"--n-color":p,"--n-opacity":g}}return{"--n-bezier":a,"--n-color":"","--n-opacity":""}}),t=o?C("icon",l(()=>`${e.depth||"d"}`),s,e):void 0;return{mergedClsPrefix:n,mergedStyle:l(()=>{const{size:r,color:a}=e;return{fontSize:k(r),color:a}}),cssVars:o?void 0:s,themeClass:t==null?void 0:t.themeClass,onRender:t==null?void 0:t.onRender}},render(){var e;const{$parent:n,depth:o,mergedClsPrefix:i,component:s,onRender:t,themeClass:r}=this;return!((e=n==null?void 0:n.$options)===null||e===void 0)&&e._n_icon__&&$("icon","don't wrap `n-icon` inside `n-icon`"),t==null||t(),c("i",x(this.$attrs,{role:"img",class:[`${i}-icon`,r,{[`${i}-icon--depth`]:o,[`${i}-icon--color-transition`]:o!==void 0}],style:[this.cssVars,this.mergedStyle]}),s?c(s):this.$slots)}}),P={"aria-hidden":"true",width:"1em",height:"1em"},V=["xlink:href","fill"],j={__name:"SvgIcon",props:{icon:{type:String,required:!0},prefix:{type:String,default:"icon-custom"},color:{type:String,default:"currentColor"}},setup(e){const n=e,o=l(()=>`#${n.prefix}-${n.icon}`);return(i,s)=>(z(),S("svg",P,[I("use",{"xlink:href":w(o),fill:e.color},null,8,V)]))}};function D(e,n={size:12}){return()=>c(h,n,{default:()=>c(R,{icon:e})})}function E(e,n={size:12}){return()=>c(h,n,{default:()=>c(j,{icon:e})})}export{h as N,D as a,E as r};
