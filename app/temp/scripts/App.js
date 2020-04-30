!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.router=e.app=void 0;var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=u(n(1)),i=u(n(2)),a=u(n(6));function u(t){return t&&t.__esModule?t:{default:t}}var c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.app=document.getElementById("root"),this.mainContent=document.createElement("div"),this.initialize(),this.ui=new i.default}return r(t,[{key:"initialize",value:function(){this.mainContent.setAttribute("class","main-content"),this.mainContent.setAttribute("id","main-content");var t=new a.default;this.mainContent.appendChild(t.core),this.app.appendChild(this.mainContent)}}]),t}(),l=e.app=new c;e.router=new o.default([{path:"/",template:"global"},{path:"/local",template:"local"}],l);e.default=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.routes=e,this.app=n,this.loadInitialRoute()}return r(t,[{key:"loadRoute",value:function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=this.matchUrlToRoute(e),o="#"+e.join("/");history.pushState({},"",o),this.app.ui.setView(r.template)}},{key:"matchUrlToRoute",value:function(t){return this.routes.find((function(e){var n=e.path.split("/").slice(1);return n.length===t.length&&n.every((function(e,n){return e===t[n]}))}))}},{key:"loadInitialRoute",value:function(){var t=window.location.pathname.split("/"),e=t.length>1?t.slice(1):"";this.loadRoute.apply(this,function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}(e))}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=n(3),a=n(5),u=(r=a)&&r.__esModule?r:{default:r},c=n(0);var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.app=document.getElementById("main-content"),this.mode="global",this.card=new u.default,this.navigation=document.createElement("nav"),this.setup()}return o(t,[{key:"setup",value:function(){this.navigation.setAttribute("class","navigation"),this.navigation.innerHTML='\n      <ul>\n        <li class="main-navigation" id="global"><</li>\n        <li class="main-navigation" id="local">></li>\n      </ul>\n    ',this.app.appendChild(this.card.main),this.app.appendChild(this.navigation),this.events()}},{key:"events",value:function(){var t=this;document.querySelectorAll(".main-navigation").forEach((function(e){e.addEventListener("click",t.mainNavigationHandler.bind(t))}))}},{key:"mainNavigationHandler",value:function(t){"global"!==t.target.id?c.router.loadRoute(t.target.id):c.router.loadRoute("")}},{key:"setContent",value:function(t){this.card.setContent(t)}},{key:"setView",value:function(t){var e=this,n=document.getElementById("slideshow"),r=document.getElementById("slideshow-title");this.mode=t,"global"==t?n.style.transform="translateX(0%)":"local"==t&&(n.style.transform="translateX(-50%)"),r.innerHTML=this.mode,(0,i.requestData)(t).then((function(t){return e.setContent(t)}))}}]),t}();e.default=l},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o,i=n(4);e.requestData=(r=i.mark((function t(e){var n,r;return i.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="","global"==e?n="all":"local"==e&&(n="countries/italy"),t.prev=2,t.next=5,fetch("https://disease.sh/v2/"+n);case 5:return r=t.sent,console.log("[requestData]: response status for "+n+": "+r.status),t.next=9,r.json();case 9:return t.abrupt("return",t.sent);case 12:return t.prev=12,t.t0=t.catch(2),t.abrupt("return",{error:t.t0});case 15:case"end":return t.stop()}}),t,this,[[2,12]])})),o=function(){var t=r.apply(this,arguments);return new Promise((function(e,n){return function r(o,i){try{var a=t[o](i),u=a.value}catch(t){return void n(t)}if(!a.done)return Promise.resolve(u).then((function(t){r("next",t)}),(function(t){r("throw",t)}));e(u)}("next")}))},function(t){return o.apply(this,arguments)})},function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n,r){var o=e&&e.prototype instanceof s?e:s,i=Object.create(o.prototype),a=new E(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=w(a,n);if(u){if(u===l)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=c(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===l)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function s(){}function f(){}function h(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(x([])));v&&v!==e&&n.call(v,o)&&(d=v);var y=h.prototype=s.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,u){var l=c(t[o],t,i);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(l.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function w(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function x(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=y.constructor=h,h.constructor=f,h[a]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new g(u(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=x,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),_(n),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;_(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:x(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.main=document.createElement("div"),this.content=document.createElement("div"),this.setup()}return r(t,[{key:"setup",value:function(){this.main.setAttribute("class","card container"),this.content.setAttribute("class","card__content wrapper"),this.main.appendChild(this.content)}},{key:"setContent",value:function(t){var e=document.getElementById("slideshow-title").innerHTML;console.log(e),this.content.innerHTML="\n      <h1>"+("global"==e?"Totale":"Italia")+"</h1>\n      <small>data from NovelCovid19</small>\n      "+Object.keys(t).map((function(e){return'<div class="card__section">\n          <h4>'+e+"</h4>\n          <p>"+t[e]+"</p>\n        </div>"})).join("")+"\n    "}}]),t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.core=document.createElement("div"),this.setup()}return r(t,[{key:"setup",value:function(){this.core.setAttribute("class","slideshow"),this.core.innerHTML='\n      <h1 class="slideshow__title"id="slideshow-title"></h1>\n      <div class="slideshow__inner" id="slideshow">\n        <div class="slideshow__slide slide--global"><i class="fas fa-globe-europe"></i></div>\n        <div class="slideshow__slide slide--local"><i class="fas fa-map-marker-alt"></i></div>\n      </div>\n    '}}]),t}();e.default=o}]);