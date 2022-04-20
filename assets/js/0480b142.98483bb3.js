"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3584:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],s={title:"FAQ",sidebar_label:"FAQ",description:"",sidebar_position:96},c=void 0,l={unversionedId:"faq",id:"faq",title:"FAQ",description:"",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/tkg-sdk-doc/faq",tags:[],version:"current",sidebarPosition:96,frontMatter:{title:"FAQ",sidebar_label:"FAQ",description:"",sidebar_position:96},sidebar:"tutorialSidebar",previous:{title:"Release",permalink:"/tkg-sdk-doc/tkg-integration/sdk-package"}},d={},u=[{value:"Legacy Build System Error on Xcode",id:"legacy-build-system-error-on-xcode",level:3},{value:"Library not loaded:  ....KSAdSDK....  Error on Xcode",id:"library-not-loaded--ksadsdk--error-on-xcode",level:3}],p={toc:u};function f(e){var t=e.components,s=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"legacy-build-system-error-on-xcode"},"Legacy Build System Error on Xcode"),(0,i.kt)("p",null,'When exporting the project to Xcode, if you see a building error saying, "The Legacy Build System will be removed in a future release. You can configure the selected build system and this deprecation message in File > Project Settings" please do the following to resolve this issue.   '),(0,i.kt)("p",null,"Step1. Navigate to File, then select Project Settings  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:r(9183).Z,width:"200",height:"491"})," "),(0,i.kt)("p",null,"Step2. Under Shared Project Settings, change the Build System settings to New Build System  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"iOS Symbols",src:r(1225).Z,width:"1072",height:"944"})),(0,i.kt)("h3",{id:"library-not-loaded--ksadsdk--error-on-xcode"},"Library not loaded:  ....KSAdSDK....  Error on Xcode"),(0,i.kt)("p",null,"If you see a building error about KSAdSDK similar to the screenshot below. Please do the [",(0,i.kt)("a",{parentName:"p",href:"/tkg-sdk-doc/tkg-integration/sdk-projectsettings/sdk-projectsettings-ios"},"Add dynamic library for ads sdk")," steps to resolve this issue.\n",(0,i.kt)("img",{alt:"ks_01_error",src:r(822).Z,width:"1280",height:"471"})))}f.isMDXComponent=!0},9183:function(e,t,r){t.Z=r.p+"assets/images/legal01-d1dd5d59ea34cbd606b38daf45055566.png"},1225:function(e,t,r){t.Z=r.p+"assets/images/legal02-302b09cdf646929738816eee4076d803.png"},822:function(e,t,r){t.Z=r.p+"assets/images/ks_01_error-73b0f3df916363731951cddd9d6dbaad.png"}}]);