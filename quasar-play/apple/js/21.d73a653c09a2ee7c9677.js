webpackJsonp([21],{127:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(314),t=e.n(s),l=e(315),r=e(4),i=r(t.a,l.a,!1,null,null,null);n.default=i.exports},231:function(a,n,e){var s=e(232);"string"==typeof s&&(s=[[a.i,s,""]]),s.locals&&(a.exports=s.locals);e(101)("2edeed88",s,!0)},232:function(a,n,e){n=a.exports=e(100)(void 0),n.push([a.i,"@media (max-width:575px){.docs-slider .chip-container{display:block}}@media (min-width:576px){.docs-slider .chip-container{float:right}}",""])},314:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e(1);e(231),n.default={components:{QRange:s.QRange,QChip:s.QChip,QField:s.QField,QList:s.QList,QItem:s.QItem,QItemSide:s.QItemSide,QItemMain:s.QItemMain},data:function(){return{standard:{min:10,max:35},precision:{min:.2,max:.7},step:{min:10,max:20},label:{min:-12,max:8},snap:{min:2,max:6},marker:{min:6,max:8},range:{min:20,max:65},rangeSnap:{min:35,max:60},onlyRange:{min:10,max:35}}}}},315:function(a,n,e){"use strict";var s=function(){var a=this,n=a.$createElement,e=a._self._c||n;return e("div",{staticClass:"layout-padding docs-slider row justify-center"},[e("div",{staticStyle:{width:"500px","max-width":"90vw"}},[e("p",{staticClass:"caption"},[a._v("\n      Standalone\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.standard.min)+" to "+a._s(a.standard.max)+" (0 to 50)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:0,max:50},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),e("q-range",{attrs:{min:0,max:50,square:""},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Floating Point Precision\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.precision.min)+" to "+a._s(a.precision.max)+" (0.1 to 1.0)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:.1,max:1,step:.1,decimals:1,color:"amber"},model:{value:a.precision,callback:function(n){a.precision=n},expression:"precision"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Label\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label.min)+" to "+a._s(a.label.max)+" (-20 to 20, step 4)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:-20,max:20,step:4,label:"",color:"purple"},model:{value:a.label,callback:function(n){a.label=n},expression:"label"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Step\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.step.min)+" to "+a._s(a.step.max)+" (0 to 45, step 5)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:0,max:45,step:5,label:"",color:"deep-orange"},model:{value:a.step,callback:function(n){a.step=n},expression:"step"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Snap to Step\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.snap.min)+" to "+a._s(a.snap.max)+" (0 to 10, step 2)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:0,max:10,step:2,label:"",snap:""},model:{value:a.snap,callback:function(n){a.snap=n},expression:"snap"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      With Markers + Snap to Step\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.marker.min)+" to "+a._s(a.marker.max)+" (-6 to 10, step 2)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:-6,max:10,step:2,label:"",snap:"",markers:"",color:"orange"},model:{value:a.marker,callback:function(n){a.marker=n},expression:"marker"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Display Label Always\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label.min)+" to "+a._s(a.label.max)+" (-20 to 20, step 4)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:-20,max:20,step:4,"label-always":"",color:"brown"},model:{value:a.label,callback:function(n){a.label=n},expression:"label"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Custom Label Values\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.label.min)+" to "+a._s(a.label.max)+" (-20 to 20, step 4)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{"left-label-value":a.label.min+"px","right-label-value":a.label.max+"px",min:-20,max:20,step:4,"label-always":""},model:{value:a.label,callback:function(n){a.label=n},expression:"label"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Drag Range\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.range.min)+" to "+a._s(a.range.max)+" (0 to 100, step 1)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:0,max:100,label:"","drag-range":""},model:{value:a.range,callback:function(n){a.range=n},expression:"range"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Drag Range + Snap to Step\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.rangeSnap.min)+" to "+a._s(a.rangeSnap.max)+" (0 to 100, step 5)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:0,max:100,step:5,"drag-range":"",label:"",markers:"",snap:"",color:"lime"},model:{value:a.rangeSnap,callback:function(n){a.rangeSnap=n},expression:"rangeSnap"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("\n      Drag Only Range (Fixed Interval)\n      "),e("span",{staticClass:"chip-container"},[e("q-chip",{attrs:{square:"",color:"secondary"}},[a._v("\n          Model: "+a._s(a.onlyRange.min)+" to "+a._s(a.onlyRange.max)+" (0 to 100, step 5)\n        ")])],1)]),a._v(" "),e("q-range",{attrs:{min:0,max:100,step:5,"drag-only-range":"",label:"",color:"info"},model:{value:a.onlyRange,callback:function(n){a.onlyRange=n},expression:"onlyRange"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Disabled State")]),a._v(" "),e("q-range",{attrs:{min:0,max:50,disable:""},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("Error State")]),a._v(" "),e("q-range",{attrs:{error:"",min:0,max:50},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),e("q-range",{attrs:{error:"","label-always":"",min:0,max:50},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}}),a._v(" "),e("p",{staticClass:"caption"},[a._v("In a Field")]),a._v(" "),e("q-field",{attrs:{icon:"local_atm",label:"Price range",helper:"Refine price range filter (in USD)"}},[e("q-range",{staticClass:"orange",attrs:{min:0,max:50,label:""},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}})],1),a._v(" "),e("p",{staticClass:"caption"},[a._v("Inside of a List")]),a._v(" "),e("q-list",[e("q-item",[e("q-item-side",{attrs:{icon:"local_atm"}}),a._v(" "),e("q-item-main",[e("q-range",{attrs:{min:0,max:50,label:"",color:"secondary "},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}})],1)],1),a._v(" "),e("q-item",[e("q-item-side",{attrs:{icon:"euro symbol"}}),a._v(" "),e("q-item-main",[e("q-range",{attrs:{min:0,max:50,label:"",color:"amber"},model:{value:a.standard,callback:function(n){a.standard=n},expression:"standard"}})],1)],1)],1)],1)])},t=[],l={render:s,staticRenderFns:t};n.a=l}});