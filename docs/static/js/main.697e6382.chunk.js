(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),i=n(8),s=n(9),o=n.n(s),u=n(13),l=n(21),d=n(23),j=n(10),p=n(6),b=n(22),m=n.n(b),f=n(30);n(159),n(74);f.a.initializeApp({apiKey:"AIzaSyBMiyCB6LJx6gnKlhJsWKjj4nYCiaQU1Ok",authDomain:"react-app-curso-6d492.firebaseapp.com",projectId:"react-app-curso-6d492",storageBucket:"react-app-curso-6d492.appspot.com",messagingSenderId:"35925060525",appId:"1:35925060525:web:c8fc636c7865d981aa0f24"});var h=f.a.firestore(),O=new f.a.auth.GoogleAuthProvider,v=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dixkox8dy/upload",(n=new FormData).append("upload_preset","react-journal-app"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dixkox8dy/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=21;break;case 18:throw e.prev=18,e.t0=e.catch(4),e.t0;case 21:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(p.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_="[Auth] Login",g="[Auth] Logout",y="[UI] Set error",N="[UI] Remove error",w="[UI] Start loading",k="[UI] Finish loading",C="[Notes] New note",S="[Notes] Set active note",E="[Notes] Load notes",I="[Notes] Updated note",A="[Notes] Delete note",P="[Notes] Logout cleaning",L=function(e,t){return{type:S,payload:Object(p.a)({id:e},t)}},D=function(e,t){return{type:C,payload:Object(p.a)({id:e},t)}},U=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x(e);case 3:a=t.sent,n(R(a)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return{type:E,payload:e}},q=function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a().auth.uid,delete(r=Object(p.a)({},e)).id,r.url||delete r.url,t.next=7,h.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 7:n(T(e)),m.a.fire({icon:"success",title:"Saved!",text:e.title}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e,n){return t.apply(this,arguments)}}()},T=function(e){return{type:I,payload:e}},W=function(e){return{type:A,payload:e}},B=n(35),J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],r=n[1],i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;return r(t)},s=function(e){var t=e.target;r(Object(p.a)(Object(p.a)({},c),{},Object(B.a)({},t.name,t.value)))};return[c,s,i]},z=n(36),G=n.n(z),K=n(1),F=function(){var e=Object(i.c)((function(e){return e.notes})).active,t=Object(i.b)();return Object(K.jsxs)("div",{className:"notes__appbar",children:[Object(K.jsx)("span",{children:G()().format("LL")}),Object(K.jsxs)("div",{children:[Object(K.jsx)("input",{id:"inputPicture",type:"file",name:"file",style:{display:"none"},onChange:function(e){var n=e.target.files[0];n&&t(function(e){return function(){var t=Object(u.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=a().notes.active,m.a.fire({title:"Uploading...",text:"Please wait...",willOpen:function(){m.a.showLoading()}}),t.next=5,v(e);case 5:r=t.sent,n(q(Object(p.a)(Object(p.a)({},c),{},{url:r}))),m.a.close(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(K.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#inputPicture").click()},children:"Picture"}),Object(K.jsx)("button",{className:"btn",onClick:function(){t(q(e))},children:"Save"})]})]})},M=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.notes})).active,n=J(t),c=Object(l.a)(n,3),r=c[0],s=c[1],d=c[2],j=r.title,p=r.body,b=r.url,m=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==m.current&&(d(t),m.current=t.id)}),[t,d]),Object(a.useEffect)((function(){e(L(r.id,r))}),[r,e]);return Object(K.jsxs)("div",{className:"notes__main-content animate__animated animate__fadeIn animate__faster",children:[Object(K.jsx)(F,{}),Object(K.jsxs)("div",{className:"notes__content",children:[Object(K.jsx)("input",{type:"text",placeholder:"some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:j,onChange:s}),Object(K.jsx)("textarea",{placeholder:"what happened today?",className:"notes__textarea",name:"body",value:p,onChange:s}),b&&Object(K.jsx)("div",{className:"notes__image",children:Object(K.jsx)("img",{src:"".concat(b),alt:"imagen",name:"url"})})]}),Object(K.jsx)("button",{className:"btn btn-danger",onClick:function(){var n;e((n=t.id,function(){var e=Object(u.a)(o.a.mark((function e(t,a){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=a().auth.uid,e.next=4,h.doc("".concat(c,"/journal/notes/").concat(n)).delete();case 4:t(W(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}()))},children:"Delete"})]})},X=function(){return Object(K.jsxs)("div",{className:"nothing__main-content animate__animated animate__fadeIn animate__faster",children:[Object(K.jsxs)("p",{children:["Select something",Object(K.jsx)("br",{}),"or create an entry!"]}),Object(K.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},Q=function(e){return{type:y,payload:e}},V=function(){return{type:k}},Y=function(e,t){return function(n){return n({type:w}),f.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(H(t.uid,t.displayName)),n(V())})).catch((function(e){var t=e.message;m.a.fire("",t,"error"),n(V())}))}},H=function(e,t){return{type:_,payload:{uid:e,displayName:t}}},Z=function(){return{type:g}},$=function(e){var t=e.id,n=e.title,a=e.body,c=e.date,r=e.url,s=G()(c),o=Object(i.b)();return Object(K.jsxs)("div",{className:"journal__entry pointer animate__animated animate__slideInLeft animate__faster",onClick:function(){o(L(t,{title:n,body:a,date:c,url:r}))},children:[r&&Object(K.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(K.jsxs)("div",{className:"journal__entry-body",children:[Object(K.jsx)("p",{className:"journal__entry-title",children:n}),Object(K.jsx)("p",{className:"journal__entry-content",children:a})]}),Object(K.jsxs)("div",{className:"journal__entry-date-box",children:[Object(K.jsxs)("span",{children:[" ",s.format("dddd")," "]}),Object(K.jsx)("h4",{children:s.format("Do")})]})]})},ee=function(){var e=Object(i.c)((function(e){return e.notes})).notes;return Object(K.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(K.jsx)($,Object(p.a)({},e),e.id)}))})},te=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.auth})).name;return Object(K.jsxs)("aside",{className:"journal__sidebar",children:[Object(K.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(K.jsxs)("h3",{className:"mt-5",children:[Object(K.jsx)("i",{className:"far fa-moon"}),Object(K.jsxs)("span",{children:[" ",t]})]}),Object(K.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.auth().signOut();case 3:t(Z()),t({type:P}),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),n=e.t0.message,m.a.fire("",n,"error");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(K.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=5,h.collection("".concat(a,"/journal/notes")).add(c);case 5:r=e.sent,t(L(r.id,c)),t(D(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(K.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(K.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(K.jsx)(ee,{})]})},ne=function(){var e=Object(i.c)((function(e){return e.notes})).active;return Object(K.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(K.jsx)(te,{}),Object(K.jsx)("main",{children:e?Object(K.jsx)(M,{}):Object(K.jsx)(X,{})})]})},ae=function(){var e=Object(i.c)((function(e){return e.ui})).loading,t=Object(i.b)(),n=J({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],r=a[1],s=c.email,o=c.password;return Object(K.jsxs)("div",{className:"animate__animated animate__fadeIn animate__faster",children:[Object(K.jsx)("h3",{className:"auth__title",children:"Login"}),Object(K.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(Y(s,o))},children:[Object(K.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:s,onChange:r}),Object(K.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:o,onChange:r}),Object(K.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:e,children:"Login"}),Object(K.jsx)("div",{className:"auth__social-network",children:Object(K.jsxs)("div",{className:"google-btn",onClick:function(){t((function(e){f.a.auth().signInWithPopup(O).then((function(t){var n=t.user,a=n.uid,c=n.displayName;e(H(a,c))})).catch((function(e){var t=e.message;m.a.fire("",t,"error")}))}))},children:[Object(K.jsx)("div",{className:"google-icon-wrapper",children:Object(K.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(K.jsx)("p",{className:"btn-text",children:Object(K.jsx)("b",{children:"Sign in with google"})})]})}),Object(K.jsx)(d.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ce=n(45),re=n.n(ce),ie=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError,n=J({name:"",email:"",password:"",password2:""}),a=Object(l.a)(n,2),c=a[0],r=a[1],s=c.name,j=c.email,p=c.password,b=c.password2,h=function(){return 0===s.trim().length?(e(Q("Name is required")),!1):re.a.isEmail(j)?p===b&&re.a.isStrongPassword(p)?(e({type:N}),!0):(e(Q("Password is not valid")),!1):(e(Q("Email is not valid")),!1)};return Object(K.jsxs)("div",{className:"animate__animated animate__fadeIn animate__faster",children:[Object(K.jsx)("h3",{className:"auth__title",children:"Register"}),Object(K.jsxs)("form",{onSubmit:function(t){t.preventDefault(),h()&&e(function(e,t,n){return function(a){f.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(H(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){var t=e.message;m.a.fire("",t,"error")}))}}(j,p,s))},children:[t&&Object(K.jsx)("div",{className:"auth__alert-error",children:t}),Object(K.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:s,onChange:r}),Object(K.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:j,onChange:r}),Object(K.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:p,onChange:r}),Object(K.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:b,onChange:r}),Object(K.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:"Sign in"}),Object(K.jsx)(d.b,{to:"/auth/login",className:"link",children:"Already registered?"})]})]})},se=function(){return Object(K.jsx)("div",{className:"auth__main",children:Object(K.jsx)("div",{className:"auth__box-container",children:Object(K.jsxs)(j.d,{children:[Object(K.jsx)(j.b,{exact:!0,path:"/auth/login",component:ae}),Object(K.jsx)(j.b,{exact:!0,path:"/auth/register",component:ie}),Object(K.jsx)(j.a,{to:"/auth/login"})]})})})},oe=n(37),ue=n(19),le=n.n(ue),de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(oe.a)(e,["isAuthenticated","component"]);return Object(K.jsx)(j.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(K.jsx)(n,Object(p.a)({},e)):Object(K.jsx)(j.a,{to:"/auth/login"})}}))};de.protoTypes={isAuthenticated:le.a.bool.isRequired,component:le.a.func.isRequired};var je=function(e){var t=e.isAuthenticated,n=e.component,a=Object(oe.a)(e,["isAuthenticated","component"]);return Object(K.jsx)(j.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(K.jsx)(j.a,{to:"/"}):Object(K.jsx)(n,Object(p.a)({},e))}}))};je.protoTypes={isAuthenticated:le.a.bool.isRequired,component:le.a.func.isRequired};var pe=function(){var e=Object(i.b)(),t=Object(a.useState)(!0),n=Object(l.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),p=Object(l.a)(s,2),b=p[0],m=p[1];return Object(a.useEffect)((function(){f.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(null===n||void 0===n?void 0:n.uid)){t.next=7;break}return e(H(n.uid,n.displayName)),m(!0),t.next=5,e(U(n.uid));case 5:t.next=8;break;case 7:m(!1);case 8:r(!1);case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e]),c?Object(K.jsx)("h1",{children:"Wait..."}):Object(K.jsx)(d.a,{children:Object(K.jsx)("div",{children:Object(K.jsxs)(j.d,{children:[Object(K.jsx)(je,{path:"/auth",component:se,isAuthenticated:b}),Object(K.jsx)(de,{exact:!0,path:"/",component:ne,isAuthenticated:b}),Object(K.jsx)(j.a,{to:"/auth/login"})]})})})},be=n(24),me=n(63),fe={loading:!1,msgError:null},he=n(46),Oe={notes:[],active:null},ve="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,xe=Object(be.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case _:return{uid:t.payload.uid,name:t.payload.displayName};case g:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case y:return Object(p.a)(Object(p.a)({},e),{},{msgError:t.payload});case N:return Object(p.a)(Object(p.a)({},e),{},{msgError:null});case w:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case k:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(null===t||void 0===t?void 0:t.type){case S:return Object(p.a)(Object(p.a)({},e),{},{active:Object(p.a)({},t.payload)});case C:return Object(p.a)(Object(p.a)({},e),{},{notes:[t.payload].concat(Object(he.a)(e.notes))});case E:return Object(p.a)(Object(p.a)({},e),{},{notes:Object(he.a)(t.payload)});case I:return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload:e}))});case A:return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.filter((function(e){return e.id!==t.payload})),active:null});case P:return Oe;default:return e}}}),_e=Object(be.e)(xe,ve(Object(be.a)(me.a))),ge=function(){return Object(K.jsx)(i.a,{store:_e,children:Object(K.jsx)(pe,{})})};n(157);r.a.render(Object(K.jsx)(ge,{}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.697e6382.chunk.js.map