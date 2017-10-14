webpackJsonp([24],{121:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(302),r=t.n(n),i=t(303),l=t(4),s=l(r.a,i.a,!1,null,null,null);a.default=s.exports},189:function(e,a,t){var n=t(190);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);t(101)("654c67fb",n,!0)},190:function(e,a,t){a=e.exports=t(100)(void 0),a.push([e.i,".docs-input .caption:not(:first-child){margin-top:60px}.docs-input .dark-example{background:#424242;padding:5px 15px 15px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:2px}",""])},302:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(1);t(189);var r=n.date.addToDate,i=n.date.subtractFromDate,l=new Date,s=i(l,{days:5}),o=r(l,{days:3});a.default={components:{QDatetimeRange:n.QDatetimeRange,QField:n.QField,QList:n.QList,QItem:n.QItem,QItemSide:n.QItemSide,QItemMain:n.QItemMain,QItemSeparator:n.QItemSeparator,QListHeader:n.QListHeader},data:function(){return{range1:{from:null,to:null},range2:{from:null,to:null},range3:{from:null,to:null},range4:{from:null,to:null},range5:{from:null,to:null},range6:{from:null,to:null},range7:{from:null,to:null},range8:{from:null,to:null},today:l,past:s,future:o}}}},303:function(e,a,t){"use strict";var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"layout-padding docs-input row justify-center"},[t("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t("p",{staticClass:"caption"},[e._v("Date range")]),e._v(" "),t("q-datetime-range",{staticClass:"full-width",model:{value:e.range1,callback:function(a){e.range1=a},expression:"range1"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Time range")]),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{color:"amber",type:"time"},model:{value:e.range2,callback:function(a){e.range2=a},expression:"range2"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Date & Time range")]),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{inverted:"",color:"tertiary",type:"datetime"},model:{value:e.range3,callback:function(a){e.range3=a},expression:"range3"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("24h format, Monday as first day")]),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{inverted:"",color:"secondary",format24h:"","monday-first":"",type:"datetime"},model:{value:e.range3,callback:function(a){e.range3=a},expression:"range3"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Limit interval selection")]),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{color:"orange",min:e.past,max:e.future},model:{value:e.range4,callback:function(a){e.range4=a},expression:"range4"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("Disable / Error states")]),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{disable:""},model:{value:e.range1,callback:function(a){e.range1=a},expression:"range1"}}),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{disable:"",inverted:"",color:"secondary"},model:{value:e.range1,callback:function(a){e.range1=a},expression:"range1"}}),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{error:""},model:{value:e.range1,callback:function(a){e.range1=a},expression:"range1"}}),e._v(" "),t("q-datetime-range",{staticClass:"full-width",attrs:{error:"",inverted:""},model:{value:e.range1,callback:function(a){e.range1=a},expression:"range1"}}),e._v(" "),t("p",{staticClass:"caption"},[e._v("In a Field")]),e._v(" "),t("q-field",{attrs:{icon:"school",helper:"When can we call you?"}},[t("q-datetime-range",{staticClass:"full-width",attrs:{color:"brown",min:e.today},model:{value:e.range5,callback:function(a){e.range5=a},expression:"range5"}})],1),e._v(" "),t("q-field",{attrs:{icon:"golf_course",label:"Golf course",helper:"Pick start and end date","label-width":4}},[t("q-datetime-range",{staticClass:"full-width",attrs:{inverted:"",color:"purple"},model:{value:e.range6,callback:function(a){e.range6=a},expression:"range6"}})],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("In a List")]),e._v(" "),t("q-list",[t("q-list-header",[e._v("Date or Time")]),e._v(" "),t("q-item",[t("q-item-side",{attrs:{icon:"access_time"}}),e._v(" "),t("q-item-main",[t("q-datetime-range",{staticClass:"no-margin",attrs:{type:"time"},model:{value:e.range7,callback:function(a){e.range7=a},expression:"range7"}})],1)],1),e._v(" "),t("q-item",[t("q-item-side",{attrs:{icon:"update"}}),e._v(" "),t("q-item-main",[t("q-datetime-range",{staticClass:"no-margin",attrs:{type:"date"},model:{value:e.range7,callback:function(a){e.range7=a},expression:"range7"}})],1)],1),e._v(" "),t("q-item-separator"),e._v(" "),t("q-list-header",[e._v("Date & Time")]),e._v(" "),t("q-item",[t("q-item-side",{attrs:{icon:"notifications"}}),e._v(" "),t("q-item-main",[t("q-datetime-range",{staticClass:"no-margin",attrs:{type:"datetime"},model:{value:e.range7,callback:function(a){e.range7=a},expression:"range7"}})],1)],1)],1),e._v(" "),t("p",{staticClass:"caption"},[e._v("On dark background")]),e._v(" "),t("div",{staticClass:"dark-example"},[t("q-datetime-range",{attrs:{dark:"",color:"amber",type:"time"},model:{value:e.range8,callback:function(a){e.range8=a},expression:"range8"}}),e._v(" "),t("q-field",{attrs:{dark:"",icon:"school",label:"Javascript",helper:"Pick a start time"}},[t("q-datetime-range",{attrs:{dark:"",color:"secondary",type:"time"},model:{value:e.range8,callback:function(a){e.range8=a},expression:"range8"}})],1)],1)],1)])},r=[],i={render:n,staticRenderFns:r};a.a=i}});