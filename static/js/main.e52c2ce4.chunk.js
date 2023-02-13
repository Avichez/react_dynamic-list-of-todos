(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(7),n=c.n(a),r=c(4),l=c(2),o=c(3),i=c.n(o),d=c(1),j=c.n(d),u=(c(13),c(14),c(6)),b=c.n(u),h=c(0),O=function(e){var t=e.todos,c=e.onSelectTodo,s=e.selectedTodo;return Object(h.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"#"}),Object(h.jsx)("th",{children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:" "})]})}),Object(h.jsx)("tbody",{children:t.map((function(e){return Object(h.jsxs)("tr",{"data-cy":"todo",className:"",children:[Object(h.jsx)("td",{className:"is-vcentered",children:e.id}),Object(h.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(h.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(h.jsx)("i",{className:"fas fa-check"})})}),Object(h.jsx)("td",{className:"is-vcentered is-expanded",children:Object(h.jsx)("p",{className:b()({"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(h.jsx)("td",{className:"has-text-right is-vcentered",children:Object(h.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{className:b()("far",{"fa-eye":!s,"fa-eye-slash":s})})})})})]},e.id)}))})]})};!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETE="completed"}(s||(s={}));var m=j.a.memo((function(e){var t=e.query,c=e.filterBy,a=e.onChangeQuery,n=e.onChangeFilterBy;return Object(h.jsxs)("form",{className:"field has-addons",children:[Object(h.jsx)("p",{className:"control",children:Object(h.jsx)("span",{className:"select",children:Object(h.jsxs)("select",{"data-cy":"statusSelect",value:c,onChange:function(e){var t=e.target;return n(t.value)},children:[Object(h.jsx)("option",{value:s.ALL,children:"All"}),Object(h.jsx)("option",{value:s.ACTIVE,children:"Active"}),Object(h.jsx)("option",{value:s.COMPLETE,children:"Completed"})]})})}),Object(h.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"searchInput",type:"text",value:t,className:"input",placeholder:"Search...",onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(h.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:t&&Object(h.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return a("")}})})]})]})}));function x(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var f=function(){return Object(h.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(h.jsx)("div",{className:"Loader__content"})})},p=function(e){var t=e.selectedTodo,c=e.onCloseModal,s=Object(d.useState)(null),a=Object(l.a)(s,2),n=a[0],o=a[1],j=Object(d.useState)(!0),u=Object(l.a)(j,2),b=u[0],O=u[1];return Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s=t.userId,x("/users/".concat(s));case 3:c=e.sent,o(c),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),new Error("no such user");case 10:return e.prev=10,O(!1),e.finish(10);case 13:case"end":return e.stop()}var s}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(h.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(h.jsx)("div",{className:"modal-background"}),b?Object(h.jsx)(f,{}):Object(h.jsxs)("div",{className:"modal-card",children:[Object(h.jsxs)("header",{className:"modal-card-head",children:[Object(h.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(h.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(h.jsxs)("div",{className:"modal-card-body",children:[Object(h.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(h.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(h.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(h.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",null===n?Object(h.jsx)("p",{children:"No such user"}):Object(h.jsx)("a",{href:"mailto:".concat(n.email),children:n.name})]})]})]})]})},v=function(){var e=Object(d.useState)([]),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)(null),o=Object(l.a)(n,2),j=o[0],u=o[1],b=Object(d.useState)(!0),v=Object(l.a)(b,2),N=v[0],y=v[1],g=Object(d.useState)(!1),C=Object(l.a)(g,2),k=C[0],T=C[1],w=Object(d.useState)(""),E=Object(l.a)(w,2),L=E[0],S=E[1],A=Object(d.useState)(s.ALL),B=Object(l.a)(A,2),I=B[0],M=B[1];Object(d.useEffect)((function(){var e=function(){var e=Object(r.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("/todos");case 3:t=e.sent,a(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),T(!0);case 10:return e.prev=10,y(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var P=Object(d.useMemo)((function(){var e=c.filter((function(e){switch(I){case s.ACTIVE:return!e.completed;case s.COMPLETE:return e.completed;default:return!0}}));if(L){var t=L.toLowerCase();e=e.filter((function(e){return e.title.toLowerCase().includes(t)}))}return e}),[L,I,c]),_=!N&&k,F=!N&&!k;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"section",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)("div",{className:"box",children:[Object(h.jsx)("h1",{className:"title",children:"Todos:"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsx)(m,{query:L,filterBy:I,onChangeQuery:S,onChangeFilterBy:M})}),Object(h.jsxs)("div",{className:"block",children:[N&&Object(h.jsx)(f,{}),_&&Object(h.jsx)("p",{children:"Error loading todos, please reload page"}),F&&Object(h.jsx)(O,{todos:P,onSelectTodo:u,selectedTodo:j})]})]})})}),null!==j&&Object(h.jsx)(p,{selectedTodo:j,onCloseModal:u})]})};n.a.render(Object(h.jsx)(v,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e52c2ce4.chunk.js.map