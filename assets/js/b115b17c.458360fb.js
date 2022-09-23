"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7778],{3905:function(e,t,l){l.d(t,{Zo:function(){return s},kt:function(){return p}});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function d(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),k=u(l),p=a,v=k["".concat(o,".").concat(p)]||k[p]||c[p]||r;return l?n.createElement(v,i(i({ref:t},s),{},{components:l})):n.createElement(v,i({ref:t},s))}));function p(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var u=2;u<r;u++)i[u]=l[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},5649:function(e,t,l){l.r(t),l.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return d},metadata:function(){return u},toc:function(){return c}});var n=l(7462),a=l(3366),r=(l(7294),l(3905)),i=["components"],d={title:"Basic API",sidebar_label:"Basic API",description:"",sidebar_position:97},o=void 0,u={unversionedId:"api/common-api",id:"version-2.2.x/api/common-api",title:"Basic API",description:"",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-2.2.x/api/common-api.md",sourceDirName:"api",slug:"/api/common-api",permalink:"/tkg-sdk-doc/api/common-api",tags:[],version:"2.2.x",sidebarPosition:97,frontMatter:{title:"Basic API",sidebar_label:"Basic API",description:"",sidebar_position:97},sidebar:"apiSidebar",next:{title:"Advanced API",permalink:"/tkg-sdk-doc/api/advance-api"}},s={},c=[{value:"1 Init",id:"1-init",level:2},{value:"1.1 InitSDK",id:"11-initsdk",level:3},{value:"1.2 SetLogEnable",id:"12-setlogenable",level:3},{value:"2 Compliance Popup",id:"2-compliance-popup",level:2},{value:"2.1 Sample code",id:"21-sample-code",level:3},{value:"3 Advertising integration",id:"3-advertising-integration",level:2},{value:"3.1 InterstitialAd",id:"31-interstitialad",level:3},{value:"3.1.1 Sample code",id:"311-sample-code",level:4},{value:"3.2 RewardAd",id:"32-rewardad",level:3},{value:"3.2.1 Sample code",id:"321-sample-code",level:4},{value:"3.3 Splash Ad",id:"33-splash-ad",level:3},{value:"3.4 Native ad",id:"34-native-ad",level:3},{value:"3.4.1 Sample code",id:"341-sample-code",level:4},{value:"3.5 Banner ad",id:"35-banner-ad",level:3},{value:"3.5.1 Sample code",id:"351-sample-code",level:4},{value:"4 Event Tracking",id:"4-event-tracking",level:2},{value:"4.1 Level Progression Events",id:"41-level-progression-events",level:3},{value:"4.1.1 LevelStart",id:"411-levelstart",level:4},{value:"4.1.2 LevelEnd",id:"412-levelend",level:4},{value:"4.2 Custom Event",id:"42-custom-event",level:3},{value:"4.2.1 Sample code",id:"421-sample-code",level:4}],k={toc:c};function p(e){var t=e.components,l=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-init"},"1 Init"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"InitSDK"),(0,r.kt)("td",null,"(Action _initCallback = null)"),(0,r.kt)("td",null,"SDK Init",(0,r.kt)("br",null),"_initCallback: Initialization finished callback.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"SetLogEnable"),(0,r.kt)("td",null,"(bool _enable)"),(0,r.kt)("td",null,"Set up the output of the debug log",(0,r.kt)("br",null),"true: open ",(0,r.kt)("br",null),"false: close"))),(0,r.kt)("h3",{id:"11-initsdk"},"1.1 InitSDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.InitSDK(initCallback);\nprivate void initCallback()\n{\n    Debug.Log("init callback");\n}  \n')),(0,r.kt)("h3",{id:"12-setlogenable"},"1.2 SetLogEnable"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.SetLogEnable(true);\n")),(0,r.kt)("h2",{id:"2-compliance-popup"},"2 Compliance Popup"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"OpenPolicyPop"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Opens a Compliance popup in the current process"))),(0,r.kt)("h3",{id:"21-sample-code"},"2.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenPolicyPop();\n")),(0,r.kt)("h2",{id:"3-advertising-integration"},"3 Advertising integration"),(0,r.kt)("h3",{id:"31-interstitialad"},"3.1 InterstitialAd"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowInterstitialAd"),(0,r.kt)("td",null,"(TKGIVAdPositionName _adPos, Action _callback = null, IVADType _IvType = IVADType.IV1)"),(0,r.kt)("td",null,"Show Interstitial Ad",(0,r.kt)("br",null),(0,r.kt)("br",null),"_adPos: Name of interstitial ad placement.\uff08Please define the TKGIVAdPositionName first\uff09",(0,r.kt)("br",null),"_callback: Callback of ad close and playback fail.",(0,r.kt)("br",null),"_IvType: Type of frequency control",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IsReadyInterstitialAd"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Whether InterstitialAd can be displayed.",(0,r.kt)("br",null),"General games do not need to call by themselves."))),(0,r.kt)("h4",{id:"311-sample-code"},"3.1.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// show interstitial ad\nTKGSDKManager.Instance.ShowInterstitialAd(TKGIVAdPositionName.IV_Retry);\n\n// is ready interstitial ad\nbool isReadyIV = TKGSDKManager.Instance.IsReadyInterstitialAd();\n")),(0,r.kt)("h3",{id:"32-rewardad"},"3.2 RewardAd"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowRewardAd"),(0,r.kt)("td",null,"(TKGRVPositionName _adPos, Action<bool> _rewardCallback = null, Action _showFailedCallback = null, bool _showSDKToast = false)"),(0,r.kt)("td",null,"Show RewardAd",(0,r.kt)("br",null),(0,r.kt)("br",null),"_adPos: Name of reward ad placement.\uff08Please define the TKGRVPositionName first.\uff09",(0,r.kt)("br",null),"_rewardCallback: Callback for reward.(Recommended developers issue rewards in this callback.)",(0,r.kt)("br",null),"_showFailedCallback: Callback of ad close and playback fail.",(0,r.kt)("br",null),"_showSDKToast: Whether to use the SDK to prompt the video presentation failure page. true:Use the failure page provided by the SDK. false:Do not use the failure notification page provided by the SDK.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IsReadyRewardAd"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Whether RewardAd can be displayed.",(0,r.kt)("br",null),"General games do not need to call by themselves."))),(0,r.kt)("h4",{id:"321-sample-code"},"3.2.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'// show reward ad\nTKGSDKManager.Instance.ShowRewardAd(TKGRVPositionName.RV_GetDoubleCoin, RewardResult);\n\nprivate void RewardResult(bool _bReward)\n{\n    Debug.Log("[ToukaSDKDemo] Reward result\uff1a" + _bReward);\n}\n\n// is ready reward ad\nbool isReadyRV = TKGSDKManager.Instance. IsReadyRewardAd();\n')),(0,r.kt)("h3",{id:"33-splash-ad"},"3.3 Splash Ad"),(0,r.kt)("p",null,"No need to do anything to access Splash Ads.    ",(0,r.kt)("br",null),"\n(If the ad_splash_id in the parameter configuration file is configured correctly, the splash ad can be displayed normally when the game starts.)"),(0,r.kt)("h3",{id:"34-native-ad"},"3.4 Native ad"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowNative"),(0,r.kt)("td",null,'(RectTransform pRect, Camera pCam = null, string pAdPos = "")'),(0,r.kt)("td",null,"Show Native Ad",(0,r.kt)("br",null),(0,r.kt)("br",null),"pRect: Native advertising display location",(0,r.kt)("br",null),"pCam: camera",(0,r.kt)("br",null),"pAdPos: display native AD point name",(0,r.kt)("br",null))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"IsReadyNativeAd"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Whether NativeAd can be displayed.",(0,r.kt)("br",null),"General games do not need to call by themselves."))),(0,r.kt)("h4",{id:"341-sample-code"},"3.4.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// show native ad\nTKGSDKManager.Instance.ShowNative(nativeImage.rectTransform);\n\n// is ready native ad\nbool isReadyNative = TKGSDKManager.Instance.IsReadyNativeAd();\n")),(0,r.kt)("h3",{id:"35-banner-ad"},"3.5 Banner ad"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"ShowBanner"),(0,r.kt)("td",null,"(TKGBannerAlign _bannerAlign)"),(0,r.kt)("td",null,"Show Banner Ad",(0,r.kt)("br",null),(0,r.kt)("br",null),"Display banner ads",(0,r.kt)("br",null),"_bannerAlign: the position displayed by the banner AD.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"HideBanner"),(0,r.kt)("td",null,"-"),(0,r.kt)("td",null,"Hide Banner Ad.",(0,r.kt)("br",null)))),(0,r.kt)("h4",{id:"351-sample-code"},"3.5.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"// show banner ad\nTKGSDKManager.Instance.ShowBanner(TKGBannerAlign.BannerCenterBottomAlign);\n\n// hide ad\nTKGSDKManager.Instance.HideBanner();\n")),(0,r.kt)("h2",{id:"4-event-tracking"},"4 Event Tracking"),(0,r.kt)("h3",{id:"41-level-progression-events"},"4.1 Level Progression Events"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LevelStart"),(0,r.kt)("td",null,"(int _level)  ",(0,r.kt)("br",null),"(string _level)"),(0,r.kt)("td",null,"Level Start",(0,r.kt)("br",null),"_level: current level id.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LevelEnd"),(0,r.kt)("td",null,"(int _level, StageResult _stageResult)",(0,r.kt)("br",null),"(string _level, StageResult _stageResult)"),(0,r.kt)("td",null,"Level End    ",(0,r.kt)("br",null),"_level: current level id. ",(0,r.kt)("br",null),"_stageResult: level result ",(0,r.kt)("br",null),(0,r.kt)("br",null),"StageResult : StageSucc / StageFail / retry in level: StageRetry / back in level: StageBack"))),(0,r.kt)("h4",{id:"411-levelstart"},"4.1.1 LevelStart"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelStart(1);\nTKGSDKManager.Instance.LevelStart("S_1");\n')),(0,r.kt)("h4",{id:"412-levelend"},"4.1.2 LevelEnd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);\nTKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);\nTKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);\nTKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);\n')),(0,r.kt)("h3",{id:"42-custom-event"},"4.2 Custom Event"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"API"),(0,r.kt)("td",null,"Parameter"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort) "),(0,r.kt)("td",null,"Report game tracking event ",(0,r.kt)("br",null),"(the number of parameters is different) ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, string _key, string _value) "),(0,r.kt)("td",null,"same as above ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, string _key01, string _value01, string _key02, string _value02) "),(0,r.kt)("td",null,"same as above ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"LogEvent"),(0,r.kt)("td",null,"(string _eventSort, Dictionary<string, string> _eventDic = null) "),(0,r.kt)("td",null,"same as above "))),(0,r.kt)("h4",{id:"421-sample-code"},"4.2.1 Sample code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_Skin");\nTKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");\nTKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");\n')))}p.isMDXComponent=!0}}]);