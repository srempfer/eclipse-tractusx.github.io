"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8093],{59779:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var a=i(87462),s=(i(67294),i(3905)),n=i(26389),r=i(94891),p=i(75190),l=i(47507),o=i(24310),m=i(63303),d=(i(75035),i(85162));const c={id:"get-identifier-types",title:"Get page of identifier types",description:"Lists all currently known identifier types in a paginated result",sidebar_label:"Get page of identifier types",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known identifier types in a paginated result",operationId:"getIdentifierTypes",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing identifier types, may be empty",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"}}}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/identifier-types",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Get page of identifier types",description:{content:"Lists all currently known identifier types in a paginated result",type:"text/plain"},url:{path:["api","catena","identifier-types"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},u=void 0,y={unversionedId:"kits/Business Partner Kit/Software Development View/get-identifier-types",id:"kits/Business Partner Kit/Software Development View/get-identifier-types",title:"Get page of identifier types",description:"Lists all currently known identifier types in a paginated result",source:"@site/docs/kits/Business Partner Kit/Software Development View/get-identifier-types.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View",slug:"/kits/Business Partner Kit/Software Development View/get-identifier-types",permalink:"/docs/kits/Business Partner Kit/Software Development View/get-identifier-types",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-identifier-types",title:"Get page of identifier types",description:"Lists all currently known identifier types in a paginated result",sidebar_label:"Get page of identifier types",hide_title:!0,hide_table_of_contents:!0,api:{tags:["metadata-controller"],description:"Lists all currently known identifier types in a paginated result",operationId:"getIdentifierTypes",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],responses:{200:{description:"Page of existing identifier types, may be empty",content:{"*/*":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{technicalKey:{type:"string"},name:{type:"string"},url:{type:"string"}}}}},description:"Paginated collection of results"}}}},400:{description:"On malformed request parameters"}},method:"get",path:"/api/catena/identifier-types",servers:[{url:"http://127.0.0.1:8080",description:"Generated server url"}],info:{title:"Business Partner Data Management Pool",description:"Service that manages and shares business partner data with other CatenaX services",version:"3.0.0"},postman:{name:"Get page of identifier types",description:{content:"Lists all currently known identifier types in a paginated result",type:"text/plain"},url:{path:["api","catena","identifier-types"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Accept",value:"*/*"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"./docs/kits/Business Partner Kit/Software Development View//business-partner-data-management-pool",custom_edit_url:null},sidebar:"kits",previous:{title:"Get page of identifier statuses",permalink:"/docs/kits/Business Partner Kit/Software Development View/get-identifier-stati"},next:{title:"Get page of issuing bodies",permalink:"/docs/kits/Business Partner Kit/Software Development View/get-issuing-bodies"}},g={},f=[{value:"Get page of identifier types",id:"get-page-of-identifier-types",level:2}],h={toc:f};function k(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-page-of-identifier-types"},"Get page of identifier types"),(0,s.kt)("p",null,"Lists all currently known identifier types in a paginated result"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,s.kt)(p.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"Page of existing identifier types, may be empty")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"*/*",value:"*/*",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(o.Z,{collapsible:!1,name:"technicalKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"name",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(o.Z,{collapsible:!1,name:"url",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(l.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "technicalKey": "string",\n      "name": "string",\n      "url": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"On malformed request parameters")),(0,s.kt)("div",null)))))}k.isMDXComponent=!0}}]);