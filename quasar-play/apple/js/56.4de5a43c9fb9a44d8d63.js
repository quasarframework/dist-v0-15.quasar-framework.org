webpackJsonp([56],{169:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(434),a=o.n(i),n=o(435),s=o(4),l=s(a.a,n.a,!1,null,null,null);e.default=l.exports},434:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(1);e.default={components:{QBtn:i.QBtn,QIcon:i.QIcon,QModal:i.QModal,QModalLayout:i.QModalLayout,QToolbar:i.QToolbar,QToolbarTitle:i.QToolbarTitle,QSearch:i.QSearch,QList:i.QList,QItem:i.QItem,QItemSide:i.QItemSide,QItemMain:i.QItemMain},directives:{Ripple:i.Ripple},data:function(){return{search:"",types:[{label:"Basic",ref:"basicModal"},{label:"Basic with Events",ref:"eventsModal"},{label:"With Layout",ref:"layoutModal"},{label:"Always Minimized",ref:"minimizedModal"},{label:"Always Maximized",ref:"maximizedModal"}],position:"bottom"}},methods:{notify:function(t){i.Toast.create('Event "'+t+'" was triggered.')},openSpecialPosition:function(t){var e=this;this.position=t,this.$nextTick(function(){e.$refs.positionModal.open()})}}}},435:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout-padding row justify-center"},[o("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t._m(0),t._v(" "),o("q-list",{staticStyle:{"max-width":"600px"}},t._l(t.types,function(e){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],key:e,attrs:{link:""},on:{click:function(o){t.$refs[e.ref].open()}}},[o("q-item-side",{attrs:{icon:"open_in_new"}}),t._v(" "),o("q-item-main",{attrs:{label:e.label}}),t._v(" "),o("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)})),t._v(" "),o("p",{staticClass:"caption"},[t._v("Appear from Edges")]),t._v(" "),o("q-list",{staticStyle:{"max-width":"600px"}},t._l(["top","bottom","left","right"],function(e){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],key:e,attrs:{link:""},on:{click:function(o){t.openSpecialPosition(e)}}},[o("q-item-side",{attrs:{icon:"open_in_new"}}),t._v(" "),o("q-item-main",{attrs:{label:"Modal from "+e}}),t._v(" "),o("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)}))],1),t._v(" "),o("q-modal",{ref:"basicModal",attrs:{"content-css":{padding:"50px",minWidth:"50vw"}}},[o("h4",[t._v("Basic Modal")]),t._v(" "),t._l(25,function(e){return o("p",[t._v("Scroll down to close")])}),t._v(" "),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){t.$refs.basicModal.close()}}},[t._v("Close")])],2),t._v(" "),o("q-modal",{ref:"eventsModal",attrs:{"content-css":{padding:"50px",minWidth:"50vw"}},on:{open:function(e){t.notify("open")},"escape-key":function(e){t.notify("escape-key")},close:function(e){t.notify("close")}}},[o("h4",[t._v("Modal with Events")]),t._v(" "),t._l(25,function(e){return o("p",[t._v("Scroll down to close")])}),t._v(" "),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){t.$refs.eventsModal.close()}}},[t._v("Close")])],2),t._v(" "),o("q-modal",{ref:"layoutModal",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}}},[o("q-modal-layout",[o("q-toolbar",{attrs:{slot:"header"},slot:"header"},[o("q-btn",{attrs:{flat:""},on:{click:function(e){t.$refs.layoutModal.close()}}},[o("q-icon",{attrs:{name:"keyboard_arrow_left"}})],1),t._v(" "),o("q-toolbar-title",[t._v("\n          Header\n        ")])],1),t._v(" "),o("q-toolbar",{attrs:{slot:"header"},slot:"header"},[o("q-search",{attrs:{inverted:"",color:"none"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),o("q-toolbar",{attrs:{slot:"footer"},slot:"footer"},[o("q-toolbar-title",[t._v("\n          Footer\n        ")])],1),t._v(" "),o("div",{staticClass:"layout-padding"},[o("h1",[t._v("Modal")]),t._v(" "),o("q-btn",{attrs:{color:"primary"},on:{click:function(e){t.$refs.layoutModal.close()}}},[t._v("Close")]),t._v(" "),t._l(15,function(e){return o("p",{staticClass:"caption"},[t._v("This is a Modal presenting a Layout.")])})],2)],1)],1),t._v(" "),o("q-modal",{ref:"minimizedModal",attrs:{minimized:"","content-css":{padding:"50px"}}},[o("h4",[t._v("Minimized Modal")]),t._v(" "),o("p",[t._v("This one has backdrop on small screens too.")]),t._v(" "),o("q-btn",{attrs:{color:"red"},on:{click:function(e){t.$refs.minimizedModal.close()}}},[t._v("Close Me")])],1),t._v(" "),o("q-modal",{ref:"maximizedModal",attrs:{maximized:"","content-css":{padding:"50px"}}},[o("h4",[t._v("Maximized Modal")]),o("p",[t._v("This one is maximized on bigger screens too.")]),t._v(" "),o("q-btn",{attrs:{color:"tertiary"},on:{click:function(e){t.$refs.maximizedModal.close()}}},[t._v("Close Me")])],1),t._v(" "),o("q-modal",{ref:"positionModal",attrs:{position:t.position,"content-css":{padding:"20px"}}},[o("h4",[t._v("Modal")]),o("p",[t._v("This one gets displayed from "+t._s(t.position)+".")]),t._v(" "),o("q-btn",{attrs:{color:"orange"},on:{click:function(e){t.$refs.positionModal.close()}}},[t._v("Close Me")])],1)],1)},a=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("p",{staticClass:"caption"},[o("span",{staticClass:"desktop-only"},[t._v("Click")]),t._v(" "),o("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n      on each type to see it in action.\n    ")])}],n={render:i,staticRenderFns:a};e.a=n}});