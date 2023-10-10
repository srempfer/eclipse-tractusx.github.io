"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[33814],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Fetching provider's Catalog",c={unversionedId:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/catalog",id:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/catalog",title:"Fetching provider's Catalog",description:"Old plain JSON Schema",source:"@site/docs-kits/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/5-catalog.md",sourceDirName:"kits/tractusx-edc/docs/samples/management-api-v2-walkthrough",slug:"/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/catalog",permalink:"/docs-kits/next/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/catalog",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"kits",previous:{title:"Creating a Contract Definition",permalink:"/docs-kits/next/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-definitions"},next:{title:"Initiation a Contract Negotiation",permalink:"/docs-kits/next/kits/tractusx-edc/docs/samples/management-api-v2-walkthrough/contract-negotiation"}},s={},l=[{value:"Old plain JSON Schema",id:"old-plain-json-schema",level:2},{value:"New JSON-LD Document",id:"new-json-ld-document",level:2},{value:"Request",id:"request",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fetching-providers-catalog"},"Fetching provider's Catalog"),(0,a.kt)("h2",{id:"old-plain-json-schema"},"Old plain JSON Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "protocol" : "ids-protocol-http",\n  "providerUrl": "<PROVIDER-URL>",\n  "querySpec": {\n    "offset": 0,\n    "limit": 100,\n    "filter": "",\n    "range": {\n      "from": 0,\n      "to": 100\n    },\n    "sortField": "",\n    "criterion": ""\n  }\n}\n')),(0,a.kt)("h2",{id:"new-json-ld-document"},"New JSON-LD Document"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note: In our samples, properties ",(0,a.kt)("strong",{parentName:"p"},"WILL NOT")," be explicitly namespaced, and internal nodes ",(0,a.kt)("strong",{parentName:"p"},"WILL NOT")," be typed, relying on ",(0,a.kt)("inlineCode",{parentName:"p"},"@vocab")," prefixing and root schema type inheritance respectively.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "@vocab": "https://w3id.org/edc/v0.0.1/ns/"\n  },\n  "protocol" : "dataspace-protocol-http",\n  "providerUrl": "<PROVIDER-URL>",\n  "querySpec": {\n    "offset": 0,\n    "limit": 100,\n    "filterExpression": {\n      "operandLeft": "<OPERAND-LEFT>",\n      "operator": "<OPERATOR>",\n      "operandRight": "<OPERAND-RIGHT>"\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"request"},"Request"),(0,a.kt)("p",null,"In this case we fetch a provider catalog."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "${MANAGEMENT_URL}/v2/catalog/request" \\\n    --header \'X-Api-Key: password\' \\\n    --header \'Content-Type: application/json\' \\\n    --data \'{\n              "@context": {\n                "vocab": "https://w3id.org/edc/v0.0.1/ns/"\n              },\n              "protocol" : "dataspace-protocol-http",\n              "providerUrl": "http://provider-control-plane:8282/api/v1/dsp",\n              "querySpec": {\n                "offset": 0,\n                "limit": 100\n              }\n            }\' \\\n    -s -o /dev/null -w \'Response Code: %{http_code}\\n\'\n')))}u.isMDXComponent=!0}}]);