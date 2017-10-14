webpackJsonp([68],{148:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=a(361),n=a.n(i),c=a(362),e=a(4),r=e(n.a,c.a,!1,null,null,null);o.default=r.exports},361:function(t,o,a){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var i=a(1);o.default={components:{QFab:i.QFab,QFabAction:i.QFabAction,QTooltip:i.QTooltip,QBtn:i.QBtn,QFixedPosition:i.QFixedPosition},methods:{alert:function(){i.Dialog.create({title:"FAB",message:"Good job! Keep it going."})},toast:function(t){i.Toast.create({icon:t,html:"So you want your "+t+"s, huh?"})}}}},362:function(t,o,a){"use strict";var i=function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("div",[a("div",{staticClass:"layout-padding"},[t._m(0),t._v(" "),a("div",{staticClass:"column items-center",staticStyle:{"margin-top":"140px","margin-bottom":"100px"}},[a("q-fab",{attrs:{color:"purple",icon:"keyboard_arrow_up",direction:"up"}},[a("q-fab-action",{attrs:{color:"lime",icon:"mail"},on:{click:function(o){t.toast("mail")}}}),t._v(" "),a("q-fab-action",{attrs:{color:"secondary",icon:"alarm"},on:{click:function(o){t.toast("alarm")}}})],1),t._v(" "),a("br"),t._v(" "),a("q-fab",{attrs:{color:"indigo",icon:"keyboard_arrow_left",direction:"left"}},[a("q-fab-action",{attrs:{color:"indigo",icon:"mail"},on:{click:function(o){t.toast("mail")}}}),t._v(" "),a("q-fab-action",{attrs:{color:"indigo",icon:"alarm"},on:{click:function(o){t.toast("alarm")}}})],1),t._v(" "),a("br"),t._v(" "),a("q-fab",{attrs:{color:"secondary",push:"",icon:"keyboard_arrow_right",direction:"right"}},[a("q-fab-action",{attrs:{color:"amber",glossy:"",icon:"mail"},on:{click:function(o){t.toast("mail")}}}),t._v(" "),a("q-fab-action",{attrs:{color:"orange",glossy:"",icon:"alarm"},on:{click:function(o){t.toast("alarm")}}})],1),t._v(" "),a("br"),t._v(" "),a("q-fab",{attrs:{color:"tertiary",glossy:"",icon:"keyboard_arrow_down",direction:"down"}},[a("q-fab-action",{attrs:{color:"primary",icon:"mail"},on:{click:function(o){t.toast("mail")}}}),t._v(" "),a("q-fab-action",{attrs:{color:"primary",icon:"alarm"},on:{click:function(o){t.toast("alarm")}}})],1)],1),t._v(" "),a("p",{staticClass:"caption",staticStyle:{"margin-top":"140px","margin-bottom":"100px"}},[t._v("\n      There's also the absolute positioned one on bottom\n      right of screen which maintains position on Page scroll.\n      It has a click/tap event injected on itself when expanded.\n      You can close it by clicking/tapping on the whitey backdrop.\n    ")]),t._v(" "),t._m(1),t._v(" "),a("q-fixed-position",{attrs:{corner:"bottom-right",offset:[16,16]}},[a("q-fab",{staticClass:"animate-pop",attrs:{color:"primary","active-icon":"alarm",direction:"up"}},[a("q-fab-action",{attrs:{color:"purple",icon:"mail"},on:{click:function(o){t.toast("mail")}}},[a("q-tooltip",{attrs:{anchor:"center left",self:"center right",offset:[20,0]}},[t._v("Mail")])],1),t._v(" "),a("q-fab-action",{attrs:{color:"secondary",icon:"alarm"},on:{click:function(o){t.toast("alarm")}}},[a("q-tooltip",{attrs:{anchor:"center left",self:"center right",offset:[20,0]}},[t._v("Alarm")])],1)],1)],1),t._v(" "),a("div",{staticStyle:{height:"1000px"}},[t._v(" ")])],1)])},n=[function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("p",{staticClass:"caption"},[a("span",{staticClass:"desktop-only"},[t._v("Click")]),t._v(" "),a("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n      on each inline FABs below.\n      The one that opens on the right also has a backdrop.\n    ")])},function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("p",{staticClass:"caption"},[a("em",[t._v("\n        Intended scroll to highlight bottom right fixed positioned FAB.\n      ")])])}],c={render:i,staticRenderFns:n};o.a=c}});