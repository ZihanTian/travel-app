var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){e.exports=async function(){const e=n(1),t=await e("http://localhost:8081/all");try{const e=await t.json();document.getElementById("insertimage").innerHTML=`<figure id="imagesize"><img src="${e.imageurl}" alt="" ><figcaption>Your Destination</figcaption></figure>`,document.getElementById("insertword").innerHTML=`\n        <p>Your trip to ${e.city} will start in ${e.future} days</p>\n        <p>Your trip in ${e.city} are ${e.duration} days</p>\n<p>The temperature in ${e.city} will be ${e.temperature}</p>\n<h4>Weather Summary</h4>\n<p>${e.summary}</p>\n        `}catch(e){console.log("error",e)}}},function(e,t,n){"use strict";var r=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==r)return r;throw new Error("unable to locate global object")}();e.exports=t=r.fetch,t.default=r.fetch.bind(r),t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);document.getElementById("submit").addEventListener("click",(async function(){const e=Math.round((new Date).getTime()/1e3),t=new Date(document.getElementById("myDate").value).getTime()/1e3,n=new Date(document.getElementById("backDate").value).getTime()/1e3;(async(e="",t={})=>{await fetch(e,{method:"POST",credentials:"same-origin",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})("http://localhost:8081/test",{departtime:new Date(document.getElementById("myDate").value).getTime()/1e3,nowtime:Math.round((new Date).getTime()/1e3),city:document.getElementById("myCity").value,future:parseInt((t-e)/86400),duration:parseInt((n-t)/86400)}).then(e=>o()())}));n(2),n(3),n(4),n(5);alert("I EXIST"),console.log("CHANGE!!")}]);