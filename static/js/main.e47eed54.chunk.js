(this.webpackJsonpproductoapi=this.webpackJsonpproductoapi||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),o=c(31),n=c.n(o),i=(c(37),c(6)),r=(c.p,c(38),c(11)),l=c(10),d=s.a.createContext({}),j=c(2);var u=function(e){e.data;var t=e.id,c=e.data,s=c.price,o=c.name,n=c.image,l=c.stock,u=Object(a.useState)("Purchase"),b=Object(i.a)(u,2),m=b[0],O=b[1],p=Object(a.useState)({backgroundColor:"#0088a9"}),g=Object(i.a)(p,2),h=g[0],x=g[1],f={cursor:"no-drop",backgroundColor:"#c8e0e7"},v=function(){l<1?(O("No stock"),x({backgroundColor:"rgb(136, 0, 0)"})):(O("Purchased"),x({backgroundColor:"green"}))};return Object(j.jsx)(d.Consumer,{children:function(e){return Object(j.jsxs)("div",{className:"prod_card",children:[Object(j.jsx)("div",{className:"prod_img",children:Object(j.jsx)("img",{src:n})}),Object(j.jsxs)("div",{className:"prod_text",children:[Object(j.jsxs)("p",{className:"prod_price",children:["US$ ",s]}),Object(j.jsx)("p",{className:"prod_sku",children:t}),Object(j.jsx)("p",{className:"prod_name",children:o}),Object(j.jsx)(r.b,{to:"/product/"+t,children:Object(j.jsx)("button",{className:"prod_button",children:"See details"})}),e.userLogin&&Object(j.jsx)("button",{className:"prod_button",onClick:v,style:h,children:m}),!e.userLogin&&Object(j.jsx)("button",{className:"prod_button",style:f,"data-title":"You must Log In to buy",children:m})]})]})}})},b=c(21);b.a.initializeApp({apiKey:"AIzaSyCcVddYpkml6FAhkMeRs58zLqY4LnhIcjs",authDomain:"ecommerce-e16eb.firebaseapp.com",projectId:"ecommerce-e16eb",storageBucket:"ecommerce-e16eb.appspot.com",messagingSenderId:"229202654176",appId:"1:229202654176:web:b5a3ad14b1e8ed59623185",measurementId:"G-VCKMGY7WJ1"}),b.a.auth=b.a.auth(),b.a.db=b.a.firestore();var m=b.a;var O=function(e){var t=e.icon,c=e.text,a=e.type,s=e.styles,o=e.click,n=e.classn;return Object(j.jsxs)("button",{className:n||"tool_btn",type:a,style:s,onClick:o,children:[Object(j.jsx)("i",{className:t}),Object(j.jsx)("p",{className:"tool_txt",children:"| "+c})]})},p=c(18),g=c(16);var h=function(e){var t=Object(a.useState)({name:"",price:"",description:"",image:"",stock:""}),c=Object(i.a)(t,2),s=c[0],o=c[1],n=Object(a.useState)("Add item"),r=Object(i.a)(n,2),l=r[0],d=r[1],u=Object(a.useState)("fas fa-plus-circle"),b=Object(i.a)(u,2),h=b[0],x=b[1],f=Object(a.useState)({backgroundColor:"#0088a9"}),v=Object(i.a)(f,2),N=v[0],S=v[1],_=function(){x("fas fa-arrow-circle-right"),S({backgroundColor:"#0088a9"}),d("Add"),o({name:"",price:"",description:"",image:"",stock:""})},y=function(e){var t=e.target.name,c=e.target.value;console.log(t,c),o(Object(g.a)(Object(g.a)({},s),{},Object(p.a)({},t,c)))};return Object(j.jsx)("div",{className:"tool_card",style:e.styles,children:Object(j.jsx)("div",{className:"tool",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.db.collection("products").add({name:s.name,description:s.description,price:s.price,image:s.image,stock:s.stock,sales:0},{merge:!0}).then((function(e){console.log("Doc",e),d("Success"),x("fas fa-thumbs-up"),S({backgroundColor:"green"})})).catch((function(e){console.log("Error",e),x("fas fa-thumbs-down"),S({backgroundColor:"rgb(136, 0, 0)"}),d("Error"),setTimeout(_,3e3)}))},className:"tool_form",children:[Object(j.jsx)("input",{type:"text",name:"image",value:s.image,onChange:y,className:"tool_input",placeholder:"Image (Enter the URL)"}),Object(j.jsx)("input",{type:"text",name:"name",value:s.name,onChange:y,className:"tool_input",placeholder:"Name"}),Object(j.jsx)("input",{type:"text",name:"description",value:s.description,onChange:y,className:"tool_input",placeholder:"Description"}),Object(j.jsx)("input",{type:"number",min:"1",name:"price",value:s.price,onChange:y,className:"tool_input",placeholder:"Price"}),Object(j.jsx)("input",{type:"number",min:"1",name:"stock",value:s.stock,onChange:y,className:"tool_input",placeholder:"Stock"}),Object(j.jsx)(O,{icon:h,text:l,type:"sumbit",styles:N})]})})})};var x=function(e){return Object(j.jsxs)("div",{className:"load_card",children:[Object(j.jsx)("p",{className:"load_text",children:"loading"}),Object(j.jsxs)("div",{className:"load",children:[Object(j.jsx)("div",{className:"load_move"}),Object(j.jsx)("div",{className:"load_static"})]})]})};var f=function(e){var t=Object(a.useState)([]),c=Object(i.a)(t,2),s=c[0],o=c[1],n=Object(a.useState)(!0),r=Object(i.a)(n,2),l=r[0],d=r[1],b=Object(a.useState)({opacity:0}),p=Object(i.a)(b,2),g=p[0],f=p[1],v=Object(a.useState)(!0),N=Object(i.a)(v,2),S=N[0],_=N[1];return Object(a.useEffect)((function(){m.db.collection("products").get().then((function(e){console.log(e.docs),o(e.docs),d(!1)}))}),[]),l?Object(j.jsx)(x,{}):Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("p",{className:"home_title",children:"Products List"}),s.map((function(e){return Object(j.jsx)(u,{id:e.id,data:e.data()})})),Object(j.jsx)("div",{className:"tool_btn_card",children:Object(j.jsx)(O,{text:"Add",icon:"fas fa-plus-circle",click:function(){S?(f({opacity:1}),_(!1)):(f({opacity:0}),_(!0))}})}),Object(j.jsx)("div",{className:"tools_card",children:Object(j.jsx)(h,{styles:g})})]})};var v=function(){var e=Object(a.useContext)(d),t=Object(a.useState)({email:"",pass:""}),c=Object(i.a)(t,2),s=c[0],o=c[1],n=Object(a.useState)("Continue"),u=Object(i.a)(n,2),b=u[0],h=u[1],x=Object(a.useState)("fas fa-arrow-circle-right"),f=Object(i.a)(x,2),v=f[0],N=f[1],S=Object(a.useState)({backgroundColor:"#0088a9"}),_=Object(i.a)(S,2),y=_[0],C=_[1],k=(Object(l.e)(),function(){N("fas fa-arrow-circle-right"),C({backgroundColor:"#0088a9"}),h("Continue"),o({email:"",pass:""})}),I=function(e){var t=e.target.name,c=e.target.value;console.log(t,c),o(Object(g.a)(Object(g.a)({},s),{},Object(p.a)({},t,c)))};return Object(j.jsx)("div",{className:"login",children:Object(j.jsxs)("div",{className:"log_card",children:[Object(j.jsx)("p",{className:"log_title",children:"Log in"}),Object(j.jsxs)("form",{className:"log_form",onSubmit:function(t){t.preventDefault(),m.auth.signInWithEmailAndPassword(s.email,s.pass).then((function(t){h("Success"),N("fas fa-thumbs-up"),C({backgroundColor:"green"}),m.db.collection("users").where("userId","==",t.user.uid).get().then((function(t){e.loginUser(t.docs[0].data())})),console.log("Login ok",t)})).catch((function(e){N("fas fa-thumbs-down"),C({backgroundColor:"rgb(136, 0, 0)"}),h("Error"),setTimeout(k,3e3),console.log("Error",e)}))},children:[Object(j.jsxs)("div",{className:"log_field",children:[Object(j.jsx)("input",{type:"email",value:s.email,onChange:I,placeholder:"Email",name:"email",required:!0}),Object(j.jsx)("div",{className:"underline"})]}),Object(j.jsxs)("div",{className:"log_field",children:[Object(j.jsx)("input",{type:"password",value:s.pass,onChange:I,placeholder:"Password",name:"pass",required:!0}),Object(j.jsx)("div",{className:"underline"})]}),Object(j.jsx)("p",{className:"log_pass",children:"Forgot password?"}),Object(j.jsx)(O,{icon:v,text:b,type:"sumbit",styles:y,classn:"log_btn"}),Object(j.jsxs)("div",{className:"log_signup",children:["New to e-commerce? ",Object(j.jsx)(r.b,{to:"/signup",children:"Sign up"})]})]})]})})};var N=function(){var e=Object(a.useState)({name:"",lastname:"",email:"",pass:"",username:""}),t=Object(i.a)(e,2),c=t[0],s=t[1],o=Object(a.useState)("Continue"),n=Object(i.a)(o,2),l=n[0],d=n[1],u=Object(a.useState)("fas fa-arrow-circle-right"),b=Object(i.a)(u,2),h=b[0],x=b[1],f=Object(a.useState)({backgroundColor:"#0088a9"}),v=Object(i.a)(f,2),N=v[0],S=v[1],_=Object(a.useState)({opacity:0}),y=Object(i.a)(_,2),C=y[0],k=y[1],I=function(){x("fas fa-arrow-circle-right"),S({backgroundColor:"#0088a9"}),d("Continue"),s({email:"",pass:""})},E=function(e){var t=e.target.name,a=e.target.value;console.log(t,a),s(Object(g.a)(Object(g.a)({},c),{},Object(p.a)({},t,a)))};return Object(j.jsx)("div",{className:"signup",children:Object(j.jsxs)("div",{className:"log_card",children:[Object(j.jsx)("p",{className:"log_title",children:"Sign up"}),Object(j.jsxs)("form",{className:"log_form",onSubmit:function(e){e.preventDefault(),console.log(c),m.auth.createUserWithEmailAndPassword(c.email,c.pass).then((function(e){console.log("Registro",e.user.uid),m.db.collection("users").add({name:c.name,lastname:c.lastname,email:c.email,userId:e.user.uid}).then((function(e){d("Success"),x("fas fa-thumbs-up"),S({backgroundColor:"green"}),setTimeout(I,3e3),k({opacity:1})})).catch((function(e){console.log("Error add",e)}))})).catch((function(e){x("fas fa-thumbs-down"),S({backgroundColor:"rgb(136, 0, 0)"}),d("Error"),setTimeout(I,3e3),console.log("Error",e)}))},children:[Object(j.jsxs)("div",{className:"log_field",children:[Object(j.jsx)("input",{type:"text",value:c.name,onChange:E,placeholder:"Name",name:"name",required:!0}),Object(j.jsx)("div",{className:"underline"})]}),Object(j.jsxs)("div",{className:"log_field",children:[Object(j.jsx)("input",{type:"text",value:c.lastname,onChange:E,placeholder:"Last name",name:"lastname",required:!0}),Object(j.jsx)("div",{className:"underline"})]}),Object(j.jsxs)("div",{className:"log_field",children:[Object(j.jsx)("input",{type:"email",value:c.email,onChange:E,placeholder:"Email",name:"email",required:!0}),Object(j.jsx)("div",{className:"underline"})]}),Object(j.jsxs)("div",{className:"log_field",children:[Object(j.jsx)("input",{type:"password",value:c.pass,onChange:E,placeholder:"Create a password",name:"pass",required:!0}),Object(j.jsx)("div",{className:"underline"})]}),Object(j.jsx)(O,{icon:h,text:l,type:"sumbit",styles:N,classn:"log_btn"}),Object(j.jsx)("p",{className:"log_pass",style:C,children:Object(j.jsx)(r.b,{to:"/login",children:"Go to login"})})]})]})})};var S=function(e){var t=Object(a.useState)({color:"#0088a9"}),c=Object(i.a)(t,2),s=c[0],o=c[1],n=Object(a.useState)("fas fa-user"),l=Object(i.a)(n,2),u=l[0],b=l[1],m=function(){o({color:"rgb(182, 66, 66)"}),b("fas fa-times-circle")},O=function(){o({color:"#0088a9"}),b("fas fa-user")};return Object(j.jsx)(d.Consumer,{children:function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("li",{className:"nav_logo",children:"E-CoMMERCE"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"nav_links",children:[e.userLogin&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsxs)("li",{onClick:function(){return e.logoutUser(!1)},onMouseOver:m,onMouseOut:O,style:s,className:"username-t","data-title":"log out",children:[Object(j.jsx)("i",{className:u}),"| ",e.userInfo.name]})]}),!e.userLogin&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(r.b,{to:"/login",children:Object(j.jsx)("li",{children:"Log In"})}),Object(j.jsx)(r.b,{to:"/signup",children:Object(j.jsx)("li",{className:"signup-t",children:"Sign Up"})})]})]})})]}),Object(j.jsxs)("header",{className:"header_alt",children:[Object(j.jsx)("li",{className:"nav_logo",children:"E-CoMMERCE"}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{className:"nav_links",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("li",{children:"Home"})}),Object(j.jsx)(r.b,{to:"/login",children:Object(j.jsx)("li",{children:"Log in"})}),Object(j.jsx)(r.b,{to:"/signup",children:Object(j.jsx)("li",{className:"signup-t",children:"Sign up"})})]})})]})]})}})};var _=function(e){var t=e.id,c=e.data,s=c.price,o=c.name,n=c.image,r=c.description,l=c.stock,u=c.sales,b=Object(a.useState)("PURCHASE"),m=Object(i.a)(b,2),O=m[0],p=m[1],g=Object(a.useState)({backgroundColor:"#0088a9"}),h=Object(i.a)(g,2),x=h[0],f=h[1],v={cursor:"no-drop",backgroundColor:"#a4d0db"},N=function(){l<1?(p("NO STOCK"),f({backgroundColor:"rgb(136, 0, 0)"})):(p("PURCHASED"),f({backgroundColor:"green"}))};return Object(j.jsx)(d.Consumer,{children:function(e){return Object(j.jsxs)("div",{className:"prod-detail_card",children:[Object(j.jsx)("div",{className:"prod-detail_img",children:Object(j.jsx)("img",{src:n})}),Object(j.jsxs)("div",{className:"prod-detail_text",children:[Object(j.jsxs)("p",{className:"prod-detail_sales",children:[u," sold"]}),Object(j.jsx)("p",{className:"prod-detail_name",children:o}),Object(j.jsx)("p",{className:"prod-detail_sku",children:t}),Object(j.jsx)("p",{className:"prod-detail_description",children:r}),Object(j.jsxs)("p",{className:"prod-detail_price",children:["US$ ",s]}),e.userLogin&&Object(j.jsx)("button",{className:"prod-detail_button",onClick:N,style:x,children:O}),!e.userLogin&&Object(j.jsx)("button",{className:"prod-detail_button",style:v,"data-title":"You must Log In to buy",children:O}),Object(j.jsxs)("p",{className:"prod-detail_stock",children:["(",l," units left)"]})]})]})}})};var y=function(e){var t=e.match.params.id,c=Object(a.useState)({}),s=Object(i.a)(c,2),o=s[0],n=s[1],r=Object(a.useState)(!0),l=Object(i.a)(r,2),d=l[0],u=l[1],b=Object(a.useState)("Save changes"),x=Object(i.a)(b,2),f=x[0],v=x[1],N=Object(a.useState)("fas fa-save"),S=Object(i.a)(N,2),y=S[0],C=S[1],k=Object(a.useState)({backgroundColor:"#0088a9"}),I=Object(i.a)(k,2),E=I[0],w=I[1],L=Object(a.useState)("delete item"),z=Object(i.a)(L,2),D=z[0],P=z[1],A=Object(a.useState)("fas fa-minus-circle"),U=Object(i.a)(A,2),M=U[0],F=U[1],R=Object(a.useState)({backgroundColor:"#0088a9"}),q=Object(i.a)(R,2),T=q[0],H=q[1],J=Object(a.useState)({name:"",price:"",description:"",image:"",stock:""}),Y=Object(i.a)(J,2),G=Y[0],B=Y[1],K=Object(a.useState)({opacity:0}),W=Object(i.a)(K,2),V=W[0],$=W[1],Q=Object(a.useState)(!0),X=Object(i.a)(Q,2),Z=X[0],ee=X[1],te=Object(a.useState)({opacity:0}),ce=Object(i.a)(te,2),ae=ce[0],se=ce[1],oe=Object(a.useState)(!0),ne=Object(i.a)(oe,2),ie=ne[0],re=ne[1],le=Object(a.useState)({opacity:0}),de=Object(i.a)(le,2),je=de[0],ue=de[1],be=Object(a.useState)(!0),me=Object(i.a)(be,2),Oe=me[0],pe=me[1];Object(a.useEffect)((function(){m.db.doc("products/"+t).get().then((function(e){n(e),u(!1),B({name:e.data().name,description:e.data().description,price:e.data().price,image:e.data().image,stock:e.data().stock})}))}),[]);var ge=function(e){var t=e.target.name,c=e.target.value;console.log(t,c),B(Object(g.a)(Object(g.a)({},G),{},Object(p.a)({},t,c)))};return d?Object(j.jsx)("p",{className:"loader",children:"cargando..."}):Object(j.jsxs)("div",{className:"details",children:[Object(j.jsx)("p",{className:"prod-detail_title",children:"Product detail"}),Object(j.jsx)(_,{data:o.data(),id:o.id}),Object(j.jsxs)("div",{className:"tool_btn_card",children:[Object(j.jsx)(O,{text:"Add",icon:"fas fa-plus-circle",click:function(){ie?(se({opacity:1,zIndex:1}),re(!1),$({opacity:0,zIndex:0}),ee(!0),ue({opacity:0,zIndex:0}),pe(!0)):(se({opacity:0,zIndex:0}),re(!0))}}),Object(j.jsx)(O,{text:"Edit",icon:"fas fa-edit",click:function(){Z?($({opacity:1,zIndex:1}),ee(!1),se({opacity:0,zIndex:0}),re(!0),ue({opacity:0,zIndex:0}),pe(!0)):($({opacity:0,zIndex:0}),ee(!0))}}),Object(j.jsx)(O,{text:"Delete",icon:"fas fa-minus-circle",click:function(){Oe?(ue({opacity:1,zIndex:1}),pe(!1),$({opacity:0,zIndex:0}),ee(!0),se({opacity:0,zIndex:0}),re(!0)):(ue({opacity:0,zIndex:0}),pe(!0))}})]}),Object(j.jsxs)("div",{className:"tools_card",children:[Object(j.jsx)("div",{className:"tool_card",style:V,children:Object(j.jsx)("div",{className:"tool",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.db.doc("products/"+t).set({name:G.name,description:G.description,price:G.price,image:G.image,stock:G.stock},{merge:!0}).then((function(e){console.log("Doc",e),v("Success"),C("fas fa-thumbs-up"),w({backgroundColor:"green"})})).catch((function(e){console.log("Error",e),e(),C("fas fa-arrow-circle-right"),w({backgroundColor:"#0088a9"}),v("Add"),B({name:"",price:"",description:"",image:"",stock:""})}))},className:"tool_form",children:[Object(j.jsx)("input",{type:"text",name:"image",value:G.image,onChange:ge,className:"tool_input",placeholder:"Image (Enter the URL)"}),Object(j.jsx)("input",{type:"text",name:"name",value:G.name,onChange:ge,className:"tool_input",placeholder:"Name"}),Object(j.jsx)("input",{type:"text",name:"description",value:G.description,onChange:ge,className:"tool_input",placeholder:"Description"}),Object(j.jsx)("input",{type:"number",min:"1",name:"price",value:G.price,onChange:ge,className:"tool_input",placeholder:"Price"}),Object(j.jsx)("input",{type:"number",min:"1",name:"stock",value:G.stock,onChange:ge,className:"tool_input",placeholder:"Stock"}),Object(j.jsx)(O,{icon:y,text:f,type:"sumbit",styles:E})]})})}),Object(j.jsx)(h,{styles:ae}),Object(j.jsx)("div",{className:"tool_card",style:je,children:Object(j.jsx)("div",{className:"tool",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m.db.doc("products/"+t).delete().then((function(e){console.log("Doc",e),H({backgroundColor:"green"}),F("fas fa-thumbs-up"),P("success")})).catch((function(e){console.log("Error",e),F("fas fa-thumbs-down"),H({backgroundColor:"rgb(136, 0, 0)"}),P("Error")}))},className:"tool_form",children:[Object(j.jsx)("p",{className:"tool_delete",children:"are you sure want to delete item?"}),Object(j.jsx)(O,{text:D,icon:M,styles:T,type:"sumbit"})]})})})]})]})};var C=function(e){return Object(j.jsx)(r.b,{to:"/",className:"goHome_button",children:Object(j.jsx)(O,{text:"Go home",icon:"fas fa-home"})})};var k=function(e){var t=Object(a.useState)(localStorage.getItem("login")),c=Object(i.a)(t,2),s=c[0],o=c[1],n=Object(a.useState)(JSON.parse(localStorage.getItem("userInfo"))),r=Object(i.a)(n,2),l=r[0],u=r[1];return Object(j.jsx)(d.Provider,{value:{userLogin:s,userInfo:l,loginUser:function(e){o(!0),localStorage.setItem("login",!0),localStorage.setItem("userInfo",JSON.stringify(e)),u(e)},logoutUser:function(){o(!1),localStorage.removeItem("login"),u({})}},children:e.children})};var I=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2);return t[0],t[1],Object(j.jsx)(k,{children:Object(j.jsxs)(r.a,{children:[Object(j.jsx)(S,{}),Object(j.jsx)(l.a,{path:"/",component:f,exact:!0}),Object(j.jsx)(l.a,{path:"/ecommerce",component:C,exact:!0}),Object(j.jsx)(l.a,{path:"/login",component:v,exact:!0}),Object(j.jsx)(l.a,{path:"/signup",component:N,exact:!0}),Object(j.jsx)(l.a,{path:"/product/:id",component:y,exact:!0})]})})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,48)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),o(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(I,{})}),document.getElementById("root")),E()}},[[47,1,2]]]);
//# sourceMappingURL=main.e47eed54.chunk.js.map