(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},41:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var c=s(2),a=s.n(c),n=s(20),i=s.n(n),o=s(6),r=(s(27),s(12)),l=(s(28),s(9)),d=(s(18),s(29),s(10)),j=s(11),u=s(1);var b=function(e){var t,s=e.message,c=e.db,a=s.createdAt;if(null!==a){var n=(a=a.toDate()).getHours()>9?"":"0",i=a.getMinutes()>9?"":"0";t="".concat(n).concat(a.getHours(),":").concat(i).concat(a.getMinutes()," ").concat(a.toDateString())}return Object(u.jsxs)("li",{className:"message",children:[Object(u.jsx)("div",{children:s.name}),Object(u.jsx)("div",{children:t}),Object(u.jsx)("div",{className:"text",children:s.text}),Object(u.jsxs)("div",{className:"arrows",children:[Object(u.jsx)("button",{className:"up button",onClick:function(){return e=s.id,void(c&&c.collection("message").doc(e).update({votes:l.a.firestore.FieldValue.increment(1)}));var e},id:s.id,children:Object(u.jsx)("i",{children:Object(u.jsx)(d.a,{icon:j.b,className:"arrowIcon",color:"#25D959"})})}),Object(u.jsx)("button",{className:"up button",onClick:function(){return e=s.id,void(c&&c.collection("message").doc(e).update({votes:l.a.firestore.FieldValue.increment(-1)}));var e},id:s.id,children:Object(u.jsx)("i",{children:Object(u.jsx)(d.a,{icon:j.a,className:"arrowIcon",color:"#25D959"})})}),Object(u.jsx)("div",{className:"votes",children:s.votes})]})]},s.id)};s(35);var m=function(e){var t,s=e.message,c=s.createdAt;if(null!==c){var a=(c=c.toDate()).getHours()>9?"":"0",n=c.getMinutes()>9?"":"0";t="".concat(a).concat(c.getHours(),":").concat(n).concat(c.getMinutes()," ").concat(c.toDateString())}return Object(u.jsxs)("li",{className:"generalmessage",children:[Object(u.jsx)("div",{children:s.name}),Object(u.jsxs)("div",{children:[" ",t]}),Object(u.jsx)("div",{className:"text",children:s.text})]},s.id)};var O=function(e){var t=e.db,s=Object(c.useState)(""),a=Object(o.a)(s,2),n=a[0],i=a[1],d=Object(c.useState)([]),j=Object(o.a)(d,2),O=j[0],h=j[1],v=Object(c.useState)(e.startingChat),x=Object(o.a)(v,2),p=x[0],g=x[1],f=Object(c.useState)(e.name),N=Object(o.a)(f,2),y=N[0],C=N[1];function S(e){var t=document.getElementById(e).style;t.backgroundColor="#222222",t.color="#e2e2e2"}function A(e){p!==e&&p&&(S(p),g(e))}return Object(c.useEffect)((function(){!function(e){var t=document.getElementById(e).style;t.backgroundColor="#e2e2e2",t.color="#222222"}(e.hideChat?"questions":p)}),[p,e.hideChat]),Object(c.useEffect)((function(){e.hideChat||S("general"),g("questions")}),[e.hideChat]),Object(c.useEffect)((function(){if(t)return"questions"===p?t.collection("message").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})}));h(t)})):t.collection("general").orderBy("createdAt").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})}));h(t)}))}),[t,p]),Object(c.useEffect)((function(){setTimeout((function(){var e=document.getElementById("messages");e.scrollTop=e.scrollHeight}),250)}),[O]),Object(u.jsxs)("div",{className:"chat",children:[e.hideChat?Object(u.jsx)("div",{className:"splitButton",children:Object(u.jsx)("button",{id:"questions",className:"singleButton",children:"Questions"})}):Object(u.jsxs)("div",{className:"splitButton",children:[Object(u.jsx)("button",{className:"leftButton",id:"general",onClick:function(){return A("general")},children:"General"}),Object(u.jsx)("button",{className:"rightButton",id:"questions",onClick:function(){return A("questions")},children:"Questions"})]}),Object(u.jsx)("div",{className:"messages",id:"messages",children:Object(u.jsx)("ul",{className:"message-list",children:O.map((function(e){return"questions"===p?Object(u.jsx)(b,{message:e,db:t}):Object(u.jsx)(m,{message:e})}))})}),Object(u.jsxs)("div",{className:"inputArea",children:[Object(u.jsx)("textarea",{onChange:function(e){var t=e.target.value;i(t)},placeholder:"Type your message here...",className:"input",name:"inputArea",cols:"42",rows:"2",value:n}),Object(u.jsxs)("div",{className:"inputdialog",children:[Object(u.jsx)("button",{className:"sendButton",onClick:function(){t&&("questions"===p?t.collection("message").add({createdAt:l.a.firestore.FieldValue.serverTimestamp(),text:n,votes:0,name:y,read:!1}):t.collection("general").add({createdAt:l.a.firestore.FieldValue.serverTimestamp(),text:n,name:y})),i("")},children:"Send"}),"questions"===p&&Object(u.jsxs)("div",{className:"isAnonymous",children:[Object(u.jsx)("input",{className:"checkbox",type:"checkbox",id:"anonymous",value:y,onClick:function(t){var s;s=t.target.value===e.name?"Anonymous":e.name,C(s)}}),Object(u.jsx)("label",{children:"Post anonymously?"})]})]})]})]})};s(36);var h=function(e){var t=Object(c.useState)(!1),s=Object(o.a)(t,2),a=s[0],n=s[1],i=e.view,r=e.dictateAt;return Object(u.jsxs)("div",{className:"toolbar",children:[Object(u.jsx)("img",{src:"/zoom-prototype/mute.png",className:"icon left",alt:"Alternative Text"}),Object(u.jsx)("img",{src:"/zoom-prototype/video.png",className:"icon left",alt:"Alternative Text"}),"student"===i&&Object(u.jsx)("div",{className:"menuDialog centre",style:{visibility:a?"visible":"hidden"},children:Object(u.jsx)("div",{className:"settings",children:Object(u.jsxs)("button",{className:"chatStateButton",onClick:function(){e.setHideChat(!e.hideChat)},children:["Turn chat ",e.hideChat?"on":"off","."]})})}),"host"===i&&Object(u.jsx)("div",{className:"hostMenuDialog centre",style:{visibility:a?"visible":"hidden"},children:Object(u.jsxs)("div",{className:"hostSettings",children:[Object(u.jsx)("label",{className:"dictateLabel",children:"Dictate question at:"}),Object(u.jsx)("input",{type:"range",className:"slider",onChange:function(t){e.setDictateAt(t.target.value)},min:"0",max:"100",value:r}),Object(u.jsxs)("label",{className:"votesLabel",children:[r," votes"]})]})}),Object(u.jsx)("button",{className:"leaveButton",onClick:function(){e.setHome(!0)},children:"Leave"}),Object(u.jsxs)("div",{className:"centre",children:[Object(u.jsx)("img",{src:"/zoom-prototype/participants.png",className:"icon",alt:"Alternative Text"}),Object(u.jsx)("img",{src:"/zoom-prototype/chat.png",className:"icon",alt:"Alternative Text"}),Object(u.jsx)("img",{src:"/zoom-prototype/screenshot.png",className:"icon",alt:"Alternative Text"}),Object(u.jsx)("img",{src:"/zoom-prototype/record.png",className:"icon",alt:"Alternative Text"}),Object(u.jsx)("img",{src:"/zoom-prototype/reactions.png",className:"icon",alt:"Alternative Text"}),Object(u.jsx)("img",{src:"/zoom-prototype/more.png",className:"icon",alt:"Alternative Text",onClick:function(){n(!a)}})]})]})};s(37);var v=function(){return Object(u.jsx)("div",{className:"window",children:Object(u.jsx)("img",{src:"/zoom-prototype/screen.png",className:"screen",alt:"Alternative Text"})})},x=(s(38),s(22));var p=function(e){var t=new Date,s=e.db,a=Object(c.useState)([]),n=Object(o.a)(a,2),i=n[0],l=n[1],b=Object(c.useState)(t.getTime()/1e3),m=Object(o.a)(b,2),O=m[0],h=m[1],v=Object(x.useSpeechSynthesis)().speak,p=e.view,g=e.dictateAt;return Object(c.useEffect)((function(){if(s)return s.collection("message").orderBy("votes").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(r.a)(Object(r.a)({},e.data()),{},{id:e.id})})),s=t.slice(t.length-3).reverse();l(s)}))}),[s]),Object(c.useEffect)((function(){for(var e=0;e<Math.min(3,i.length);e++){var c=i[e],a=t.getTime()/1e3-O;if(c.votes>g&&a>10&&!1===c.read){v({text:c.text}),h(t.getTime()/1e3),s&&s.collection("message").doc(c.id).update({read:!0});break}}}),[s,g,O,v,i]),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"title",children:"Top Questions:"}),i.map((function(e,t){return e.votes>0?Object(u.jsxs)("div",{className:"question",children:[Object(u.jsxs)("div",{className:"questionText",children:[t+1,". ",e.text]}),Object(u.jsxs)("div",{className:"rightContainer",children:[e.votes," votes","host"===p&&Object(u.jsxs)("div",{className:"hostControls",children:[Object(u.jsx)("button",{onClick:function(){return v({text:e.text})},className:"hostButton",children:Object(u.jsx)("i",{children:Object(u.jsx)(d.a,{icon:j.f,className:"hostIcon",color:"#25D959"})})}),Object(u.jsx)("button",{onClick:function(){return t=e.id,void(s&&s.collection("message").doc(t).delete());var t},className:"hostButton",children:Object(u.jsx)("i",{children:Object(u.jsx)(d.a,{icon:j.e,className:"hostIcon",color:"#B32323"})})})]})]})]}):null}))]})};s(41);var g=function(e){e.name;var t=e.view;return Object(u.jsxs)("div",{className:"gallerycontainer",children:[Object(u.jsx)("div",{className:"arrow",children:Object(u.jsx)(d.a,{icon:j.c,className:""})}),Object(u.jsxs)("div",{className:"user",children:[" ","host"===t?e.name:"Host"]}),Object(u.jsxs)("div",{className:"user",children:[" ","host"===t?"Student":e.name]}),Object(u.jsx)("div",{className:"user",children:"Student"}),Object(u.jsx)("div",{className:"user",children:"Student"}),Object(u.jsx)("div",{className:"user",children:"Student"}),Object(u.jsx)("div",{className:"arrow bottomArrow",children:Object(u.jsx)(d.a,{icon:j.d,className:""})})]})};l.a.initializeApp({apiKey:"AIzaSyB_dcSrtNM1SoOdbpGK4gyDtfIJs8NQ1Mo",authDomain:"zoom-prototype-3c7b3.firebaseapp.com",projectId:"zoom-prototype-3c7b3",storageBucket:"zoom-prototype-3c7b3.appspot.com",messagingSenderId:"829189795036",appId:"1:829189795036:web:6ed5d9bd93c293a9ab9819"});var f=l.a.firestore();var N=function(e){var t=Object(c.useState)(!1),s=Object(o.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(10),r=Object(o.a)(i,2),l=r[0],d=r[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(v,{}),Object(u.jsx)(g,{name:e.name,view:e.view}),Object(u.jsx)(O,{db:f,startingChat:"questions",name:e.name,hideChat:a}),Object(u.jsx)(p,{db:f,view:e.view,dictateAt:l}),Object(u.jsx)(h,{hideChat:a,setHideChat:n,setHome:e.setHome,view:e.view,dictateAt:l,setDictateAt:d})]})};s(42);var y=function(e){var t=Object(c.useState)(""),s=Object(o.a)(t,2),a=s[0],n=s[1],i=Object(c.useState)(!0),r=Object(o.a)(i,2),l=r[0],d=r[1],j=Object(c.useState)(""),b=Object(o.a)(j,2),m=b[0],O=b[1];function h(e){O(e.target.id),d(!1)}return Object(u.jsxs)("div",{className:"App",children:[l&&Object(u.jsxs)("div",{className:"centreContainer",children:[Object(u.jsx)("label",{className:"label",children:"Display name: "}),Object(u.jsx)("input",{className:"displayName",type:"text",id:"displayName",value:a,onChange:function(e){n(e.target.value)}}),Object(u.jsx)("label",{className:"label",children:"View as a: "}),Object(u.jsx)("button",{className:"homeButton",id:"student",onClick:h,children:"Student"}),Object(u.jsx)("button",{className:"homeButton",id:"host",onClick:h,children:"Host"})]}),!l&&Object(u.jsx)(N,{name:a,view:m,setHome:d})]})};var C=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(y,{})})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(C,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.e585b0d5.chunk.js.map