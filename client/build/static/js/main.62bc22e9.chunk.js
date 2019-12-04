(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{44:function(e,t,a){e.exports=a.p+"static/media/actors.525a1df3.jpg"},45:function(e,t,a){e.exports=a.p+"static/media/movies.f68ef00d.jpg"},49:function(e,t,a){e.exports={Loader:"Loader_Loader__3-3CJ",load4:"Loader_load4__2oAhs"}},51:function(e,t,a){e.exports=a(77)},56:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(25),o=a.n(c),l=(a(56),a(20)),i=a(78),s=a(10),u=a.n(s),m=a(13),d=a(7),p=a(50),f=a(43),g=a.n(f),E=function(){return window.history.replaceState({},document.title,window.location.pathname)},v=r.a.createContext(),h=function(){return Object(n.useContext)(v)},b=a(14),O=Object(b.a)(),y=a(79),j=a(80),k=a(81),x=a(9),w=a(44),C=a.n(w),N=a(45),S=a.n(N),D=function(){var e=h().isAuthenticated;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Casting Agency"),e?r.a.createElement(i.a,{className:"d-flex"},r.a.createElement(y.a,null,r.a.createElement(j.a,{top:!0,width:"100%",height:"300",src:S.a,alt:"Movies img"}),r.a.createElement(k.a,null,r.a.createElement(x.a,{to:"/movies"},"Manage movies"))),r.a.createElement(y.a,null,r.a.createElement(j.a,{top:!0,width:"100%",height:"300",src:C.a,alt:"Actors img"}),r.a.createElement(k.a,null,r.a.createElement(x.a,{to:"/actors"},"Manage actors")))):r.a.createElement("p",{className:"lead text-center"},"Login to continue"))},P=a(82),A=a(83),T=a(84),_=a(85),L=a(86),R=a(87),B=a(88),M=a(47),W=a(100),z=a(101),J=a(102),U=a(89),F=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=h(),l=o.user,s=o.isAuthenticated,u=o.loginWithRedirect,m=o.logout,p=function(){return m({returnTo:window.location.origin})};return r.a.createElement("div",{className:"nav-container"},r.a.createElement(P.a,{color:"light",light:!0,expand:"md"},r.a.createElement(i.a,null,r.a.createElement(A.a,{className:"logo"}),r.a.createElement(T.a,{onClick:function(){return c(!a)}}),r.a.createElement(_.a,{isOpen:a,navbar:!0},r.a.createElement(L.a,{className:"mr-auto",navbar:!0},r.a.createElement(R.a,null,r.a.createElement(B.a,{tag:x.b,to:"/",exact:!0,activeClassName:"router-link-exact-active"},"Home"))),r.a.createElement(L.a,{className:"d-none d-md-block",navbar:!0},!s&&r.a.createElement(R.a,null,r.a.createElement(M.a,{id:"qsLoginBtn",color:"primary",className:"btn-margin",onClick:function(){return u({})}},"Log in")),s&&r.a.createElement(W.a,{nav:!0,inNavbar:!0},r.a.createElement(z.a,{nav:!0,caret:!0,id:"profileDropDown"},r.a.createElement("img",{src:l?l.picture:"",alt:"Profile",className:"nav-user-profile rounded-circle",width:"50"})),r.a.createElement(J.a,null,r.a.createElement(U.a,{header:!0},l?l.name:""),r.a.createElement(U.a,{tag:x.b,to:"/movies",className:"dropdown-profile",activeClassName:"router-link-exact-active"},"Movies"),r.a.createElement(U.a,{tag:x.b,to:"/actors",className:"dropdown-profile",activeClassName:"router-link-exact-active"},"Actors"),r.a.createElement(U.a,{id:"qsLogoutBtn",onClick:function(){return p()}},"Log out")))),!s&&r.a.createElement(L.a,{className:"d-md-none",navbar:!0},r.a.createElement(R.a,null,r.a.createElement(M.a,{id:"qsLoginBtn",color:"primary",block:!0,onClick:function(){return u({})}},"Log in"))),s&&r.a.createElement(L.a,{className:"d-md-none justify-content-between",navbar:!0,style:{minHeight:170}},r.a.createElement(R.a,null,r.a.createElement("span",{className:"user-info"},r.a.createElement("img",{src:l?l.picture:"",alt:"Profile",className:"nav-user-profile d-inline-block rounded-circle mr-3",width:"50"}),r.a.createElement("h6",{className:"d-inline-block"},l?l.name:""))),r.a.createElement(R.a,null,r.a.createElement(x.b,{to:"/actors",activeClassName:"router-link-exact-active"},"Actors")),r.a.createElement(R.a,null,r.a.createElement(x.b,{to:"#",id:"qsLogoutBtn",onClick:function(){return p()}},"Log out")))))))},q=a(28),H=a(99),G=a(27),I=a.n(G),Z=function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"GET",c=arguments.length>4?arguments[4]:void 0,o=Object(n.useState)(t),l=Object(d.a)(o,2),i=l[0],s=l[1];return Object(n.useEffect)((function(){function t(){return(t=Object(m.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:r,headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"},body:JSON.stringify(c)});case 2:return n=t.sent,t.t0=s,t.next=6,n.json();case 6:t.t1=t.sent,(0,t.t0)(t.t1);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,a]),i},$=a(90),K=a(91),Q=a(92),V="https://casting-agency.herokuapp.com/",X=Object(l.f)((function(e){var t=e.movieData,a=e.exposedToken,c=e.token,o=Object(n.useState)({title:t&&t.title||"",release_date:t&&t.release_date||""}),l=Object(d.a)(o,2),i=l[0],s=(l[1],function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(V,"/movies/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{md:"4",className:"my-3"},r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(K.a,null,i.title),r.a.createElement(Q.a,null,"Release Date: ",i.release_date),r.a.createElement("div",{className:"clearfix p-2"},-1!==a.permissions.indexOf("patch:actors+movies")?r.a.createElement(M.a,{color:"primary",className:"float-left",tag:x.b,to:{pathname:"/movies/add-movie",state:{movieData:t,editing:!0,token:c}}},"Edit"):null,-1!==a.permissions.indexOf("post+delete:movies")?r.a.createElement(M.a,{tag:x.b,to:"/movies",color:"danger",className:"float-right",onClick:function(){return s(t.id)}},"Delete"):null)))))})),Y=a(49),ee=a.n(Y),te=function(){return r.a.createElement("div",{className:ee.a.Loader},"Loading...")},ae=a(23),ne=a(93),re=a(94),ce=a(95),oe=a(96),le=a(97),ie=a(98);function se(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ue=function(e){var t="".concat(V,"/movies"),a=e.location.state,c=a.editing,o=a.movieData,l=a.token,i=Object(n.useState)({title:c&&o&&o.title||"",release_date:c&&o&&o.release_date||""}),s=Object(d.a)(i,2),p=s[0],f=s[1],g=function(e,t){f(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?se(a,!0).forEach((function(t){Object(ae.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):se(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},p,Object(ae.a)({},e,t)))},E=function(){var a=Object(m.a)(u.a.mark((function a(n,r){var o,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(c?"".concat(t,"/").concat(n):t,{method:c?"PATCH":"POST",headers:{Authorization:"Bearer "+l,"Content-Type":"application/json"},body:JSON.stringify(r)});case 2:return o=a.sent,a.next=5,o.json();case 5:i=a.sent,f({title:i.movie.title,release_date:i.movie.release_date}),e.history.push("/movies");case 8:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement(y.a,null,r.a.createElement(ne.a,null,"Add a movie"),r.a.createElement(k.a,null,r.a.createElement(re.a,{onSubmit:function(e){e.preventDefault(),E({title:p.title,release_date:p.release_date})}},r.a.createElement(ce.a,null,r.a.createElement(oe.a,null,"Movie title"),r.a.createElement(le.a,{type:"text",name:"title",id:"title",value:p.title,onChange:function(e){return g("title",e.target.value)}})),r.a.createElement(ce.a,null,r.a.createElement(oe.a,null,"Movie release date"),r.a.createElement(le.a,{type:"date",name:"release_date",id:"release_date",value:p.release_date,onChange:function(e){return g("release_date",e.target.value)}})))),r.a.createElement(ie.a,{className:"d-flex justify-content-between"},r.a.createElement(M.a,{tag:x.b,to:"/movies",color:"warning"},"Cancel"),r.a.createElement(M.a,{color:"primary",type:"submit",onClick:function(e){e.preventDefault(),E(o&&o.id||null,{title:p.title,release_date:p.release_date})}},"Add")))},me=function(){var e,t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(1),s=Object(d.a)(l,2),u=s[0],m=s[1],p=Object(n.useState)(),f=Object(d.a)(p,2),g=f[0],E=f[1],v=h(),b=v.getTokenSilently,O=v.user,y=v.loading;O&&!y&&b().then((function(e){return E(e)})),g&&(e=I()(g));var j="".concat(V,"/movies?page=").concat(u),k=Z(j,{},g)||{};return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("h1",null,"Movies!"),e&&-1!==e.permissions.indexOf("post+delete:movies")?r.a.createElement(M.a,{color:"primary",to:{pathname:"/movies/add-movie",state:{editing:!1,movieData:null,token:g}},tag:x.b},"Add a movie"):null,r.a.createElement(H.a,null,k.movies?k.movies.map((function(t){return r.a.createElement(X,{key:t.id,movieData:t,exposedToken:e,token:g,editing:c,setEditing:o})})):r.a.createElement(te,null)),r.a.createElement(H.a,{className:"justify-content-center"},function(){for(var e=[],t=Math.ceil(k.total_movies/10),a=function(t){e=[].concat(Object(q.a)(e),[r.a.createElement("span",{key:t,className:"page-num ".concat(t===u?"active":""),onClick:function(){m(t)}},t)])},n=1;n<=t;n++)a(n);return e}())))},de=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/movies/add-movie",component:ue}),r.a.createElement(l.a,{path:"/movies",component:me}))},pe=Object(l.f)((function(e){var t=e.actorData,a=e.exposedToken,c=e.token,o=Object(n.useState)({name:t&&t.name||"",age:t&&t.age||"",gender:t&&t.gender||""}),l=Object(d.a)(o,2),i=l[0],s=(l[1],function(){var e=Object(m.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(V,"/actors/").concat(t),{method:"DELETE",headers:{Authorization:"Bearer "+c,"Content-Type":"application/json"}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{md:"4",className:"my-3"},r.a.createElement(y.a,null,r.a.createElement(k.a,null,r.a.createElement(K.a,null,i.name,", ",i.age),r.a.createElement(Q.a,null,i.gender),r.a.createElement("div",{className:"clearfix p-2"},-1!==a.permissions.indexOf("patch:actors+movies")?r.a.createElement(M.a,{color:"primary",className:"float-left",tag:x.b,to:{pathname:"/actors/add-actor",state:{actorData:t,editing:!0,token:c}}},"Edit"):null,-1!==a.permissions.indexOf("post+delete:actors")?r.a.createElement(M.a,{color:"danger",className:"float-right",onClick:function(){return s(i.id)}},"Delete"):null)))))}));function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ge=function(e){var t="".concat(V,"/actors"),a=e.location.state,c=a.editing,o=a.actorData,l=a.token,i=Object(n.useState)({name:c&&o&&o.name||"",age:c&&o&&o.age||"",gender:c&&o&&o.gender||""}),s=Object(d.a)(i,2),p=s[0],f=s[1],g=function(e,t){f(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(a,!0).forEach((function(t){Object(ae.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},p,Object(ae.a)({},e,t)))},E=function(){var a=Object(m.a)(u.a.mark((function a(n,r){var o,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(c?"".concat(t,"/").concat(n):t,{method:c?"PATCH":"POST",headers:{Authorization:"Bearer "+l,"Content-Type":"application/json"},body:JSON.stringify(r)});case 2:return o=a.sent,a.next=5,o.json();case 5:i=a.sent,f({name:i.actor.name,age:i.actor.age,gender:i.actor.gender}),e.history.push("/actors");case 8:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,null,r.a.createElement(ne.a,null,"Add an actor"),r.a.createElement(k.a,null,r.a.createElement(re.a,{onSubmit:function(e){e.preventDefault(),E({name:p.name,age:p.age,gender:p.gender})}},r.a.createElement(ce.a,null,r.a.createElement(oe.a,null,"Actor name"),r.a.createElement(le.a,{type:"text",name:"name",id:"name",value:p.name,onChange:function(e){return g("name",e.target.value)}})),r.a.createElement(ce.a,null,r.a.createElement(oe.a,null,"Actor age"),r.a.createElement(le.a,{type:"text",name:"age",id:"age",value:p.age,onChange:function(e){return g("age",e.target.value)}})),r.a.createElement(ce.a,null,r.a.createElement(oe.a,null,"Actor gender"),r.a.createElement(le.a,{type:"text",name:"gender",id:"gender",value:p.gender,onChange:function(e){return g("gender",e.target.value)}})))),r.a.createElement(ie.a,{className:"d-flex justify-content-between"},r.a.createElement(M.a,{color:"warning",tag:x.b,to:"/actors"},"Cancel"),r.a.createElement(M.a,{color:"primary",type:"submit",onClick:function(e){e.preventDefault(),E(o&&o.id||null,{name:p.name,age:p.age,gender:p.gender})}},"Add"))))},Ee=function(){var e,t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],o=(a[1],Object(n.useState)(1)),l=Object(d.a)(o,2),s=l[0],u=l[1],m=Object(n.useState)(),p=Object(d.a)(m,2),f=p[0],g=p[1],E=h(),v=E.getTokenSilently,b=E.user,O=E.loading;b&&!O&&v().then((function(e){return g(e)})),f&&(e=I()(f));var y="".concat(V,"/actors?page=").concat(s),j=Z(y,{},f);return r.a.createElement(i.a,null,r.a.createElement("h1",null,"Actors"),e&&-1!==e.permissions.indexOf("post+delete:actors")?r.a.createElement(M.a,{color:"primary",to:{pathname:"/actors/add-actor",state:{editing:!1,actorData:null,token:f}},tag:x.b},"Add an actor"):null,r.a.createElement(H.a,null,j.actors?j.actors.map((function(t){return r.a.createElement(pe,{key:t.id,actorData:t,exposedToken:e,token:f,editing:c})})):r.a.createElement(te,null)),r.a.createElement(H.a,{className:"justify-content-center"},function(){for(var e=[],t=Math.ceil(j.total_actors/10),a=function(t){e=[].concat(Object(q.a)(e),[r.a.createElement("span",{key:t,className:"page-num ".concat(t===s?"active":""),onClick:function(){u(t)}},t)])},n=1;n<=t;n++)a(n);return e}()))},ve=function(){return r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/actors/add-actor",component:ge}),r.a.createElement(l.a,{path:"/actors",component:Ee}))};a(75);var he=function(){var e=h.loading,t=h.user;return e&&!t?r.a.createElement("p",null,"Loading..."):r.a.createElement(l.b,{history:O},r.a.createElement("div",{id:"app",className:"d-flex flex-column w-100"},r.a.createElement(F,null),r.a.createElement(i.a,{className:"flex-grow-1 mt-5"},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",exact:!0,component:D}),r.a.createElement(l.a,{path:"/movies",component:de}),r.a.createElement(l.a,{path:"/actors",component:ve})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(76);o.a.render(r.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,c=void 0===a?E:a,o=Object(p.a)(e,["children","onRedirectCallback"]),l=Object(n.useState)(),i=Object(d.a)(l,2),s=i[0],f=i[1],h=Object(n.useState)(),b=Object(d.a)(h,2),O=b[0],y=b[1],j=Object(n.useState)(),k=Object(d.a)(j,2),x=k[0],w=k[1],C=Object(n.useState)(!0),N=Object(d.a)(C,2),S=N[0],D=N[1],P=Object(n.useState)(!0),A=Object(d.a)(P,2),T=A[0],_=A[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n,r,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g()(o);case 2:if(t=e.sent,w(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,c(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,f(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,y(l);case 19:D(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(){var e=Object(m.a)(u.a.mark((function e(){var t,a,n=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},_(!0),e.prev=2,e.next=5,x.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:return e.prev=10,_(!1),e.finish(10);case 13:return e.next=15,x.getUser();case 15:a=e.sent,y(a),f(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(m.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,x.handleRedirectCallback();case 3:return e.next=5,x.getUser();case 5:t=e.sent,D(!1),f(!0),y(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(v.Provider,{value:{isAuthenticated:s,user:O,loading:S,popupOpen:T,loginWithPopup:L,handleRedirectCallback:R,getIdTokenClaims:function(){return x.getIdTokenClaims.apply(x,arguments)},loginWithRedirect:function(){return x.loginWithRedirect.apply(x,arguments)},getTokenSilently:function(){return x.getTokenSilently.apply(x,arguments)},getTokenWithPopup:function(){return x.getTokenWithPopup.apply(x,arguments)},logout:function(){return x.logout.apply(x,arguments)}}},t)}),{domain:"dev-deinyefa.auth0.com",client_id:"gZlfS8C3GgADzGL5UezkiwTTkNrPl5bR",redirect_uri:"https://casting-agency.herokuapp.com/",onRedirectCallback:function(e){O.push(e&&e.targetURL?e.targetURL:window.location.pathname)},audience:"casting-agency"},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,1,2]]]);
//# sourceMappingURL=main.62bc22e9.chunk.js.map