(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-51668448"],{"1cba":function(e,t,i){"use strict";var a=i("d67e"),r=i.n(a);r.a},d67e:function(e,t,i){},fccb:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[i("v-layout",{attrs:{"justify-center":"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md11:""}},[i("v-card",[i("v-card-text",[i("p",{staticClass:"display-1 text--primary"},[e._v("\n\n            Add A New Facility Resource\n          ")]),e._v(" "),i("div",{staticClass:"text--primary"},[e._v("\n            Kindly fill all the required fields\n          ")])]),e._v(" "),i("v-form",{ref:"form",attrs:{"lazy-validation":""},on:{submit:e.postProtocal},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[i("v-container",{attrs:{"py-0":""}},[i("v-layout",{attrs:{wrap:""}},[i("v-flex",{attrs:{xs12:"",md12:""}},[i("v-text-field",{staticClass:"purple-input",attrs:{id:"title",rules:[function(e){return!!e||"Title is required"}],required:"",label:"Title"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),e._v(" "),i("v-flex",{attrs:{xs12:"",md8:""}},[i("label",[e._v("Facility:")]),e._v(" "),4===e.user.role_id?i("div",[i("v-chip",{staticClass:"ma-2",attrs:{"x-large":""}},[e._v("\n                    "+e._s(e.user.hcw.facility_name)+"\n                  ")])],1):1===e.user.role_id||2===e.user.role_id?i("div",[i("v-combobox",{attrs:{items:e.all_facilities,loading:e.load,disabled:e.load,rules:[function(e){return!!e||"Facility is required"}],"item-text":"name","item-value":"id",clearable:"","persistent-hint":"",chips:""},model:{value:e.facility,callback:function(t){e.facility=t},expression:"facility"}})],1):e._e()]),e._v(" "),i("v-flex",{attrs:{xs12:""}},[i("ckeditor",{attrs:{id:"editorData",editor:e.editor,required:""},model:{value:e.editorData,callback:function(t){e.editorData=t},expression:"editorData"}}),e._v(" "),i("ul",e._l(e.errors,(function(t){return i("li",{key:t},[e._v(e._s(t))])})),0)],1),e._v(" "),i("v-flex",{attrs:{xs12:""}},[i("label",{attrs:{for:"document"}},[e._v("Upload Image:")]),e._v(" "),i("input",{ref:"file",attrs:{id:"file",value:"file",accept:"image/*",type:"file"},on:{change:function(t){e.handleImageChange()}}}),e._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:e.showPreview,expression:"showPreview"}],attrs:{src:e.imagePreview}})]),e._v(" "),i("v-flex",[i("label",{attrs:{for:"document"}},[e._v("Upload Documents:")]),e._v(" "),i("input",{ref:"files",attrs:{id:"files",value:"files",type:"file",multiple:""},on:{change:function(t){e.handleFiles()}}}),e._v(" "),e._l(e.files,(function(t,a){return i("v-card",{key:t.id,staticClass:"file-listing"},[e._v(e._s(t.name)+"\n                  "),i("span",{staticClass:"remove-file",on:{click:function(t){e.removeFile(a)}}},[e._v(" Remove ")])])}))],2),e._v(" "),i("v-flex",{attrs:{xs12:"","text-xs-right":""}},[i("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{disabled:!e.valid,loading:e.dialog1,color:"success",type:"submit"},on:{click:function(t){e.validate(),e.dialog1=!0}}},[e._v("\n                  Submit\n                ")]),e._v(" "),i("v-dialog",{attrs:{"max-width":"290",lazy:""},model:{value:e.dialog1,callback:function(t){e.dialog1=t},expression:"dialog1"}},[i("v-card",[i("v-card-text",{staticClass:"text-xs-center"},[i("v-progress-circular",{staticClass:"primary--text",attrs:{size:70,indeterminate:""}})],1)],1)],1),e._v(" "),i("v-alert",{attrs:{value:e.alert,icon:"mdi-alert",dismissible:"",outline:"",color:"error",elevation:"2"}},[i("h6",[e._v(" "+e._s(e.output.error)+" "+e._s(e.output.message)+" ")])])],1)],1)],1)],1)],1)],1)],1)],1)},r=[],l=i("bc3a"),s=i.n(l),n=i("2f62"),o=i("fb3d"),c=i.n(o);function u(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function d(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?u(Object(i),!0).forEach((function(t){f(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var v={data:function(){return{editor:c.a,editorData:"",editorConfig:{},items:[],errors:"",alert:!1,valid:!0,dialog1:!1,result:"",facility_id:"",title:"",file:"",all_facilities:[],facility:"",showPreview:!1,imagePreview:"",files:[],output:"",load:!0}},computed:d({},Object(n["c"])({user:"auth/user"})),watch:{dialog1:function(e){var t=this;e&&setTimeout((function(){return t.dialog1=!1}),8e3)}},created:function(){this.getFacilities()},methods:{validate:function(){this.$refs.form.validate()},getFacilities:function(){var e=this;s.a.get("facilities").then((function(t){e.all_facilities=t.data.data,e.load=!1})).catch((function(e){return console.log(e.message)}))},handleFiles:function(){for(var e=this.$refs.files.files,t=0;t<e.length;t++)this.files.push(e[t])},handleImageChange:function(e){this.file=this.$refs.file.files[0];var t=new FileReader;t.addEventListener("load",function(){this.showPreview=!0,this.imagePreview=t.result}.bind(this),!1),this.file&&/\.(jpe?g|png|gif)$/i.test(this.file.name)&&t.readAsDataURL(this.file)},removeFile:function(e){this.files.splice(e,1)},postProtocal:function(e){var t=this;if(e.preventDefault(),this.errors=[],""==this.editorData)this.errors.push("Description is required.");else{for(var i=new FormData,a=0;a<this.files.length;a++){var r=this.files[a];i.append("protocol_files["+a+"]",r)}i.append("image_file",this.file),i.append("title",this.title),i.append("body",this.editorData),4===this.user.role_id?i.append("facility_id",this.user.hcw.facility_id):(1===this.user.role_id||2===this.user.role_id)&&i.append("facility_id",this.facility.id),s.a.post("resources/protocols/create",i,{headers:{"content-type":"multipart/form-data"}}).then((function(e){t.output=e.data,t.alert=!0,t.$router.push("/protocols")})).catch((function(e){t.output=e,console.log(e),t.alert=!0}))}}}},p=v,h=(i("1cba"),i("2877")),m=Object(h["a"])(p,a,r,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-51668448.4301dbce.js.map