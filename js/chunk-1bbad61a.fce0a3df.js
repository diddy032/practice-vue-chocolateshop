(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1bbad61a"],{"13d5":function(t,a,e){"use strict";var i=e("23e7"),s=e("d58f").left,r=e("a640"),n=e("ae40"),o=r("reduce"),c=n("reduce",{1:0});i({target:"Array",proto:!0,forced:!o||!c},{reduce:function(t){return s(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"159b":function(t,a,e){var i=e("da84"),s=e("fdbc"),r=e("17c2"),n=e("9112");for(var o in s){var c=i[o],l=c&&c.prototype;if(l&&l.forEach!==r)try{n(l,"forEach",r)}catch(d){l.forEach=r}}},"17c2":function(t,a,e){"use strict";var i=e("b727").forEach,s=e("a640"),r=e("ae40"),n=s("forEach"),o=r("forEach");t.exports=n&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,e){"use strict";var i=e("23e7"),s=e("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},"45fc":function(t,a,e){"use strict";var i=e("23e7"),s=e("b727").some,r=e("a640"),n=e("ae40"),o=r("some"),c=n("some");i({target:"Array",proto:!0,forced:!o||!c},{some:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"809b":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t.products.length>0?e("div",{staticClass:"site-section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row mb-5"},[e("div",{staticClass:"col-lg-9 col-md-12 order-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 mb-5"},[e("div",{staticClass:"float-md-left mb-2"},[e("h2",{staticClass:"text-black h3 font-weight-bold"},[t._v(t._s(t.filterValue))])]),t.FilterPorducts.length>0?e("div",{staticClass:"d-flex"},[e("div",{staticClass:"dropdown mr-1 ml-md-auto"},[t.FilterPorducts.length>1?e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-secondary btn-sm dropdown-toggle",attrs:{type:"button",id:"dropdownMenuReference","data-toggle":"dropdown"}},[t._v("排序方式")]),e("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"dropdownMenuReference"}},[e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.setOrder(1)}}},[t._v("價格, 由低到高")]),e("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.setOrder(2)}}},[t._v("價格, 由高到低")])])]):t._e()])]):t._e()])]),t.FilterPorducts.length>0?e("div",{staticClass:"row mb-5"},t._l(t.FilterPorducts,(function(a,i){return e("div",{key:i,staticClass:"col-12 col-lg-6 mb-4"},[e("div",{staticClass:"block-4 text-center border position-relative"},[e("div",{staticClass:"position-absolute p-2 m-2 text-danger",staticStyle:{right:"0","z-index":"3"},on:{click:function(e){return t.EditLikeList(a)}}},[e("div",{staticClass:"like-farme-iton text-danger"},[-1==t.liked.indexOf(a.id)?e("i",{staticClass:"far fa-heart like-iton text-danger"}):e("i",{staticClass:"fas fa-heart like-iton text-danger"})])]),e("figure",{staticClass:"block-4-image img-cover"},[e("router-link",{attrs:{to:"/shopsitem/"+a.id}},[e("img",{staticClass:"img-fluid img-hover",attrs:{src:a.imageUrl,alt:"Image placeholder"}})])],1),e("div",{staticClass:"block-4-text p-4"},[e("router-link",{attrs:{to:"/shopsitem/"+a.id}},[e("h3",[t._v(t._s(a.title))])]),e("div",{staticClass:"my-3"},[e("div",{staticClass:"text-primary font-weight-bold h3 mb-0 mb-2"},[t._v("NT"+t._s(t._f("currency")(a.price)))]),e("del",{staticClass:"h5"},[t._v("NT"+t._s(t._f("currency")(a.origin_price)))])]),e("div",{staticClass:"d-flex justify-content-around"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("router-link",{staticClass:"btn btn-outline-info btn-sm btn-block my-md-3 my-1",attrs:{type:"button",to:"/shopsitem/"+a.id}},[e("i",{staticClass:"fas fa-tag mr-2"}),t._v(" 查看更多 ")])],1),e("div",{staticClass:"col-md-6"},[e("button",{staticClass:"btn btn-outline-primary btn-sm btn-block my-md-3 my-0",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(a.id)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):e("i",{staticClass:"fas fa-shopping-cart mr-2"}),t._v(" 加到購物車 ")])])])])])],1)])])})),0):e("div",[e("div",{staticClass:"row mb-5"},t._l(t.products,(function(a,i){return e("div",{key:i,staticClass:"col-12 col-lg-6 mb-4"},[e("div",{staticClass:"block-4 text-center border position-relative"},[e("div",{staticClass:"position-absolute p-2 m-2 text-danger ",staticStyle:{right:"0","z-index":"3"},on:{click:function(e){return t.EditLikeList(a)}}},[e("div",{staticClass:"like-farme-iton"},[-1==t.liked.indexOf(a.id)?e("i",{staticClass:"far fa-heart like-iton"}):e("i",{staticClass:"fas fa-heart like-iton"})])]),e("figure",{staticClass:"block-4-image img-cover"},[e("router-link",{attrs:{to:"/shopsitem/"+a.id}},[e("img",{staticClass:"img-fluid img-hover",attrs:{src:a.imageUrl,alt:"Image placeholder"}})])],1),e("div",{staticClass:"block-4-text p-4"},[e("router-link",{attrs:{to:"/shopsitem/"+a.id}},[e("h3",[t._v(t._s(a.title))])]),e("div",{staticClass:"my-3"},[e("div",{staticClass:"text-primary font-weight-bold h3 mb-0 mb-2"},[t._v("NT"+t._s(t._f("currency")(a.price)))]),e("del",{staticClass:"h5"},[t._v("NT"+t._s(t._f("currency")(a.origin_price)))])]),e("div",{staticClass:"d-flex justify-content-around"},[e("div",{staticClass:"container px-md-0 px-2"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 px-0"},[e("router-link",{staticClass:"btn btn-outline-info btn-sm btn-block my-md-2 my-1",attrs:{type:"button",to:"/shopsitem/"+a.id}},[e("i",{staticClass:"fas fa-tag mr-2"}),t._v(" 查看更多 ")])],1),e("div",{staticClass:"col-lg-12 px-0"},[e("button",{staticClass:"btn btn-outline-primary btn-sm btn-block my-md-1 my-0",attrs:{type:"button"},on:{click:function(e){return t.addtoCart(a.id)}}},[t.status.loadingItem===a.id?e("i",{staticClass:"fas fa-spinner fa-spin"}):e("i",{staticClass:"fas fa-shopping-cart mr-2"}),t._v(" 加到購物車 ")])])])])])],1)])])})),0),e("Pagination",{attrs:{pages:t.paginations},on:{changeCurrentPage:t.getProducts}})],1)]),e("div",{staticClass:"col-lg-3 col-md-12 order-1 mb-5 mb-md-0"},[e("div",{staticClass:"border p-4 rounded mb-4"},[e("div",{staticClass:"d-none d-lg-block d-xl-block"},[e("h3",{staticClass:"mb-3 h5 text-uppercase text-black d-block font-weight-bold"},[t._v("分類")]),e("ul",{staticClass:"list-unstyled mb-4"},[e("li",{staticClass:"mb-1"},[e("a",{staticClass:"d-flex font-weight-normal",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.setFilter("all")}}},[e("span",[t._v("顯示全部商品")])])])]),e("ul",{staticClass:"list-unstyled mb-4"},t._l(t.allCategory,(function(a,i){return e("li",{key:i,staticClass:"mb-1"},[e("a",{staticClass:"d-flex font-weight-normal",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.setFilter(a.title)}}},[e("span",[t._v(t._s(a.title))]),t._v(" "),e("span",{staticClass:"text-black ml-auto"},[t._v("（"+t._s(a.count)+"）")])])])})),0)]),e("button",{staticClass:"btn btn-primary btn-block my-3 btn-lg d-lg-none d-xl-none",attrs:{type:"button","data-toggle":"collapse","data-target":"#category2collapse","aria-expanded":"false","aria-controls":"category2collapse"}},[t._v(" 分類 ")]),e("div",{staticClass:"collapse",attrs:{id:"category2collapse"}},[e("div",{staticClass:"card card-body border-0"},[e("ul",{staticClass:"list-unstyled mb-4"},[e("li",{staticClass:"mb-1"},[e("a",{staticClass:"d-flex font-weight-normal",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.setFilter("all")}}},[e("span",[t._v("顯示全部商品")])])])]),e("ul",{staticClass:"list-unstyled mb-4"},t._l(t.allCategory,(function(a,i){return e("li",{key:i,staticClass:"mb-1"},[e("a",{staticClass:"d-flex font-weight-normal",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.setFilter(a.title)}}},[e("span",[t._v(t._s(a.title))]),t._v(" "),e("span",{staticClass:"text-black ml-auto"},[t._v("（"+t._s(a.count)+"）")])])])})),0)])])])])])])]):e("div",{staticClass:"site-section"},[t._m(0)])],1)},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12 text-center"},[e("div",{staticClass:"h2"},[t._v("Oops!")]),e("i",{staticClass:"far fa-grin-beam-sweat fa-10x my-2"}),e("div",{staticClass:"h3"},[t._v("敬請期待我們的商品!")])])])])}],r=(e("99af"),e("4de4"),e("4160"),e("c975"),e("13d5"),e("45fc"),e("a434"),e("159b"),e("a96d")),n={components:{Pagination:r["a"]},data:function(){return{products:[],allProducts:[],allCategory:[],FilterPorducts:[],paginations:{},liked:JSON.parse(localStorage.getItem("Like Item List"))||[],isLoading:!1,status:{loadingItem:""},filterValue:""}},methods:{getProducts:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("gwul3vu02","/products?page=").concat(t),e=this;e.isLoading=!0,e.$http.get(a).then((function(t){e.isLoading=!1,e.products=t.data.products.reverse().filter((function(t,a,e){return 1===t.is_enabled})),e.paginations=t.data.pagination}))},getAllProducts:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("gwul3vu02","/products/all"),a=this;a.$http.get(t).then((function(t){a.isLoading=!1,a.Allproducts=t.data.products.filter((function(t,a,e){return 1===t.is_enabled})),a.Allproducts.reduce((function(t,e){return e.category in t?(t[e.category]++,a.allCategory.forEach((function(t,a,i){t.title===e.category&&t.count++}))):(t[e.category]=1,a.allCategory.push({title:e.category,count:1})),a.setFilter(a.$route.params.categoryName),t}),{})}))},addtoCart:function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,e="".concat("https://vue-course-api.hexschool.io","/api/").concat("gwul3vu02","/cart"),i=this,s={product_id:t,qty:a};i.status.loadingItem=t,i.$http.post(e,{data:s}).then((function(t){i.status.loadingItem="",i.$bus.$emit("message:push",t.data.message,"success"),i.$bus.$emit("cart-item","修改購物車icon")}))},setFilter:function(t){var a=this,e=a.allCategory.some((function(a,e,i){return a.title===t}));void 0!==t&&""!==t||(t="all"),"all"===t?(a.filterValue="全部商品",a.FilterPorducts=[]):e?(a.filterValue="商品分類："+t,a.FilterPorducts=a.Allproducts.filter((function(a,e,i){return a.category===t}))):(a.filterValue="全部商品",a.FilterPorducts=[])},setOrder:function(t){var a=this;1===t?a.FilterPorducts=a.FilterPorducts.sort((function(t,a){return t.price-a.price})):2===t&&(a.FilterPorducts=a.FilterPorducts.sort((function(t,a){return a.price-t.price})))},EditLikeList:function(t){var a=this,e=a.liked.indexOf(t.id);-1===e?(a.liked.push(t.id),a.$bus.$emit("message:push",t.title+"，「加入」願望清單","success")):(a.liked.splice(e,1),a.$bus.$emit("message:push",t.title+"，「移出」願望清單","warning")),localStorage.setItem("Like Item List",JSON.stringify(a.liked))}},created:function(){this.getProducts(),this.getAllProducts()}},o=n,c=(e("949f"),e("2877")),l=Object(c["a"])(o,i,s,!1,null,null,null);a["default"]=l.exports},8418:function(t,a,e){"use strict";var i=e("c04e"),s=e("9bf2"),r=e("5c6c");t.exports=function(t,a,e){var n=i(a);n in t?s.f(t,n,r(0,e)):t[n]=e}},"949f":function(t,a,e){"use strict";var i=e("fd20"),s=e.n(i);s.a},"99af":function(t,a,e){"use strict";var i=e("23e7"),s=e("d039"),r=e("e8b5"),n=e("861d"),o=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),f=e("b622"),g=e("2d00"),p=f("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",h=g>=51||!s((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),b=u("concat"),C=function(t){if(!n(t))return!1;var a=t[p];return void 0!==a?!!a:r(t)},y=!h||!b;i({target:"Array",proto:!0,forced:y},{concat:function(t){var a,e,i,s,r,n=o(this),u=d(n,0),f=0;for(a=-1,i=arguments.length;a<i;a++)if(r=-1===a?n:arguments[a],C(r)){if(s=c(r.length),f+s>m)throw TypeError(v);for(e=0;e<s;e++,f++)e in r&&l(u,f,r[e])}else{if(f>=m)throw TypeError(v);l(u,f++,r)}return u.length=f,u}})},a434:function(t,a,e){"use strict";var i=e("23e7"),s=e("23cb"),r=e("a691"),n=e("50c4"),o=e("7b0b"),c=e("65f0"),l=e("8418"),d=e("1dde"),u=e("ae40"),f=d("splice"),g=u("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,m=Math.min,v=9007199254740991,h="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!f||!g},{splice:function(t,a){var e,i,d,u,f,g,b=o(this),C=n(b.length),y=s(t,C),k=arguments.length;if(0===k?e=i=0:1===k?(e=0,i=C-y):(e=k-2,i=m(p(r(a),0),C-y)),C+e-i>v)throw TypeError(h);for(d=c(b,i),u=0;u<i;u++)f=y+u,f in b&&l(d,u,b[f]);if(d.length=i,e<i){for(u=y;u<C-i;u++)f=u+i,g=u+e,f in b?b[g]=b[f]:delete b[g];for(u=C;u>C-i+e;u--)delete b[u-1]}else if(e>i)for(u=C-i;u>y;u--)f=u+i-1,g=u+e-1,f in b?b[g]=b[f]:delete b[g];for(u=0;u<e;u++)b[u+y]=arguments[u+2];return b.length=C-i+e,d}})},a96d:function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"row my-3"},[e("div",{staticClass:"col-md-12 text-center"},[e("div",{staticClass:"site-block-27",attrs:{"aria-label":"Page navigation"}},[e("ul",{staticClass:"pagination font-weight-bold justify-content-center"},[e("li",{staticClass:"page-item mr-2",class:{disabled:!t.pages.has_pre}},[e("a",{staticClass:"page-link",on:{click:function(a){return a.preventDefault(),t.changePagination(t.pages.current_page-1)}}},[t._v("<")])]),t._l(t.pages.total_pages,(function(a){return e("li",{key:a,staticClass:"page-item",class:{active:t.pages.current_page===a},on:{click:function(e){return e.preventDefault(),t.changePagination(a)}}},[e("a",{staticClass:"page-link"},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item ml-2",class:{disabled:!t.pages.has_next}},[e("a",{staticClass:"page-link",on:{click:function(a){return a.preventDefault(),t.changePagination(t.pages.current_page+1)}}},[t._v(">")])])],2)])])])])},s=[],r={name:"pages",props:{pages:{type:Object}},methods:{changePagination:function(t){this.$emit("changeCurrentPage",t),window.scrollTo(0,0)}}},n=r,o=(e("b01d"),e("2877")),c=Object(o["a"])(n,i,s,!1,null,"21284d31",null);a["a"]=c.exports},ab94:function(t,a,e){},b01d:function(t,a,e){"use strict";var i=e("ab94"),s=e.n(i);s.a},d58f:function(t,a,e){var i=e("1c0b"),s=e("7b0b"),r=e("44ad"),n=e("50c4"),o=function(t){return function(a,e,o,c){i(e);var l=s(a),d=r(l),u=n(l.length),f=t?u-1:0,g=t?-1:1;if(o<2)while(1){if(f in d){c=d[f],f+=g;break}if(f+=g,t?f<0:u<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:u>f;f+=g)f in d&&(c=e(c,d[f],f,l));return c}};t.exports={left:o(!1),right:o(!0)}},fd20:function(t,a,e){},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-1bbad61a.fce0a3df.js.map