(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-908c5c32"],{"053b":function(t,e,a){var n=a("1e2c"),i=a("d910").f,r=Function.prototype,o=r.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in r)&&i(r,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},1462:function(t,e,a){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return n}))},"2f14":function(t,e,a){"use strict";a.d(e,"a",(function(){return o}));a("b4fb"),a("77ad");var n=a("1462"),i=a("a340"),r=function(){function t(){Object(n["a"])(this,t)}return Object(i["a"])(t,[{key:"queryString",value:function(t){var e="";for(var a in t)"confirmpassword"!==a&&(e+="".concat(a,"=").concat(t[a],"&"));return e.slice(0,-1)}}]),t}(),o=new r},5798:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"information"},[a("div",{staticClass:"head"},[a("van-nav-bar",{attrs:{title:"个人信息",fixed:!0,border:!1},on:{"click-left":t.fhiu,"click-right":t.jumpsafety},scopedSlots:t._u([{key:"left",fn:function(){return[a("van-icon",{attrs:{name:"arrow-left",size:"30",color:"#5e5e5e"}})]},proxy:!0},{key:"right",fn:function(){return[a("div",[t._v("安全中心")])]},proxy:!0}])})],1),a("div",{staticClass:"editor"},[a("div",{staticClass:"headportrait"},[a("van-uploader",{attrs:{"after-read":t.headportrait,accept:t.picturetype,"max-size":1048576,"before-read":t.beforeRead},on:{oversize:t.onOversize}}),a("div",{staticClass:"headportrait-left",style:{backgroundImage:"url("+t.userImg+")"}}),a("div",{staticClass:"text-left"},[t._v("点击修改头像")])],1),a("van-field",{attrs:{label:"昵称",maxlength:"6"},on:{input:t.displaysave},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("van-field",{attrs:{label:"账号",readonly:""},model:{value:t.tel,callback:function(e){t.tel=e},expression:"tel"}}),a("van-field",{attrs:{label:"ID",readonly:""},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),a("van-field",{attrs:{rows:"2",autosize:"",label:"留言",type:"textarea",maxlength:"50",placeholder:"请输入留言","show-word-limit":""},on:{input:t.displaysave},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),t.isbool?a("div",{staticClass:"addtocart",on:{click:t.preservation}},[t._m(0)]):t._e()])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addtocart-center"},[a("div",[t._v("保 存")])])}],r=(a("ecb4"),a("77ad"),a("053b"),a("84ff"),a("2f14")),o={name:"Information",data:function(){return{userImg:"",tel:"",name:"",id:"",message:"",picturetype:"image/jpeg,/image/gif,image/png",informationdata:[],isbool:!1}},created:function(){this.accountinformation()},methods:{fhiu:function(){this.$router.push({name:"My"})},jumpsafety:function(){this.$router.push({name:"Securitycenter"})},headportrait:function(t){var e=this,a=localStorage.getItem("NO"),n=t.content.indexOf(","),i=t.file.type.indexOf("/"),o=t.content.slice(n+1),c=t.file.type.slice(i+1),s={appkey:this.appkey,tokenString:a,imgType:c,serverBase64Img:o};s=r["a"].queryString(s),this.axios({method:"POST",url:"/updateAvatar",data:s}).then((function(t){"H001"==t.data.code&&(e.accountinformation(),e.$toast("修改成功"))})).catch((function(t){}))},beforeRead:function(t){return"image/jpeg"===t.type||"image/png"===t.type||"image/gif"===t.type||(this.$toast("图片格式不正确╮(╯﹏╰）╭"),!1)},onOversize:function(t){this.$toast("图片太大了╮(╯﹏╰）╭")},accountinformation:function(){var t=this,e=localStorage.getItem("NO");this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"circular"}),this.axios({method:"GET",url:"/findAccountInfo",params:{appkey:this.appkey,tokenString:e}}).then((function(e){var a=e.data.result;"B001"==e.data.code&&(t.$toast.clear(),t.tel=a[0].phone,t.userImg=a[0].userImg,t.name=a[0].nickName,t.id=a[0].userId,t.message=a[0].desc)})).catch((function(t){}))},displaysave:function(){this.isbool=!0},preservation:function(){var t=this,e=localStorage.getItem("NO"),a=!1,n=!1;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"circular"});var i={appkey:this.appkey,tokenString:e,nickName:this.name},o={appkey:this.appkey,tokenString:e,desc:this.message};i=r["a"].queryString(i),o=r["a"].queryString(o),this.axios({method:"POST",url:"/updateNickName",data:i}).then((function(t){"C001"==t.data.code&&(a=!0)})).catch((function(t){})),this.axios({method:"POST",url:"/updateDesc",data:o}).then((function(e){"D001"==e.data.code&&(n=!0,1==a&&1==n&&(t.$toast.clear(),t.$toast("保存成功")))})).catch((function(t){}))}}},c=o,s=a("9ca4"),u=Object(s["a"])(c,n,i,!1,null,null,null);e["default"]=u.exports},"84ff":function(t,e,a){},a340:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}a.d(e,"a",(function(){return i}))},b4fb:function(t,e,a){"use strict";var n=a("1c8b"),i=a("efe2"),r=a("74e7"),o=a("a719"),c=a("3553"),s=a("d88d"),u=a("1bbd"),f=a("1ca1"),l=a("1ea7"),d=a("90fb"),p=a("f594"),h=d("isConcatSpreadable"),m=9007199254740991,g="Maximum allowed index exceeded",v=p>=51||!i((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),y=l("concat"),b=function(t){if(!o(t))return!1;var e=t[h];return void 0!==e?!!e:r(t)},k=!v||!y;n({target:"Array",proto:!0,forced:k},{concat:function(t){var e,a,n,i,r,o=c(this),l=f(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(r=-1===e?o:arguments[e],b(r)){if(i=s(r.length),d+i>m)throw TypeError(g);for(a=0;a<i;a++,d++)a in r&&u(l,d,r[a])}else{if(d>=m)throw TypeError(g);u(l,d++,r)}return l.length=d,l}})},d7e1:function(t,e,a){"use strict";var n=a("efe2");t.exports=function(t,e){var a=[][t];return!!a&&n((function(){a.call(null,e||function(){throw 1},1)}))}},ecb4:function(t,e,a){"use strict";var n=a("1c8b"),i=a("45af").indexOf,r=a("d7e1"),o=a("ff9c"),c=[].indexOf,s=!!c&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),f=o("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:s||!u||!f},{indexOf:function(t){return s?c.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-908c5c32.b1cdddeb.js.map