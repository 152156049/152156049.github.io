(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29a44a53"],{"06d5":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"myorder"},[r("div",{staticClass:"head"},[r("van-nav-bar",{attrs:{title:"我的订单",border:!1},on:{"click-left":t.fhiu},scopedSlots:t._u([{key:"left",fn:function(){return[r("van-icon",{attrs:{name:"arrow-left",size:"30",color:"#000"}})]},proxy:!0}])})],1),r("div",{staticClass:"tab-center"},[r("van-tabs",{on:{change:t.switchlabel},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabItems,(function(e,n){return r("van-tab",{key:n,attrs:{title:e.title}},[t.orderdata.length<1?r("van-empty",{attrs:{image:a("c101"),description:"无该订单记录"}}):t._l(t.orderdata,(function(e,a){return r("div",{key:a,staticClass:"ordercenter"},[r("div",{staticClass:"order_box"},[r("div",{staticClass:"ordernumber"},[r("div",{staticClass:"numbers"},[t._v("订单号:"+t._s(e.orderId))]),1==e.status?r("div",{staticClass:"state"},[t._v("待取餐")]):2==e.status?r("div",{staticClass:"statewc"},[t._v("已完成")]):t._e()]),r("div",{staticClass:"address"},[r("h3",[t._v(t._s(e.address))])]),r("div",{staticClass:"commodity"},t._l(e.products,(function(e,a){return r("div",{key:a,staticClass:"commodity-center"},[r("div",{staticClass:"center-left"},[r("img",{attrs:{src:e.smallImg,alt:""}})]),r("div",{staticClass:"center-right"},[r("p",[r("span",[t._v(t._s(e.name))]),r("span",[t._v("￥"+t._s(e.price))])]),r("p",[r("span",[t._v(t._s(e.rule))]),r("span",[t._v("*"+t._s(e.count))])])])])})),0),r("div",{staticClass:"statistics"},[r("div",{staticClass:"statistic-number"},[r("span",[t._v(t._s(t._f("formatDate")(e.date,"yyyy-MM-dd hh:mm:ss")))])]),r("div",{staticClass:"operation"},[1==e.status?r("span",{on:{click:function(r){return t.confirmorder(e,a)}}},[t._v("确认收货")]):2==e.status?r("span",{staticClass:"czuowc",on:{click:function(r){return t.deleteorder(e,a)}}},[t._v("删除")]):t._e()])])]),r("div",{staticClass:"order_price"},[r("div",[r("span",[t._v("共计"+t._s(e.count)+"件商品")])]),r("div",[r("span",[t._v("￥")]),r("span",[t._v(t._s(e.total)+".00")])])])])}))],2)})),1)],1)])},n=[],i=(a("2eeb"),a("ea69"),a("4f0c"),a("2f14")),s={name:"Myorder",data:function(){return{n:"2020-08-13T02:18:50.000Z",activeName:0,orderdata:[],status:0,tabItems:[{title:"全部"},{title:"进行中"},{title:"已完成"}]}},created:function(){this.switchlabel(0)},methods:{fhiu:function(){this.$router.go(-1)},switchlabel:function(t){var e=this;this.status=t;var a=localStorage.getItem("NO");a&&(this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"circular"}),this.axios({method:"GET",url:"/findOrder",params:{appkey:this.appkey,tokenString:a,status:t}}).then((function(t){t.data.result;var a={};if("70000"==t.data.code){for(var r in e.orderdata=[],e.$toast.clear(),t.data.result.map((function(t){a[t.oid]?(a[t.oid].count+=t.count,a[t.oid].total+=t.count*t.price,a[t.oid].products.push(t)):a[t.oid]={orderId:t.oid,address:t.address,date:t.createdAt,count:t.count,total:t.count*t.price,products:[t],status:t.status}})),a)e.orderdata.push(a[r]);e.orderdata.sort((function(t,e){return new Date(e.date).getTime()-new Date(t.date).getTime()}))}})).catch((function(t){})))},confirmorder:function(t,e){var a=this,r=localStorage.getItem("NO"),n=t.orderId;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"circular"});var s={appkey:this.appkey,tokenString:r,oid:n};s=i["a"].queryString(s),this.axios({method:"POST",url:"/receive",data:s}).then((function(t){"80000"==t.data.code&&(a.$toast.clear(),0!=a.status?a.orderdata.splice(e,1):a.switchlabel(0))}))},deleteorder:function(t,e){var a=this,r=localStorage.getItem("NO"),n=t.orderId;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"circular"});var s={appkey:this.appkey,tokenString:r,oid:n};s=i["a"].queryString(s),this.axios({method:"POST",url:"/removeOrder",data:s}).then((function(t){"90000"==t.data.code&&(a.$toast.clear(),a.orderdata.splice(e,1))}))}}},o=s,c=a("9ca4"),d=Object(c["a"])(o,r,n,!1,null,null,null);e["default"]=d.exports},1462:function(t,e,a){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}a.d(e,"a",(function(){return r}))},"2eeb":function(t,e,a){"use strict";var r=a("1c8b"),n=a("5dfd").map,i=a("1ea7"),s=a("ff9c"),o=i("map"),c=s("map");r({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"2f14":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("b4fb"),a("77ad");var r=a("1462"),n=a("a340"),i=function(){function t(){Object(r["a"])(this,t)}return Object(n["a"])(t,[{key:"queryString",value:function(t){var e="";for(var a in t)"confirmpassword"!==a&&(e+="".concat(a,"=").concat(t[a],"&"));return e.slice(0,-1)}}]),t}(),s=new i},"4f0c":function(t,e,a){},a340:function(t,e,a){"use strict";function r(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,e,a){return e&&r(t.prototype,e),a&&r(t,a),t}a.d(e,"a",(function(){return n}))},b4fb:function(t,e,a){"use strict";var r=a("1c8b"),n=a("efe2"),i=a("74e7"),s=a("a719"),o=a("3553"),c=a("d88d"),d=a("1bbd"),u=a("1ca1"),l=a("1ea7"),f=a("90fb"),p=a("f594"),v=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",g=p>=51||!n((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=l("concat"),y=function(t){if(!s(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},_=!g||!b;r({target:"Array",proto:!0,forced:_},{concat:function(t){var e,a,r,n,i,s=o(this),l=u(s,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(i=-1===e?s:arguments[e],y(i)){if(n=c(i.length),f+n>h)throw TypeError(m);for(a=0;a<n;a++,f++)a in i&&d(l,f,i[a])}else{if(f>=h)throw TypeError(m);d(l,f++,i)}return l.length=f,l}})},c101:function(t,e,a){t.exports=a.p+"img/emptystate.9493edd0.png"},ea69:function(t,e,a){"use strict";var r=a("1c8b"),n=a("e1d6"),i=a("3da3"),s=a("d88d"),o=a("3553"),c=a("1ca1"),d=a("1bbd"),u=a("1ea7"),l=a("ff9c"),f=u("splice"),p=l("splice",{ACCESSORS:!0,0:0,1:2}),v=Math.max,h=Math.min,m=9007199254740991,g="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var a,r,u,l,f,p,b=o(this),y=s(b.length),_=n(t,y),C=arguments.length;if(0===C?a=r=0:1===C?(a=0,r=y-_):(a=C-2,r=h(v(i(e),0),y-_)),y+a-r>m)throw TypeError(g);for(u=c(b,r),l=0;l<r;l++)f=_+l,f in b&&d(u,l,b[f]);if(u.length=r,a<r){for(l=_;l<y-r;l++)f=l+r,p=l+a,f in b?b[p]=b[f]:delete b[p];for(l=y;l>y-r+a;l--)delete b[l-1]}else if(a>r)for(l=y-r;l>_;l--)f=l+r-1,p=l+a-1,f in b?b[p]=b[f]:delete b[p];for(l=0;l<a;l++)b[l+_]=arguments[l+2];return b.length=y-r+a,u}})}}]);
//# sourceMappingURL=chunk-29a44a53.c82dff4f.js.map