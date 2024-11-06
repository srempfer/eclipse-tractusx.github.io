"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[12751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),u=o,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={sidebar_position:3,description:"Conventions and behavior specific to Catena-X",title:"Policies in Catena-X",id:"connector_kit_adoption_view_policies_cx"},i=void 0,s={unversionedId:"kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies_cx",id:"version-24.08/kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies_cx",title:"Policies in Catena-X",description:"Conventions and behavior specific to Catena-X",source:"@site/docs-kits_versioned_docs/version-24.08/kits/Connector Kit/Adoption View/policies-in-catena.md",sourceDirName:"kits/Connector Kit/Adoption View",slug:"/kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies_cx",permalink:"/docs-kits/kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies_cx",draft:!1,tags:[],version:"24.08",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Conventions and behavior specific to Catena-X",title:"Policies in Catena-X",id:"connector_kit_adoption_view_policies_cx"},sidebar:"kits",previous:{title:"Working with Policies",permalink:"/docs-kits/kits/Connector Kit/Adoption View/connector_kit_adoption_view_policies"},next:{title:"Specifications",permalink:"/docs-kits/kits/Connector Kit/Development View/connector_kit_development_view_specifications"}},c={},l=[{value:"Data Sovereignty in Catena-X",id:"data-sovereignty-in-catena-x",level:2},{value:"Data Exchange Governance",id:"data-exchange-governance",level:3},{value:"Usage Purposes",id:"usage-purposes",level:3},{value:"Contract References",id:"contract-references",level:3},{value:"Chaining Constraints",id:"chaining-constraints",level:3},{value:"Example",id:"example",level:2},{value:"Notice",id:"notice",level:2}],d={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"data-sovereignty-in-catena-x"},"Data Sovereignty in Catena-X"),(0,o.kt)("p",null,"This page extends on the previous section's fundamentals and introduces conventions specific to the Catena-X Dataspace.\nIt assumes basic knowledge on ",(0,o.kt)("inlineCode",{parentName:"p"},"Policies")," and their processing. Please go back to ",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view_policies"},"the fundamentals"),"\nif that's unfamiliar."),(0,o.kt)("p",null,"Catena-X recommends to focus on ",(0,o.kt)("inlineCode",{parentName:"p"},"permission")," property to further specify the contracts' details. In general,\nevery data provider can decide on his or her own under which conditions their data datasets (assets) are shared in the\nnetwork. In practice, this works as long as both parties, Provider and Consumer, have the same understanding of its\nlegal meaning. Therefore, standardized such ",(0,o.kt)("inlineCode",{parentName:"p"},"Constraint"),"s with their ",(0,o.kt)("inlineCode",{parentName:"p"},"leftOperand"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"rightOperand"),"s are key for\nautomation. Still, individual freedom of contract is a very high good and is still possible."),(0,o.kt)("p",null,"This guidance is however also relevant for Enablement Service Providers building components enabling connectivity to the\nDataspace (as specified in CX-0018). The authoritative resource for schemas is\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-eV/cx-odrl-profile"},"Catena-X ODRL Profile"),". It is also available via the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/policy-hub/blob/main/docs/technical-documentation/requests/example-requests.md"},"Policy Hub"),"\nthat is operated centrally. The API is documented in this Repository and can be accessed with an access token to the\nPortal. It's a convenience feature for the negotiating parties to check if a given offer matches the policy constraints\nagreed by the Catena-X association - for instance by keeping a definite list of valid ",(0,o.kt)("inlineCode",{parentName:"p"},"rightOperands")," to a particular\n",(0,o.kt)("inlineCode",{parentName:"p"},"leftOperand")," in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Constraint"),"."),(0,o.kt)("p",null,"As mentioned in the primer on policies, Providers and Consumers must have a common\nunderstanding of the meaning and consequences of ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Offers")," and, on a more granular level, their ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraints"),".\nThat's why there is a set of predefined ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraints")," - all of which have to\nbe ",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view_policies#consumer-side-odrloffer-in-a-contractrequestmessage"},"accepted explicitly")," and\nsome ",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view_policies#provider-side-checking-a-consumers-verifiable-presentation"},"checked against a Consumer's VP"),"\nadditionally. They are formalized in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-eV/cx-odrl-profile"},"Catena-X ODRL profile"),"\nwhich extends the regular ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/odrl-vocab/"},"ODRL vocabulary"),". Since usage or contract policies are\nhighly dependent on the use case,\nthey are described by them in their associated KITs and only general elements are explained in the following."),(0,o.kt)("p",null,"Here's a non-normative overview of these extensions:"),(0,o.kt)("h3",{id:"data-exchange-governance"},"Data Exchange Governance"),(0,o.kt)("p",null,"The FrameworkAgreement references the legally binding Data Exchange Governance document set up by the Catena-X association. It\ngoverns the ",(0,o.kt)("em",{parentName:"p"},'"who, with whom, what, where from and where to, why, how, and when"')," of Data Sharing in Catena-X\n(",(0,o.kt)("a",{parentName:"p",href:"https://catena-x.net/en/catena-x-introduce-implement/governance-framework-for-data-space-operations"},"Source"),").\nIt is roughly structured along the lines of business scenarios under which a set of business partners\nwant to exchange data."),(0,o.kt)("p",null,"Each Participant commits to the Data Exchange Governance during Onboarding. They are granted a set of VCs as proof of\nthat commitment. Consequently, the FrameworkAgreement Constraint belongs to the kind of ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint"),"s that have to be\n",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view_policies#provider-side-checking-a-consumers-verifiable-presentation"},"checked against a VP"),". The\ndetails are listed in the most current version of standard\n",(0,o.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0050 Framework Credential"),".\nThe Governance Framwork is referred to in a machine-readable way in a Provider's Offers. When a Consumer starts the\nnegotiation for said offer, not only will the Policy in the ",(0,o.kt)("inlineCode",{parentName:"p"},"ContractRequestMessage")," be checked but also their\nCredentials. Here's an example of an ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint")," referencing the Data Exchange Governance and invoking the VC-check:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "odrl:leftOperand": "https://w3id.org/catenax/policy/FrameworkAgreement",\n  "odrl:operator": {\n    "@id": "odrl:eq"\n  },\n  "odrl:rightOperand": "DataExchangeGovernance:1.0"\n}\n')),(0,o.kt)("h3",{id:"usage-purposes"},"Usage Purposes"),(0,o.kt)("p",null,"Purposes are published in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/catenax-eV/cx-odrl-profile"},"CX ODRL Profile")," and restrict the purpose the Consumer is privileged to use the\nobtained data for. Unlike a Use Case Framework Constraint, the purposes are NOT checked against VCs, thus necessary\nfor a successful negotiation mechanism is\nonly ",(0,o.kt)("a",{parentName:"p",href:"/docs-kits/kits/Connector%20Kit/Adoption%20View/connector_kit_adoption_view_policies#consumer-side-odrloffer-in-a-contractrequestmessage"},"the Consumer's consent to the Offer"),".\nVersions for UsagePurpose ",(0,o.kt)("inlineCode",{parentName:"p"},"rightOperand"),"s are typically 1-digit."),(0,o.kt)("p",null,"Here's an example from the Use Case Framework Traceability:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Predefined Policy"),(0,o.kt)("th",{parentName:"tr",align:null},"Typically used where?"),(0,o.kt)("th",{parentName:"tr",align:null},"Predefined Purpose"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"cx.core.qualityNotifications:1")),(0,o.kt)("td",{parentName:"tr",align:null},"Notification API"),(0,o.kt)("td",{parentName:"tr",align:null},"The data can be used for quality analysis to identify and select affected components and to send quality notifications to affected customers or suppliers")))),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint")," referencing this purpose looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "odrl:leftOperand": "https://w3id.org/catenax/policy/UsagePurpose",\n  "odrl:operator": {\n    "@id": "odrl:eq"\n  },\n  "odrl:rightOperand": "cx.core.qualityNotifications:1"\n}\n')),(0,o.kt)("h3",{id:"contract-references"},"Contract References"),(0,o.kt)("p",null,"Contract References by default aren't checked against credentials either. They are a vehicle to refer to contracts that\nare not governed by the Catena-X association - for instance bilaterally. Referencing such a contract's identifier can\nbe achieved via an ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint")," like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "odrl": "http://www.w3.org/ns/odrl/2/"\n  },\n  "odrl:leftOperand": "https://w3id.org/catenax/policy/ContractReference",\n  "odrl:operator": {\n    "@id": "odrl:eq"\n  },\n  "odrl:rightOperand": "contract-123456789"\n}\n')),(0,o.kt)("h3",{id:"chaining-constraints"},"Chaining Constraints"),(0,o.kt)("p",null,"If a Policy is supposed to hold multiple constraints, Data Providers may chain them via a logical AND. This can be\nachieved via an ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:and")," object encapsulating multiple other ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:Constraint"),"s or entering a list of them\ninto the ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:constraint")," property. The example below contains both versions."),(0,o.kt)("p",null,"Constraints that are supposed to be checked with a logical OR should be published as separate Data Offers."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This specific Catalog contains one single ",(0,o.kt)("inlineCode",{parentName:"p"},"dcat:Dataset"),', called "json-1-paper". It is the only entry in the top-level\n',(0,o.kt)("inlineCode",{parentName:"p"},"dcat:dataset")," property. To access this Dataset, the Consumer can choose between two Offers (see the ",(0,o.kt)("inlineCode",{parentName:"p"},"odrl:hasPolicy"),"\nproperty):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"Y29udHJhY3QtYmlsYXRlcmFsLXBhcGVyLWV4YW1wbGUtMg==:anNvbi0xLXBhcGVy:ZDA4ZDM5OTgtOGY5ZS00MzBmLThjZDEtZmYwOWQxMmQxYzk5"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'"Y29udHJhY3QtYmlsYXRlcmFsLXBhcGVyLWV4YW1wbGUtMQ==:anNvbi0xLXBhcGVy:ODFkMDI2MWYtNDNlNi00ZTIxLWJkMWYtZmFmZTI3MWQwYzhj"'))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@context": {\n    "@vocab": "https://w3id.org/edc/v0.0.1/ns/",\n    "edc": "https://w3id.org/edc/v0.0.1/ns/",\n    "tx": "https://w3id.org/tractusx/v0.0.1/ns/",\n    "dcat": "http://www.w3.org/ns/dcat#",\n    "dct": "https://purl.org/dc/terms/",\n    "odrl": "http://www.w3.org/ns/odrl/2/",\n    "dspace": "https://w3id.org/dspace/v0.8/"\n  },\n  "@id": "693e9b66-04f2-4bfb-b3cd-daf5857b47c9",\n  "@type": "dcat:Catalog",\n  "dcat:dataset": [\n    {\n      "@id": "json-1-paper",\n      "@type": "dcat:Dataset",\n      "odrl:hasPolicy": [\n        {\n          "@id": "Y29udHJhY3QtYmlsYXRlcmFsLXBhcGVyLWV4YW1wbGUtMg==:anNvbi0xLXBhcGVy:ZDA4ZDM5OTgtOGY5ZS00MzBmLThjZDEtZmYwOWQxMmQxYzk5",\n          "@type": "odrl:Set",\n          "odrl:permission": {\n            "odrl:action": {\n              "@id": "http://www.w3.org/ns/odrl/2/use"\n            },\n            "odrl:constraint": {\n              "odrl:and": [\n                {\n                  "odrl:leftOperand": "https://w3id.org/catenax/policy/FrameworkAgreement",\n                  "odrl:operator": {\n                    "@id": "odrl:eq"\n                  },\n                  "odrl:rightOperand": "DataExchangeGovernance:1.0"\n                },\n                {\n                  "odrl:leftOperand": "https://w3id.org/catenax/policy/UsagePurpose",\n                  "odrl:operator": {\n                    "@id": "odrl:eq"\n                  },\n                  "odrl:rightOperand": "cx.core.industrycore:1"\n                }\n              ]\n            }\n          },\n          "odrl:prohibition": [],\n          "odrl:obligation": []\n        },\n        {\n          "@id": "Y29udHJhY3QtYmlsYXRlcmFsLXBhcGVyLWV4YW1wbGUtMQ==:anNvbi0xLXBhcGVy:ODFkMDI2MWYtNDNlNi00ZTIxLWJkMWYtZmFmZTI3MWQwYzhj",\n          "@type": "odrl:Set",\n          "odrl:permission": {\n            "odrl:action": {\n              "@id": "http://www.w3.org/ns/odrl/2/use"\n            },\n            "odrl:constraint": [\n              {\n                "odrl:leftOperand": "https://w3id.org/catenax/policy/FrameworkAgreement",\n                "odrl:operator": {\n                  "@id": "odrl:eq"\n                },\n                "odrl:rightOperand": "DataExchangeGovernance:1.0"\n              },\n              {\n                "odrl:leftOperand": "https://w3id.org/catenax/policy/ContractReference",\n                "odrl:operator": {\n                  "@id": "odrl:eq"\n                },\n                "odrl:rightOperand": "contract-123456789"\n              },\n              {\n                "odrl:leftOperand": "https://w3id.org/catenax/policy/UsagePurpose",\n                "odrl:operator": {\n                  "@id": "odrl:eq"\n                },\n                "odrl:rightOperand": "cx.core.industrycore:1"\n              }\n            ]\n          },\n          "odrl:prohibition": [],\n          "odrl:obligation": []\n        }\n      ],\n      "dcat:distribution": [\n        {\n          "@type": "dcat:Distribution",\n          "dct:format": {\n            "@id": "HttpData-PULL"\n          },\n          "dcat:accessService": "911f5da0-c9ee-4259-9a95-39428d08f777"\n        }\n      ],\n      "version": 1.0,\n      "content-type": "application/json",\n      "name": "json-1-paper",\n      "description": "Asset json-1-paper for test purposes",\n      "id": "json-1-paper"\n    }\n  ],\n  "dcat:service": {\n    "@id": "911f5da0-c9ee-4259-9a95-39428d08f777",\n    "@type": "dcat:DataService",\n    "dct:terms": "connector",\n    "dct:endpointUrl": "https://provider-dsp-end.point/api/v1/dsp"\n  },\n  "participantId": "PROVIDER-BPNL"\n}\n')),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("p",null,"This work is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,o.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2024 Contributors of the Eclipse Foundation"),(0,o.kt)("li",{parentName:"ul"},"Source\nURL: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io"))))}p.isMDXComponent=!0}}]);