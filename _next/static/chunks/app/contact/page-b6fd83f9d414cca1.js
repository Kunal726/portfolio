(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{67:(e,t,r)=>{Promise.resolve().then(r.bind(r,5681))},5681:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var a=r(5155),s=r(2115);let n={_origin:"https://api.emailjs.com"},l=(e,t,r)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!r)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class i{constructor(e){this.status=e.status,this.text=e.responseText}}let o=(e,t,r={})=>new Promise((a,s)=>{let l=new XMLHttpRequest;l.addEventListener("load",({target:e})=>{let t=new i(e);200===t.status||"OK"===t.text?a(t):s(t)}),l.addEventListener("error",({target:e})=>{s(new i(e))}),l.open("POST",n._origin+e,!0),Object.keys(r).forEach(e=>{l.setRequestHeader(e,r[e])}),l.send(t)}),c=e=>{let t;if(!(t="string"==typeof e?document.querySelector(e):e)||"FORM"!==t.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},m={sendForm:(e,t,r,a)=>{let s=a||n._userID,i=c(r);l(s,e,t);let m=new FormData(i);return m.append("lib_version","3.2.0"),m.append("service_id",e),m.append("template_id",t),m.append("user_id",s),o("/api/v1.0/email/send-form",m)}},d=s.forwardRef(function(e,t){let{title:r,titleId:a,...n}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"}))}),u=s.forwardRef(function(e,t){let{title:r,titleId:a,...n}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"}))}),h=s.forwardRef(function(e,t){let{title:r,titleId:a,...n}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":a},n),r?s.createElement("title",{id:a},r):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"}))});var f=r(1536),p=r(8173),b=r.n(p);function x(){let[e,t]=(0,s.useState)({name:"",email:"",message:""}),[r,n]=(0,s.useState)(""),l=e=>{let{name:r,value:a}=e.target;t(e=>({...e,[r]:a}))},i=async e=>{e.preventDefault(),n("Submitting...");try{let r=await m.sendForm("service_30ekh96","template_xlauose",e.target,"uKqFJc7WTwr0kUnKr");console.log("Email sent:",r.text),n("Form submitted successfully!"),t({name:"",email:"",message:""})}catch(e){console.log("Email send error:",e),n("There was an error submitting the form.")}};return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-800 text-white p-8",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center space-y-6 bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl mx-auto",children:[(0,a.jsx)("h1",{className:"text-3xl font-semibold",children:"Contact Me"}),(0,a.jsxs)("form",{onSubmit:i,className:"w-full max-w-lg space-y-4",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium",children:"Name"}),(0,a.jsx)("input",{id:"name",name:"name",type:"text",placeholder:"Name",value:e.name,onChange:l,required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium",children:"Email"}),(0,a.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Email",value:e.email,onChange:l,required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium",children:"Message"}),(0,a.jsx)("textarea",{id:"message",name:"message",value:e.message,onChange:l,placeholder:"Message",required:!0,className:"mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-black",rows:"4"})]}),(0,a.jsx)("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded-md",children:"Submitting..."===r?"Submitting...":"Submit"})]}),r&&(0,a.jsx)("p",{className:"text-center mt-4 text-green-600",children:r}),(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-4 mt-8",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold",children:"Alternative Contact"}),(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-2",children:[(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(d,{className:"h-6 w-6 tfont-semibold"}),(0,a.jsx)("a",{href:"mailto:kunalkulthe01@gmail.com",className:"font-semibold",children:"kunalkulthe01@gmail.com"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(u,{className:"h-6 w-6 font-semibold"}),(0,a.jsx)("span",{className:"font-semibold",children:"+91 9604212376"})]}),(0,a.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,a.jsx)(h,{className:"h-6 w-6 font-semibold"}),(0,a.jsx)("span",{className:"font-semibold",children:"Pune, Maharashtra, India"})]})]}),(0,a.jsxs)("div",{className:"flex space-x-6 mt-4",children:[(0,a.jsx)("a",{href:"https://linkedin.com/in/kunal-kulthe-a13a5920a",target:"_blank",rel:"noopener noreferrer",className:"font-semibold hover:text-blue-500",children:(0,a.jsx)(f.QEs,{className:"h-6 w-6"})}),(0,a.jsx)("a",{href:"https://github.com/Kunal726",target:"_blank",rel:"noopener noreferrer",className:"font-semibold hover:text-gray-500",children:(0,a.jsx)(f.hL4,{className:"h-6 w-6"})})]})]})]}),(0,a.jsx)("footer",{className:"text-center mt-8",children:(0,a.jsx)(b(),{href:"/",className:"text-lg text-blue-500 hover:text-blue-700",children:"Back to Home"})})]})}},3435:(e,t,r)=>{"use strict";r.d(t,{k5:()=>m});var a=r(2115),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},n=a.createContext&&a.createContext(s),l=["attr","size","title"];function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){var a,s;a=t,s=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function m(e){return t=>a.createElement(d,i({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:s,size:n,title:o}=e,m=function(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,l),d=n||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,m,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),o&&a.createElement("title",null,o),e.children)};return void 0!==n?a.createElement(n.Consumer,null,e=>t(e)):t(s)}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,173,441,517,358],()=>t(67)),_N_E=e.O()}]);