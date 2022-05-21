"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9639],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),v=c(n),g=a,k=v["".concat(s,".").concat(g)]||v[g]||d[g]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=v;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},4761:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:6},s="Event Tracking",c={unversionedId:"tkg-integration/sdk-basic/sdk-func-event",id:"version-2.0.1/tkg-integration/sdk-basic/sdk-func-event",title:"Event Tracking",description:"Level Progression Events",source:"@site/versioned_docs/version-2.0.1/tkg-integration/sdk-basic/sdk-func-event.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-event",permalink:"/tkg-sdk-doc-inner/zh/2.0.1/tkg-integration/sdk-basic/sdk-func-event",tags:[],version:"2.0.1",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Advertising integration",permalink:"/tkg-sdk-doc-inner/zh/2.0.1/tkg-integration/sdk-basic/sdk-func-ads"},next:{title:"Advanced Integration",permalink:"/tkg-sdk-doc-inner/zh/2.0.1/tkg-integration/sdk-other-func"}},u={},d=[{value:"Level Progression Events",id:"level-progression-events",level:2},{value:"NotifyGameStart",id:"notifygamestart",level:3},{value:"NotifyGameEnd",id:"notifygameend",level:3},{value:"Custom Event",id:"custom-event",level:2}],v={toc:d};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-tracking"},"Event Tracking"),(0,i.kt)("h2",{id:"level-progression-events"},"Level Progression Events"),(0,i.kt)("p",null,"Level progression events are used to track and analyze the user's level behavior in the game, Including level start, level end, etc.     "),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("b",null,(0,i.kt)("font",{color:"ff0000"},"Attention: if you have \u2018Levels\u2019 / 'Quest' / 'Task' or 'Mission' in your game, you must integrate \"Progression Events\" !")),(0,i.kt)("br",null),(0,i.kt)("p",{parentName:"div"},"Level start call: NotifyGameStart",(0,i.kt)("br",{parentName:"p"}),"\n","Level end call: NotifyGameEnd"))),(0,i.kt)("h3",{id:"notifygamestart"},"NotifyGameStart"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.NotifyGameStart(level);\nTKGSDKManager.Instance.NotifyGameStart(1);\nTKGSDKManager.Instance.NotifyGameStart("S_1");\n')),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"NotifyGameStart")," method when starting each level."),(0,i.kt)("p",null,"API:\nvoid NotifyGameStart(int level);"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"level"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"int/string"),(0,i.kt)("td",null,"_level: current level id.         ",(0,i.kt)("br",null),"You can get the specific values  \u300cLevel Progress Event Access\u300d on your game product requirement."))),(0,i.kt)("h3",{id:"notifygameend"},"NotifyGameEnd"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.NotifyGameEnd(_level, _isSucc); \nTKGSDKManager.Instance.NotifyGameEnd(1, true); \nTKGSDKManager.Instance.NotifyGameEnd("S_1", false); \n')),(0,i.kt)("p",null,"Call ",(0,i.kt)("inlineCode",{parentName:"p"},"NotifyGameEnd")," method when finish each level.   "),(0,i.kt)("p",null,"API:\nbool NotifyGameEnd(int _level, bool _isSucc);"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Name"),(0,i.kt)("td",null,"isRequired"),(0,i.kt)("td",null,"Type"),(0,i.kt)("td",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_level"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"int/string"),(0,i.kt)("td",null,"_level: current level id.         ",(0,i.kt)("br",null),"You can get the specific values  \u300cLevel Progress Event Access\u300d on your game product requirement.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"_isSucc"),(0,i.kt)("td",null,"Y"),(0,i.kt)("td",null,"bool"),(0,i.kt)("td",null,"true: Level Succ     ",(0,i.kt)("br",null),"false: Level not Succ"))),(0,i.kt)("h2",{id:"custom-event"},"Custom Event"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_Skin");\nTKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");\nTKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");\n')),(0,i.kt)("p",null,"API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort)"),(0,i.kt)("li",{parentName:"ul"},"void LogEvent(string _eventSort, string _key, string _value)"),(0,i.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)"),(0,i.kt)("li",{parentName:"ul"},"void  LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)")))}g.isMDXComponent=!0}}]);