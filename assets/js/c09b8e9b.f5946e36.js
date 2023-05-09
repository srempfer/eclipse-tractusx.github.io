"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5779],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38333:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={title:"TRG 7.00 - Recurring activities for each PR"},l=void 0,o={unversionedId:"release/trg-7/trg-7-00",id:"release/trg-7/trg-7-00",title:"TRG 7.00 - Recurring activities for each PR",description:"| Status | Created     | Post-History  |",source:"@site/docs/release/trg-7/trg-7-00.md",sourceDirName:"release/trg-7",slug:"/release/trg-7/trg-7-00",permalink:"/docs/release/trg-7/trg-7-00",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-7/trg-7-00.md",tags:[],version:"current",frontMatter:{title:"TRG 7.00 - Recurring activities for each PR"},sidebar:"developer",previous:{title:"TRG 6.01 - Released Helm Chart",permalink:"/docs/release/trg-6/trg-6-1"},next:{title:"TRG 7.01 - Legal Documentation",permalink:"/docs/release/trg-7/trg-7-01"}},s={},c=[{value:"Why",id:"why",level:2},{value:"Description",id:"description",level:2},{value:"Keep the following updated when creating a CatenaX / Tractus-X relevant release tag",id:"keep-the-following-updated-when-creating-a-catenax--tractus-x-relevant-release-tag",level:3},{value:"Keep the following updated for each pull request to the default branch (main)",id:"keep-the-following-updated-for-each-pull-request-to-the-default-branch-main",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Created"),(0,n.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Draft"),(0,n.kt)("td",{parentName:"tr",align:null},"13-Apr-2023"),(0,n.kt)("td",{parentName:"tr",align:null},"Moved from OSS Development")))),(0,n.kt)("h2",{id:"why"},"Why"),(0,n.kt)("p",null,"Eclipse Tractus-X is an open source project hosted by the Eclipse Foundation licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://spdx.org/licenses/Apache-2.0"},"Apache License 2.0"),". The legal obligations of the content must be observed in all forms of which the content is available."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The requirements described here must be met for each contribution.")),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"This is a summary of the most important requirements for OSS governance that you must follow.\nBefore submitting a PR, contributors should verify compliance with the requirements. The reviewing commiter can only accept a PR if it is compliant."),(0,n.kt)("h3",{id:"keep-the-following-updated-when-creating-a-catenax--tractus-x-relevant-release-tag"},"Keep the following updated when creating a CatenaX / Tractus-X relevant release tag"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"all requirements listed below"),(0,n.kt)("li",{parentName:"ul"},"IP checks for 3rd party content: ",(0,n.kt)("strong",{parentName:"li"},"ALL"),' 3rd party content has the be approved by the Eclipse Foundation => in the DEPENDENCIES are only libraries with status "approved"')),(0,n.kt)("h3",{id:"keep-the-following-updated-for-each-pull-request-to-the-default-branch-main"},"Keep the following updated for each pull request to the default branch (main)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Legal Documentation: ",(0,n.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-01"},"TRG 7.01")),(0,n.kt)("li",{parentName:"ul"},"License and copyright header: ",(0,n.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-02"},"TRG 7.02"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"must be present in every file if possible"),(0,n.kt)("li",{parentName:"ul"},"update the year in the copyright section at the beginning of each new year"))),(0,n.kt)("li",{parentName:"ul"},"IP checks for project content: ",(0,n.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-03"},"TRG 7.03"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"for each PR containing more than 1000 relevant lines there ",(0,n.kt)("strong",{parentName:"li"},"must")," be an approved ",(0,n.kt)("a",{parentName:"li",href:"/docs/oss/issues#eclipse-gitlab-ip-issue-tracker"},"IP review for Code Contributions")," before the contribution can be pushed/merged"))),(0,n.kt)("li",{parentName:"ul"},"IP checks for 3rd party content: ",(0,n.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-04"},"TRG 7.04"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"DEPENDENCIES file is up-to-date and reflects the current use of the 3rd party content"),(0,n.kt)("li",{parentName:"ul"},'all libraries listed there should have the status "approved"'),(0,n.kt)("li",{parentName:"ul"},'no libraries with status "rejected"'),(0,n.kt)("li",{parentName:"ul"},'for libraries with status "restricted", the according IP issues must be present (issue number in the source column)'))),(0,n.kt)("li",{parentName:"ul"},"Legal information for distributions: ",(0,n.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-05"},"TRG 7.05")),(0,n.kt)("li",{parentName:"ul"},"Legal notice for end user content: ",(0,n.kt)("a",{parentName:"li",href:"/docs/release/trg-7/trg-7-06"},"TRG 7.06"))))}u.isMDXComponent=!0}}]);