const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const config = {
title: 'TKG Unity SDK',
tagline: 'Dinosaurs are cool',
titleDelimiter: '-',//网站标题中间加中划线默认是|
url: 'https://zhangjie0072.github.io/tkg-sdk-doc-inner/',
baseUrl: '/tkg-sdk-doc-inner/',
// baseUrl: '/tkg-sdk-doc/',
onBrokenLinks: 'throw',
onBrokenMarkdownLinks: 'warn',
favicon: 'img/favicon.ico',
trailingSlash: true,//URL结尾加/
baseUrlIssueBanner: false,//关闭提示Banner
organizationName: 'toukagame',//GITHUB库主体人
projectName: 'tkg-sdk-doc-inner',//GITHUB库名字

// Language
i18n: {
defaultLocale: 'en',
locales: ['en', 'zh'],
localeConfigs: {
en: {
htmlLang: 'en-US',
},
zh: {
label: '简体中文',
htmlLang: 'zh-CN',
},
},
},
// Language

presets: [
[
'classic',//模板名字
({
docs: {
path: 'docs',//文档目录名字
routeBasePath: '/',//文档URL
breadcrumbs: true,//面包导航开
showLastUpdateTime: false,//显示文档修改时间
sidebarPath: require.resolve('./sidebars.js'),//边栏
onlyIncludeVersions: ['2.0.1', '2.1.0', '2.2.0'],
},
pages:{
  // path:'src/pages'
},
blog: false,//博客关闭
theme: {
customCss: require.resolve('./src/css/custom.css'),//样式CSS
},
}),
],
],

themeConfig: ({
colorMode: {//主题配置
defaultMode: 'light',//默认白色主题
disableSwitch: false,//黑白主题开关
respectPrefersColorScheme: true,//默认白色主题
},
hideableSidebar: true,//可收起边栏
navbar: {
hideOnScroll: false,//菜单栏滚动收起
title: 'TKG Unity SDK Docs',//名字同LOGO一排
logo: {
alt: 'My Site Logo',//Logo文字提示
src: 'img/logo.svg',//Logo图片
width: 32,//Logo宽
height: 32,//Logo高
},
items: [
// {
// type: 'doc',//类型  doc是文档
// docId: 'intro',//导航菜单链接文档ID 可以不用
// position: 'left',//导航菜单位置
// label: 'Tutorial',//导航菜单名字
// }, 
{
  type: 'doc',
  docId: 'index',
  position: 'left',
  label: 'Docs'
 },
{
  type: 'doc',
  docId: 'api/common-api',
  position: 'left',
  label: 'API'
},
{
  type: 'docsVersionDropdown',
  position: 'right',
  dropdownItemsAfter: [{to: '/versions', label: 'All versions'}],
  dropdownActiveClassDisabled: true,
},{
  type: 'localeDropdown',//语言下拉
  position: 'right',//语言位置
  }
],
},
// footer: {//页脚
// style: 'dark',//页脚色
// copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,//页脚版权
// },
prism: {
theme: lightCodeTheme,
darkTheme: darkCodeTheme,
},
}),
};
module.exports = config;
