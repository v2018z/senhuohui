(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["login"],{"19c5":function(t,e,a){},"2ccf":function(t,e,a){},"3a0b":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return r}));a("e9c4");var s="SENHUOHUI2022_1_1",n=function(){var t=window.localStorage.getItem(s);try{return t&&JSON.parse(t)||{}}catch(e){return null}},r=function(t){window.localStorage.setItem(s,JSON.stringify({phone:t}))}},"7a73":function(t,e,a){"use strict";a("2ccf")},"818f":function(t,e,a){t.exports=a.p+"img/notice.c66996d9.png"},"97b0":function(t,e,a){"use strict";a("19c5")},a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contianer"},[a("div",{staticClass:"bg"},[a("div",{staticClass:"decorate-top"}),a("div",{staticClass:"wrap"},[t._m(0),a("div",{staticClass:"form-wrap"},[a("van-form",{attrs:{"show-error-message":!1,"validate-first":!0},on:{submit:t.onSubmit,failed:t.onFormFailed}},[a("div",{staticClass:"form-field-wrap"},[a("van-field",{attrs:{name:"phone",placeholder:"请输入手机号",rules:[{required:!0,message:"请填写手机号"},{validator:t.validatorPhone,message:"请输入正确的手机号"}]},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("van-field",{attrs:{name:"captcha",placeholder:"请输入验证码",rules:[{required:!0,message:"请填写验证码"},{validator:t.validatorCaptcha,message:"请输入正确的验证码"}]},model:{value:t.captcha,callback:function(e){t.captcha=e},expression:"captcha"}}),a("div",{staticClass:"captcha-wrap"},[a("van-button",{staticClass:"captcha-button",attrs:{disabled:t.sendCaptchaStatus,"native-type":"button"},on:{click:t.sendCaptcha}},[t.sendCaptchaStatus?t._e():a("span",[t._v("发送验证码")]),t.sendCaptchaStatus?a("span",[t._v(" "+t._s(t.time)+" 秒后重新发送")]):t._e()])],1)],1),a("div",{staticClass:"submit-wrap"},[a("submit",{staticClass:"submit-button",attrs:{submit:"",round:"",block:"",type:"info","native-type":"submit",text:"提交"}})],1)])],1),t._m(1)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-title-wrap"},[s("img",{staticClass:"page-title",attrs:{src:a("0fba"),alt:"2021年圣诞节线上抽奖会"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("img",{staticClass:"notice",attrs:{src:a("818f"),alt:"温馨提示"}}),s("div",{staticClass:"logo-wrap"},[s("img",{staticClass:"logo",attrs:{src:a("cf05"),alt:"logo"}})])])}],r=a("1da1"),i=a("d4ec"),c=a("bee2"),o=a("262e"),u=a("2caf"),p=(a("96cf"),a("ac1f"),a("00b4"),a("9ab4")),h=a("60a3"),l=a("1995"),f=a("3a0b"),d=60,v=function(t){Object(o["a"])(a,t);var e=Object(u["a"])(a);function a(){var t;return Object(i["a"])(this,a),t=e.apply(this,arguments),t.phone="",t.captcha="",t.time=d,t.sendCaptchaStatus=!1,t}return Object(c["a"])(a,[{key:"validatorPhone",value:function(t){return/^(?:(?:\+|00)86)?1\d{10}$/.test(t)}},{key:"validatorCaptcha",value:function(t){return/^\d{1,}$/.test(t)}},{key:"onSubmit",value:function(){console.log("__LYG_JAX",this.phone,this.captcha),this.login()}},{key:"sendCaptcha",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.phone){t.next=3;break}return this.$toast("请填写手机号"),t.abrupt("return");case 3:if(this.validatorPhone(this.phone)){t.next=6;break}return this.$toast("请输入正确的手机号"),t.abrupt("return");case 6:if(t.prev=6,e=this.$route.query.force,e){t.next=20;break}return t.next=11,this.$xhr.api.get("/users/query_swfc_by_phone",{params:{phone:this.phone}});case 11:if(a=t.sent,200!=a.code){t.next=18;break}if(a.data.is_swfc){t.next=16;break}return this.$toast("您还不是森活汇会员"),t.abrupt("return");case 16:t.next=20;break;case 18:return this.$toast(a.message||"网络不给力"),t.abrupt("return");case 20:return t.prev=20,t.next=23,this.$xhr.api.post("/users/sendCaptcha",{params:{phone:this.phone}});case 23:this.sendCaptchaStatus=!0,this.$toast("验证码已发送到您的手机"),s=setInterval((function(){n.time-=1,0==n.time&&(clearInterval(s),n.sendCaptchaStatus=!1,n.time=d)}),1e3),t.next=31;break;case 28:t.prev=28,t.t0=t["catch"](20),this.$toast("验证码发送失败");case 31:t.next=38;break;case 33:t.prev=33,t.t1=t["catch"](6),this.sendCaptchaStatus=!1,console.log("__LYG_JAX",t.t1),this.$toast(t.t1&&t.t1.message);case 38:case"end":return t.stop()}}),t,this,[[6,33],[20,28]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"login",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$xhr.api.post("/users/login",{params:{phone:this.phone,captcha:this.captcha}});case 3:this.doLottery(),t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.$toast(t.t0&&t.t0.message);case 9:case"end":return t.stop()}}),t,this,[[0,6]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"doLottery",value:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$xhr.api.post("/users",{params:{phone:this.phone}});case 3:return Object(f["b"])(this.phone),this.$router.push({name:"home",query:{phone:this.phone}}),t.abrupt("return");case 8:t.prev=8,t.t0=t["catch"](0),this.$toast(t.t0&&t.t0.message);case 11:case"end":return t.stop()}}),t,this,[[0,8]])})));function e(){return t.apply(this,arguments)}return e}()},{key:"onFormFailed",value:function(t){var e=t.errors,a=e[0];this.$toast(a.message)}}]),a}(h["c"]);v=Object(p["a"])([Object(h["a"])({name:"Home",components:{Submit:l["a"]}})],v);var m=v,b=m,g=(a("7a73"),a("97b0"),a("2877")),w=Object(g["a"])(b,s,n,!1,null,"558c307b",null);e["default"]=w.exports}}]);
//# sourceMappingURL=login.1eaf8cb7.js.map