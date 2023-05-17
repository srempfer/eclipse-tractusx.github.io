"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[1031],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),p=u(a),h=i,d=p["".concat(c,".").concat(h)]||p[h]||m[h]||o;return a?r.createElement(d,s(s({ref:t},l),{},{components:a})):r.createElement(d,s({ref:t},l))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=h;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n[p]="string"==typeof e?e:i,s[1]=n;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79025:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>k,default:()=>w,frontMatter:()=>x,metadata:()=>E,toc:()=>T});var r=a(87462),i=a(67294),o=a(3905);const s="card_WZH9",n="title_DDM3",c="subtitle_WbSt",u="card_description_OqDE",l="card_github_pQtU",p="card_contact_sq1N",m="version_i2ni",h="empty_ASPk";function d(e){let{productName:t,productDescription:a,githubRepo:r,committers:o,mailTo:d}=e;const[g,b]=(0,i.useState)();let f=r[0].split("/")[3],v=r[0].split("/")[4],y=d.split("?")[0];(0,i.useEffect)((()=>{fetch(`https://api.github.com/repos/${f}/${v}/releases/latest`,{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/vnd.github.html+json"}}).then((e=>e.json())).then((e=>{b(e.name)})).catch((e=>console.log(e)))}),[]);return i.createElement("div",{className:s},i.createElement("div",{className:n},i.createElement("h3",null,t)),i.createElement("div",{className:u},a.length>160?i.createElement("p",null,a.substring(0,160),"..."):i.createElement("p",null,a)),i.createElement("div",{className:c},i.createElement("h4",null,"GitHub")),i.createElement("hr",null),i.createElement("div",{className:l},i.createElement("strong",null,i.createElement("h5",null,"Repository:")),i.createElement("ul",null,r?.map(((e,t)=>i.createElement("li",{key:t},i.createElement("a",{href:e},e.substring(19,e.length)))))),i.createElement("strong",null,i.createElement("h5",null,"Committers:")),i.createElement("ul",null,o?.map(((e,t)=>i.createElement("li",{key:t},i.createElement("a",{href:e},`@${e.substring(19,e.length)}`)))))),i.createElement("div",{className:c},i.createElement("h4",null,"Contact")),i.createElement("hr",null),i.createElement("div",{className:p},i.createElement("h5",null,"Email:"),i.createElement("a",{href:`mailto:${d}`},y)),null!=g?i.createElement("div",{className:m},"Version:",(e=>{let t=e.toLowerCase();return t.startsWith("v")?t.slice(1):t})(g)):i.createElement("div",{className:h}))}const g=[{productName:"Business Partner Data Management",productDescription:"The project provides core services for querying, adding, and changing business partner data in the Catena-X data space. Currently, BPDM consists of the Pool and Gate API.",githubRepo:["https://github.com/eclipse-tractusx/bpdm"],committers:["https://github.com/nicoprow","https://github.com/pazepaze","https://github.com/Maximilianong"],mailTo:"tractusx-dev@eclipse.org?subject=Request Business Partner Data Management Team"},{productName:"IDS Essential Services",productDescription:"The project provides additional services to enable an IDSA-infrastructure within the Catena-X dataspace.",githubRepo:["https://github.com/eclipse-tractusx/daps-registration-service","https://github.com/eclipse-tractusx/daps-helm-chart","https://github.com/eclipse-tractusx/sd-factory","https://github.com/eclipse-tractusx/autosetup-backend"],committers:["https://github.com/wjost"],mailTo:"tractusx-dev@eclipse.org?subject=Request IDS Essential Services Team"},{productName:"Generic Data Services",productDescription:"The project provides an easy-to-use service which enables small and medium sized companies to provide their data in the Catena-X dataspace via an EDC (e.g., CSV-Upload).",githubRepo:["https://github.com/eclipse-tractusx/dft-backend","https://github.com/eclipse-tractusx/dft-frontend"],committers:["https://github.com/wjost"],mailTo:"tractusx-dev@eclipse.org?subject=Request Semantic Layer & Digital Twin Team"},{productName:"Item Relationship Service",productDescription:"The project provides a service for ad-hoc data chains across n-tier values chains for different use cases based on the EDC.",githubRepo:["https://github.com/eclipse-tractusx/item-relationship-service"],committers:["https://github.com/ds-jkreutzfeld","https://github.com/ds-jhartmann","https://github.com/ds-mkanal","https://github.com/jzbmw"],mailTo:"tractusx-dev@eclipse.org?subject=Request Item Relationship Service Team"},{productName:"Portal & Marketplaces",productDescription:"The project provides the entry point to the Catena-X data space for all participants such as registration and (technical) onboarding. Marketplaces enable solution providers to offer various business applications and services.",githubRepo:["https://github.com/eclipse-tractusx/portal-backend","https://github.com/eclipse-tractusx/portal-frontend","https://github.com/eclipse-tractusx/portal-iam","https://github.com/eclipse-tractusx/portal-frontend-registration","https://github.com/eclipse-tractusx/portal-cd","https://github.com/eclipse-tractusx/portal-assets"],committers:["https://github.com/evegufy","https://github.com/ntruchsess","https://github.com/oyo"],mailTo:"tractusx-dev@eclipse.org?subject=Request Portal and Marketplaces Team"},{productName:"Semantic Layer & Digital Twin",productDescription:"The project provides methods and tooling to build semantic models (e.g., semantic hub). In addition, it provides standards and services to manage digital twins.",githubRepo:["https://github.com/eclipse-tractusx/sldt-semantic-models","https://github.com/eclipse-tractusx/sldt-semantic-hub","https://github.com/eclipse-tractusx/sldt-digital-twin-registry"],committers:["https://github.com/bs-jokri","https://github.com/eriksven","https://github.com/LuLeRoemer","https://github.com/tunacicek"],mailTo:"tractusx-dev@eclipse.org?subject=Request Semantic Layer & Digital Twin Team"},{productName:"Trace-X",productDescription:"The project provides a business application for tracking parts along the supply chain. A high level of transparency across the supplier network enables faster intervention based on a recorded event in the supply chain.",githubRepo:["https://github.com/eclipse-tractusx/traceability-foss-backend","https://github.com/eclipse-tractusx/traceability-foss-frontend"],committers:["ds-mkanal"],mailTo:"tractusx-dev@eclipse.org?subject=Request Trace-X Team"},{productName:"Tractus-X EDC",productDescription:"The project provides the pre-built control- and data-plane docker images and helm charts of the Eclipse Dataspace Connector Project.",githubRepo:["https://github.com/eclipse-tractusx/tractusx-edc"],committers:["https://github.com/paullatzelsperger","https://github.com/florianrusch-zf"],mailTo:"tractusx-dev@eclipse.org?subject=Request Tractus-X EDC Team"}],b="product_overview_JsuP",f="container_BydQ",v="product_box_bVBa";function y(){return i.createElement("section",{className:b},i.createElement("div",{className:f},i.createElement("div",{className:v},g.map(((e,t)=>i.createElement(d,(0,r.Z)({key:t},e)))))))}const x={title:"Community"},k="Community",E={type:"mdx",permalink:"/community",source:"@site/src/pages/community.mdx",title:"Community",description:"We warmly welcome You to shape the automotive value chain of the next generation!",frontMatter:{title:"Community"}},T=[{value:"Communication Rules",id:"communication-rules",level:2},{value:"Products",id:"products",level:2}],j={toc:T};function w(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"community"},"Community"),(0,o.kt)("b",null,"We warmly welcome You to shape the automotive value chain of the next generation!"),(0,o.kt)("p",null,"The global Tractus-X community consists of a broad range of users, contributors, and committers from various companies (and individual actors) in the automotive value chain. We sincerely invite anyone to participate who wants to shape our architecture, reference implementations KITs for our Catena-X data space."),(0,o.kt)("h2",{id:"communication-rules"},"Communication Rules"),(0,o.kt)("p",null,"A pre-requisite for joining the Tractus-X communication channels is an Eclipse Foundation Account: ",(0,o.kt)("a",{parentName:"p",href:"https://accounts.eclipse.org/user/register?destination=user"},"https://accounts.eclipse.org/user/register?destination=user")),(0,o.kt)("p",null,"In addition, we encourage you to sign the Eclipse Contribution Agreement (ECA) to contribute to our Tractus-X project. For example, report and fix bugs or implement enhancements according to the Tractus-X roadmap. ",(0,o.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs/oss/how-to-contribute"},"https://eclipse-tractusx.github.io/docs/oss/how-to-contribute")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For a first contact")," please use our Tractus-X mailing list to get in touch with our community or a specific product team you want to contribute. ",(0,o.kt)("a",{parentName:"p",href:"mailto:tractusx-dev@eclipse.org"},"tractusx-dev@eclipse.org"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For quick and informal syncs")," please use our Matrix Chat to align on easy topics, ask questions, share a link or a bite-size piece of information. ",(0,o.kt)("a",{parentName:"p",href:"https://chat.eclipse.org/#/room/#tools.tractus-x:matrix.eclipse.org"},"https://chat.eclipse.org/#/room/#tools.tractus-x:matrix.eclipse.org"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For product alignments")," please set up a meeting with a tool of your choice as a project manager. The preparation of meeting minutes is not required. Recurring formal meetings must be communicated via our Tractus-X mailing list.\nAd hoc informal meetings may be organized without prior notice.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"For cross-product alignments")," the Catena-X Association is currently preparing various committees to support the coordination of the open-source products and repositories. The goal of a committee is to discuss, define and create a common vision, roadmap, standards, architecture, KITs, etc."))),(0,o.kt)("h2",{id:"products"},"Products"),(0,o.kt)(y,{mdxType:"ProductOverview"}))}w.isMDXComponent=!0}}]);