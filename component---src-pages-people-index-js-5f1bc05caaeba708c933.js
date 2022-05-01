"use strict";(self.webpackChunkgingras_lab=self.webpackChunkgingras_lab||[]).push([[446],{78:function(e,a,t){t.d(a,{Z:function(){return y}});var n=t(7294),l=t(7593),i=function(){return n.createElement("footer",{className:"footer"},n.createElement("div",{className:"footer__links"},n.createElement(l.Z,{nav:!0,to:"/"},"Home"),n.createElement(l.Z,{nav:!0,to:"/research/"},"Research"),n.createElement(l.Z,{nav:!0,to:"/resources/"},"Resources"),n.createElement(l.Z,{nav:!0,to:"/publications/"},"Publications"),n.createElement(l.Z,{nav:!0,to:"/people/"},"People"),n.createElement(l.Z,{nav:!0,to:"/news/"},"News & Openings"),n.createElement(l.Z,{nav:!0,to:"/blog/"},"Blog"),n.createElement(l.Z,{nav:!0,to:"/contact/"},"Contact")),n.createElement("small",null,"©"," ",(new Date).getFullYear()," ","Gingras lab."))},o=function(){return n.createElement("span",{className:"navbar__icons"},n.createElement(l.Z,{className:"navbar__icon",to:"https://twitter.com/gingraslab1"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"20",width:"20",x:"0",y:"0",viewBox:"0 0 512 512"},n.createElement("path",{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}))))},r=t(5697),c=t.n(r),s=(0,n.forwardRef)((function(e,a){var t=e.children,i=e.closeMenu,o=e.handleClick,r=e.open;return n.createElement("span",{className:"navbar__menu-container"},n.createElement("button",{className:"navbar__menu-button",onClick:o,type:"button"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-labelledby":"menuIcon",height:"25",role:"img",viewBox:"0 0 448 512"},n.createElement("title",{id:"menuIcon"},"Menu"),n.createElement("path",{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"}))),n.createElement("ul",{className:r?"navbar__menu open":"navbar__menu closed",ref:a},n.createElement("li",null,n.createElement(l.Z,{nav:!0,onClick:i,to:"/research/"},"Research")),n.createElement("li",null,n.createElement(l.Z,{nav:!0,onClick:i,to:"/resources/"},"Resources")),n.createElement("li",null,n.createElement(l.Z,{nav:!0,onClick:i,to:"/publications/"},"Publications")),n.createElement("li",null,n.createElement(l.Z,{nav:!0,onClick:i,to:"/people/"},"People")),n.createElement("li",null,n.createElement(l.Z,{nav:!0,onClick:i,to:"/news/"},"News & Openings")),n.createElement("li",null,n.createElement(l.Z,{nav:!0,onClick:i,to:"/blog/"},"Blog")),n.createElement("li",null,n.createElement(l.Z,{nav:!0,onClick:i,to:"/contact/"},"Contact")),n.createElement("li",null,n.createElement(l.Z,{nav:!0,to:"https://twitter.com/gingraslab1"},"Twitter")),n.createElement("li",{className:"navbar__menu-theme"},t)))}));s.propTypes={children:c().node.isRequired,closeMenu:c().func.isRequired,handleClick:c().func.isRequired,open:c().bool.isRequired};var m=s,u=function(e){if(!e)return!1;var a=e.getBoundingClientRect();return Boolean(window.getComputedStyle(e).getPropertyValue("opacity")>0&&(a.height||a.width))},M=function(e,a,t,l){void 0===t&&(t=!0),void 0===l&&(l=!1);var i=function(e){e&&a()},o=function(a){var t=e.current,n=!t.contains(a.target)&&(l||u(t));i(n)},r=function(a){var t=e.current;"Escape"===a.key&&u(t)&&i(!0)};(0,n.useEffect)((function(){return window.addEventListener("click",o),function(){window.removeEventListener("click",o)}})),(0,n.useEffect)((function(){return t&&window.addEventListener("keydown",r),function(){t&&window.removeEventListener("keydown",r)}}));return function(){window.removeEventListener("click",o),t&&window.removeEventListener("keydown",r)}},d=function(e){var a=e.children,t=(0,n.useState)(!1),l=t[0],i=t[1],o=(0,n.useRef)(null),r=function(){i(!1)};M(o,r);return n.createElement(m,{closeMenu:r,handleClick:function(){i(!l)},open:l,ref:o},a)},g=function(e){var a=e.darkMode,t=e.toggle;return n.createElement("button",{"aria-label":"switch to "+(a?"light":"dark")+" mode",className:"navbar__theme-button",onClick:t,type:"button"},n.createElement("img",{alt:a?"Sun":"Moon",height:16,src:a?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtaWNvbntmaWxsOiMzMzM7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJmYS1pY29uIiBkPSJNMjgzLjIxMSA1MTJjNzguOTYyIDAgMTUxLjA3OS0zNS45MjUgMTk4Ljg1Ny05NC43OTIgNy4wNjgtOC43MDgtLjYzOS0yMS40My0xMS41NjItMTkuMzUtMTI0LjIwMyAyMy42NTQtMjM4LjI2Mi03MS41NzYtMjM4LjI2Mi0xOTYuOTU0IDAtNzIuMjIyIDM4LjY2Mi0xMzguNjM1IDEwMS40OTgtMTc0LjM5NCA5LjY4Ni01LjUxMiA3LjI1LTIwLjE5Ny0zLjc1Ni0yMi4yM0EyNTguMTU2IDI1OC4xNTYgMCAwIDAgMjgzLjIxMSAwYy0xNDEuMzA5IDAtMjU2IDExNC41MTEtMjU2IDI1NiAwIDE0MS4zMDkgMTE0LjUxMSAyNTYgMjU2IDI1NnoiLz48L3N2Zz4=":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtcHJpbWFyeXtmaWxsOiMzMzM7fS5mYS1zZWNvbmRhcnl7ZmlsbDojMzMzO29wYWNpdHk6LjY1PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUwMi40MiAyNDAuNWwtOTQuNy00Ny4zIDMzLjUtMTAwLjRjNC41LTEzLjYtOC40LTI2LjUtMjEuOS0yMS45bC0xMDAuNCAzMy41LTQ3LjQxLTk0LjhhMTcuMzEgMTcuMzEgMCAwIDAtMzEgMGwtNDcuMyA5NC43TDkyLjcgNzAuOGMtMTMuNi00LjUtMjYuNSA4LjQtMjEuOSAyMS45bDMzLjUgMTAwLjQtOTQuNyA0Ny40YTE3LjMxIDE3LjMxIDAgMCAwIDAgMzFsOTQuNyA0Ny4zLTMzLjUgMTAwLjVjLTQuNSAxMy42IDguNCAyNi41IDIxLjkgMjEuOWwxMDAuNDEtMzMuNSA0Ny4zIDk0LjdhMTcuMzEgMTcuMzEgMCAwIDAgMzEgMGw0Ny4zMS05NC43IDEwMC40IDMzLjVjMTMuNiA0LjUgMjYuNS04LjQgMjEuOS0yMS45bC0zMy41LTEwMC40IDk0LjctNDcuM2ExNy4zMyAxNy4zMyAwIDAgMCAuMi0zMS4xem0tMTU1LjkgMTA2Yy00OS45MSA0OS45LTEzMS4xMSA0OS45LTE4MSAwYTEyOC4xMyAxMjguMTMgMCAwIDEgMC0xODFjNDkuOS00OS45IDEzMS4xLTQ5LjkgMTgxIDBhMTI4LjEzIDEyOC4xMyAwIDAgMSAwIDE4MXoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzUyIDI1NmE5NiA5NiAwIDEgMS05Ni05NiA5Ni4xNSA5Ni4xNSAwIDAgMSA5NiA5NnoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+"}))},I="undefined"!=typeof window&&window,N=I?I.localStorage:{getItem:function(){return null},removeItem:function(){},setItem:function(){}},A=function(){try{var e="test-storage";return N.setItem(e,e),N.removeItem(e),!0}catch(a){return!1}},E=function(){var e=(0,n.useState)(!1),a=e[0],t=e[1];return(0,n.useEffect)((function(){var e=function(){var e,n=(e="darkMode",A?JSON.parse(N.getItem(e)):null);n!==a&&t(n)};return window.addEventListener("storage",e),window.removeEventListener("storage",e)})),(0,n.useEffect)((function(){var e=document.body.className.includes("dark-mode");e!==a&&t(e)}),[]),{darkMode:a,toggle:function(){var e,n,l=!a,i=!0===l?"dark-mode":"light-mode",o=!0===l?"light-mode":"dark-mode";document.body.classList.contains(o)?document.body.classList.replace(o,i):document.body.classList.add(i),t(l),e="darkMode",n=l,A&&N.setItem(e,JSON.stringify(n))}}},h=function(){var e=E();return n.createElement(g,{darkMode:e.darkMode,toggle:e.toggle})},D=function(e){var a=e.shadow;return n.createElement("nav",{className:a?"navbar navbar__shadow":"navbar"},n.createElement("span",{className:"navbar__left"},n.createElement(l.Z,{className:"navbar__home",to:"/"},"Gingras lab"),n.createElement("span",{className:"navbar__links"},n.createElement(l.Z,{to:"/research/"},"Research"),n.createElement(l.Z,{to:"/resources/"},"Resources"),n.createElement(l.Z,{to:"/publications/"},"Publications"),n.createElement(l.Z,{to:"/people/"},"People"),n.createElement(l.Z,{to:"/news/"},"News & Openings"),n.createElement(l.Z,{to:"/blog/"},"Blog"))),n.createElement("span",{className:"navbar__right"},n.createElement("div",{className:"navbar__right-links"},n.createElement(o,null),n.createElement(l.Z,{to:"/contact/"},"Contact"),n.createElement(h,null)),n.createElement(d,null,n.createElement(h,null))))};D.defaultProps={shadow:!0};var w=D,C=function(e){var a=e.children,t=e.navbarShadow;return n.createElement(n.Fragment,null,n.createElement("div",{className:"layout"},n.createElement(w,{shadow:t}),n.createElement("main",null,a),n.createElement(i,null)))};C.defaultProps={navbarShadow:!0};var y=C},6218:function(e,a,t){t.r(a),t.d(a,{default:function(){return M}});var n=t(7294),l=t(396),i=t(1383),o=t(78),r=t(7593),c=[{name:"Amanda Veri",position:"Lead, Research Training Programs, UHN",role:"Co-Op Student"},{name:"Amber Couzens",position:"Research Scientist, Rapid Novor Inc",role:"Postdoctoral Fellow"},{name:"Bhavisha Rathod",role:"Lab Manager"},{name:"Beatriz Gonzalez-Badillo",role:"Technician"},{name:"Benjamin Piette",role:"PhD Student"},{name:"Chris Go",position:"Medical Writer, INVIVO",role:"PhD Student"},{name:"Debbie (Seo Jung) Hong",position:"PhD Student, Columbia University",role:"Technician"},{name:"Dushyandi Rajendran",position:"Global Study Associate, AstraZeneca",role:"Lab Manager"},{name:"Ginny Chen",position:"Lead Consultant, Head of Intellectual Property, Inventya Ltd",role:"PhD Student"},{name:"Hala Abdouni",position:"Research Associate II, Avectas",role:"Technician"},{name:"Irene Trinh",position:"Postdoctoral Fellow, Donnelly Centre, University of Toronto",role:"Postdoctoral Fellow"},{name:"James Knight",role:"Bioinformatician"},{name:"Jean-Philippe Lambert",position:"Assistant Professor, Université Laval",role:"Postdoctoral Fellow",website:"http://www.crchudequebec.ulaval.ca/en/research/researchers/jean-philippe-lambert/"},{name:"Ji-Young Youn",position:"Scientist, SickKids",role:"Postdoctoral Fellow",website:"https://www.sickkids.ca/en/staff/y/ji-young-youn/"},{name:"Joshua Sandor",role:"Student Research Assistant"},{name:"Kyle Belozerov",position:"Post-Doctoral Fellow, York University",role:"Postdoctoral Fellow"},{name:"Linda McBroom-Cerajewski",role:"Postdoctoral Fellow"},{name:"Lisa D'Ambrosio",position:"Replacement Professor, University of Ottawa",role:"Masters Student"},{name:"Mahya Fazel-Zarandi",position:"Undergraduate Student, Princeton University",role:"Student Research Assistant"},{name:"Marilyn Goudreault",position:"Lab Manager and Research Associate, Smith Lab, IRIC",role:"Lab Manager"},{name:"Meghan McFadden",position:"Senior Research Associate (Proteomics) Ted Rogers Centre for Heart Research, University of Toronto",role:"MS Technician"},{name:"Michael Mullin",position:"Scientific Leader and Associate Fellow, GSK, UK",role:"Postdoctoral Fellow"},{name:"Michelle Kean",position:"Associate Director of Medical and Scientific Strategy, BluPrint Oncology",role:"PhD Student"},{name:"Monika Tucholska",position:"Scientist, Sanofi Pasteur Analytical Research and Development",role:"MS Technician"},{name:"Nicole St-Denis",position:"High-Fidelity Science Communications",role:"Postdoctoral Fellow",website:"https://www.hifiscicomm.ca"},{name:"Payman Samavarchi Tehrani",role:"Postdoctoral Fellow"},{name:"Sally Tisayakorn",position:"Pharmaceutical industry",role:"Masters Student"},{name:"Shen Zhang",position:"Research Investigator and Director, Proteomics Platform, Research Department of Reproductive and Genetic Hospital CITIC-XIANGYA",role:"Postdoctoral Fellow"},{name:"Stefan Karl Maier",role:"Postdoctoral Fellow"},{name:"Tina Papazotos",position:"PhD Student, Concordia University",role:"Co-Op Student"},{name:"Wade Dunham",position:"Quality Control, Crofter's Organic",role:"Masters Student, Technician and Lab Manager"},{name:"Yiwang Zhou",position:"Biostatistics, University of Michigan",role:"Masters Student"}];c.sort((function(e,a){return e.name.localeCompare(a.name)}));var s=function(){return n.createElement("ul",null,c.map((function(e){return n.createElement("li",{key:e.name},n.createElement("div",{className:"people__alumnus"},n.createElement("span",{className:"people__alumnus-name"},e.name),","," ",n.createElement("span",{className:"people__alumnus-role"},e.role),(a=e.position,t=e.website,a&&t?n.createElement("div",{className:"people__alumnus-position"}," ","Current position:"," ",n.createElement(r.Z,{to:t},a)):a?n.createElement("div",{className:"people__alumnus-position"}," ","Current position:"," ",a):null)));var a,t})))},m=[{email:"gingras@lunenfeld.ca",file:"anneclaude-gingras",name:"Anne-Claude Gingras",title:"Principal investigator"},{email:"colwill@lunenfeld.ca",file:"karen-colwill",name:"Karen Colwill",title:"Manager, NBCC"},{email:"rkalloush@lunenfeld.ca",file:"rawan-kalloush",name:"Rawan Kalloush",title:"Lab manager"},{email:"lseifried@lunenfeld.ca",file:"laurie-seifried",name:"Laurie Seifried",title:"CoVaRR-Net pillar coordinator"},{email:"hesketh@lunenfeld.ca",file:"geoff-hesketh",name:"Geoffrey Hesketh",title:"Postdoctoral fellow"},{email:"clmartin@lunenfeld.ca",file:"claire-martin",name:"Claire Martin",title:"Postdoctoral fellow"},{email:"udionne@lunenfeld.ca",file:"ugo-dionne",name:"Ugo Dionne",title:"Postdoctoral fellow"},{email:"jon.roth@mail.utoronto.ca",file:"jonathan-roth",name:"Jonathan Roth",title:"Graduate student"},{email:"bdyakov@lunenfeld.ca",file:"boris-dyakov",name:"Boris Dyakov",title:"Graduate student"},{email:"rsamson@lunenfeld.ca",file:"reuben-samson",name:"Reuben Samson",title:"Graduate student"},{email:"kabe@lunenfeld.ca",file:"kento-abe",name:"Kento Abe",title:"Graduate student"},{email:"shimon.rosenthal@mail.utoronto.ca",file:"shimon-rosenthal",name:"Shimon Rosenthal",title:"Graduate student"},{email:"fzangari@lunenfeld.ca",file:"francesco-zangari",name:"Francesco Zangari",title:"Graduate student"},{email:"jkitaygorodsky@lunenfeld.ca",file:"julia-kitaygorodsky",name:"Julia Kitaygorodsky",title:"Graduate student"},{email:"ralmismar@lunenfeld.ca",file:"rasha-mismar",name:"Rasha Al Mismar",title:"Graduate student"},{email:"asrinivasan@lunenfeld.ca",file:"aparna-srinivasan",name:"Aparna Srinivasan",title:"Graduate student"},{email:"ngrinberg@lunenfeld.ca",file:"nicolas-grinberg",name:"Nicolas Grinberg",title:"Graduate student"},{email:"bahmed@lunenfeld.ca",file:"raktan-ahmed",name:"Raktan Ahmed",title:"Graduate student"},{email:"bmohamed@lunenfeld.ca",file:"",name:"Bilan Mohamed",title:"Graduate student"},{email:"fqi@lunenfeld.ca",file:"",name:"Freda Qi",title:"Bioinformatics specialist"},{email:"gliu@lunenfeld.ca",file:"frank-liu",name:"Frank Liu",title:"Programmer"},{email:"jpzhang@lunenfeld.ca",file:"jianping-zhang",name:"Jian-Ping Zhang",title:"Programmer"},{email:"larsen@lunenfeld.ca",file:"brett-larsen",name:"Brett Larsen",title:"Mass spectrometry coordinator"},{email:"cwong@lunenfeld.ca",file:"cassandra-wong",name:"Cassandra Wong",title:"Mass spectrometry technician"},{email:"bseale@lunenfeld.ca",file:"brendon-seale",name:"Brendon  Seale",title:"Research associate"},{email:"qhu@lunenfeld.ca",file:"queenie-hu",name:"Queenie Hu",title:"Research associate"},{email:"rdayam@lunenfeld.ca",file:"monica-dayam",name:"Monica Dayam",title:"Research associate"},{email:"whardy@lunenfeld.ca",file:"rod-hardy",name:"Rod Hardy",title:"CoVaRR-Net research associate"},{email:"zlin@lunenfeld.ca",file:"zhenyuan-lin",name:"Zhen-Yuan Lin",title:"Research technician"},{email:"gmailhot@lunenfeld.ca",file:"genevieve-mailhot",name:"Geneviève Mailhot",title:"Research technician"},{email:"delgadobrand@lunenfeld.ca",file:"",name:"Melanie Delgado-Brand",title:"Research technician"},{email:"ttursun@lunenfeld.ca",file:"",name:"Tulunay Tursun",title:"Research technician"},{email:"jly@lunenfeld.ca",file:"",name:"Jonathan Ly",title:"Research technician"}],u=function(e){return m.map((function(a){return n.createElement("div",{key:a.name},n.createElement(l.G,{image:a.file?e[a.file]:e.user,alt:a.name}),n.createElement("div",null,n.createElement("h2",null,a.name),a.title&&n.createElement("h3",null,a.title),a.email&&n.createElement(r.Z,{nav:!0,to:"mailto:"+a.email},a.email)))}))},M=function(e){var a=e.data,t=a.allFile.edges.reduce((function(e,a){var t;return Object.assign({},e,((t={})[a.node.name]=a.node.childImageSharp.gatsbyImageData,t))}),{});return n.createElement(o.Z,null,n.createElement(i.Z,{description:"Meet the members of the laboratory of Dr. Anne-Claude Gingras.",title:"People"}),n.createElement("div",{className:"people"},n.createElement("section",null,n.createElement("header",null,n.createElement("h1",null,"People"),n.createElement("img",{alt:"Group of people",height:"25",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtcHJpbWFyeXtmaWxsOiNmNjRmNTk7fS5mYS1zZWNvbmRhcnl7ZmlsbDojMTJjMmU5O29wYWNpdHk6LjV9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTk2IDIyNGE2NCA2NCAwIDEgMC02NC02NCA2NC4wNiA2NC4wNiAwIDAgMCA2NCA2NHptNDgwIDMyaC02NGE2My44MSA2My44MSAwIDAgMC00NS4xIDE4LjZBMTQ2LjI3IDE0Ni4yNyAwIDAgMSA1NDIgMzg0aDY2YTMyIDMyIDAgMCAwIDMyLTMydi0zMmE2NC4wNiA2NC4wNiAwIDAgMC02NC02NHptLTUxMiAwYTY0LjA2IDY0LjA2IDAgMCAwLTY0IDY0djMyYTMyIDMyIDAgMCAwIDMyIDMyaDY1LjlhMTQ2LjY0IDE0Ni42NCAwIDAgMSA3NS4yLTEwOS40QTYzLjgxIDYzLjgxIDAgMCAwIDEyOCAyNTZ6bTQ4MC0zMmE2NCA2NCAwIDEgMC02NC02NCA2NC4wNiA2NC4wNiAwIDAgMCA2NCA2NHoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMzk2LjggMjg4aC04LjNhMTU3LjUzIDE1Ny41MyAwIDAgMS02OC41IDE2Yy0yNC42IDAtNDcuNi02LTY4LjUtMTZoLTguM0ExMTUuMjMgMTE1LjIzIDAgMCAwIDEyOCA0MDMuMlY0MzJhNDggNDggMCAwIDAgNDggNDhoMjg4YTQ4IDQ4IDAgMCAwIDQ4LTQ4di0yOC44QTExNS4yMyAxMTUuMjMgMCAwIDAgMzk2LjggMjg4ek0zMjAgMjU2YTExMiAxMTIgMCAxIDAtMTEyLTExMiAxMTEuOTQgMTExLjk0IDAgMCAwIDExMiAxMTJ6IiBjbGFzcz0iZmEtcHJpbWFyeSIvPjwvc3ZnPg=="})),n.createElement("div",{className:"people__grid"},u(t))),n.createElement("section",null,n.createElement("header",null,n.createElement("h1",null,"Lab photos"),n.createElement("img",{alt:"Camera",height:"25",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtcHJpbWFyeXtmaWxsOiNmNjRmNTk7fS5mYS1zZWNvbmRhcnl7ZmlsbDojMTJjMmU5O29wYWNpdHk6LjV9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI1NiAyMzJhODggODggMCAxIDAgODggODggODggODggMCAwIDAtODgtODh6bTAgNTZhMzIuMDkgMzIuMDkgMCAwIDAtMzIgMzIgMTYgMTYgMCAwIDEtMzIgMCA2NC4wNiA2NC4wNiAwIDAgMSA2NC02NCAxNiAxNiAwIDAgMSAwIDMyek00ODAgMzJIMjU2bC02NCA0OEgxNkExNiAxNiAwIDAgMCAwIDk2djY0aDUxMlY2NGEzMi4wOSAzMi4wOSAwIDAgMC0zMi0zMnoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMTc2IDQ4YTE2IDE2IDAgMCAwLTE2LTE2SDY0YTE2IDE2IDAgMCAwLTE2IDE2djMyaDEyOHpNMCAxNjB2MjcyYTQ4IDQ4IDAgMCAwIDQ4IDQ4aDQxNmE0OCA0OCAwIDAgMCA0OC00OFYxNjB6bTI1NiAyODBhMTIwIDEyMCAwIDEgMSAxMjAtMTIwIDEyMCAxMjAgMCAwIDEtMTIwIDEyMHoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+"})),n.createElement("div",{className:"people__photos"},n.createElement("figure",{className:"christmas-2018"},n.createElement(l.G,{image:a.christmas2018.childImageSharp.gatsbyImageData,alt:"Christmas party, 2018"}),n.createElement("figcaption",null,"Christmas party, 2018.")),n.createElement("figure",{className:"appreciation-day-2018"},n.createElement(l.G,{image:a.appreciationDay2018.childImageSharp.gatsbyImageData,alt:"Staff appreciation day, 2018"}),n.createElement("figcaption",null,"Staff appreciation day, 2018.")))),n.createElement("section",null,n.createElement("header",null,n.createElement("h1",null,"Alumni"),n.createElement("img",{alt:"Two people, one standing in front of the other",height:"25",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS4zIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtcHJpbWFyeXtmaWxsOiNmNjRmNTk7fS5mYS1zZWNvbmRhcnl7ZmlsbDojMTJjMmU5O29wYWNpdHk6LjV9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTQ4MCAyNTZhOTYgOTYgMCAxIDAtOTYtOTYgOTYgOTYgMCAwIDAgOTYgOTZ6bTQ4IDMyaC0zLjhjLTEzLjkgNC44LTI4LjYgOC00NC4yIDhzLTMwLjMtMy4yLTQ0LjItOEg0MzJjLTIwLjQgMC0zOS4yIDUuOS01NS43IDE1LjQgMjQuNCAyNi4zIDM5LjcgNjEuMiAzOS43IDk5Ljh2MzguNGMwIDIuMi0uNSA0LjMtLjYgNi40SDU5MmE0OCA0OCAwIDAgMCA0OC00OCAxMTEuOTQgMTExLjk0IDAgMCAwLTExMi0xMTJ6IiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTE5MiAyNTZBMTEyIDExMiAwIDEgMCA4MCAxNDRhMTExLjk0IDExMS45NCAwIDAgMCAxMTIgMTEyem03Ni44IDMyaC04LjNhMTU3LjUzIDE1Ny41MyAwIDAgMS02OC41IDE2Yy0yNC42IDAtNDcuNi02LTY4LjUtMTZoLTguM0ExMTUuMjMgMTE1LjIzIDAgMCAwIDAgNDAzLjJWNDMyYTQ4IDQ4IDAgMCAwIDQ4IDQ4aDI4OGE0OCA0OCAwIDAgMCA0OC00OHYtMjguOEExMTUuMjMgMTE1LjIzIDAgMCAwIDI2OC44IDI4OHoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+"})),n.createElement("div",{className:"people__alumni"},s()))))}}}]);