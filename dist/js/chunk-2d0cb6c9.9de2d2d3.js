(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cb6c9"],{"4a39":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"fill-height":"",fluid:"","grid-list-xl":""}},[a("v-layout",{attrs:{"justify-center":"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md8:""}},[a("v-form",{on:{submit:e.postUser}},[a("material-card",{attrs:{color:"green",title:"Edit Profile",text:"Complete your profile"}},[a("v-card-text",[a("p",{staticClass:"display-1 text--primary"},[e._v("\n              User Profile\n            ")]),e._v(" "),a("div",{staticClass:"text--primary"})]),e._v(" "),a("v-container",{attrs:{"py-0":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{rules:[function(e){return!!e||"First Name is required"}],label:"First Name"},model:{value:e.userData.first_name,callback:function(t){e.$set(e.userData,"first_name",t)},expression:"userData.first_name"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-text-field",{attrs:{rules:[function(e){return!!e||"Surname is required"}],label:"Surname"},model:{value:e.userData.surname,callback:function(t){e.$set(e.userData,"surname",t)},expression:"userData.surname"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("v-select",{attrs:{items:e.gender,rules:[function(e){return!!e||"Gender is required"}],label:"Gender",required:"",autocomplete:""},model:{value:e.userData.gender,callback:function(t){e.$set(e.userData,"gender",t)},expression:"userData.gender"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-text-field",{attrs:{rules:[function(e){return!!e||"Email is required"}],label:"E-mail",required:""},model:{value:e.userData.email,callback:function(t){e.$set(e.userData,"email",t)},expression:"userData.email"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-select",{attrs:{items:e.roles,rules:[function(e){return!!e||"Role is required"}],hint:""+e.user.role.name,"item-value":"id","item-text":"name",label:"Role",required:"","return-object":"","persistent-hint":"",autocomplete:""},model:{value:e.userData.role,callback:function(t){e.$set(e.userData,"role",t)},expression:"userData.role"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-select",{attrs:{items:e.all_facilities,hint:""+e.user.hcw.facility_name,rules:[function(e){return!!e||"Facility is required"}],"item-value":"id","item-text":"name",label:"Facility","persistent-hint":"",required:"",autocomplete:""},model:{value:e.userData.hcw.facility_name,callback:function(t){e.$set(e.userData.hcw,"facility_name",t)},expression:"userData.hcw.facility_name"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-select",{attrs:{items:e.all_cadres,rules:[function(e){return!!e||"Cadre is required"}],hint:""+e.user.cadre,"item-value":"id","item-text":"name",required:"",label:"Cadre","persistent-hint":"",autocomplete:""},model:{value:e.userData.cadre,callback:function(t){e.$set(e.userData,"cadre",t)},expression:"userData.cadre"}})],1),e._v(" "),a("v-flex",{attrs:{xs12:"","text-xs-right":""}},[a("v-btn",{staticClass:"mx-0 font-weight-light",attrs:{color:"success",type:"submit"}},[e._v("\n                  Update Profile\n                ")]),e._v(" "),a("v-alert",{attrs:{value:e.alert,icon:"mdi-alert",dismissible:"",outline:"",color:"error",elevation:"2"}},[a("h6",[e._v(" "+e._s(e.output.error)+" "+e._s(e.output.message)+" "+e._s(e.output)+" ")])])],1)],1)],1)],1)],1)],1),e._v(" "),a("v-flex",{attrs:{xs12:"",md4:""}},[a("material-card",{staticClass:"v-card-profile text-xs-center"},[a("v-card-text",[a("h4",{staticClass:"card-title font-weight-light"},[e._v("Profile")]),e._v(" "),a("v-avatar",{staticClass:"mx-auto d-block",attrs:{slot:"offset",size:"130"},slot:"offset"},[a("v-img",{attrs:{src:e.logo}})],1),e._v(" "),a("div"),e._v(" "),a("p",{staticClass:"display-1 text--primary"},[e._v("\n            "+e._s(e.user.first_name)+" "+e._s(e.user.surname)+"\n          ")]),e._v(" "),a("h6",{staticClass:"category text-gray font-weight-thin mb-3"},[e._v(e._s(e.user.role.name))]),e._v(" "),a("p",{staticClass:"card-description font-weight-light"},[e._v("Don't be scared of the truth because we need to restart the human foundation in truth")])],1)],1)],1)],1)],1)},s=[],i=a("bc3a"),n=a.n(i),l=a("2f62");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d={data:function(){return{logo:"c4c_new.png",gender:["MALE","FEMALE","UNDEFINED"],roles:[{id:"1",name:"Super Admin"},{id:"2",name:"Partner Admin"},{id:"3",name:"Health care worker"},{id:"4",name:"Facility Admin"},{id:"5",name:"County Admin"}],select:{state:"Flodrida"},all_facilities:[],all_cadres:[],userData:{first_name:"",surname:"",gender:"",email:"",role:"",facility_name:"",cadre:""},output:"",alert:!1}},computed:c({},Object(l["c"])({user:"auth/user"})),created:function(){this.getFacilities(),this.getCadres(),this.getUser()},methods:{getFacilities:function(){var e=this;n.a.get("facilities").then((function(t){e.all_facilities=t.data.data})).catch((function(e){return console.log(e.message)}))},getCadres:function(){var e=this;n.a.get("cadres").then((function(t){e.all_cadres=t.data.data})).catch((function(e){return console.log(e.message)}))},getUser:function(){var e=this;n.a.get("auth/user").then((function(t){e.userData=t.data.data})).catch((function(e){return console.log(e.message)}))},postUser:function(e){var t=this;e.preventDefault();var a=new FormData;a.append("first_name",this.user.first_name),a.append("surname",this.user.surname),a.append("gender",this.user.gender),a.append("email",this.user.email),a.append("role",this.user.role),a.append("facility_name",this.user.hcw.fa),a.append("cadre",this.user.cadre),n()({method:"POST",url:"auth/complete_profile",data:a}).then((function(e){t.output=e.data,t.alert=!0})).catch((function(e){t.output=e}))}}},m=d,f=a("2877"),p=Object(f["a"])(m,r,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0cb6c9.9de2d2d3.js.map