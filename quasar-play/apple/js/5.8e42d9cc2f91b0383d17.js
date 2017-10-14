webpackJsonp([5],{168:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(430),n=a.n(o),l=a(433),r=a(4),i=r(n.a,l.a,!1,null,null,null);t.default=i.exports},192:function(e,t){var a=e.exports={version:"2.5.0"};"number"==typeof __e&&(__e=a)},430:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(431),n=function(e){return e&&e.__esModule?e:{default:e}}(o),l=a(1);t.default={components:{QList:l.QList,QListHeader:l.QListHeader,QItemSeparator:l.QItemSeparator,QItem:l.QItem,QItemSide:l.QItemSide,QItemMain:l.QItemMain},directives:{Ripple:l.Ripple},methods:{showFromEdge:function(e){l.Dialog.create({title:"Positioned",message:"This dialog appears from "+e+".",position:e})}},data:function(){return{types:[{label:"Alert",icon:"warning",handler:function(){l.Dialog.create({title:"Alert",message:"Modern HTML5 Single Page Application front-end framework on steroids."})}},{label:"Confirm",icon:"done_all",handler:function(){l.Dialog.create({title:"Confirm",message:"Modern HTML5 Single Page Application front-end framework on steroids.",buttons:[{label:"Disagree",handler:function(){l.Toast.create("Disagreed...")}},{label:"Agree",handler:function(){l.Toast.create("Agreed!")}}]})}},{label:"Custom CSS classes & style to buttons",icon:"format_color_fill",handler:function(){l.Dialog.create({title:"Confirm",message:"Customized buttons.",buttons:[{label:"Disagree",color:"negative",outline:!0,style:"text-decoration: underline"},{label:"Agree",raised:!0,color:"positive"}]})}},{label:"Stacked Buttons Example",icon:"reorder",handler:function(){l.Dialog.create({title:"Favorite Superhero",message:"What is your superhero of choice?",stackButtons:!0,buttons:[{label:"Choose Superman",handler:function(){console.log("Superman.")}},{label:"Choose Batman",handler:function(){console.log("Batman.")}},{label:"Choose Spiderman",handler:function(){console.log("Spiderman.")}},{label:"No Thanks",color:"primary",raised:!0,handler:function(){console.log("Ok, no superhero.")}}]})}},{label:"Prevent Close on Button",icon:"clear",handler:function(){l.Dialog.create({title:"Prevent Close",message:'Having "Prevent" checkbox ticked and then hitting "Try to Close" button will prevent the dialog from closing.',form:{prevent:{type:"checkbox",model:["prevent"],items:[{label:"Prevent dialog close",value:"prevent"}]}},buttons:[{label:"Try to Close",preventClose:!0,handler:function(e,t){if(!e.prevent.length)return void t(function(){l.Toast.create("Finally. It's closed now.")});l.Toast.create('Untick "Prevent" checkbox to be able to close the Dialog.')}}]})}},{label:"Determined Progress",icon:"hourglass_empty",handler:function(){var e={model:25},t=l.Dialog.create({title:"Progress",message:"Computing...",progress:e,buttons:[{label:"Cancel",handler:function(){clearInterval(a),l.Toast.create("Canceled on progress "+e.model)}}]}),a=setInterval(function(){e.model+=Math.floor(5*Math.random())+1,e.model>=42&&(clearInterval(a),t.close())},500)}},{label:"Indeterminate Progress",icon:"hourglass_full",handler:function(){var e=l.Dialog.create({title:"Progress",message:"Computing...",progress:{indeterminate:!0},buttons:[{label:"Cancel",handler:function(e){clearTimeout(t),l.Toast.create("Canceled...")}}]}),t=setTimeout(function(){clearInterval(t),e.close()},3e3)}}],form:[{label:"Textfields",icon:"help",handler:function(){l.Dialog.create({title:"Prompt",message:"Modern HTML5 Single Page Application front-end framework on steroids.",form:{name:{type:"text",label:"Textbox",model:""},age:{type:"number",label:"Numeric",model:10,min:5,max:90},tags:{type:"chips",label:"Chips",model:["Joe","John"]},comments:{type:"textarea",label:"Textarea",model:""}},buttons:["Cancel",{label:"Ok",handler:function(e){l.Toast.create("Returned "+(0,n.default)(e))}}]})}},{label:"Single Selection",icon:"radio_button_checked",handler:function(){l.Dialog.create({title:"Radios",message:"Message can be used for all types of Dialogs.",form:{option:{type:"radio",model:"opt1",items:[{label:"Option 1",value:"opt1",color:"secondary"},{label:"Option 2",value:"opt2"},{label:"Option 3",value:"opt3"}]}},buttons:["Cancel",{label:"Ok",handler:function(e){l.Toast.create("Returned "+(0,n.default)(e))}}]})}},{label:"Multiple Selection",icon:"check_box",handler:function(){l.Dialog.create({title:"Checkbox & Toggle",message:"Message can be used for all types of Dialogs.",form:{header1:{type:"heading",label:"Checkboxes"},group1:{type:"checkbox",model:["opt3"],items:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2",color:"secondary"},{label:"Option 3",value:"opt3",color:"amber"}]},header2:{type:"heading",label:"Toggles"},group2:{type:"toggle",model:["opt1"],items:[{label:"Option 1",value:"opt1"},{label:"Option 2",value:"opt2",color:"secondary"},{label:"Option 3",value:"opt3",color:"amber"}]}},buttons:["Cancel",{label:"Ok",handler:function(e){l.Toast.create("Returned "+(0,n.default)(e))}}]})}},{label:"Slider & Range",icon:"help",handler:function(){l.Dialog.create({title:"Slider & Range",form:{slider:{type:"slider",label:"Slider",min:10,max:20,withLabel:!0,model:12,color:"secondary"},range:{type:"range",label:"Range",model:{min:7,max:12},min:5,max:15,withLabel:!0},step:{type:"slider",label:"With step & snap",model:-6,min:-10,max:10,step:4,snap:!0,markers:!0,withLabel:!0}},buttons:["Cancel",{label:"Ok",handler:function(e){l.Toast.create("Returned "+(0,n.default)(e))}}]})}},{label:"Rating",icon:"star_half",handler:function(){l.Dialog.create({title:"Rating",form:{rating:{type:"rating",label:"How many stars?",model:0,max:5},rating2:{type:"rating",label:"How many pencils?",model:3,max:6,icon:"create"}},buttons:["Cancel",{label:"Ok",handler:function(e){l.Toast.create("Returned "+(0,n.default)(e))}}]})}}]}}}},431:function(e,t,a){e.exports={default:a(432),__esModule:!0}},432:function(e,t,a){var o=a(192),n=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},433:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"layout-padding row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[e._m(0),e._v(" "),a("q-list",{staticStyle:{"max-width":"600px"}},[e._l(e.types,function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],key:t,attrs:{link:""},on:{click:function(e){t.handler()}}},[a("q-item-side",{attrs:{icon:t.icon}}),e._v(" "),a("q-item-main",{attrs:{label:t.label}}),e._v(" "),a("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)}),e._v(" "),a("q-item-separator"),e._v(" "),a("q-list-header",[e._v("With Form Components")]),e._v(" "),e._l(e.form,function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],key:t,attrs:{link:""},on:{click:function(e){t.handler()}}},[a("q-item-side",{attrs:{icon:t.icon}}),e._v(" "),a("q-item-main",{attrs:{label:t.label}}),e._v(" "),a("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)}),e._v(" "),a("q-item-separator"),e._v(" "),a("q-list-header",[e._v("Appear from Edges")]),e._v(" "),e._l(["top","bottom","left","right"],function(t){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],key:t,attrs:{link:"",position:t},on:{click:function(a){e.showFromEdge(t)}}},[a("q-item-side",{attrs:{icon:"open_with"}}),e._v(" "),a("q-item-main",{attrs:{label:"Dialog from "+t}}),e._v(" "),a("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)})],2),e._v(" "),a("p",{staticClass:"caption"},[e._v("Form components can be combined and named however you wish. Check source code.")])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"caption"},[a("span",{staticClass:"desktop-only"},[e._v("Click")]),e._v(" "),a("span",{staticClass:"mobile-only"},[e._v("Tap")]),e._v("\n      on each type to see it in action.\n    ")])}],l={render:o,staticRenderFns:n};t.a=l}});