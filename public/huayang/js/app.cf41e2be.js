(function(e){function t(t){for(var r,a,c=t[0],i=t[1],u=t[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(t);while(p.length)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({success:"success"}[e]||e)+"."+{success:"5b5b4545"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={success:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({success:"success"}[e]||e)+"."+{success:"313f465d"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){u=p[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],f.parentNode.removeChild(f),n(s)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var p=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"034f":function(e,t,n){"use strict";n("85ec")},1502:function(e,t,n){},1995:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-button",{staticClass:"button",attrs:{loading:e.loading,disabled:e.loading}},[e._v(e._s(e.text))])},a=[],o=n("d4ec"),s=n("262e"),c=n("2caf"),i=n("9ab4"),u=n("60a3"),l=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){return Object(o["a"])(this,n),t.apply(this,arguments)}return n}(u["c"]);Object(i["a"])([Object(u["b"])({type:String,default:""})],l.prototype,"text",void 0),Object(i["a"])([Object(u["b"])({type:Boolean,default:!1})],l.prototype,"loading",void 0),l=Object(i["a"])([u["a"]],l);var p=l,f=p,d=(n("b31c"),n("2877")),h=Object(d["a"])(f,r,a,!1,null,"1eff3785",null);t["a"]=h.exports},"85ec":function(e,t,n){},adcf:function(e,t,n){},b31c:function(e,t,n){"use strict";n("caec")},c9b8:function(e,t,n){"use strict";n("1502")},caec:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("499a"),n("f5df1"),n("772a")),o=n("565f"),s=n("b650"),c=n("44bf"),i=n("d399"),u=(n("c975"),n("d3b7"),n("5530")),l=n("d4ec"),p=n("bee2"),f=n("bc3a"),d=n.n(f),h=n("4328"),m=n.n(h),b=function(){function e(){Object(l["a"])(this,e),this.axiosRef=d.a.create({timeout:1e4,transformRequest:function(e,t){return-1!=t.post["Content-Type"].indexOf("application/x-www-form-urlencoded")?m.a.stringify(e):JSON.stringify(e)}}),this.registerRequestInterceptor(),this.registerResponseInterceptor(),this.api=this.transformRequestMethods(this.apiBaseURL()),this.apiCDN=this.transformRequestMethods(this.apiBaseURL(!0))}return Object(p["a"])(e,[{key:"apiBaseURL",value:function(e){return"http://www.shinejoy.top/"}},{key:"transformRequestMethods",value:function(e){var t=this.axiosRef;return{get:function(n,r){return t.get(n,Object(u["a"])(Object(u["a"])({},r),{},{baseURL:e}))},post:function(n,r){return t.request(Object(u["a"])(Object(u["a"])({baseURL:e,url:n},r),{},{method:"POST"}))},postJSON:function(e,t){var n={post:{"Content-Type":"application/json"}};return this.post(e,Object(u["a"])(Object(u["a"])({},t),{},{headers:n}))}}}},{key:"registerRequestInterceptor",value:function(){this.axiosRef.interceptors.request.use((function(e){var t=e.params,n=e.method,r=void 0===n?"GET":n;return"GET"!=r.toUpperCase()&&(e.data=t,e.params={}),e}),(function(e){console.log(e),Promise.reject(e)}))}},{key:"registerResponseInterceptor",value:function(){this.axiosRef.interceptors.response.use((function(e){var t=e.data,n=t.code,r=t.data;t.message;return 200==n||0==n?r:Promise.reject(t)}),(function(e){var t={msg:"网络不给力",statusCode:-999};return Promise.reject(t)}))}}]),e}(),v=new b,y=v,g={install:function(e){Object.defineProperties(e.prototype,{$xhr:{get:function(){return y}}})}},O=g,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},w=[],x=n("262e"),k=n("2caf"),C=n("9ab4"),_=n("60a3"),R=function(e){Object(x["a"])(n,e);var t=Object(k["a"])(n);function n(){return Object(l["a"])(this,n),t.apply(this,arguments)}return Object(p["a"])(n,[{key:"mounted",value:function(){}}]),n}(_["c"]);R=Object(C["a"])([Object(_["a"])({name:"Home",components:{}})],R);var q=R,S=q,P=(n("034f"),n("2877")),$=Object(P["a"])(S,j,w,!1,null,null,null),E=$.exports,T=n("8c4f"),L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contianer"},[n("div",{staticClass:"bg"},[n("div",{staticClass:"decorate-top"}),n("div",{staticClass:"decorate-bottom"}),n("div",{staticClass:"wrap"},[n("div",{staticClass:"form-wrap"},[n("van-form",{attrs:{"show-error-message":!1,"validate-first":!0},on:{submit:e.onSubmit,failed:e.onFormFailed}},[n("van-field",{attrs:{name:"phone",placeholder:"您的姓名",rules:[{required:!0,message:"请填写您的姓名"}]},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),n("van-field",{attrs:{name:"captcha",placeholder:"您的电话",rules:[{required:!0,message:"请填写您的电话"},{validator:e.validatorPhone,message:"请输入正确的电话号码"}]},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),n("van-field",{attrs:{name:"captcha",placeholder:"公司名称",rules:[{required:!0,message:"请填写您的公司名称"}]},model:{value:e.company,callback:function(t){e.company=t},expression:"company"}}),n("div",{staticClass:"submit-wrap"},[n("submit",{attrs:{submit:"",round:"",block:"",type:"info","native-type":"submit",text:"点击抽奖",loading:e.submiting}})],1)],1)],1)])])])},N=[],A=(n("b0c0"),n("ac1f"),n("5319"),n("96cf"),n("1da1")),B=n("1995"),M=function(e){Object(x["a"])(n,e);var t=Object(k["a"])(n);function n(){var e;return Object(l["a"])(this,n),e=t.apply(this,arguments),e.phone="",e.name="",e.company="",e.submiting=!1,e}return Object(p["a"])(n,[{key:"validatorPhone",value:function(e){return console.log(234234),/^(?:(?:\+|00)86)?1\d{10}$/.test(e)}},{key:"validatorCaptcha",value:function(e){return/^\d{1,}$/.test(e)}},{key:"onSubmit",value:function(){var e=Object(A["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("__LYG_JAX",this.phone,this.name,this.company),this.submiting=!0,e.prev=2,e.next=5,this.$xhr.api.post("/huayang/users",{params:{phone:this.phone,name:this.name,company:this.company,awardType:this.$route.query.type}});case 5:t=e.sent,this.submiting=!1,localStorage.setItem("award",JSON.stringify(t)),this.$router.replace({name:"success",query:{type:this.$route.query.type}}),e.next=18;break;case 11:if(e.prev=11,e.t0=e["catch"](2),this.submiting=!1,-9!=e.t0.code){e.next=17;break}return this.$router.replace({name:"failure",query:{type:this.$route.query.type}}),e.abrupt("return");case 17:this.$toast(e.t0&&e.t0.msg||"网络不给力");case 18:case"end":return e.stop()}}),e,this,[[2,11]])})));function t(){return e.apply(this,arguments)}return t}()},{key:"onFormFailed",value:function(e){var t=e.errors,n=t[0];this.$toast(n.message)}}]),n}(_["c"]);M=Object(C["a"])([Object(_["a"])({name:"Home",components:{Submit:B["a"]}})],M);var U=M,I=U,J=(n("c9b8"),Object(P["a"])(I,L,N,!1,null,"61c59495",null)),F=J.exports;r["a"].use(T["a"]);var D=[{path:"/",name:"home",component:F},{path:"/success",name:"success",component:function(){return n.e("success").then(n.bind(null,"bb0d"))}},{path:"/failure",name:"failure",component:function(){return n.e("success").then(n.bind(null,"e3b5"))}}],G=new T["a"]({mode:"hash",base:"",routes:D}),H=G;n("adcf"),n("56fa"),n("fdc4"),n("0147"),n("e2ab"),n("c2d8");r["a"].config.productionTip=!1,r["a"].use(a["a"]).use(o["a"]).use(s["a"]).use(c["a"]).use(i["a"]),r["a"].use(O),new r["a"]({router:H,render:function(e){return e(E)}}).$mount("#app")}});
//# sourceMappingURL=app.cf41e2be.js.map