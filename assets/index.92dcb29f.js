var v=(p,g,r)=>new Promise((l,o)=>{var f=n=>{try{i(r.next(n))}catch(e){o(e)}},c=n=>{try{i(r.throw(n))}catch(e){o(e)}},i=n=>n.done?l(n.value):Promise.resolve(n.value).then(f,c);i((r=r.apply(p,g)).next())});import{_ as R}from"./AppPage.a8c5b75a.js";import{_ as S}from"./logo.37098b41.js";import{by as $,O as N,P as V,r as w,bz as h,bA as B,R as A,S as b,ah as C,V as a,Q as D,Z as t,a1 as u,X as y,Y as K,bB as L,bC as P,bD as T,bv as q}from"./index.d3d187e2.js";import{_ as z}from"./Checkbox.b31e764e.js";import{_ as U}from"./Input.0943ddb4.js";import"./plugin-vue_export-helper.f63bf49c.js";import"./use-merged-state.6489845b.js";const Y="/vue-naive-admin/assets/login_banner.6e96327c.webp",M="/vue-naive-admin/assets/login_bg.ed2739b3.webp",O={login:p=>$.post("/auth/login",p,{noNeedToken:!0})},Q={style:{transform:"translateY(25px)"},class:"m-auto p-15 f-c-c min-w-345 max-w-700 rounded-10 card-shadow bg-white bg-opacity-60"},X=t("div",{"w-380":"",hidden:"","md:block":"","px-20":"","py-35":""},[t("img",{src:Y,"w-full":"",alt:"login_banner"})],-1),Z={"w-320":"","flex-col":"","px-20":"","py-35":""},j={"f-c-c":"","text-24":"","font-normal":"",color:"#6a6a6a"},E={"mt-30":""},F={"mt-30":""},G={"mt-20":""},H={"mt-20":""},re={__name:"index",setup(p){const g="Vue Naive Admin",r=N(),{query:l}=V(),o=w({name:"",password:""});f();function f(){const e=h.get("loginInfo");e&&(o.value.name=e.name||"",o.value.password=e.password||"")}const c=B("isRemember",!1),i=w(!1);function n(){return v(this,null,function*(){const{name:e,password:s}=o.value;if(!e||!s){$message.warning("\u8BF7\u8F93\u5165\u7528\u6237\u540D\u548C\u5BC6\u7801");return}try{i.value=!0,$message.loading("\u6B63\u5728\u9A8C\u8BC1...");const d=yield O.login({name:e,password:s.toString()});if($message.success("\u767B\u5F55\u6210\u529F"),P(d.data.token),c.value?h.set("loginInfo",{name:e,password:s}):h.remove("loginInfo"),yield T(),l.redirect){const _=l.redirect;Reflect.deleteProperty(l,"redirect"),r.push({path:_,query:l})}else r.push("/")}catch(d){console.error(d),$message.removeMessage()}i.value=!1})}return(e,s)=>{const d=S,_=U,x=z,k=q,I=R;return D(),A(I,{"show-footer":!0,"bg-cover":"",style:C({backgroundImage:`url(${a(M)})`})},{default:b(()=>[t("div",Q,[X,t("div",Z,[t("h5",j,[u(d,{"mr-10":"","text-50":"","color-primary":""}),y(K(a(g)),1)]),t("div",E,[u(_,{value:a(o).name,"onUpdate:value":s[0]||(s[0]=m=>a(o).name=m),autofocus:"",class:"text-16 items-center h-50 pl-10",placeholder:"admin",maxlength:20},null,8,["value"])]),t("div",F,[u(_,{value:a(o).password,"onUpdate:value":s[1]||(s[1]=m=>a(o).password=m),class:"text-16 items-center h-50 pl-10",type:"password","show-password-on":"mousedown",placeholder:"123456",maxlength:20,onKeydown:L(n,["enter"])},null,8,["value","onKeydown"])]),t("div",G,[u(x,{checked:a(c),label:"\u8BB0\u4F4F\u6211","on-update:checked":m=>c.value=m},null,8,["checked","on-update:checked"])]),t("div",H,[u(k,{"w-full":"","h-50":"","rounded-5":"","text-16":"",type:"primary",loading:a(i),onClick:n},{default:b(()=>[y(" \u767B\u5F55 ")]),_:1},8,["loading"])])])])]),_:1},8,["style"])}}};export{re as default};
