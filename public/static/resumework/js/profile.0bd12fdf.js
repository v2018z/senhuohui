(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),i=Math.floor,c=r("".charAt),o=r("".replace),s=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,f,p){var v=n+e.length,d=r.length,h=l;return void 0!==f&&(f=a(f),h=u),o(p,h,(function(a,o){var u;switch(c(o,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,v);case"<":u=f[s(o,1,-1)];break;default:var l=+o;if(0===l)return a;if(l>d){var p=i(l/10);return 0===p?a:p<=d?void 0===r[p-1]?c(o,1):r[p-1]+c(o,1):a}u=r[l-1]}return void 0===u?"":u}))}},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),i=n("825a"),c=n("1626"),o=n("c6b6"),s=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=a(n,e,t);return null!==r&&i(r),r}if("RegExp"===o(e))return a(s,e,t);throw u("RegExp#exec called on incompatible receiver")}},4073:function(e,t,n){"use strict";n("971f")},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),i=n("e330"),c=n("d784"),o=n("d039"),s=n("825a"),u=n("1626"),l=n("5926"),f=n("50c4"),p=n("577e"),v=n("1d80"),d=n("8aa5"),h=n("dc4a"),m=n("0cb2"),b=n("14c3"),g=n("b622"),x=g("replace"),y=Math.max,$=Math.min,w=i([].concat),k=i([].push),C=i("".indexOf),O=i("".slice),S=function(e){return void 0===e?e:String(e)},j=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[x]&&""===/./[x]("a","$0")}(),q=!o((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));c("replace",(function(e,t,n){var i=E?"$":"$0";return[function(e,n){var r=v(this),i=void 0==e?void 0:h(e,x);return i?a(i,e,r,n):a(t,p(r),e,n)},function(e,a){var c=s(this),o=p(e);if("string"==typeof a&&-1===C(a,i)&&-1===C(a,"$<")){var v=n(t,c,o,a);if(v.done)return v.value}var h=u(a);h||(a=p(a));var g=c.global;if(g){var x=c.unicode;c.lastIndex=0}var j=[];while(1){var E=b(c,o);if(null===E)break;if(k(j,E),!g)break;var q=p(E[0]);""===q&&(c.lastIndex=d(o,f(c.lastIndex),x))}for(var F="",R=0,_=0;_<j.length;_++){E=j[_];for(var I=p(E[0]),M=y($(l(E.index),o.length),0),A=[],J=1;J<E.length;J++)k(A,S(E[J]));var P=E.groups;if(h){var T=w([I],A,M,o);void 0!==P&&k(T,P);var H=p(r(a,void 0,T))}else H=m(I,o,M,A,P,a);M>=R&&(F+=O(o,R,M)+H,R=M+I.length)}return F+O(o,R)}]}),!q||!j||E)},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"8def":function(e,t,n){"use strict";n("aecf")},"971f":function(e,t,n){},aecf:function(e,t,n){},b0c0:function(e,t,n){var r=n("83ab"),a=n("5e77").EXISTS,i=n("e330"),c=n("9bf2").f,o=Function.prototype,s=i(o.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,l=i(u.exec),f="name";r&&!a&&c(o,f,{configurable:!0,get:function(){try{return l(u,s(this))[1]}catch(e){return""}}})},c66d:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"bg"},[r("div",{staticClass:"wrap"},[e._m(0),r("div",{staticClass:"form-wrap"},[r("van-form",{attrs:{"show-error-message":!1,"validate-first":!0},on:{submit:e.onSubmit,failed:e.onFormFailed}},[r("div",{staticClass:"form-field-wrap"},[r("van-field",{attrs:{name:"phone",placeholder:"您的姓名",rules:[{required:!0,message:"请填写您的姓名"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),r("van-field",{attrs:{disabled:!0,name:"captcha",placeholder:"您的电话",rules:[{required:!0,message:"请填写您的电话"},{validator:e.validatorPhone,message:"请输入正确的电话号码"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),r("van-field",{attrs:{name:"captcha",placeholder:"公司名称",rules:[{required:!0,message:"请填写您的公司名称"}]},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}})],1),r("div",{staticClass:"submit-wrap"},[r("submit",{staticClass:"submit-button",attrs:{submit:"",round:"",block:"",type:"info","native-type":"submit",text:"点击抽奖"}})],1)])],1),r("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:"logo"}})])])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"bg-title-wrap"},[r("img",{staticClass:"page-title",attrs:{src:n("0fba"),alt:"2021年圣诞节线上抽奖会"}})])}],i=n("1da1"),c=n("d4ec"),o=n("bee2"),s=n("262e"),u=n("2caf"),l=(n("96cf"),n("b0c0"),n("ac1f"),n("00b4"),n("5319"),n("9ab4")),f=n("60a3"),p=n("1995"),v=function(e){Object(s["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.phone="",e.name="",e.company="",e.submiting=!1,e}return Object(o["a"])(n,[{key:"validatorPhone",value:function(e){return console.log(234234),/^(?:(?:\+|00)86)?1\d{10}$/.test(e)}},{key:"validatorCaptcha",value:function(e){return/^\d{1,}$/.test(e)}},{key:"onSubmit",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.submiting=!0,e.next=4,this.$xhr.api.post("/users",{params:{phone:this.phone,name:this.name,company:this.company}});case 4:this.submiting=!1,this.$router.replace({name:"result",query:{phone:this.phone}}),e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),this.submiting=!1,this.$toast(e.t0&&e.t0.message||"网络不给力");case 12:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"onFormFailed",value:function(e){var t=e.errors,n=t[0];this.$toast(n.message)}},{key:"mounted",value:function(){this.$route.query.phone?this.phone="".concat(this.$route.query.phone):this.$router.replace({name:"login"})}}]),n}(f["c"]);v=Object(l["a"])([Object(f["a"])({name:"Home",components:{Submit:p["a"]}})],v);var d=v,h=d,m=(n("4073"),n("8def"),n("2877")),b=Object(m["a"])(h,r,a,!1,null,"28e85863",null);t["default"]=b.exports},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),i=n("9263"),c=n("d039"),o=n("b622"),s=n("9112"),u=o("species"),l=RegExp.prototype;e.exports=function(e,t,n,f){var p=o(e),v=!c((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),d=v&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!v||!d||n){var h=r(/./[p]),m=t(p,""[e],(function(e,t,n,a,c){var o=r(e),s=t.exec;return s===i||s===l.exec?v&&!c?{done:!0,value:h(t,n,a)}:{done:!0,value:o(n,t,a)}:{done:!1}}));a(String.prototype,e,m[0]),a(l,p,m[1])}f&&s(l[p],"sham",!0)}}}]);
//# sourceMappingURL=profile.0bd12fdf.js.map