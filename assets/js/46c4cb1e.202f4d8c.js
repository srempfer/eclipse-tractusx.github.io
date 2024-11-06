"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[91981],{55028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>g,toc:()=>y});var s=a(87462),r=(a(67294),a(3905)),n=a(26389),i=a(94891),o=a(75190),p=a(47507),l=a(24310),d=a(63303),m=(a(75035),a(85162));const c={id:"get-sharing-states",title:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",description:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",sidebar_label:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["sharing-state-controller"],operationId:"getSharingStates",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},{name:"externalIds",in:"query",description:"External IDs",required:!1,schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"Page of sharing states",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["externalId","sharingStateType"],type:"object",properties:{externalId:{type:"string",description:"The external identifier of the business partner for which the sharing state entry was created."},sharingStateType:{type:"string",description:"One of the sharing state types of the current sharing state.",enum:["Pending","Success","Error","Initial","Ready"]},sharingErrorCode:{type:"string",description:'One of the sharing error codes in case the current sharing state type is "error".',enum:["SharingProcessError","SharingTimeout","BpnNotInPool","MissingTaskID"]},sharingErrorMessage:{type:"string",description:'The error message in case the current sharing state type is "error".'},sharingProcessStarted:{type:"string",description:"The date and time when the sharing process was started.",format:"date-time"},taskId:{type:"string",description:"The orchestrator task identifier that was created"}},description:"A sharing state entry shows the progress in the sharing process and is updated each time the progress for a business partner changes. The business partner is identified by a combination of external ID and business partner type."}}},description:"Paginated collection of results"}}}}},description:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",method:"get",path:"/v6/sharing-state",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"6.1.0"},postman:{name:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",description:{type:"text/plain"},url:{path:["v6","sharing-state"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""},{disabled:!1,description:{content:"External IDs",type:"text/plain"},key:"externalIds",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},u=void 0,g={unversionedId:"kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",id:"version-24.08/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",title:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",description:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states.api.mdx",sourceDirName:"kits/Business Partner Kit/Software Development View/Gate Api",slug:"/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/get-sharing-states",draft:!1,editUrl:null,tags:[],version:"24.08",frontMatter:{id:"get-sharing-states",title:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",description:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",sidebar_label:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",hide_title:!0,hide_table_of_contents:!0,api:{tags:["sharing-state-controller"],operationId:"getSharingStates",parameters:[{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},{name:"externalIds",in:"query",description:"External IDs",required:!1,schema:{type:"array",items:{type:"string"}}}],responses:{200:{description:"Page of sharing states",content:{"application/json":{schema:{required:["content","contentSize","page","totalElements","totalPages"],type:"object",properties:{totalElements:{type:"integer",description:"Total number of all results in all pages",format:"int64"},totalPages:{type:"integer",description:"Total number pages",format:"int32"},page:{type:"integer",description:"Current page number",format:"int32"},contentSize:{type:"integer",description:"Number of results in the page",format:"int32"},content:{type:"array",description:"Collection of results in the page",items:{required:["externalId","sharingStateType"],type:"object",properties:{externalId:{type:"string",description:"The external identifier of the business partner for which the sharing state entry was created."},sharingStateType:{type:"string",description:"One of the sharing state types of the current sharing state.",enum:["Pending","Success","Error","Initial","Ready"]},sharingErrorCode:{type:"string",description:'One of the sharing error codes in case the current sharing state type is "error".',enum:["SharingProcessError","SharingTimeout","BpnNotInPool","MissingTaskID"]},sharingErrorMessage:{type:"string",description:'The error message in case the current sharing state type is "error".'},sharingProcessStarted:{type:"string",description:"The date and time when the sharing process was started.",format:"date-time"},taskId:{type:"string",description:"The orchestrator task identifier that was created"}},description:"A sharing state entry shows the progress in the sharing process and is updated each time the progress for a business partner changes. The business partner is identified by a combination of external ID and business partner type."}}},description:"Paginated collection of results"}}}}},description:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",method:"get",path:"/v6/sharing-state",servers:[{url:"http://localhost:8081",description:"Generated server url"}],info:{title:"Business Partner Data Management Gate",description:"A gate for a member to share business partner data with CatenaX",version:"6.1.0"},postman:{name:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",description:{type:"text/plain"},url:{path:["v6","sharing-state"],host:["{{baseUrl}}"],query:[{disabled:!1,description:{content:"Number of page to get results from",type:"text/plain"},key:"page",value:""},{disabled:!1,description:{content:"Size of each page",type:"text/plain"},key:"size",value:""},{disabled:!1,description:{content:"External IDs",type:"text/plain"},key:"externalIds",value:""}],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/business-partner-data-management-gate",custom_edit_url:null},sidebar:"kits",previous:{title:"Sets the given business partners into ready to be shared state",permalink:"/docs-kits/kits/Business Partner Kit/Software Development View/Gate Api/post-sharing-state-ready"},next:{title:"changelog-controller",permalink:"/docs-kits/category/kits/Business Partner Kit/Software Development View/Gate Api/changelog-controller"}},h={},y=[{value:"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs",id:"returns-sharing-states-of-business-partners-optionally-filtered-by-a-business-partner-type-and-an-array-of-external-ids",level:2}],f={toc:y};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"returns-sharing-states-of-business-partners-optionally-filtered-by-a-business-partner-type-and-an-array-of-external-ids"},"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs"),(0,r.kt)("p",null,"Returns sharing states of business partners, optionally filtered by a business partner type and an array of external IDs"),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Query Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"page",in:"query",description:"Number of page to get results from",required:!1,schema:{minimum:0,type:"string",default:"0"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"size",in:"query",description:"Size of each page",required:!1,schema:{maximum:100,minimum:0,type:"string",default:"10"}},mdxType:"ParamsItem"}),(0,r.kt)(o.Z,{className:"paramsItem",param:{name:"externalIds",in:"query",description:"External IDs",required:!1,schema:{type:"array",items:{type:"string"}}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(n.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Page of sharing states")),(0,r.kt)("div",null,(0,r.kt)(i.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(d.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"totalElements",required:!1,deprecated:void 0,schemaDescription:"Total number of all results in all pages",schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"totalPages",required:!1,deprecated:void 0,schemaDescription:"Total number pages",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"page",required:!1,deprecated:void 0,schemaDescription:"Current page number",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"contentSize",required:!1,deprecated:void 0,schemaDescription:"Number of results in the page",schemaName:"int32",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"content"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Collection of results in the page")),(0,r.kt)(l.Z,{collapsible:!1,name:"externalId",required:!1,deprecated:void 0,schemaDescription:"The external identifier of the business partner for which the sharing state entry was created.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sharingStateType",required:!1,deprecated:void 0,schemaDescription:"One of the sharing state types of the current sharing state.",schemaName:"string",qualifierMessage:"**Possible values:** [`Pending`, `Success`, `Error`, `Initial`, `Ready`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sharingErrorCode",required:!1,deprecated:void 0,schemaDescription:'One of the sharing error codes in case the current sharing state type is "error".',schemaName:"string",qualifierMessage:"**Possible values:** [`SharingProcessError`, `SharingTimeout`, `BpnNotInPool`, `MissingTaskID`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sharingErrorMessage",required:!1,deprecated:void 0,schemaDescription:'The error message in case the current sharing state type is "error".',schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"sharingProcessStarted",required:!1,deprecated:void 0,schemaDescription:"The date and time when the sharing process was started.",schemaName:"date-time",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"taskId",required:!1,deprecated:void 0,schemaDescription:"The orchestrator task identifier that was created",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(p.Z,{responseExample:'{\n  "totalElements": 0,\n  "totalPages": 0,\n  "page": 0,\n  "contentSize": 0,\n  "content": [\n    {\n      "externalId": "string",\n      "sharingStateType": "Pending",\n      "sharingErrorCode": "SharingProcessError",\n      "sharingErrorMessage": "string",\n      "sharingProcessStarted": "2024-07-15",\n      "taskId": "string"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);