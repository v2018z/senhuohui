(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile"],{"0fba":function(t,e,r){t.exports=r.p+"img/page-title.c60d0b50.png"},"14c3":function(t,e,r){var n=r("c6b6"),a=r("9263");t.exports=function(t,e){var r=t.exec;if("function"===typeof r){var o=r.call(t,e);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},1995:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("van-button",{staticClass:"button"},[t._v(t._s(t.text))])},a=[],o=r("d4ec"),i=r("262e"),c=r("2caf"),u=r("9ab4"),s=r("60a3"),l=function(t){Object(i["a"])(r,t);var e=Object(c["a"])(r);function r(){return Object(o["a"])(this,r),e.apply(this,arguments)}return r}(s["c"]);Object(u["a"])([Object(s["b"])({type:String,default:""})],l.prototype,"text",void 0),l=Object(u["a"])([s["a"]],l);var f=l,h=f,p=(r("30d6"),r("2877")),v=Object(p["a"])(h,n,a,!1,null,"b1e1b456",null);e["a"]=v.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("d3b7");function n(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var i=t.apply(e,r);function c(t){n(i,a,o,c,u,"next",t)}function u(t){n(i,a,o,c,u,"throw",t)}c(void 0)}))}}},"30d6":function(t,e,r){"use strict";r("a221")},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),i=r("50c4"),c=r("a691"),u=r("1d80"),s=r("8aa5"),l=r("14c3"),f=Math.max,h=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,d=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var y=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,b=y?"$":"$0";return[function(r,n){var a=u(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!y&&m||"string"===typeof n&&-1===n.indexOf(b)){var o=r(e,t,this,n);if(o.done)return o.value}var u=a(t),p=String(this),v="function"===typeof n;v||(n=String(n));var d=u.global;if(d){var w=u.unicode;u.lastIndex=0}var E=[];while(1){var _=l(u,p);if(null===_)break;if(E.push(_),!d)break;var O=String(_[0]);""===O&&(u.lastIndex=s(p,i(u.lastIndex),w))}for(var L="",S=0,j=0;j<E.length;j++){_=E[j];for(var R=String(_[0]),$=f(h(c(_.index),p.length),0),k=[],P=1;P<_.length;P++)k.push(g(_[P]));var I=_.groups;if(v){var C=[R].concat(k,$,p);void 0!==I&&C.push(I);var T=String(n.apply(void 0,C))}else T=x(R,p,$,k,I,n);$>=S&&(L+=p.slice(S,$)+T,S=$+R.length)}return L+p.slice(S)}];function x(t,r,n,a,i,c){var u=n+t.length,s=a.length,l=d;return void 0!==i&&(i=o(i),l=v),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(u);case"<":c=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>s){var f=p(l/10);return 0===f?e:f<=s?void 0===a[f-1]?o.charAt(1):a[f-1]+o.charAt(1):e}c=a[l-1]}return void 0===c?"":c}))}}))},6174:function(t,e,r){"use strict";r("b767")},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8def":function(t,e,r){"use strict";r("aecf")},9263:function(t,e,r){"use strict";var n=r("ad6d"),a=r("9f7f"),o=RegExp.prototype.exec,i=String.prototype.replace,c=o,u=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),s=a.UNSUPPORTED_Y||a.BROKEN_CARET,l=void 0!==/()??/.exec("")[1],f=u||l||s;f&&(c=function(t){var e,r,a,c,f=this,h=s&&f.sticky,p=n.call(f),v=f.source,d=0,g=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(f.lastIndex),f.lastIndex>0&&(!f.multiline||f.multiline&&"\n"!==t[f.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,d++),r=new RegExp("^(?:"+v+")",p)),l&&(r=new RegExp("^"+v+"$(?!\\s)",p)),u&&(e=f.lastIndex),a=o.call(h?r:f,g),h?a?(a.input=a.input.slice(d),a[0]=a[0].slice(d),a.index=f.lastIndex,f.lastIndex+=a[0].length):f.lastIndex=0:u&&a&&(f.lastIndex=f.global?a.index+a[0].length:e),l&&a&&a.length>1&&i.call(a[0],r,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a}),t.exports=c},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(I){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof g?e:g,o=Object.create(a.prototype),i=new $(n||[]);return o._invoke=L(t,r,i),o}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(I){return{type:"throw",arg:I}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function g(){}function y(){}function m(){}var b={};b[o]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(k([])));w&&w!==r&&n.call(w,o)&&(b=w);var E=m.prototype=g.prototype=Object.create(b);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(a,o,i,c){var u=l(t[a],t,o);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var a;function o(t,n){function o(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(o,o):o()}this._invoke=o}function L(t,e,r){var n=f;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw o;return P()}r.method=a,r.arg=o;while(1){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,d;var o=a.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function $(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function r(){while(++a<t.length)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=E.constructor=m,m.constructor=y,y.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},_(O.prototype),O.prototype[i]=function(){return this},t.AsyncIterator=O,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new O(s(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(E),u(E,c,"Generator"),E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,$.prototype={constructor:$,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(R),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return c.type="throw",c.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;R(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},"9f7f":function(t,e,r){"use strict";var n=r("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a221:function(t,e,r){},ac1f:function(t,e,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},aecf:function(t,e,r){},b0c0:function(t,e,r){var n=r("83ab"),a=r("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,u="name";n&&!(u in o)&&a(o,u,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b767:function(t,e,r){},c66d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"contianer"},[n("div",{staticClass:"bg"},[n("div",{staticClass:"decorate-top"}),n("div",{staticClass:"decorate-bottom"}),n("div",{staticClass:"wrap"},[t._m(0),n("div",{staticClass:"form-wrap"},[n("van-form",{attrs:{"show-error-message":!1,"validate-first":!0},on:{submit:t.onSubmit,failed:t.onFormFailed}},[n("van-field",{attrs:{name:"phone",placeholder:"您的姓名",rules:[{required:!0,message:"请填写您的姓名"}]},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("van-field",{attrs:{disabled:!0,name:"captcha",placeholder:"您的电话",rules:[{required:!0,message:"请填写您的电话"},{validator:t.validatorPhone,message:"请输入正确的电话号码"}]},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),n("van-field",{attrs:{name:"captcha",placeholder:"公司名称",rules:[{required:!0,message:"请填写您的公司名称"}]},model:{value:t.company,callback:function(e){t.company=e},expression:"company"}}),n("div",{staticClass:"submit-wrap"},[n("submit",{attrs:{submit:"",round:"",block:"",type:"info","native-type":"submit",text:"点击抽奖"}})],1)],1)],1),n("img",{staticClass:"logo",attrs:{src:r("cf05"),alt:"logo"}})])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-title-wrap"},[n("img",{staticClass:"page-title",attrs:{src:r("0fba"),alt:"2020年圣诞节线上抽奖会"}})])}],o=(r("b0c0"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),i=r("d4ec"),c=r("bee2"),u=r("262e"),s=r("2caf"),l=r("9ab4"),f=r("60a3"),h=r("1995"),p=function(t){Object(u["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.phone="",t.name="",t.company="",t.submiting=!1,t}return Object(c["a"])(r,[{key:"validatorPhone",value:function(t){return console.log(234234),/^(?:(?:\+|00)86)?1\d{10}$/.test(t)}},{key:"validatorCaptcha",value:function(t){return/^\d{1,}$/.test(t)}},{key:"onSubmit",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,this.submiting=!0,t.next=4,this.$xhr.api.post("/users",{params:{phone:this.phone,name:this.name,company:this.company}});case 4:this.submiting=!1,this.$router.replace({name:"result",query:{phone:this.phone}}),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](0),this.submiting=!1,this.$toast(t.t0&&t.t0.message||"网络不给力");case 12:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"onFormFailed",value:function(t){var e=t.errors,r=e[0];this.$toast(r.message)}},{key:"mounted",value:function(){this.$route.query.phone?this.phone="".concat(this.$route.query.phone):(alert(234234),this.$router.replace({name:"login"}))}}]),r}(f["c"]);p=Object(l["a"])([Object(f["a"])({name:"Home",components:{Submit:h["a"]}})],p);var v=p,d=v,g=(r("6174"),r("8def"),r("2877")),y=Object(g["a"])(d,n,a,!1,null,"5fb97fea",null);e["default"]=y.exports},cf05:function(t,e,r){t.exports=r.p+"img/logo.eaf2cd4f.png"},d784:function(t,e,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),o=r("b622"),i=r("9263"),c=r("9112"),u=o("species"),s=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),l=function(){return"$0"==="a".replace(/./,"$0")}(),f=o("replace"),h=function(){return!!/./[f]&&""===/./[f]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));t.exports=function(t,e,r,f){var v=o(t),d=!a((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),g=d&&!a((function(){var e=!1,r=/a/;return"split"===t&&(r={},r.constructor={},r.constructor[u]=function(){return r},r.flags="",r[v]=/./[v]),r.exec=function(){return e=!0,null},r[v](""),!e}));if(!d||!g||"replace"===t&&(!s||!l||h)||"split"===t&&!p){var y=/./[v],m=r(v,""[t],(function(t,e,r,n,a){return e.exec===i?d&&!a?{done:!0,value:y.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:l,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=m[0],x=m[1];n(String.prototype,t,b),n(RegExp.prototype,v,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}f&&c(RegExp.prototype[v],"sham",!0)}}}]);
//# sourceMappingURL=profile.4854e93f.js.map