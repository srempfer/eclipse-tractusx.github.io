"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[24037],{39456:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>y,toc:()=>g});var i=a(87462),n=(a(67294),a(3905)),l=a(26389),s=a(94891),o=a(75190),r=a(47507),m=a(24310),p=a(63303),c=(a(75035),a(85162));const d={id:"get-all-contract-definitions",title:"getAllContractDefinitions",description:"Returns all contract definitions according to a query",sidebar_label:"getAllContractDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,description:"Returns all contract definitions according to a query",operationId:"getAllContractDefinitions",parameters:[{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"filter",schema:{type:"string",example:null}},{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},{in:"query",name:"sortField",schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{accessPolicyId:{type:"string",example:null},contractPolicyId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null},criteria:{type:"array",example:null,items:{type:"object",example:null,properties:{operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},required:["operandLeft","operator"]}},id:{type:"string",example:null},validity:{type:"integer",format:"int64",example:null}}}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed"}},tags:["Contract Definition"],method:"get",path:"/contractdefinitions",info:{title:"EDC Contract Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get All Contract Definitions",description:{content:"Returns all contract definitions according to a query",type:"text/plain"},url:{path:["contractdefinitions"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/edc-contract-definition-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/get-all-contract-definitions",id:"version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/get-all-contract-definitions",title:"getAllContractDefinitions",description:"Returns all contract definitions according to a query",source:"@site/docs-kits_versioned_docs/version-3.1.0/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/get-all-contract-definitions.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/get-all-contract-definitions",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/get-all-contract-definitions",draft:!1,editUrl:null,tags:[],version:"3.1.0",frontMatter:{id:"get-all-contract-definitions",title:"getAllContractDefinitions",description:"Returns all contract definitions according to a query",sidebar_label:"getAllContractDefinitions",hide_title:!0,hide_table_of_contents:!0,api:{deprecated:!0,description:"Returns all contract definitions according to a query",operationId:"getAllContractDefinitions",parameters:[{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},{in:"query",name:"filter",schema:{type:"string",example:null}},{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},{in:"query",name:"sortField",schema:{type:"string",example:null}}],responses:{200:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{accessPolicyId:{type:"string",example:null},contractPolicyId:{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null},criteria:{type:"array",example:null,items:{type:"object",example:null,properties:{operandLeft:{type:"object",example:null},operandRight:{type:"object",example:null},operator:{type:"string",example:null}},required:["operandLeft","operator"]}},id:{type:"string",example:null},validity:{type:"integer",format:"int64",example:null}}}}}}},400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}}}}}},description:"Request was malformed"}},tags:["Contract Definition"],method:"get",path:"/contractdefinitions",info:{title:"EDC Contract Definition API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"get All Contract Definitions",description:{content:"Returns all contract definitions according to a query",type:"text/plain"},url:{path:["contractdefinitions"],host:["{{baseUrl}}"],query:[{disabled:!1,key:"offset",value:""},{disabled:!1,key:"limit",value:""},{disabled:!1,key:"filter",value:""},{disabled:!1,key:"sort",value:""},{disabled:!1,key:"sortField",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/edc-contract-definition-api",custom_edit_url:null},sidebar:"kits",previous:{title:"deleteContractDefinition",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/delete-contract-definition"},next:{title:"getContractDefinition",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/contract-definition-api/get-contract-definition"}},f={},g=[{value:"getAllContractDefinitions",id:"getallcontractdefinitions",level:2}],v={toc:g};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"getallcontractdefinitions"},"getAllContractDefinitions"),(0,n.kt)("admonition",{title:"deprecated",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,n.kt)("p",null,"Returns all contract definitions according to a query"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Query Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"offset",schema:{type:"integer",format:"int32",example:null}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"limit",schema:{type:"integer",format:"int32",example:null}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"filter",schema:{type:"string",example:null}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"sort",schema:{type:"string",enum:["ASC","DESC"],example:null}},mdxType:"ParamsItem"}),(0,n.kt)(o.Z,{className:"paramsItem",param:{in:"query",name:"sortField",schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,n.kt)("div",null,(0,n.kt)(l.Z,{mdxType:"ApiTabs"},(0,n.kt)(c.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"accessPolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"contractPolicyId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,n.kt)("details",{style:{}},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"criteria"),(0,n.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,n.kt)("div",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"operandLeft",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"operandRight",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"operator",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(m.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"validity",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Request was malformed")),(0,n.kt)("div",null,(0,n.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema"),(0,n.kt)("span",{style:{opacity:"0.6"}}," array")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(m.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,n.kt)(m.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,n.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);