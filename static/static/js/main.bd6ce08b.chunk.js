(this.webpackJsonptransport_frontend=this.webpackJsonptransport_frontend||[]).push([[0],{295:function(e,t,a){e.exports=a(593)},300:function(e,t,a){},301:function(e,t,a){},593:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),i=a.n(r),o=(a(300),a(13)),c=(a(301),a(599)),u=a(105),s=a(57),m=a(44),d=a(605),p=a(120),f=a(51),v=a(601),g=a(598),h=a(602),b=a(55),E=a(24),y=a.n(E),O=a(19),j=a.n(O);function C(){var e=Object(f.a)(["\n    query getMe{\n      me {\n        first_name,\n        last_name,\n    profile {\n      photo\n      job\n    }\n  }\n    }\n  "]);return C=function(){return e},e}function x(){var e=Object(b.b)(y()(C())).data;return l.a.createElement("div",{style:{width:"100%",height:200,display:"flex",justifyContent:"center",flexDirection:"row"}},l.a.createElement(v.a,{bordered:!1,style:{backgroundColor:"transparent",textAlign:"center"}},l.a.createElement(g.a,{size:"large",src:"http://".concat(window.location.hostname,":8000/").concat(j.a.get(e,"me.profile.photo",""))}),l.a.createElement("br",null),l.a.createElement(h.a,{type:"danger",style:{color:"white",textAlign:"center"},level:4},j.a.get(e,"me.first_name","")," ",j.a.get(e,"me.last_name",""))))}var k=a(46),w=Object(k.a)(),_="http://".concat(window.location.hostname,":").concat(80),I="http://".concat(window.location.hostname).concat("","/gql");function q(e){var t=e.color,a=void 0===t?"dark":t,r=e.links,i=Object(n.useState)(!1),u=Object(o.a)(i,2),s=u[0],m=u[1];return l.a.createElement(c.a.Sider,{collapsible:!0,breakpoint:"md",width:"250",style:{paddingTop:64},collapsed:s,onCollapse:function(e){return m(!s)}},l.a.createElement(x,null),l.a.createElement(d.a,{theme:a,mode:"inline",defaultSelectedKeys:[w.location.pathname],defaultOpenKeys:r.filter((function(e){return"multiple"===e.type&&-1!==e.pages.findIndex((function(e){return e.href===w.location.pathname}))})).map((function(e){return e.title}))},r.map((function(e,t){return"signle"===e.type?l.a.createElement(d.a.Item,{key:e.href,className:"customclass"},l.a.createElement(l.a.Fragment,null,e.icon,l.a.createElement("span",null," ",e.title),l.a.createElement(p.a,{to:e.href}))):l.a.createElement(d.a.SubMenu,{key:e.title,title:l.a.createElement("span",null,e.icon,l.a.createElement("span",null,e.title))},e.pages.map((function(e,t){return l.a.createElement(d.a.Item,{key:e.href},l.a.createElement("strong",null," ",e.title),l.a.createElement(p.a,{to:e.href}))})))}))))}var N=a(41),S=a(603),P=a(604),D=a(608),F=a(606),V=function(e){var t=e.visible,a=e.onCreate,n=e.onCancel,r=S.a.useForm(),i=Object(o.a)(r,1)[0];return l.a.createElement(P.a,{destroyOnClose:!0,afterClose:function(){return i.resetFields()},visible:t,title:"Create a new collection",okText:"Create",cancelText:"Cancel",onCancel:n,onOk:function(){i.validateFields().then((function(e){i.resetFields(),a(e)})).catch((function(e){console.log("Validate Failed:",e)}))}},l.a.createElement(S.a,{layout:"vertical",name:"form_in_modal",initialValues:{modifier:"public"}},l.a.createElement(S.a.Item,{name:"title",label:"Title",rules:[{required:!0,message:"Please input the title of collection!"}]},l.a.createElement(D.a,null)),l.a.createElement(S.a.Item,{name:"description",label:"Description"},l.a.createElement(D.a,{type:"textarea"})),l.a.createElement(S.a.Item,{name:"modifier",className:"collection-create-form_last-form-item"},l.a.createElement(F.a.Group,null,l.a.createElement(F.a,{value:"public"},"Public"),l.a.createElement(F.a,{value:"private"},"Private")))))},M=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement(m.a,{type:"primary",onClick:function(){r(!0)}},"New Collection"),l.a.createElement(V,{visible:a,onCreate:function(e){console.log("Received values of form: ",e),r(!1)},onCancel:function(){r(!1)}}))};var T=a(17),$=a(10),L=a(9),z=a(609);function R(e){var t=e.fieldDef,a=e.onChange,n=e.label,r=void 0===n||n,i=t.properties.defaultChecked,o=t.title,c=t.name,u=t.required,s=t.rules,m=void 0===s?[]:s;return l.a.createElement(S.a.Item,{label:r?o:"",labelCol:{span:24},name:c,valuePropName:"checked",rules:[{required:u,message:"".concat(o," est obligatoire !")}].concat(Object(L.a)(m)),style:{width:"100%"}},l.a.createElement(z.a,{defaultChecked:i,onChange:function(e){return a(Object($.a)({},c,e.target.checked))},style:{width:"100%"}},o))}var U=a(600);function A(e){var t=e.fieldDef,a=(e.values,e.onChange),n=e.label,r=void 0===n||n,i=t.properties,o=i.picker,c=(i.defaultDate,i.format),u=t.title,s=t.name,m=t.required,d=t.rules,p=void 0===d?[]:d,f=t.size,v=void 0===f?"large":f;return l.a.createElement(S.a.Item,{label:r?u:"",labelCol:{span:24},name:s,rules:[{type:"object",required:m,message:"".concat(u," est obligatoire !")}].concat(Object(L.a)(p)),style:{width:"100%"}},l.a.createElement(U.a,{placeholder:u,format:c||void 0,picker:o,allowClear:!0,onChange:function(e){a(Object($.a)({},s,e))},size:v,style:{width:"100%"}}))}var G=a(293);function Y(e){var t=e.fieldDef,a=e.onChange,n=e.label,r=void 0===n||n,i=t.properties,o=(i.begin,i.end,i.picker,t.name),c=t.title,u=t.required,s=t.size,m=void 0===s?"large":s;return l.a.createElement(S.a.Item,{label:r?c:"",style:{width:"100%"},name:o,rules:[{required:u,message:"".concat(c," est obligatoire !")}]},l.a.createElement(U.a.RangePicker,{size:m,style:{width:"100%"},locale:G.a,onChange:function(e){var t,n;e?a((t={},Object($.a)(t,o[0],e&&e[0]&&e[0].format("YYYY-MM-DD")),Object($.a)(t,o[1],e&&e[1]&&e[1].format("YYYY-MM-DD")),t)):a((n={},Object($.a)(n,o[0],null),Object($.a)(n,o[1],null),n))}}))}var J=a(611),W=J.a.Option,B=J.a.OptGroup;function H(e){var t=e.fieldDef,a=e.onChange,n=e.values,r=e.save,i=e.label,o=void 0===i||i,c=t.properties,u=c.responseTitle,s=void 0===u?"response":u,m=c.defaultValue,d=c.query,p=c.variables,f=c.mode,v=c.filters,g=void 0===v?[]:v,h=c.show,E=void 0===h?"designation":h,y=c.identifier,O=void 0===y?"id":y,C=c.get_items,x=c.divider,k=t.size,w=void 0===k?"large":k,_=t.name,I=t.title,q=t.required,N=t.rules,P=void 0===N?[]:N,D=t.editable,F=void 0===D||D,V=Object(b.b)(d,{variables:Object(T.a)({},p,{},g.reduce((function(e,t){return Object(T.a)({},e,Object($.a)({},t,n?n[t]:""))}),{}))}),M=V.data,z=V.loading,R=C?j.a.get(M,"".concat(s,".").concat(C),[]):j.a.get(M,s,[]),U=function(e){a(Object($.a)({},_,e))},A=x?j.a.groupBy(R,x):null,G=A?Object.keys(A):null;return l.a.createElement(S.a.Item,{label:o?I:"",labelCol:{span:24},name:_,rules:[{required:q,message:"".concat(I," est obligatoire !")}].concat(Object(L.a)(P)),style:{width:"100%"}},l.a.createElement(J.a,{disabled:!F,size:w,onChange:r?function(e,t){var a=R[R.findIndex((function(t){return t[O]===e}))],n=r.fields.reduce((function(e,t){return Object(T.a)({},e,Object($.a)({},t,j.a.get(a,t,"")))}),{});r.action(n),U(e)}:U,mode:f,placeholder:I,loading:z,allowClear:!0,defaultValue:m,showSearch:!0,optionFilterProp:"children"},x&&A&&G?null===G||void 0===G?void 0:G.map((function(e){return l.a.createElement(B,{label:e},A[e].map((function(e){return l.a.createElement(W,{key:e[O],value:e[O]},e[E])})))})):R.map((function(e){return l.a.createElement(W,{key:e[O],value:e[O]},e[E])}))))}function K(e){var t=e.fieldDef,a=(e.values,e.onChange),n=e.save,r=e.label,i=void 0===r||r,o=t.properties,c=o.defaultValue,u=o.mode,s=o.choices,m=t.size,d=void 0===m?"large":m,p=t.name,f=t.title,v=t.required,g=t.rules,h=void 0===g?[]:g,b=function(e){a(Object($.a)({},p,e))};return l.a.createElement(S.a.Item,{rules:[{required:v,message:"".concat(f," est obligatoire !")}].concat(Object(L.a)(h)),name:p,label:i?f:"",style:{width:"100%"}},l.a.createElement(J.a,{onChange:n?function(e,t){n.action(Object($.a)({},p,e)),b(e)}:b,mode:u,allowClear:!0,size:d,placeholder:f,defaultValue:c},s.map((function(e){return l.a.createElement(J.a.Option,{value:e.value},e.title)}))))}function Q(e){var t=e.fieldDef,a=e.onChange,n=(e.values,e.label),r=void 0===n||n,i=t.properties,o=i.defaultValue,c=i.type,u=void 0===c?"text":c,s=t.name,m=t.title,d=t.required,p=t.size,f=void 0===p?"large":p,v=t.info;return l.a.createElement(S.a.Item,{name:s,label:r?m:"",help:v,rules:[{required:d,message:"".concat(m," est obligatoire !")}]},l.a.createElement(D.a,{defaultValue:o,onChange:function(e){return a(Object($.a)({},s,e.target.value))},type:u||"text",size:f,placeholder:m,name:s}))}function X(e){var t=e.fieldDef,a=e.onChange,n=void 0===a?function(e){}:a,r=e.label,i=void 0!==r&&r;e.save,e.values;switch(t.properties.type){case"select":return l.a.createElement(H,{fieldDef:t,onChange:n,label:i});case"static":return l.a.createElement(K,{fieldDef:t,onChange:n,label:i});case"date":return l.a.createElement(A,{fieldDef:t,onChange:n,label:i});case"boolean":return l.a.createElement(R,{fieldDef:t,onChange:n,label:i});case"date_range":return l.a.createElement(Y,{fieldDef:t,onChange:n,label:i});default:return l.a.createElement(Q,{fieldDef:t,onChange:n,label:i})}}var Z=a(52),ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=[];return t.forEach((function(t){var n=e.reduce((function(e,a){return Object(T.a)({},e,Object($.a)({},a.field,j.a.get(t,a.properties.get,t[a.name])))}),{});a.push(n)})),a},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a={},n=e.filter((function(e){return"multiple"===e.properties.type}));return a=Object(T.a)({},a,{},e.filter((function(e){return!("multiple"===e.properties.type)})).reduce((function(e,a){return Object(T.a)({},e,Object($.a)({},a.name,"multiple"===a.properties.mode?j.a.get(t,a.name,[]).map((function(e){return j.a.get(e,"id",[])})):j.a.get(t,a.properties.get+"",t[a.name])))}),{})),n.forEach((function(e){a=Object(T.a)({},a,Object($.a)({},e.name,Object(L.a)(ee(e.properties.fields,t[e.name]))))})),a},ae=a(106),ne=a(614),le=a(615),re=a(612),ie=a(613);function oe(e){var t=e.info,a=void 0===t?"dsdsd":t;return l.a.createElement("div",null,l.a.createElement(re.a,{content:l.a.createElement("div",{style:{width:200}},l.a.createElement(h.a.Text,null,a)),placement:"right"},l.a.createElement(ie.a,{style:{fontSize:12,color:"#888888",marginLeft:8}})))}function ce(e){var t=e.fields,a=e.index,r=(e.unique,e.form,Object(n.useState)({})),i=Object(o.a)(r,2),c=i[0],m=i[1],d=function(e){m(Object(T.a)({},c,{},e))};return l.a.createElement(u.a,{gutter:16,align:"middle"},t.map((function(e,n){return l.a.createElement(s.a,{xs:24,md:Math.floor(24/t.length),style:{alignSelf:"center"}},l.a.createElement(X,{fieldDef:Object(T.a)({},e,{name:void 0!==a?[a,e.name]:e.name}),onChange:d,label:!1}))})))}function ue(e){var t=e.inputs;return l.a.createElement(S.a.List,{name:t.name},(function(e,a){var n=a.add,r=a.remove;return l.a.createElement(v.a,{title:l.a.createElement(u.a,{justify:"space-between"},l.a.createElement(s.a,{style:{display:"flex",alignItems:"center"}},l.a.createElement("div",{style:{display:"flex"}},t.title," ",t.info&&l.a.createElement(oe,{info:t.info}))),l.a.createElement(s.a,{style:{display:"flex",alignItems:"center"}},l.a.createElement(m.a,{type:"primary",shape:"circle",onClick:function(){n()}},l.a.createElement(ne.a,null))))},0===e.length?l.a.createElement(ae.a,{description:"aucun \xe9l\xe9ment n'a encore \xe9t\xe9 ajout\xe9!"}):null,e.map((function(a,n){return l.a.createElement(u.a,{gutter:[16,2],style:{display:"flex",alignItems:"start"}},l.a.createElement(s.a,{span:23},l.a.createElement(S.a.Item,{key:a.key},l.a.createElement(ce,{fields:t.properties.fields,index:n}))),e.length>0?l.a.createElement(s.a,{span:1},l.a.createElement(m.a,{size:"small",className:"dynamic-delete-button",icon:l.a.createElement(le.a,null),danger:!0,onClick:function(){r(a.name)}})):null)})))}))}var se=a(216),me=a.n(se);me.a.setAppElement("#root");var de={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};function pe(e){var t,a=e.inputs,r=(e.onFinishUpdate,e.title,e.initialValues),i=e.span,c=void 0===i?12:i,m=e.form,d=e.onFinish,p=e.label,f=void 0!==p&&p,g=e.card,h=void 0===g||g,b=Object(Z.useForm)(),E=Object(o.a)(b,1)[0],y=Object(n.useState)({}),O=Object(o.a)(y,2),j=O[0],C=O[1],x=function(e){C(Object(T.a)({},j,{},e))},k=l.a.useState(!1),w=Object(o.a)(k,2),_=w[0],I=w[1];function q(){I(!1)}return l.a.createElement("div",null,l.a.createElement(me.a,{isOpen:_,onAfterOpen:function(){t.style.color="#f00"},onRequestClose:q,style:de,contentLabel:"Example Modal"},l.a.createElement("h2",{ref:function(e){return t=e}},"Hello"),l.a.createElement("button",{onClick:q},"close"),l.a.createElement("div",null,"I am a modal"),l.a.createElement("form",null,l.a.createElement("input",null),l.a.createElement("button",null,"tab navigation"),l.a.createElement("button",null,"stays"),l.a.createElement("button",null,"inside"),l.a.createElement("button",null,"the modal"))),l.a.createElement(v.a,{title:h?l.a.createElement("div",{style:{display:"flex"}},a.title," ",a.info&&l.a.createElement(oe,{info:a.info})):null,style:{marginBottom:16}},l.a.createElement(S.a,Object.assign({initialValues:r?te(a.fields,r):{}},{labelCol:{span:24},wrapperCol:{span:24}},{form:m||E,name:"form",onFinish:d}),l.a.createElement("div",{className:"form"},l.a.createElement("div",{title:a.title},l.a.createElement(u.a,{gutter:[20,0]},a.fields.map((function(e){return"multiple"===e.properties.type?l.a.createElement(s.a,{span:24},l.a.createElement(ue,{inputs:e})):l.a.createElement(s.a,{md:c,xs:24},l.a.createElement(X,{fieldDef:e,label:f,onChange:x,values:j}))}))))))))}var fe=a(607);function ve(e){var t=e.resultName,a=void 0===t?"response":t,r=(e.history,e.mutation),i=e.buildInput,c=void 0===i?function(e){return e}:i,d=e.inputs,p=(e.onFinishUpdate,e.redirect,e.title,e.initialValues),f=void 0===p?{}:p,v=e.span,g=void 0===v?12:v,h=(e.updateForm,e.onFinish,e.label),E=void 0!==h&&h,y=e.checkResponse,O=void 0===y?function(e){return j.a.get(e,"data.".concat(a,".ok"),!1)}:y,C=Object(b.a)(r),x=Object(o.a)(C,1)[0],k=Object(Z.useForm)(),w=Object(o.a)(k,1)[0],_=Object(n.useState)(!1),I=Object(o.a)(_,2);I[0],I[1];return l.a.createElement("div",null,l.a.createElement(pe,{title:"Create Person",form:w,mode:"create",span:g,label:E,inputs:d,onFinish:function(e){return function(e){var t=c(e);x({variables:{input:t}}).then((function(e){O&&O(e)?fe.a.success("\xc9l\xe9ment cr\xe9\xe9 avec succ\xe8s"):(j.a.get(e,"data.".concat(a,".errors"),!1)&&fe.a.error("Une erreur est survenue dans les champs suivant : ".concat(j.a.get(e,"data.".concat(a,".errors"),[]).reduce((function(e,t){return"".concat(e,"  ").concat(t.field)}),""))),console.log(j.a.get(e,"data.".concat(a,".errors"))))})).catch((function(e){fe.a.error("Une erreur est survenue"),console.log(e)}))}(e)},initialValues:f}),l.a.createElement(u.a,{gutter:16,justify:"end"},l.a.createElement(s.a,{span:3},l.a.createElement(m.a,{onClick:function(){w.resetFields()},htmlType:"button",style:{width:"100%"},type:"default"},"supprimer")),l.a.createElement(s.a,{span:3},l.a.createElement(m.a,{onClick:function(){w.submit()},style:{width:"100%"},type:"primary"},"engregistrer"))))}var ge=a(88),he=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"input";return y()(ge.mutation({operation:"response:".concat(e),variables:Object($.a)({},a,{type:t}),fields:["ok",{errors:["field","messages"]}]}).query)},be=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"input";return y()(ge.mutation({operation:"response:".concat(e),variables:Object($.a)({},n,{type:t}),fields:[Object($.a)({},"ok:".concat(a),["id"])]}).query)},Ee=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:["designation"],a=arguments.length>2?arguments[2]:void 0;return y()(ge.query({operation:"response:".concat(e),variables:a,fields:["id"].concat(Object(L.a)(t))}).query)},ye=[{dataIndex:"nom",title:"Nom"},{dataIndex:"prenom",title:"Prenom"},{dataIndex:"fonction",title:"Fonction"},{dataIndex:"email",title:"Email"},{dataIndex:"phone",title:"T\xe9l\xe9phone"},{title:"Client",dataIndex:"client",render:function(e){return l.a.createElement(m.a,{type:"primary",size:"small",onClick:function(){return alert(e.id)}},j.a.get(e,"raison_social","undefinit"))}}],Oe={title:"Nouveau Contacts",fields:[{title:"Nom",name:"nom",properties:{type:"text"},required:!0},{title:"Prenom",name:"prenom",properties:{type:"text"},required:!0},{title:"Email",name:"email",properties:{type:"email"}},{title:"T\xe9l\xe9phone",name:"phone",properties:{type:"text"}},{title:"Fonction",name:"fonction",properties:{type:"text"}}]},je=[],Ce=Object(T.a)({},Oe,{fields:[].concat(Object(L.a)(Oe.fields),[{name:"client",title:"Client",properties:{type:"select",show:"raison_social",query:Ee("clients",["raison_social"])},required:!0}])}),xe={title:"Information G\xe9n\xe9rale",fields:[{name:"raison_social",title:"Raison_social",required:!0,properties:{type:"text"}},{name:"code_client",title:"Code Client",required:!0,properties:{type:"text"}},{name:"address",title:"Adresse",properties:{type:"text"}},{name:"phone",title:"Mobile",properties:{type:"text"}},{name:"fix",title:"Fix",properties:{type:"text"}},{name:"fax",title:"Fax",properties:{type:"text"}},{name:"email",title:"Email",properties:{type:"email"}},{name:"NIF",title:"NIF",properties:{type:"text"}},{name:"TIN",title:"TIN",properties:{type:"text"}},{name:"RC",title:"N\xb0 registre commercial",properties:{type:"text"}}]},ke=(Object(T.a)({},xe,{fields:[].concat(Object(L.a)(xe.fields),[{title:"Contacts",name:"contact",properties:{type:"multiple",fields:Oe.fields}}])}),Object(T.a)({},xe,{fields:[].concat(Object(L.a)(xe.fields),[{title:"Contacts",name:"contacts_add",properties:{type:"multiple",fields:Oe.fields}}])}));var we=a(618),_e=a(284),Ie=a.n(_e),qe=a(610),Ne=a(616),Se=a(617),Pe=a(208),De=a.n(Pe);a(151);function Fe(e){var t=e.data,a=void 0===t?[]:t,r=e.onDelete,i=e.onSelect,c=e.onUpdate,u=e.history,s=e.loading,p=e.actions,f=void 0===p?[]:p,v=e.columns,g=e.updateColumn,h=void 0===g||g,b=e.deleteColumn,E=void 0===b||b,y=e.isUpdatable,O=void 0===y?function(){return!0}:y,C=e.isDeletable,x=void 0===C?function(){return!0}:C,k=e.updateLink,w=(e.refetch,e.pagination),_=e.fetchMoreData,I=e.title,q=e.count,N=e.updateInputs,S=Object(n.useState)({}),D=Object(o.a)(S,2),F=D[0],V=D[1],M=Object(n.useState)(!1),T=Object(o.a)(M,2),$=T[0],z=T[1],R=Object(Z.useForm)(),U=Object(o.a)(R,1)[0],A=Object(L.a)(v),G=w.onPageChange,Y=w.onRowPerPageChange,W=w.page,B=w.rowPerPage;return h&&A.push({title:"modifier",render:function(e){return O(e)?l.a.createElement(m.a,{icon:l.a.createElement(Ne.a,null),onClick:function(){k?u&&u.push(k+"/".concat(e.id)):(U.resetFields(),U.setFieldsValue(F),V(e),i&&i(e),z(!0))}}):null},width:80,align:"center"}),E&&A.push({title:"supprimer",render:function(e){return x(e)?l.a.createElement(m.a,{icon:l.a.createElement(le.a,null),danger:!0,onClick:function(){var t;t=e,De()({title:"Voulez-vous supprimer cet objet?",content:j.a.get(t,"designation",""),okText:"supprimer",cancelText:"annuler",onOk:function(){r&&r(t.id)}})}}):null},width:80,align:"center"}),f.length>0&&A.push({title:"actions",render:function(e){return l.a.createElement(qe.a,{overlay:l.a.createElement(d.a,{theme:"dark"},f.map((function(t){return l.a.createElement(d.a.Item,{style:{alignItems:"center",color:"white",display:"flex",justifyContent:"space-between",width:130},key:"1",onClick:function(){return t.onClick(e)}},t.title,l.a.createElement(t.icon,null))})))},l.a.createElement(m.a,{size:"small",type:"ghost",icon:l.a.createElement(Se.a,null)}))},width:40,align:"center"}),l.a.createElement("div",null,N?l.a.createElement(P.a,{key:F,afterClose:function(){z(!1),U.resetFields(),V({}),i&&i({}),P.a.destroyAll()},destroyOnClose:!0,visible:$,onCancel:function(){z(!1),U.resetFields(),V({}),i&&i({}),P.a.destroyAll()},title:N.title,onOk:function(){U.validateFields().then((function(e){c&&c(e),U.resetFields()}))}},l.a.createElement(pe,{initialValues:F,card:!1,inputs:N,title:"",onFinish:function(e){console.log()}})):null,l.a.createElement(Ie.a,{rowKey:"id",loading:s,columns:A,dataSource:a.slice(W*B,W*B+B),pagination:!1,bordered:!0,title:function(){return l.a.createElement("div",null,I)},size:"middle"}),l.a.createElement("br",null),l.a.createElement("div",{style:{textAlign:"right"}},l.a.createElement(m.a.Group,null,l.a.createElement(m.a,{disabled:0===W,size:"small",onClick:function(){return G(W-1)}},"<"),l.a.createElement("div",{style:{width:5}}," "),l.a.createElement(m.a,{disabled:a.length==q&&Math.floor(a.length/B)==W,size:"small",onClick:function(){G(W+1),_&&_(B,W)}}," ",">"," "))," ",l.a.createElement(J.a,{onChange:function(e){Y(e),G(0)},value:w.rowPerPage,size:"small"},l.a.createElement(J.a.Option,{value:10},"10 / page"),l.a.createElement(J.a.Option,{value:20},"20 / page"),l.a.createElement(J.a.Option,{value:40},"40 / page"))))}function Ve(e){var t=e.onClose,a=e.visible,r=e.fields,i=e.page,c=void 0===i?0:i,d=e.rowPerPage,p=e.variables,f=e.filename,v=void 0===f?"data":f,g=e.url,h=void 0===g?"export/xls":g,b=e.appName,E=e.modelName,y=Object(n.useState)(r?r.map((function(e){return Object(T.a)({},e)})):[]),O=Object(o.a)(y,2),j=O[0],C=O[1],x=Object(n.useState)("all"),k=Object(o.a)(x,2),w=k[0],I=k[1],q=Object(n.useState)("all"),N=Object(o.a)(q,2),V=N[0],M=N[1],$=Object(n.useState)(v),R=Object(o.a)($,2),U=R[0],A=R[1];return l.a.createElement("form",{action:"".concat(_,"/").concat(h),id:"form",method:"get"},l.a.createElement("input",{hidden:!0,name:"items",value:w}),l.a.createElement("input",{hidden:!0,name:"selection",value:V}),l.a.createElement("input",{hidden:!0,name:"variables",value:JSON.stringify(p)}),l.a.createElement("input",{hidden:!0,name:"filename",value:U}),l.a.createElement("input",{hidden:!0,name:"app_name",value:b}),l.a.createElement("input",{hidden:!0,name:"model_name",value:E}),l.a.createElement("input",{hidden:!0,name:"fields",value:j.map((function(e){return e.name})).toString()}),l.a.createElement("input",{hidden:!0,name:"headers",value:j.map((function(e){return e.title})).toString()}),l.a.createElement("input",{hidden:!0,name:"page",value:c}),l.a.createElement("input",{hidden:!0,name:"rowPerPage",value:d}),l.a.createElement(P.a,{width:800,destroyOnClose:!0,visible:a,footer:l.a.createElement("div",null,l.a.createElement(m.a,{onClick:function(){t()}},"fermer"),l.a.createElement(m.a,{type:"primary",htmlType:"submit",form:"form"},"exporter")),okText:"exporter",cancelText:"fermer",onCancel:function(){return t()},title:"Exporter"},l.a.createElement(u.a,{gutter:[10,10]},l.a.createElement(s.a,{span:24},l.a.createElement("h3",null,l.a.createElement("u",null,"Colonne \xe0 exporter"))),null===r||void 0===r?void 0:r.map((function(e){return l.a.createElement(s.a,{span:8},l.a.createElement(z.a,{checked:-1!==j.findIndex((function(t){return t.name==e.name})),onChange:function(t){t.target.checked&&e.name?C([].concat(Object(L.a)(j),[e])):!t.target.checked&&e.name&&C(j.filter((function(t){return t.name!==e.name})))}},e.title))}))),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(s.a,{span:24},l.a.createElement("h3",null,l.a.createElement("u",null,"Nombre des items"))),l.a.createElement("hr",null)," ",l.a.createElement(s.a,{span:24},l.a.createElement(F.a.Group,{value:w,onChange:function(e){return I(e.target.value)}},l.a.createElement(F.a,{value:"all"},"Tout"),l.a.createElement(F.a,{value:"displayed"},"Elements affich\xe9s")))),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(s.a,{span:24},l.a.createElement("h3",null,l.a.createElement("u",null,"Selection"))),l.a.createElement("hr",null)," ",l.a.createElement(s.a,{span:24},l.a.createElement(F.a.Group,{value:V,onChange:function(e){return M(e.target.value)}},l.a.createElement(F.a,{value:"all"},"Tout"),l.a.createElement(F.a,{value:"filter"},"Resultats de la recherce")))),l.a.createElement("br",null),l.a.createElement(u.a,null,l.a.createElement(S.a.Item,{label:"Nom du fichier (Excel)"},l.a.createElement(D.a,{placeholder:"nom du fichier",value:U,onChange:function(e){return A(e.target.value)}})," ")," ")))}P.a.confirm;var Me=l.a.createContext({}),Te=(Me.Provider,Me.Consumer,function(e){var t,a,r=e.graphql,i=e.resultTitle,c=void 0===i?"response":i,d=e.variables,p=e.initVariables,f=void 0===p?{}:p,v=e.title,g=e.columns,h=e.isDeletable,E=void 0===h?function(){return!0}:h,y=e.isUpdatable,O=void 0===y?function(){return!0}:y,C=e.actions,x=void 0===C?[]:C,k=e.createLink,w=void 0===k?"":k,_=e.deleteColumn,I=void 0===_||_,q=(e.expand,e.updateColumn),N=void 0===q||q,S=e.updateInputs,P=e.updateLink,D=e.nested,F=e.history,V=e.exportUrl,M=e.expprtFileName,$=e.appName,z=e.modelName,R=Object(n.useState)({}),U=Object(o.a)(R,2),A=U[0],G=U[1],Y=Object(n.useState)(!1),J=Object(o.a)(Y,2),W=(J[0],J[1],function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=Object(n.useState)(e),l=Object(o.a)(a,2),r=l[0],i=l[1],c=Object(n.useState)(t),u=Object(o.a)(c,2),s=u[0],m=u[1];return{rowPerPage:r,page:s,onRowPerPageChange:i,onPageChange:m}}()),B=Object(b.b)(r.all,{variables:Object(T.a)({},d,{limit:W.rowPerPage,offset:0},f),fetchPolicy:"cache-and-network"}),H=B.data,K=B.loading,Q=B.fetchMore,X=B.refetch;try{var Z=Object(b.a)(r.delete),ee=Object(o.a)(Z,1);t=ee[0]}catch(ce){}try{var te=Object(b.a)(r.update),ae=Object(o.a)(te,1);a=ae[0]}catch(ce){}Object(n.useEffect)((function(){W.onPageChange(0)}),[d]);var le=Object(n.useState)(!1),re=Object(o.a)(le,2),ie=re[0],oe=re[1];return l.a.createElement(Me.Provider,{value:{refetch:X}},$&&z?l.a.createElement(Ve,{appName:$,modelName:z,filename:M,url:V,variables:d,fields:g.map((function(e){var t,a;return{name:null===(t=e.dataIndex)||void 0===t?void 0:t.toString(),title:null===(a=e.title)||void 0===a?void 0:a.toString()}})),visible:ie,onClose:function(){return oe(!ie)},page:W.page,rowPerPage:W.rowPerPage}):null,l.a.createElement(u.a,{justify:"end",gutter:[16,10]},$&&z?l.a.createElement(s.a,{md:12,lg:3,xs:24},l.a.createElement(m.a,{htmlType:"button",icon:l.a.createElement(we.a,null),danger:!0,style:{width:"100%"},onClick:function(){return oe(!0)}},"exporter")):null,l.a.createElement(s.a,{md:12,lg:3,xs:24},l.a.createElement(m.a,{style:{width:"100%",borderWidth:0,padding:0},type:"primary",icon:l.a.createElement(ne.a,null),onClick:function(){return F&&F.push(w)}},"nouveau"))),l.a.createElement("br",null),l.a.createElement(Fe,{onSelect:G,onUpdate:function(e){var t=D?{id:A.id,input:Object(T.a)({},e)}:{input:Object(T.a)({},e,{id:A.id})};a({variables:t}).then((function(e){fe.a.success("Operation avec succ\xe9e"),X()})).catch((function(e){return console.log(e)}))},fetchMoreData:function(e,t){Q({variables:{offset:H&&H.response.results.length,limit:e},updateQuery:function(e,t){var a=t.fetchMoreResult;return a?Object.assign({},e,{response:{results:[].concat(Object(L.a)(e.response.results),Object(L.a)(a.response.results))}}):e}})},title:v,pagination:W,data:j.a.get(H,"response.results",[]),count:j.a.get(H,"".concat(c,".totalCount"),0),columns:g,actions:x,isDeletable:E,isUpdatable:O,history:F,deleteColumn:I,loading:K,onDelete:function(e){t({variables:{id:e}}).then((function(e){X()}))},refetch:X,fetchMore:Q,updateColumn:N,updateLink:P,updateInputs:S}))}),$e=a(292);var Le=a(285),ze=a.n(Le);function Re(e){var t=e.filters,a=(e.variables,e.onVariablesChange),n=e.form;return l.a.createElement(ze.a,{form:n},l.a.createElement(u.a,{gutter:[16,16]},null===t||void 0===t?void 0:t.map((function(e,t){return l.a.createElement(s.a,{span:e.span||4},l.a.createElement(X,{key:t,fieldDef:e,label:!1,onChange:a}))}))))}function Ue(e){var t=e.columns,a=e.graphql,r=e.resultTitle,i=void 0===r?"response":r,c=e.filters,u=e.updateColumn,s=void 0===u||u,m=e.deleteColumn,d=void 0===m||m,p=e.isUpdatable,f=void 0===p?function(){return!0}:p,v=e.isDeletable,g=void 0===v?function(){return!0}:v,h=e.actions,b=void 0===h?[]:h,E=e.createLink,y=void 0===E?"":E,O=e.expand,j=e.nested,C=e.title,x=e.updateLink,k=e.history,w=e.initVariables,_=void 0===w?{}:w,I=e.updateInputs,q=e.exportUrl,N=e.expprtFileName,S=e.appName,P=e.modelName,D=a.delete,F=a.all,V=a.update,M=Object(n.useState)(_),$=Object(o.a)(M,2),L=$[0],z=$[1];return l.a.createElement("div",null,l.a.createElement(Re,{filters:c,onVariablesChange:function(e){z(Object(T.a)({},L,{},e))}}),l.a.createElement(Te,{exportUrl:q,expprtFileName:N,actions:b,title:C,columns:t,graphql:{all:F,delete:D,update:V},variables:L,createLink:y,deleteColumn:d,expand:O,history:k,initVariables:_,isDeletable:g,isUpdatable:f,nested:j,resultTitle:i,updateColumn:s,updateLink:x,updateInputs:I,appName:S,modelName:P}))}function Ae(){var e=Object(f.a)(["\n  query fetchContacts(\n    $nom: String\n    $prenom: String\n    $phone: String\n    $email: String\n    $client: ID\n    $limit: Int\n    $offset: Int\n  ) {\n    response: all_contacts(\n      nom__icontains: $nom\n      prenom__icontains: $prenom\n      email__icontains: $email\n      phone__icontains: $phone\n      client: $client\n    ) {\n      results(limit: $limit, offset: $offset) {\n        id\n        nom\n        prenom\n        fonction\n        email\n        phone\n        client {\n          raison_social\n          id\n        }\n      }\n      totalCount\n    }\n  }\n"]);return Ae=function(){return e},e}var Ge=y()(Ae());var Ye=[{title:"Designation",dataIndex:"model",render:function(e){return l.a.createElement("div",null,e&&e.designation)}},{title:"Marque",dataIndex:"marque",render:function(e){return l.a.createElement($e.a,{color:"green"},e)}},{title:"Matricule",dataIndex:"matricule"},{title:"Nature",dataIndex:"nature"},{title:"Ann\xe9e",dataIndex:"year",render:function(e){return l.a.createElement($e.a,{color:"default"},e)}}],Je={title:"Nouvelle V\xe9hicule",fields:[{name:"model",title:"Model",required:!0,properties:{divider:"engine_type.designation",type:"select",query:Ee("enginemodels",["designation",{engine_type:["designation"]}]),get:"model.id"}},{name:"marque",title:"Marque",properties:{type:"text"}},{name:"matricule",required:!0,title:"Matricule",properties:{type:"text"}},{name:"nature",title:"Nature",properties:{type:"text"}},{name:"year",title:"Ann\xe9e",properties:{type:"date",picker:"year"}}],info:"creer une nouvelle v\xe9hicule dans le park Rail Logistic"},We={title:"Mettre \xe0 jour V\xe9hicule",fields:[{name:"model",editable:!1,title:"Model",required:!0,properties:{divider:"engine_type.designation",type:"select",query:Ee("enginemodels",["designation",{engine_type:["designation"]}]),get:"model.id"}},{name:"marque",title:"Marque",properties:{type:"text"}},{name:"matricule",required:!0,title:"Matricule",properties:{type:"text"}},{name:"nature",title:"Nature",properties:{type:"text"}},{name:"year",title:"Ann\xe9e",properties:{type:"number"}}],info:"creer une nouvelle v\xe9hicule dans le park Rail Logistic"},Be=[{name:"model",title:"Model",span:5,properties:{divider:"engine_type.designation",type:"select",query:Ee("enginemodels",["designation",{engine_type:["designation"]}]),get:"model.id"}},{name:"matricule__icontains",title:"Matricule",properties:{type:"text"}},{name:"marque__icontains",title:"Marque",properties:{type:"text"}}];function He(){var e=Object(f.a)(["\n  query ALL_ENGINES(\n    $limit: Int\n    $offset: Int\n    $matricule__icontains: String\n    $year: Int\n    $marque__icontains: String\n    $model: ID\n  ) {\n    response: all_engines(\n      matricule__icontains: $matricule__icontains\n      marque__icontains: $marque__icontains\n      year__icontains: $year\n      model: $model\n    ) {\n      results(limit: $limit, offset: $offset) {\n        id\n        marque\n        matricule\n        model {\n          id\n          designation\n        }\n        nature\n        year\n      }\n      totalCount\n    }\n  }\n"]);return He=function(){return e},e}var Ke=y()(He());var Qe=[{component:function(e){return Object(N.a)(e),l.a.createElement("div",null,l.a.createElement(M,null))},path:"/clients/list"},{component:function(e){return Object(N.a)(e),l.a.createElement(ve,{history:w,span:8,label:!0,inputs:ke,mutation:be("create_nested_client","CreateClientInput!","client")})},path:"/clients/new"},{path:"/clients/contacts/list",component:function(e){return Object(N.a)(e),l.a.createElement("div",null,l.a.createElement(Ue,{columns:ye,filters:je,createLink:"/clients/contacts/new",actions:[],initVariables:{},deleteColumn:!1,updateColumn:!1,history:w,graphql:{all:Ge},expprtFileName:"contacts",appName:"clients",modelName:"Contact"}))}},{path:"/clients/contacts/new",component:function(e){return Object(N.a)(e),l.a.createElement(ve,{label:!0,span:12,history:w,inputs:Ce,initialValues:{},mutation:he("create_contact","ContactCreateGenericType!")})}},{path:"/park/vehicules/list",component:function(e){return Object(N.a)(e),l.a.createElement("div",null,l.a.createElement(Ue,{title:"Liste des V\xe9hicules de Rail Logistic",columns:Ye,filters:Be,createLink:"/park/vehicules/create",actions:[],initVariables:{},deleteColumn:!1,updateColumn:!0,updateInputs:{title:We.title,fields:We.fields},history:w,graphql:{all:Ke,delete:(t="delete_engine",y()(ge.mutation({operation:t,variables:{id:{type:"ID!"}},fields:["ok",{errors:["field","messages"]}]}).query)),update:he("update_engine","EngineUpdateGenericType!")},expprtFileName:"Park rail logistic",appName:"park",modelName:"Engine"}));var t}},{path:"/park/vehicules/create",component:function(e){return Object(N.a)(e),l.a.createElement(ve,{label:!0,buildInput:function(e){var t;return Object(T.a)({},e,{year:null===(t=e.year)||void 0===t?void 0:t.year()})},title:"Nouvelle V\xe9hicule",span:12,history:w,inputs:Je,initialValues:{},mutation:he("create_engine","EngineCreateGenericType!")})}}],Xe=a(77);function Ze(){return l.a.createElement(c.a.Content,{style:{margin:"24px 16px",padding:24,background:"",minHeight:280}},l.a.createElement(Xe.c,null,Qe.map((function(e){return l.a.createElement(Xe.a,{path:e.path,component:e.component,exact:!0})}))))}var et=a(32),tt=a(289),at=a(33),nt=a(290),lt=a(78),rt=a(287),it=a(286),ot=Object(it.a)((function(e){var t=e.graphQLErrors,a=e.networkError;e.response;t&&t.map((function(e){var t=e.message,a=e.locations,n=e.path;e.nodes;console.log("[GraphQL error]: Message: ".concat(t,", Location: ").concat(a,", Path: ").concat(n)),console.log(a)})),a&&console.log(a),a&&a.result&&a.result.map&&a.result.map((function(e){return console.log(e)})),a&&a.statusCode})),ct=Object(rt.a)((function(e,t){var a=t.headers,n=localStorage.getItem("token");return{headers:Object(T.a)({},a,{authorization:n?"JWT ".concat(n):""})}})),ut=(new at.a((function(e,t){var a=localStorage.getItem("token");return null==a&&window.location.replace("/"),e.setContext({headers:{authorization:a?"JWT ".concat(a):""}}),t(e)})),new tt.a({uri:I,credentials:"same-origin"})),st=new lt.c({cache:new nt.a({addTypename:!1}),link:at.a.from([ot,ct,ut])}),mt=a(210),dt=a.n(mt),pt=a(621),ft=a(619),vt=a(620),gt=[{title:"Dashboard",href:"/dashboard",type:"signle",icon:l.a.createElement(ft.a,null)},{title:"Clients",type:"multiple",icon:l.a.createElement(vt.a,null),pages:[{title:"List des clients",href:"/clients/list"},{title:"Nouveau Client",href:"/clients/new"},{title:"contacts",href:"/clients/contacts/list"}]},{title:"Park",type:"multiple",pages:[{href:"/park/vehicules/list",title:"List"},{href:"/park/vehicules/create",title:"Nouveau V\xe9hicule"}]}],ht=l.a.createContext({});var bt=function(){var e=Object(n.useState)("Rail Transport"),t=Object(o.a)(e,2),a=t[0],r=t[1];return l.a.createElement(ht.Provider,{value:{title:a,setValue:r}},l.a.createElement(et.a,{client:st},l.a.createElement(Xe.b,{history:w},l.a.createElement(c.a,{style:{height:"100%"}},l.a.createElement(q,{color:"dark",links:gt}),l.a.createElement(c.a,null,l.a.createElement(c.a.Header,{style:{backgroundColor:"white",padding:0}},l.a.createElement(u.a,{justify:"space-between",align:"middle",style:{width:"100%"}},l.a.createElement(s.a,{span:20,style:{textAlign:"left"}},l.a.createElement("div",{style:{display:"flex",alignItems:"baseline",paddingLeft:50,lineHeight:0}},l.a.createElement(dt.a,{level:3},a))),l.a.createElement(s.a,{span:1,style:{textAlign:"center"}},l.a.createElement(m.a,{icon:l.a.createElement(pt.a,null),style:{marginLeft:"auto"}})))),l.a.createElement(Ze,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(bt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[295,1,2]]]);
//# sourceMappingURL=main.bd6ce08b.chunk.js.map