"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[69441],{72137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>b,frontMatter:()=>u,metadata:()=>g,toc:()=>y});var i=a(87462),s=(a(67294),a(3905)),n=a(26389),r=a(94891),o=a(75190),p=a(47507),l=a(24310),m=a(63303),d=(a(75035),a(85162));const u={id:"get-input-changelog",title:"Get business partner changelog entries for changes to the business partner input data",description:"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type",sidebar_label:"Get business partner changelog entries for changes to the business partner input data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["changelog-controller"],description:"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type",operationId:"getInputChangelog",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{fromTime:{type:"string",format:"date-time"},externalIds:{uniqueItems:!0,type:"array",items:{type:"string"}},lsaTypes:{uniqueItems:!0,type:"array",items:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS"]}}}}}},required:!0},responses:{200:{description:"The changelog entries for the specified parameters",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{externalId:{type:"string"},businessPartnerType:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS"]},modifiedAt:{type:"string",format:"date-time"}},description:"Changelog entry for a business partner"}},invalidEntries:{type:"integer",format:"int32"},errors:{type:"array",items:{title:"ErrorInfo",type:"object",properties:{errorCode:{type:"string",description:"ChangeLogOutputError",enum:["ExternalIdNotFound"]},message:{type:"string"},entityKey:{type:"string"}},description:"Holds information about failures"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"}},method:"post",path:"/api/catena/input/changelog/search",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:{fromTime:"2023-06-26",externalIds:["string"],lsaTypes:["LEGAL_ENTITY"]},info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0-SNAPSHOT"},postman:{name:"Get business partner changelog entries for changes to the business partner input data",description:{content:"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type",type:"text/plain"},url:{path:["api","catena","input","changelog","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},c=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/get-input-changelog",id:"version-23.09/kits/Business Partner Kit/Software Development View/Gate Api/get-input-changelog",title:"Get business partner changelog entries for changes to the business partner input data",description:"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type",source:"@site/docs-kits_versioned_docs/version-23.09/kits/Business Partner Kit/Software Development View/Gate Api/get-input-changelog.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/get-input-changelog",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/get-input-changelog",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"get-input-changelog",title:"Get business partner changelog entries for changes to the business partner input data",description:"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type",sidebar_label:"Get business partner changelog entries for changes to the business partner input data",hide_title:!0,hide_table_of_contents:!0,api:{tags:["changelog-controller"],description:"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type",operationId:"getInputChangelog",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{fromTime:{type:"string",format:"date-time"},externalIds:{uniqueItems:!0,type:"array",items:{type:"string"}},lsaTypes:{uniqueItems:!0,type:"array",items:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS"]}}}}}},required:!0},responses:{200:{description:"The changelog entries for the specified parameters",content:{"application/json":{schema:{type:"object",properties:{totalElements:{type:"integer",format:"int64"},totalPages:{type:"integer",format:"int32"},page:{type:"integer",format:"int32"},contentSize:{type:"integer",format:"int32"},content:{type:"array",items:{type:"object",properties:{externalId:{type:"string"},businessPartnerType:{type:"string",enum:["LEGAL_ENTITY","SITE","ADDRESS"]},modifiedAt:{type:"string",format:"date-time"}},description:"Changelog entry for a business partner"}},invalidEntries:{type:"integer",format:"int32"},errors:{type:"array",items:{title:"ErrorInfo",type:"object",properties:{errorCode:{type:"string",description:"ChangeLogOutputError",enum:["ExternalIdNotFound"]},message:{type:"string"},entityKey:{type:"string"}},description:"Holds information about failures"}}},description:"Paginated collection of results"}}}},400:{description:"On malformed pagination request"}},method:"post",path:"/api/catena/input/changelog/search",servers:[{url:"http://localhost:8081",description:"Generated server url"}],jsonRequestBodyExample:{fromTime:"2023-06-26",externalIds:["string"],lsaTypes:["LEGAL_ENTITY"]},info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"4.0.0-SNAPSHOT"},postman:{name:"Get business partner changelog entries for changes to the business partner input data",description:{content:"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type",type:"text/plain"},url:{path:["api","catena","input","changelog","search"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""}],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"Get business partner changelog entries for changes to the business partner output data",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/get-output-changelog"},next:{title:"Pool API",permalink:"/docs-kits/category/pool-api"}},h={},y=[{value:"Get business partner changelog entries for changes to the business partner input data",id:"get-business-partner-changelog-entries-for-changes-to-the-business-partner-input-data",level:2}],f={toc:y};function b(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"get-business-partner-changelog-entries-for-changes-to-the-business-partner-input-data"},"Get business partner changelog entries for changes to the business partner input data"),(0,s.kt)("p",null,"Get business partner changelog entries for changes to the business partner input data. Filter by list external id, from timestamp and/or lsa type"),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Query Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,s.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"})))),(0,s.kt)(r.Z,{mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Request Body"),(0,s.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"fromTime",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"externalIds",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"lsaTypes",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `SITE`, `ADDRESS`]",defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,s.kt)("div",null,(0,s.kt)(n.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"The changelog entries for the specified parameters")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"content"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"externalId",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"businessPartnerType",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:"**Possible values:** [`LEGAL_ENTITY`, `SITE`, `ADDRESS`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"modifiedAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,s.kt)(l.Z,{collapsible:!1,name:"invalidEntries",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(l.Z,{collapsible:!1,name:"errorCode",required:!1,deprecated:void 0,schemaDescription:"ChangeLogOutputError",schemaName:"string",qualifierMessage:"**Possible values:** [`ExternalIdNotFound`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(l.Z,{collapsible:!1,name:"entityKey",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(p.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "externalId": "string",\n      "businessPartnerType": "LEGAL_ENTITY",\n      "modifiedAt": "2023-06-26"\n    }\n  ],\n  "invalidEntries": 0,\n  "errors": [\n    {\n      "errorCode": "ExternalIdNotFound",\n      "message": "string",\n      "entityKey": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"On malformed pagination request")),(0,s.kt)("div",null)))))}b.isMDXComponent=!0}}]);