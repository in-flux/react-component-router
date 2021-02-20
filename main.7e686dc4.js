(()=>{"use strict";var e={827:(e,t,r)=>{var n=r(741),a=r(526),c=r(801);function o(e={}){const t=null===e?{}:e;return Object.keys(t).forEach((e=>{t[e]=`${t[e]}`})),t}function u(e){const t=(0,c.stringify)(e,{strictNullHandling:!0});return t.length>0?`?${t}`:""}function l(e){return o((0,c.parse)(e.substr(1),{strictNullHandling:!0}))}const s=(0,n.createContext)((()=>{})),i={query:{},params:{},search:"",cleanQuery:{},cleanSearch:""},p=(0,n.createContext)(i),m=(e,t)=>{if(e===t)return!0;if(!e||!t)return!1;const r=Object.keys(e),n=Object.keys(t),a=r.length;if(n.length!==a)return!1;for(let n=0;n<a;n+=1){const a=r[n];if(e[a]!==t[a]||!Object.prototype.hasOwnProperty.call(t,a))return!1}return!0},f="NAVIGATE",y="RESTORE";function h(e){const t=o((r={...e.params,...e.query},Object.keys(r).sort().reduce(((e,t)=>({...e,[t]:r[t]})),{})));var r;const n=m(e.query,t)?e:{...e,query:t},a=u(t),c=(l=t,s=e.params,Object.keys(l).reduce(((e,t)=>t in s&&l[t]===s[t]?e:Object.assign(e,{[t]:l[t]})),{}));var l,s;const i=u(c);return Object.assign(n,{search:a,cleanQuery:c,cleanSearch:i})}function E(e,{query:t}){const r={...t};return m(e.query,r)?e:h({...e,query:r})}function d(e,{query:t}){const r={...e.query,...t};return m(e.query,r)?e:h({...e,query:r})}function q(e,{params:t}){const r={...e.params,...t};return m(e.params,r)?e:h({...e,params:r})}function b(e,{params:t}){const r={...e.query},n={...e.params};return Object.keys(t).forEach((e=>{e in r&&delete r[e],e in n&&delete n[e]})),Object.assign(e,{query:r,params:n}),h(e)}function v(e=i,{type:t,...r}){const n=function(e,t){const r={[y]:E,[f]:d,ADD:q,REMOVE:b};return t.type in r?r[t.type](e,t):e}(e,{type:t,...r});return c=n,m((a=e).query,c.query)&&m(a.params,c.params)?e:n;var a,c}function g(e){return(0,n.useContext)(p).query[e]}function x(){const e=(0,n.useContext)(s);return(0,n.useCallback)((t=>e({type:"ADD",params:t})),[e])}function O({params:e,query:t,search:r,init:a,children:c}){const[o,u]=(0,n.useReducer)(v,h({params:e,query:{...t,...l(r)}}),a);return n.createElement(s.Provider,{value:u},n.createElement(p.Provider,{value:o},c))}O.defaultProps={params:{},query:{},search:"?",init:void 0};var k=r(664);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function j({query:e,children:t,...r}){const a=function(){const e=(0,n.useContext)(s);return(0,n.useCallback)((t=>e({type:f,query:t})),[e])}(),c=(0,n.useCallback)((t=>{t.preventDefault(),a(e)}),[a,e]),o=function(e){const t=(0,n.useContext)(p),{cleanSearch:r}=t;if(!e)return r;const{cleanSearch:a}=d(t,{query:e});return a}(e),u=function(e){const t=(0,n.useContext)(p),{cleanSearch:r}=t;if(!e)return!1;const{cleanSearch:a}=d(t,{query:e});return r===a}(e);return n.createElement("a",C({className:"example-a",href:o,onClick:c,"data-active":u},r),t)}j.defaultProps={query:{},children:void 0};function N({children:e}){return n.createElement("ul",{className:"example-menu"},n.Children.map(e,(e=>n.createElement("li",null,e))))}function S(){return n.createElement("h1",null,"Hello, World!")}function P(){const e=x();(0,n.useEffect)((()=>{e({foo:1})}),[e]);const t=parseInt(g("foo"),10);return n.createElement("div",{className:"app-foo"},n.createElement("h1",null,"Foo"),n.createElement(N,null,[1,2,3,4,5].map((e=>n.createElement(j,{key:e,query:{foo:e}},"Foo ",e)))),n.createElement("div",{className:"app-foo--content"},[1,2,3,4,5].map((e=>t===e&&n.createElement("h2",{key:e},"Foo ",e)))))}function w(){const e=g("bar"),t=x();return(0,n.useEffect)((()=>{t({bar:"no"})}),[t]),n.createElement("div",{className:"app-bar"},n.createElement("h1",null,"Foo"),n.createElement(N,null,["yes","no"].map((e=>n.createElement(j,{key:e,query:{bar:e}},"Bar ",e)))),n.createElement("div",{className:"app-bar--content"},["yes","no"].map((t=>e===t&&n.createElement("h2",{key:t},"Bar ",t)))))}function F(){const e=g("page");return n.createElement("div",{className:"example-app"},n.createElement(N,null,n.createElement(j,{query:{page:"home"}},"Home"),n.createElement(j,{query:{page:"foo"}},"Foo"),n.createElement(j,{query:{page:"bar"}},"Bar")),n.createElement("section",{className:"example-app--content"},"home"===e&&n.createElement(S,null),"foo"===e&&n.createElement(P,null),"bar"===e&&n.createElement(w,null)))}function T(){return function({debounceTimeout:e=50}={}){const t=function(){const e=(0,n.useContext)(s);return(0,n.useCallback)((t=>e({type:y,query:t})),[e])}(),r=(0,n.useContext)(p),{params:a,cleanSearch:c}=r,o=(0,n.useRef)((0,k.lX)());(0,n.useEffect)((()=>{let t=setTimeout((()=>{if(null!==t&&(t=null,c!==document.location.search)){const{pathname:e}=document.location;o.current.push({pathname:e,search:c})}}),e);return()=>{clearTimeout(t),t=null}}),[c,e]),(0,n.useEffect)((()=>{let e=!1;const r=o.current.listen((r=>{if(e)return;const{query:n,cleanSearch:o}=h({params:a,query:l(r.location.search)});c!==o&&t(n)}));return()=>{e=!0,r()}}),[c,a,t])}(),n.createElement(F,null)}(async()=>{const{whatever:e}=JSON.parse(document.querySelector("#config").innerHTML);console.log("CONFIG",{whatever:e}),(0,a.render)(n.createElement(n.StrictMode,null,n.createElement(O,{search:document.location.search,params:{page:"home"}},n.createElement(T,null))),document.querySelector("#app"))})()}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,r.x=e=>{},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[827,736]],n=e=>{},a=(a,c)=>{for(var o,u,[l,s,i,p]=c,m=0,f=[];m<l.length;m++)u=l[m],r.o(e,u)&&e[u]&&f.push(e[u][0]),e[u]=0;for(o in s)r.o(s,o)&&(r.m[o]=s[o]);for(i&&i(r),a&&a(c);f.length;)f.shift()();return p&&t.push.apply(t,p),n()},c=self.webpackChunkreact_component_router=self.webpackChunkreact_component_router||[];function o(){for(var n,a=0;a<t.length;a++){for(var c=t[a],o=!0,u=1;u<c.length;u++){var l=c[u];0!==e[l]&&(o=!1)}o&&(t.splice(a--,1),n=r(r.s=c[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}c.forEach(a.bind(null,0)),c.push=a.bind(null,c.push.bind(c));var u=r.x;r.x=()=>(r.x=u||(e=>{}),(n=o)())})(),r.x()})();
//# sourceMappingURL=main.7e686dc4.js.map