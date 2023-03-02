"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(g,a(a({ref:t},p),{},{components:n})):o.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<r;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),i=(n(67294),n(3905));const r={},a="Migration Version 0.1.0 to 0.1.1",c={unversionedId:"kits/product-edc/docs/migration/Version_0.1.0_0.1.1",id:"kits/product-edc/docs/migration/Version_0.1.0_0.1.1",title:"Migration Version 0.1.0 to 0.1.1",description:"This document contains a list of breaking changes that are introduced in version 0.1.1.",source:"@site/docs/kits/product-edc/docs/migration/Version_0.1.0_0.1.1.md",sourceDirName:"kits/product-edc/docs/migration",slug:"/kits/product-edc/docs/migration/Version_0.1.0_0.1.1",permalink:"/docs/kits/product-edc/docs/migration/Version_0.1.0_0.1.1",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/product-edc/docs/migration/Version_0.1.0_0.1.1.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Migration Version 0.0.x to 0.1.x",permalink:"/docs/kits/product-edc/docs/migration/Version_0.0.x_0.1.x"},next:{title:"Migration Version 0.1.2 to 0.1.3",permalink:"/docs/kits/product-edc/docs/migration/Version_0.1.2_0.1.3"}},s={},l=[{value:"0. Summary",id:"0-summary",level:2},{value:"1. Data Management API",id:"1-data-management-api",level:2},{value:"1.1 Policy Payload",id:"11-policy-payload",level:3},{value:"2. Connector Configuration",id:"2-connector-configuration",level:2},{value:"2.1. CX OAuth Extension",id:"21-cx-oauth-extension",level:3}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-version-010-to-011"},"Migration Version 0.1.0 to 0.1.1"),(0,i.kt)("p",null,"This document contains a list of breaking changes that are introduced in version 0.1.1."),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please Note"),":\nDue to a change in the DAPS authentication mechanism this version cannot exchange messages with older EDC versions!"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"0-summary"},"0. Summary"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Data Management API",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Policy Payload"))),(0,i.kt)("li",{parentName:"ol"},"Connector Configuration",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"CX OAuth Extension")))),(0,i.kt)("h2",{id:"1-data-management-api"},"1. Data Management API"),(0,i.kt)("p",null,"It might be necessary to update applications and scripts that use the Data Management API. This section covers the most\nimportant changes in endpoints and payloads."),(0,i.kt)("h3",{id:"11-policy-payload"},"1.1 Policy Payload"),(0,i.kt)("p",null,"The id field of the PolicyDefinition was renamed from ",(0,i.kt)("inlineCode",{parentName:"p"},"uid")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("p",null,"Old Call"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "uid": "1",\n    "policy": {\n        "prohibitions": [],\n        "obligations": [],\n        "permissions": [\n            {\n                "edctype": "dataspaceconnector:permission",\n                "action": {\n                    "type": "USE"\n                },\n                "constraints": []\n            }\n        ]\n    }\n}\n')),(0,i.kt)("p",null,"New call"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1",\n    "policy": {\n        "prohibitions": [],\n        "obligations": [],\n        "permissions": [\n            {\n                "edctype": "dataspaceconnector:permission",\n                "action": {\n                    "type": "USE"\n                },\n                "constraints": []\n            }\n        ]\n    }\n}\n'))),(0,i.kt)("h2",{id:"2-connector-configuration"},"2. Connector Configuration"),(0,i.kt)("h3",{id:"21-cx-oauth-extension"},"2.1. CX OAuth Extension"),(0,i.kt)("p",null,"All connectors are now shipped with a new OAuth extension. This extension has an additional mandatory setting called ",(0,i.kt)("inlineCode",{parentName:"p"},"edc.ids.endpoint.audience"),", that must be set to the IDS path."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/kits/product-edc/edc-extensions/cx-oauth2/"},"Documentation")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"edc.ids.endpoint.audience=http://plato-edc-controlplane:8282/api/v1/ids/data\n"))))}d.isMDXComponent=!0}}]);