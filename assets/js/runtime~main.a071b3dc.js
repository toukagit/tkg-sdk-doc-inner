!function(){"use strict";var e,a,t,f,n,c={},r={};function d(e){var a=r[e];if(void 0!==a)return a.exports;var t=r[e]={id:e,loaded:!1,exports:{}};return c[e].call(t.exports,t,t.exports,d),t.loaded=!0,t.exports}d.m=c,d.c=r,e=[],d.O=function(a,t,f,n){if(!t){var c=1/0;for(i=0;i<e.length;i++){t=e[i][0],f=e[i][1],n=e[i][2];for(var r=!0,b=0;b<t.length;b++)(!1&n||c>=n)&&Object.keys(d.O).every((function(e){return d.O[e](t[b])}))?t.splice(b--,1):(r=!1,n<c&&(c=n));if(r){e.splice(i--,1);var o=f();void 0!==o&&(a=o)}}return a}n=n||0;for(var i=e.length;i>0&&e[i-1][2]>n;i--)e[i]=e[i-1];e[i]=[t,f,n]},d.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return d.d(a,{a:a}),a},t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},d.t=function(e,f){if(1&f&&(e=this(e)),8&f)return e;if("object"==typeof e&&e){if(4&f&&e.__esModule)return e;if(16&f&&"function"==typeof e.then)return e}var n=Object.create(null);d.r(n);var c={};a=a||[null,t({}),t([]),t(t)];for(var r=2&f&&e;"object"==typeof r&&!~a.indexOf(r);r=t(r))Object.getOwnPropertyNames(r).forEach((function(a){c[a]=function(){return e[a]}}));return c.default=function(){return e},d.d(n,c),n},d.d=function(e,a){for(var t in a)d.o(a,t)&&!d.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},d.f={},d.e=function(e){return Promise.all(Object.keys(d.f).reduce((function(a,t){return d.f[t](e,a),a}),[]))},d.u=function(e){return"assets/js/"+({6:"b9fa56a0",96:"97a84a1b",137:"30eaad4f",548:"182ddf7f",823:"63503174",1004:"9c58ed29",1020:"5f957997",1023:"73f75ee6",1175:"5ce1c8d0",1389:"14eb3a6f",1413:"703f3689",1545:"a2f3e1e8",1820:"1e518b75",1841:"c8a5d49d",1943:"85ae40a5",2434:"a95af62a",2531:"ba6af4a5",2732:"cab41015",2833:"38d1eea8",3085:"1f391b9e",3196:"0eff7b28",3473:"23c46029",3538:"7b629d5b",3694:"99eca123",3762:"e7eca315",3843:"dd26f749",3958:"a81c4700",4195:"53dd7183",4330:"637aa07b",4354:"b2a9bf2a",4441:"4e6b5e13",4567:"8c38d9ee",4689:"06f8edbc",4746:"9a05f2eb",5318:"5b4a0942",5674:"c38d7b2a",6044:"49c687af",6573:"a6b36c1b",6717:"b98bbf73",7001:"547ce873",7011:"6a70e320",7250:"a2782c9b",7256:"da90ff6b",7281:"607ce2de",7298:"e59eab7d",7414:"393be207",7918:"17896441",7964:"d1dbe88e",7991:"7558a43c",8138:"1a9778fc",8304:"bf4febc2",8401:"e7ea67fe",8883:"eeb337de",9043:"dd03491d",9138:"7fed4ee4",9167:"f913484e",9183:"fc9364d9",9269:"55e742dc",9275:"2d982bda",9382:"3b6466b0",9514:"1be78505",9526:"eab2b72a",9649:"76b6b7a9",9724:"2171cb58",9729:"9f5e0096",9768:"51b8b3b9"}[e]||e)+"."+{6:"da0c90bd",96:"26bccd7d",137:"7f14a6a8",548:"10bb70c2",823:"af14e849",1004:"c186d791",1020:"101c1746",1023:"0471c4bd",1175:"9e4a1d6c",1389:"8316daa6",1413:"3c0803f2",1545:"67077266",1820:"17f4a216",1841:"34e16e7e",1943:"40bc43a7",2434:"513ea641",2531:"c4a803a4",2732:"58efe308",2833:"d6f7a34f",3085:"ae03e4a7",3196:"423fb444",3473:"4f301526",3538:"d0092bcc",3694:"cbca59d7",3762:"8e8234e9",3843:"288d2e11",3958:"80ab4e23",4195:"62387f9b",4330:"5a6f8810",4354:"8ec33ee8",4441:"272e80e9",4567:"35e475ef",4608:"85a54471",4689:"ddb43e3e",4746:"d764d134",5318:"31b6c0be",5674:"9699e0c3",6044:"242aee97",6518:"38fd42e6",6573:"3f7b79a2",6717:"f8482928",7001:"b75f1b70",7011:"89171306",7250:"98d15024",7256:"74a64f14",7281:"32edab72",7298:"e6925f72",7414:"7af087dc",7918:"c8881392",7964:"d7486ab1",7991:"b354f7e7",8138:"1bdd4914",8304:"80b010db",8401:"e3c045f1",8883:"7c58b916",9043:"a6cbb5bc",9138:"dd25c84c",9167:"56e32409",9183:"b05b1be1",9269:"9ef28ffa",9275:"a099cda0",9382:"74c64cd4",9514:"dac99cfc",9526:"c5254b52",9649:"14c1f018",9724:"a30f336c",9729:"f82ad6bf",9768:"7a3c1fd8"}[e]+".js"},d.miniCssF=function(e){},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},f={},n="website:",d.l=function(e,a,t,c){if(f[e])f[e].push(a);else{var r,b;if(void 0!==t)for(var o=document.getElementsByTagName("script"),i=0;i<o.length;i++){var u=o[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==n+t){r=u;break}}r||(b=!0,(r=document.createElement("script")).charset="utf-8",r.timeout=120,d.nc&&r.setAttribute("nonce",d.nc),r.setAttribute("data-webpack",n+t),r.src=e),f[e]=[a];var l=function(a,t){r.onerror=r.onload=null,clearTimeout(s);var n=f[e];if(delete f[e],r.parentNode&&r.parentNode.removeChild(r),n&&n.forEach((function(e){return e(t)})),a)return a(t)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=l.bind(null,r.onerror),r.onload=l.bind(null,r.onload),b&&document.head.appendChild(r)}},d.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/tkg-sdk-doc-inner/",d.gca=function(e){return e={17896441:"7918",63503174:"823",b9fa56a0:"6","97a84a1b":"96","30eaad4f":"137","182ddf7f":"548","9c58ed29":"1004","5f957997":"1020","73f75ee6":"1023","5ce1c8d0":"1175","14eb3a6f":"1389","703f3689":"1413",a2f3e1e8:"1545","1e518b75":"1820",c8a5d49d:"1841","85ae40a5":"1943",a95af62a:"2434",ba6af4a5:"2531",cab41015:"2732","38d1eea8":"2833","1f391b9e":"3085","0eff7b28":"3196","23c46029":"3473","7b629d5b":"3538","99eca123":"3694",e7eca315:"3762",dd26f749:"3843",a81c4700:"3958","53dd7183":"4195","637aa07b":"4330",b2a9bf2a:"4354","4e6b5e13":"4441","8c38d9ee":"4567","06f8edbc":"4689","9a05f2eb":"4746","5b4a0942":"5318",c38d7b2a:"5674","49c687af":"6044",a6b36c1b:"6573",b98bbf73:"6717","547ce873":"7001","6a70e320":"7011",a2782c9b:"7250",da90ff6b:"7256","607ce2de":"7281",e59eab7d:"7298","393be207":"7414",d1dbe88e:"7964","7558a43c":"7991","1a9778fc":"8138",bf4febc2:"8304",e7ea67fe:"8401",eeb337de:"8883",dd03491d:"9043","7fed4ee4":"9138",f913484e:"9167",fc9364d9:"9183","55e742dc":"9269","2d982bda":"9275","3b6466b0":"9382","1be78505":"9514",eab2b72a:"9526","76b6b7a9":"9649","2171cb58":"9724","9f5e0096":"9729","51b8b3b9":"9768"}[e]||e,d.p+d.u(e)},function(){var e={1303:0,532:0};d.f.j=function(a,t){var f=d.o(e,a)?e[a]:void 0;if(0!==f)if(f)t.push(f[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var n=new Promise((function(t,n){f=e[a]=[t,n]}));t.push(f[2]=n);var c=d.p+d.u(a),r=new Error;d.l(c,(function(t){if(d.o(e,a)&&(0!==(f=e[a])&&(e[a]=void 0),f)){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;r.message="Loading chunk "+a+" failed.\n("+n+": "+c+")",r.name="ChunkLoadError",r.type=n,r.request=c,f[1](r)}}),"chunk-"+a,a)}},d.O.j=function(a){return 0===e[a]};var a=function(a,t){var f,n,c=t[0],r=t[1],b=t[2],o=0;if(c.some((function(a){return 0!==e[a]}))){for(f in r)d.o(r,f)&&(d.m[f]=r[f]);if(b)var i=b(d)}for(a&&a(t);o<c.length;o++)n=c[o],d.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return d.O(i)},t=self.webpackChunkwebsite=self.webpackChunkwebsite||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))}()}();