(this.webpackJsonptransport_frontend=this.webpackJsonptransport_frontend||[]).push([[0],{181:function(e,t,n){e.exports=n(301)},186:function(e,t,n){},187:function(e,t,n){},301:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(6),o=n.n(l),c=(n(186),n(37)),i=(n(187),n(304)),s=n(60),u=n(25),m=n(307),p=n(308),d=n(64),h=n(152),f=n(305),g=n(303),E=n(306),y=n(108),b=n(153),w=n.n(b),v=n(154),k=n.n(v);function x(){var e=Object(h.a)(["\n    query getMe{\n      me {\n        first_name,\n        last_name,\n    profile {\n      photo\n      job\n    }\n  }\n    }\n  "]);return x=function(){return e},e}function j(){var e=Object(y.a)(w()(x())).data;return r.a.createElement("div",{style:{width:"100%",height:200,display:"flex",justifyContent:"center",flexDirection:"row"}},r.a.createElement(f.a,{bordered:!1,style:{backgroundColor:"transparent",textAlign:"center"}},r.a.createElement(g.a,{size:"large",src:"http://".concat(window.location.hostname,":8000/").concat(k.a.get(e,"me.profile.photo",""))}),r.a.createElement("br",null),r.a.createElement(E.a,{type:"danger",style:{color:"white",textAlign:"center"},level:4},"Milia Khaled")))}var O=n(19),S=Object(O.a)();function M(e){var t=e.color,n=void 0===t?"dark":t,l=e.links,o=Object(a.useState)(!1),s=Object(c.a)(o,2),u=s[0],m=s[1];return r.a.createElement(i.a.Sider,{collapsible:!0,breakpoint:"md",width:"250",style:{paddingTop:64},collapsed:u,onCollapse:function(e){return m(!u)}},r.a.createElement(j,null),r.a.createElement(p.a,{theme:n,mode:"inline",defaultSelectedKeys:[S.location.pathname],defaultOpenKeys:l.filter((function(e){return"multiple"===e.type&&-1!==e.pages.findIndex((function(e){return e.href===S.location.pathname}))})).map((function(e){return e.title}))},l.map((function(e,t){return"signle"===e.type?r.a.createElement(p.a.Item,{key:e.href,className:"customclass"},r.a.createElement(r.a.Fragment,null,e.icon,r.a.createElement("span",null," ",e.title),r.a.createElement(d.a,{to:e.href}))):r.a.createElement(p.a.SubMenu,{key:e.title,title:r.a.createElement("span",null,e.icon,r.a.createElement("span",null,e.title))},e.pages.map((function(e,t){return r.a.createElement(p.a.Item,{key:e.href},r.a.createElement("strong",null," ",e.title),r.a.createElement(d.a,{to:e.href}))})))}))))}var C=[],I=n(39);function L(){return r.a.createElement(i.a.Content,{style:{margin:"24px 16px",padding:24,background:"",minHeight:280}},r.a.createElement(I.c,null,C.map((function(e){return r.a.createElement(I.a,{path:e.path,component:e.component,exact:!0})}))))}var A=n(15),J=n(174),T=n(177),W=n(16),_=n(178),z=n(40),H=n(176),K=n(175),q=Object(K.a)((function(e){var t=e.graphQLErrors,n=e.networkError;e.response;t&&t.map((function(e){var t=e.message,n=e.locations,a=e.path;e.nodes;console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(n,", Path: ").concat(a)),console.log(n)})),n&&console.log(n),n&&n.result&&n.result.map&&n.result.map((function(e){return console.log(e)})),n&&n.statusCode})),B=Object(H.a)((function(e,t){var n=t.headers,a=localStorage.getItem("token");return{headers:Object(J.a)({},n,{authorization:a?"JWT ".concat(a):""})}})),D=(new W.a((function(e,t){var n=localStorage.getItem("token");return null==n&&window.location.replace("/"),e.setContext({headers:{authorization:n?"JWT ".concat(n):""}}),t(e)})),new T.a({uri:"http://".concat(window.location.hostname,":8000/gql"),credentials:"same-origin"})),G=new z.c({cache:new _.a({addTypename:!1}),link:W.a.from([q,B,D])}),P=n(117),Q=n.n(P),F=n(311),N=n(309),V=n(310),$=[{title:"Dashboard",href:"/dashboard",type:"signle",icon:r.a.createElement(N.a,null)},{title:"Menu",type:"multiple",icon:r.a.createElement(V.a,null),pages:[{title:"Sous Menu 1",href:"menu1-1"},{title:"Sous Menu 2",href:"menu1-2"}]}],R=r.a.createContext({});var U=function(){var e=Object(a.useState)("SGME"),t=Object(c.a)(e,2),n=t[0],l=t[1];return r.a.createElement(R.Provider,{value:{title:n,setValue:l}},r.a.createElement(A.a,{client:G},r.a.createElement(I.b,{history:S},r.a.createElement(i.a,{style:{height:"100%"}},r.a.createElement(M,{color:"dark",links:$}),r.a.createElement(i.a,null,r.a.createElement(i.a.Header,{style:{backgroundColor:"white",padding:0}},r.a.createElement(s.a,{justify:"space-between",align:"middle",style:{width:"100%"}},r.a.createElement(u.a,{span:20,style:{textAlign:"left"}},r.a.createElement("div",{style:{display:"flex",alignItems:"baseline",paddingLeft:50,lineHeight:0}},r.a.createElement(Q.a,{level:3},n))),r.a.createElement(u.a,{span:1,style:{textAlign:"center"}},r.a.createElement(m.a,{icon:r.a.createElement(F.a,null),style:{marginLeft:"auto"}})))),r.a.createElement(L,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[181,1,2]]]);
