(this.webpackJsonptransport_frontend=this.webpackJsonptransport_frontend||[]).push([[0],{295:function(e,t,a){e.exports=a(593)},300:function(e,t,a){},301:function(e,t,a){},593:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),i=a(7),r=a.n(i),o=(a(300),a(13)),c=(a(301),a(599)),s=a(608),u=a(106),d=a(59),m=a(46),p=a(605),f=a(121),g=a(44),h=a(601),v=a(598),b=a(602),E=a(57),y=a(22),O=a.n(y),j=a(19),C=a.n(j);function x(){var e=Object(g.a)(["\n    query getMe{\n      me {\n        first_name,\n        last_name,\n    profile {\n      photo\n      job\n    }\n  }\n    }\n  "]);return x=function(){return e},e}function k(){var e=Object(E.b)(O()(x())).data;return l.a.createElement("div",{style:{width:"100%",height:200,display:"flex",justifyContent:"center",flexDirection:"row"}},l.a.createElement(h.a,{bordered:!1,style:{backgroundColor:"transparent",textAlign:"center"}},l.a.createElement(v.a,{size:"large",src:"http://".concat(window.location.hostname,":8000/").concat(C.a.get(e,"me.profile.photo",""))}),l.a.createElement("br",null),l.a.createElement(b.a,{type:"danger",style:{color:"white",textAlign:"center"},level:4},C.a.get(e,"me.first_name","")," ",C.a.get(e,"me.last_name",""))))}var w=a(48),_=Object(w.a)(),I="http".concat("","://").concat(window.location.hostname,":").concat(80),N="http".concat("s","://").concat(window.location.hostname).concat("","/gql");function q(e){var t=e.color,a=void 0===t?"dark":t,i=e.links,r=Object(n.useState)(!1),s=Object(o.a)(r,2),u=s[0],d=s[1];return l.a.createElement(c.a.Sider,{className:"sidebar",collapsible:!1,width:300,theme:"dark",style:{paddingTop:64,height:"100%",overflow:"auto"},collapsed:u,onCollapse:function(e){return d(!u)},collapsedWidth:100},l.a.createElement(k,null),l.a.createElement(p.a,{theme:a,mode:"inline",style:{width:300,overflowY:"auto"},defaultSelectedKeys:[_.location.pathname],defaultOpenKeys:i.filter((function(e){return"multiple"===e.type&&-1!==e.pages.findIndex((function(e){return e.href===_.location.pathname}))})).map((function(e){return e.title}))},i.map((function(e,t){return"signle"===e.type?l.a.createElement(p.a.Item,{key:e.href,className:"customclass"},l.a.createElement(l.a.Fragment,null,e.icon,l.a.createElement("span",null," ",e.title),l.a.createElement(f.a,{to:e.href}))):l.a.createElement(p.a.SubMenu,{key:e.title,title:l.a.createElement("span",null,e.icon,l.a.createElement("span",null,e.title))},e.pages.map((function(e,t){return l.a.createElement(p.a.Item,{key:e.href},l.a.createElement("strong",null," ",e.title),l.a.createElement(f.a,{to:e.href}))})))}))))}var S=a(42),D=a(16),P=a(9),$=a(604),F=a(606),T=a(619),M=a(615),V=a(285),L=a.n(V),z=a(611),R=a(612),U=a(617),A=a(616),G=a(618),Y=a(205),W=a.n(Y),J=a(603),B=a(10),H=a(610);function K(e){var t=e.fieldDef,a=e.onChange,n=e.label,i=void 0===n||n,r=t.properties.defaultChecked,o=t.title,c=t.name,s=t.required,u=t.rules,d=void 0===u?[]:u;return l.a.createElement(J.a.Item,{label:i?o:"",labelCol:{span:24},name:c,valuePropName:"checked",rules:[{required:s,message:"".concat(o," est obligatoire !")}].concat(Object(P.a)(d)),style:{width:"100%"}},l.a.createElement(H.a,{defaultChecked:r,onChange:function(e){return a(Object(B.a)({},c,e.target.checked))},style:{width:"100%"}},o))}var Q=a(600);function X(e){var t=e.fieldDef,a=(e.values,e.onChange),n=e.label,i=void 0===n||n,r=t.properties,o=r.picker,c=(r.defaultDate,r.format),s=t.title,u=t.name,d=t.required,m=t.rules,p=void 0===m?[]:m,f=t.size,g=void 0===f?"large":f;return l.a.createElement(J.a.Item,{label:i?s:"",labelCol:{span:24},name:u,rules:[{type:"object",required:d,message:"".concat(s," est obligatoire !")}].concat(Object(P.a)(p)),style:{width:"100%"}},l.a.createElement(Q.a,{placeholder:s,format:c||void 0,picker:o,allowClear:!0,onChange:function(e){a(Object(B.a)({},u,e))},size:g,style:{width:"100%"}}))}var Z=a(293);function ee(e){var t=e.fieldDef,a=e.onChange,n=e.label,i=void 0===n||n,r=t.properties,o=(r.begin,r.end,r.picker,t.name),c=t.title,s=t.required,u=t.size,d=void 0===u?"large":u;return l.a.createElement(J.a.Item,{label:i?c:"",style:{width:"100%"},name:o,rules:[{required:s,message:"".concat(c," est obligatoire !")}]},l.a.createElement(Q.a.RangePicker,{size:d,style:{width:"100%"},locale:Z.a,onChange:function(e){var t,n;e?a((t={},Object(B.a)(t,o[0],e&&e[0]&&e[0].format("YYYY-MM-DD")),Object(B.a)(t,o[1],e&&e[1]&&e[1].format("YYYY-MM-DD")),t)):a((n={},Object(B.a)(n,o[0],null),Object(B.a)(n,o[1],null),n))}}))}var te=R.a.Option,ae=R.a.OptGroup;function ne(e){var t=e.fieldDef,a=e.onChange,n=e.values,i=e.save,r=e.label,o=void 0===r||r,c=t.properties,s=c.responseTitle,u=void 0===s?"response":s,d=c.defaultValue,m=c.query,p=c.variables,f=c.mode,g=c.filters,h=void 0===g?[]:g,v=c.show,b=void 0===v?"designation":v,y=c.identifier,O=void 0===y?"id":y,j=c.get_items,x=c.divider,k=t.size,w=void 0===k?"large":k,_=t.name,I=t.title,N=t.required,q=t.rules,S=void 0===q?[]:q,$=t.editable,F=void 0===$||$,T=Object(E.b)(m,{variables:Object(D.a)({},p,{},h.reduce((function(e,t){return Object(D.a)({},e,Object(B.a)({},t,n?n[t]:""))}),{}))}),M=T.data,V=T.loading,L=j?C.a.get(M,"".concat(u,".").concat(j),[]):C.a.get(M,u,[]),z=function(e){a(Object(B.a)({},_,e))},U=x?C.a.groupBy(L,x):null,A=U?Object.keys(U):null;return l.a.createElement(J.a.Item,{label:o?I:"",labelCol:{span:24},name:_,rules:[{required:N,message:"".concat(I," est obligatoire !")}].concat(Object(P.a)(S)),style:{width:"100%"}},l.a.createElement(R.a,{disabled:!F,size:w,onChange:i?function(e,t){var a=L[L.findIndex((function(t){return t[O]===e}))],n=i.fields.reduce((function(e,t){return Object(D.a)({},e,Object(B.a)({},t,C.a.get(a,t,"")))}),{});i.action(n),z(e)}:z,mode:f,placeholder:I,loading:V,allowClear:!0,defaultValue:d,showSearch:!0,optionFilterProp:"children"},x&&U&&A?null===A||void 0===A?void 0:A.map((function(e){return l.a.createElement(ae,{label:e},U[e].map((function(e){return l.a.createElement(te,{key:e[O],value:e[O]},e[b])})))})):L.map((function(e){return l.a.createElement(te,{key:e[O],value:e[O]},e[b])}))))}function le(e){var t=e.fieldDef,a=(e.values,e.onChange),n=e.save,i=e.label,r=void 0===i||i,o=t.properties,c=o.defaultValue,s=o.mode,u=o.choices,d=t.size,m=void 0===d?"large":d,p=t.name,f=t.title,g=t.required,h=t.rules,v=void 0===h?[]:h,b=function(e){a(Object(B.a)({},p,e))};return l.a.createElement(J.a.Item,{rules:[{required:g,message:"".concat(f," est obligatoire !")}].concat(Object(P.a)(v)),name:p,label:r?f:"",style:{width:"100%"}},l.a.createElement(R.a,{onChange:n?function(e,t){n.action(Object(B.a)({},p,e)),b(e)}:b,mode:s,allowClear:!0,size:m,placeholder:f,defaultValue:c},u.map((function(e){return l.a.createElement(R.a.Option,{value:e.value},e.title)}))))}var ie=a(609);function re(e){var t=e.fieldDef,a=e.onChange,n=(e.values,e.label),i=void 0===n||n,r=t.properties,o=r.defaultValue,c=r.type,s=void 0===c?"text":c,u=t.name,d=t.title,m=t.required,p=t.size,f=void 0===p?"large":p,g=t.info;return l.a.createElement(J.a.Item,{name:u,label:i?d:"",help:g,rules:[{required:m,message:"".concat(d," est obligatoire !")}]},l.a.createElement(ie.a,{defaultValue:o,onChange:function(e){return a(Object(B.a)({},u,e.target.value))},type:s||"text",size:f,placeholder:d,name:u}))}function oe(e){var t=e.fieldDef,a=e.onChange,n=void 0===a?function(e){}:a,i=e.label,r=void 0!==i&&i;e.save,e.values;switch(t.properties.type){case"select":return l.a.createElement(ne,{fieldDef:t,onChange:n,label:r});case"static":return l.a.createElement(le,{fieldDef:t,onChange:n,label:r});case"date":return l.a.createElement(X,{fieldDef:t,onChange:n,label:r});case"boolean":return l.a.createElement(K,{fieldDef:t,onChange:n,label:r});case"date_range":return l.a.createElement(ee,{fieldDef:t,onChange:n,label:r});default:return l.a.createElement(re,{fieldDef:t,onChange:n,label:r})}}var ce=a(54),se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=[];return t.forEach((function(t){var n=e.reduce((function(e,a){return Object(D.a)({},e,Object(B.a)({},a.field,C.a.get(t,a.properties.get,t[a.name])))}),{});a.push(n)})),a},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a={},n=e.filter((function(e){return"multiple"===e.properties.type}));return a=Object(D.a)({},a,{},e.filter((function(e){return!("multiple"===e.properties.type)})).reduce((function(e,a){return Object(D.a)({},e,Object(B.a)({},a.name,"multiple"===a.properties.mode?C.a.get(t,a.name,[]).map((function(e){return C.a.get(e,"id",[])})):C.a.get(t,a.properties.get+"",t[a.name])))}),{})),n.forEach((function(e){a=Object(D.a)({},a,Object(B.a)({},e.name,Object(P.a)(se(e.properties.fields,t[e.name]))))})),a},de=a(107),me=a(613),pe=a(614);function fe(e){var t=e.info,a=void 0===t?"dsdsd":t;return l.a.createElement("div",null,l.a.createElement(me.a,{content:l.a.createElement("div",{style:{width:200}},l.a.createElement(b.a.Text,null,a)),placement:"right"},l.a.createElement(pe.a,{style:{fontSize:12,color:"#888888",marginLeft:8}})))}function ge(e){var t=e.fields,a=e.index,i=(e.unique,e.form,Object(n.useState)({})),r=Object(o.a)(i,2),c=r[0],s=r[1],m=function(e){s(Object(D.a)({},c,{},e))};return l.a.createElement(u.a,{gutter:16,align:"middle"},t.map((function(e,n){return l.a.createElement(d.a,{xs:24,md:Math.floor(24/t.length),style:{alignSelf:"center"}},l.a.createElement(oe,{fieldDef:Object(D.a)({},e,{name:void 0!==a?[a,e.name]:e.name}),onChange:m,label:!1}))})))}function he(e){var t=e.inputs;return l.a.createElement(J.a.List,{name:t.name},(function(e,a){var n=a.add,i=a.remove;return l.a.createElement(h.a,{title:l.a.createElement(u.a,{justify:"space-between"},l.a.createElement(d.a,{style:{display:"flex",alignItems:"center"}},l.a.createElement("div",{style:{display:"flex"}},t.title," ",t.info&&l.a.createElement(fe,{info:t.info}))),l.a.createElement(d.a,{style:{display:"flex",alignItems:"center"}},l.a.createElement(m.a,{type:"primary",shape:"circle",onClick:function(){n()}},l.a.createElement(M.a,null))))},0===e.length?l.a.createElement(de.a,{description:"aucun \xe9l\xe9ment n'a encore \xe9t\xe9 ajout\xe9!"}):null,e.map((function(a,n){return l.a.createElement(u.a,{gutter:[16,2],style:{display:"flex",alignItems:"start"}},l.a.createElement(d.a,{span:23},l.a.createElement(J.a.Item,{key:a.key},l.a.createElement(ge,{fields:t.properties.fields,index:n}))),e.length>0?l.a.createElement(d.a,{span:1},l.a.createElement(m.a,{size:"small",className:"dynamic-delete-button",icon:l.a.createElement(A.a,null),danger:!0,onClick:function(){i(a.name)}})):null)})))}))}var ve=a(282);a.n(ve).a.setAppElement("#root");function be(e){var t=e.inputs,a=(e.onFinishUpdate,e.title,e.initialValues),i=e.span,r=void 0===i?12:i,c=e.form,s=e.onFinish,m=e.label,p=void 0!==m&&m,f=e.card,g=void 0===f||f,v=Object(ce.useForm)(),b=Object(o.a)(v,1)[0],E=Object(n.useState)({}),y=Object(o.a)(E,2),O=y[0],j=y[1],C=function(e){j(Object(D.a)({},O,{},e))};return Object(n.useEffect)((function(){null===c||void 0===c||c.setFieldsValue(ue(t.fields,a))}),[a]),l.a.createElement("div",null,l.a.createElement(h.a,{title:g?l.a.createElement("div",{style:{display:"flex"}},t.title," ",t.info&&l.a.createElement(fe,{info:t.info})):null,style:{marginBottom:16}},l.a.createElement(J.a,Object.assign({initialValues:a?ue(t.fields,a):{}},{labelCol:{span:24},wrapperCol:{span:24}},{form:c||b,name:"form",onFinish:s}),l.a.createElement("div",{className:"form"},l.a.createElement("div",{title:t.title},l.a.createElement(u.a,{gutter:[20,0]},t.fields.map((function(e){return"multiple"===e.properties.type?l.a.createElement(d.a,{span:24},l.a.createElement(he,{inputs:e})):l.a.createElement(d.a,{md:r,xs:24},l.a.createElement(oe,{fieldDef:e,label:p,onChange:C,values:O}))}))))))))}function Ee(e){var t=e.resultName,a=void 0===t?"response":t,i=(e.history,e.mutation),r=e.buildInput,c=void 0===r?function(e){return e}:r,s=e.inputs,p=(e.onFinishUpdate,e.redirect,e.title,e.initialValues),f=void 0===p?{}:p,g=e.span,h=void 0===g?12:g,v=(e.updateForm,e.onFinish,e.label),b=void 0!==v&&v,y=e.checkResponse,O=void 0===y?function(e){return C.a.get(e,"data.".concat(a,".ok"),!1)}:y,j=Object(E.a)(i),x=Object(o.a)(j,1)[0],k=Object(ce.useForm)(),w=Object(o.a)(k,1)[0],_=Object(n.useState)(!1),I=Object(o.a)(_,2);I[0],I[1];return l.a.createElement("div",null,l.a.createElement(be,{title:"Create Person",form:w,mode:"create",span:h,label:b,inputs:s,onFinish:function(e){return function(e){var t=c(e);x({variables:{input:t}}).then((function(e){O&&O(e)?F.a.success("\xc9l\xe9ment cr\xe9\xe9 avec succ\xe8s"):(C.a.get(e,"data.".concat(a,".errors"),!1)&&F.a.error("Une erreur est survenue dans les champs suivant : ".concat(C.a.get(e,"data.".concat(a,".errors"),[]).reduce((function(e,t){return"".concat(e,"  ").concat(t.field)}),""))),console.log(C.a.get(e,"data.".concat(a,".errors"))))})).catch((function(e){F.a.error("Une erreur est survenue"),console.log(e)}))}(e)},initialValues:f}),l.a.createElement(u.a,{gutter:[16,10],justify:"end"},l.a.createElement(d.a,{md:6,sm:12,xs:24,xl:4},l.a.createElement(m.a,{onClick:function(){w.resetFields()},htmlType:"button",style:{width:"100%"},type:"default"},"supprimer")),l.a.createElement(d.a,{md:6,sm:12,xs:24,xl:4},l.a.createElement(m.a,{onClick:function(){w.submit()},style:{width:"100%"},type:"primary"},"engregistrer"))))}a(152);function ye(e){var t=e.data,a=void 0===t?[]:t,i=e.onDelete,r=e.onSelect,c=e.onUpdate,s=e.history,u=e.loading,d=e.actions,f=void 0===d?[]:d,g=e.columns,h=e.updateColumn,v=void 0===h||h,b=e.deleteColumn,E=void 0===b||b,y=e.isUpdatable,O=void 0===y?function(){return!0}:y,j=e.isDeletable,x=void 0===j?function(){return!0}:j,k=e.updateLink,w=(e.refetch,e.pagination),_=e.fetchMoreData,I=e.title,N=e.count,q=e.updateInputs,S=Object(n.useState)({}),F=Object(o.a)(S,2),T=F[0],M=F[1],V=Object(n.useState)(!1),Y=Object(o.a)(V,2),J=Y[0],B=Y[1],H=Object(ce.useForm)(),K=Object(o.a)(H,1)[0],Q=Object(P.a)(g),X=w.onPageChange,Z=w.onRowPerPageChange,ee=w.page,te=w.rowPerPage;return v&&Q.push({title:"modifier",render:function(e){return O(e)?l.a.createElement(m.a,{icon:l.a.createElement(U.a,null),onClick:function(){k?s&&s.push(k+"/".concat(e.id)):(M(e),r&&r(e),B(!0),delete Object(D.a)({},e).id)}}):null},width:80,align:"center"}),E&&Q.push({title:"supprimer",render:function(e){return x(e)?l.a.createElement(m.a,{icon:l.a.createElement(A.a,null),danger:!0,onClick:function(){var t;t=e,W()({title:"Voulez-vous supprimer cet objet?",content:C.a.get(t,"designation",""),okText:"supprimer",cancelText:"annuler",onOk:function(){i&&i(t.id)}})}}):null},width:80,align:"center"}),f.length>0&&Q.push({title:"actions",render:function(e){return l.a.createElement(z.a,{overlay:l.a.createElement(p.a,{theme:"dark"},f.map((function(t){return l.a.createElement(p.a.Item,{style:{alignItems:"center",color:"white",display:"flex",justifyContent:"space-between",width:130},key:"1",onClick:function(){return t.onClick(e)}},t.title,l.a.createElement(t.icon,null))})))},l.a.createElement(m.a,{size:"small",type:"ghost",icon:l.a.createElement(G.a,null)}))},width:40,align:"center"}),l.a.createElement("div",null,q?l.a.createElement($.a,{key:T,destroyOnClose:!0,visible:J,onCancel:function(){B(!1),M({})},title:q.title,onOk:function(){K.validateFields().then((function(e){K.isFieldsTouched()&&(c&&c(e),X(0)),B(!1)}))}},l.a.createElement(be,{initialValues:T,form:K,card:!1,inputs:q,title:"",onFinish:function(e){console.log()}})):null,l.a.createElement(L.a,{scroll:{x:1300},rowKey:"id",loading:u,columns:Q,dataSource:a.slice(ee*te,ee*te+te),pagination:!1,bordered:!0,title:function(){return l.a.createElement("div",null,I)},size:"middle"}),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement(m.a.Group,null,l.a.createElement(m.a,{disabled:0===ee,size:"small",onClick:function(){return X(ee-1)}},"<"),l.a.createElement("div",{style:{width:5}}," "),l.a.createElement(m.a,{disabled:a.length==N&&Math.floor(a.length/te)==ee,size:"small",onClick:function(){X(ee+1),_&&_(te,ee)}}," ",">"," "))," ",l.a.createElement(R.a,{onChange:function(e){Z(e),X(0)},value:w.rowPerPage,size:"small"},l.a.createElement(R.a.Option,{value:10},"10 / page"),l.a.createElement(R.a.Option,{value:20},"20 / page"),l.a.createElement(R.a.Option,{value:40},"40 / page"))))}var Oe=a(607);function je(e){var t=e.onClose,a=e.visible,i=e.fields,r=e.page,c=void 0===r?0:r,s=e.rowPerPage,p=e.variables,f=e.filename,g=void 0===f?"data":f,h=e.url,v=void 0===h?"export/xls":h,b=e.appName,E=e.modelName,y=Object(n.useState)(i?i.map((function(e){return Object(D.a)({},e)})):[]),O=Object(o.a)(y,2),j=O[0],C=O[1],x=Object(n.useState)("all"),k=Object(o.a)(x,2),w=k[0],_=k[1],N=Object(n.useState)("all"),q=Object(o.a)(N,2),S=q[0],F=q[1],T=Object(n.useState)(g),M=Object(o.a)(T,2),V=M[0],L=M[1];return l.a.createElement("form",{action:"".concat(I,"/").concat(v),id:"form",method:"get"},l.a.createElement("input",{hidden:!0,name:"items",value:w}),l.a.createElement("input",{hidden:!0,name:"selection",value:S}),l.a.createElement("input",{hidden:!0,name:"variables",value:JSON.stringify(p)}),l.a.createElement("input",{hidden:!0,name:"filename",value:V}),l.a.createElement("input",{hidden:!0,name:"app_name",value:b}),l.a.createElement("input",{hidden:!0,name:"model_name",value:E}),l.a.createElement("input",{hidden:!0,name:"fields",value:j.map((function(e){return e.name})).toString()}),l.a.createElement("input",{hidden:!0,name:"headers",value:j.map((function(e){return e.title})).toString()}),l.a.createElement("input",{hidden:!0,name:"page",value:c}),l.a.createElement("input",{hidden:!0,name:"rowPerPage",value:s}),l.a.createElement($.a,{width:800,destroyOnClose:!0,visible:a,footer:l.a.createElement("div",null,l.a.createElement(m.a,{onClick:function(){t()}},"fermer"),l.a.createElement(m.a,{type:"primary",htmlType:"submit",form:"form"},"exporter")),okText:"exporter",cancelText:"fermer",onCancel:function(){return t()},title:"Exporter"},l.a.createElement(u.a,{gutter:[10,10]},l.a.createElement(d.a,{span:24},l.a.createElement("h3",null,l.a.createElement("u",null,"Colonne \xe0 exporter"))),null===i||void 0===i?void 0:i.map((function(e){return l.a.createElement(d.a,{span:8},l.a.createElement(H.a,{checked:-1!==j.findIndex((function(t){return t.name==e.name})),onChange:function(t){t.target.checked&&e.name?C([].concat(Object(P.a)(j),[e])):!t.target.checked&&e.name&&C(j.filter((function(t){return t.name!==e.name})))}},e.title))}))),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(d.a,{span:24},l.a.createElement("h3",null,l.a.createElement("u",null,"Nombre des items"))),l.a.createElement("hr",null)," ",l.a.createElement(d.a,{span:24},l.a.createElement(Oe.a.Group,{value:w,onChange:function(e){return _(e.target.value)}},l.a.createElement(Oe.a,{value:"all"},"Tout"),l.a.createElement(Oe.a,{value:"displayed"},"Elements affich\xe9s")))),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(d.a,{span:24},l.a.createElement("h3",null,l.a.createElement("u",null,"Selection"))),l.a.createElement("hr",null)," ",l.a.createElement(d.a,{span:24},l.a.createElement(Oe.a.Group,{value:S,onChange:function(e){return F(e.target.value)}},l.a.createElement(Oe.a,{value:"all"},"Tout"),l.a.createElement(Oe.a,{value:"filter"},"Resultats de la recherce")))),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(J.a.Item,{label:"Nom du fichier (Excel)"},l.a.createElement(ie.a,{placeholder:"nom du fichier",value:V,onChange:function(e){return L(e.target.value)}})," ")," ")))}$.a.confirm;var Ce=l.a.createContext({}),xe=(Ce.Provider,Ce.Consumer,function(e){var t,a,i=e.graphql,r=e.resultTitle,c=void 0===r?"response":r,s=e.variables,p=e.initVariables,f=void 0===p?{}:p,g=e.title,h=e.columns,v=e.isDeletable,b=void 0===v?function(){return!0}:v,y=e.isUpdatable,O=void 0===y?function(){return!0}:y,j=e.actions,x=void 0===j?[]:j,k=e.createLink,w=void 0===k?"":k,_=e.deleteColumn,I=void 0===_||_,N=(e.expand,e.updateColumn),q=void 0===N||N,S=e.updateInputs,$=e.updateLink,V=e.nested,L=e.history,z=e.exportUrl,R=e.expprtFileName,U=e.appName,A=e.modelName,G=Object(n.useState)({}),Y=Object(o.a)(G,2),W=Y[0],J=Y[1],B=Object(n.useState)(!1),H=Object(o.a)(B,2),K=(H[0],H[1],function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Object(n.useState)(e),l=Object(o.a)(a,2),i=l[0],r=l[1],c=Object(n.useState)(t),s=Object(o.a)(c,2),u=s[0],d=s[1];return{rowPerPage:i,page:u,onRowPerPageChange:r,onPageChange:d}}()),Q=Object(E.b)(i.all,{variables:Object(D.a)({},s,{limit:K.rowPerPage,offset:0},f),fetchPolicy:"cache-and-network"}),X=Q.data,Z=Q.loading,ee=Q.fetchMore,te=Q.refetch;try{var ae=Object(E.a)(i.delete),ne=Object(o.a)(ae,1);t=ne[0]}catch(ue){}try{var le=Object(E.a)(i.update),ie=Object(o.a)(le,1);a=ie[0]}catch(ue){}Object(n.useEffect)((function(){K.onPageChange(0)}),[s]);var re=Object(n.useState)(!1),oe=Object(o.a)(re,2),ce=oe[0],se=oe[1];return l.a.createElement(Ce.Provider,{value:{refetch:te}},U&&A?l.a.createElement(je,{appName:U,modelName:A,filename:R,url:z,variables:s,fields:h.map((function(e){var t,a;return{name:null===(t=e.dataIndex)||void 0===t?void 0:t.toString(),title:null===(a=e.title)||void 0===a?void 0:a.toString()}})),visible:ce,onClose:function(){return se(!ce)},page:K.page,rowPerPage:K.rowPerPage}):null,l.a.createElement(u.a,{justify:"end",gutter:[16,10]},U&&A?l.a.createElement(d.a,{md:12,lg:3,xs:24},l.a.createElement(m.a,{htmlType:"button",icon:l.a.createElement(T.a,null),danger:!0,style:{width:"100%"},onClick:function(){return se(!0)}},"exporter")):null,l.a.createElement(d.a,{md:12,lg:3,xs:24},l.a.createElement(m.a,{style:{width:"100%",borderWidth:0,padding:0},type:"primary",icon:l.a.createElement(M.a,null),onClick:function(){return L&&L.push(w)}},"nouveau"))),l.a.createElement("br",null),l.a.createElement(ye,{onSelect:J,onUpdate:function(e){var t=V?{id:W.id,input:Object(D.a)({},e)}:{input:Object(D.a)({},e,{id:W.id})};a({variables:t}).then((function(e){F.a.success("Operation avec succ\xe9e"),te()})).catch((function(e){return console.log(e)}))},fetchMoreData:function(e,t){ee({variables:{offset:X&&X.response.results.length,limit:e},updateQuery:function(e,t){var a=t.fetchMoreResult;return a?Object.assign({},e,{response:{results:[].concat(Object(P.a)(e.response.results),Object(P.a)(a.response.results))}}):e}})},title:g,pagination:K,data:C.a.get(X,"response.results",[]),count:C.a.get(X,"".concat(c,".totalCount"),0),columns:h,actions:x,isDeletable:b,isUpdatable:O,history:L,deleteColumn:I,loading:Z,onDelete:function(e){t({variables:{id:e}}).then((function(e){te()}))},refetch:te,fetchMore:ee,updateColumn:q,updateLink:$,updateInputs:S}))}),ke=a(292);var we=a(286),_e=a.n(we);function Ie(e){var t=e.filters,a=(e.variables,e.onVariablesChange),n=e.form;return l.a.createElement(_e.a,{form:n},l.a.createElement(u.a,{gutter:[16,2]},null===t||void 0===t?void 0:t.map((function(e,t){return l.a.createElement(d.a,{lg:e.span||4,md:6,sm:24,xs:24},l.a.createElement(oe,{key:t,fieldDef:e,label:!1,onChange:a}))}))))}function Ne(e){var t=e.columns,a=e.graphql,i=e.resultTitle,r=void 0===i?"response":i,c=e.filters,s=e.updateColumn,u=void 0===s||s,d=e.deleteColumn,m=void 0===d||d,p=e.isUpdatable,f=void 0===p?function(){return!0}:p,g=e.isDeletable,h=void 0===g?function(){return!0}:g,v=e.actions,b=void 0===v?[]:v,E=e.createLink,y=void 0===E?"":E,O=e.expand,j=e.nested,C=e.title,x=e.updateLink,k=e.history,w=e.initVariables,_=void 0===w?{}:w,I=e.updateInputs,N=e.exportUrl,q=e.expprtFileName,S=e.appName,P=e.modelName,$=a.delete,F=a.all,T=a.update,M=Object(n.useState)(_),V=Object(o.a)(M,2),L=V[0],z=V[1];return l.a.createElement("div",null,l.a.createElement(Ie,{filters:c,onVariablesChange:function(e){z(Object(D.a)({},L,{},e))}}),l.a.createElement(xe,{exportUrl:N,expprtFileName:q,actions:b,title:C,columns:t,graphql:{all:F,delete:$,update:T},variables:L,createLink:y,deleteColumn:m,expand:O,history:k,initVariables:_,isDeletable:h,isUpdatable:f,nested:j,resultTitle:r,updateColumn:u,updateLink:x,updateInputs:I,appName:S,modelName:P}))}function qe(){var e=Object(g.a)(["\n  query fetchClients(\n    $raison_social: String\n    $code_client: String\n    $limit: Int\n    $offset: Int\n  ) {\n    response: all_clients(\n      raison_social__icontains: $raison_social\n      code_client__icontains: $code_client\n    ) {\n      results(limit: $limit, offset: $offset) {\n        id\n        raison_social\n        code_client\n        address\n        email\n        phone\n        # barem {\n        #   designation\n        #   id\n        # }\n        contacts {\n          nom\n          prenom\n          fonction\n          email\n          phone\n        }\n      }\n      totalCount\n    }\n  }\n"]);return qe=function(){return e},e}var Se=O()(qe()),De=a(89),Pe=function(e){return O()(De.mutation({operation:e,variables:{id:{type:"ID!"}},fields:["ok",{errors:["field","messages"]}]}).query)},$e=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"input";return O()(De.mutation({operation:"response:".concat(e),variables:Object(B.a)({},a,{type:t}),fields:["ok",{errors:["field","messages"]}]}).query)},Fe=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"input";return O()(De.mutation({operation:"response:".concat(e),variables:Object(B.a)({},n,{type:t}),fields:[Object(B.a)({},"ok:".concat(a),["id"])]}).query)},Te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["designation"],a=arguments.length>2?arguments[2]:void 0;return O()(De.query({operation:"response:".concat(e),variables:a,fields:["id"].concat(Object(P.a)(t))}).query)},Me=[{dataIndex:"nom",title:"Nom"},{dataIndex:"prenom",title:"Prenom"},{dataIndex:"fonction",title:"Fonction"},{dataIndex:"email",title:"Email"},{dataIndex:"phone",title:"T\xe9l\xe9phone"},{title:"Client",dataIndex:"client",render:function(e){return l.a.createElement(m.a,{type:"primary",size:"small",onClick:function(){return alert(e.id)}},C.a.get(e,"raison_social","undefinit"))}}],Ve={title:"Nouveau Contacts",fields:[{title:"Nom",name:"nom",properties:{type:"text"},required:!0},{title:"Prenom",name:"prenom",properties:{type:"text"},required:!0},{title:"Email",name:"email",properties:{type:"email"}},{title:"T\xe9l\xe9phone",name:"phone",properties:{type:"text"}},{title:"Fonction",name:"fonction",properties:{type:"text"}}]},Le=[],ze=Object(D.a)({},Ve,{fields:[].concat(Object(P.a)(Ve.fields),[{name:"client",title:"Client",properties:{type:"select",show:"raison_social",query:Te("clients",["raison_social"])},required:!0}])}),Re=[{title:"Raison Social",dataIndex:"raison_social"},{title:"Code Client",dataIndex:"code_client"},{title:"address",dataIndex:"address"},{title:"email",dataIndex:"email"},{title:"Telephone",dataIndex:"phone"},{title:"Fix",dataIndex:"fix"},{title:"Fax",dataIndex:"fax"},{title:"NIF",dataIndex:"NIF"},{title:"TIN",dataIndex:"TIN"},{title:"RC",dataIndex:"RC"}],Ue={title:"Information G\xe9n\xe9rale",fields:[{name:"raison_social",title:"Raison_social",required:!0,properties:{type:"text"}},{name:"code_client",title:"Code Client",required:!0,properties:{type:"text"}},{name:"address",title:"Adresse",properties:{type:"text"}},{name:"phone",title:"Mobile",properties:{type:"text"}},{name:"fix",title:"Fix",properties:{type:"text"}},{name:"fax",title:"Fax",properties:{type:"text"}},{name:"email",title:"Email",properties:{type:"email"}},{name:"NIF",title:"NIF",properties:{type:"text"}},{name:"TIN",title:"TIN",properties:{type:"text"}},{name:"RC",title:"N\xb0 registre commercial",properties:{type:"text"}}]},Ae=[{title:"Raison Social",name:"raison_social",properties:{type:"text"}},{title:"Code Client",name:"code_client",properties:{type:"text"}}],Ge=(Object(D.a)({},Ue,{fields:[].concat(Object(P.a)(Ue.fields),[{title:"Contacts",name:"contact",properties:{type:"multiple",fields:Ve.fields}}])}),Object(D.a)({},Ue,{fields:[].concat(Object(P.a)(Ue.fields),[{title:"Contacts",name:"contacts_add",properties:{type:"multiple",fields:Ve.fields}}])}));function Ye(){var e=Object(g.a)(["\n  query fetchContacts(\n    $nom: String\n    $prenom: String\n    $phone: String\n    $email: String\n    $client: ID\n    $limit: Int\n    $offset: Int\n  ) {\n    response: all_contacts(\n      nom__icontains: $nom\n      prenom__icontains: $prenom\n      email__icontains: $email\n      phone__icontains: $phone\n      client: $client\n    ) {\n      results(limit: $limit, offset: $offset) {\n        id\n        nom\n        prenom\n        fonction\n        email\n        phone\n        client {\n          raison_social\n          id\n        }\n      }\n      totalCount\n    }\n  }\n"]);return Ye=function(){return e},e}var We=O()(Ye());var Je=[{title:"Designation",dataIndex:"model",render:function(e){return l.a.createElement("div",null,e&&e.designation)}},{title:"Marque",dataIndex:"marque",render:function(e){return l.a.createElement(ke.a,{color:"green"},e)}},{title:"Matricule",dataIndex:"matricule"},{title:"Nature",dataIndex:"nature"},{title:"Ann\xe9e",dataIndex:"year",render:function(e){return l.a.createElement(ke.a,{color:"default"},e)}}],Be={title:"Nouvelle V\xe9hicule",fields:[{name:"model",title:"Model",required:!0,properties:{divider:"engine_type.designation",type:"select",query:Te("enginemodels",["designation",{engine_type:["designation"]}]),get:"model.id"}},{name:"marque",title:"Marque",properties:{type:"text"}},{name:"matricule",required:!0,title:"Matricule",properties:{type:"text"}},{name:"nature",title:"Nature",properties:{type:"text"}},{name:"year",title:"Ann\xe9e",properties:{type:"date",picker:"year"}}],info:"creer une nouvelle v\xe9hicule dans le park Rail Logistic"},He={title:"Mettre \xe0 jour V\xe9hicule",fields:[{name:"model",editable:!1,title:"Model",required:!0,properties:{divider:"engine_type.designation",type:"select",query:Te("enginemodels",["designation",{engine_type:["designation"]}]),get:"model.id"}},{name:"marque",title:"Marque",properties:{type:"text"}},{name:"matricule",required:!0,title:"Matricule",properties:{type:"text"}},{name:"nature",title:"Nature",properties:{type:"text"}},{name:"year",title:"Ann\xe9e",properties:{type:"number"}}],info:"creer une nouvelle v\xe9hicule dans le park Rail Logistic"},Ke=[{name:"model",title:"Model",span:5,properties:{divider:"engine_type.designation",type:"select",query:Te("enginemodels",["designation",{engine_type:["designation"]}]),get:"model.id"}},{name:"matricule__icontains",title:"Matricule",properties:{type:"text"}},{name:"marque__icontains",title:"Marque",properties:{type:"text"}}];function Qe(){var e=Object(g.a)(["\n  query ALL_ENGINES(\n    $limit: Int\n    $offset: Int\n    $matricule__icontains: String\n    $year: Int\n    $marque__icontains: String\n    $model: ID\n  ) {\n    response: all_engines(\n      matricule__icontains: $matricule__icontains\n      marque__icontains: $marque__icontains\n      year__icontains: $year\n      model: $model\n    ) {\n      results(limit: $limit, offset: $offset) {\n        id\n        marque\n        matricule\n        model {\n          id\n          designation\n        }\n        nature\n        year\n      }\n      totalCount\n    }\n  }\n"]);return Qe=function(){return e},e}var Xe=O()(Qe());var Ze=[{component:function(e){return Object(S.a)(e),l.a.createElement("div",null,l.a.createElement(Ne,{title:"List des clients",history:_,createLink:"/clients/new",columns:Re,filters:Ae,graphql:{all:Se,delete:Pe("delete_client")},expprtFileName:"clients",appName:"clients",modelName:"Client"}))},path:"/clients/list"},{component:function(e){return Object(S.a)(e),l.a.createElement(Ee,{history:_,span:8,label:!0,inputs:Ge,mutation:Fe("create_nested_client","CreateClientInput!","client")})},path:"/clients/new"},{path:"/clients/contacts/list",component:function(e){return Object(S.a)(e),l.a.createElement("div",null,l.a.createElement(Ne,{columns:Me,filters:Le,createLink:"/clients/contacts/new",actions:[],initVariables:{},deleteColumn:!1,updateColumn:!1,history:_,graphql:{all:We},expprtFileName:"contacts",appName:"clients",modelName:"Contact"}))}},{path:"/clients/contacts/new",component:function(e){return Object(S.a)(e),l.a.createElement(Ee,{label:!0,span:12,history:_,inputs:ze,initialValues:{},mutation:$e("create_contact","ContactCreateGenericType!")})}},{path:"/park/vehicules/list",component:function(e){return Object(S.a)(e),l.a.createElement("div",null,l.a.createElement(Ne,{title:"Liste des V\xe9hicules de Rail Logistic",columns:Je,filters:Ke,createLink:"/park/vehicules/create",actions:[],initVariables:{},deleteColumn:!1,updateColumn:!0,updateInputs:{title:He.title,fields:He.fields},history:_,graphql:{all:Xe,delete:Pe("delete_engine"),update:$e("update_engine","EngineUpdateGenericType!")},expprtFileName:"Park rail logistic",appName:"park",modelName:"Engine"}))}},{path:"/park/vehicules/create",component:function(e){return Object(S.a)(e),l.a.createElement(Ee,{label:!0,buildInput:function(e){var t;return Object(D.a)({},e,{year:null===(t=e.year)||void 0===t?void 0:t.year()})},title:"Nouvelle V\xe9hicule",span:12,history:_,inputs:Be,initialValues:{},mutation:$e("create_engine","EngineCreateGenericType!")})}}],et=a(78);function tt(){return l.a.createElement(c.a.Content,{className:"content",style:{minHeight:280}},l.a.createElement(et.c,null,Ze.map((function(e){return l.a.createElement(et.a,{path:e.path,component:e.component,exact:!0})}))))}var at=a(32),nt=a(290),lt=a(33),it=a(291),rt=a(79),ot=a(288),ct=a(287),st=Object(ct.a)((function(e){var t=e.graphQLErrors,a=e.networkError;e.response;t&&t.map((function(e){var t=e.message,a=e.locations,n=e.path;e.nodes;console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(a,", Path: ").concat(n)),console.log(a)})),a&&console.log(a),a&&a.result&&a.result.map&&a.result.map((function(e){return console.log(e)})),a&&a.statusCode})),ut=Object(ot.a)((function(e,t){var a=t.headers,n=localStorage.getItem("token");return{headers:Object(D.a)({},a,{authorization:n?"JWT ".concat(n):""})}})),dt=(new lt.a((function(e,t){var a=localStorage.getItem("token");return null==a&&window.location.replace("/"),e.setContext({headers:{authorization:a?"JWT ".concat(a):""}}),t(e)})),new nt.a({uri:N,credentials:"same-origin"})),mt=new rt.c({cache:new it.a({addTypename:!1}),link:lt.a.from([st,ut,dt])}),pt=a(211),ft=a.n(pt),gt=a(623),ht=a(620),vt=a(621),bt=a(622),Et=[{title:"Dashboard",href:"/dashboard",type:"signle",icon:l.a.createElement(ht.a,null)},{title:"Clients",type:"multiple",icon:l.a.createElement(vt.a,null),pages:[{title:"List des clients",href:"/clients/list"},{title:"Nouveau Client",href:"/clients/new"},{title:"contacts",href:"/clients/contacts/list"}]},{title:"Park",type:"multiple",icon:l.a.createElement(bt.a,null),pages:[{href:"/park/vehicules/list",title:"List"},{href:"/park/vehicules/create",title:"Nouveau V\xe9hicule"}]}],yt=l.a.createContext({});var Ot=function(){var e=Object(n.useState)("Rail Transport"),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)(!1),p=Object(o.a)(r,2),f=p[0],g=p[1];return l.a.createElement(yt.Provider,{value:{title:a,setValue:i}},l.a.createElement(at.a,{client:mt},l.a.createElement(et.b,{history:_},l.a.createElement(c.a,{style:{height:"100%"}},l.a.createElement("div",{className:"sidebarContainer"},l.a.createElement(q,{color:"dark",links:Et})),l.a.createElement(s.a,{width:300,visible:f,className:"drawer",closable:!1,placement:"left",onClose:function(){return g(!1)}},l.a.createElement(q,{color:"dark",links:Et})),l.a.createElement(c.a,null,l.a.createElement(c.a.Header,{style:{backgroundColor:"white",padding:0}},l.a.createElement(u.a,{justify:"space-between",align:"middle",style:{width:"100%",paddingRight:16,paddingLeft:16}},l.a.createElement(d.a,{span:20,style:{textAlign:"left"}},l.a.createElement("div",{style:{display:"flex",alignItems:"baseline",lineHeight:0}},l.a.createElement(ft.a,{level:3},a))),l.a.createElement(d.a,{span:4,style:{textAlign:"right"}},l.a.createElement(m.a,{onClick:function(){g(!0)},className:"showMenu",icon:l.a.createElement(gt.a,null),style:{marginLeft:"auto"}})))),l.a.createElement(tt,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Ot,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[295,1,2]]]);
//# sourceMappingURL=main.80674573.chunk.js.map