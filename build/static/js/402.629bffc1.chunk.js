"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[402],{872:function(e,t,n){n(2791);var r=n(2385),a=n(3388),c=n(5033),i=n(184),o=function(e){return(0,i.jsx)(r.Z,{menu:{items:e.menu},placement:e.placement,trigger:[e.trigger],children:(0,i.jsx)("div",{className:"ellipsis-dropdown",children:(0,i.jsx)(c.Z,{})})})};o.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,i.jsx)(a.Z,{})},t.Z=o},8470:function(e,t,n){var r=n(1413),a=n(4236).Z.div((function(e){var t=e.justifyContent,n=e.alignItems,a=e.flexDirection,c=e.gap,i=e.padding,o=e.margin,u={display:"flex",justifyContent:t,alignItems:n,gap:"number"===typeof c?"".concat(c,"px"):c};return a&&(u.flexDirection=a),i&&(u.padding=i),o&&(u.margin=o),(0,r.Z)({},u)}));t.Z=a},4276:function(e,t,n){var r=n(4942),a=n(1413),c=n(4165),i=n(5861),o=n(5020),u=n(6724),s={};s.createDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.ET)((0,u.hJ)(o.db,t),n);case 3:return r=e.sent,e.abrupt("return",r.id);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error adding document: "+e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),s.getDocuments=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t){var n,r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.PL)((0,u.hJ)(o.db,t));case 3:return n=e.sent,r=n.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())})),e.abrupt("return",r);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error getting documents: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),s.getDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n){var r,a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,u.JU)(o.db,t,n),e.next=4,(0,u.QT)(r);case 4:if(!(a=e.sent).exists()){e.next=9;break}return e.abrupt("return",a.data());case 9:throw new Error("Document not found");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error fetching document: "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n){return e.apply(this,arguments)}}(),s.updateDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n,r){var a;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(0,u.JU)(o.db,t,n),e.next=4,(0,u.r7)(a,r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error updating document: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r){return e.apply(this,arguments)}}(),s.deleteDocument=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n){var r;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=(0,u.JU)(o.db,t,n),e.next=4,(0,u.oe)(r);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error deleting document: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n){return e.apply(this,arguments)}}(),s.addToArray=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n,a,i){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=(0,u.JU)(o.db,t,n),e.next=4,(0,u.r7)(s,(0,r.Z)({},a,(0,u.vr)(i)));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error adding to array: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),s.removeFromArray=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n,a,i){var s;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=(0,u.JU)(o.db,t,n),e.next=4,(0,u.r7)(s,(0,r.Z)({},a,(0,u.Ab)(i)));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error removing from array: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r,a){return e.apply(this,arguments)}}(),s.updateNestedMap=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n,a,i,s){var l;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,l=(0,u.JU)(o.db,t,n),e.next=4,(0,u.r7)(l,(0,r.Z)({},"".concat(a,".").concat(i),s));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error updating nested map: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,n,r,a,c){return e.apply(this,arguments)}}(),s.getDocumentByField=function(){var e=(0,i.Z)((0,c.Z)().mark((function e(t,n,r){var a,i;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(0,u.IO)((0,u.hJ)(o.db,t),(0,u.ar)(n,"==",r)),e.next=4,(0,u.PL)(a);case 4:if((i=e.sent).empty){e.next=9;break}return e.abrupt("return",i.docs[0].data());case 9:throw new Error("Document not found");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error fetching document: "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,n,r){return e.apply(this,arguments)}}(),t.Z=s},2703:function(e,t,n){var r=n(5671),a=n(3144),c=function(){function e(){(0,r.Z)(this,e)}return(0,a.Z)(e,null,[{key:"getNameInitial",value:function(e){var t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}},{key:"getRouteInfo",value:function(e,t){if(e.path===t)return e;var n;for(var r in e)if(e.hasOwnProperty(r)&&"object"===typeof e[r]&&(n=this.getRouteInfo(e[r],t)))return n;return n}},{key:"getColorContrast",value:function(e){if(!e)return"dark";var t=parseInt(a(e).substring(0,2),16),n=function(e){return parseInt(a(e).substring(2,4),16)}(e),r=function(e){return parseInt(a(e).substring(4,6),16)}(e);function a(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*t+587*n+114*r)/1e3>130?"dark":"light"}},{key:"shadeColor",value:function(e,t){var n=parseInt(e.substring(1,3),16),r=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16);n=parseInt(n*(100+t)/100),r=(r=parseInt(r*(100+t)/100))<255?r:255,a=(a=parseInt(a*(100+t)/100))<255?a:255;var c=1===(n=n<255?n:255).toString(16).length?"0".concat(n.toString(16)):n.toString(16),i=1===r.toString(16).length?"0".concat(r.toString(16)):r.toString(16),o=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16);return"#".concat(c).concat(i).concat(o)}},{key:"rgbaToHex",value:function(e){var t=function(e){return e.replace(/^\s+|\s+$/gm,"")},n=e.substring(e.indexOf("(")).split(","),r=parseInt(t(n[0].substring(1)),10),a=parseInt(t(n[1]),10),c=parseInt(t(n[2]),10),i=parseFloat(t(n[3].substring(0,n[3].length-1))).toFixed(2),o=[r.toString(16),a.toString(16),c.toString(16),Math.round(255*i).toString(16).substring(0,2)];return o.forEach((function(e,t){1===e.length&&(o[t]="0"+e)})),"#".concat(o.join(""))}},{key:"getSignNum",value:function(e,t,n){return e>0?t:e<0?n:null}},{key:"antdTableSorter",value:function(e,t,n){return"number"===typeof e[n]&&"number"===typeof t[n]?e[n]-t[n]:"string"===typeof e[n]&&"string"===typeof t[n]?(e=e[n].toLowerCase())>(t=t[n].toLowerCase())?-1:t>e?1:0:void 0}},{key:"filterArray",value:function(e,t,n){var r=e;return e&&(r=e.filter((function(e){return e[t]===n}))),r}},{key:"deleteArrayRow",value:function(e,t,n){var r=e;return e&&(r=e.filter((function(e){return e[t]!==n}))),r}},{key:"wildCardSearch",value:function(e,t){return e=e.filter((function(e){return function(e){for(var n in e)if(null!=e[n]&&-1!==e[n].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0}(e)}))}},{key:"getBreakPoint",value:function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n))e[n]&&t.push(n)}return t}}]),e}();t.Z=c},402:function(e,t,n){n.r(t);var r=n(1413),a=n(4165),c=n(5861),i=n(9439),o=n(2791),u=n(814),s=n(6988),l=n(7888),p=n(7309),f=n(7008),d=n(1180),v=n(2622),g=n(1549),h=n(872),m=n(8470),Z=n(7689),x=n(4276),w=n(2703),b=n(184),y=u.Z.confirm;t.default=function(){var e=(0,Z.s0)(),t=(0,o.useState)(),n=(0,i.Z)(t,2),u=n[0],k=n[1],E=(0,o.useState)([]),j=(0,i.Z)(E,2),I=j[0],S=j[1],D=(0,o.useState)([]),C=(0,i.Z)(D,2),N=C[0],T=C[1];(0,o.useEffect)((function(){var e=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.getDocuments("diciplineData");case 3:t=e.sent,k(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error fetching documents: ",e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=function(t){e("/app/apps/option/dicipline/dicipline-edit/".concat(t.id))},K=function(){var e=(0,c.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:y({title:"Are you sure you want to delete this data?",content:"This action cannot be undone.",okText:"Yes, delete it",okType:"danger",cancelText:"No, cancel",onOk:function(){var e=(0,c.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.deleteDocument("diciplineData",t.id);case 3:s.ZP.success("Dicipline Knowledge deleted successfully"),k((function(e){return e.filter((function(e){return e.id!==t.id}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),s.ZP.error("Error deleting Dicipline Knowledge: "+e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){console.log("Delete action canceled")}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=[{title:"ID",dataIndex:"id",render:function(e,t,n){return n+1}},{title:"Dicipline Knowledge Name",dataIndex:"diciplineName",sorter:function(e,t){return w.Z.antdTableSorter(e,t,"projectTypeName")}},{title:"Dicipline Knowledge Desc",dataIndex:"diciplineKet",sorter:function(e,t){return w.Z.antdTableSorter(e,t,"diciplineKet")}},{title:"",dataIndex:"actions",render:function(e,t){return(0,b.jsx)("div",{className:"text-right",children:(0,b.jsx)(h.Z,{menu:(n=t,[{key:"edit",label:(0,b.jsxs)(m.Z,{alignItems:"center",onClick:function(){return J(n)},children:[(0,b.jsx)(d.Z,{}),(0,b.jsx)("span",{className:"ml-2",children:"Edit"})]})},{key:"delete",label:(0,b.jsxs)(m.Z,{alignItems:"center",onClick:function(){return K(n)},children:[(0,b.jsx)(v.Z,{}),(0,b.jsx)("span",{className:"ml-2",children:I.length>0?"Delete (".concat(I.length,")"):"Delete"})]})}])})});var n}}],U={onChange:function(e,t){S(t),T(e)}};return(0,b.jsxs)(l.Z,{children:[(0,b.jsxs)(m.Z,{alignItems:"center",justifyContent:"space-between",mobileFlex:!1,children:[(0,b.jsx)(m.Z,{className:"mb-1",mobileFlex:!1}),(0,b.jsx)("div",{children:(0,b.jsx)(p.ZP,{onClick:function(){e("/app/apps/option/dicipline/dicipline-add")},type:"primary",icon:(0,b.jsx)(g.Z,{}),block:!0,children:"Add Dicipline"})})]}),(0,b.jsx)("div",{className:"table-responsive",children:(0,b.jsx)(f.Z,{columns:P,dataSource:u,rowKey:"id",rowSelection:(0,r.Z)({selectedRowKeys:N,type:"checkbox",preserveSelectedRowKeys:!1},U)})})]})}},1180:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(1413),a=n(2791),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},i=n(8711),o=function(e,t){return a.createElement(i.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:c}))};o.displayName="EditOutlined";var u=a.forwardRef(o)}}]);
//# sourceMappingURL=402.629bffc1.chunk.js.map