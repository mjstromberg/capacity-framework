(this["webpackJsonpcapacity-model"]=this["webpackJsonpcapacity-model"]||[]).push([[0],{365:function(e,t,a){e.exports=a(633)},370:function(e,t,a){},632:function(e,t,a){},633:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),c=a.n(i),l=(a(370),a(121)),o=a(678),u=a(201),f=a(45),s=a(301),m=a.n(s),d=a(302),g=a.n(d),b=a(199),E=a.n(b),h=a(303),O=a.n(h),j=a(304),w=a.n(j),p=a(200),R=a.n(p);function y(e,t,a,n){return"M".concat(e,",").concat(t," h").concat(a," v").concat(n," h").concat(-a," v").concat(-n," Z")}function v(e){return{FullWidthBar:function(t){var a=t.fill,n=function(e){var t=e.x,a=e.y,n=e.width,r=e.height,i=e.barGap;return y(t,a+(r+i)/2,n,3*r+2*i)}({x:t.x,y:t.y,width:t.width,height:t.height,barGap:e});return r.a.createElement("path",{d:n,fill:a})},StandardBar:function(t){var a=t.fill,n=function(e){var t=e.x,a=e.y,n=e.width,r=e.height;return y(t,a-(r+e.barGap)/2,n,r)}({x:t.x,y:t.y,width:t.width,height:t.height,barGap:e});return r.a.createElement("path",{d:n,fill:a})}}}var P={BLUE:m.a[200],GREEN:g.a[200],GREY:E.a[200],ORANGE:O.a[200],PURPLE:w.a[200],RED:R.a[200]};function S(e){var t=e.barGap,a=e.data,n=v(t),i=n.FullWidthBar,c=n.StandardBar;return r.a.createElement(f.e,{height:400,width:"100%"},r.a.createElement(f.c,{barGap:t,data:a,layout:"vertical",margin:{top:20,right:50,left:20,bottom:20}},r.a.createElement(f.b,{strokeDasharray:"3 3"}),r.a.createElement(f.g,{type:"number"}),r.a.createElement(f.h,{dataKey:"stage",type:"category"}),r.a.createElement(f.f,null),r.a.createElement(f.d,null),r.a.createElement(f.a,{dataKey:"goal",fill:P.GREY,shape:r.a.createElement(i,null)}),r.a.createElement(f.a,{dataKey:"simulation",fill:P.BLUE,shape:r.a.createElement(c,null)}),r.a.createElement(f.a,{dataKey:"limit",fill:P.PURPLE,shape:r.a.createElement(c,null)}),r.a.createElement(f.a,{dataKey:"actual",fill:P.GREEN,shape:r.a.createElement(c,null)})))}S.defaultProps={barGap:0};var G=S,x=a(168),C=a(305),L=a.n(C),B=a(311),k=a.n(B),A=a(321),D=a.n(A),F=a(312),W=a.n(F),K=a(319),U=a.n(K),N=a(209),Q=a.n(N),T=a(208),J=a.n(T),M=a(313),Y=a.n(M),I=a(314),V=a.n(I),Z=a(316),$=a.n(Z),q=a(317),z=a.n(q),H=a(318),X=a.n(H),_=a(322),ee=a.n(_),te=a(315),ae=a.n(te),ne=a(320),re=a.n(ne),ie=a(323),ce=a.n(ie),le={Add:Object(n.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Check:Object(n.forwardRef)((function(e,t){return r.a.createElement(W.a,Object.assign({},e,{ref:t}))})),Clear:Object(n.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),Delete:Object(n.forwardRef)((function(e,t){return r.a.createElement(Y.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(n.forwardRef)((function(e,t){return r.a.createElement(Q.a,Object.assign({},e,{ref:t}))})),Edit:Object(n.forwardRef)((function(e,t){return r.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Export:Object(n.forwardRef)((function(e,t){return r.a.createElement(ae.a,Object.assign({},e,{ref:t}))})),Filter:Object(n.forwardRef)((function(e,t){return r.a.createElement($.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(z.a,Object.assign({},e,{ref:t}))})),LastPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(X.a,Object.assign({},e,{ref:t}))})),NextPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(Q.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(n.forwardRef)((function(e,t){return r.a.createElement(U.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(n.forwardRef)((function(e,t){return r.a.createElement(J.a,Object.assign({},e,{ref:t}))})),Search:Object(n.forwardRef)((function(e,t){return r.a.createElement(re.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(n.forwardRef)((function(e,t){return r.a.createElement(D.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(n.forwardRef)((function(e,t){return r.a.createElement(ee.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(n.forwardRef)((function(e,t){return r.a.createElement(ce.a,Object.assign({},e,{ref:t}))}))},oe={padding:"dense",paging:!1,search:!1,showFirstLastPageButtons:!1},ue={padding:10};function fe(e){var t=e.initialColumns,a=e.initialData,i=e.onChange,c=e.title,o=Object(n.useState)(t,[t]),u=Object(l.a)(o,1)[0],f=Object(n.useState)(a,[a]),s=Object(l.a)(f,2),m=s[0],d=s[1];return r.a.createElement(L.a,{columns:u,data:m,icons:le,options:oe,style:ue,title:c,editable:{onRowAdd:function(e){return new Promise((function(t){setTimeout((function(){var a=[].concat(Object(x.a)(m),[e]);t(),d(a),i(a)}),600)}))},onRowUpdate:function(e,t){return new Promise((function(a){setTimeout((function(){if(a(),t){var n=Object(x.a)(m);n[n.indexOf(t)]=e,d(n),i(n)}}),600)}))},onRowDelete:function(e){return new Promise((function(t){setTimeout((function(){var a=Object(x.a)(m);a.splice(a.indexOf(e),1),t(),d(a),i(a)}),600)}))}}})}fe.defaultProps={onChange:function(){}};var se=[{stage:"CW",actual:117,goal:144,limit:80,simulation:150},{stage:"SQO",actual:1381,goal:1218,limit:360,simulation:1300},{stage:"SAL",actual:1189,goal:1360,limit:100,simulation:1400},{stage:"SQL",actual:1186,goal:1495,limit:120,simulation:1200},{stage:"MQL",actual:5185,goal:7189,limit:1e3,simulation:7200},{stage:"AQL",actual:22592,goal:28757,limit:4e3,simulation:25e3}],me=(a(632),[{title:"Stage",field:"stage"},{title:"Goal",field:"goal",type:"numeric"},{title:"Simulation",field:"simulation",type:"numeric"},{title:"Limit",field:"limit",type:"numeric"},{title:"Actual",field:"actual",type:"numeric"}]),de={margin:10};var ge=function(){var e=Object(n.useState)(se),t=Object(l.a)(e,2),a=t[0],i=t[1];return r.a.createElement(o.a,{maxWidth:"md"},r.a.createElement("div",{style:de},r.a.createElement(fe,{initialColumns:me,initialData:se,onChange:i,title:"Capacity Forecast Settings"})),r.a.createElement(u.a,{elevation:3,style:de},r.a.createElement(G,{data:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[365,1,2]]]);
//# sourceMappingURL=main.720cab4e.chunk.js.map