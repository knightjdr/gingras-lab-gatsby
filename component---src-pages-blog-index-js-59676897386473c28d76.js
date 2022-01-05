"use strict";(self.webpackChunkgingras_lab=self.webpackChunkgingras_lab||[]).push([[524],{1378:function(e,t,n){n.d(t,{Z:function(){return L}});var a=n(7294),l=n(8202),c=function(){return a.createElement("footer",{className:"footer"},a.createElement("div",{className:"footer__links"},a.createElement(l.Z,{nav:!0,to:"/"},"Home"),a.createElement(l.Z,{nav:!0,to:"/research/"},"Research"),a.createElement(l.Z,{nav:!0,to:"/resources/"},"Resources"),a.createElement(l.Z,{nav:!0,to:"/publications/"},"Publications"),a.createElement(l.Z,{nav:!0,to:"/people/"},"People"),a.createElement(l.Z,{nav:!0,to:"/news/"},"News & Openings"),a.createElement(l.Z,{nav:!0,to:"/blog/"},"Blog"),a.createElement(l.Z,{nav:!0,to:"/contact/"},"Contact")),a.createElement("small",null,"©"," ",(new Date).getFullYear()," ","Gingras lab."))},r=function(){return a.createElement("span",{className:"navbar__icons"},a.createElement(l.Z,{className:"navbar__icon",to:"https://twitter.com/gingraslab1"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",x:"0",y:"0",viewBox:"0 0 512 512"},a.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))))},o=n(5697),i=n.n(o),M=(0,a.forwardRef)((function(e,t){var n=e.children,c=e.closeMenu,r=e.handleClick,o=e.open;return a.createElement("span",{className:"navbar__menu-container"},a.createElement("button",{className:"navbar__menu-button",onClick:r,type:"button"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"menuIcon",height:"25",role:"img",viewBox:"0 0 448 512"},a.createElement("title",{id:"menuIcon"},"Menu"),a.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))),a.createElement("ul",{className:o?"navbar__menu open":"navbar__menu closed",ref:t},a.createElement("li",null,a.createElement(l.Z,{nav:!0,onClick:c,to:"/research/"},"Research")),a.createElement("li",null,a.createElement(l.Z,{nav:!0,onClick:c,to:"/resources/"},"Resources")),a.createElement("li",null,a.createElement(l.Z,{nav:!0,onClick:c,to:"/publications/"},"Publications")),a.createElement("li",null,a.createElement(l.Z,{nav:!0,onClick:c,to:"/people/"},"People")),a.createElement("li",null,a.createElement(l.Z,{nav:!0,onClick:c,to:"/news/"},"News & Openings")),a.createElement("li",null,a.createElement(l.Z,{nav:!0,onClick:c,to:"/blog/"},"Blog")),a.createElement("li",null,a.createElement(l.Z,{nav:!0,onClick:c,to:"/contact/"},"Contact")),a.createElement("li",null,a.createElement(l.Z,{nav:!0,to:"https://twitter.com/gingraslab1"},"Twitter")),a.createElement("li",{className:"navbar__menu-theme"},n)))}));M.propTypes={children:i().node.isRequired,closeMenu:i().func.isRequired,handleClick:i().func.isRequired,open:i().bool.isRequired};var u=M,m=function(e){if(!e)return!1;var t=e.getBoundingClientRect();return Boolean(window.getComputedStyle(e).getPropertyValue("opacity")>0&&(t.height||t.width))},s=function(e,t,n,l){void 0===n&&(n=!0),void 0===l&&(l=!1);var c=function(e){e&&t()},r=function(t){var n=e.current,a=!n.contains(t.target)&&(l||m(n));c(a)},o=function(t){var n=e.current;"Escape"===t.key&&m(n)&&c(!0)};(0,a.useEffect)((function(){return window.addEventListener("click",r),function(){window.removeEventListener("click",r)}})),(0,a.useEffect)((function(){return n&&window.addEventListener("keydown",o),function(){n&&window.removeEventListener("keydown",o)}}));return function(){window.removeEventListener("click",r),n&&window.removeEventListener("keydown",o)}},g=function(e){var t=e.children,n=(0,a.useState)(!1),l=n[0],c=n[1],r=(0,a.useRef)(null),o=function(){c(!1)};s(r,o);return a.createElement(u,{closeMenu:o,handleClick:function(){c(!l)},open:l,ref:r},t)},d=function(e){var t=e.darkMode,n=e.toggle;return a.createElement("button",{"aria-label":"switch to "+(t?"light":"dark")+" mode",className:"navbar__theme-button",onClick:n,type:"button"},a.createElement("img",{alt:t?"Sun":"Moon",height:16,src:t?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtaWNvbntmaWxsOiMzMzM7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1pY29uIiBkPSJNMjgzLjIxMSA1MTJjNzguOTYyIDAgMTUxLjA3OS0zNS45MjUgMTk4Ljg1Ny05NC43OTIgNy4wNjgtOC43MDgtLjYzOS0yMS40My0xMS41NjItMTkuMzUtMTI0LjIwMyAyMy42NTQtMjM4LjI2Mi03MS41NzYtMjM4LjI2Mi0xOTYuOTU0IDAtNzIuMjIyIDM4LjY2Mi0xMzguNjM1IDEwMS40OTgtMTc0LjM5NCA5LjY4Ni01LjUxMiA3LjI1LTIwLjE5Ny0zLjc1Ni0yMi4yM0EyNTguMTU2IDI1OC4xNTYgMCAwIDAgMjgzLjIxMSAwYy0xNDEuMzA5IDAtMjU2IDExNC41MTEtMjU2IDI1NiAwIDE0MS4zMDkgMTE0LjUxMSAyNTYgMjU2IDI1NnoiLz48L3N2Zz4=":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtcHJpbWFyeXtmaWxsOiMzMzM7fS5mYS1zZWNvbmRhcnl7ZmlsbDojMzMzO29wYWNpdHk6LjY1PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi40MiAyNDAuNWwtOTQuNy00Ny4zIDMzLjUtMTAwLjRjNC41LTEzLjYtOC40LTI2LjUtMjEuOS0yMS45bC0xMDAuNCAzMy41LTQ3LjQxLTk0LjhhMTcuMzEgMTcuMzEgMCAwIDAtMzEgMGwtNDcuMyA5NC43TDkyLjcgNzAuOGMtMTMuNi00LjUtMjYuNSA4LjQtMjEuOSAyMS45bDMzLjUgMTAwLjQtOTQuNyA0Ny40YTE3LjMxIDE3LjMxIDAgMCAwIDAgMzFsOTQuNyA0Ny4zLTMzLjUgMTAwLjVjLTQuNSAxMy42IDguNCAyNi41IDIxLjkgMjEuOWwxMDAuNDEtMzMuNSA0Ny4zIDk0LjdhMTcuMzEgMTcuMzEgMCAwIDAgMzEgMGw0Ny4zMS05NC43IDEwMC40IDMzLjVjMTMuNiA0LjUgMjYuNS04LjQgMjEuOS0yMS45bC0zMy41LTEwMC40IDk0LjctNDcuM2ExNy4zMyAxNy4zMyAwIDAgMCAuMi0zMS4xem0tMTU1LjkgMTA2Yy00OS45MSA0OS45LTEzMS4xMSA0OS45LTE4MSAwYTEyOC4xMyAxMjguMTMgMCAwIDEgMC0xODFjNDkuOS00OS45IDEzMS4xLTQ5LjkgMTgxIDBhMTI4LjEzIDEyOC4xMyAwIDAgMSAwIDE4MXoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDI1NmE5NiA5NiAwIDEgMS05Ni05NiA5Ni4xNSA5Ni4xNSAwIDAgMSA5NiA5NnoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+"}))},N="undefined"!=typeof window&&window,E=N?N.localStorage:{getItem:function(){return null},removeItem:function(){},setItem:function(){}},I=function(){try{var e="test-storage";return E.setItem(e,e),E.removeItem(e),!0}catch(t){return!1}},v=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){var e,a=(e="darkMode",I?JSON.parse(E.getItem(e)):null);a!==t&&n(a)};return window.addEventListener("storage",e),window.removeEventListener("storage",e)})),(0,a.useEffect)((function(){var e=document.body.className.includes("dark-mode");e!==t&&n(e)}),[]),{darkMode:t,toggle:function(){var e,a,l=!t,c=!0===l?"dark-mode":"light-mode",r=!0===l?"light-mode":"dark-mode";document.body.classList.contains(r)?document.body.classList.replace(r,c):document.body.classList.add(c),n(l),e="darkMode",a=l,I&&E.setItem(e,JSON.stringify(a))}}},w=function(){var e=v();return a.createElement(d,{darkMode:e.darkMode,toggle:e.toggle})},A=function(e){var t=e.shadow;return a.createElement("nav",{className:t?"navbar navbar__shadow":"navbar"},a.createElement("span",{className:"navbar__left"},a.createElement(l.Z,{className:"navbar__home",to:"/"},"Gingras lab"),a.createElement("span",{className:"navbar__links"},a.createElement(l.Z,{to:"/research/"},"Research"),a.createElement(l.Z,{to:"/resources/"},"Resources"),a.createElement(l.Z,{to:"/publications/"},"Publications"),a.createElement(l.Z,{to:"/people/"},"People"),a.createElement(l.Z,{to:"/news/"},"News & Openings"),a.createElement(l.Z,{to:"/blog/"},"Blog"))),a.createElement("span",{className:"navbar__right"},a.createElement("div",{className:"navbar__right-links"},a.createElement(r,null),a.createElement(l.Z,{to:"/contact/"},"Contact"),a.createElement(w,null)),a.createElement(g,null,a.createElement(w,null))))};A.defaultProps={shadow:!0};var j=A,b=function(e){var t=e.children,n=e.navbarShadow;return a.createElement(a.Fragment,null,a.createElement("div",{className:"layout"},a.createElement(j,{shadow:n}),a.createElement("main",null,t),a.createElement(c,null)))};b.defaultProps={navbarShadow:!0};var L=b},8382:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(7294),l=n(6125),c=n(8202),r=function(e){var t=e.post,n=t.excerpt,l=t.frontmatter,r=l.author,o=l.date,i=l.slug,M=l.title;return a.createElement("div",{className:"blog-link"},a.createElement(c.Z,{nav:!0,to:i},a.createElement("h2",null,M)),a.createElement("address",{className:"blog-link__author"},"By"," ",r),a.createElement("time",{className:"blog-link__date",dateTime:o},o),a.createElement("p",null,n))},o=n(4695),i=n(1378),M=function(e){var t=e.data,n=t.allMarkdownRemark.edges,M=t.ogImage,u=t.twitterImage,m=(0,l.e)(M),s=(0,l.e)(u);return a.createElement(i.Z,null,a.createElement(o.Z,{description:"The Gingras Lab - Demystified, a blog about our research projects and activities",ogImage:m,title:"Blog",twitterImage:s}),a.createElement("div",{className:"blog-index-container"},a.createElement("div",{className:"blog-index"},a.createElement("h1",null,"Blog: The Gingras Lab - Demystified"),a.createElement("div",{className:"blog-index__rss-container"},a.createElement(c.Z,{"aria-label":"RSS download",download:!0,nav:!0,to:"/rss.xml"},"RSS feed:",a.createElement("img",{alt:"RSS",height:15,src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMwMy43NCA0NjMuMjFjLTguMzUtMTU0LjYtMTMyLjE4LTI3OC41OS0yODYuOTUtMjg2Ljk1QTE2IDE2IDAgMCAwIDAgMTkyLjI1djQ4LjA3YTE2IDE2IDAgMCAwIDE0Ljg5IDE2YzExMS44MyA3LjI4IDIwMS40NyA5Ni43IDIwOC43NyAyMDguNzdhMTYgMTYgMCAwIDAgMTYgMTQuODloNDguMDdhMTYgMTYgMCAwIDAgMTYtMTYuNzl6TTE2LjUgMzJBMTYgMTYgMCAwIDAgMCA0OHY0OC4wOGExNiAxNiAwIDAgMCAxNS40NSAxNmMxOTEuMTggNy44NCAzNDQuNjMgMTYxLjMyIDM1Mi40NyAzNTIuNDdhMTYgMTYgMCAwIDAgMTYgMTUuNDVINDMyYTE2IDE2IDAgMCAwIDE2LTE2LjVDNDM5LjYgMjI5LjY4IDI1MS40NiA0MC40NSAxNi41IDMyeiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0wIDQxNmE2NCA2NCAwIDEgMSA2NCA2NCA2NCA2NCAwIDAgMS02NC02NHoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+"}))),n.map((function(e){return a.createElement(r,{key:e.node.id,post:e.node})})))))}}}]);