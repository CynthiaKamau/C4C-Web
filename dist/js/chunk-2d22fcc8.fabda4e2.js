(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22fcc8"],{ea0f:function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-lg":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-card",{attrs:{fullscreen:"",scrollable:"","min-width":"90%"}},[r("v-card-title",{staticClass:"headline"},[t._v(" "+t._s(t.result.title)+" ")]),t._v(" "),t._l(t.result.files,(function(e){return r("v-list",{key:e},[r("v-card-text",{attrs:{height:"500px"}},[t._v(" Download Documents :"),r("a",{attrs:{href:e.link,target:"_blank"}},[t._v(" "+t._s(e.file_name)+" ")])])],1)})),t._v(" "),r("v-card-text",{attrs:{height:"500px"},domProps:{innerHTML:t._s(t.result.body)}},[t._v(" "+t._s(t.result.body))])],2)],1)],1)},a=[],n=r("bc3a"),l=r.n(n),c={data:function(){return{result:[],results:[]}},created:function(){this.getResource()},methods:{getResource:function(){var t=this,e=this.$route.params.id;l.a.get("resources/special/"+e).then((function(e){t.result=e.data.data})).catch((function(t){return console.log(t.message)}))}}},i=c,u=r("2877"),o=Object(u["a"])(i,s,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d22fcc8.fabda4e2.js.map