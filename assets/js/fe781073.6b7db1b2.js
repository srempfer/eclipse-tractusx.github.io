"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[45848],{3905:(M,e,N)=>{N.d(e,{Zo:()=>u,kt:()=>a});var I=N(67294);function i(M,e,N){return e in M?Object.defineProperty(M,e,{value:N,enumerable:!0,configurable:!0,writable:!0}):M[e]=N,M}function t(M,e){var N=Object.keys(M);if(Object.getOwnPropertySymbols){var I=Object.getOwnPropertySymbols(M);e&&(I=I.filter((function(e){return Object.getOwnPropertyDescriptor(M,e).enumerable}))),N.push.apply(N,I)}return N}function D(M){for(var e=1;e<arguments.length;e++){var N=null!=arguments[e]?arguments[e]:{};e%2?t(Object(N),!0).forEach((function(e){i(M,e,N[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(N)):t(Object(N)).forEach((function(e){Object.defineProperty(M,e,Object.getOwnPropertyDescriptor(N,e))}))}return M}function j(M,e){if(null==M)return{};var N,I,i=function(M,e){if(null==M)return{};var N,I,i={},t=Object.keys(M);for(I=0;I<t.length;I++)N=t[I],e.indexOf(N)>=0||(i[N]=M[N]);return i}(M,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(M);for(I=0;I<t.length;I++)N=t[I],e.indexOf(N)>=0||Object.prototype.propertyIsEnumerable.call(M,N)&&(i[N]=M[N])}return i}var g=I.createContext({}),c=function(M){var e=I.useContext(g),N=e;return M&&(N="function"==typeof M?M(e):D(D({},e),M)),N},u=function(M){var e=c(M.components);return I.createElement(g.Provider,{value:e},M.children)},z="mdxType",A={inlineCode:"code",wrapper:function(M){var e=M.children;return I.createElement(I.Fragment,{},e)}},T=I.forwardRef((function(M,e){var N=M.components,i=M.mdxType,t=M.originalType,g=M.parentName,u=j(M,["components","mdxType","originalType","parentName"]),z=c(N),T=i,a=z["".concat(g,".").concat(T)]||z[T]||A[T]||t;return N?I.createElement(a,D(D({ref:e},u),{},{components:N})):I.createElement(a,D({ref:e},u))}));function a(M,e){var N=arguments,i=e&&e.mdxType;if("string"==typeof M||i){var t=N.length,D=new Array(t);D[0]=T;var j={};for(var g in e)hasOwnProperty.call(e,g)&&(j[g]=e[g]);j.originalType=M,j[z]="string"==typeof M?M:i,D[1]=j;for(var c=2;c<t;c++)D[c]=N[c];return I.createElement.apply(null,D)}return I.createElement.apply(null,N)}T.displayName="MDXCreateElement"},93573:(M,e,N)=>{N.r(e),N.d(e,{assets:()=>g,contentTitle:()=>D,default:()=>z,frontMatter:()=>t,metadata:()=>j,toc:()=>c});var I=N(87462),i=(N(67294),N(3905));const t={sidebar_position:1,title:"Operation View",description:"Operation View",id:"connector_kit_operation_view"},D=void 0,j={unversionedId:"kits/Connector Kit/Operation View/connector_kit_operation_view",id:"kits/Connector Kit/Operation View/connector_kit_operation_view",title:"Operation View",description:"Operation View",source:"@site/docs-kits/kits/Connector Kit/Operation View/operation-view.md",sourceDirName:"kits/Connector Kit/Operation View",slug:"/kits/Connector Kit/Operation View/connector_kit_operation_view",permalink:"/docs-kits/next/kits/Connector Kit/Operation View/connector_kit_operation_view",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Operation View",description:"Operation View",id:"connector_kit_operation_view"},sidebar:"kits",previous:{title:"Architecture",permalink:"/docs-kits/next/kits/Connector Kit/Development View/connector_kit_development_view_architecture"},next:{title:"Data Chain KIT",permalink:"/docs-kits/next/category/data-chain-kit"}},g={},c=[{value:"Reference Implementation",id:"reference-implementation",level:2},{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Deployment Resources",id:"deployment-resources",level:2},{value:"TractusX Helm Charts",id:"tractusx-helm-charts",level:3},{value:"Minimum Viable Dataspace",id:"minimum-viable-dataspace",level:3},{value:"Deployment Guide",id:"deployment-guide",level:3},{value:"Notice",id:"notice",level:2}],u={toc:c};function z(M){let{components:e,...t}=M;return(0,i.kt)("wrapper",(0,I.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connector kit banner",src:N(42324).Z,width:"285",height:"245"})),(0,i.kt)("h2",{id:"reference-implementation"},"Reference Implementation"),(0,i.kt)("p",null,"The reference implementation for the Connector kit is the  ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector"},"Eclipse Dataspace Connector"),".\nFurthermore, it assumes the usage of a deployable EDC as provided by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"Tractus-X EDC"),"."),(0,i.kt)("h2",{id:"configuration-parameters"},"Configuration Parameters"),(0,i.kt)("p",null,"The EDC requires a few parameters for configuration.\nThey are detailed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/tree/main/charts/tractusx-connector#configure-the-chart"},"here"),"."),(0,i.kt)("h2",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"For a summary of the architecture surrounding a Controller, take a look at the Development View's ",(0,i.kt)("a",{parentName:"p",href:"/docs-kits/next/kits/Connector%20Kit/Development%20View/connector_kit_development_view_architecture"},"architecture page"),"."),(0,i.kt)("h2",{id:"deployment-resources"},"Deployment Resources"),(0,i.kt)("h3",{id:"tractusx-helm-charts"},"TractusX Helm Charts"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/"},"Helm charts")," provided by TractusX form the basis for a deployable EDC.\nThe default configuration can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/tractusx-edc/blob/main/charts/README.md"},"here"),".\nThis configuration assumes a database for persistence and Hashicorp Vault for secret storage.\nOther configurations are available in the same repository."),(0,i.kt)("h3",{id:"minimum-viable-dataspace"},"Minimum Viable Dataspace"),(0,i.kt)("p",null,"A minimal setup using ",(0,i.kt)("a",{parentName:"p",href:"https://developer.hashicorp.com/terraform"},"Terraform")," is available in the form of the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/MinimumViableDataspace"},"Minimum Viable Dataspace"),"."),(0,i.kt)("p",null,"Documentation on it can be found ",(0,i.kt)("a",{parentName:"p",href:"https://eclipse-edc.github.io/docs/#/submodule/MinimumViableDataspace/"},"here"),"."),(0,i.kt)("h3",{id:"deployment-guide"},"Deployment Guide"),(0,i.kt)("p",null,"Specific configuration details are described more closely in the\n",(0,i.kt)("a",{parentName:"p",href:"https://eclipse-tractusx.github.io/docs/tutorials/e2e/connect/deployComponents/"},"Deployment Guide"),"."),(0,i.kt)("h2",{id:"notice"},"Notice"),(0,i.kt)("p",null,"This work is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,i.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Contributors of the Eclipse Foundation"),(0,i.kt)("li",{parentName:"ul"},"Source\nURL: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}z.isMDXComponent=!0},42324:(M,e,N)=>{N.d(e,{Z:()=>I});const I="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjg1IiBoZWlnaHQ9IjI0NSIgdmlld0JveD0iMCAwIDI4NSAyNDUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF8xXzE5NykiPgo8cGF0aCBkPSJNMTIyLjc1OSA5MS42MTQxQzEzMy40MTcgODUuNDYxNiAxNTAuNjk2IDg1LjQ2MTYgMTYxLjM1MyA5MS42MTQxTDI1NC4wNTYgMTQ1LjEzMUMyNjQuNzEzIDE1MS4yODQgMjY0LjcxMyAxNjEuMjU5IDI1NC4wNTYgMTY3LjQxMkwxNjEuMzUzIDIyMC45MjlDMTUwLjY5NiAyMjcuMDgyIDEzMy40MTcgMjI3LjA4MiAxMjIuNzU5IDIyMC45MjlMMzAuMDU2NSAxNjcuNDEyQzE5LjM5OSAxNjEuMjU5IDE5LjM5OSAxNTEuMjg0IDMwLjA1NjQgMTQ1LjEzMUwxMjIuNzU5IDkxLjYxNDFaIiBmaWxsPSIjNzZEOEY4IiBmaWxsLW9wYWNpdHk9IjAuOSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1My4wOTEgMTU3Ljg4OEwxNjAuMzg4IDEwNC4zN0MxNTAuMjY0IDk4LjUyNTQgMTMzLjg0OSA5OC41MjU0IDEyMy43MjQgMTA0LjM3TDMxLjAyMTQgMTU3Ljg4OEMyMC44OTY4IDE2My43MzIgMjAuODk2OCAxNzMuMjA5IDMxLjAyMTQgMTc5LjA1NEwxMjMuNzI0IDIzMi41NzFDMTMzLjg0OSAyMzguNDE2IDE1MC4yNjQgMjM4LjQxNiAxNjAuMzg4IDIzMi41NzFMMjUzLjA5MSAxNzkuMDU0QzI2My4yMTYgMTczLjIwOSAyNjMuMjE2IDE2My43MzIgMjUzLjA5MSAxNTcuODg4Wk0xNjEuMzUzIDEwMy44MTNDMTUwLjY5NiA5Ny42NjA4IDEzMy40MTcgOTcuNjYwOCAxMjIuNzU5IDEwMy44MTNMMzAuMDU2NSAxNTcuMzMxQzE5LjM5OTEgMTYzLjQ4MyAxOS4zOTkxIDE3My40NTggMzAuMDU2NSAxNzkuNjExTDEyMi43NTkgMjMzLjEyOEMxMzMuNDE3IDIzOS4yODEgMTUwLjY5NiAyMzkuMjgxIDE2MS4zNTMgMjMzLjEyOEwyNTQuMDU2IDE3OS42MTFDMjY0LjcxMyAxNzMuNDU4IDI2NC43MTMgMTYzLjQ4MyAyNTQuMDU2IDE1Ny4zMzFMMTYxLjM1MyAxMDMuODEzWiIgZmlsbD0iIzc2RDhGOCIvPgo8cGF0aCBkPSJNMTIzLjM3NiA2NC40NzQ0QzEzNC4wMzMgNTguMzIxOCAxNTEuMzEyIDU4LjMyMTggMTYxLjk3IDY0LjQ3NDRMMjU0LjY3MiAxMTcuOTkyQzI2NS4zMyAxMjQuMTQ0IDI2NS4zMyAxMzQuMTE5IDI1NC42NzIgMTQwLjI3MkwxNjEuOTcgMTkzLjc4OUMxNTEuMzEyIDE5OS45NDIgMTM0LjAzMyAxOTkuOTQyIDEyMy4zNzYgMTkzLjc4OUwzMC42NzMgMTQwLjI3MkMyMC4wMTU2IDEzNC4xMTkgMjAuMDE1NSAxMjQuMTQ0IDMwLjY3MyAxMTcuOTkyTDEyMy4zNzYgNjQuNDc0NFoiIGZpbGw9IiM1N0M2RjUiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxnIGZpbHRlcj0idXJsKCNmaWx0ZXIwX2RkZGRkXzFfMTk3KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjcwNyAxMzAuNzQ4TDE2MS4wMDUgNzcuMjMwN0MxNTAuODggNzEuMzg1OCAxMzQuNDY1IDcxLjM4NTggMTI0LjM0IDc3LjIzMDdMMzEuNjM3OCAxMzAuNzQ4QzIxLjUxMzMgMTM2LjU5MyAyMS41MTMzIDE0Ni4wNjkgMzEuNjM3OSAxNTEuOTE0TDEyNC4zNDEgMjA1LjQzMkMxMzQuNDY1IDIxMS4yNzYgMTUwLjg4IDIxMS4yNzYgMTYxLjAwNSAyMDUuNDMyTDI1My43MDcgMTUxLjkxNEMyNjMuODMyIDE0Ni4wNjkgMjYzLjgzMiAxMzYuNTkzIDI1My43MDcgMTMwLjc0OFpNMTYxLjk3IDc2LjY3MzdDMTUxLjMxMiA3MC41MjEyIDEzNC4wMzMgNzAuNTIxMiAxMjMuMzc2IDc2LjY3MzdMMzAuNjczIDEzMC4xOTFDMjAuMDE1NSAxMzYuMzQ0IDIwLjAxNTYgMTQ2LjMxOSAzMC42NzMgMTUyLjQ3MUwxMjMuMzc2IDIwNS45ODlDMTM0LjAzMyAyMTIuMTQxIDE1MS4zMTIgMjEyLjE0MSAxNjEuOTcgMjA1Ljk4OUwyNTQuNjcyIDE1Mi40NzFDMjY1LjMzIDE0Ni4zMTkgMjY1LjMzIDEzNi4zNDQgMjU0LjY3MiAxMzAuMTkxTDE2MS45NyA3Ni42NzM3WiIgZmlsbD0iIzU3QzZGNSIvPgo8L2c+CjxwYXRoIGQ9Ik0xMjMuMzc2IDM4LjU2NjdDMTM0LjAzMyAzMi40MTQyIDE1MS4zMTIgMzIuNDE0MiAxNjEuOTcgMzguNTY2N0wyNTQuNjcyIDkyLjA4NEMyNjUuMzMgOTguMjM2NSAyNjUuMzMgMTA4LjIxMiAyNTQuNjcyIDExNC4zNjRMMTYxLjk3IDE2Ny44ODJDMTUxLjMxMiAxNzQuMDM0IDEzNC4wMzMgMTc0LjAzNCAxMjMuMzc2IDE2Ny44ODJMMzAuNjczIDExNC4zNjRDMjAuMDE1NiAxMDguMjEyIDIwLjAxNTUgOTguMjM2NSAzMC42NzMgOTIuMDg0TDEyMy4zNzYgMzguNTY2N1oiIGZpbGw9IiM1N0IzRjUiIGZpbGwtb3BhY2l0eT0iMC45Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjcwOCAxMDQuODRMMTYxLjAwNSA1MS4zMjI5QzE1MC44OCA0NS40NzggMTM0LjQ2NSA0NS40NzggMTI0LjM0MSA1MS4zMjI5TDMxLjYzNzkgMTA0Ljg0QzIxLjUxMzMgMTEwLjY4NSAyMS41MTMzIDEyMC4xNjIgMzEuNjM3OSAxMjYuMDA2TDEyNC4zNDEgMTc5LjUyNEMxMzQuNDY1IDE4NS4zNjkgMTUwLjg4IDE4NS4zNjkgMTYxLjAwNSAxNzkuNTI0TDI1My43MDggMTI2LjAwNkMyNjMuODMyIDEyMC4xNjIgMjYzLjgzMiAxMTAuNjg1IDI1My43MDggMTA0Ljg0Wk0xNjEuOTcgNTAuNzY1OUMxNTEuMzEyIDQ0LjYxMzMgMTM0LjAzMyA0NC42MTMzIDEyMy4zNzYgNTAuNzY1OUwzMC42NzMgMTA0LjI4M0MyMC4wMTU2IDExMC40MzYgMjAuMDE1NiAxMjAuNDExIDMwLjY3MyAxMjYuNTYzTDEyMy4zNzYgMTgwLjA4MUMxMzQuMDMzIDE4Ni4yMzMgMTUxLjMxMiAxODYuMjMzIDE2MS45NyAxODAuMDgxTDI1NC42NzIgMTI2LjU2M0MyNjUuMzMgMTIwLjQxMSAyNjUuMzMgMTEwLjQzNiAyNTQuNjcyIDEwNC4yODNMMTYxLjk3IDUwLjc2NTlaIiBmaWxsPSIjNTdCM0Y1Ii8+CjxwYXRoIGQ9Ik0xMjMuMzc2IDExLjQyNjFDMTM0LjAzMyA1LjI3MzUyIDE1MS4zMTIgNS4yNzM1MSAxNjEuOTcgMTEuNDI2MUwyNTQuNjczIDY0Ljk0MzNDMjY1LjMzIDcxLjA5NTggMjY1LjMzIDgxLjA3MTEgMjU0LjY3MyA4Ny4yMjM2TDE2MS45NyAxNDAuNzQxQzE1MS4zMTIgMTQ2Ljg5MyAxMzQuMDMzIDE0Ni44OTMgMTIzLjM3NiAxNDAuNzQxTDMwLjY3MzIgODcuMjIzNkMyMC4wMTU4IDgxLjA3MTEgMjAuMDE1OCA3MS4wOTU5IDMwLjY3MzIgNjQuOTQzM0wxMjMuMzc2IDExLjQyNjFaIiBmaWxsPSIjNTdBNkY1Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjUzLjcwOCA3Ny42OTk3TDE2MS4wMDUgMjQuMTgyNEMxNTAuODggMTguMzM3NSAxMzQuNDY1IDE4LjMzNzUgMTI0LjM0MSAyNC4xODI0TDMxLjYzODEgNzcuNjk5N0MyMS41MTM1IDgzLjU0NDYgMjEuNTEzNSA5My4wMjExIDMxLjYzODEgOTguODY2TDEyNC4zNDEgMTUyLjM4M0MxMzQuNDY1IDE1OC4yMjggMTUwLjg4IDE1OC4yMjggMTYxLjAwNSAxNTIuMzgzTDI1My43MDggOTguODY2QzI2My44MzIgOTMuMDIxMSAyNjMuODMyIDgzLjU0NDYgMjUzLjcwOCA3Ny42OTk3Wk0xNjEuOTcgMjMuNjI1NEMxNTEuMzEyIDE3LjQ3MjkgMTM0LjAzMyAxNy40NzI5IDEyMy4zNzYgMjMuNjI1NEwzMC42NzMyIDc3LjE0MjdDMjAuMDE1OCA4My4yOTUyIDIwLjAxNTggOTMuMjcwNSAzMC42NzMyIDk5LjQyM0wxMjMuMzc2IDE1Mi45NEMxMzQuMDMzIDE1OS4wOTMgMTUxLjMxMiAxNTkuMDkzIDE2MS45NyAxNTIuOTRMMjU0LjY3MyA5OS40MjNDMjY1LjMzIDkzLjI3MDUgMjY1LjMzIDgzLjI5NTIgMjU0LjY3MyA3Ny4xNDI3TDE2MS45NyAyMy42MjU0WiIgZmlsbD0iIzU3QTZGNSIvPgo8cGF0aCBkPSJNOTkuMDQ3NSA3OC42NjA1TDg0LjIxNzQgNzAuMDk5MUM4Mi4xNzI2IDY4LjkxODYgODIuMTcyNiA2Ni45OTg3IDg0LjIxNzQgNjUuODE4M0w5OS4wNDc2IDU3LjI1NjlDMTAxLjA5MiA1Ni4wNzY0IDEwNC40MTggNTYuMDc2NCAxMDYuNDYzIDU3LjI1NjlMMTIxLjI5MyA2NS44MTgzQzEyMy4zMzggNjYuOTk4NyAxMjMuMzM4IDY4LjkxODYgMTIxLjI5MyA3MC4wOTkxTDEwNi40NjMgNzguNjYwNUMxMDQuNDE4IDc5Ljg0MDkgMTAxLjA5MiA3OS44NDA5IDk5LjA0NzUgNzguNjYwNVpNMTAzLjk5MSA1OC42ODM4QzEwMy4zMSA1OC4yOTA0IDEwMi4yMDEgNTguMjkwNCAxMDEuNTE5IDU4LjY4MzhMODYuNjg5MSA2Ny4yNDUyQzg2LjAwNzcgNjcuNjM4NiA4Ni4wMDc3IDY4LjI3ODggODYuNjg5MSA2OC42NzIxTDEwMS41MTkgNzcuMjMzNkMxMDIuMjAxIDc3LjYyNyAxMDMuMzEgNzcuNjI3IDEwMy45OTEgNzcuMjMzNkwxMTguODIxIDY4LjY3MjFDMTE5LjUwMyA2OC4yNzg4IDExOS41MDIgNjcuNjM4NiAxMTguODIxIDY3LjI0NTJMMTAzLjk5MSA1OC42ODM4WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTE3OC4xNDMgNzguNjYxNEwxNjMuMzEyIDcwLjA5OTlDMTYxLjI2OCA2OC45MTk1IDE2MS4yNjggNjYuOTk5NiAxNjMuMzEyIDY1LjgxOTJMMTc4LjE0MyA1Ny4yNTc3QzE4MC4xODcgNTYuMDc3MyAxODMuNTEzIDU2LjA3NzMgMTg1LjU1OCA1Ny4yNTc3TDIwMC4zODggNjUuODE5MkMyMDIuNDMzIDY2Ljk5OTYgMjAyLjQzMyA2OC45MTk1IDIwMC4zODggNzAuMDk5OUwxODUuNTU4IDc4LjY2MTRDMTgzLjUxMyA3OS44NDE4IDE4MC4xODcgNzkuODQxOCAxNzguMTQzIDc4LjY2MTRaTTE4My4wODYgNTguNjg0NkMxODIuNDA1IDU4LjI5MTMgMTgxLjI5NiA1OC4yOTEzIDE4MC42MTQgNTguNjg0NkwxNjUuNzg0IDY3LjI0NjFDMTY1LjEwMyA2Ny42Mzk1IDE2NS4xMDMgNjguMjc5NyAxNjUuNzg0IDY4LjY3M0wxODAuNjE0IDc3LjIzNDVDMTgxLjI5NiA3Ny42Mjc4IDE4Mi40MDUgNzcuNjI3OCAxODMuMDg2IDc3LjIzNDVMMTk3LjkxNiA2OC42NzNDMTk4LjU5OCA2OC4yNzk3IDE5OC41OTggNjcuNjM5NSAxOTcuOTE2IDY3LjI0NjFMMTgzLjA4NiA1OC42ODQ2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTExNi4zNTEgNzcuMjM0MkwxMTguODIyIDc1LjgwNzNDMTE4LjgyNiA3NS44MDkyIDExOS44NjEgNzYuMzg2OSAxMjEuMzI0IDc2LjY1MTNDMTIzLjA5MiA3Ni45NzE0IDEyNC42OTkgNzYuNjk1MiAxMjYuMjM3IDc1LjgwNzNMMTU1Ljg5OCA1OC42ODQ0QzE1OC4zODMgNTcuMjQ5OCAxNjEuNDMyIDU2Ljc4MzIgMTY0LjQ4MyA1Ny4zNzA1QzE2Ni42NjYgNTcuNzkwMyAxNjguMSA1OC41OTQzIDE2OC4yNTYgNTguNjg0NEwxNjUuNzkxIDYwLjExNTFDMTY1Ljc4MSA2MC4xMDk0IDE2NC43NDYgNTkuNTMxNiAxNjMuMjgzIDU5LjI2NzJDMTYxLjUxNSA1OC45NDcxIDE1OS45MDggNTkuMjIzMyAxNTguMzY5IDYwLjExMTJMMTI4LjcwOSA3Ny4yMzQyQzEyNi4yMjQgNzguNjY4OCAxMjMuMTc1IDc5LjEzNTMgMTIwLjEyNCA3OC41NDhDMTE3Ljk0MSA3OC4xMjgyIDExNi41MDcgNzcuMzI0MyAxMTYuMzUxIDc3LjIzNDJaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8ZmlsdGVyIGlkPSJmaWx0ZXIwX2RkZGRkXzFfMTk3IiB4PSItNDIuMzIwMSIgeT0iNTguMDU5MyIgd2lkdGg9IjM5MS45ODYiIGhlaWdodD0iNDE4LjU0NCIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnM9InNSR0IiPgo8ZmVGbG9vZCBmbG9vZC1vcGFjaXR5PSIwIiByZXN1bHQ9IkJhY2tncm91bmRJbWFnZUZpeCIvPgo8ZmVDb2xvck1hdHJpeCBpbj0iU291cmNlQWxwaGEiIHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAxMjcgMCIgcmVzdWx0PSJoYXJkQWxwaGEiLz4KPGZlT2Zmc2V0Lz4KPGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJCYWNrZ3JvdW5kSW1hZ2VGaXgiIHJlc3VsdD0iZWZmZWN0MV9kcm9wU2hhZG93XzFfMTk3Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjEiIGR5PSIxMiIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIxMyIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4xIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDFfZHJvcFNoYWRvd18xXzE5NyIgcmVzdWx0PSJlZmZlY3QyX2Ryb3BTaGFkb3dfMV8xOTciLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iMyIgZHk9IjQ3Ii8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjI0Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA5IDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDJfZHJvcFNoYWRvd18xXzE5NyIgcmVzdWx0PSJlZmZlY3QzX2Ryb3BTaGFkb3dfMV8xOTciLz4KPGZlQ29sb3JNYXRyaXggaW49IlNvdXJjZUFscGhhIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMTI3IDAiIHJlc3VsdD0iaGFyZEFscGhhIi8+CjxmZU9mZnNldCBkeD0iNiIgZHk9IjEwNyIvPgo8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIzMiIvPgo8ZmVDb2xvck1hdHJpeCB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMC4wNSAwIi8+CjxmZUJsZW5kIG1vZGU9Im5vcm1hbCIgaW4yPSJlZmZlY3QzX2Ryb3BTaGFkb3dfMV8xOTciIHJlc3VsdD0iZWZmZWN0NF9kcm9wU2hhZG93XzFfMTk3Ii8+CjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VBbHBoYSIgdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDEyNyAwIiByZXN1bHQ9ImhhcmRBbHBoYSIvPgo8ZmVPZmZzZXQgZHg9IjExIiBkeT0iMTkwIi8+CjxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjM4Ii8+CjxmZUNvbG9yTWF0cml4IHR5cGU9Im1hdHJpeCIgdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjAxIDAiLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbjI9ImVmZmVjdDRfZHJvcFNoYWRvd18xXzE5NyIgcmVzdWx0PSJlZmZlY3Q1X2Ryb3BTaGFkb3dfMV8xOTciLz4KPGZlQmxlbmQgbW9kZT0ibm9ybWFsIiBpbj0iU291cmNlR3JhcGhpYyIgaW4yPSJlZmZlY3Q1X2Ryb3BTaGFkb3dfMV8xOTciIHJlc3VsdD0ic2hhcGUiLz4KPC9maWx0ZXI+CjxjbGlwUGF0aCBpZD0iY2xpcDBfMV8xOTciPgo8cmVjdCB3aWR0aD0iMjg0LjM0MiIgaGVpZ2h0PSIyNDMuOTgzIiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xOTM0ODEgMC4yODYxMzMpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="}}]);