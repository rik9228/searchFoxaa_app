(function(e){function t(t){for(var r,n,s=t[0],l=t[1],c=t[2],u=0,f=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&f.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-41309994":"d1b70e95"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-41309994":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-41309994":"1887d38a"}[e]+".css",i=l.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],u=c.getAttribute("data-href");if(u===r||u===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete n[e],d.parentNode.removeChild(d),a(o)},d.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){n[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,a){r=i[e]=[t,a]}));t.push(r[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",f.name="ChunkLoadError",f.type=r,f.request=n,a[1](f)}i[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/searchFoxaa_app/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=u;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{attrs:{id:"app"}},[a("router-view")],1)])},i=[],o={name:"App",data:function(){return{}}},s=o,l=a("2877"),c=a("6544"),u=a.n(c),f=a("7496"),d=Object(l["a"])(s,n,i,!1,null,null,null),p=d.exports;u()(d,{VApp:f["a"]});a("d3b7"),a("3ca3"),a("ddb0");var m=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("game-start")},h=[],y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v("キツネ探し当てゲーム")]),a("img",{staticClass:"mainVisual",attrs:{alt:"Vue logo",src:"https://blogimg.goo.ne.jp/user_image/3f/13/fe1f78ded2409e795b25be9d48cc1e0a.png"}}),a("h2",{staticClass:"text-center"},[e._v("動物の中に紛れたキツネを探し当てて下さい。")]),a("p",{staticClass:"mt-5"},[e._v("🦊 難易度を選択する 🦊")]),a("div",{staticClass:"col-6 mx-auto"},[a("v-row",[e._l(e.difficalties,(function(t,r){return[a("v-col",{key:r},[a("v-btn",{attrs:{color:t.color,width:"100%",dark:""},on:{click:function(a){return e.difficaltySelect(t.key)}}},[e._v(" "+e._s(t.name)+" ")])],1)]}))],2),a("v-card",{staticClass:"mt-5 mx-auto pa-3",attrs:{"max-width":"600"}},[a("v-card-title",{staticClass:"justify-center"},[a("b",[e._v("これまでの結果")])]),e._l(e.resultHistories,(function(t,r){return[a("div",{key:r,staticClass:"d-flex"},[a("v-card-text",[e._v("難易度："+e._s(t.selectedDifficalty))]),a("v-card-text",[e._v("間違えた数："+e._s(t.wrongCount))]),a("v-card-text",[e._v("かかった時間："+e._s(t.accumTime)+"秒")])],1)]}))],2),a("v-dialog",{attrs:{width:"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.isDifficaltySelected?a("v-card",{staticClass:"pb-5"},[a("v-card-title",{staticClass:"text-h5 grey lighten-2 justify-center"},[e._v(" 難易度： "),a("v-rating",{staticClass:"ml-2",attrs:{value:e.selectedDifficalty.rating,readonly:!0,dense:!0,"background-color":e.selectedDifficalty.color,color:e.selectedDifficalty.color,large:""}})],1),a("v-card-text",{staticClass:"pt-5"},[e._v("犬の数："+e._s(e.selectedDifficalty.animals)+"匹")]),a("v-card-text",{staticClass:"font-weight-bold"},[e._v("見つける狐の数："+e._s(e.selectedDifficalty.fox)+"匹 ")]),a("v-card-text",{staticClass:"font-weight-bold text--primary pb-1"},[a("b",[e._v("※音声が流れます。")])]),"hard"===e.selectedDifficaltyKey?a("v-card-text",{staticClass:"font-weight-bold pb-1 pt-2"},[e._v("※数秒ごとに画像がシャッフルされます")]):e._e(),a("router-link",{attrs:{to:"/game",event:""},nativeOn:{click:function(t){return e.Start.apply(null,arguments)}}},[e.isDifficaltySelected?a("v-btn",{staticClass:"mt-5",attrs:{color:"primary"}},[e._v(" 狐を探しに行く ")]):e._e()],1)],1):e._e()],1)],1)])},g=[],b=(a("7db0"),{name:"GameStart",data:function(){return{difficalties:[{key:"easy",name:"草むら",animals:10,fox:2,rating:1,color:"success"},{key:"normal",name:"森",animals:30,fox:2,rating:3,color:"warning"},{key:"hard",name:"樹海",animals:50,fox:5,rating:5,color:"purple"}],selectedDifficaltyKey:"easy",dialog:!1,resultHistories:[]}},created:function(){this.resultHistories=JSON.parse(localStorage.getItem("result"))},computed:{selectedDifficalty:function(){var e=this;return this.difficalties.find((function(t){return t.key===e.selectedDifficaltyKey}))},isDifficaltySelected:function(){return""!==this.selectedDifficaltyKey}},methods:{Start:function(){K.push({name:"Game",params:{selectedDifficalty:this.selectedDifficalty}})},difficaltySelect:function(e){this.selectedDifficaltyKey=e,this.dialog=!this.dialog}}}),_=b,w=a("8336"),x=a("b0af"),C=a("99d9"),k=a("62ad"),S=a("169a"),D=a("1d4d"),O=a("0fd9"),j=Object(l["a"])(_,y,g,!1,null,null,null),H=j.exports;u()(j,{VBtn:w["a"],VCard:x["a"],VCardText:C["b"],VCardTitle:C["c"],VCol:k["a"],VDialog:S["a"],VRating:D["a"],VRow:O["a"]});var E={name:"Home",components:{GameStart:H}},T=E,V=Object(l["a"])(T,v,h,!1,null,null,null),P=V.exports;r["a"].use(m["a"]);var A=[{path:"/",name:"Home",component:P},{path:"/game",name:"Game",component:function(){return a.e("chunk-41309994").then(a.bind(null,"7d36"))},props:!0}],N=new m["a"]({routes:A}),K=N,L=a("6672"),$=a.n(L),B=a("2f62"),G={resultHistories:[]},J={resultHistories:function(e){return e.resultHistories}},M={setResultHistory:function(e,t){5===e.resultHistories.length&&e.resultHistories.shift(),e.resultHistories.push(t),localStorage.setItem("result",JSON.stringify(e.resultHistories))}},I={},R={namespaced:!0,state:G,getters:J,mutations:M,actions:I};r["a"].use(B["a"]);var q=new B["a"].Store({modules:{game:R}}),F=q,U=a("f309");r["a"].use(U["a"]);var z=new U["a"]({}),Q=a("ecee"),W=a("c074"),X=a("ad3d");Q["c"].add(W["a"]),r["a"].component("font-awesome-icon",X["a"]),r["a"].config.productionTip=!1,r["a"].prototype.$playSound=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=new Audio(e);a.volume=t,a.play()},new r["a"]({store:F,router:K,css:$.a,vuetify:z,render:function(e){return e(p)}}).$mount("#app")},6672:function(e,t,a){}});
//# sourceMappingURL=app.f65366dc.js.map