(function(e){function n(n){for(var a,c,o=n[0],i=n[1],d=n[2],f=0,h=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&h.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(n);while(h.length)h.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],a=!0,c=1;c<t.length;c++){var o=t[c];0!==r[o]&&(a=!1)}a&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var a={},c={app:0},r={app:0},u=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-03b31c27":"fa13548a","chunk-0600e5f4":"b950ddb9","chunk-11a66348":"14dc7c74","chunk-1467667a":"570c277a","chunk-1545dde8":"04ddbbb2","chunk-1bbad61a":"fce0a3df","chunk-3d072a66":"88563714","chunk-4b42f060":"bc547cf1","chunk-4e47b5e0":"3ed0cbcc","chunk-5ba6eb2e":"b410a0a8","chunk-61ddc22e":"9256db7a","chunk-6b3a7872":"b90280e2","chunk-9011d1d4":"c365da2b","chunk-bb2c4682":"796225b8","chunk-f3749f96":"58cab5d9"}[e]+".js"}function i(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-11a66348":1,"chunk-1467667a":1,"chunk-1545dde8":1,"chunk-1bbad61a":1,"chunk-3d072a66":1,"chunk-4e47b5e0":1,"chunk-5ba6eb2e":1,"chunk-6b3a7872":1,"chunk-9011d1d4":1,"chunk-bb2c4682":1,"chunk-f3749f96":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var a="css/"+({}[e]||e)+"."+{"chunk-03b31c27":"31d6cfe0","chunk-0600e5f4":"31d6cfe0","chunk-11a66348":"a54b1723","chunk-1467667a":"fbf28df1","chunk-1545dde8":"af1e7357","chunk-1bbad61a":"55e808f3","chunk-3d072a66":"38e87465","chunk-4b42f060":"31d6cfe0","chunk-4e47b5e0":"c0547d82","chunk-5ba6eb2e":"fbf28df1","chunk-61ddc22e":"31d6cfe0","chunk-6b3a7872":"fbf28df1","chunk-9011d1d4":"aa24ac21","chunk-bb2c4682":"f982027b","chunk-f3749f96":"13162e32"}[e]+".css",r=i.p+a,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var d=u[o],f=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(f===a||f===r))return n()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){d=h[o],f=d.getAttribute("data-href");if(f===a||f===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=a,delete c[e],l.parentNode.removeChild(l),t(u)},l.href=r;var s=document.getElementsByTagName("head")[0];s.appendChild(l)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)n.push(a[2]);else{var u=new Promise((function(n,t){a=r[e]=[n,t]}));n.push(a[2]=u);var d,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=o(e);var h=new Error;d=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;h.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",h.name="ChunkLoadError",h.type=a,h.request=c,t[1](h)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:f})}),12e4);f.onerror=f.onload=d,document.head.appendChild(f)}return Promise.all(n)},i.m=e,i.c=a,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)i.d(t,a,function(n){return e[n]}.bind(null,a));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],f=d.push.bind(d);d.push=n,d=d.slice();for(var h=0;h<d.length;h++)n(d[h]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3dfd":function(e,n,t){"use strict";var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},c=[],r=(t("5c0b"),t("2877")),u={},o=Object(r["a"])(u,a,c,!1,null,null,null);n["a"]=o.exports},"56d7":function(e,n,t){"use strict";t.r(n),function(e){t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var n=t("2b0e"),a=t("3dfd"),c=t("a18c"),r=t("bc3a"),u=t.n(r),o=t("a7fe"),i=t.n(o),d=t("1157"),f=t.n(d),h=(t("4989"),t("9062")),l=t.n(h),s=(t("e40d"),t("7bb1")),b=t("427f"),p=t.n(b),m=t("a925"),k=(t("77ed"),t("f5af")),v=t.n(k),g=t("7ec7"),y=t.n(g),w=t("8f0d"),O=t("62ed"),j=t("c5ad"),T=t("87d5");t("f5ef");e.$=e.jQuery=f.a,n["a"].config.productionTip=!1,n["a"].config.productionTip=!1,n["a"].use(i.a,u.a),u.a.defaults.withCredentials=!0,n["a"].component("Loading",l.a),n["a"].use(s["a"],{classes:!0}),s["a"].Validator.localize("zhTW",p.a),n["a"].use(m["a"]),n["a"].use(y.a),n["a"].use(w["a"]),n["a"].filter("currency",O["a"]),n["a"].filter("formatDate",j["a"]),n["a"].filter("filterId",T["a"]);var x=new m["a"]({locale:"zhTW"});n["a"].use(s["a"],{events:"input|blur",i18n:x,dictionary:{zhTW:p.a}}),v.a.init({duration:800,easing:"slide",once:!0}),new n["a"]({i18n:x,router:c["a"],render:function(e){return e(a["a"])}}).$mount("#app"),c["a"].beforeEach((function(e,n,t){if(window.scrollTo(0,0),e.meta.requiresAuth){var a="".concat("https://vue-course-api.hexschool.io","/api/user/check");u.a.post(a).then((function(e){e.data.success?t():t({path:"/login"})}))}else t()}))}.call(this,t("c8ba"))},"5c0b":function(e,n,t){"use strict";var a=t("9c0c"),c=t.n(a);c.a},"62ed":function(e,n,t){"use strict";t("a9e3"),t("b680"),t("ac1f"),t("5319");n["a"]=function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var a=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return a})))}},"87d5":function(e,n,t){"use strict";t("4de4"),t("c975"),t("07ac");n["a"]=function(e,n){var t="";return Object.values(n).filter((function(n){if(e.indexOf(n.id)>-1)return t=n.title,n})),t}},"9c0c":function(e,n,t){},a18c:function(e,n,t){"use strict";t("d3b7");var a=t("2b0e"),c=t("8c4f");a["a"].use(c["a"]);var r=[{path:"*",redirect:"/"},{path:"/",component:function(){return t.e("chunk-3d072a66").then(t.bind(null,"b08a"))},children:[{name:"首頁",path:"",component:function(){return t.e("chunk-bb2c4682").then(t.bind(null,"edcc"))}},{name:"我們的故事",path:"about",component:function(){return t.e("chunk-4b42f060").then(t.bind(null,"f334"))}},{name:"我們的商品",path:"shop",component:function(){return t.e("chunk-1bbad61a").then(t.bind(null,"809b"))}},{name:"商品頁面",path:"shopsitem/:id",component:function(){return t.e("chunk-4e47b5e0").then(t.bind(null,"2ac1"))}},{name:"我們在這裡",path:"ourinfo",component:function(){return t.e("chunk-9011d1d4").then(t.bind(null,"e154"))}},{name:"購物車",path:"cart",component:function(){return t.e("chunk-0600e5f4").then(t.bind(null,"27b9"))}},{name:"登入",path:"login",component:function(){return t.e("chunk-11a66348").then(t.bind(null,"63f8"))}},{name:"確認訂單",path:"checkout",component:function(){return t.e("chunk-61ddc22e").then(t.bind(null,"267d"))}},{name:"完成訂單",path:"thankyou/:id",component:function(){return t.e("chunk-03b31c27").then(t.bind(null,"9b06"))}},{name:"願望清單",path:"wishlist",component:function(){return t.e("chunk-f3749f96").then(t.bind(null,"f863"))}}]},{path:"/admin",component:function(){return t.e("chunk-1545dde8").then(t.bind(null,"0c7c"))},children:[{name:"Products",path:"products",component:function(){return t.e("chunk-5ba6eb2e").then(t.bind(null,"1624"))},meta:{requiresAuth:!0}},{name:"Order",path:"order",component:function(){return t.e("chunk-6b3a7872").then(t.bind(null,"608a"))},meta:{requiresAuth:!0}},{name:"Coupons",path:"coupons",component:function(){return t.e("chunk-1467667a").then(t.bind(null,"2efe"))},meta:{requiresAuth:!0}}]}],u=new c["a"]({linkActiveClass:"active",routes:r});n["a"]=u},c5ad:function(e,n,t){"use strict";n["a"]=function(e){if(void 0===e)return"沒有時間";var n=1e3*JSON.parse(e),t=new Date(n),a=t.getFullYear()+"-",c=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",r=t.getDate()+" ",u=t.getHours()+":",o=t.getMinutes()+":",i=t.getSeconds();return a+c+r+u+o+i}},f5ef:function(e,n,t){"use strict";var a=t("2b0e");a["a"].prototype.$bus=new a["a"]}});
//# sourceMappingURL=app.1816b8f5.js.map