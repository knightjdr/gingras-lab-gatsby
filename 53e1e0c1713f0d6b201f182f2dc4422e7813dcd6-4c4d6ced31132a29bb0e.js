"use strict";(self.webpackChunkgingras_lab=self.webpackChunkgingras_lab||[]).push([[389],{3723:function(e,t,n){n.d(t,{G:function(){return k},L:function(){return h},M:function(){return N},P:function(){return b},_:function(){return l},a:function(){return o},b:function(){return d},d:function(){return u},g:function(){return m},h:function(){return s}});var a=n(7294),r=(n(2369),n(5697)),i=n.n(r);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(n=i[a])>=0||(r[n]=e[n]);return r}var s=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,n;return Boolean(null==e||null==(t=e.images)||null==(n=t.fallback)?void 0:n.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData},u=function(e){var t,n,a;return null==(t=c(e))||null==(n=t.images)||null==(a=n.fallback)?void 0:a.src};function d(e,t,n,a,r){return void 0===r&&(r={}),o({},n,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},r,{opacity:t?1:0})})}function m(e,t,n,a,r,i,l,s){var c={};i&&(c.backgroundColor=i,"fixed"===n?(c.width=a,c.height=r,c.backgroundColor=i,c.position="relative"):("constrained"===n||"fullWidth"===n)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),s&&(c.objectPosition=s);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var g,p=["children"],v=function(e){var t=e.layout,n=e.width,r=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:r/n*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:n,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+r+"' width='"+n+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){var t=e.children,n=l(e,p);return a.createElement(a.Fragment,null,a.createElement(v,o({},n)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],M=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,n=e.srcSet,r=e.loading,i=e.alt,s=void 0===i?"":i,c=e.shouldLoad,u=l(e,f);return a.createElement("img",o({},u,{decoding:"async",loading:r,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?n:void 0,"data-srcset":c?void 0:n,alt:s}))},E=function(e){var t=e.fallback,n=e.sources,r=void 0===n?[]:n,i=e.shouldLoad,s=void 0===i||i,c=l(e,M),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(y,o({},c,t,{sizes:u,shouldLoad:s}));return r.length?a.createElement("picture",null,r.map((function(e){var t=e.media,n=e.srcSet,r=e.type;return a.createElement("source",{key:t+"-"+r+"-"+n,type:r,media:t,srcSet:s?n:void 0,"data-srcset":s?void 0:n,sizes:u})})),d):d};y.propTypes={src:r.string.isRequired,alt:r.string.isRequired,sizes:r.string,srcSet:r.string,shouldLoad:r.bool},E.displayName="Picture",E.propTypes={alt:r.string.isRequired,shouldLoad:r.bool,fallback:r.exact({src:r.string.isRequired,srcSet:r.string,sizes:r.string}),sources:r.arrayOf(r.oneOfType([r.exact({media:r.string.isRequired,type:r.string,sizes:r.string,srcSet:r.string.isRequired}),r.exact({media:r.string,type:r.string.isRequired,sizes:r.string,srcSet:r.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,n=l(e,w);return t?a.createElement(E,o({},n,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},n))};b.displayName="Placeholder",b.propTypes={fallback:r.string,sources:null==(g=E.propTypes)?void 0:g.sources,alt:function(e,t,n){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+n+"`. Validation failed."):null}};var N=function(e){return a.createElement(a.Fragment,null,a.createElement(E,o({},e)),a.createElement("noscript",null,a.createElement(E,o({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=E.propTypes;var I,L,S=function(e,t,n){for(var a=arguments.length,r=new Array(a>3?a-3:0),o=3;o<a;o++)r[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,n].concat(r)):new Error('The "alt" prop is required in '+n+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},j={image:i().object.isRequired,alt:S},C=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],z=["style","className"],T=new Set,A=function(e){var t=e.as,r=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,g=e.onStartLoad,p=e.onLoad,v=e.onError,h=l(e,C),f=i.width,M=i.height,y=i.layout,E=function(e,t,n){var a={},r="gatsby-image-wrapper";return"fixed"===n?(a.width=e,a.height=t):"constrained"===n&&(r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:a}}(f,M,y),w=E.style,b=E.className,N=l(E,z),S=(0,a.useRef)(),j=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var A=function(e,t,n){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+n/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+n+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(y,f,M);return(0,a.useEffect)((function(){I||(I=Promise.all([n.e(774),n.e(217)]).then(n.bind(n,9217)).then((function(e){var t=e.renderImageToString,n=e.swapPlaceholderImage;return L=t,{renderImageToString:t,swapPlaceholderImage:n}})));var e,t,a=S.current.querySelector("[data-gatsby-image-ssr]");return a&&s()?(a.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==p||p({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(j)):L&&T.has(j)?void 0:(I.then((function(n){var a=n.renderImageToString,r=n.swapPlaceholderImage;S.current&&(S.current.innerHTML=a(o({isLoading:!0,isLoaded:T.has(j),image:i},h)),T.has(j)||(e=requestAnimationFrame((function(){S.current&&(t=r(S.current,j,T,c,g,p,v))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){T.has(j)&&L&&(S.current.innerHTML=L(o({isLoading:T.has(j),isLoaded:T.has(j),image:i},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,a.createElement)(r,o({},N,{style:o({},w,c,{backgroundColor:u}),className:b+(d?" "+d:""),ref:S,dangerouslySetInnerHTML:{__html:A},suppressHydrationWarning:!0}))},k=(0,a.memo)((function(e){return e.image?(0,a.createElement)(A,e):null}));k.propTypes=j,k.displayName="GatsbyImage";var x,Z=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],D=function(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),_={src:i().string.isRequired,alt:S,width:D,height:D,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},R=(x=k,function(e){var t=e.src,n=e.__imageData,r=e.__error,i=l(e,Z);return r&&console.warn(r),n?a.createElement(x,o({image:n},i)):(console.warn("Image not loaded",t),null)});R.displayName="StaticImage",R.propTypes=_},2369:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var n;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,n=!1,a=!1,r=0;r<e.length;r++){var i=e[r];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,r)+"-"+e.slice(r),t=!1,a=n,n=!0,r++):n&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,r-1)+"-"+e.slice(r-1),a=n,n=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=n,n=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),n=e,t.pascalCase?n.charAt(0).toUpperCase()+n.slice(1):n)};e.exports=t,e.exports.default=t},78:function(e,t,n){n.d(t,{Z:function(){return N}});var a=n(7294),r=n(4668),i=function(){return a.createElement("footer",{className:"footer"},a.createElement("div",{className:"footer__links"},a.createElement(r.Z,{nav:!0,to:"/"},"Home"),a.createElement(r.Z,{nav:!0,to:"/research/"},"Research"),a.createElement(r.Z,{nav:!0,to:"/resources/"},"Resources"),a.createElement(r.Z,{nav:!0,to:"/publications/"},"Publications"),a.createElement(r.Z,{nav:!0,to:"/people/"},"People"),a.createElement(r.Z,{nav:!0,to:"/news/"},"News & Openings"),a.createElement(r.Z,{nav:!0,to:"/blog/"},"Blog"),a.createElement(r.Z,{nav:!0,to:"/contact/"},"Contact")),a.createElement("small",null,"©"," ",(new Date).getFullYear()," ","Gingras lab."))},o=function(){return a.createElement("span",{className:"navbar__icons"},a.createElement(r.Z,{className:"navbar__icon",to:"https://twitter.com/gingraslab1"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",x:"0",y:"0",viewBox:"0 0 512 512"},a.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))))},l=n(5697),s=n.n(l),c=(0,a.forwardRef)((function(e,t){var n=e.children,i=e.closeMenu,o=e.handleClick,l=e.open;return a.createElement("span",{className:"navbar__menu-container"},a.createElement("button",{className:"navbar__menu-button",onClick:o,type:"button"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"menuIcon",height:"25",role:"img",viewBox:"0 0 448 512"},a.createElement("title",{id:"menuIcon"},"Menu"),a.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))),a.createElement("ul",{className:l?"navbar__menu open":"navbar__menu closed",ref:t},a.createElement("li",null,a.createElement(r.Z,{nav:!0,onClick:i,to:"/research/"},"Research")),a.createElement("li",null,a.createElement(r.Z,{nav:!0,onClick:i,to:"/resources/"},"Resources")),a.createElement("li",null,a.createElement(r.Z,{nav:!0,onClick:i,to:"/publications/"},"Publications")),a.createElement("li",null,a.createElement(r.Z,{nav:!0,onClick:i,to:"/people/"},"People")),a.createElement("li",null,a.createElement(r.Z,{nav:!0,onClick:i,to:"/news/"},"News & Openings")),a.createElement("li",null,a.createElement(r.Z,{nav:!0,onClick:i,to:"/blog/"},"Blog")),a.createElement("li",null,a.createElement(r.Z,{nav:!0,onClick:i,to:"/contact/"},"Contact")),a.createElement("li",null,a.createElement(r.Z,{nav:!0,to:"https://twitter.com/gingraslab1"},"Twitter")),a.createElement("li",{className:"navbar__menu-theme"},n)))}));c.propTypes={children:s().node.isRequired,closeMenu:s().func.isRequired,handleClick:s().func.isRequired,open:s().bool.isRequired};var u=c,d=function(e){if(!e)return!1;var t=e.getBoundingClientRect();return Boolean(window.getComputedStyle(e).getPropertyValue("opacity")>0&&(t.height||t.width))},m=function(e,t,n,r){void 0===n&&(n=!0),void 0===r&&(r=!1);var i=function(e){e&&t()},o=function(t){var n=e.current,a=!n.contains(t.target)&&(r||d(n));i(a)},l=function(t){var n=e.current;"Escape"===t.key&&d(n)&&i(!0)};(0,a.useEffect)((function(){return window.addEventListener("click",o),function(){window.removeEventListener("click",o)}})),(0,a.useEffect)((function(){return n&&window.addEventListener("keydown",l),function(){n&&window.removeEventListener("keydown",l)}}));return function(){window.removeEventListener("click",o),n&&window.removeEventListener("keydown",l)}},g=function(e){var t=e.children,n=(0,a.useState)(!1),r=n[0],i=n[1],o=(0,a.useRef)(null),l=function(){i(!1)};m(o,l);return a.createElement(u,{closeMenu:l,handleClick:function(){i(!r)},open:r,ref:o},t)},p=function(e){var t=e.darkMode,n=e.toggle;return a.createElement("button",{"aria-label":"switch to "+(t?"light":"dark")+" mode",className:"navbar__theme-button",onClick:n,type:"button"},a.createElement("img",{alt:t?"Sun":"Moon",height:16,src:t?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtaWNvbntmaWxsOiMzMzM7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1pY29uIiBkPSJNMjgzLjIxMSA1MTJjNzguOTYyIDAgMTUxLjA3OS0zNS45MjUgMTk4Ljg1Ny05NC43OTIgNy4wNjgtOC43MDgtLjYzOS0yMS40My0xMS41NjItMTkuMzUtMTI0LjIwMyAyMy42NTQtMjM4LjI2Mi03MS41NzYtMjM4LjI2Mi0xOTYuOTU0IDAtNzIuMjIyIDM4LjY2Mi0xMzguNjM1IDEwMS40OTgtMTc0LjM5NCA5LjY4Ni01LjUxMiA3LjI1LTIwLjE5Ny0zLjc1Ni0yMi4yM0EyNTguMTU2IDI1OC4xNTYgMCAwIDAgMjgzLjIxMSAwYy0xNDEuMzA5IDAtMjU2IDExNC41MTEtMjU2IDI1NiAwIDE0MS4zMDkgMTE0LjUxMSAyNTYgMjU2IDI1NnoiLz48L3N2Zz4=":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtcHJpbWFyeXtmaWxsOiMzMzM7fS5mYS1zZWNvbmRhcnl7ZmlsbDojMzMzO29wYWNpdHk6LjY1PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi40MiAyNDAuNWwtOTQuNy00Ny4zIDMzLjUtMTAwLjRjNC41LTEzLjYtOC40LTI2LjUtMjEuOS0yMS45bC0xMDAuNCAzMy41LTQ3LjQxLTk0LjhhMTcuMzEgMTcuMzEgMCAwIDAtMzEgMGwtNDcuMyA5NC43TDkyLjcgNzAuOGMtMTMuNi00LjUtMjYuNSA4LjQtMjEuOSAyMS45bDMzLjUgMTAwLjQtOTQuNyA0Ny40YTE3LjMxIDE3LjMxIDAgMCAwIDAgMzFsOTQuNyA0Ny4zLTMzLjUgMTAwLjVjLTQuNSAxMy42IDguNCAyNi41IDIxLjkgMjEuOWwxMDAuNDEtMzMuNSA0Ny4zIDk0LjdhMTcuMzEgMTcuMzEgMCAwIDAgMzEgMGw0Ny4zMS05NC43IDEwMC40IDMzLjVjMTMuNiA0LjUgMjYuNS04LjQgMjEuOS0yMS45bC0zMy41LTEwMC40IDk0LjctNDcuM2ExNy4zMyAxNy4zMyAwIDAgMCAuMi0zMS4xem0tMTU1LjkgMTA2Yy00OS45MSA0OS45LTEzMS4xMSA0OS45LTE4MSAwYTEyOC4xMyAxMjguMTMgMCAwIDEgMC0xODFjNDkuOS00OS45IDEzMS4xLTQ5LjkgMTgxIDBhMTI4LjEzIDEyOC4xMyAwIDAgMSAwIDE4MXoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDI1NmE5NiA5NiAwIDEgMS05Ni05NiA5Ni4xNSA5Ni4xNSAwIDAgMSA5NiA5NnoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+"}))},v="undefined"!=typeof window&&window,h=v?v.localStorage:{getItem:function(){return null},removeItem:function(){},setItem:function(){}},f=function(){try{var e="test-storage";return h.setItem(e,e),h.removeItem(e),!0}catch(t){return!1}},M=function(){var e=(0,a.useState)(!1),t=e[0],n=e[1];return(0,a.useEffect)((function(){var e=function(){var e,a=(e="darkMode",f?JSON.parse(h.getItem(e)):null);a!==t&&n(a)};return window.addEventListener("storage",e),window.removeEventListener("storage",e)})),(0,a.useEffect)((function(){var e=document.body.className.includes("dark-mode");e!==t&&n(e)}),[]),{darkMode:t,toggle:function(){var e,a,r=!t,i=!0===r?"dark-mode":"light-mode",o=!0===r?"light-mode":"dark-mode";document.body.classList.contains(o)?document.body.classList.replace(o,i):document.body.classList.add(i),n(r),e="darkMode",a=r,f&&h.setItem(e,JSON.stringify(a))}}},y=function(){var e=M();return a.createElement(p,{darkMode:e.darkMode,toggle:e.toggle})},E=function(e){var t=e.shadow;return a.createElement("nav",{className:t?"navbar navbar__shadow":"navbar"},a.createElement("span",{className:"navbar__left"},a.createElement(r.Z,{className:"navbar__home",to:"/"},"Gingras lab"),a.createElement("span",{className:"navbar__links"},a.createElement(r.Z,{to:"/research/"},"Research"),a.createElement(r.Z,{to:"/resources/"},"Resources"),a.createElement(r.Z,{to:"/publications/"},"Publications"),a.createElement(r.Z,{to:"/people/"},"People"),a.createElement(r.Z,{to:"/news/"},"News & Openings"),a.createElement(r.Z,{to:"/blog/"},"Blog"))),a.createElement("span",{className:"navbar__right"},a.createElement("div",{className:"navbar__right-links"},a.createElement(o,null),a.createElement(r.Z,{to:"/contact/"},"Contact"),a.createElement(y,null)),a.createElement(g,null,a.createElement(y,null))))};E.defaultProps={shadow:!0};var w=E,b=function(e){var t=e.children,n=e.navbarShadow;return a.createElement(a.Fragment,null,a.createElement("div",{className:"layout"},a.createElement(w,{shadow:n}),a.createElement("main",null,t),a.createElement(i,null)))};b.defaultProps={navbarShadow:!0};var N=b}}]);