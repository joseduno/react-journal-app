(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),i=n(8),o=n(9),s=n.n(o),u=n(13),l=n(21),d=n(23),j=n(10),b=n(6),p=n(22),O=n.n(p),m=n(30),f=(n(159),n(74),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_AUTHDOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_PROJECTID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STORAGEBUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MESSAGINGSENDERID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_APPID});m.a.initializeApp(f);var h=m.a.firestore(),_=new m.a.auth.GoogleAuthProvider,v=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dixkox8dy/upload",(n=new FormData).append("upload_preset","react-journal-app"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dixkox8dy/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(b.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="[Auth] Login",y="[Auth] Logout",N="[UI] Set error",S="[UI] Remove error",E="[UI] Start loading",w="[UI] Finish loading",T="[Notes] New note",C="[Notes] Set active note",P="[Notes] Load notes",A="[Notes] Updated note",k="[Notes] Delete note",R="[Notes] Logout cleaning",D=function(e,t){return{type:C,payload:Object(b.a)({id:e},t)}},I=function(e,t){return{type:T,payload:Object(b.a)({id:e},t)}},L=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:a=t.sent,n(U(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},U=function(e){return{type:P,payload:e}},W=function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a().auth.uid,delete(r=Object(b.a)({},e)).id,r.url||delete r.url,t.next=7,h.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 7:n(K(e)),O.a.fire({icon:"success",title:"Saved!",text:e.title}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},K=function(e){return{type:A,payload:e}},H=function(e){return{type:k,payload:e}},F=n(35),B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return r(t)},o=function(e){var t=e.target;r(Object(b.a)(Object(b.a)({},c),{},Object(F.a)({},t.name,t.value)))};return[c,o,i]},V=n(36),q=n.n(V),G=n(1),J=function(){var e=Object(i.c)((function(e){return e.notes})).active,t=Object(i.b)();return Object(G.jsxs)("div",{className:"notes__appbar",children:[Object(G.jsx)("span",{children:q()().format("LL")}),Object(G.jsxs)("div",{children:[Object(G.jsx)("input",{id:"inputPicture",type:"file",name:"file",style:{display:"none"},onChange:function(e){var n=e.target.files[0];n&&t(function(e){return function(){var t=Object(u.a)(s.a.mark((function t(n,a){var c,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a().notes.active,O.a.fire({title:"Uploading...",text:"Please wait...",willOpen:function(){O.a.showLoading()}}),t.next=5,v(e);case 5:r=t.sent,n(W(Object(b.a)(Object(b.a)({},c),{},{url:r}))),O.a.close(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(G.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#inputPicture").click()},children:"Picture"}),Object(G.jsx)("button",{className:"btn",onClick:function(){t(W(e))},children:"Save"})]})]})},M=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,n=B(t),c=Object(l.a)(n,3),r=c[0],o=c[1],d=c[2],j=r.title,b=r.body,p=r.url,O=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==O.current&&(d(t),O.current=t.id)}),[t,d]),Object(a.useEffect)((function(){e(D(r.id,r))}),[r,e]);return Object(G.jsxs)("div",{className:"notes__main-content animate__animated animate__fadeIn animate__faster",children:[Object(G.jsx)(J,{}),Object(G.jsxs)("div",{className:"notes__content",children:[Object(G.jsx)("input",{type:"text",placeholder:"some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:j,onChange:o}),Object(G.jsx)("textarea",{placeholder:"what happened today?",className:"notes__textarea",name:"body",value:b,onChange:o}),p&&Object(G.jsx)("div",{className:"notes__image",children:Object(G.jsx)("img",{src:"".concat(p),alt:"imagen",name:"url"})})]}),Object(G.jsx)("button",{className:"btn btn-danger",onClick:function(){var n;e((n=t.id,function(){var e=Object(u.a)(s.a.mark((function e(t,a){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=a().auth.uid,e.next=4,h.doc("".concat(c,"/journal/notes/").concat(n)).delete();case 4:t(H(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:"Delete"})]})},z=function(){return Object(G.jsxs)("div",{className:"nothing__main-content animate__animated animate__fadeIn animate__faster",children:[Object(G.jsxs)("p",{children:["Select something",Object(G.jsx)("br",{}),"or create an entry!"]}),Object(G.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},X=function(e){return{type:N,payload:e}},Y=function(){return{type:w}},Q=function(e,t){return function(n){return n({type:E}),m.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Z(t.uid,t.displayName)),n(Y())})).catch((function(e){var t=e.message;O.a.fire("",t,"error"),n(Y())}))}},Z=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},$=function(){return{type:y}},ee=function(e){var t=e.id,n=e.title,a=e.body,c=e.date,r=e.url,o=q()(c),s=Object(i.b)();return Object(G.jsxs)("div",{className:"journal__entry pointer animate__animated animate__slideInLeft animate__faster",onClick:function(){s(D(t,{title:n,body:a,date:c,url:r}))},children:[r&&Object(G.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(G.jsxs)("div",{className:"journal__entry-body",children:[Object(G.jsx)("p",{className:"journal__entry-title",children:n}),Object(G.jsx)("p",{className:"journal__entry-content",children:a})]}),Object(G.jsxs)("div",{className:"journal__entry-date-box",children:[Object(G.jsxs)("span",{children:[" ",o.format("dddd")," "]}),Object(G.jsx)("h4",{children:o.format("Do")})]})]})},te=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return Object(G.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(G.jsx)(ee,Object(b.a)({},e),e.id)}))})},ne=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return Object(G.jsxs)("aside",{className:"journal__sidebar",children:[Object(G.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(G.jsxs)("h3",{className:"mt-5",children:[Object(G.jsx)("i",{className:"far fa-moon"}),Object(G.jsxs)("span",{children:[" ",t]})]}),Object(G.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.auth().signOut();case 3:t($()),t({type:R}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.message,O.a.fire("",n,"error");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(G.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(u.a)(s.a.mark((function e(t,n){var a,c,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=5,h.collection("".concat(a,"/journal/notes")).add(c);case 5:r=e.sent,t(D(r.id,c)),t(I(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(G.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(G.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(G.jsx)(te,{})]})},ae=function(){var e=Object(i.c)((function(e){return e.notes})).active;return Object(G.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(G.jsx)(ne,{}),Object(G.jsx)("main",{children:e?Object(G.jsx)(M,{}):Object(G.jsx)(z,{})})]})},ce=function(){var e=Object(i.c)((function(e){return e.ui})).loading,t=Object(i.b)(),n=B({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],r=a[1],o=c.email,s=c.password;return Object(G.jsxs)("div",{className:"animate__animated animate__fadeIn animate__faster",children:[Object(G.jsx)("h3",{className:"auth__title",children:"Login"}),Object(G.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(Q(o,s))},children:[Object(G.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(G.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:s,onChange:r}),Object(G.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:e,children:"Login"}),Object(G.jsx)("div",{className:"auth__social-network",children:Object(G.jsxs)("div",{className:"google-btn",onClick:function(){t((function(e){m.a.auth().signInWithPopup(_).then((function(t){var n=t.user,a=n.uid,c=n.displayName;e(Z(a,c))})).catch((function(e){var t=e.message;O.a.fire("",t,"error")}))}))},children:[Object(G.jsx)("div",{className:"google-icon-wrapper",children:Object(G.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(G.jsx)("p",{className:"btn-text",children:Object(G.jsx)("b",{children:"Sign in with google"})})]})}),Object(G.jsx)(d.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},re=n(45),ie=n.n(re),oe=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,n=B({name:"",email:"",password:"",password2:""}),a=Object(l.a)(n,2),c=a[0],r=a[1],o=c.name,j=c.email,b=c.password,p=c.password2,f=function(){return 0===o.trim().length?(e(X("Name is required")),!1):ie.a.isEmail(j)?b===p&&ie.a.isStrongPassword(b)?(e({type:S}),!0):(e(X("Password is not valid")),!1):(e(X("Email is not valid")),!1)};return Object(G.jsxs)("div",{className:"animate__animated animate__fadeIn animate__faster",children:[Object(G.jsx)("h3",{className:"auth__title",children:"Register"}),Object(G.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,n){return function(a){m.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(s.a.mark((function e(t){var c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(Z(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=e.message;O.a.fire("",t,"error")}))}}(j,b,o))},children:[t&&Object(G.jsx)("div",{className:"auth__alert-error",children:t}),Object(G.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(G.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:j,onChange:r}),Object(G.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:b,onChange:r}),Object(G.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:p,onChange:r}),Object(G.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Sign in"}),Object(G.jsx)(d.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},se=function(){return Object(G.jsx)("div",{className:"auth__main",children:Object(G.jsx)("div",{className:"auth__box-container",children:Object(G.jsxs)(j.d,{children:[Object(G.jsx)(j.b,{exact:!0,path:"/auth/login",component:ce}),Object(G.jsx)(j.b,{exact:!0,path:"/auth/register",component:oe}),Object(G.jsx)(j.a,{to:"/auth/login"})]})})})},ue=n(37),le=n(19),de=n.n(le),je=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(G.jsx)(j.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(G.jsx)(n,Object(b.a)({},e)):Object(G.jsx)(j.a,{to:"/auth/login"})}}))};je.protoTypes={isAuthenticated:de.a.bool.isRequired,component:de.a.func.isRequired};var be=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(G.jsx)(j.b,Object(b.a)(Object(b.a)({},a),{},{component:function(e){return t?Object(G.jsx)(j.a,{to:"/"}):Object(G.jsx)(n,Object(b.a)({},e))}}))};be.protoTypes={isAuthenticated:de.a.bool.isRequired,component:de.a.func.isRequired};var pe=function(){var e=Object(i.b)(),t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1],o=Object(a.useState)(!1),b=Object(l.a)(o,2),p=b[0],O=b[1];return Object(a.useEffect)((function(){m.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===n||void 0===n?void 0:n.uid)){t.next=7;break}return e(Z(n.uid,n.displayName)),O(!0),t.next=5,e(L(n.uid));case 5:t.next=8;break;case 7:O(!1);case 8:r(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e]),c?Object(G.jsx)("h1",{children:"Wait..."}):Object(G.jsx)(d.a,{children:Object(G.jsx)("div",{children:Object(G.jsxs)(j.d,{children:[Object(G.jsx)(be,{path:"/auth",component:se,isAuthenticated:p}),Object(G.jsx)(je,{exact:!0,path:"/",component:ae,isAuthenticated:p}),Object(G.jsx)(j.a,{to:"/auth/login"})]})})})},Oe=n(24),me=n(63),fe={loading:!1,msgError:null},he=n(46),_e={notes:[],active:null},ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Oe.d,xe=Object(Oe.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{msgError:t.payload});case S:return Object(b.a)(Object(b.a)({},e),{},{msgError:null});case E:return Object(b.a)(Object(b.a)({},e),{},{loading:!0});case w:return Object(b.a)(Object(b.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case C:return Object(b.a)(Object(b.a)({},e),{},{active:Object(b.a)({},t.payload)});case T:return Object(b.a)(Object(b.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case P:return Object(b.a)(Object(b.a)({},e),{},{notes:Object(he.a)(t.payload)});case A:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload:e}))});case k:return Object(b.a)(Object(b.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.payload})),active:null});case R:return _e;default:return e}}}),ge=Object(Oe.e)(xe,ve(Object(Oe.a)(me.a))),ye=function(){return Object(G.jsx)(i.a,{store:ge,children:Object(G.jsx)(pe,{})})};n(157);r.a.render(Object(G.jsx)(ye,{}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.276ff49e.chunk.js.map