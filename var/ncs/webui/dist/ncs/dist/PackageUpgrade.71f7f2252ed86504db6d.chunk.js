"use strict";(self.webpackChunkwebui=self.webpackChunkwebui||[]).push([[260],{63732:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(67294)),l=o(r(89272)),a=o(r(32319));function o(e){return e&&e.__esModule?e:{default:e}}t.default=()=>n.default.createElement(l.default,{title:"ADD PACKAGES"},n.default.createElement(a.default,null))},32319:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,l=f(r(67294)),a=f(r(72377)),o=(n=r(2674))&&n.__esModule?n:{default:n},u=r(30098);function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=l?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const s={form:{display:"flex",width:"100%"},innerLeftContainer:{flex:2},fileLabel:{padding:a.small1,display:"inline-block",marginBottom:a.small1,maxWidth:"100%",minWidth:"220px",color:a.color8,border:`1px solid ${a.color7}`,boxShadow:`inset 0px 2px 2px ${a.color7}`,borderRadius:"2px",fontSize:a.medium2},fileInput:{display:"none"},fileInfo:{fontSize:a.medium1}};t.default=()=>{const e=c((0,u.usePackageUpload)({th:1}),2),t=e[0],r=e[1],n=c((0,l.useState)(void 0),2),i=n[0],f=n[1],d=(0,l.useRef)(null),p=()=>{f(void 0)};return(0,u.isLoading)(t)?l.default.createElement(o.default,{progress:t.progress}):l.default.createElement("form",{onSubmit:e=>{e.preventDefault();const t=d.current.files[0];r({data:t,onDone:p})},style:s.form},l.default.createElement("div",{style:s.innerLeftContainer},l.default.createElement("label",{style:s.fileLabel,htmlFor:"file"},i?i.name:"Browse files...",l.default.createElement("input",{type:"file",id:"file",name:"file",ref:d,onChange:()=>{const e=d.current.files[0];f({name:e.name,size:e.size})},style:s.fileInput})),i&&l.default.createElement("div",null,l.default.createElement("p",{style:s.fileInfo},i.name," ",(e=>{let t=e,r=0;for(;t/1024>1;)r+=1,t/=1024;return`${Math.round(t)} ${(e=>{switch(e){case 0:return"b";case 1:return"kb";case 2:return"mb";case 3:return"gb";default:return"b"}})(r)}`})(i.size)))),l.default.createElement("div",null,l.default.createElement("button",{disabled:!i,style:i?a.button:a.buttonDisabled,type:"submit"},"Upload")))}},30098:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.usePackageUpload=t.isError=t.isComplete=t.isLoading=t.ERROR=t.COMPLETE=t.PROGRESS=t.LOADING=void 0;var n=r(67294);function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,l,a=[],o=!0,u=!1;try{for(r=r.call(e);!(o=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);o=!0);}catch(e){u=!0,l=e}finally{try{o||null==r.return||r.return()}finally{if(u)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const o="hooks/LOADING";t.LOADING=o;const u="hooks/PROGRESS";t.PROGRESS=u;const i="hooks/COMPLETE";t.COMPLETE=i;const f="hooks/ERROR";t.ERROR=f,t.isLoading=e=>e.status===o,t.isComplete=e=>e.status===i,t.isError=e=>e.status===f;const c={status:void 0,response:void 0,error:void 0,progress:0},d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.type,n=t.response,l=t.progress,a=t.error;switch(r){case o:return{...e,status:o,response:void 0,error:void 0,progress:0};case i:return{...e,status:i,response:n,error:void 0,progress:0};case u:return{...e,progress:l};case f:return{...e,status:f,response:void 0,error:a,progress:0};default:return e}},s=()=>({type:o}),p=(e,t)=>({type:i,response:e,paths:t}),y=e=>({type:u,progress:e}),m=e=>({type:f,error:e}),v=async()=>"done";t.usePackageUpload=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.th,r=e.funcs,a=void 0===r?{}:r,o=a.uploadPackageFunc,u=void 0===o?v:o;const i=(0,n.useReducer)(d,c),f=l(i,2),g=f[0],b=f[1],E=(0,n.useState)({executing:!1,data:void 0,onDone:void 0}),O=l(E,2),h=O[0],w=O[1],j=(0,n.useCallback)((e=>{let t=e.data,r=e.onDone;return w({executing:!0,data:t,onDone:r})}),[]);return(0,n.useEffect)((()=>{if(!h.executing)return()=>null;if(!t)return()=>null;let e=!1;const r=new AbortController,n=r.signal;return async function(){b(s());try{const r=await u({signal:n,th:t,data:h.data});e||(b(y(50)),setTimeout((()=>{b(p(r)),h.onDone()}),1e3))}catch(t){e||b(m(t))}e||w({executing:!1,data:void 0,onDone:void 0})}(),()=>{e=!0,r.abort()}}),[h,u,t]),[g,j]}},737:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(67294)),l=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=c(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=l?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(72377)),a=d(r(66877)),o=d(r(17427)),u=d(r(49989)),i=d(r(63732)),f=d(r(89272));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(c=function(e){return e?r:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}t.default=()=>n.default.createElement("div",{style:u.default.application},n.default.createElement(a.default,null,n.default.createElement("div",{style:l.shadow})),n.default.createElement("div",{style:u.default.scrollingContainer},n.default.createElement("div",{style:u.default.sectionA},n.default.createElement(f.default,{title:"Progress trace"},n.default.createElement("p",null,"Some progress trace.."))),n.default.createElement("div",{style:u.default.sectionB},n.default.createElement(i.default,null)),n.default.createElement("div",{style:u.default.sectionC},n.default.createElement(f.default,{title:"New"},n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("p",null,"cisco-ios-cli-3.8"))))),n.default.createElement("div",{style:u.default.sectionD},n.default.createElement(f.default,{title:"Loaded"},n.default.createElement("ul",null,n.default.createElement("li",null,n.default.createElement("p",null,"cisco-ios-cli-3.7")),n.default.createElement("li",null,n.default.createElement("p",null,"cisco-ios-pft-3.1")),n.default.createElement("li",null,n.default.createElement("p",null,"cisco-ios-cli-3.1")),n.default.createElement("li",null,n.default.createElement("p",null,"cisco-ios-cli-3.7")),n.default.createElement("li",null,n.default.createElement("p",null,"cisco-ios-cli-3.7")))))),n.default.createElement(o.default,null))},49989:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=l(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(72377));function l(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(l=function(e){return e?r:t})(e)}var a={application:{...n.application,height:"100vh",display:"flex",flexFlow:"column",backgroundImage:n.pattern1},scrollingContainer:{overflow:"auto",flexGrow:"1",display:"grid",gridTemplateAreas:' "a b"  "a c" "a d" ',gridTemplateColumns:"1fr 1fr",gridTemplateRows:"auto 1fr 1fr",padding:"1rem",gridGap:"1rem"},sectionA:{gridArea:"a"},sectionB:{gridArea:"b"},sectionC:{gridArea:"c"},sectionD:{gridArea:"d"}};t.default=a},2674:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(45697)),a=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=l?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(72377)),o=i(r(99472));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function i(e){return e&&e.__esModule?e:{default:e}}const f={text:{...a.fontBold,color:a.color1,fontSize:a.large1}},c=e=>{let t=e.progress;const r=`${t}%`;return n.default.createElement("div",null,n.default.createElement("progress",{className:o.default.progressBar,max:"100",value:t}),n.default.createElement("p",{style:f.text},"Uploaded"," ",r))};c.propTypes={progress:l.default.number};var d=c;t.default=d},89272:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(67294)),l=i(r(45697)),a=function(e,t){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=l?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}return n.default=e,r&&r.set(e,n),n}(r(72377)),o=r(85987);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}function i(e){return e&&e.__esModule?e:{default:e}}const f=e=>{let t=e.title,r=e.children;return n.default.createElement("div",{style:{backgroundColor:a.color3,height:"100%"}},n.default.createElement("div",{style:o.packagesAndModules.headerContainer},n.default.createElement("p",{style:o.packagesAndModules.header},t)),n.default.createElement("div",{style:o.packagesAndModules.contentContainer},r))};f.propTypes={title:l.default.string,children:l.default.element};var c=f;t.default=c},99472:(e,t,r)=>{r.r(t),r.d(t,{default:()=>n});const n={progressBar:"pv71NiicKX8AFLNjnGd_"}}}]);