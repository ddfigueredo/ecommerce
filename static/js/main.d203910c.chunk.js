(this.webpackJsonpproductoapi=this.webpackJsonpproductoapi||[]).push([[0],{47:function(e,t,c){},48:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),n=c(40),i=c.n(n),o=(c(47),c.p,c(48),c(12)),l=c(10),r=c(19),d=c(17),j=c(6),b=c(2);var u=function(e){e.data;var t=e.id,c=e.data,s=c.price,n=c.name,i=c.image,l=c.stock,r=Object(a.useState)("Purchase"),d=Object(j.a)(r,2),u=d[0],m=d[1],p=Object(a.useState)({backgroundColor:"#0088a9"}),O=Object(j.a)(p,2),h=O[0],x=O[1];return Object(b.jsxs)("div",{className:"prod_card",children:[Object(b.jsx)("div",{className:"prod_img",children:Object(b.jsx)("img",{src:i})}),Object(b.jsxs)("div",{className:"prod_text",children:[Object(b.jsxs)("p",{className:"prod_price",children:["US$ ",s]}),Object(b.jsx)("p",{className:"prod_name",children:n}),Object(b.jsx)(o.b,{to:"/product/"+t,children:Object(b.jsx)("button",{className:"prod_button",children:"See details"})}),Object(b.jsx)("button",{className:"prod_button",onClick:function(){l<1?(m("No stock"),x({backgroundColor:"rgb(136, 0, 0)"})):(m("Purchased"),x({backgroundColor:"green"}))},style:h,children:u})]})]})},m=c(22);m.a.initializeApp({apiKey:"AIzaSyCcVddYpkml6FAhkMeRs58zLqY4LnhIcjs",authDomain:"ecommerce-e16eb.firebaseapp.com",projectId:"ecommerce-e16eb",storageBucket:"ecommerce-e16eb.appspot.com",messagingSenderId:"229202654176",appId:"1:229202654176:web:b5a3ad14b1e8ed59623185",measurementId:"G-VCKMGY7WJ1"}),m.a.auth=m.a.auth(),m.a.db=m.a.firestore();var p=m.a;var O=function(e){var t=e.icon,c=e.text,a=e.click,s=e.scndClass;return Object(b.jsxs)("div",{className:"buttonWico "+s||!1,onClick:a,children:[Object(b.jsx)("i",{className:t+" buttonWico_icon"}),Object(b.jsx)("p",{className:"buttonWico_text",children:c})]})},h=c(42);c.n(h).a.create({baseURL:"https://jsonfy.com/"});var x=function(e){var t=Object(a.useState)([]),c=Object(j.a)(t,2),s=c[0],n=c[1],i=Object(a.useState)(!0),o=Object(j.a)(i,2),l=o[0],m=o[1],h=Object(a.useState)({name:"",price:"",description:"",image:"",stock:""}),x=Object(j.a)(h,2),g=x[0],v=x[1],N=Object(a.useState)("ADD ITEM"),f=Object(j.a)(N,2),_=f[0],C=f[1],S=Object(a.useState)({backgroundColor:"#0088a9"}),k=Object(j.a)(S,2),y=k[0],E=k[1],D=Object(a.useState)({opacity:0}),A=Object(j.a)(D,2),I=A[0],w=A[1],L=Object(a.useState)(!0),P=Object(j.a)(L,2),W=P[0],R=P[1];Object(a.useEffect)((function(){p.db.collection("products").get().then((function(e){console.log(e.docs),n(e.docs),m(!1)}))}),[]);var M=function(e){var t=e.target.name,c=e.target.value;console.log(t,c),v(Object(d.a)(Object(d.a)({},g),{},Object(r.a)({},t,c)))};return l?Object(b.jsx)("p",{className:"loader",children:"cargando..."}):Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("p",{className:"home_title",children:"Products List"}),s.map((function(e){return Object(b.jsx)(u,{id:e.id,data:e.data()})})),Object(b.jsx)("div",{className:"buttonWico-home_card",children:Object(b.jsx)(O,{text:"| Add",icon:"fas fa-plus-circle",scndClass:"buttonWico-home",click:function(){W?(w({opacity:1}),R(!1)):(w({opacity:0}),R(!0))}})}),Object(b.jsx)("div",{className:"add_card",style:I,children:Object(b.jsx)("div",{className:"add_item",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.db.collection("products").add({name:g.name,description:g.description,price:g.price,image:g.image,stock:g.stock,sales:0},{merge:!0}).then((function(e){console.log("Doc",e),E({backgroundColor:"green"}),C("ITTEM ADDED")})).catch((function(e){console.log("Error",e),E({backgroundColor:"rgb(136, 0, 0)"}),C("ITEM NOT ADDED")}))},className:"add_form",children:[Object(b.jsx)("input",{type:"text",name:"image",value:g.image,onChange:M,className:"add_input",placeholder:"Image (Enter the URL)"}),Object(b.jsx)("input",{type:"number",min:"1",name:"stock",value:g.stock,onChange:M,className:"add_input",placeholder:"Stock"}),Object(b.jsx)("input",{type:"text",name:"name",value:g.name,onChange:M,className:"add_input",placeholder:"Name"}),Object(b.jsx)("input",{type:"text",name:"description",value:g.description,onChange:M,className:"add_input",placeholder:"Description"}),Object(b.jsx)("input",{type:"number",min:"1",name:"price",value:g.price,onChange:M,className:"add_input",placeholder:"Price"}),Object(b.jsx)("button",{type:"sumbit",className:"save",style:y,children:_})]})})})]})};var g=function(){var e=Object(a.useState)({email:"",pass:""}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("| Continue"),i=Object(j.a)(n,2),u=i[0],m=(i[1],Object(a.useState)("fas fa-arrow-circle-right")),O=Object(j.a)(m,2),h=O[0],x=(O[1],Object(a.useState)({backgroundColor:"#0088a9"})),g=Object(j.a)(x,2),v=g[0],N=(g[1],Object(l.e)()),f=function(e){var t=e.target.name,a=e.target.value;console.log(t,a),s(Object(d.a)(Object(d.a)({},c),{},Object(r.a)({},t,a)))};return Object(b.jsx)("div",{className:"login",children:Object(b.jsxs)("div",{className:"log_card",children:[Object(b.jsx)("p",{className:"log_title",children:"Log in"}),Object(b.jsxs)("form",{className:"log_form",onSubmit:function(e){e.preventDefault(),console.log(c),p.auth.signInWithEmailAndPassword(c.email,c.pass).then((function(e){console.log("Login OK",e),N.push("/")})).catch((function(e){console.log("Error",e),alert("Invalid user/password")}))},children:[Object(b.jsxs)("div",{className:"log_field",children:[Object(b.jsx)("input",{type:"email",value:c.email,onChange:f,placeholder:"Email",name:"email",required:!0}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsxs)("div",{className:"log_field",children:[Object(b.jsx)("input",{type:"password",value:c.pass,onChange:f,placeholder:"Password",name:"pass",required:!0}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsx)("p",{className:"log_pass",children:"Forgot password?"}),Object(b.jsxs)("button",{className:"log_button",type:"sumbit",style:v,children:[Object(b.jsx)("i",{className:h+" buttonWico_icon"}),Object(b.jsx)("p",{className:"buttonWico_text",children:u})]}),Object(b.jsxs)("div",{className:"log_signup",children:["New to e-commerce? ",Object(b.jsx)(o.b,{to:"/signup",children:"Sign up"})]})]})]})})};var v=function(){var e=Object(a.useState)({name:"",lastname:"",email:"",pass:"",cpass:""}),t=Object(j.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)("| Continue"),i=Object(j.a)(n,2),o=i[0],l=i[1],u=Object(a.useState)("fas fa-arrow-circle-right"),m=Object(j.a)(u,2),O=m[0],h=m[1],x=Object(a.useState)({backgroundColor:"#0088a9"}),g=Object(j.a)(x,2),v=g[0],N=g[1],f=function(e){var t=e.target.name,a=e.target.value;console.log(t,a),s(Object(d.a)(Object(d.a)({},c),{},Object(r.a)({},t,a)))};return Object(b.jsx)("div",{className:"signup",children:Object(b.jsxs)("div",{className:"log_card",children:[Object(b.jsx)("p",{className:"log_title",children:"Sign up"}),Object(b.jsxs)("form",{className:"log_form",onSubmit:function(e){e.preventDefault(),console.log(c),p.auth.createUserWithEmailAndPassword(c.email,c.pass).then((function(e){console.log("Registro",e.user.uid),p.db.collection("users").add({name:c.name,lastname:c.lastname,email:c.email,userId:e.user.uid}).then((function(e){l("| Success"),h("fas fa-thumbs-up"),N({backgroundColor:"green"})})).catch((function(e){console.log("Error add",e)}))})).catch((function(e){console.log("Error",e)}))},children:[Object(b.jsxs)("div",{className:"log_field",children:[Object(b.jsx)("input",{type:"text",value:c.name,onChange:f,placeholder:"Name",name:"name",required:!0}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsxs)("div",{className:"log_field",children:[Object(b.jsx)("input",{type:"text",value:c.lastname,onChange:f,placeholder:"Last name",name:"lastname",required:!0}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsxs)("div",{className:"log_field",children:[Object(b.jsx)("input",{type:"email",value:c.email,onChange:f,placeholder:"Email",name:"email",required:!0}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsxs)("div",{className:"log_field",children:[Object(b.jsx)("input",{type:"password",value:c.pass,onChange:f,placeholder:"Password",name:"pass",required:!0}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsxs)("div",{className:"log_field",children:[Object(b.jsx)("input",{type:"password",value:c.cpass,onChange:f,placeholder:"Confirm password",name:"cpass",required:!0}),Object(b.jsx)("div",{className:"underline"})]}),Object(b.jsxs)("button",{className:"log_button",type:"sumbit",style:v,children:[Object(b.jsx)("i",{className:O+" buttonWico_icon"}),Object(b.jsx)("p",{className:"buttonWico_text",children:o})]})]})]})})};var N=function(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("header",{className:"header",children:[Object(b.jsx)("li",{className:"nav_logo",children:"E-CoMMERCE"}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"nav_links",children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)(o.b,{to:"/login",children:Object(b.jsx)("li",{children:"Log in"})}),Object(b.jsx)(o.b,{to:"/signup",children:Object(b.jsx)("li",{className:"signup-t",children:"Sign up"})})]})})]}),Object(b.jsxs)("header",{className:"header_alt",children:[Object(b.jsx)("li",{className:"nav_logo",children:"E-CoMMERCE"}),Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{className:"nav_links",children:[Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("li",{children:"Home"})}),Object(b.jsx)(o.b,{to:"/login",children:Object(b.jsx)("li",{children:"Log in"})}),Object(b.jsx)(o.b,{to:"/signup",children:Object(b.jsx)("li",{className:"signup-t",children:"Sign up"})})]})})]})]})};var f=function(e){e.data,e.id;var t=e.data,c=t.price,s=t.name,n=t.image,i=t.description,o=t.stock,l=t.sales,r=Object(a.useState)("PURCHASE"),d=Object(j.a)(r,2),u=d[0],m=d[1],p=Object(a.useState)({backgroundColor:"#0088a9"}),O=Object(j.a)(p,2),h=O[0],x=O[1];return Object(b.jsxs)("div",{className:"prod-detail_card",children:[Object(b.jsx)("div",{className:"prod-detail_img",children:Object(b.jsx)("img",{src:n})}),Object(b.jsxs)("div",{className:"prod-detail_text",children:[Object(b.jsxs)("p",{className:"prod-detail_sales",children:[l," sold"]}),Object(b.jsx)("p",{className:"prod-detail_name",children:s}),Object(b.jsx)("p",{className:"prod-detail_description",children:i}),Object(b.jsxs)("p",{className:"prod-detail_price",children:["US$ ",c]}),Object(b.jsx)("button",{className:"prod-detail_button",onClick:function(){o<1?(m("NO STOCK"),x({backgroundColor:"rgb(136, 0, 0)"})):(m("PURCHASED"),x({backgroundColor:"green"}))},style:h,children:u}),Object(b.jsxs)("p",{className:"prod-detail_stock",children:["(",o," units left)"]})]})]})};var _=function(e){var t=e.match.params.id,c=Object(a.useState)({}),s=Object(j.a)(c,2),n=s[0],i=s[1],o=Object(a.useState)(!0),l=Object(j.a)(o,2),u=l[0],m=l[1],h=Object(a.useState)("SAVE CHANGES"),x=Object(j.a)(h,2),g=x[0],v=x[1],N=Object(a.useState)({backgroundColor:"#0088a9"}),_=Object(j.a)(N,2),C=_[0],S=_[1],k=Object(a.useState)({name:"",price:"",description:"",image:""}),y=Object(j.a)(k,2),E=y[0],D=y[1],A=Object(a.useState)({opacity:0}),I=Object(j.a)(A,2),w=I[0],L=I[1],P=Object(a.useState)(!0),W=Object(j.a)(P,2),R=W[0],M=W[1];Object(a.useEffect)((function(){p.db.doc("products/"+t).get().then((function(e){i(e),m(!1),D({name:e.data().name,description:e.data().description,price:e.data().price,image:e.data().image})}))}),[]);var H=function(e){var t=e.target.name,c=e.target.value;console.log(t,c),D(Object(d.a)(Object(d.a)({},E),{},Object(r.a)({},t,c)))},T=function(e){e.preventDefault(),p.db.doc("products/"+t).delete().then((function(e){console.log("Doc",e)})).catch((function(e){console.log("Error",e)}))};return u?Object(b.jsx)("p",{className:"loader",children:"cargando..."}):Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)("p",{className:"prod-detail_title",children:"Product detail"}),Object(b.jsx)(f,{data:n.data()}),Object(b.jsxs)("div",{className:"buttonWico_card",children:[Object(b.jsx)(O,{text:"| Add",icon:"fas fa-plus-circle",click:T}),Object(b.jsx)(O,{text:"| Edit",icon:"fas fa-edit",click:function(){R?(L({opacity:1}),M(!1)):(L({opacity:0}),M(!0))}}),Object(b.jsx)(O,{text:"| Delete",icon:"fas fa-minus-circle",click:T})]}),Object(b.jsxs)("div",{className:"edit-detail_card",style:w,children:[Object(b.jsxs)("div",{className:"edit-detail_img",children:[Object(b.jsx)("label",{children:"Image (Enter the URL)"}),Object(b.jsx)("input",{type:"text",name:"image",value:E.image,onChange:H,className:"edit_input",placeholder:"Image \n(Enter the URL)"})]}),Object(b.jsx)("div",{className:"edit-detail_text",children:Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),p.db.doc("products/"+t).set({name:E.name,description:E.description,price:E.price,image:E.image},{merge:!0}).then((function(e){console.log("Doc",e),S({backgroundColor:"green"}),v("CHANGES SAVED")})).catch((function(e){console.log("Error",e),S({backgroundColor:"rgb(136, 0, 0)"}),v("CHANGES WEREN'T SAVED")}))},className:"edit_form",children:[Object(b.jsx)("input",{type:"text",name:"name",value:E.name,onChange:H,className:"edit_input",placeholder:"Name"}),Object(b.jsx)("input",{type:"text",name:"description",value:E.description,onChange:H,className:"edit_input",placeholder:"Description"}),Object(b.jsx)("input",{type:"number",min:"1",name:"price",value:E.price,onChange:H,className:"edit_input",placeholder:"Price"}),Object(b.jsx)("button",{type:"sumbit",className:"save",style:C,children:g})]})})]})]})};var C=function(e){return Object(b.jsx)("div",{className:"goHome",children:Object(b.jsx)(o.b,{to:"/",className:"goHome_button",children:Object(b.jsx)(O,{text:"Go home",icon:"fas fa-home"})})})};var S=function(){return Object(b.jsxs)(o.a,{children:[Object(b.jsx)(N,{}),Object(b.jsx)(l.a,{path:"/",component:x,exact:!0}),Object(b.jsx)(l.a,{path:"/ecommerce",component:C,exact:!0}),Object(b.jsx)(l.a,{path:"/login",component:g,exact:!0}),Object(b.jsx)(l.a,{path:"/signup",component:v,exact:!0}),Object(b.jsx)(l.a,{path:"/product/:id",component:_,exact:!0})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),k()}},[[74,1,2]]]);
//# sourceMappingURL=main.d203910c.chunk.js.map