(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),s=n(3),o=n.n(s),a=(n(8),n(0));var i=function(){const[t,e]=Object(c.useState)("");return Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Hello, React!"}),Object(a.jsx)("button",{onClick:async()=>{try{const t=await fetch("/api/osaka");if(!t.ok)throw new Error("HTTP error! status: ".concat(t.status));const n=await t.json();e(n.message)}catch(t){console.error("Error fetching data: ",t),e("Error fetching data: "+t.message)}},children:"\u5927\u962a\u5e9c"}),Object(a.jsx)("p",{children:t})]})};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(i,{})}),document.getElementById("root"))},8:function(t,e,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.44e54c98.chunk.js.map