"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5222],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,c=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),u=s(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||i;return n?a.createElement(m,o(o({ref:e},d),{},{components:n})):a.createElement(m,o({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},18849:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={},o="Catena-X OAuth2 Extension",l={unversionedId:"kits/tractusx-edc/edc-extensions/cx-oauth2/README",id:"kits/tractusx-edc/edc-extensions/cx-oauth2/README",title:"Catena-X OAuth2 Extension",description:"Why Catena-X needs this extension",source:"@site/docs/kits/tractusx-edc/edc-extensions/cx-oauth2/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/cx-oauth2",slug:"/kits/tractusx-edc/edc-extensions/cx-oauth2/",permalink:"/docs/kits/tractusx-edc/edc-extensions/cx-oauth2/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/tractusx-edc/edc-extensions/cx-oauth2/README.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Control Plane Adapter Extension",permalink:"/docs/kits/tractusx-edc/edc-extensions/control-plane-adapter/"},next:{title:"Data Encryption Extension",permalink:"/docs/kits/tractusx-edc/edc-extensions/data-encryption/"}},c={},s=[{value:"Why Catena-X needs this extension",id:"why-catena-x-needs-this-extension",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Audience Validation",id:"audience-validation",level:2}],d={toc:s};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"catena-x-oauth2-extension"},"Catena-X OAuth2 Extension"),(0,r.kt)("h2",{id:"why-catena-x-needs-this-extension"},"Why Catena-X needs this extension"),(0,r.kt)("p",null,"In IDS the DAPS token audience is always ",(0,r.kt)("inlineCode",{parentName:"p"},"idsc:IDS_CONNECTORS_ALL"),". At first glance this makes it possible for other connectors to steal and reuse an received token. To mitigate this security risk IDS introduces something called ",(0,r.kt)("inlineCode",{parentName:"p"},"transportCertsSha256"),", which couples the connector audience with its corresponding TLS/SSL certificate."),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/International-Data-Spaces-Association/IDS-G/tree/main/Components/IdentityProvider/DAPS"},"GitHub IDS-G")),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"transportCertsSha256")," Contains the public keys of the used transport certificates, hashed using SHA256. The identifying X509 certificate should not be used for the communication encryption. Therefore, the receiving party needs to connect the identity of a connector by relating its hostname (from the communication encryption layer) and the used private/public key pair, with its IDS identity claim of the DAT. The public transportation key must be one of the ",(0,r.kt)("inlineCode",{parentName:"li"},"transportCertsSha256")," values. Otherwise, the receiving connector must expect that the requesting connector is using a false identity claim. In general, this claim holds an Array of Strings, but it may optionally hold a single String instead if the Array would have exactly one element."))),(0,r.kt)("p",null,"The reason IDS did this is to prevent the IDS DAPS to know, which connectors talk to each other. But this solution introduces a new level of complexity for different deployment scenarios. The Catena-X OAuth2 Extension introduces the classic audience validation again, so that Catena-X does not have to deal with these things for now."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.oauth.token.url"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Token URL of the DAPS"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.oauth.public.key.alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Vault alias of the public key"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.oauth.client.id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DAPS client id of the connector"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.oauth.private.key.alias"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Vault lias of the private key"),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.oauth.token.expiration.seconds"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.oauth.validation.nbf.leeway"),(0,r.kt)("td",{parentName:"tr",align:"left"},"DAPS token request leeway"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"10 seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.oauth.provider.jwks.refresh"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Time between refresh of the DAPS json web key set"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"5 minutes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.ids.endpoint.audience"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The audience the connector requests from the DAPS. Should be the IDS URL of the connector, e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"http://plato-edc-controlplane:8282/api/v1/ids/data")),(0,r.kt)("td",{parentName:"tr",align:null},"X"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"edc.ids.validation.referringconnector"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Adds checks to the DAPS token. Validation that the ",(0,r.kt)("inlineCode",{parentName:"td"},"referringConnector")," equals the ",(0,r.kt)("inlineCode",{parentName:"td"},"issuerConnector")," and the ",(0,r.kt)("inlineCode",{parentName:"td"},"securityProfile")," of the token is equal to the profile of the IDS message"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"false")))),(0,r.kt)("h2",{id:"audience-validation"},"Audience Validation"),(0,r.kt)("p",null,"Instead of the ",(0,r.kt)("inlineCode",{parentName:"p"},"idsc:IDS_CONNECTORS_ALL")," the connector requests a specific audience from the DAPS. This audience will be the IDS URL, the connector intends to call."),(0,r.kt)("p",null,"When a connector receives a message, it will checks the token audience is equal to the configured value in ",(0,r.kt)("inlineCode",{parentName:"p"},"edc.ids.endpoint.audience"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"sequence diagram",src:n(86074).Z,width:"981",height:"561"})))}u.isMDXComponent=!0},86074:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/sequence-151360407d68440656d23a8dfaa5d0fc.png"}}]);