"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4185],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,u=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=s(n),f=l,k=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function f(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=p;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(t,e,n){n.d(e,{Z:function(){return l}});var r=n(7294);function l(t){var e=t.children,n=t.hidden,l=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},9877:function(t,e,n){n.d(e,{Z:function(){return c}});var r=n(7462),l=n(7294),a=n(2389),i=n(5979),o=n(6010),u="tabItem_LplD";function s(t){var e,n,a,s=t.lazy,c=t.block,d=t.defaultValue,p=t.values,f=t.groupId,k=t.className,m=l.Children.map(t.children,(function(t){if((0,l.isValidElement)(t)&&void 0!==t.props.value)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:m.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),b=(0,i.lx)(g,(function(t,e){return t.value===e.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===d?d:null!=(e=null!=d?d:null==(n=m.find((function(t){return t.props.default})))?void 0:n.props.value)?e:null==(a=m[0])?void 0:a.props.value;if(null!==v&&!g.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+g.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,i.UB)(),y=h.tabGroupChoices,w=h.setTabGroupChoices,N=(0,l.useState)(v),O=N[0],T=N[1],S=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var Z=y[f];null!=Z&&Z!==O&&g.some((function(t){return t.value===Z}))&&T(Z)}var C=function(t){var e=t.currentTarget,n=S.indexOf(e),r=g[n].value;r!==O&&(E(e),T(r),null!=f&&w(f,r))},j=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r=S.indexOf(t.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var l=S.indexOf(t.currentTarget)-1;n=S[l]||S[S.length-1]}null==(e=n)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},k)},g.map((function(t){var e=t.value,n=t.label,a=t.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===e?0:-1,"aria-selected":O===e,key:e,ref:function(t){return S.push(t)},onKeyDown:j,onFocus:C,onClick:C},a,{className:(0,o.Z)("tabs__item",u,null==a?void 0:a.className,{"tabs__item--active":O===e})}),null!=n?n:e)}))),s?(0,l.cloneElement)(m.filter((function(t){return t.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},m.map((function(t,e){return(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==O})}))))}function c(t){var e=(0,a.Z)();return l.createElement(s,(0,r.Z)({key:String(e)},t))}},3216:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),i=n(9877),o=n(8215),u=["components"],s={sidebar_position:2},c="SDK\u53c2\u6570\u914d\u7f6e",d={unversionedId:"tkg-integration/sdk-basic/sdk-config",id:"version-2.2.0/tkg-integration/sdk-basic/sdk-config",title:"SDK\u53c2\u6570\u914d\u7f6e",description:"- \u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u653e\u7f6e\u8def\u5f84: `Assets/StreamingAssets/Configs/ `",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.2.0/tkg-integration/sdk-basic/sdk-config.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-config",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-config",tags:[],version:"2.2.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SDK\u5bfc\u5165",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-import"},next:{title:"\u521d\u59cb\u5316",permalink:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-basic/sdk-func-init"}},p={},f=[{value:"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6",id:"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u8bbe\u7f6e\u5de5\u7a0b\u914d\u7f6e",id:"\u8bbe\u7f6e\u5de5\u7a0b\u914d\u7f6e",level:3}],k={toc:f};function m(t){var e=t.components,s=(0,l.Z)(t,u);return(0,a.kt)("wrapper",(0,r.Z)({},k,s,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sdk\u53c2\u6570\u914d\u7f6e"},"SDK\u53c2\u6570\u914d\u7f6e"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u653e\u7f6e\u8def\u5f84: ",(0,a.kt)("inlineCode",{parentName:"li"},"Assets/StreamingAssets/Configs/ ")," ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u529f\u80fd\u76f8\u5173\u914d\u7f6e\u6587\u4ef6\u90fd\u5728\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"Assets/TKGSDK/Config/Scripts"),"\u76ee\u5f55\u4e2d\u3002  "),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"li",href:"/tkg-sdk-doc-inner/zh/tkg-integration/sdk-prepare#%E8%8E%B7%E5%8F%96%E6%8E%A5%E5%85%A5%E5%8F%82%E6%95%B0"},"\u3010\u51c6\u5907\u5de5\u4f5c-\u83b7\u53d6\u63a5\u5165\u53c2\u6570\u3011"),"\u4e2d\u83b7\u53d6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("font",{color:"ff0000"},"\u7279\u522b\u7559\u610f\uff1a\u66f4\u65b0SDK\u7248\u672c\u65f6\u4e0d\u8981\u8986\u76d6\u6b64\u76ee\u5f55\u3002"))))),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6"},"\u8bbe\u7f6e\u914d\u7f6e\u6587\u4ef6"),(0,a.kt)("p",null,"\u8bf7\u5c06\u83b7\u53d6\u5230\u7684\u53c2\u6570\u914d\u7f6e\u6587\u4ef6\uff0c\u653e\u5230\u5de5\u7a0b ",(0,a.kt)("inlineCode",{parentName:"p"},"Assets/StreamingAssets/Configs/ ")," \u76ee\u5f55\u4e0b\u3002",(0,a.kt)("br",null),"    "),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"\u56fd\u5185\u7248\u672c",label:"\u56fd\u5185\u7248\u672c",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u5e73\u53f0"),(0,a.kt)("td",null,"\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iOS CN"),(0,a.kt)("td",null,"tkg_config.plist")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Android CN"),(0,a.kt)("td",null,"tkg_config.properties"))),(0,a.kt)("p",null,"Configured as shown below: ",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"config01",src:n(2927).Z,width:"300",height:"312"}))),(0,a.kt)(o.Z,{value:"\u6d77\u5916\u7248\u672c",label:"\u6d77\u5916\u7248\u672c\uff08\u5373\u5c06\u5f00\u653e\uff09",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u5e73\u53f0"),(0,a.kt)("td",null,"\u914d\u7f6e\u6587\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iOS Global"),(0,a.kt)("td",null,"tkg_config.plist")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Android GB"),(0,a.kt)("td",null,"tkg_config.properties"))),(0,a.kt)("p",null,"Configured as shown below: ",(0,a.kt)("br",null),(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"config01",src:n(3971).Z,width:"300",height:"409"})))),(0,a.kt)("h3",{id:"\u8bbe\u7f6e\u5de5\u7a0b\u914d\u7f6e"},"\u8bbe\u7f6e\u5de5\u7a0b\u914d\u7f6e"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u83dc\u5355\u680f\u5de5\u5177\u81ea\u52a8\u8bbe\u7f6e ",(0,a.kt)("strong",{parentName:"p"}," \u6e38\u620f\u540d\u79f0\u3001 Bundle ID/ Package Name\u3001\u5b8f\u5b9a\u4e49"),"\u3002\u6216\u8005\u624b\u52a8\u5c06\u4ed6\u4eec\u8bbe\u7f6e\u6b63\u786e\u3002",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"\u56fd\u5185\u7248\u672c",label:"\u56fd\u5185\u7248\u672c",default:!0,mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("td",null,"\u5e73\u53f0"),(0,a.kt)("td",null,"\u83dc\u5355\u5de5\u5177"),(0,a.kt)("td",null,"SDK \u9700\u8981\u7684 Define Symbols"),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iOS CN"),(0,a.kt)("td",null,"Settings For IOS CN"),(0,a.kt)("td",null,"-")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Android CN"),(0,a.kt)("td",null,"Settings For Android CN"),(0,a.kt)("td",null,"-"))),(0,a.kt)("p",null,"  Tools as follows. ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"config01",src:n(9108).Z,width:"777",height:"220"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"config04",src:n(6978).Z,width:"458",height:"104"}))),(0,a.kt)(o.Z,{value:"\u6d77\u5916\u7248\u672c",label:"\u6d77\u5916\u7248\u672c\uff08\u5373\u5c06\u5f00\u653e\uff09",mdxType:"TabItem"},(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u5e73\u53f0"),(0,a.kt)("td",null,"\u83dc\u5355\u5de5\u5177"),(0,a.kt)("td",null,"SDK \u9700\u8981\u7684 Define Symbols")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"iOS GB"),(0,a.kt)("td",null,"Settings For IOS GB"),(0,a.kt)("td",null,"AppStore_GB")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Android GB"),(0,a.kt)("td",null,"Settings For Android GB"),(0,a.kt)("td",null,"GooglePlay"))),(0,a.kt)("p",null,"  Tools as follows.    ",(0,a.kt)("br",null),"\n",(0,a.kt)("img",{alt:"config02",src:n(3097).Z,width:"761",height:"213"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"config05",src:n(2797).Z,width:"398",height:"88"})))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"config03",src:n(6648).Z,width:"480",height:"120"})))}m.isMDXComponent=!0},6648:function(t,e,n){e.Z=n.p+"assets/images/config_bundle_id-3ba3af9b1c8f8b17977e1329ba3c13b4.jpg"},2927:function(t,e,n){e.Z=n.p+"assets/images/config_cn-10b1ddfd014a3ea56cea9e1a7eaadbad.jpg"},6978:function(t,e,n){e.Z=n.p+"assets/images/config_cn_definesymbols-8a685865bd744b423acda5fc5982083a.jpg"},9108:function(t,e,n){e.Z=n.p+"assets/images/config_cn_name-610b0051dff20f19a24fc7c934fd173c.jpg"},3971:function(t,e,n){e.Z=n.p+"assets/images/config_gb-1fcb12bd6a67fb4536309f8ccb0319d7.jpg"},2797:function(t,e,n){e.Z=n.p+"assets/images/config_gb_definesymbols-d5660ed7792a7d5b442e356a79a48b88.jpg"},3097:function(t,e,n){e.Z=n.p+"assets/images/config_gb_name-c7bc18b723b3b86e79607a5b2ec55e55.jpg"}}]);