"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[7222],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(i),d=n,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return i?a.createElement(f,s(s({ref:t},p),{},{components:i})):a.createElement(f,s({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},59692:(e,t,i)=>{i.d(t,{Z:()=>s});var a=i(67294),n=i(39960);const r={kits_gallery:"kits_gallery_PBz0",container:"container_VBxV",title_container:"title_container_GoEm",title:"title_avJK",description:"description_wRfv",gallery_container:"gallery_container_KZr1",gallery_item:"gallery_item_Cgm7",item_img:"item_img_RiWv",developer_kits:"developer_kits_RGm5"};function s(e){let{itemsArray:t}=e;return a.createElement("section",{className:r.kits_gallery},a.createElement("div",{className:r.container},a.createElement("div",{className:r.title_container},a.createElement("h2",{className:r.title},"Preview of our Kits"),a.createElement("p",{className:r.description},"Unlock the power of kits. Browse the latest kits, their documentation, ",a.createElement("br",null),"including tutorials,sample code, articles, and API reference.")),a.createElement("div",{className:r.gallery_container},t.map(((e,t)=>a.createElement("div",{key:t,className:r.gallery_item},a.createElement(n.Z,{to:e.pageRoute,className:r.gallery_link},a.createElement("img",{src:e.img,className:r.item_img}))))))))}},5799:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=i(87462),n=(i(67294),i(3905)),r=i(59692);i(88063),i(77425),i(62655),i(47928);const s=[{id:1,img:i.p+"assets/images/MaaSKIT-ab49344ce122f57af93c1c4bf6fae955.png",pageRoute:"/docs/Resiliency/Manufacturing%20as%20a%20service/maas"},{id:2,img:i.p+"assets/images/OSimKIT-10f4dbd2c15cd47f8c7e2e64a2690648.png",pageRoute:"/aboutus"},{id:3,img:i.p+"assets/images/PURISKIT-dad63e9c6e350a7646586258c5dd252f.png",pageRoute:"/aboutus"},{id:4,img:i.p+"assets/images/MPKIT-1b5e6bd9cfaf102344131311935b17a7.png",pageRoute:"/aboutus"}],o={id:"resiliency",title:"Resiliency"},l=void 0,c={unversionedId:"Resiliency/resiliency",id:"Resiliency/resiliency",title:"Resiliency",description:"Business Domain Resiliency",source:"@site/docs/Resiliency/resiliency.mdx",sourceDirName:"Resiliency",slug:"/Resiliency/",permalink:"/docs/Resiliency/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/Resiliency/resiliency.mdx",tags:[],version:"current",frontMatter:{id:"resiliency",title:"Resiliency"},sidebar:"Resiliency",next:{title:"MP Kit",permalink:"/docs/Resiliency/mp kit"}},p={},u=[{value:"Business Domain Resiliency",id:"business-domain-resiliency",level:2},{value:"What&#39;s in?",id:"whats-in",level:3}],m={toc:u};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"business-domain-resiliency"},"Business Domain Resiliency"),(0,n.kt)("h3",{id:"whats-in"},"What's in?"),(0,n.kt)("p",null,"The Business Domain Resiliency contains five use cases of Catena-X:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Demand and Capacity Management (DCM)"),(0,n.kt)("li",{parentName:"ul"},"Predictive Unit Real-Time Information Service (PURIS)"),(0,n.kt)("li",{parentName:"ul"},"Manufacturing-as-a-Service (MaaS)"),(0,n.kt)("li",{parentName:"ul"},"Online Control and Simulation (OSim)"),(0,n.kt)("li",{parentName:"ul"},"Modular Production (MP)")),(0,n.kt)("p",null,"For each of these use cases a specific kit is prepared which are available here in the resiliency kit area."),(0,n.kt)("p",null,"The kits in the resiliency kit area enables you, especially as a provider for software services, applications and solutions, to realize offerings in a Catena-X compliant way. The kits includes, among others, information about"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"vision & mission"),(0,n.kt)("li",{parentName:"ul"},"semantic models as prerequisite for standardized and interoperable data exchange"),(0,n.kt)("li",{parentName:"ul"},"defintion of software APIs as well as"),(0,n.kt)("li",{parentName:"ul"},"open source code")),(0,n.kt)("p",null,"of each use case."),(0,n.kt)("p",null,"The Resiliency Kit area is continuously under development and future extensions and improvements will help you to adopt or extend functionality even faster."),(0,n.kt)("p",null,"The strengthen of resiliency of the supply chain and related shopfloor processes is a main focus in our business domain. We look at the supply chain from the Tier-n supplier to the automotive OEM and of course backwards too. Our applications are based on a cooperative concept. This means that the applications executed on each tier level are based on information obtained from one tier level up or one level down. This exchanged information is (and will be in next month step by step) standardized for each of our use cases. By executing the application (or a Catena-X compatible application for the specific use case from a different software provider - maybe realized from your company) on each tier level the supply chain over spanning task can be solved. Some of our use cases have an effect on the shop floor. For example, changed customer demands can lead to adjustments in manufacturing or vice versa changed production capacities, captured by information and operation technology on the shopfloor, can have impact to the supply chain. The linked usage of our use case application will offer an extended business value for all partners in the supply chain."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Resiliency-Image",src:i(22993).Z,width:"2870",height:"1269"})),(0,n.kt)(r.Z,{itemsArray:s,mdxType:"KitsGallery"}))}d.isMDXComponent=!0},88063:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/gallery-business-partner-kit-minified-295669d2386d6df865780aea1e51bc07.png"},62655:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/gallery-conector-kit-minified-7dbcebc3a2f662b0ead8e0759feaa5be.png"},77425:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/gallery-data-chain-kit-minified-fbc77279f0ab4f8fa0185c34c9f52383.png"},47928:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/gallery-more_coming-minified-4a5a193d63f1f2847326f6694009cca7.png"},22993:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/Resiliency-Domain-Image-3b9db46ef18e4fecadda603c371cb6c4.jpg"}}]);