webpackJsonp([1],{109:function(t,e,n){"use strict";function r(t){n(256)}Object.defineProperty(e,"__esModule",{value:!0});var o=n(258),a=n.n(o),i=n(264),c=n(4),u=r,l=c(a.a,i.a,!1,u,null,null);e.default=l.exports},193:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},194:function(t,e){var n=t.exports={version:"2.5.0"};"number"==typeof __e&&(__e=n)},195:function(t,e,n){t.exports=!n(205)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},197:function(t,e,n){var r=n(207),o=n(215);t.exports=n(195)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},198:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},200:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},201:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},202:function(t,e,n){var r=n(223),o=n(200);t.exports=function(t){return r(o(t))}},203:function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},204:function(t,e,n){var r=n(198);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},205:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},206:function(t,e,n){var r=n(211)("keys"),o=n(212);t.exports=function(t){return r[t]||(r[t]=o(t))}},207:function(t,e,n){var r=n(204),o=n(230),a=n(231),i=Object.defineProperty;e.f=n(195)?Object.defineProperty:function(t,e,n){if(r(t),e=a(e,!0),r(n),o)try{return i(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},210:function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},211:function(t,e,n){var r=n(193),o=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return o[t]||(o[t]={})}},212:function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+r).toString(36))}},213:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},214:function(t,e,n){var r=n(198),o=n(193).document,a=r(o)&&r(o.createElement);t.exports=function(t){return a?o.createElement(t):{}}},215:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},220:function(t,e,n){var r=n(200);t.exports=function(t){return Object(r(t))}},221:function(t,e,n){var r=n(222),o=n(213);t.exports=Object.keys||function(t){return r(t,o)}},222:function(t,e,n){var r=n(201),o=n(202),a=n(224)(!1),i=n(206)("IE_PROTO");t.exports=function(t,e){var n,c=o(t),u=0,l=[];for(n in c)n!=i&&r(c,n)&&l.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~a(l,n)||l.push(n));return l}},223:function(t,e,n){var r=n(210);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},224:function(t,e,n){var r=n(202),o=n(225),a=n(226);t.exports=function(t){return function(e,n,i){var c,u=r(e),l=o(u.length),s=a(i,l);if(t&&n!=n){for(;l>s;)if((c=u[s++])!=c)return!0}else for(;l>s;s++)if((t||s in u)&&u[s]===n)return t||s||0;return!t&&-1}}},225:function(t,e,n){var r=n(203),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},226:function(t,e,n){var r=n(203),o=Math.max,a=Math.min;t.exports=function(t,e){return t=r(t),t<0?o(t+e,0):a(t,e)}},227:function(t,e,n){var r=n(193),o=n(194),a=n(228),i=n(197),c=function(t,e,n){var u,l,s,f=t&c.F,d=t&c.G,p=t&c.S,v=t&c.P,h=t&c.B,m=t&c.W,y=d?o:o[e]||(o[e]={}),b=y.prototype,g=d?r:p?r[e]:(r[e]||{}).prototype;d&&(n=e);for(u in n)(l=!f&&g&&void 0!==g[u])&&u in y||(s=l?g[u]:n[u],y[u]=d&&"function"!=typeof g[u]?n[u]:h&&l?a(s,r):m&&g[u]==s?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(s):v&&"function"==typeof s?a(Function.call,s):s,v&&((y.virtual||(y.virtual={}))[u]=s,t&c.R&&b&&!b[u]&&i(b,u,s)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},228:function(t,e,n){var r=n(229);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},229:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},230:function(t,e,n){t.exports=!n(195)&&!n(205)(function(){return 7!=Object.defineProperty(n(214)("div"),"a",{get:function(){return 7}}).a})},231:function(t,e,n){var r=n(198);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},256:function(t,e,n){var r=n(257);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(103)("1ca867bb",r,!0)},257:function(t,e,n){e=t.exports=n(102)(void 0),e.push([t.i,".play-cards{padding-bottom:90px}.play-cards .q-card-title{font-size:18px;line-height:20px;margin-bottom:8px}",""])},258:function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n=Math.random().toString(36).substr(2,9);u.default.set(n,{name:t,url:e}),l.Toast.create.positive("URL added")}Object.defineProperty(e,"__esModule",{value:!0});var a=n(259),i=r(a),c=n(263),u=r(c),l=n(1);e.default={components:{QBtn:l.QBtn,QFab:l.QFab,QFabAction:l.QFabAction,QCard:l.QCard,QCardTitle:l.QCardTitle,QCardActions:l.QCardActions,QCardSeparator:l.QCardSeparator,QIcon:l.QIcon,QPopover:l.QPopover,QFixedPosition:l.QFixedPosition},data:function(){return{urls:u.default.state}},computed:{hasURLs:function(){return(0,i.default)(this.urls).length>0}},methods:{deleteURL:function(t){l.Dialog.create({title:"Confirm",message:"\n          Are you sure you want to delete the following entry?<br><br>\n          <strong>"+this.urls[t].name+"</strong> - <em>"+this.urls[t].url+"</em>\n        ",buttons:["Cancel",{label:"Delete",handler:function(){u.default.del(t),l.Toast.create.positive("URL removed")}}]})},editURL:function(t){var e=u.default.state[t];l.Dialog.create({title:"Edit URL",form:{name:{type:"text",label:"Name",model:e.name},url:{type:"text",label:"URL",model:e.url}},buttons:["Cancel",{label:"Save",preventClose:!0,handler:function(e,n){return e.name.length?e.url.length?(n(),void u.default.set(t,{name:e.name,url:e.url})):void l.Toast.create.warning("Please fill in a URL"):void l.Toast.create.warning("Please fill in a name")}}]})},addURL:function(){l.Dialog.create({title:"Add URL",message:"",form:{name:{type:"text",label:"Name",model:""},url:{type:"text",label:"URL",model:"http://"}},buttons:["Cancel",{label:"Add",preventClose:!0,handler:function(t,e){return t.name.length?t.url.length&&"http://"!==t.url?(e(),void o(t.name,t.url)):void l.Toast.create.warning("Please fill in a URL"):void l.Toast.create.warning("Please fill in a name")}}]})},play:function(t){this.$router.push({name:"play-url",params:{url:encodeURIComponent(t)}})},scanQR:function(){var t=this.play;cordova.plugins.barcodeScanner.scan(function(e){if(e.cancelled)return void l.Toast.create("QR code scanning aborted...");l.Dialog.create({title:"QR Scanned",message:"\n              What would you like to do with the URL?<br><br>\n              <strong>"+e.text+"</strong>\n            ",buttons:["Cancel",{label:"Save",handler:function(){l.Dialog.create({title:"New URL",message:"Set a name for your URL ("+e.text+"):",form:{name:{type:"textbox",label:"Name"}},buttons:["Cancel",{label:"Add URL",preventClose:!0,handler:function(t,n){if(!t.name.length)return void l.Toast.create("Please fill in a name");n(),o(t.name,e.text)}}]})}},{label:"Play",handler:function(){t(e.text)}}]})},function(t){l.Dialog.create({message:"Failed to scan the QR code: "+t})})}}}},259:function(t,e,n){t.exports={default:n(260),__esModule:!0}},260:function(t,e,n){n(261),t.exports=n(194).Object.keys},261:function(t,e,n){var r=n(220),o=n(221);n(262)("keys",function(){return function(t){return o(r(t))}})},262:function(t,e,n){var r=n(227),o=n(194),a=n(205);t.exports=function(t,e){var n=(o.Object||{})[t]||Object[t],i={};i[t]=e(n),r(r.S+r.F*a(function(){n(1)}),"Object",i)}},263:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(2),o=function(t){return t&&t.__esModule?t:{default:t}}(r),a=n(1);e.default={state:a.LocalStorage.get.item("playURLs")||{},set:function(t,e){o.default.set(this.state,t,e),a.LocalStorage.set("playURLs",this.state)},del:function(t){o.default.delete(this.state,t),a.LocalStorage.set("playURLs",this.state)}}},264:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-padding play-cards"},[t.hasURLs?t._e():n("blockquote",[t._m(0)]),t._v(" "),n("div",{staticClass:"row"},t._l(t.urls,function(e,r){return n("div",{key:e,staticClass:"col-xs-12 col-sm-6 col-lg-4 col-xl-3"},[n("q-card",[n("q-card-title",[n("div",{staticClass:"ellipsis-2-lines"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"ellipsis-3-lines",attrs:{slot:"subtitle"},slot:"subtitle"},[t._v(t._s(e.url))])]),t._v(" "),n("q-card-separator"),t._v(" "),n("q-card-actions",[n("q-btn",{attrs:{flat:"",color:"tertiary",icon:"ondemand_video"},on:{click:function(n){t.play(e.url)}}},[t._v("Play")]),t._v(" "),n("div",{staticClass:"col"}),t._v(" "),n("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(e){t.editURL(r)}}},[n("q-icon",{attrs:{name:"edit"}})],1),t._v(" "),n("q-btn",{attrs:{flat:"",color:"secondary"},on:{click:function(e){t.deleteURL(r)}}},[n("q-icon",{attrs:{name:"delete"}})],1)],1)],1)],1)})),t._v(" "),n("q-fixed-position",{attrs:{corner:"bottom-right",offset:[16,16]}},[t.$q.platform.is.cordova?n("q-fab",{attrs:{color:"primary",direction:"up"}},[n("q-fab-action",{attrs:{color:"secondary",icon:"phonelink_ring"},nativeOn:{click:function(e){t.scanQR()}}}),t._v(" "),n("q-fab-action",{attrs:{color:"primary",icon:"add"},nativeOn:{click:function(e){t.addURL()}}})],1):n("q-btn",{staticClass:"cordova-hide absolute-bottom-right shadow-4",staticStyle:{right:"16px",bottom:"16px"},attrs:{color:"primary",round:"",glossy:""},on:{click:function(e){t.addURL()}}},[n("q-icon",{attrs:{name:"add"}})],1)],1)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("small",[t._v("\n      Register your first URL by tapping on the FAB button on the lower\n      right corner of this screen.\n      You can either scan a QR code ("),n("i",[t._v("phonelink_ring")]),t._v(") or manually add a URL\n      ("),n("i",[t._v("add")]),t._v(").\n    ")])}],a={render:r,staticRenderFns:o};e.a=a}});