(window.webpackJsonp=window.webpackJsonp||[]).push([[29,32],{107:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return a.remove(),o&&(r.removeAllRanges(),r.addRange(o)),n&&n.focus(),l};e.exports=n,e.exports.default=n},108:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,o]=t;if(n&&o){n=parseInt(n),o=parseInt(o);const e=n<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=n;t!==o;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},110:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r),l=a(101),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(22).a,theme:c};function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},h=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function b(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var y=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?h(e.theme,e.language):void 0;return t.themeDict=a})),s(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,o=u({},b(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),s(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return o[a[0]];var l=n?{display:"inline-block"}:{},c=a.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),s(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,o=e.token,l=u({},b(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=n[l]++)<r[l];){var s=void 0,u=t[l],h=a[l][o];if("string"==typeof h?(u=l>0?u:["plain"],s=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),s=h.content),"string"==typeof s){var b=s.split(m),y=b.length;c.push({types:u,content:b[0]});for(var f=1;f<y;f++)p(c),i.push(c=[]),c.push({types:u,content:b[f]})}else l++,t.push(u),a.push(s),n.push(0),r.push(s.length)}l--,t.pop(),a.pop(),n.pop(),r.pop()}return p(c),i}(void 0!==l?t.tokenize(n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),f=a(107),g=a.n(f),v=a(108),k=a.n(v),j={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=a(112),O=a(102),C=function(){var e=Object(O.useThemeConfig)().prism,t=Object(E.a)().isDarkTheme,a=e.theme||j,n=e.darkTheme||a;return t?n:a},N=a(53),x=a.n(N),S=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},w=/(?:title=")(.*)(?:")/;t.a=function(e){var t=e.children,a=e.className,c=e.metastring,s=Object(O.useThemeConfig)().prism,u=Object(r.useState)(!1),m=u[0],p=u[1],d=Object(r.useState)(!1),h=d[0],b=d[1];Object(r.useEffect)((function(){b(!0)}),[]);var f=Object(r.useRef)(null),v=[],j="",E=C();if(Array.isArray(t)&&(t=t.join("")),c&&S.test(c)){var N=c.match(S)[1];v=k()(N).filter((function(e){return e>0}))}c&&w.test(c)&&(j=c.match(w)[1]);var T=a&&a.replace(/language-/,"");!T&&s.defaultLanguage&&(T=s.defaultLanguage);var P=t.replace(/\n$/,"");if(0===v.length&&void 0!==T){for(var I,L="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(T),D=t.replace(/\n$/,"").split("\n"),M=0;M<D.length;){var R=M+1,A=D[M].match(B);if(null!==A){switch(A.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":L+=R+",";break;case"highlight-start":I=R;break;case"highlight-end":L+=I+"-"+(R-1)+","}D.splice(M,1)}else M+=1}v=k()(L),P=D.join("\n")}var W=function(){g()(P),p(!0),setTimeout((function(){return p(!1)}),2e3)};return o.a.createElement(y,Object(n.a)({},i,{key:String(h),theme:E,code:P,language:T}),(function(e){var t,a=e.className,r=e.style,c=e.tokens,i=e.getLineProps,s=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,j&&o.a.createElement("div",{style:r,className:x.a.codeBlockTitle},j),o.a.createElement("div",{className:x.a.codeBlockContent},o.a.createElement("div",{tabIndex:0,className:Object(l.a)(a,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=j,t))},o.a.createElement("div",{className:x.a.codeBlockLines,style:r},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return v.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return o.a.createElement("span",Object(n.a)({key:t},s({token:e,key:t})))})))})))),o.a.createElement("button",{ref:f,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(x.a.copyButton),onClick:W},m?"Copied":"Copy")))}))}},114:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r),l=a(103),c=a(110),i=a(7),s=a(101),u=a(102),m=(a(55),a(56)),p=a.n(m),d=function(e){return function(t){var a,n=t.id,r=Object(i.a)(t,["id"]),l=Object(u.useThemeConfig)().navbar.hideOnScroll;return n?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(a={},a[p.a.enhancedAnchor]=!l,a)),id:n}),r.children,o.a.createElement("a",{className:"hash-link",href:"#"+n,title:"Direct link to heading"},"#")):o.a.createElement(e,r)}},h=a(57),b=a.n(h),y={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(c.a,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(l.a,e)},pre:function(e){return o.a.createElement("div",Object(n.a)({className:b.a.mdxCodeBlock},e))},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};t.a=y},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(109);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(104),l=a(23),c=a(26),i=a(109),s=a(3),u=a(7),m=a(101),p=a(102),d=a(128),h=a(134),b=a(135),y=a(133),f=a(103),g=a(116),v=a(144),k=a(72),j=a.n(k);var E=function e(t,a){return"link"===t.type?Object(p.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function O(e){var t,a,o,l=e.item,c=e.onItemClick,i=e.collapsible,p=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=l.items,b=l.label,y=E(l,p),f=(a=y,o=Object(n.useRef)(a),Object(n.useEffect)((function(){o.current=a}),[a]),o.current),g=Object(n.useState)((function(){return!!i&&(!y&&l.collapsed)})),v=g[0],k=g[1],O=Object(n.useRef)(null),C=Object(n.useState)(void 0),x=C[0],S=C[1],_=function(e){var t;void 0===e&&(e=!0),S(e?(null===(t=O.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){y&&!f&&v&&k(!1)}),[y,f,v]);var w=Object(n.useCallback)((function(e){e.preventDefault(),x||_(),setTimeout((function(){return k((function(e){return!e}))}),100)}),[x]);return 0===h.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:b},r.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&y},t[j.a.menuLinkText]=!i,t)),onClick:i?w:void 0,href:i?"#!":void 0},d),b),r.a.createElement("ul",{className:"menu__list",ref:O,style:{height:x},onTransitionEnd:function(){v||_(!1)}},h.map((function(e){return r.a.createElement(N,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:p})}))))}function C(e){var t=e.item,a=e.onItemClick,n=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,i=E(t,n);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(f.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:a}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function N(e){switch(e.item.type){case"category":return r.a.createElement(O,e);case"link":default:return r.a.createElement(C,e)}}var x=function(e){var t,a,o=e.path,l=e.sidebar,c=e.sidebarCollapsible,i=void 0===c||c,s=e.onCollapse,u=e.isHidden,f=Object(n.useState)(!1),g=f[0],k=f[1],E=Object(p.useThemeConfig)(),O=E.navbar.hideOnScroll,C=E.hideableSidebar,x=Object(d.a)().isAnnouncementBarClosed,S=Object(y.a)().scrollY;Object(h.a)(g);var _=Object(b.a)();return Object(n.useEffect)((function(){_===b.b.desktop&&k(!1)}),[_]),r.a.createElement("div",{className:Object(m.a)(j.a.sidebar,(t={},t[j.a.sidebarWithHideableNavbar]=O,t[j.a.sidebarHidden]=u,t))},O&&r.a.createElement(v.a,{tabIndex:-1,className:j.a.sidebarLogo}),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive","thin-scrollbar",j.a.menu,(a={"menu--show":g},a[j.a.menuWithAnnouncementBar]=!x&&0===S,a))},r.a.createElement("button",{"aria-label":g?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){k(!g)}},g?r.a.createElement("span",{className:Object(m.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:j.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(N,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),k(!1)},collapsible:i,activePath:o})})))),C&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(m.a)("button button--secondary button--outline",j.a.collapseSidebarButton),onClick:s}))},S=a(114),_=a(124),w=a(111),T=a(73),P=a.n(T);function I(e){var t,a,c,s,u=e.currentDocRoute,d=e.versionMetadata,h=e.children,b=Object(l.default)(),y=b.siteConfig,f=b.isClient,g=d.pluginId,v=d.permalinkToSidebar,k=d.docsSidebars,j=d.version,E=v[u.path],O=k[E],C=Object(n.useState)(!1),N=C[0],_=C[1],w=Object(n.useState)(!1),T=w[0],I=w[1],L=Object(n.useCallback)((function(){T&&I(!1),_(!N)}),[T]);return r.a.createElement(i.a,{key:f,searchMetadatas:{version:j,tag:Object(p.docVersionSearchTag)(g,j)}},r.a.createElement("div",{className:P.a.docPage},O&&r.a.createElement("div",{className:Object(m.a)(P.a.docSidebarContainer,(t={},t[P.a.docSidebarContainerHidden]=N,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(P.a.docSidebarContainer)&&N&&I(!0)},role:"complementary"},r.a.createElement(x,{key:E,sidebar:O,path:u.path,sidebarCollapsible:null===(a=null===(c=y.themeConfig)||void 0===c?void 0:c.sidebarCollapsible)||void 0===a||a,onCollapse:L,isHidden:T}),T&&r.a.createElement("div",{className:P.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:L,onClick:L})),r.a.createElement("main",{className:P.a.docMainContainer},r.a.createElement("div",{className:Object(m.a)("container padding-vert--lg",P.a.docItemWrapper,(s={},s[P.a.docItemWrapperEnhanced]=N,s))},r.a.createElement(o.a,{components:S.a},h)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,o=t.find((function(e){return Object(w.matchPath)(n.pathname,e)}));return o?r.a.createElement(I,{currentDocRoute:o,versionMetadata:a},Object(c.a)(t)):r.a.createElement(_.default,e)}}}]);