(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-709152e4"],{"053b":function(t,e,a){var i=a("1e2c"),n=a("d910").f,s=Function.prototype,r=s.toString,c=/^\s*function ([^ (]*)/,o="name";i&&!(o in s)&&n(s,o,{configurable:!0,get:function(){try{return r.call(this).match(c)[1]}catch(t){return""}}})},"26d1":function(t,e,a){t.exports=a.p+"img/IMG_0390_02.58e76887.jpg"},"2bae":function(t,e,a){t.exports=a.p+"img/home-rena_ice.973f763d.png"},"2eeb":function(t,e,a){"use strict";var i=a("1c8b"),n=a("5dfd").map,s=a("1ea7"),r=a("ff9c"),c=s("map"),o=r("map");i({target:"Array",proto:!0,forced:!c||!o},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},"59ee":function(t,e,a){t.exports=a.p+"img/home-coffee.5ddf1d74.png"},"9d3f":function(t,e,a){},b288:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"head"},[a("van-nav-bar",{attrs:{border:!1},scopedSlots:t._u([{key:"left",fn:function(){return[a("div",{staticClass:"head-title"},[a("p",[t._v("最晚营业到 15:00")]),a("h1",[t._v(t._s(t.itemText)+t._s(t.nickName))])])]},proxy:!0},{key:"right",fn:function(){return[t.address?a("div",{staticClass:"head-place",on:{click:t.jumpmyaddress}},[a("span",[t._v("配送至:")]),a("span",[t._v(t._s(t.address))]),a("span",[a("van-icon",{staticClass:"icon",attrs:{name:"arrow"}})],1)]):a("div",{staticClass:"head-place",on:{click:t.gotologin}},[a("span",[t._v("未登录")])])]},proxy:!0}])})],1),a("div",{staticClass:"search"},[a("van-search",{attrs:{placeholder:"请输入商品名称"},on:{focus:t.searchPopup}})],1),a("div",{staticClass:"searchlayer"},[a("van-popup",{style:{height:"60%"},attrs:{position:"top"},model:{value:t.issearch,callback:function(e){t.issearch=e},expression:"issearch"}},[a("div",{staticClass:"searchbar"},[a("van-search",{attrs:{placeholder:"请输入商品名称",size:"20","show-action":"",autofocus:!0},on:{blur:t.searchnull},scopedSlots:t._u([{key:"action",fn:function(){return[a("div",{on:{click:t.searchrequest}},[t._v("搜索")])]},proxy:!0}]),model:{value:t.searchcontent,callback:function(e){t.searchcontent=e},expression:"searchcontent"}}),a("div",{staticClass:"searchresult"},[a("ul",t._l(t.searchdata,(function(e,i){return a("li",{key:i,on:{click:function(a){return t.jumpdetails(e)}}},[a("span",[t._v(t._s(e.name))]),a("van-icon",{attrs:{name:"arrow",size:"20"}})],1)})),0)])],1)])],1),a("div",{staticClass:"rotation"},[a("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:5e3,"indicator-color":"white"}},t._l(t.rotation,(function(e,i){return a("van-swipe-item",{key:i,on:{click:function(a){return t.jumpdetails(e)}}},[a("div",{staticClass:"rotation-center"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.bannerImg,expression:"item.bannerImg"}],staticClass:"img-auto"}),a("div",[a("span",[t._v(t._s(e.name))])])])])})),1)],1),a("div",{staticClass:"hotsale"},[t._m(0),a("div",{staticClass:"hotsale-center"},[a("ul",{style:{width:t.maxwight+"px"}},t._l(t.commodity,(function(e,i){return a("li",{key:i,ref:"ulli"+i,refInFor:!0,on:{click:function(a){return t.jumpdetails(e)}}},[a("img",{attrs:{src:e.smallImg,alt:""}}),a("p",[t._v(t._s(e.name))]),a("p",[t._v(t._s(e.price))])])})),0)])]),a("div",{staticClass:"poprlar"},[t._m(1),a("div",{staticClass:"poprlar-center"},[a("van-row",{attrs:{gutter:"20"}},t._l(t.classIfication,(function(e,i){return a("van-col",{key:i,attrs:{span:"8"},on:{click:function(a){return t.getintoMenu(e.type)}}},[a("div",{staticClass:"classification"},[a("van-icon",{attrs:{name:e.icom,size:30}}),a("p",[t._v(t._s(e.typeDesc))]),a("p",[t._v(t._s(e.type))])],1)])})),1)],1)])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("p",[t._v("Recommend")]),a("p",[t._v("今日推荐")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("p",[t._v("Poprlar")]),a("p",[t._v("正在热销")])])}],s=(a("2eeb"),a("053b"),a("9d3f"),[{bannerImg:a("c648"),name:"卡布奇诺瑞纳冰",pid:"rena_ice003"},{bannerImg:a("26d1"),name:"奥瑞白",pid:"coffee006"},{bannerImg:a("fdf1"),name:"榛果拿铁",pid:"latte005"},{bannerImg:a("f527"),name:"摩卡",pid:"coffee003"}]),r={name:"Home",data:function(){return{rotation:s,commodity:[],classIfication:[],iocnarr:[a("f91b"),a("59ee"),a("2bae")],itemText:"",maxwight:0,nickName:"",address:"",issearch:!1,searchcontent:"",searchdata:[]}},created:function(){this.getitemDate(),this.getcommodityType(),this.getclassIfication()},methods:{getitemDate:function(){var t=this,e=(new Date).getHours();e>=6&&e<12?this.itemText="早上好":e>=12&&e<15?this.itemText="中午好":e>=15&&e<19?this.itemText="下午好":e>=19&&e<24?this.itemText="晚上好":e>=24&&e<6&&(this.itemText="晚安");var a=localStorage.getItem("NO");if(!a)return this.nickName="",void(this.address="");this.axios({method:"GET",url:"/findMy",params:{appkey:this.appkey,tokenString:a}}).then((function(e){"A001"==e.data.code&&(t.nickName=","+e.data.result[0].nickName)})),this.axios({method:"GET",url:"/findAddress",params:{appkey:this.appkey,tokenString:a}}).then((function(e){var a=e.data.result;"20000"==e.data.code&&a.map((function(e){1==e.isDefault&&(t.address=e.addressDetail)}))}))},getbannerData:function(){var t=this,e=sessionStorage.getItem("bannerData");e?this.rotation=JSON.parse(e):this.axios({method:"GET",url:"/banner",params:{appkey:this.appkey}}).then((function(e){var a=e.data.result;300==e.data.code&&(a.map((function(e){t.rotation.push({bannerImg:e.bannerImg,name:e.name,pid:e.pid})})),sessionStorage.setItem("bannerData",JSON.stringify(t.rotation)))})).catch((function(t){}))},getcommodityType:function(){var t=this;this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0,loadingType:"circular"});var e=JSON.parse(sessionStorage.getItem("commodityData"));if(e)return this.$toast.clear(),this.commodity=e,void this.$nextTick((function(){var a=t.$refs.ulli0[0].clientWidth;t.maxwight=a*e.length+180}));this.axios({method:"GET",url:"/typeProducts",params:{appkey:this.appkey,key:"isHot",value:1}}).then((function(e){if(500==e.data.code){t.$toast.clear();var a=e.data.result,i=0;a.map((function(e,a){i=a+1,t.commodity.push({name:e.name,price:"￥"+e.price,smallImg:e.smallImg,pid:e.pid}),sessionStorage.setItem("commodityData",JSON.stringify(t.commodity))})),t.$nextTick((function(){var e=t.$refs.ulli0[0].clientWidth;t.maxwight=e*i+180}))}})).catch((function(t){}))},getclassIfication:function(){var t=this;this.axios({method:"GET",url:"/type",params:{appkey:this.appkey}}).then((function(e){var a=e.data.result;400==e.data.code&&a.map((function(e,a){t.classIfication.push({type:e.type,typeDesc:e.typeDesc,icom:t.iocnarr[a],id:a})}))}))},searchrequest:function(){var t=this,e=this.searchcontent;this.searchcontent?this.axios({method:"GET",url:"/search",params:{appkey:this.appkey,name:e}}).then((function(e){var a=e.data.result;"Q001"==e.data.code&&(t.searchdata=[],a.map((function(e){t.searchdata.push(e)})))})):this.searchdata=[]},searchnull:function(){this.searchcontent||(this.searchdata=[])},searchPopup:function(){this.issearch=!0},jumpdetails:function(t){this.$router.push({name:"Details",query:{pid:t.pid}})},jumpmyaddress:function(t){this.$router.push({name:"Myaddress"})},getintoMenu:function(t){this.$router.push({name:"Menu",query:{id:t}})},gotologin:function(){this.$router.push({name:"Entrance"})}}},c=r,o=a("9ca4"),p=Object(o["a"])(c,i,n,!1,null,null,null);e["default"]=p.exports},c648:function(t,e,a){t.exports=a.p+"img/IMG_0389_02.ebe23ca3.jpg"},f527:function(t,e,a){t.exports=a.p+"img/IMG_0382_02.13534194.jpg"},f91b:function(t,e,a){t.exports=a.p+"img/home-latte.e3be1276.png"},fdf1:function(t,e,a){t.exports=a.p+"img/IMG_0385_02.6cff321f.jpg"}}]);
//# sourceMappingURL=chunk-709152e4.92de1ab0.js.map