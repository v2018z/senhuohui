(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"0cb2":function(t,e,r){var a=r("e330"),n=r("7b0b"),c=Math.floor,i=a("".charAt),s=a("".replace),u=a("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,a,f,v){var p=r+t.length,b=a.length,d=l;return void 0!==f&&(f=n(f),d=o),s(v,d,(function(n,s){var o;switch(i(s,0)){case"$":return"$";case"&":return t;case"`":return u(e,0,r);case"'":return u(e,p);case"<":o=f[u(s,1,-1)];break;default:var l=+s;if(0===l)return n;if(l>b){var v=c(l/10);return 0===v?n:v<=b?void 0===a[v-1]?i(s,1):a[v-1]+i(s,1):n}o=a[l-1]}return void 0===o?"":o}))}},"14c3":function(t,e,r){var a=r("da84"),n=r("c65b"),c=r("825a"),i=r("1626"),s=r("c6b6"),u=r("9263"),o=a.TypeError;t.exports=function(t,e){var r=t.exec;if(i(r)){var a=n(r,t,e);return null!==a&&c(a),a}if("RegExp"===s(t))return n(u,t,e);throw o("RegExp#exec called on incompatible receiver")}},"3a0b":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return c}));r("e9c4");var a="SENHUOHUI2022_1_1",n=function(){var t=window.localStorage.getItem(a);try{return t&&JSON.parse(t)||{}}catch(e){return null}},c=function(t){window.localStorage.setItem(a,JSON.stringify({phone:t}))}},5319:function(t,e,r){"use strict";var a=r("2ba4"),n=r("c65b"),c=r("e330"),i=r("d784"),s=r("d039"),u=r("825a"),o=r("1626"),l=r("5926"),f=r("50c4"),v=r("577e"),p=r("1d80"),b=r("8aa5"),d=r("dc4a"),h=r("0cb2"),g=r("14c3"),m=r("b622"),x=m("replace"),O=Math.max,$=Math.min,_=c([].concat),j=c([].push),w=c("".indexOf),y=c("".slice),C=function(t){return void 0===t?t:String(t)},k=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),E=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));i("replace",(function(t,e,r){var c=S?"$":"$0";return[function(t,r){var a=p(this),c=void 0==t?void 0:d(t,x);return c?n(c,t,a,r):n(e,v(a),t,r)},function(t,n){var i=u(this),s=v(t);if("string"==typeof n&&-1===w(n,c)&&-1===w(n,"$<")){var p=r(e,i,s,n);if(p.done)return p.value}var d=o(n);d||(n=v(n));var m=i.global;if(m){var x=i.unicode;i.lastIndex=0}var k=[];while(1){var S=g(i,s);if(null===S)break;if(j(k,S),!m)break;var E=v(S[0]);""===E&&(i.lastIndex=b(s,f(i.lastIndex),x))}for(var R="",I=0,W=0;W<k.length;W++){S=k[W];for(var J=v(S[0]),U=O($(l(S.index),s.length),0),F=[],q=1;q<S.length;q++)j(F,C(S[q]));var A=S.groups;if(d){var H=_([J],F,U,s);void 0!==A&&j(H,A);var M=v(a(n,void 0,H))}else M=h(J,s,U,F,A,n);U>=I&&(R+=y(s,I,U)+M,I=U+J.length)}return R+y(s,I)}]}),!E||!k||S)},"6b49":function(t,e,r){},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},a3e3:function(t,e,r){"use strict";r("6b49")},bb0d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"contianer"},[r("div",{staticClass:"bg"},[r("div",{staticClass:"decorate-top"}),r("div",{staticClass:"decorate-bottom"}),r("div",{staticClass:"wrap"},[t._m(0),r("div",{staticClass:"middle"},[r("div",{staticClass:"content"},[r("p",[t._v("恭喜您获得")]),r("p",[t._v("奖品 "+t._s(t.data.award))])]),t._m(1)])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-title-wrap"},[a("img",{staticClass:"page-title",attrs:{src:r("0fba"),alt:"2022恒生银行大厦冬季抽奖会"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("img",{staticClass:"notice",attrs:{src:r("efbe"),alt:"温馨提示"}}),a("div",{staticClass:"logo-wrap"},[a("img",{staticClass:"logo",attrs:{src:r("cf05"),alt:"logo"}})])])}],c=r("d4ec"),i=r("262e"),s=r("2caf"),u=r("9ab4"),o=r("60a3"),l=r("1995"),f=function(t){Object(i["a"])(r,t);var e=Object(s["a"])(r);function r(){return Object(c["a"])(this,r),e.apply(this,arguments)}return r}(o["c"]);Object(u["a"])([Object(o["b"])({type:Object,default:function(){return{}}})],f.prototype,"data",void 0),f=Object(u["a"])([Object(o["a"])({name:"Success",components:{Submit:l["a"]}})],f);var v=f,p=v,b=(r("f186"),r("2877")),d=Object(b["a"])(p,a,n,!1,null,"f74d77d2",null);e["default"]=d.exports},bb4d:function(t,e,r){"use strict";r("ce79")},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[1==t.isWin?r("success",{attrs:{data:t.data}}):t._e(),2==t.isWin?r("failure"):t._e()],1)},n=[],c=r("1da1"),i=r("d4ec"),s=r("bee2"),u=r("262e"),o=r("2caf"),l=(r("96cf"),r("ac1f"),r("5319"),r("9ab4")),f=r("60a3"),v=r("bb0d"),p=r("e3b5"),b=r("3a0b"),d=function(t){Object(u["a"])(r,t);var e=Object(o["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.data=null,t.isWin=0,t}return Object(s["a"])(r,[{key:"mounted",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(b["a"])(),e&&e.phone){t.next=4;break}return this.$router.replace({name:"login"}),t.abrupt("return",!1);case 4:return r=e.phone,t.prev=5,t.next=8,this.queryUser(r);case 8:if(t.t0=t.sent,t.t0){t.next=11;break}t.t0={};case 11:if(a=t.t0,a.phone){t.next=16;break}return Object(b["b"])(""),this.$router.replace({name:"login"}),t.abrupt("return");case 16:t.next=22;break;case 18:return t.prev=18,t.t1=t["catch"](5),this.$router.replace({name:"login"}),t.abrupt("return");case 22:return t.prev=22,t.next=25,this.$xhr.api.get("/users/lottery",{params:{phone:r}});case 25:if(n=t.sent,n.switch){t.next=29;break}return this.$router.push({name:"result",query:{phone:r}}),t.abrupt("return");case 29:n.isWin?(this.data=n,this.isWin=1):this.isWin=2,t.next=35;break;case 32:t.prev=32,t.t2=t["catch"](22),this.$toast(t.t2&&t.t2.msg);case 35:case"end":return t.stop()}}),t,this,[[5,18],[22,32]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"queryUser",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.$xhr.api.get("/users/getUser",{params:{phone:e}}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}]),r}(f["c"]);d=Object(l["a"])([Object(f["a"])({name:"Home",components:{Success:v["default"],Failure:p["default"]}})],d);var h=d,g=h,m=(r("bb4d"),r("2877")),x=Object(m["a"])(g,a,n,!1,null,"4b0a784c",null);e["default"]=x.exports},ce79:function(t,e,r){},d784:function(t,e,r){"use strict";r("ac1f");var a=r("e330"),n=r("6eeb"),c=r("9263"),i=r("d039"),s=r("b622"),u=r("9112"),o=s("species"),l=RegExp.prototype;t.exports=function(t,e,r,f){var v=s(t),p=!i((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),b=p&&!i((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return e=!0,null},r[v](""),!e}));if(!p||!b||r){var d=a(/./[v]),h=e(v,""[t],(function(t,e,r,n,i){var s=a(t),u=e.exec;return u===c||u===l.exec?p&&!i?{done:!0,value:d(e,r,n)}:{done:!0,value:s(r,e,n)}:{done:!1}}));n(String.prototype,t,h[0]),n(l,v,h[1])}f&&u(l[v],"sham",!0)}},d899:function(t,e,r){},e3b5:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contianer"},[a("div",{staticClass:"bg"},[a("div",{staticClass:"decorate-top"}),a("div",{staticClass:"decorate-bottom"}),a("div",{staticClass:"wrap"},[a("div",{staticClass:"bg-title-wrap"},[a("img",{staticClass:"page-title",attrs:{src:r("0fba"),alt:"2022恒生银行大厦冬季抽奖会"}})]),a("div",{staticClass:"content"},[a("p",[t._v("很遗憾")]),a("p",[t._v("此次活动您未中奖")]),a("p",[t._v("感谢您的参与！")])]),a("img",{staticClass:"logo",attrs:{src:r("cf05"),alt:"logo"}})])])])}],c=r("d4ec"),i=r("bee2"),s=r("262e"),u=r("2caf"),o=(r("ac1f"),r("00b4"),r("9ab4")),l=r("60a3"),f=r("1995"),v=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.phone="",t.captcha="",t}return Object(i["a"])(r,[{key:"validatorPhone",value:function(t){return console.log(234234),/^(?:(?:\+|00)86)?1\d{10}$/.test(t)}},{key:"validatorCaptcha",value:function(t){return/^\d{1,}$/.test(t)}},{key:"onSubmit",value:function(){console.log("__LYG_JAX",this.phone,this.captcha)}},{key:"onFormFailed",value:function(t){var e=t.errors,r=e[0];this.$toast(r.message)}}]),r}(l["c"]);v=Object(o["a"])([Object(l["a"])({name:"Failure",components:{Submit:f["a"]}})],v);var p=v,b=p,d=(r("a3e3"),r("2877")),h=Object(d["a"])(b,a,n,!1,null,"1115f45e",null);e["default"]=h.exports},efbe:function(t,e,r){t.exports=r.p+"img/notice2.88ec3a85.png"},f186:function(t,e,r){"use strict";r("d899")}}]);
//# sourceMappingURL=home.638c5c2d.js.map