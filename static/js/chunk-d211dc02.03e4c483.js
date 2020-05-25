(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d211dc02"],{"17a6":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticStyle:{width:"100%"}},[a("el-row",{attrs:{gutter:50}},[a("el-col",{attrs:{span:7}},[a("el-input",{attrs:{clearable:"",placeholder:"请输入专业名称","prefix-icon":"el-icon-search"},on:{clear:e.getProfessionData,input:e.getProfessionData},model:{value:e.queryInfo.keyWord,callback:function(t){e.$set(e.queryInfo,"keyWord",t)},expression:"queryInfo.keyWord"}})],1),a("el-col",{attrs:{span:4}},[a("el-row",[a("el-tooltip",{attrs:{effect:"dark",content:"创建专业(作为班级的容器)",placement:"top"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:""},on:{click:function(t){e.addDialogVisible=!0}}})],1)],1)],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,border:"",stripe:""}},[e._l(e.tableHeader,(function(e){return a("el-table-column",{key:e.prop,attrs:{label:e.label,prop:e.prop,align:"center"}})})),a("el-table-column",{attrs:{label:"操作",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tooltip",{attrs:{effect:"dark",content:"编辑专业(可编辑专业名称)",placement:"top"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""},on:{click:function(a){return e.editDialogVisible1(t.row.professionCode,t.row.professionName)}}})],1),a("el-tooltip",{attrs:{effect:"dark",content:"删除专业(不会删除班级及学生)",placement:"top"}},[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){return e.deleteDialogVisible1(t.row.professionCode)}}})],1)]}}])})],2),a("el-pagination",{attrs:{"current-page":e.queryInfo.pageNum,"page-sizes":[5,10,15,20],"page-size":e.queryInfo.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.total,background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),a("el-dialog",{attrs:{title:"添加专业",visible:e.addDialogVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(t){e.addDialogVisible=t}}},[a("el-form",{ref:"addFormRef",attrs:{model:e.addForm,rules:e.addFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"专业名称",prop:"professionName"}},[a("el-input",{model:{value:e.addForm.professionName,callback:function(t){e.$set(e.addForm,"professionName",t)},expression:"addForm.professionName"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.addDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.addProfession}},[e._v("添加专业")])],1)],1),a("el-dialog",{attrs:{title:"修改名称",visible:e.editDialogVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(t){e.editDialogVisible=t}}},[a("el-form",{ref:"editFormRef",attrs:{model:e.editForm,rules:e.editFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"新专业名称",prop:"professionName"}},[a("el-input",{model:{value:e.editForm.professionName,callback:function(t){e.$set(e.editForm,"professionName",t)},expression:"editForm.professionName"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.editProfession}},[e._v("修改名称")])],1)],1),a("el-dialog",{attrs:{title:"删除专业",visible:e.deleteDialogVisible,width:"50%","close-on-click-modal":!1},on:{"update:visible":function(t){e.deleteDialogVisible=t}}},[a("span",[e._v("确认删除吗?")]),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.deleteDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteProfession}},[e._v("删除专业")])],1)])],1)},r=[],s=(a("96cf"),a("1da1")),i={name:"ProfessionManage",data:function(){return{queryInfo:{keyWord:"",pageNum:1,pageSize:5},tableData:[],total:0,tableHeader:[{label:"专业编号",prop:"professionCode"},{label:"专业名称",prop:"professionName"},{label:"专业人数",prop:"professionHumanNum"},{label:"班级个数",prop:"professionClassesNum"},{label:"创建时间",prop:"addTime"}],addDialogVisible:!1,addForm:{professionName:""},addFormRules:{professionName:[{required:!0,message:"请输入专业名称",trigger:"blur"},{min:4,max:21,message:"长度在 4 到 21 个字符",trigger:"blur"}]},editDialogVisible:!1,deleteDialogVisible:!1,professionCode:"",editForm:{professionName:""},editFormRules:{professionName:[{required:!0,message:"请输入专业名称",trigger:"blur"},{min:4,max:21,message:"长度在 4 到 21 个字符",trigger:"blur"}]}}},created:function(){this.getProfessionData()},methods:{addProfession:function(){var e=this;this.$refs.addFormRef.validate(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=7;break}return o=JSON.stringify({useraction:"addProfession",username:window.sessionStorage.getItem("username"),professionName:e.addForm.professionName}),t.next=4,e.$http.post("/data/",o);case 4:r=t.sent,0===r.data.ret&&(e.$message({message:r.data.data,type:"success",showClose:!0,center:!0}),e.addDialogVisible=!1,e.getProfessionData()),1===r.data.ret&&e.$message({message:r.data.data,type:"error",showClose:!0,center:!0});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},editDialogVisible1:function(e,t){this.professionCode=e,this.editDialogVisible=!0,this.editForm.professionName=t},editProfession:function(){var e=this,t=this.professionCode;this.$refs.editFormRef.validate(function(){var a=Object(s["a"])(regeneratorRuntime.mark((function a(o){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!o){a.next=7;break}return r=JSON.stringify({useraction:"editProfession",username:window.sessionStorage.getItem("username"),professionCode:t,professionName:e.editForm.professionName}),a.next=4,e.$http.post("/data/",r);case 4:s=a.sent,0===s.data.ret&&(e.$message({message:s.data.data,type:"success",showClose:!0,center:!0}),e.editDialogVisible=!1,e.getProfessionData()),1===s.data.ret&&e.$message({message:s.data.data,type:"error",showClose:!0,center:!0});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},deleteDialogVisible1:function(e){this.professionCode=e,this.deleteDialogVisible=!0},deleteProfession:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.professionCode,o=JSON.stringify({useraction:"deleteProfession",username:window.sessionStorage.getItem("username"),professionCode:a}),t.next=4,e.$http.post("/data/",o);case 4:r=t.sent,0===r.data.ret&&(e.$message({message:r.data.data,type:"success",showClose:!0,center:!0}),e.deleteDialogVisible=!1,e.getProfessionData()),1===r.data.ret&&e.$message({message:r.data.data,type:"error",showClose:!0,center:!0});case 7:case"end":return t.stop()}}),t)})))()},getProfessionData:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=JSON.stringify({useraction:"getProfessionData",username:window.sessionStorage.getItem("username"),query:e.queryInfo}),t.next=3,e.$http.post("/data/",a);case 3:if(o=t.sent,0!==o.data.ret){t.next=9;break}return e.queryInfo.pageNum=o.data.pageNum,e.total=o.data.total,e.tableData=o.data.data,t.abrupt("return");case 9:e.$message({message:"读取数据失败！",type:"error",showClose:!0,center:!0});case 10:case"end":return t.stop()}}),t)})))()},handleSizeChange:function(e){this.queryInfo.pageSize=e,this.getProfessionData()},handleCurrentChange:function(e){this.queryInfo.pageNum=e,this.getProfessionData()}}},n=i,l=(a("bddc"),a("2877")),d=Object(l["a"])(n,o,r,!1,null,"f92b1be6",null);t["default"]=d.exports},"223e":function(e,t,a){},bddc:function(e,t,a){"use strict";var o=a("223e"),r=a.n(o);r.a}}]);
//# sourceMappingURL=chunk-d211dc02.03e4c483.js.map