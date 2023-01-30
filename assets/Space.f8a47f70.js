import{bZ as B,m as C,d as G,u as R,f as v,bh as j,i as E,bi as _,b_ as I,b$ as b,c0 as L,h as x}from"./index.d3d187e2.js";function M(e,a="default",o=[]){const s=e.$slots[a];return s===void 0?o:s()}const P=()=>B,T={name:"Space",self:P},A=T;let h;const O=()=>{if(!C)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const a=e.scrollHeight===1;return document.body.removeChild(e),h=a}return h},W=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),F=G({name:"Space",props:W,setup(e){const{mergedClsPrefixRef:a,mergedRtlRef:o}=R(e),n=v("Space","-space",void 0,A,e,a),s=j("Space",o,a);return{useGap:O(),rtlEnabled:s,mergedClsPrefix:a,margin:E(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[_("gap",t)]:g}}=n.value,{row:c,col:u}=I(g);return{horizontal:b(u),vertical:b(c)}})}},render(){const{vertical:e,align:a,inline:o,justify:n,itemStyle:s,margin:t,wrap:g,mergedClsPrefix:c,rtlEnabled:u,useGap:l,wrapItem:w,internalUseGap:S}=this,d=L(M(this));if(!d.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,i=`${t.vertical/2}px`,p=d.length-1,f=n.startsWith("space-");return x("div",{role:"none",class:[`${c}-space`,u&&`${c}-space--rtl`],style:{display:o?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(n)?"flex-"+n:n,flexWrap:!g||e?"nowrap":"wrap",marginTop:l||e?"":`-${i}`,marginBottom:l||e?"":`-${i}`,alignItems:a,gap:l?`${t.vertical}px ${t.horizontal}px`:""}},!w&&(l||S)?d:d.map((z,r)=>x("div",{role:"none",style:[s,{maxWidth:"100%"},l?"":e?{marginBottom:r!==p?$:""}:u?{marginLeft:f?n==="space-between"&&r===p?"":m:r!==p?y:"",marginRight:f?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}:{marginRight:f?n==="space-between"&&r===p?"":m:r!==p?y:"",marginLeft:f?n==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}]},z)))}});export{F as _,M as g};
