(function(){"use strict";var t={6200:function(t,e,n){var r=n(3751),o=n(641);const a={class:"container"};function c(t,e,n,r,c,i){const u=(0,o.g2)("NavBar"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)(o.FK,null,[t.$route.meta.hideNavbar?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.Wv)(u,{key:0})),(0,o.Lk)("div",a,[(0,o.bF)(s),e[0]||(e[0]=(0,o.Lk)("hr",null,null,-1))])],64)}const i={class:"navbar navbar-expand-lg bg-body-tertiary"},u={class:"container-fluid"},s={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav mb-2 mb-lg-0"},l={class:"nav-item"},f={class:"nav-item"};function p(t,e,n,r,a,c){const p=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("nav",i,[(0,o.Lk)("div",u,[e[3]||(e[3]=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},"Navbar",-1)),e[4]||(e[4]=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1)),(0,o.Lk)("div",s,[(0,o.Lk)("ul",d,[(0,o.Lk)("li",l,[(0,o.bF)(p,{class:"nav-link",to:"/products"},{default:(0,o.k6)((()=>e[0]||(e[0]=[(0,o.eW)("Products")]))),_:1})]),(0,o.Lk)("li",f,[(0,o.bF)(p,{class:"nav-link",to:"/AddEdit"},{default:(0,o.k6)((()=>e[1]||(e[1]=[(0,o.eW)("Add_Product")]))),_:1})])]),e[2]||(e[2]=(0,o.Lk)("form",{class:"d-flex",role:"search"},[(0,o.Lk)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,o.Lk)("button",{class:"btn btn-outline-success",type:"submit"},"Search")],-1))])])])])}var h={name:"NavBar"},v=n(6262);const b=(0,v.A)(h,[["render",p],["__scopeId","data-v-b9870e1c"]]);var m=b,g={name:"App",components:{NavBar:m},data(){return{}},methods:{},computed:{},watch:{}};const y=(0,v.A)(g,[["render",c]]);var k=y,P=n(6278),w=n(4335),A=(0,P.y$)({state:{products:[],product:{}},mutations:{setProducts(t,e){t.products=e},setProduct(t,e){t.product=e}},actions:{async fetchProducts({commit:t}){const e=await w.A.get("http://localhost:2000/products");t("setProducts",e.data)},async fetchProduct({commit:t},e){const n=await w.A.get(`http://localhost:2000/products/${e}`);t("setProduct",n.data)},async deleteProduct({dispatch:t},e){await w.A.delete(`http://localhost:2000/products/${e}`),t("fetchProducts")},async addProduct(t,e){await w.A.post("http://localhost:2000/products",e)},async updateProduct(t,{id:e,product:n}){await w.A.patch(`http://localhost:2000/products/${e}`,n)}},getters:{allProducts:t=>t.products,singleProduct:t=>t.product}}),L=(n(1836),n(5220));const C=[{path:"/",component:()=>Promise.all([n.e(114),n.e(978)]).then(n.bind(n,7978))},{path:"/products",component:()=>Promise.all([n.e(114),n.e(978)]).then(n.bind(n,7978))},{path:"/products/:id",component:()=>n.e(387).then(n.bind(n,1387))},{path:"/AddEdit",component:()=>Promise.all([n.e(114),n.e(56)]).then(n.bind(n,6056))},{path:"/AddEdit/:id",component:()=>Promise.all([n.e(114),n.e(56)]).then(n.bind(n,6056))},{path:"/:NotFound(.*)*",component:()=>Promise.all([n.e(114),n.e(286)]).then(n.bind(n,286)),meta:{hideNavbar:!0}}],E=(0,L.aE)({history:(0,L.LA)(),routes:C});(0,r.Ef)(k).use(E).use(A).mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,a){if(!r){var c=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],a=t[d][2];for(var i=!0,u=0;u<r.length;u++)(!1&a||c>=a)&&Object.keys(n.O).every((function(t){return n.O[t](r[u])}))?r.splice(u--,1):(i=!1,a<c&&(c=a));if(i){t.splice(d--,1);var s=o();void 0!==s&&(e=s)}}return e}a=a||0;for(var d=t.length;d>0&&t[d-1][2]>a;d--)t[d]=t[d-1];t[d]=[r,o,a]}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{56:"4165f67b",114:"dd273374",286:"12d25d8e",387:"5bf3bf9e",978:"841c3948"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{56:"347681e5",286:"b22bfad4",387:"16449b69",978:"205baadf"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="demo:";n.l=function(r,o,a,c){if(t[r])t[r].push(o);else{var i,u;if(void 0!==a)for(var s=document.getElementsByTagName("script"),d=0;d<s.length;d++){var l=s[d];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+a){i=l;break}}i||(u=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",e+a),i.src=r),t[r]=[o];var f=function(e,n){i.onerror=i.onload=null,clearTimeout(p);var o=t[r];if(delete t[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(t){return t(n)})),e)return e(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=f.bind(null,i.onerror),i.onload=f.bind(null,i.onload),u&&document.head.appendChild(i)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/Vue-CRUD-Operations/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,r,o,a){var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",n.nc&&(c.nonce=n.nc);var i=function(n){if(c.onerror=c.onload=null,"load"===n.type)o();else{var r=n&&n.type,i=n&&n.target&&n.target.href||e,u=new Error("Loading CSS chunk "+t+" failed.\n("+r+": "+i+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=i,c.parentNode&&c.parentNode.removeChild(c),a(u)}};return c.onerror=c.onload=i,c.href=e,r?r.parentNode.insertBefore(c,r.nextSibling):document.head.appendChild(c),c},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===t||a===e))return o}var c=document.getElementsByTagName("style");for(r=0;r<c.length;r++){o=c[r],a=o.getAttribute("data-href");if(a===t||a===e)return o}},r=function(r){return new Promise((function(o,a){var c=n.miniCssF(r),i=n.p+c;if(e(c,i))return o();t(r,i,null,o,a)}))},o={524:0};n.f.miniCss=function(t,e){var n={56:1,286:1,387:1,978:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={524:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=a);var c=n.p+n.u(e),i=new Error,u=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),c=r&&r.target&&r.target.src;i.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",i.name="ChunkLoadError",i.type=a,i.request=c,o[1](i)}};n.l(c,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,a,c=r[0],i=r[1],u=r[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var d=u(n)}for(e&&e(r);s<c.length;s++)a=c[s],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(d)},r=self["webpackChunkdemo"]=self["webpackChunkdemo"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(6200)}));r=n.O(r)})();
//# sourceMappingURL=app.62ce8f77.js.map