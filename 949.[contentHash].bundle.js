"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[949],{8949:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var o=n(2318),a=n(7882),i=n(7294),r=n(4933),s=n(951),l=n(1907),c=n(3492),p=n(9912),u=n(282),m=n(1724),d=n(7294);function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var o,a,i=[],r=!0,s=!1;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(i.push(o.value),!t||i.length!==t);r=!0);}catch(e){s=!0,a=e}finally{try{r||null==n.return||n.return()}finally{if(s)throw a}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var f=function(e){var t=e.name,n=e.dates,o=e.pic,g=e.short_desc,f=e.long_desc,b=e.link,v=e.languages,y=e.tools,S=e.experience,w=e.subjects,j=e.focus,_=e.school_proj,E=e.code_snippet,A=e.partner,k=(0,a.Z)(),C=h((0,i.useState)(!1),2),x=C[0],P=C[1];return d.createElement("div",null,d.createElement(r.Z,{className:k.card},d.createElement("div",{className:k.cardHeader},d.createElement(m.H1,null,t),d.createElement(m.H2,null,n)),d.createElement(s.Z,{component:"img",height:"200rem",width:"100%",image:o,alt:t}),d.createElement(m.xv,{className:"bold"},g),d.createElement(m.xv,null,v?"Languages: ".concat(v.join(", ")):""),d.createElement(m.xv,null,y?"Tools: ".concat(y.join(", ")):""),d.createElement(m.xv,null,w?"Subjects: ".concat(w.join(", ")):""),d.createElement(l.Z,{disableSpacing:!0},d.createElement(m.pb,{expand:x,onClick:function(){P(!x)},"aria-expanded":x,"aria-label":"show more"},d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",stroke:"#26A641"},d.createElement("path",{d:"M0 0h24v24H0V0z",fill:"none"}),d.createElement("path",{d:"M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"})))),d.createElement(c.Z,{in:x,timeout:"auto",unmountOnExit:!0},d.createElement(p.Z,null,d.createElement(s.Z,{component:"img",image:E,alt:"Code Snippet for {name}"}),d.createElement(m.xv,null,f),d.createElement(m.xv,null,S?"Experience: ".concat(S):""),d.createElement(m.xv,null,j?"Focus: ".concat(j.join(", ")):""),d.createElement(m.xv,null,_?"School Project":"Personal Project"),d.createElement(m.xv,null,A.boolean?d.createElement("a",{href:A.link,target:"_blank",rel:"noreferrer"},A.name):""),d.createElement("div",{className:"center"},d.createElement(u.Z,{className:k.customButton},d.createElement(m.ZP,{href:b,target:"_blank",rel:"noreferrer"},"View Project")))))))},b=n.p+"headphones_screenshot.webp",v=n.p+"headphones_snippet.jpg",y=n.p+"smiling_school_screenshot.webp",S=n.p+"smiling_school_snippet.jpg",w=n.p+"twilight_bark_screenshot.webp",j=n.p+"twilight_bark_snippet.jpg",_=[{name:"Holberton Headphones",dates:"8/25/21 - 9/3/21",pic:b,short_desc:"Recreation of fully-responsive static frontend",long_desc:"7-day exact replication of Figma design at 3 sizes using pure CSS",link:"https://github.com/RLewis11769/holberton-headphones",languages:["CSS","HTML"],tools:["None"],experience:"Less than 1 month of CSS",subjects:["Frontend Web Development","Figma Replica","Static Content","Responsiveness","Accessibility"],focus:["Accessibility","Accuracy","Basics"],code_snippet:v,school_proj:!0,partner:{boolean:!1,name:"",link:""}},{name:"Smiling School - JavaScript",dates:"10/4/21 - 10/12/21",pic:y,short_desc:"Recreation of fully-responsive dynamic frontend",long_desc:"7-day exact replication of Figma design with gifs. All data loaded from 4 APIs. This specific portion of the project added onto an existing Bootstrap-based static content replication.",link:"https://github.com/RLewis11769/holberton-smiling-school-javascript",languages:["JavaScript","HTML","CSS"],tools:["Bootstrap","jQuery","Ajax","Slick Carousel"],experience:"Less than 3 months of frontend development",subjects:["Frontend Web Development","Figma Replica","Dynamic Content","API","Loading Animation","Responsiveness","Accessibility"],focus:["Reusability","Organization","Optimization"],code_snippet:S,school_proj:!0,partner:{boolean:!1,name:"",link:""}},{name:"Waves Recording Studio",dates:"10/14/21 - 10/25/21",pic:n.p+"waves_screenshot.webp",short_desc:"Custom dynamic frontend for recording studio utilizing the Spotify API",long_desc:'11-day custom frontend from design to implementation based on "waves" as a prompt. All data loaded from 2 Spotify API endpoints using Client Credentials authorization.',link:"https://github.com/RLewis11769/waves_custom-frontend",languages:["JavaScript","HTML","CSS"],tools:["Bootstrap","jQuery","jQuery Validation (for forms)","Slick (for carousel)","Spotify API"],experience:"3 months of frontend development",subjects:["Frontend Web Development","Custom Design","Dynamic Content","APIs","Asynchronous Programming","Final Project","Responsiveness","Accessibility"],focus:["Organization","Planning","Design","Spotify API","Client Credentials authorization"],code_snippet:n.p+"waves_snippet.jpg",school_proj:!0,partner:{boolean:!1,name:"",link:""}},{name:"Twilight Bark Chat",dates:"2/15/22 - 2/27/22",pic:w,short_desc:"Async WebSocket chat application including full user authentication",long_desc:'13-day custom full site from design to implementation based on "outside" as a prompt. Full custom user authentication, from signup to change user nameto reset password including 401 error checking. Authorized users can create and join any chat room with messages updated in realtime as well as added to database.',link:"https://github.com/RLewis11769/outside-dogs",languages:["Python","JavaScript","HTML","CSS"],tools:["Django","Tailwind CSS","Redis","AsyncWebsocketConsumer","Vanilla JavaScript DOM manipulation","SQLite3"],experience:"3 months of backend development - no websocket experience",subjects:["Backend Web Development","Frontend Web Development","Custom Design","Custom Authentication","Asynchronous Programming","Channel consumer","Client-side message parsing","Databases","APIs","Responsiveness","Accessibility"],focus:["Organization","Planning","Design","Authentication","Security","Web sockets","Signals","Configuration"],code_snippet:j,school_proj:!0,partner:{boolean:!1,name:"",link:""}}],E=n(7294);function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},A.apply(this,arguments)}function k(){var e=(0,a.Z)();return E.createElement("section",{id:"projects"},E.createElement(o.Z,{variant:"h1",className:e.title},"Highlighted Projects"),E.createElement("div",{className:"cols"},_.map((function(e,t){return E.createElement(f,A({key:t},e))}))))}}}]);