"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[59981],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=l(o),d=n,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return o?r.createElement(h,s(s({ref:t},p),{},{components:o})):r.createElement(h,s({ref:t},p))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[u]="string"==typeof e?e:n,s[1]=a;for(var l=2;l<i;l++)s[l]=o[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},34667:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={title:"How to contribute",sidebar_position:20},s=void 0,a={unversionedId:"oss/how-to-contribute",id:"oss/how-to-contribute",title:"How to contribute",description:"Contributing to the Eclipse Tractus-X project means code, documentation, creating and solving issues (bugs), answering",source:"@site/docs/oss/how-to-contribute.md",sourceDirName:"oss",slug:"/oss/how-to-contribute",permalink:"/docs/oss/how-to-contribute",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/oss/how-to-contribute.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"How to contribute",sidebar_position:20},sidebar:"docs",previous:{title:"Open Source Development",permalink:"/docs/category/open-source-development"},next:{title:"Code reviews",permalink:"/docs/oss/code-reviews"}},c={},l=[{value:"Repo permissions",id:"repo-permissions",level:2},{value:"Code",id:"code",level:2},{value:"Documentation",id:"documentation",level:2},{value:"Dev Mailinglist",id:"dev-mailinglist",level:2},{value:"Reporting Issues",id:"reporting-issues",level:2}],p={toc:l};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Contributing to the Eclipse Tractus-X project means code, documentation, creating and solving issues (bugs), answering\nquestions in public systems e.g. on the dev mailing list to support the community in an open and transparent way. See\nalso the ",(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#contributing"},"Eclipse Foundation Project Handbook"),"."),(0,n.kt)("p",null,"This page will contain guidelines and good practices on contributions to Eclipse Tractus-X."),(0,n.kt)("h2",{id:"repo-permissions"},"Repo permissions"),(0,n.kt)("p",null,'All Eclipse Tractus-X repositories are publicly visible, so everybody can read repository contents.\nWrite permissions are only granted to people with the "Committer role".\nSee the ',(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#roles-cm"},"Committer role description in the Handbook"),", or read through\n",(0,n.kt)("a",{parentName:"p",href:"/docs/oss/contributor-committer"},"our own summary of Eclipse Foundation project roles"),"."),(0,n.kt)("h2",{id:"code"},"Code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do all reviews and PRs in Tractus-X repositories, if this is done on fork, there is a leak in openess and\ntransparency."),(0,n.kt)("li",{parentName:"ul"},"Write meaningful and descriptive commit messages, look for example ",(0,n.kt)("a",{parentName:"li",href:"https://cbea.ms/git-commit/"},"here"),"\n, ",(0,n.kt)("a",{parentName:"li",href:"https://medium.com/better-programming/your-git-commit-history-should-read-like-a-history-book-heres-how-7f44d5df1801"},"here"),"\nor here for ",(0,n.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional committs"),"."),(0,n.kt)("li",{parentName:"ul"},"Avoid references to closed systems, as this is not tracable for newcomers.")),(0,n.kt)("h2",{id:"documentation"},"Documentation"),(0,n.kt)("p",null,"Same recommendations like for code contributions."),(0,n.kt)("h2",{id:"dev-mailinglist"},"Dev Mailinglist"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#resources-dev-list"},"dev mailinglist")," is the official channel for project\ncommunication, use it for questions, announcing news or discuss relevant topics."),(0,n.kt)("p",null,"All of the answers don\u2019t need to necessarily come from project committers: empower your community to answer questions.\nWhen community members do provide answers that require further clarification (either they are not complete, or are not\n100% correct), do so politely. The more welcome you make your community feel, the more likely it is that your project\nwill be successful."),(0,n.kt)("p",null,"Mail address: ",(0,n.kt)("a",{parentName:"p",href:"mailto:tractusx-dev@eclipse.org"},"tractusx-dev@eclipse.org")),(0,n.kt)("p",null,"Every contributor should be subscribed to\nthe ",(0,n.kt)("a",{parentName:"p",href:"https://accounts.eclipse.org/mailing-list/tractusx-dev"},"Eclipse Tractus-X Developer Mailingliste"),". Committers have\nto be subscribed to the list and are added automatically when gaining the committer status."),(0,n.kt)("h2",{id:"reporting-issues"},"Reporting Issues"),(0,n.kt)("p",null,"If you find a bug or you have a request or proposal for e.g. a new feature, open an issue. This is an important part of\ndoing development in an open and transparent way and is also used for documentation.\nMore ",(0,n.kt)("a",{parentName:"p",href:"/docs/oss/issues"},"information about the different issue tracker"),"."),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/projects/handbook/#community-issues"},"Handbook")))}u.isMDXComponent=!0}}]);