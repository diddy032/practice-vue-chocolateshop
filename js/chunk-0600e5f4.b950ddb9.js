(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0600e5f4"],{"27b9":function(t,s,a){"use strict";a.r(s);var c=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(s){t.isLoading=s}}}),a("div",{staticClass:"site-section"},[t.cart.total>0?a("div",{staticClass:"container"},[a("div",{staticClass:"row mb-5 d-none d-lg-block d-xl-block"},[a("form",{staticClass:"col-md-12",attrs:{method:"post"}},[a("div",{staticClass:"site-blocks-table table-responsive"},[a("table",{staticClass:"table table-bordered"},[t._m(0),a("tbody",t._l(t.cart.carts,(function(s,c){return a("tr",{key:c},[a("td",{staticClass:"product-thumbnail"},[a("router-link",{attrs:{to:"/shopsitem/"+s.product_id}},[a("img",{staticClass:"img-fluid",attrs:{src:s.product.imageUrl,alt:"Image"}})])],1),a("td",{staticClass:"product-name"},[a("router-link",{attrs:{to:"/shopsitem/"+s.product_id}},[a("h2",{staticClass:"h5 text-black"},[t._v(t._s(s.product.title))]),s.coupon?a("div",{staticClass:"text-success"},[t._v(" 已套用優惠券 ")]):t._e()])],1),a("td",{staticClass:"h6"},[t._v(t._s(t._f("currency")(s.product.price)))]),a("td",{staticClass:"h6"},[t._v(t._s(s.qty))]),a("td",{staticClass:"h6"},[t._v(" "+t._s(t._f("currency")(s.total))+" "),s.coupon?a("div",{staticClass:"text-success"},[t._v(" 折扣後:"+t._s(t._f("currency")(s.final_total))+" ")]):t._e()]),a("td",[a("a",{staticClass:"btn btn-primary btn-sm",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCartItem(s.id)}}},[t._v("X")])])])})),0)])])])]),a("div",{staticClass:"row mb-5 d-lg-none d-xl-none"},t._l(t.cart.carts,(function(s,c){return a("div",{key:c,staticClass:"col-12 col-md-10 my-2 border-bottom mx-auto"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 pr-0"},[a("router-link",{attrs:{to:"/shopsitem/"+s.product_id}},[a("img",{staticClass:"figure-img img-fluid rounded",attrs:{src:s.product.imageUrl,alt:"Image"}})])],1),a("div",{staticClass:"col-8 text-right d-flex align-items-center justify-content-end"},[a("a",{staticClass:"btn btn-secondary btn-lg",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCartItem(s.id)}}},[t._v("X")])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-7 pr-0"},[a("router-link",{attrs:{to:"/shopsitem/"+s.product_id}},[a("h2",{staticClass:"h6 text-black"},[t._v(" "+t._s(s.product.title)+" ")])])],1),a("div",{staticClass:"col-5 text-right text-dark font-weight-bold h6"},[a("div",[t._v("X"+t._s(s.qty))]),t._v(" NT"+t._s(t._f("currency")(s.total))+" ")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-7"},[s.coupon?a("div",{staticClass:"text-success h6"},[t._v(" 已套用優惠券 ")]):t._e()]),a("div",{staticClass:"col-5 text-right font-weight-bold"},[s.coupon?a("div",{staticClass:"text-danger ml-2 h6"},[t._v(" -"+t._s(t._f("currency")(t.cart.total-t.cart.final_total))+" ")]):t._e()])])])])})),0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"col-md-6 mb-3 mb-md-0"},[a("button",{staticClass:"btn btn-primary btn-sm btn-block",on:{click:t.getCart}},[t._v("更新購物車列表")])]),a("div",{staticClass:"col-md-6"},[a("router-link",{staticClass:"btn btn-outline-primary btn-sm btn-block",attrs:{type:"button",to:"/shop"}},[t._v("繼續購物")])],1)])]),a("div",{staticClass:"row"},[t._m(1),a("div",{staticClass:"col-lg-8 mb-3 mb-md-0"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.coupon_code,expression:"coupon_code"}],staticClass:"form-control py-3",attrs:{type:"text",id:"coupon",placeholder:"輸入優惠券代碼"},domProps:{value:t.coupon_code},on:{input:function(s){s.target.composing||(t.coupon_code=s.target.value)}}})]),a("div",{staticClass:"col-lg-4"},[a("button",{staticClass:"btn btn-primary btn-sm",on:{click:t.addCouponCode}},[t._v("套用優惠碼")])])])]),a("div",{staticClass:"col-lg-6 pl-lg-5"},[a("div",{staticClass:"row justify-content-end"},[a("div",{staticClass:"col-lg-7"},[t._m(2),t.cart.total!==t.cart.final_total?a("div",{staticClass:"row mb-3"},[t._m(3),a("div",{staticClass:"col-6 text-right"},[a("strong",{staticClass:"text-black"},[t._v(t._s(t._f("currency")(t.cart.total)))])])]):t._e(),t.cart.total!==t.cart.final_total?a("div",{staticClass:"row mb-3 text-danger"},[t._m(4),a("div",{staticClass:"col-6 text-right"},[a("strong",{},[t._v("-"+t._s(t._f("currency")(t.cart.total-t.cart.final_total)))])])]):t._e(),a("div",{staticClass:"row mb-5"},[t._m(5),a("div",{staticClass:"col-6 text-right"},[a("strong",{staticClass:"text-black"},[t._v(t._s(t._f("currency")(t.cart.final_total)))])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"container"},[a("div",{staticClass:"col-md-12"},[a("router-link",{staticClass:"btn btn-primary btn-lg py-3 btn-block",attrs:{type:"button",to:"/checkout"}},[t._v("前往結帳")])],1)])])])])])])]):a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("div",{staticClass:"h2"},[t._v("Oops!")]),a("i",{staticClass:"far fa-grin-beam-sweat fa-10x my-2"}),a("div",{staticClass:"h3"},[t._v("你的購物車沒有商品")]),a("router-link",{staticClass:"btn btn-primary my-3",attrs:{type:"button",to:"/shop"}},[t._v("現在就去逛逛!")])],1)])])])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",[a("th",{staticClass:"product-thumbnail"},[t._v("商品圖片")]),a("th",{staticClass:"product-name"},[t._v("產品名稱")]),a("th",{staticClass:"product-price"},[t._v("價格")]),a("th",{staticClass:"product-quantity"},[t._v("數量")]),a("th",{staticClass:"product-total"},[t._v("總金額")]),a("th",{staticClass:"product-remove"},[t._v("刪除")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-lg-12"},[a("label",{staticClass:"text-black h4",attrs:{for:"coupon"}},[t._v("優惠券")]),a("p",[t._v("如果您有優惠券，請在下方輸入優惠券代碼")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 text-right border-bottom mb-5"},[a("h3",{staticClass:"text-black h4 text-uppercase"},[t._v("付款資訊")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-6"},[a("span",{staticClass:"text-black"},[t._v("購買總金額")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-6"},[a("span",{},[t._v("優惠券折抵")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"col-6"},[a("span",{staticClass:"text-black"},[t._v("訂單金額")])])}],e=(a("99af"),{data:function(){return{cart:[],isLoading:!1,coupon_code:""}},methods:{getCart:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("gwul3vu02","/cart"),s=this;s.isLoading=!0,s.$http.get(t).then((function(t){s.isLoading=!1,s.cart=t.data.data,s.$bus.$emit("cart-item","修改購物車icon")}))},removeCartItem:function(t){var s="".concat("https://vue-course-api.hexschool.io","/api/").concat("gwul3vu02","/cart/").concat(t),a=this;a.isLoading=!0,a.$http.delete(s).then((function(t){t.data.success&&(a.$bus.$emit("message:push","該商品"+t.data.message,"success"),a.isLoading=!1,a.getCart())}))},addCouponCode:function(){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("gwul3vu02","/coupon"),s=this,a={code:s.coupon_code};s.$http.post(t,{data:a}).then((function(t){t.data.success?s.$bus.$emit("message:push",t.data.message,"success"):s.$bus.$emit("message:push",t.data.message,"danger"),s.getCart()}))}},created:function(){this.getCart()}}),o=e,r=a("2877"),l=Object(r["a"])(o,c,i,!1,null,null,null);s["default"]=l.exports},8418:function(t,s,a){"use strict";var c=a("c04e"),i=a("9bf2"),e=a("5c6c");t.exports=function(t,s,a){var o=c(s);o in t?i.f(t,o,e(0,a)):t[o]=a}},"99af":function(t,s,a){"use strict";var c=a("23e7"),i=a("d039"),e=a("e8b5"),o=a("861d"),r=a("7b0b"),l=a("50c4"),n=a("8418"),d=a("65f0"),u=a("1dde"),v=a("b622"),p=a("2d00"),_=v("isConcatSpreadable"),m=9007199254740991,C="Maximum allowed index exceeded",b=p>=51||!i((function(){var t=[];return t[_]=!1,t.concat()[0]!==t})),h=u("concat"),f=function(t){if(!o(t))return!1;var s=t[_];return void 0!==s?!!s:e(t)},g=!b||!h;c({target:"Array",proto:!0,forced:g},{concat:function(t){var s,a,c,i,e,o=r(this),u=d(o,0),v=0;for(s=-1,c=arguments.length;s<c;s++)if(e=-1===s?o:arguments[s],f(e)){if(i=l(e.length),v+i>m)throw TypeError(C);for(a=0;a<i;a++,v++)a in e&&n(u,v,e[a])}else{if(v>=m)throw TypeError(C);n(u,v++,e)}return u.length=v,u}})}}]);
//# sourceMappingURL=chunk-0600e5f4.b950ddb9.js.map