(function(e){function t(t){for(var c,a,o=t[0],i=t[1],u=t[2],d=0,l=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&l.push(r[a][0]),r[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);h&&h(t);while(l.length)l.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],c=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(c=!1)}c&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},r={app:0},s=[];function o(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-193dcbc3":"9274883c","chunk-1d04b704":"4febf3da","chunk-2351831c":"b33793e3","chunk-09d2e2cc":"1cac706a","chunk-39e408df":"44ccbae9","chunk-3bfdd422":"ba518db0","chunk-2534041f":"6d97e85d","chunk-62e9250f":"13400363","chunk-77c3cd58":"9127a35e","chunk-3f6a612a":"6c58f1ed","chunk-6fa796e6":"0874e7b7","chunk-71b8fcaa":"057cb258","chunk-4aefda6e":"c8c66ed6","chunk-2d0a460f":"f458b649","chunk-f4196c04":"7954101f","chunk-1c008fa2":"7a353c09","chunk-22695c02":"e189767a","chunk-7c7c621e":"ed092de6","chunk-74626b00":"dbecbe62","chunk-f3b3c962":"9c963327","chunk-e9b5fede":"576df458"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-193dcbc3":1,"chunk-1d04b704":1,"chunk-09d2e2cc":1,"chunk-39e408df":1,"chunk-2534041f":1,"chunk-62e9250f":1,"chunk-77c3cd58":1,"chunk-3f6a612a":1,"chunk-6fa796e6":1,"chunk-71b8fcaa":1,"chunk-4aefda6e":1,"chunk-f4196c04":1,"chunk-1c008fa2":1,"chunk-22695c02":1,"chunk-7c7c621e":1,"chunk-74626b00":1,"chunk-f3b3c962":1,"chunk-e9b5fede":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-193dcbc3":"0c2a0eb8","chunk-1d04b704":"c7f78442","chunk-2351831c":"31d6cfe0","chunk-09d2e2cc":"d114a2d7","chunk-39e408df":"a8f08ce1","chunk-3bfdd422":"31d6cfe0","chunk-2534041f":"9aa9ac2f","chunk-62e9250f":"4818ae3f","chunk-77c3cd58":"e633ed1b","chunk-3f6a612a":"9957d01c","chunk-6fa796e6":"60283189","chunk-71b8fcaa":"c494a010","chunk-4aefda6e":"b4cf60e8","chunk-2d0a460f":"31d6cfe0","chunk-f4196c04":"748e7675","chunk-1c008fa2":"0512effc","chunk-22695c02":"0c4eb790","chunk-7c7c621e":"0c2a0eb8","chunk-74626b00":"95747863","chunk-f3b3c962":"a418520c","chunk-e9b5fede":"5d4da1d4"}[e]+".css",r=i.p+c,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===c||d===r))return t()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){u=l[o],d=u.getAttribute("data-href");if(d===c||d===r)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var c=t&&t.target&&t.target.src||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=c,delete a[e],h.parentNode.removeChild(h),n(s)},h.href=r;var f=document.getElementsByTagName("head")[0];f.appendChild(h)})).then((function(){a[e]=0})));var c=r[e];if(0!==c)if(c)t.push(c[2]);else{var s=new Promise((function(t,n){c=r[e]=[t,n]}));t.push(c[2]=s);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=o(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(h);var n=r[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,n[1](l)}r[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=d;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var c=n("85ec"),a=n.n(c);a.a},3704:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{include:"home"}},[n("router-view")],1),n("MianTabBar",{directives:[{name:"show",rawName:"v-show",value:e.showTab,expression:"showTab"}]})],1)},r=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("tab-bar",[n("tab-bar-item",{attrs:{path:"/home"}},[n("span",{staticClass:"iconfont icon-shouye",attrs:{slot:"item-icon"},slot:"item-icon"}),n("span",{staticClass:"text",attrs:{slot:"item-text"},slot:"item-text"},[e._v("首页")])]),n("tab-bar-item",{attrs:{path:"/category"}},[n("span",{staticClass:"iconfont icon-fenlei",attrs:{slot:"item-icon"},slot:"item-icon"}),n("span",{staticClass:"text",attrs:{slot:"item-text"},slot:"item-text"},[e._v("分类")])]),n("tab-bar-item",{attrs:{path:"/shopcart"}},[n("span",{staticClass:"iconfont icon-gouwuche",attrs:{slot:"item-icon"},slot:"item-icon"}),n("span",{staticClass:"text",attrs:{slot:"item-text"},slot:"item-text"},[e._v("购物车")])]),n("tab-bar-item",{attrs:{path:"/profile"}},[n("span",{staticClass:"iconfont icon-profile",attrs:{slot:"item-icon"},slot:"item-icon"}),n("span",{staticClass:"text",attrs:{slot:"item-text"},slot:"item-text"},[e._v("我的")])])],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"tab-bar"}},[e._t("default")],2)},u=[],d={name:"TabBar"},l=d,h=n("2877"),f=Object(h["a"])(l,i,u,!1,null,null,null),m=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-bar-item",on:{click:e.activeClick}},[n("div",{style:e.activeStyle},[e._t("item-icon"),e._t("item-text")],2)])},b=[],k={name:"TabBarItem",props:{path:String,activeColor:{type:String,default:"palevioletred"}},data(){return{}},computed:{isActive(){return-1!==this.$route.path.indexOf(this.path)},activeStyle(){return this.isActive?{color:this.activeColor}:{}}},methods:{activeClick(){this.$router.push(this.path)}}},v=k,g=(n("6721"),Object(h["a"])(v,p,b,!1,null,null,null)),y=g.exports,I={components:{TabBar:m,TabBarItem:y}},L=I,w=Object(h["a"])(L,s,o,!1,null,null,null),x=w.exports,_={name:"App",components:{MianTabBar:x},computed:{showTab(){if(this.$route.meta.showTab)return!0}}},C=_,O=(n("034f"),Object(h["a"])(C,a,r,!1,null,null,null)),P=O.exports,S=n("8c4f"),T=n("fcc2");const j=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-62e9250f"),n.e("chunk-77c3cd58"),n.e("chunk-2351831c"),n.e("chunk-3f6a612a")]).then(n.bind(null,"b3d7")),E=()=>Promise.all([n.e("chunk-62e9250f"),n.e("chunk-2351831c"),n.e("chunk-22695c02")]).then(n.bind(null,"f4ba")),A=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-62e9250f"),n.e("chunk-77c3cd58"),n.e("chunk-71b8fcaa")]).then(n.bind(null,"c723")),N=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-1d04b704")]).then(n.bind(null,"893c")),B=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-62e9250f"),n.e("chunk-77c3cd58"),n.e("chunk-2351831c"),n.e("chunk-6fa796e6")]).then(n.bind(null,"6ab7")),D=()=>Promise.all([n.e("chunk-7c7c621e"),n.e("chunk-f3b3c962")]).then(n.bind(null,"beb1")),$=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-77c3cd58"),n.e("chunk-3bfdd422"),n.e("chunk-4aefda6e"),n.e("chunk-2d0a460f")]).then(n.bind(null,"05d8")),q=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-77c3cd58"),n.e("chunk-3bfdd422"),n.e("chunk-4aefda6e"),n.e("chunk-f4196c04")]).then(n.bind(null,"e761")),M=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-2351831c"),n.e("chunk-09d2e2cc")]).then(n.bind(null,"ede4")),U=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-3bfdd422"),n.e("chunk-2534041f")]).then(n.bind(null,"e595")),J=()=>n.e("chunk-1c008fa2").then(n.bind(null,"98c4")),F=()=>n.e("chunk-e9b5fede").then(n.bind(null,"34eb")),H=()=>Promise.all([n.e("chunk-193dcbc3"),n.e("chunk-39e408df")]).then(n.bind(null,"bdf5")),K=()=>Promise.all([n.e("chunk-62e9250f"),n.e("chunk-7c7c621e"),n.e("chunk-74626b00")]).then(n.bind(null,"7915")),z=S["a"].prototype.push;S["a"].prototype.push=function(e){return z.call(this,e).catch(e=>e)},c["a"].use(S["a"]);const G=[{path:"",redirect:"/home",meta:{showTab:!0}},{path:"/home",component:j,meta:{showTab:!0}},{path:"/category",component:E,meta:{showTab:!0}},{path:"/shopcart",component:A,meta:{showTab:!0}},{path:"/profile",component:N,meta:{showTab:!0},children:[{path:"userInfo",component:U,name:"userInfo",children:[{path:"changeNickName",name:"ChangeNickName",component:J}]},{path:"other",component:F,name:"other"},{path:"coupon",component:H,meta:{requireAuth:!0}}]},{path:"/detail/:iid",component:B},{path:"/addresslist",component:D,meta:{requireAuth:!0},children:[{path:"editaddress",name:"editaddress",component:q}]},{path:"/addressedit",component:$,meta:{requireAuth:!0}},{path:"/login",component:M},{path:"/order",component:K,name:"order",meta:{requireAuth:!0},children:[{path:"addresslist",component:D,name:"addresslist"}]}],Q=new S["a"]({routes:G,mode:"history"});Q.beforeEach((e,t,n)=>{e.meta.requireAuth?T["a"].userInfo&&T["a"].userInfo.token?n():n({path:"/login"}):n()});var R=Q,V=n("2f62");const W="add_counter",X="add_to_cart",Y=(e,t)=>{e&&("string"!==typeof t&&(t=JSON.stringify(t)),window.localStorage.setItem(e,t))},Z=e=>{if(e)return window.localStorage.getItem(e)},ee=e=>{if(e)return window.localStorage.removeItem(e)};var te={[W](e,t){},[X](e,t){let n=e.cartList;t.checked=!0,n.push(t)},removeFormCar(e,t){e.cartList.some((t,n)=>{if(t.iid===n)return e.cartList.splice(n,1),!0}),Y("cartList",e.cartList)},goodsCurrent(e,t){let n=e.cartList,c=n.find(e=>e.iid===t.iid);c.count=t.value,e.cartList=[...n],Y("cartList",e.cartList)},init_UserAddress(e){let t=Z("addressList");e.addressList=JSON.parse(t)||[]},addUserAddress(e,{content:t}){if(0!==e.addressList.length&&t.isDefault){let t=e.addressList.find(e=>!0===e.isDefault);t.isDefault=!1}e.addressList=[...e.addressList,t],Y("addressList",e.addressList)},changeUserAddres(e,{content:t}){const n=e.addressList.findIndex(e=>e.id===t.id);if(0!==e.addressList.length&&t.isDefault){let t=e.addressList.find(e=>!0===e.isDefault);t&&(t.isDefault=!1)}e.addressList.splice(n,1,t),Y("addressList",e.addressList)},deleteUserAddress(e,{id:t}){e.addressList=e.addressList.filter(e=>e.id!=t),Y("addressList",e.addressList)},userInfo(e,{userInfo:t}){e.userInfo=t,Y("userInfo",e.userInfo)},inituserInfo(e){let t=Z("userInfo");t&&(e.userInfo=JSON.parse(t))},changeUserNickName(e,{nickName:t}){let n=e.userInfo;console.log(n),Object.keys(n).forEach((e,c)=>{"user_name"==e&&(n["user_name"]=t,console.log(t))}),e.userInfo={...n},Y("userInfo",e.userInfo)},userInfoBrithday(e,{brithday:t}){let n=e.userInfo;Object.values(n).forEach((e,a)=>{e.brithday?e.brithday=t:c["a"].set(n,"brithday",t)}),e.userInfo={...n},Y("userInfo",e.userInfo)},userInfoSex(e,{sex:t}){let n=e.userInfo;Object.values(n).forEach((e,a)=>{e.sex?e.sex=t:(c["a"].set(n,"sex",t),console.log(t))}),e.userInfo={...n},Y("userInfo",e.userInfo)},loginOut(e){e.userInfo={},e.cartList=[],e.addressList=[],ee("userInfo"),ee("cartList"),ee("addressList")}},ne={addCart(e,t){return new Promise((n,c)=>{let a=e.state.cartList.find(e=>e.iid===t.iid);a?(a.count+=t.count,e.commit(W,a),n("当前的商品数量+"+t.count)):(e.commit(X,t),n("已添加到购物车"))})},syncuserInfo({commit:e},t){e("userInfo",{userInfo:t})},aotuLogin({commit:e}){let t=Z("userInfo");t&&e("userInfo",{userInfo:t})}},ce={userSex(e){return"1"==e.userInfo.sex?"美女":"2"==e.userInfo.sex?"帅哥":"未填写"}};c["a"].use(V["a"]);const ae=new V["a"].Store({state:T["a"],mutations:te,actions:ne,getters:ce});var re=ae,se=n("fe3c"),oe=n.n(se),ie=n("caf9");n("157a");"addEventListener"in document&&document.addEventListener("DOMContentLoaded",(function(){oe.a.attach(document.body)}),!1),c["a"].use(ie["a"],{preLoad:1.3,error:"./assets/img/common/error.jpg",loading:n("eb67"),attempt:1}),c["a"].prototype.$bus=new c["a"],new c["a"]({router:R,store:re,render:e=>e(P)}).$mount("#app")},6721:function(e,t,n){"use strict";var c=n("3704"),a=n.n(c);a.a},"85ec":function(e,t,n){},eb67:function(e,t,n){e.exports=n.p+"img/loading.ebd1e743.gif"},fcc2:function(e,t,n){"use strict";t["a"]={cartList:[],addressList:[],userInfo:{}}}});
//# sourceMappingURL=app.2f3c75d1.js.map