import{h as d,k as be,d as N,I as j,J as E,u as H,bE as G,r as U,i as B,p as he,t as P,B as l,a as b,c as r,e as y,b as _,bF as fe,bG as ke,bH as ve,n as ge,D as me,f as O,bh as xe,bi as K,j as pe,bI as Ce,bJ as ye,as as we,bK as Re}from"./index.d3d187e2.js";import{u as V}from"./use-merged-state.6489845b.js";const ze=d("svg",{viewBox:"0 0 64 64",class:"check-icon"},d("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),Se=d("svg",{viewBox:"0 0 100 100",class:"line-icon"},d("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),L=be("n-checkbox-group"),Te={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},Ae=N({name:"CheckboxGroup",props:Te,setup(o){j(()=>{o.onChange!==void 0&&E("checkbox-group","`on-change` is deprecated, please use `on-update:value` instead.")});const{mergedClsPrefixRef:m}=H(o),x=G(o),{mergedSizeRef:w,mergedDisabledRef:S}=x,s=U(o.defaultValue),R=B(()=>o.value),u=V(R,s),c=B(()=>{var h;return((h=u.value)===null||h===void 0?void 0:h.length)||0}),a=B(()=>Array.isArray(u.value)?new Set(u.value):new Set);function $(h,n){const{nTriggerFormInput:p,nTriggerFormChange:C}=x,{onChange:f,"onUpdate:value":k,onUpdateValue:v}=o;if(Array.isArray(u.value)){const i=Array.from(u.value),A=i.findIndex(M=>M===n);h?~A||(i.push(n),v&&l(v,i,{actionType:"check",value:n}),k&&l(k,i,{actionType:"check",value:n}),p(),C(),s.value=i,f&&l(f,i)):~A&&(i.splice(A,1),v&&l(v,i,{actionType:"uncheck",value:n}),k&&l(k,i,{actionType:"uncheck",value:n}),f&&l(f,i),s.value=i,p(),C())}else h?(v&&l(v,[n],{actionType:"check",value:n}),k&&l(k,[n],{actionType:"check",value:n}),f&&l(f,[n]),s.value=[n],p(),C()):(v&&l(v,[],{actionType:"uncheck",value:n}),k&&l(k,[],{actionType:"uncheck",value:n}),f&&l(f,[]),s.value=[],p(),C())}return he(L,{checkedCountRef:c,maxRef:P(o,"max"),minRef:P(o,"min"),valueSetRef:a,disabledRef:S,mergedSizeRef:w,toggleCheckbox:$}),{mergedClsPrefix:m}},render(){return d("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),De=b([r("checkbox",`
 line-height: var(--n-label-line-height);
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 --n-merged-color-table: var(--n-color-table);
 `,[b("&:hover",[r("checkbox-box",[y("border",{border:"var(--n-border-checked)"})])]),b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),_("inside-table",[r("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),_("checked",[r("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[r("checkbox-icon",[b(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),_("indeterminate",[r("checkbox-box",[r("checkbox-icon",[b(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),b(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),_("checked, indeterminate",[b("&:focus:not(:active)",[r("checkbox-box",[y("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),r("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[y("border",{border:"var(--n-border-checked)"})])]),_("disabled",{cursor:"not-allowed"},[_("checked",[r("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[y("border",{border:"var(--n-border-disabled-checked)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),r("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[y("border",{border:"var(--n-border-disabled)"}),r("checkbox-icon",[b(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled)"})])]),y("label",{color:"var(--n-text-color-disabled)"})]),r("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),r("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[y("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),r("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[b(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),fe({left:"1px",top:"1px"})])]),y("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[b("&:empty",{display:"none"})])]),ke(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),ve(r("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),Ie=Object.assign(Object.assign({},O.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Be=N({name:"Checkbox",props:Ie,setup(o){j(()=>{o.onChange&&E("checkbox","`on-change` is deprecated, please use `on-update:checked` instead.")});const m=U(null),{mergedClsPrefixRef:x,inlineThemeDisabled:w,mergedRtlRef:S}=H(o),s=G(o,{mergedSize(e){const{size:g}=o;if(g!==void 0)return g;if(c){const{value:t}=c.mergedSizeRef;if(t!==void 0)return t}if(e){const{mergedSize:t}=e;if(t!==void 0)return t.value}return"medium"},mergedDisabled(e){const{disabled:g}=o;if(g!==void 0)return g;if(c){if(c.disabledRef.value)return!0;const{maxRef:{value:t},checkedCountRef:z}=c;if(t!==void 0&&z.value>=t&&!n.value)return!0;const{minRef:{value:D}}=c;if(D!==void 0&&z.value<=D&&n.value)return!0}return e?e.disabled.value:!1}}),{mergedDisabledRef:R,mergedSizeRef:u}=s,c=ge(L,null),a=U(o.defaultChecked),$=P(o,"checked"),h=V($,a),n=me(()=>{if(c){const e=c.valueSetRef.value;return e&&o.value!==void 0?e.has(o.value):!1}else return h.value===o.checkedValue}),p=O("Checkbox","-checkbox",De,Re,o,x);function C(e){if(c&&o.value!==void 0)c.toggleCheckbox(!n.value,o.value);else{const{onChange:g,"onUpdate:checked":t,onUpdateChecked:z}=o,{nTriggerFormInput:D,nTriggerFormChange:F}=s,I=n.value?o.uncheckedValue:o.checkedValue;t&&l(t,I,e),z&&l(z,I,e),g&&l(g,I,e),D(),F(),a.value=I}}function f(e){R.value||C(e)}function k(e){if(!R.value)switch(e.key){case" ":case"Enter":C(e)}}function v(e){switch(e.key){case" ":e.preventDefault()}}const i={focus:()=>{var e;(e=m.value)===null||e===void 0||e.focus()},blur:()=>{var e;(e=m.value)===null||e===void 0||e.blur()}},A=xe("Checkbox",S,x),M=B(()=>{const{value:e}=u,{common:{cubicBezierEaseInOut:g},self:{borderRadius:t,color:z,colorChecked:D,colorDisabled:F,colorTableHeader:I,colorTableHeaderModal:J,colorTableHeaderPopover:W,checkMarkColor:Y,checkMarkColorDisabled:q,border:Q,borderFocus:X,borderDisabled:Z,borderChecked:ee,boxShadowFocus:oe,textColor:ne,textColorDisabled:re,checkMarkColorDisabledChecked:ae,colorDisabledChecked:ce,borderDisabledChecked:le,labelPadding:ie,labelLineHeight:te,labelFontWeight:de,[K("fontSize",e)]:se,[K("size",e)]:ue}}=p.value;return{"--n-label-line-height":te,"--n-label-font-weight":de,"--n-size":ue,"--n-bezier":g,"--n-border-radius":t,"--n-border":Q,"--n-border-checked":ee,"--n-border-focus":X,"--n-border-disabled":Z,"--n-border-disabled-checked":le,"--n-box-shadow-focus":oe,"--n-color":z,"--n-color-checked":D,"--n-color-table":I,"--n-color-table-modal":J,"--n-color-table-popover":W,"--n-color-disabled":F,"--n-color-disabled-checked":ce,"--n-text-color":ne,"--n-text-color-disabled":re,"--n-check-mark-color":Y,"--n-check-mark-color-disabled":q,"--n-check-mark-color-disabled-checked":ae,"--n-font-size":se,"--n-label-padding":ie}}),T=w?pe("checkbox",B(()=>u.value[0]),M,o):void 0;return Object.assign(s,i,{rtlEnabled:A,selfRef:m,mergedClsPrefix:x,mergedDisabled:R,renderedChecked:n,mergedTheme:p,labelId:Ce(),handleClick:f,handleKeyUp:k,handleKeyDown:v,cssVars:w?void 0:M,themeClass:T==null?void 0:T.themeClass,onRender:T==null?void 0:T.onRender})},render(){var o;const{$slots:m,renderedChecked:x,mergedDisabled:w,indeterminate:S,privateInsideTable:s,cssVars:R,labelId:u,label:c,mergedClsPrefix:a,focusable:$,handleKeyUp:h,handleKeyDown:n,handleClick:p}=this;return(o=this.onRender)===null||o===void 0||o.call(this),d("div",{ref:"selfRef",class:[`${a}-checkbox`,this.themeClass,this.rtlEnabled&&`${a}-checkbox--rtl`,x&&`${a}-checkbox--checked`,w&&`${a}-checkbox--disabled`,S&&`${a}-checkbox--indeterminate`,s&&`${a}-checkbox--inside-table`],tabindex:w||!$?void 0:0,role:"checkbox","aria-checked":S?"mixed":x,"aria-labelledby":u,style:R,onKeyup:h,onKeydown:n,onClick:p,onMousedown:()=>{we("selectstart",window,C=>{C.preventDefault()},{once:!0})}},d("div",{class:`${a}-checkbox-box-wrapper`},"\xA0",d("div",{class:`${a}-checkbox-box`},d(ye,null,{default:()=>this.indeterminate?d("div",{key:"indeterminate",class:`${a}-checkbox-icon`},Se):d("div",{key:"check",class:`${a}-checkbox-icon`},ze)}),d("div",{class:`${a}-checkbox-box__border`}))),c!==null||m.default?d("span",{class:`${a}-checkbox__label`,id:u},m.default?m.default():c):null)}});export{Ae as N,Be as _};
