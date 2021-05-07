(this["webpackJsonprpi-lab3"]=this["webpackJsonprpi-lab3"]||[]).push([[0],{68:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(18),r=n.n(s),l=n(24),i=n(7),j=n(88),d=n(89),o=n(82),b=n(90),h=n(84),u=n(52),O=n(85),x=n(86),f=(n(43),n(16)),g=n(93);function m(){var e=Object(g.a)(),t=e.t,n=e.i18n;function a(){var e=localStorage.getItem("lang");return null===e?"en":e}return Object(c.useEffect)((function(){return n.changeLanguage(a())}),[]),{t:t,getCurrLang:a,setLang:function(e){localStorage.setItem("lang",e),n.changeLanguage(e)}}}function p(e){var t=Object(c.useState)(!1),n=Object(f.a)(t,2),a=n[0],s=n[1],r=Object(c.useRef)(null);return Object(c.useEffect)((function(){fetch("/db/"+e).then((function(e){return e.json()})).then((function(e){r.current=e.data,s(!0)}))}),[]),[a,function(e,t){if(""===t)return r.current;var n=[];return null!==r.current&&r.current.forEach((function(c){var a=function(e,t){var n=t.split("."),c=e;return n.forEach((function(e){c=c.hasOwnProperty(e)?c[e]:null})),c}(c,e);null!==a&&-1!==a.toLowerCase().indexOf(t.toLowerCase())&&n.push(c)})),n}]}n(68);var v=n(91),k=n(2);function N(e){var t=m(),n=t.t,a=t.getCurrLang,s=Object(c.useState)(null),r=Object(f.a)(s,2),l=r[0],i=r[1],j=p("poetsShort.json"),d=Object(f.a)(j,2),b=d[0],h=d[1];return Object(c.useEffect)((function(){if(b){var e=h("",""),t=(n=e.length,Math.floor(Math.random()*n));i(e[t])}var n}),[b]),Object(k.jsx)(o.a,{id:e.id,fluid:!0,className:"mb-5 d-flex flex-column align-items-center",children:!0===b&&null!==l?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)("h3",{children:n("landing.poetOfTheDay")}),Object(k.jsxs)(v.a,{className:"text-center",style:{width:"18rem"},bg:"light",children:[Object(k.jsx)(v.a.Img,{variant:"top",src:l.photoUrl}),Object(k.jsxs)(v.a.Body,{children:[Object(k.jsx)(v.a.Title,{children:l.name[a()]}),Object(k.jsxs)(v.a.Subtitle,{className:"font-style: italic",children:[l.dob," - ",l.dod]}),Object(k.jsx)(v.a.Text,{children:l.description[a()]}),Object(k.jsx)("a",{className:"btn btn-dark",href:"/poets/"+l.id,children:n("landing.poetLink")})]})]})]}):Object(k.jsx)("span",{children:"Loading"})})}var y=n(83);function L(){var e=m().setLang;return Object(k.jsxs)(j.a,{children:[Object(k.jsx)(j.a.Toggle,{variant:"dark",children:Object(k.jsx)(y.a,{})}),Object(k.jsxs)(j.a.Menu,{children:[Object(k.jsx)(j.a.Item,{onClick:function(){return e("ru")},children:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"}),Object(k.jsx)(j.a.Item,{onClick:function(){return e("en")},children:"English"})]})]})}var C=function(){var e=m().t;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(k.jsxs)(o.a,{fluid:"md",children:[Object(k.jsx)(d.a.Brand,{href:"/",children:"Belarusian Poets"}),Object(k.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(k.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(k.jsxs)(b.a,{className:"ml-auto",children:[Object(k.jsx)(b.a.Link,{href:"/poets",children:e("navbar.poets")}),Object(k.jsx)(b.a.Link,{href:"#desc",children:e("navbar.desc")}),Object(k.jsx)(b.a.Link,{href:"#daily",children:e("navbar.daily")}),Object(k.jsx)(b.a.Link,{href:"#devs",children:e("navbar.devs")}),Object(k.jsx)(L,{})]})})]})}),Object(k.jsx)(o.a,{fluid:!0,style:{backgroundColor:"#2941ab"},children:Object(k.jsxs)(o.a,{style:{height:"100vh",color:"#1ed760"},fluid:"lg",className:"d-flex flex-column justify-content-center",children:[Object(k.jsx)(h.a,{className:"justify-content-center",children:Object(k.jsx)("h1",{className:"big-heading text-center",children:e("landing.label")})}),Object(k.jsx)(h.a,{className:"justify-content-center",children:Object(k.jsx)("h2",{className:"text-center",children:e("landing.title")})}),Object(k.jsxs)(h.a,{className:"justify-content-center",children:[Object(k.jsx)(u.a,{className:"rounded-pill btn-lg",variant:"outline-success",children:e("landing.button")})," "]})]})}),Object(k.jsx)(N,{id:"daily"}),Object(k.jsx)(o.a,{id:"devs",style:{height:"12vh",color:"gray"},fluid:!0,className:"bg-dark",children:Object(k.jsx)(o.a,{fluid:"md",className:"h-100",children:Object(k.jsxs)(h.a,{className:"h-100 d-flex align-items-center",xs:2,md:4,lg:8,children:[Object(k.jsxs)(O.a,{className:"",children:[Object(k.jsx)(x.a,{className:"mr-2",src:"/res/madi-icon.png",roundedCircle:!0}),Object(k.jsx)(l.b,{style:{color:"white"},className:"mb-0",to:"github.com",children:"Bakyt Madi"})]}),Object(k.jsxs)(O.a,{className:"",children:[Object(k.jsx)(x.a,{className:"mr-2",src:"/res/vlad-icon.png",roundedCircle:!0}),Object(k.jsx)(l.b,{style:{color:"white"},className:"mb-0",to:"github.com",children:"Maiski Vlad"})]})]})})})]})},S=n(87),w=n(92),E=n(54),B=n.n(E);function T(e){var t=m(),n=t.t,c=t.getCurrLang;if(null!==e.poets&&e.poets.length>0){var a=[];return e.poets.forEach((function(e){a.push(Object(k.jsx)(O.a,{className:"justify-content-center",md:4,children:Object(k.jsxs)(v.a,{className:"mb-5",style:{width:"230px",height:"450px"},children:[Object(k.jsx)(v.a.Img,{variant:"top",style:{height:"200px",objectFit:"cover",objectPosition:"left top"},src:e.photoUrl}),Object(k.jsxs)(v.a.Body,{children:[Object(k.jsx)(v.a.Title,{children:e.name[c()]}),Object(k.jsx)(v.a.Text,{children:e.description[c()]}),Object(k.jsx)("a",{className:"mt-auto btn btn-dark",href:"/poets/"+e.id,children:n("landing.poetLink")})]})]})},B()()))})),Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(o.a,{fluid:"md",children:Object(k.jsx)(h.a,{children:a})})})}return null}var I=function(){var e=m(),t=e.t,n=e.getCurrLang,a=Object(i.f)().id,s=p("poetsShort.json"),r=Object(f.a)(s,2),l=r[0],j=r[1],h=Object(c.useState)(null),u=Object(f.a)(h,2),O=u[0],x=u[1],g=Object(c.useState)(""),v=Object(f.a)(g,2),N=v[0],y=v[1];return Object(c.useEffect)((function(){!0===l&&x(j("name."+n(),N))}),[l,N]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(d.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",className:"mb-5",variant:"dark",children:Object(k.jsxs)(o.a,{fluid:"md",children:[Object(k.jsx)(d.a.Brand,{href:"/",children:"Belarusian Poets"}),Object(k.jsx)(d.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(k.jsx)(d.a.Collapse,{id:"responsive-navbar-nav",children:Object(k.jsxs)(b.a,{className:"ml-auto",children:[void 0===a?Object(k.jsx)(S.a,{className:"mr-4",children:Object(k.jsx)(w.a,{value:N,onChange:function(e){return y(e.target.value)},placeholder:t("poets.search")})}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(b.a.Link,{href:"/poets",children:t("navbar.poets")}),Object(k.jsx)(b.a.Link,{href:"/poets",children:t("navbar.poets")}),Object(k.jsx)(b.a.Link,{href:"/poets",children:t("navbar.poets")}),Object(k.jsx)(b.a.Link,{href:"/poets",children:t("navbar.poets")})]}),Object(k.jsx)(L,{})]})})]})}),Object(k.jsx)(o.a,{children:void 0===a?!1===l?Object(k.jsx)("h1",{children:"Loading..."}):Object(k.jsx)(T,{poets:O}):Object(k.jsx)("h1",{children:a})})]})},F=function(){return Object(k.jsx)("div",{children:"Loading"})};var M=function(){return Object(k.jsx)(c.Suspense,{fallback:Object(k.jsx)(F,{}),children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(i.c,{children:[Object(k.jsx)(i.a,{exact:!0,path:"/",component:C}),Object(k.jsx)(i.a,{path:"/poets/:id?",component:I})]})})})},P=n(42),J=n(56),U=n(28);P.a.use(J.a).use(U.e).init({fallbackLng:"en",interpolation:{escapeValue:!1}});P.a;r.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(M,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.f5dc34e8.chunk.js.map