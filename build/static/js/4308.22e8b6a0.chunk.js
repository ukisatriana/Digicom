"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[4308],{1166:function(e,n,t){var r,a=t(168),c=t(9439),i=t(2791),s=t(364),u=t(2554),o=t(6443),l=t(4923);n.Z=function(e){var n=e.children,t=e.background,p=e.className,d=e.overlap,f=(0,i.useState)(0),m=(0,c.Z)(f,2),h=m[0],v=m[1],g=(0,i.useRef)(null),Z=(0,s.v9)((function(e){return e.theme.navType})),x=(0,s.v9)((function(e){return e.theme.currentTheme}));(0,i.useEffect)((function(){if(Z===o.XA){var e=window.innerWidth,n=g.current.offsetWidth;v((e-n)/2)}}),[Z]);return(0,l.tZ)("div",{ref:g,css:(0,u.iv)(r||(r=(0,a.Z)(["\n\t\t\t\tbackground-color: ",";\n\t\t\t\tpadding: ","px;\n\t\t\t\tmargin-top: -","px;\n\t\t\t\tmargin-left: -","px;\n\t\t\t\tmargin-right: -","px;\n\n\t\t\t\t@media "," {\n\t\t\t\t\tmargin-left: -","px;\n        \t\t\tmargin-right: -","px;\n\t\t\t\t}\n\n\t\t\t\t","\n\t\t\t"])),"dark"===x?"#2f3a50":o.wx.WHITE,o.hv.LAYOUT_CONTENT_GUTTER,o.hv.LAYOUT_CONTENT_GUTTER,o.hv.LAYOUT_CONTENT_GUTTER,o.hv.LAYOUT_CONTENT_GUTTER,o.qk.MOBILE,o.hv.LAYOUT_CONTENT_GUTTER_SM,o.hv.LAYOUT_CONTENT_GUTTER_SM,d?"margin-bottom: -4.6875rem;":""),className:"page-header-alt ".concat(p||""),style:function(){var e={backgroundImage:t?"url(".concat(t,")"):"none"};return Z===o.XA&&(e.marginRight=-h,e.marginLeft=-h,e.paddingLeft=0,e.paddingRight=0),e}(),children:Z===o.XA?(0,l.tZ)("div",{className:"container",children:n}):(0,l.tZ)(l.HY,{children:n})})}},8470:function(e,n,t){var r=t(1413),a=t(4236).Z.div((function(e){var n=e.justifyContent,t=e.alignItems,a=e.flexDirection,c=e.gap,i=e.padding,s=e.margin,u={display:"flex",justifyContent:n,alignItems:t,gap:"number"===typeof c?"".concat(c,"px"):c};return a&&(u.flexDirection=a),i&&(u.padding=i),s&&(u.margin=s),(0,r.Z)({},u)}));n.Z=a},4276:function(e,n,t){var r=t(4942),a=t(1413),c=t(4165),i=t(5861),s=t(5020),u=t(6724),o={};o.createDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.ET)((0,u.hJ)(s.db,n),t);case 3:return r=e.sent,e.abrupt("return",r.id);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error adding document: "+e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n,t){return e.apply(this,arguments)}}(),o.getDocuments=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n){var t,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.PL)((0,u.hJ)(s.db,n));case 3:return t=e.sent,r=t.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())})),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error getting documents: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),o.getDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t){var r,a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,u.JU)(s.db,n,t),e.next=4,(0,u.QT)(r);case 4:if(!(a=e.sent).exists()){e.next=9;break}return e.abrupt("return",a.data());case 9:throw new Error("Document not found");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error fetching document: "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n,t){return e.apply(this,arguments)}}(),o.updateDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t,r){var a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(0,u.JU)(s.db,n,t),e.next=4,(0,u.r7)(a,r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error updating document: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t,r){return e.apply(this,arguments)}}(),o.deleteDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,u.JU)(s.db,n,t),e.next=4,(0,u.oe)(r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error deleting document: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t){return e.apply(this,arguments)}}(),o.addToArray=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t,a,i){var o;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=(0,u.JU)(s.db,n,t),e.next=4,(0,u.r7)(o,(0,r.Z)({},a,(0,u.vr)(i)));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error adding to array: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t,r,a){return e.apply(this,arguments)}}(),o.removeFromArray=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t,a,i){var o;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=(0,u.JU)(s.db,n,t),e.next=4,(0,u.r7)(o,(0,r.Z)({},a,(0,u.Ab)(i)));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error removing from array: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t,r,a){return e.apply(this,arguments)}}(),o.updateNestedMap=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t,a,i,o){var l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=(0,u.JU)(s.db,n,t),e.next=4,(0,u.r7)(l,(0,r.Z)({},"".concat(a,".").concat(i),o));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error updating nested map: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n,t,r,a,c){return e.apply(this,arguments)}}(),o.getDocumentByField=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(n,t,r){var a,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(0,u.IO)((0,u.hJ)(s.db,n),(0,u.ar)(t,"==",r)),e.next=4,(0,u.PL)(a);case 4:if((i=e.sent).empty){e.next=9;break}return e.abrupt("return",i.docs[0].data());case 9:throw new Error("Document not found");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error fetching document: "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(n,t,r){return e.apply(this,arguments)}}(),n.Z=o},4308:function(e,n,t){t.d(n,{Z:function(){return y}});var r=t(4165),a=t(5861),c=t(9439),i=t(2791),s=t(1166),u=t(7615),o=t(6988),l=t(7309),p=t(3640),d=t(8470),f=t(4276),m=t(7689),h=t(4942),v=t(1413),g=t(7888),Z=t(6106),x=t(914),w=t(376),b=t(184),E={diciplineNameR:[{required:!0,message:"Please enter Dicipline Knowledge Name"}],diciplineKetR:[{required:!0,message:"Please enter Dicipline Knowledge Description"}]},T=function(){var e=i.useState({diciplineName:"",diciplineKet:""}),n=(0,c.Z)(e,2),t=n[0],r=n[1];function a(e){var n=e.target,a=n.name,c=n.value;r((0,v.Z)((0,v.Z)({},t),{},(0,h.Z)({},a,c)))}return(0,b.jsx)(g.Z,{title:"Dicipline Knowledge",children:(0,b.jsxs)(Z.Z,{gutter:16,children:[(0,b.jsx)(x.Z,{span:24,children:(0,b.jsx)(u.Z.Item,{name:"diciplineName",label:"Dicipline Knowledge Name",rules:E.knowledgeNameR,children:(0,b.jsx)(w.Z,{placeholder:"Enter Dicipline Knowledge Name",type:"text",value:t.projectTypeName,name:"diciplineName",onChange:function(e){return a(e)}})})}),(0,b.jsx)(x.Z,{span:24,children:(0,b.jsx)(u.Z.Item,{name:"diciplineKet",label:"dicipline Desc",rules:E.diciplineKetR,children:(0,b.jsx)(w.Z,{placeholder:"Enter Project Desc",type:"text",value:t.projectTypeKet,name:"projectTypeKet",onChange:function(e){return a(e)}})})})]})})},D="ADD",k="EDIT",y=function(e){var n=e.mode,t=void 0===n?D:n,h=e.param,v=u.Z.useForm(),g=(0,c.Z)(v,1)[0],Z=(0,i.useState)(!1),x=(0,c.Z)(Z,2),w=x[0],E=x[1],y=(0,m.s0)();(0,i.useEffect)((function(){var e=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==k){e.next=12;break}return n=h.id,e.prev=2,e.next=5,f.Z.getDocument("diciplineData",n);case 5:a=e.sent,g.setFieldsValue(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),o.ZP.error("Error fetching document: "+e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[g,t,h]);var N=function(){E(!0),g.validateFields().then((function(e){setTimeout((function(){E(!1),t===D&&(o.ZP.success("Created ".concat(e.diciplineName," to diciplineData")),y("/app/apps/option/dicipline/dicipline-list")),t===k&&(o.ZP.success("Dicipline data saved"),y("/app/apps/option/dicipline/dicipline-list"))}),1500)})).catch((function(e){E(!1)}))},j=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var a,c;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t!==D){e.next=8;break}return e.next=4,f.Z.createDocument("diciplineData",n);case 4:a=e.sent,o.ZP.success("Dicipline Knowledge created with ID: ".concat(a)),e.next=13;break;case 8:if(t!==k){e.next=13;break}return c=h.id,e.next=12,f.Z.updateDocument("diciplineData",c,n);case 12:o.ZP.success("Dicipline Knowledge updated successfully");case 13:g.resetFields(),N(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),o.ZP.error("Error creating/updating Dicipline Knowledge Data: "+e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(n){return e.apply(this,arguments)}}();return(0,b.jsx)(b.Fragment,{children:(0,b.jsxs)(u.Z,{layout:"vertical",form:g,name:"advanced_search",className:"ant-advanced-search-form",initialValues:{diciplineName:"",diciplineKet:""},onFinish:j,children:[(0,b.jsx)(s.Z,{className:"border-bottom",overlap:!0,children:(0,b.jsx)("div",{className:"container",children:(0,b.jsxs)(d.Z,{className:"py-2",mobileFlex:!1,justifyContent:"space-between",alignItems:"center",children:[(0,b.jsxs)("h2",{className:"mb-3",children:["ADD"===t?"Add New Dicipline Knowledge":"Edit Dicipline Knowledge"," "]}),(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)(l.ZP,{className:"mr-2",onClick:function(){g.resetFields()},children:"Discard"}),(0,b.jsx)(l.ZP,{type:"primary",onClick:function(){return N()},htmlType:"submit",loading:w,children:"ADD"===t?"Add":"Save"})]})]})})}),(0,b.jsx)("div",{className:"container",children:(0,b.jsx)(p.Z,{defaultActiveKey:"1",style:{marginTop:30},items:[{label:"Dicipline Knowledge Field",key:"1",children:(0,b.jsx)(T,{})}]})})]})})}},2554:function(e,n,t){t.d(n,{iv:function(){return a}});t(2791),t(6215),t(2110);var r=t(9041);t(2561);function a(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(0,r.O)(n)}},4923:function(e,n,t){t.d(n,{BX:function(){return s},HY:function(){return c},tZ:function(){return i}});t(2791),t(6215);var r=t(9886),a=(t(2110),t(9041),t(2561),t(184)),c=a.Fragment;function i(e,n,t){return r.h.call(n,"css")?(0,a.jsx)(r.E,(0,r.c)(e,n),t):(0,a.jsx)(e,n,t)}function s(e,n,t){return r.h.call(n,"css")?(0,a.jsxs)(r.E,(0,r.c)(e,n),t):(0,a.jsxs)(e,n,t)}}}]);
//# sourceMappingURL=4308.22e8b6a0.chunk.js.map