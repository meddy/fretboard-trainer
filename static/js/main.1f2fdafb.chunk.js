(this["webpackJsonpfretboard-trainer"]=this["webpackJsonpfretboard-trainer"]||[]).push([[0],{13:function(n,e,t){n.exports={container:"NoteSelector_container__3M-mk"}},16:function(n,e,t){n.exports={container:"App_container__1MQN3"}},2:function(n,e,t){n.exports={container:"Fretboard_container__Jh935",fretboard:"Fretboard_fretboard__gw8P6",nut:"Fretboard_nut__3hB_N",fret:"Fretboard_fret__3bRCi","open-note":"Fretboard_open-note__1TuzX","sixth-string-open-note":"Fretboard_sixth-string-open-note__22p2m",inlay:"Fretboard_inlay__1dLi5","inlay-top":"Fretboard_inlay-top__JlOop","inlay-bottom":"Fretboard_inlay-bottom__1pbgK",note:"Fretboard_note__21uMM","sixth-string-note":"Fretboard_sixth-string-note__BCNmY",info:"Fretboard_info__2cSVq","info-note":"Fretboard_info-note__3nyfo"}},26:function(n,e,t){"use strict";t.r(e);var a=t(0),c=t(3),i=t.n(c),r=t(15),o=t.n(r),l=(t(23),t(12)),s=t(6),d=t(16),j=t.n(d),u=t(4),b=t(7),m=t(2),f=t.n(m),O=[1,2,3,4,5],h=Array.from(Array(13).keys()),x=[{row:2,column:12},{row:3,column:3},{row:3,column:5},{row:3,column:7},{row:3,column:9},{row:4,column:12}];function _(n){var e=n.string,t=n.fret;return Object(a.jsxs)("div",{className:f.a.container,children:[Object(a.jsxs)("div",{className:f.a.info,children:[Object(a.jsxs)("div",{children:["(1)",Object(a.jsx)("span",{className:f.a["info-note"],children:"E"})]}),Object(a.jsxs)("div",{children:["(2)",Object(a.jsx)("span",{className:f.a["info-note"],children:"B"})]}),Object(a.jsxs)("div",{children:["(3)",Object(a.jsx)("span",{className:f.a["info-note"],children:"G"})]}),Object(a.jsxs)("div",{children:["(4)",Object(a.jsx)("span",{className:f.a["info-note"],children:"D"})]}),Object(a.jsxs)("div",{children:["(5)",Object(a.jsx)("span",{className:f.a["info-note"],children:"A"})]}),Object(a.jsxs)("div",{children:["(6)",Object(a.jsx)("span",{className:f.a["info-note"],children:"E"})]})]}),Object(a.jsx)("div",{className:f.a.fretboard,children:O.map((function(n){return h.map((function(c){var i,r,o,l,s=e===n||6===e&&5===n,d=t===c&&s,j="".concat(n,"-").concat(c);if(0===c)return Object(a.jsx)("div",{className:Object(b.a)((l={},Object(u.a)(l,f.a.nut,!0),Object(u.a)(l,f.a.note,d&&0!==t),l))},j);var m=x.find((function(e){return n===e.row&&c===e.column}));return Object(a.jsxs)("div",{className:Object(b.a)((i={},Object(u.a)(i,f.a.fret,!0),Object(u.a)(i,f.a["open-note"],s&&0===t),Object(u.a)(i,f.a["sixth-string-open-note"],s&&6===e&&0===t),i)),children:[d&&Object(a.jsx)("div",{className:Object(b.a)((r={},Object(u.a)(r,f.a.note,!0),Object(u.a)(r,f.a["sixth-string-note"],6===e),r))}),m&&Object(a.jsx)("div",{className:Object(b.a)((o={},Object(u.a)(o,f.a.inlay,!0),Object(u.a)(o,f.a["inlay-top"],2===n),Object(u.a)(o,f.a["inlay-bottom"],4===n),o))},"".concat(j,"-inlay"))]},j)}))}))})]})}var v,p,A=t(17),F=t(28),N=t(29),C=t(13),g=t.n(C);!function(n){n.A="A",n.B="B",n.C="C",n.D="D",n.E="E",n.F="F",n.G="G"}(v||(v={})),function(n){n.SHARP="sharp",n.FLAT="flat"}(p||(p={}));var k=[{name:v.E,accidental:null},{name:v.B,accidental:null},{name:v.G,accidental:null},{name:v.D,accidental:null},{name:v.A,accidental:null},{name:v.E,accidental:null}],y=[[{name:v.A,accidental:null}],[{name:v.A,accidental:p.SHARP},{name:v.B,accidental:p.FLAT}],[{name:v.B,accidental:null}],[{name:v.C,accidental:null}],[{name:v.C,accidental:p.SHARP},{name:v.D,accidental:p.FLAT}],[{name:v.D,accidental:null}],[{name:v.D,accidental:p.SHARP},{name:v.E,accidental:p.FLAT}],[{name:v.E,accidental:null}],[{name:v.F,accidental:null}],[{name:v.F,accidental:p.SHARP},{name:v.G,accidental:p.FLAT}],[{name:v.G,accidental:null}],[{name:v.G,accidental:p.SHARP},{name:v.A,accidental:p.FLAT}]];function w(n){var e=n.string,t=n.fret,i=n.onNext,r=Object(c.useState)(null),o=Object(s.a)(r,2),l=o[0],d=o[1],j=Object(c.useState)(null),u=Object(s.a)(j,2),b=u[0],m=u[1],f=Object(c.useState)(!1),O=Object(s.a)(f,2),h=O[0],x=O[1],_=k[e-1],C=(y.findIndex((function(n){var e,t=Object(A.a)(n);try{for(t.s();!(e=t.n()).done;){var a=e.value;if(a.name===_.name&&a.accidental===_.accidental)return!0}}catch(c){t.e(c)}finally{t.f()}return!1}))+t)%y.length,w=y[C].find((function(n){return n.name===l&&n.accidental===b}));return Object(a.jsxs)("div",{className:g.a.container,children:[Object(a.jsxs)(F.a,{className:g.a["note-group"],children:[Object(a.jsx)(N.a,{active:l===v.A,onClick:function(){return d(v.A)},children:v.A}),Object(a.jsx)(N.a,{active:l===v.B,onClick:function(){return d(v.B)},children:v.B}),Object(a.jsx)(N.a,{active:l===v.C,onClick:function(){return d(v.C)},children:v.C}),Object(a.jsx)(N.a,{active:l===v.D,onClick:function(){return d(v.D)},children:v.D}),Object(a.jsx)(N.a,{active:l===v.E,onClick:function(){return d(v.E)},children:v.E}),Object(a.jsx)(N.a,{active:l===v.F,onClick:function(){return d(v.F)},children:v.F}),Object(a.jsx)(N.a,{active:l===v.G,onClick:function(){return d(v.G)},children:v.G})]}),Object(a.jsxs)(F.a,{children:[Object(a.jsx)(N.a,{active:b===p.SHARP,onClick:function(){m(p.SHARP)},title:"Sharp",children:"\u266f"}),Object(a.jsx)(N.a,{active:b===p.FLAT,onClick:function(){m(p.FLAT)},title:"Flat",children:"\u266d"}),Object(a.jsx)(N.a,{active:null===b,onClick:function(){m(null)},title:"Natural",children:"\u266e"})]}),Object(a.jsx)(N.a,{color:h?"danger":"success",disabled:null===l,onClick:function(){w?(i(),d(null),m(null),x(!1)):x(!0)},children:"Check"})]})}function S(n,e){return n=Math.ceil(n),e=Math.floor(e),Math.floor(Math.random()*(e-n+1)+n)}function B(){return{string:S(1,6),fret:S(0,12)}}var E=function(){var n=Object(c.useState)(B()),e=Object(s.a)(n,2),t=e[0],i=e[1];return Object(a.jsxs)("div",{className:j.a.container,children:[Object(a.jsx)(_,Object(l.a)({},t)),Object(a.jsx)(w,Object(l.a)({onNext:function(){i(B())}},t))]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.1f2fdafb.chunk.js.map