"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[385],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,g=f["".concat(u,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},739:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={sidebar_position:1},u="\u51c6\u5907\u5de5\u4f5c",p={unversionedId:"tkg-integration/sdk-prepare",id:"tkg-integration/sdk-prepare",title:"\u51c6\u5907\u5de5\u4f5c",description:"\u83b7\u53d6\u4ea7\u54c1\u9700\u6c42\u6587\u6863",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/tkg-integration/sdk-prepare.md",sourceDirName:"tkg-integration",slug:"/tkg-integration/sdk-prepare",permalink:"/tkg-sdk-doc-inner/zh/next/tkg-integration/sdk-prepare",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SDK\u4e0b\u8f7d",permalink:"/tkg-sdk-doc-inner/zh/next/download"},next:{title:"SDK\u5bfc\u5165",permalink:"/tkg-sdk-doc-inner/zh/next/tkg-integration/sdk-basic/sdk-import"}},l={},s=[{value:"\u83b7\u53d6\u4ea7\u54c1\u9700\u6c42\u6587\u6863",id:"\u83b7\u53d6\u4ea7\u54c1\u9700\u6c42\u6587\u6863",level:3},{value:"\u83b7\u53d6\u63a5\u5165\u53c2\u6570",id:"\u83b7\u53d6\u63a5\u5165\u53c2\u6570",level:3}],f={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,i.kt)("h3",{id:"\u83b7\u53d6\u4ea7\u54c1\u9700\u6c42\u6587\u6863"},"\u83b7\u53d6\u4ea7\u54c1\u9700\u6c42\u6587\u6863"),(0,i.kt)("p",null,"\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u4e3aTouka\u9488\u5bf9\u63a5\u5165\u7684\u6e38\u620f\u5b9a\u5236\u5316\u7684\u63a5\u5165\u65b9\u6848\uff0c\u5305\u542b\u5e7f\u544a\u4f4d\u8bbe\u8ba1\u3001\u6570\u636e\u7edf\u8ba1\u57cb\u70b9\u3001\u529f\u80fd\u903b\u8f91\u7684\u63a7\u5236\u7b49\uff0c\u9700\u8981\u5f00\u53d1\u8005\u6309\u7167\u6587\u6863\u5b8c\u6210\u63a5\u5165\u3002\u8bf7\u5f00\u53d1\u8005\u8054\u7cfb\u5546\u52a1\u5bf9\u63a5\u4eba\u83b7\u53d6\u6b64\u6587\u6863\u3002"),(0,i.kt)("h3",{id:"\u83b7\u53d6\u63a5\u5165\u53c2\u6570"},"\u83b7\u53d6\u63a5\u5165\u53c2\u6570"),(0,i.kt)("p",null,"ToukaSDK\u6b63\u5e38\u521d\u59cb\u5316\u4f9d\u8d56\u5404\u7c7b\u53c2\u6570\u7684\u914d\u7f6e\uff0c\u5728\u5f00\u53d1\u8005\u83b7\u53d6\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u65f6\u5c06\u4f1a\u540c\u65f6\u83b7\u53d6\u4e00\u4efdSDK\u63a5\u5165\u6240\u9700\u8981\u7684\u53c2\u6570\u6e05\u5355\uff0c\u7528\u4e8e\u914d\u7f6e\u5230SDK\u63a5\u5165\u4ee3\u7801\u4e2d\u3002"))}d.isMDXComponent=!0}}]);