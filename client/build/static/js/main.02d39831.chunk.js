(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e){e.exports=JSON.parse('{"domain":"dev-deinyefa.auth0.com","clientId":"gZlfS8C3GgADzGL5UezkiwTTkNrPl5bR","url":"dev-deinyefa","audience":"casting-agency","callbackURL":"http://localhost:3000"}')},46:function(e,t,a){e.exports=a(73)},51:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),l=a.n(r),o=(a(51),a(18)),i=a(75),u=a(14),s=a.n(u),m=a(22),d=a(10),p=a(45),f=a(41),E=a.n(f),v=a(23),h=function(){return window.history.replaceState({},document.title,window.location.pathname)},g=c.a.createContext(),b=function(){return Object(n.useContext)(g)},k=a(11),w=Object(k.a)(),x=a(74),O=a(76),j=a(77),y=a(13),N=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(x.a,null,"Casting Agency"),c.a.createElement(i.a,{className:"d-flex"},c.a.createElement(O.a,null,c.a.createElement(j.a,null,c.a.createElement(y.a,{to:"/movies"},"Movies"))),c.a.createElement(O.a,null,c.a.createElement(j.a,null,c.a.createElement(y.a,{to:"/actors"},"Actors")))))},C=a(78),S=a(79),L=a(80),R=a(81),T=a(82),A=a(83),W=a(84),P=a(43),U=a(90),B=a(91),D=a(92),I=a(85),M=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],l=b(),o=l.user,u=l.isAuthenticated,s=l.loginWithRedirect,m=l.logout,p=function(){return m({returnTo:window.location.origin})};return c.a.createElement("div",{className:"nav-container"},c.a.createElement(C.a,{color:"light",light:!0,expand:"md"},c.a.createElement(i.a,null,c.a.createElement(S.a,{className:"logo"}),c.a.createElement(L.a,{onClick:function(){return r(!a)}}),c.a.createElement(R.a,{isOpen:a,navbar:!0},c.a.createElement(T.a,{className:"mr-auto",navbar:!0},c.a.createElement(A.a,null,c.a.createElement(W.a,{tag:y.b,to:"/",exact:!0,activeClassName:"router-link-exact-active"},"Home"))),c.a.createElement(T.a,{className:"d-none d-md-block",navbar:!0},!u&&c.a.createElement(A.a,null,c.a.createElement(P.a,{id:"qsLoginBtn",color:"primary",className:"btn-margin",onClick:function(){return s({})}},"Log in")),u&&c.a.createElement(U.a,{nav:!0,inNavbar:!0},c.a.createElement(B.a,{nav:!0,caret:!0,id:"profileDropDown"},c.a.createElement("img",{src:o?o.picture:"",alt:"Profile",className:"nav-user-profile rounded-circle",width:"50"})),c.a.createElement(D.a,null,c.a.createElement(I.a,{header:!0},o?o.name:""),c.a.createElement(I.a,{tag:y.b,to:"/movies",className:"dropdown-profile",activeClassName:"router-link-exact-active"},"Movies"),c.a.createElement(I.a,{tag:y.b,to:"/actors",className:"dropdown-profile",activeClassName:"router-link-exact-active"},"Actors"),c.a.createElement(I.a,{id:"qsLogoutBtn",onClick:function(){return p()}},"Log out")))),!u&&c.a.createElement(T.a,{className:"d-md-none",navbar:!0},c.a.createElement(A.a,null,c.a.createElement(P.a,{id:"qsLoginBtn",color:"primary",block:!0,onClick:function(){return s({})}},"Log in"))),u&&c.a.createElement(T.a,{className:"d-md-none justify-content-between",navbar:!0,style:{minHeight:170}},c.a.createElement(A.a,null,c.a.createElement("span",{className:"user-info"},c.a.createElement("img",{src:o?o.picture:"",alt:"Profile",className:"nav-user-profile d-inline-block rounded-circle mr-3",width:"50"}),c.a.createElement("h6",{className:"d-inline-block"},o?o.name:""))),c.a.createElement(A.a,null,c.a.createElement(y.b,{to:"/actors",activeClassName:"router-link-exact-active"},"Actors")),c.a.createElement(A.a,null,c.a.createElement(y.b,{to:"#",id:"qsLogoutBtn",onClick:function(){return p()}},"Log out")))))))},_=a(27),q=a(89),z=function(e,t,a){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"GET",r=Object(n.useState)(t),l=Object(d.a)(r,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){function t(){return(t=Object(m.a)(s.a.mark((function t(){var n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e,{method:c,headers:{Authorization:"Bearer "+a}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,i(r);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e,a]),o},G=a(86),J=a(87),H=a(88),F=function(e){var t=e.movie;return c.a.createElement(G.a,{md:"4"},c.a.createElement(O.a,null,c.a.createElement(j.a,null,c.a.createElement(J.a,null,t.title),c.a.createElement(H.a,null,"Release Date: ",t.release_date),c.a.createElement("div",{className:"clearfix p-2"},c.a.createElement(P.a,{color:"primary",className:"float-left"},"Edit"),c.a.createElement(P.a,{color:"danger",className:"float-right"},"Delete")))))},Z=function(){var e=Object(n.useState)(1),t=Object(d.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(),o=Object(d.a)(l,2),u=o[0],s=o[1];(0,b().getTokenSilently)().then((function(e){return s(e)}));var m="http://localhost:5000/movies?page=".concat(a),p=z(m,{},u)||{};return c.a.createElement(i.a,null,c.a.createElement("h1",null,"Movies!"),c.a.createElement(q.a,null,p.movies?p.movies.map((function(e){return c.a.createElement(F,{key:e.id,movie:e})})):c.a.createElement("p",null,"Loading...")),c.a.createElement(q.a,null,function(){for(var e=[],t=Math.ceil(p.total_movies/10),n=function(t){e=[].concat(Object(_.a)(e),[c.a.createElement("span",{key:t,className:"page-num ".concat(t===a?"active":""),onClick:function(){r(t)}},t)])},l=1;l<=t;l++)n(l);return e}()))},$=function(e){var t=e.actor;return c.a.createElement(G.a,{md:"4"},c.a.createElement(O.a,null,c.a.createElement(j.a,null,c.a.createElement(J.a,null,t.name,", ",t.age),c.a.createElement(H.a,null,t.gender),c.a.createElement("div",{className:"clearfix p-2"},c.a.createElement(P.a,{color:"primary",className:"float-left"},"Edit"),c.a.createElement(P.a,{color:"danger",className:"float-right"},"Delete")))))},K=function(){var e=Object(n.useState)(1),t=Object(d.a)(e,2),a=t[0],r=t[1],l="http://localhost:5000/actors?page=".concat(a),o=z(l,{});return console.log(o),c.a.createElement(i.a,null,c.a.createElement("h1",null,"Actors!"),c.a.createElement(q.a,null,o.actors?o.actors.map((function(e){return c.a.createElement($,{key:e.id,actor:e})})):null),c.a.createElement(q.a,null,function(){for(var e=[],t=Math.ceil(o.total_actors/10),n=function(t){e=[].concat(Object(_.a)(e),[c.a.createElement("span",{key:t,className:"page-num ".concat(t===a?"active":""),onClick:function(){r(t)}},t)])},l=1;l<=t;l++)n(l);return e}()))};a(71);var Q=function(){return b.loading?"Loading...":c.a.createElement(o.b,{history:w},c.a.createElement("div",{id:"app",className:"d-flex flex-column w-100"},c.a.createElement(M,null),c.a.createElement(i.a,{className:"flex-grow-1 mt-5"},c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0,component:N}),c.a.createElement(o.a,{path:"/movies",component:Z}),c.a.createElement(o.a,{path:"/actors",component:K})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(72);l.a.render(c.a.createElement((function(e){var t=e.children,a=e.onRedirectCallback,r=void 0===a?h:a,l=Object(p.a)(e,["children","onRedirectCallback"]),o=Object(n.useState)(),i=Object(d.a)(o,2),u=i[0],f=i[1],v=Object(n.useState)(),b=Object(d.a)(v,2),k=b[0],w=b[1],x=Object(n.useState)(),O=Object(d.a)(x,2),j=O[0],y=O[1],N=Object(n.useState)(!0),C=Object(d.a)(N,2),S=C[0],L=C[1],R=Object(n.useState)(!0),T=Object(d.a)(R,2),A=T[0],W=T[1];Object(n.useEffect)((function(){(function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E()(l);case 2:if(t=e.sent,y(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,r(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(c=e.sent,f(c),!c){e.next=19;break}return e.next=17,t.getUser();case 17:o=e.sent,w(o);case 19:L(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(){var e=Object(m.a)(s.a.mark((function e(){var t,a,n=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},W(!0),e.prev=2,e.next=5,j.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:return e.prev=10,W(!1),e.finish(10);case 13:return e.next=15,j.getUser();case 15:a=e.sent,w(a),f(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(!0),e.next=3,j.handleRedirectCallback();case 3:return e.next=5,j.getUser();case 5:t=e.sent,L(!1),f(!0),w(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement(g.Provider,{value:{isAuthenticated:u,user:k,loading:S,popupOpen:A,loginWithPopup:P,handleRedirectCallback:U,getIdTokenClaims:function(){return j.getIdTokenClaims.apply(j,arguments)},loginWithRedirect:function(){return j.loginWithRedirect.apply(j,arguments)},getTokenSilently:function(){return j.getTokenSilently.apply(j,arguments)},getTokenWithPopup:function(){return j.getTokenWithPopup.apply(j,arguments)},logout:function(){return j.logout.apply(j,arguments)}}},t)}),{domain:v.domain,client_id:v.clientId,redirect_uri:v.callbackURL,onRedirectCallback:function(e){w.push(e&&e.targetURL?e.targetURL:window.location.pathname)},audience:v.audience},c.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[46,1,2]]]);
//# sourceMappingURL=main.02d39831.chunk.js.map