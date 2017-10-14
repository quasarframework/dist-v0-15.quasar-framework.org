webpackJsonp([23],{124:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(306),i=l.n(a),r=l(307),o=l(4),n=o(i.a,r.a,!1,null,null,null);t.default=n.exports},191:function(e,t,l){var a=l(192);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l(103)("654c67fb",a,!0)},192:function(e,t,l){t=e.exports=l(102)(void 0),t.push([e.i,".docs-input .caption:not(:first-child){margin-top:60px}.docs-input .dark-example{background:#424242;padding:5px 15px 15px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:2px}",""])},306:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l(1);l(191),t.default={components:{QField:a.QField,QToggle:a.QToggle,QDatetime:a.QDatetime,QOptionGroup:a.QOptionGroup,QInput:a.QInput,QSelect:a.QSelect,QChipsInput:a.QChipsInput,QRating:a.QRating},data:function(){return{text:"",text2:"",email:"",select:"bucharest",group:"pineapple",group2:["paris"],chips:["Jim"],date:null,rating:0,error:!1}}}},307:function(e,t,l){"use strict";var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"layout-padding docs-input row justify-center"},[l("div",{staticStyle:{width:"500px","max-width":"90vw"}},[l("p",{staticClass:"caption"},[e._v("Field components")]),e._v(" "),l("q-field",{attrs:{count:10,helper:"Some helper"}},[l("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper"}},[l("q-input",{attrs:{"float-label":"Input float label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",label:"Field label",helper:"Some helper"}},[l("q-input",{attrs:{type:"email",suffix:"@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),l("br"),e._v(" "),l("q-field",{attrs:{count:10,helper:"Some helper"}},[l("q-input",{attrs:{inverted:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper"}},[l("q-input",{attrs:{inverted:"",color:"amber","stack-label":"Input stack label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",label:"Field label",helper:"Some helper"}},[l("q-input",{attrs:{inverted:"",color:"secondary",type:"email",suffix:"@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("Error state")]),e._v(" "),l("q-toggle",{attrs:{label:"Toggle error state"},model:{value:e.error,callback:function(t){e.error=t},expression:"error"}}),e._v(" "),l("q-field",{attrs:{count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error."}},[l("q-input",{model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error."}},[l("q-input",{attrs:{"float-label":"Input float label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",label:"Field label",helper:"Some helper",error:e.error,"error-label":"Oops, we got an error."}},[l("q-input",{attrs:{type:"email",suffix:"@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),l("q-field",{attrs:{count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error."}},[l("q-input",{attrs:{inverted:""},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",count:10,helper:"Some helper",error:e.error,"error-label":"Oops, we got an error."}},[l("q-input",{attrs:{inverted:"",color:"amber","stack-label":"Input stack label"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{icon:"wifi",label:"Field label",helper:"Some helper",error:e.error,"error-label":"Oops, we got an error."}},[l("q-input",{attrs:{inverted:"",color:"secondary",type:"email",suffix:"@email.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("Wrapping form components")]),e._v(" "),l("q-field",{attrs:{icon:"supervisor_account",count:"",helper:"Type names"}},[l("q-chips-input",{attrs:{"float-label":"Chips Input"},model:{value:e.chips,callback:function(t){e.chips=t},expression:"chips"}})],1),e._v(" "),l("q-field",{attrs:{icon:"work",label:"Employees",count:10,helper:"Type names"}},[l("q-chips-input",{attrs:{inverted:"",color:"black","frame-color":"secondary","float-label":"Chips Input"},model:{value:e.chips,callback:function(t){e.chips=t},expression:"chips"}})],1),e._v(" "),l("q-field",{attrs:{icon:"place",label:"Meeting city",helper:"Pick a city"}},[l("q-select",{attrs:{"float-label":"Select",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),l("q-field",{attrs:{icon:"cake",label:"Desert flavor",helper:"Pick a flavor"}},[l("q-option-group",{attrs:{color:"purple",options:[{label:"Cherry",value:"cherry"},{label:"Pineapple",value:"pineapple"},{label:"Peach",value:"peach"}]},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1),e._v(" "),l("q-field",{attrs:{icon:"access_time",label:"Meeting time",helper:"Pick a date"}},[l("q-datetime",{attrs:{type:"date",color:"secondary","float-label":"Datetime"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),l("q-field",{attrs:{icon:"rate_review",label:"Review rating",helper:"How much do you like the review?"}},[l("q-rating",{attrs:{size:"2rem",color:"primary",max:5},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1),e._v(" "),l("q-field",{attrs:{icon:"edit_location",count:"",label:"Favorite cities",helper:"Pick some you want to visit"}},[l("q-option-group",{attrs:{type:"toggle",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.group2,callback:function(t){e.group2=t},expression:"group2"}})],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("On dark background")]),e._v(" "),l("div",{staticClass:"dark-example"},[l("q-field",{attrs:{dark:"",count:10,helper:"Some helper"}},[l("q-input",{attrs:{dark:"",color:"yellow"},model:{value:e.text,callback:function(t){e.text=t},expression:"text"}})],1),e._v(" "),l("q-field",{attrs:{dark:"",icon:"place",label:"Meeting city",helper:"Pick a city"}},[l("q-select",{attrs:{dark:"","float-label":"Select",color:"yellow",options:[{label:"Bucharest",value:"bucharest"},{label:"London",value:"london"},{label:"Paris",value:"paris"}]},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1),e._v(" "),l("q-field",{attrs:{dark:"",icon:"rate_review",label:"Review rating",helper:"How much do you like the review?"}},[l("q-rating",{attrs:{size:"2rem",max:5},model:{value:e.rating,callback:function(t){e.rating=t},expression:"rating"}})],1)],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("Alignment with inset (view on desktop)")]),e._v(" "),l("q-field",{attrs:{icon:"wifi",label:"Label",helper:"No inset"}},[l("q-input",{model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),e._v(" "),l("q-field",{attrs:{inset:"label",icon:"wifi",helper:"Inset label"}},[l("q-input",{model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),e._v(" "),l("q-field",{attrs:{inset:"icon",label:"Label",helper:"Icon inset"}},[l("q-input",{model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),e._v(" "),l("q-field",{attrs:{inset:"full",helper:"Full inset"}},[l("q-input",{model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),e._v(" "),l("p",{staticClass:"caption"},[e._v("Label width (view on desktop)")]),e._v(" "),l("q-field",{attrs:{"label-width":3,icon:"wifi",label:"Width 3/12",helper:"Some helper"}},[l("q-input",{model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),e._v(" "),l("q-field",{attrs:{"label-width":5,icon:"wifi",label:"Width 5/12",helper:"Some helper"}},[l("q-input",{model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1),e._v(" "),l("q-field",{attrs:{"label-width":8,icon:"wifi",label:"Width 8/12",helper:"Some helper"}},[l("q-input",{model:{value:e.text2,callback:function(t){e.text2=t},expression:"text2"}})],1)],1)])},i=[],r={render:a,staticRenderFns:i};t.a=r}});