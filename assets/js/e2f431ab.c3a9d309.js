"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[73366],{7345:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>v});var i=o(87462),s=(o(67294),o(3905)),a=o(26389),l=o(94891),r=o(75190),n=(o(47507),o(24310)),p=(o(63303),o(75035),o(85162));const d={id:"call-deprovision-webhook",title:"callDeprovisionWebhook",description:"",sidebar_label:"callDeprovisionWebhook",hide_title:!0,hide_table_of_contents:!0,api:{tags:["HTTP Provisioner Webhook"],description:null,operationId:"callDeprovisionWebhook",parameters:[{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{error:{type:"boolean",example:null},errorMessage:{type:"string",example:null},inProcess:{type:"boolean",example:null},provisionedResourceId:{type:"string",example:null}},example:null}}}},responses:{default:{description:"default response"}},method:"post",path:"/callback/{processId}/deprovision",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"call Deprovision Webhook",description:{type:"text/plain"},url:{path:["callback",":processId","deprovision"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},c=void 0,u={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/call-deprovision-webhook",id:"version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/call-deprovision-webhook",title:"callDeprovisionWebhook",description:"",source:"@site/docs-kits_versioned_docs/version-23.09/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/call-deprovision-webhook.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/call-deprovision-webhook",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/call-deprovision-webhook",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"call-deprovision-webhook",title:"callDeprovisionWebhook",description:"",sidebar_label:"callDeprovisionWebhook",hide_title:!0,hide_table_of_contents:!0,api:{tags:["HTTP Provisioner Webhook"],description:null,operationId:"callDeprovisionWebhook",parameters:[{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{error:{type:"boolean",example:null},errorMessage:{type:"string",example:null},inProcess:{type:"boolean",example:null},provisionedResourceId:{type:"string",example:null}},example:null}}}},responses:{default:{description:"default response"}},method:"post",path:"/callback/{processId}/deprovision",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"call Deprovision Webhook",description:{type:"text/plain"},url:{path:["callback",":processId","deprovision"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Content-Type",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"addEntry",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/add-entry"},next:{title:"callProvisionWebhook",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/call-provision-webhook"}},m={},v=[{value:"callDeprovisionWebhook",id:"calldeprovisionwebhook",level:2}],k={toc:v};function h(e){let{components:t,...o}=e;return(0,s.kt)("wrapper",(0,i.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"calldeprovisionwebhook"},"callDeprovisionWebhook"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(r.Z,{className:"paramsItem",param:{name:"processId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,s.kt)(l.Z,{mdxType:"MimeTabs"},(0,s.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(n.Z,{collapsible:!1,name:"error",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"errorMessage",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"inProcess",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"boolean",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(n.Z,{collapsible:!1,name:"provisionedResourceId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(a.Z,{mdxType:"ApiTabs"},(0,s.kt)(p.Z,{label:"default",value:"default",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"default response")),(0,s.kt)("div",null)))))}h.isMDXComponent=!0}}]);