(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home","success"],{"045c":function(t,e,r){t.exports=r.p+"img/prize-1.a3e77bd0.png"},"07f8":function(t,e,r){t.exports=r.p+"img/prize-9.ae161546.png"},"0cb2":function(t,e,r){var a=r("e330"),n=r("7b0b"),i=Math.floor,c=a("".charAt),s=a("".replace),u=a("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,p=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,a,d,l){var f=r+t.length,v=a.length,h=p;return void 0!==d&&(d=n(d),h=o),s(l,h,(function(n,s){var o;switch(c(s,0)){case"$":return"$";case"&":return t;case"`":return u(e,0,r);case"'":return u(e,f);case"<":o=d[u(s,1,-1)];break;default:var p=+s;if(0===p)return n;if(p>v){var l=i(p/10);return 0===l?n:l<=v?void 0===a[l-1]?c(s,1):a[l-1]+c(s,1):n}o=a[p-1]}return void 0===o?"":o}))}},"14c3":function(t,e,r){var a=r("da84"),n=r("c65b"),i=r("825a"),c=r("1626"),s=r("c6b6"),u=r("9263"),o=a.TypeError;t.exports=function(t,e){var r=t.exec;if(c(r)){var a=n(r,t,e);return null!==a&&i(a),a}if("RegExp"===s(t))return n(u,t,e);throw o("RegExp#exec called on incompatible receiver")}},"2c4e":function(t,e,r){"use strict";r("e7d6")},"31f0":function(t,e,r){"use strict";var a={prize1:r("045c"),prize2:r("53e2"),prize3:r("7e75"),prize4:r("c96b"),prize5:r("d4bc"),prize6:r("76f1"),prize7:r("4d10"),prize8:r("cbe2"),prize9:r("07f8")},n={prize1:"星巴克星礼卡",prize2:"杜邦纸包",prize3:"相机包",prize4:"蕉下冰袖",prize5:"5元红包",prize6:"6元红包",prize7:"7元红包",prize8:"8元红包",prize9:"9元红包"};e["a"]={getPrizeImage:function(t){return a["prize".concat(t)]},getPrizeName:function(t){return n["prize".concat(t)]}}},"330f":function(t,e,r){},3608:function(t,e,r){"use strict";r("718e")},"3a0b":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return i}));r("e9c4");var a="SENHUOHUI_2023_2",n=function(){var t=window.localStorage.getItem(a);try{return t&&JSON.parse(t)||{}}catch(e){return null}},i=function(t){window.localStorage.setItem(a,JSON.stringify({phone:t}))}},"498a":function(t,e,r){"use strict";var a=r("23e7"),n=r("58a8").trim,i=r("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},"4d10":function(t,e,r){t.exports=r.p+"img/prize-7.3d5b1fad.png"},5319:function(t,e,r){"use strict";var a=r("2ba4"),n=r("c65b"),i=r("e330"),c=r("d784"),s=r("d039"),u=r("825a"),o=r("1626"),p=r("5926"),d=r("50c4"),l=r("577e"),f=r("1d80"),v=r("8aa5"),h=r("dc4a"),m=r("0cb2"),b=r("14c3"),g=r("b622"),x=g("replace"),$=Math.max,w=Math.min,z=i([].concat),k=i([].push),y=i("".indexOf),O=i("".slice),C=function(t){return void 0===t?t:String(t)},j=function(){return"$0"==="a".replace(/./,"$0")}(),_=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),S=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}));c("replace",(function(t,e,r){var i=_?"$":"$0";return[function(t,r){var a=f(this),i=void 0==t?void 0:h(t,x);return i?n(i,t,a,r):n(e,l(a),t,r)},function(t,n){var c=u(this),s=l(t);if("string"==typeof n&&-1===y(n,i)&&-1===y(n,"$<")){var f=r(e,c,s,n);if(f.done)return f.value}var h=o(n);h||(n=l(n));var g=c.global;if(g){var x=c.unicode;c.lastIndex=0}var j=[];while(1){var _=b(c,s);if(null===_)break;if(k(j,_),!g)break;var S=l(_[0]);""===S&&(c.lastIndex=v(s,d(c.lastIndex),x))}for(var I="",E=0,P=0;P<j.length;P++){_=j[P];for(var R=l(_[0]),N=$(w(p(_.index),s.length),0),J=[],H=1;H<_.length;H++)k(J,C(_[H]));var M=_.groups;if(h){var W=z([R],J,N,s);void 0!==M&&k(W,M);var A=l(a(n,void 0,W))}else A=m(R,s,N,J,M,n);N>=E&&(I+=O(s,E,N)+A,E=N+R.length)}return I+O(s,E)}]}),!S||!j||_)},"53e2":function(t,e,r){t.exports=r.p+"img/prize-2.90d8fa50.png"},"581c":function(t,e,r){t.exports=r.p+"img/shuoming.e2813d82.png"},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("e330"),n=r("1d80"),i=r("577e"),c=r("5899"),s=a("".replace),u="["+c+"]",o=RegExp("^"+u+u+"*"),p=RegExp(u+u+"*$"),d=function(t){return function(e){var r=i(n(e));return 1&t&&(r=s(r,o,"")),2&t&&(r=s(r,p,"")),r}};t.exports={start:d(1),end:d(2),trim:d(3)}},"718e":function(t,e,r){},"76f1":function(t,e,r){t.exports=r.p+"img/prize-6.65c012dc.png"},"7e75":function(t,e,r){t.exports=r.p+"img/prize-3.205233ac.png"},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},"8c56":function(t,e,r){t.exports=r.p+"img/v-title.b72617a2.png"},bb0d:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("div",{staticClass:"bg"},[r("div",{staticClass:"main"},[r("div",{staticClass:"decorate-top"}),r("div",{staticClass:"decorate-bottom"}),r("div",{staticClass:"wrap"},[r("div",{staticClass:"bg-title-wrap"},[r("div",{staticClass:"tips"},[r("span",[t._v("奖品为 "+t._s(t.data&&t.data.award)+"*1")])])]),r("div",{staticClass:"middle"},[r("div",{staticClass:"circle-wrap"},[r("img",{staticClass:"circle",attrs:{src:t.getPrize(t.data&&t.data.awardId)}})]),r("div",{staticClass:"hxm-container"},[r("div",{staticClass:"hxm-wrap"},[r("van-field",{attrs:{placeholder:"核销码",center:!0},model:{value:t.hxm,callback:function(e){t.hxm=e},expression:"hxm"}})],1),r("div",{staticClass:"submit-wrap"},[r("submit",{staticClass:"submit-button",attrs:{submit:"",round:"",block:"",type:"info",text:"领取"},on:{click:t.receive}})],1)]),r("span",{staticClass:"hxm-tips"},[t._v("由现场服务人员输入")])]),t._m(0)])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"footer"},[a("img",{staticClass:"shuoming",attrs:{src:r("581c")}})])}],i=r("1da1"),c=r("d4ec"),s=r("bee2"),u=r("262e"),o=r("2caf"),p=(r("96cf"),r("ac1f"),r("5319"),r("498a"),r("9ab4")),d=r("60a3"),l=r("1995"),f=r("31f0"),v=function(t){Object(u["a"])(r,t);var e=Object(o["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.hxm="",t.submitting=!1,t}return Object(s["a"])(r,[{key:"created",value:function(){console.log(this.$route.params.data),this.data=this.$route.params.data}},{key:"mounted",value:function(){var t;console.log(this.data),null!==(t=this.data)&&void 0!==t&&t.id||this.$router.replace({name:"home"})}},{key:"award",get:function(){return this.data&&this.data.award}},{key:"phone",get:function(){return this.data&&this.data.phone?this.data.phone.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"):""}},{key:"getPrize",value:function(t){return f["a"].getPrizeImage(t)}},{key:"getPrizeName",value:function(t){return f["a"].getPrizeName(t)}},{key:"onSubmit",value:function(){this.$router.push({name:"lottery"})}},{key:"receive",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,e=this.hxm.trim(),0!=e.length){t.next=5;break}return this.$toast("请输入核销码"),t.abrupt("return");case 5:if(!this.submitting){t.next=7;break}return t.abrupt("return");case 7:return this.submitting=!0,t.next=10,this.$xhr.api.post("/lottery2023/receive",{params:{userId:this.data.id,hxm:e}});case 10:if(r=t.sent,!(r.awardId>0&&1==r.awardStatus)){t.next=14;break}return this.$router.push({name:"receive",params:{data:r}}),t.abrupt("return");case 14:t.next=19;break;case 16:t.prev=16,t.t0=t["catch"](0),this.$toast(t.t0&&t.t0.message||"服务器开小差了！");case 19:return t.prev=19,this.submitting=!1,t.finish(19);case 22:case"end":return t.stop()}}),t,this,[[0,16,19,22]])})));function e(){return t.apply(this,arguments)}return e}()}]),r}(d["c"]);v=Object(p["a"])([Object(d["a"])({name:"Success",components:{Submit:l["a"]}})],v);var h=v,m=h,b=(r("3608"),r("2877")),g=Object(b["a"])(m,a,n,!1,null,"a4d4d27a",null);e["default"]=g.exports},bb51:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[1==t.isWin?r("success",{attrs:{data:t.data}}):t._e(),2==t.isWin?r("failure"):t._e()],1)},n=[],i=r("1da1"),c=r("d4ec"),s=r("bee2"),u=r("262e"),o=r("2caf"),p=(r("96cf"),r("ac1f"),r("5319"),r("9ab4")),d=r("60a3"),l=r("bb0d"),f=r("e3b5"),v=r("3a0b"),h=function(t){Object(u["a"])(r,t);var e=Object(o["a"])(r);function r(){var t;return Object(c["a"])(this,r),t=e.apply(this,arguments),t.data=null,t.isWin=0,t}return Object(s["a"])(r,[{key:"mounted",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=Object(v["a"])(),e&&e.phone){t.next=4;break}return this.$router.replace({name:"second"}),t.abrupt("return",!1);case 4:return t.prev=4,t.next=7,this.$xhr.api.get("/lottery2023/check_activity",{params:{phone:e.phone}});case 7:if(r=t.sent,r.id&&-1!=r.awardStatus){t.next=11;break}return this.$router.replace({name:"second"}),t.abrupt("return");case 11:if(-2!=r.awardId){t.next=14;break}return this.$router.replace({name:"failure",params:{data:r}}),t.abrupt("return");case 14:if(!(r.awardId>0&&1!=r.awardStatus)){t.next=17;break}return this.$router.replace({name:"success",params:{data:r}}),t.abrupt("return");case 17:if(!(r.awardId>0&&1==r.awardStatus)){t.next=20;break}return this.$router.replace({name:"receive",params:{data:r}}),t.abrupt("return");case 20:t.next=26;break;case 22:t.prev=22,t.t0=t["catch"](4),this.$router.replace({name:"second"}),this.$toast(t.t0&&t.t0.msg);case 26:case"end":return t.stop()}}),t,this,[[4,22]])})));function e(){return t.apply(this,arguments)}return e}()}]),r}(d["c"]);h=Object(p["a"])([Object(d["a"])({name:"Home",components:{Success:l["default"],Failure:f["default"]}})],h);var m=h,b=m,g=(r("2c4e"),r("2877")),x=Object(g["a"])(b,a,n,!1,null,"36af97d6",null);e["default"]=x.exports},c8d2:function(t,e,r){var a=r("5e77").PROPER,n=r("d039"),i=r("5899"),c="​᠎";t.exports=function(t){return n((function(){return!!i[t]()||c[t]()!==c||a&&i[t].name!==t}))}},c96b:function(t,e,r){t.exports=r.p+"img/prize-4.33cd60ed.png"},cbe2:function(t,e,r){t.exports=r.p+"img/prize-8.ddc8e2b7.png"},d16d:function(t,e,r){"use strict";r("330f")},d4bc:function(t,e,r){t.exports=r.p+"img/prize-5.075c8ec8.png"},d784:function(t,e,r){"use strict";r("ac1f");var a=r("e330"),n=r("6eeb"),i=r("9263"),c=r("d039"),s=r("b622"),u=r("9112"),o=s("species"),p=RegExp.prototype;t.exports=function(t,e,r,d){var l=s(t),f=!c((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})),v=f&&!c((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[o]=function(){return r},r.flags="",r[l]=/./[l]),r.exec=function(){return e=!0,null},r[l](""),!e}));if(!f||!v||r){var h=a(/./[l]),m=e(l,""[t],(function(t,e,r,n,c){var s=a(t),u=e.exec;return u===i||u===p.exec?f&&!c?{done:!0,value:h(e,r,n)}:{done:!0,value:s(r,e,n)}:{done:!1}}));n(String.prototype,t,m[0]),n(p,l,m[1])}d&&u(p[l],"sham",!0)}},e3b5:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"bg"},[a("div",{staticClass:"main"},[a("div",{staticClass:"decorate-top"}),a("div",{staticClass:"decorate-bottom"}),a("div",{staticClass:"wrap"},[a("div",{staticClass:"bg-title-wrap"},[a("img",{staticClass:"page-title",attrs:{src:r("8c56"),alt:"2021年圣诞节线上抽奖会"}})]),a("div",{staticClass:"middle"},[a("div",{staticClass:"tips"})])])])])])}],i=r("d4ec"),c=r("bee2"),s=r("262e"),u=r("2caf"),o=(r("ac1f"),r("5319"),r("9ab4")),p=r("60a3"),d=r("1995"),l=r("31f0"),f=function(t){Object(s["a"])(r,t);var e=Object(u["a"])(r);function r(){return Object(i["a"])(this,r),e.apply(this,arguments)}return Object(c["a"])(r,[{key:"created",value:function(){console.log(this.$route.params.data),this.data=this.$route.params.data}},{key:"mounted",value:function(){var t;null!==(t=this.data)&&void 0!==t&&t.id||this.$router.replace({name:"home"})}},{key:"award",get:function(){return this.data&&this.data.award}},{key:"phone",get:function(){return this.data&&this.data.phone?this.data.phone.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2"):""}},{key:"getPrize",value:function(t){return l["a"].getPrizeImage(t+1)}},{key:"getPrizeName",value:function(t){return l["a"].getPrizeName(t+1)}},{key:"onSubmit",value:function(){this.$router.push({name:"lottery"})}}]),r}(p["c"]);f=Object(o["a"])([Object(p["a"])({name:"Success",components:{Submit:d["a"]}})],f);var v=f,h=v,m=(r("d16d"),r("2877")),b=Object(m["a"])(h,a,n,!1,null,"d955c780",null);e["default"]=b.exports},e7d6:function(t,e,r){}}]);
//# sourceMappingURL=home.6b0a1099.js.map