"use strict";(self.webpackChunkemilus=self.webpackChunkemilus||[]).push([[124],{872:function(e,t,r){r(2791);var n=r(2385),a=r(3388),u=r(5033),o=r(184),s=function(e){return(0,o.jsx)(n.Z,{menu:{items:e.menu},placement:e.placement,trigger:[e.trigger],children:(0,o.jsx)("div",{className:"ellipsis-dropdown",children:(0,o.jsx)(u.Z,{})})})};s.defaultProps={trigger:"click",placement:"bottomRight",menu:(0,o.jsx)(a.Z,{})},t.Z=s},8470:function(e,t,r){var n=r(1413),a=r(4236).Z.div((function(e){var t=e.justifyContent,r=e.alignItems,a=e.flexDirection,u=e.gap,o=e.padding,s=e.margin,c={display:"flex",justifyContent:t,alignItems:r,gap:"number"===typeof u?"".concat(u,"px"):u};return a&&(c.flexDirection=a),o&&(c.padding=o),s&&(c.margin=s),(0,n.Z)({},c)}));t.Z=a},4276:function(e,t,r){var n=r(4942),a=r(1413),u=r(4165),o=r(5861),s=r(5020),c=r(6724),i={};i.createDocument=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.ET)((0,c.hJ)(s.db,t),r);case 3:return n=e.sent,e.abrupt("return",n.id);case 7:throw e.prev=7,e.t0=e.catch(0),new Error("Error adding document: "+e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),i.getDocuments=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t){var r,n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.PL)((0,c.hJ)(s.db,t));case 3:return r=e.sent,n=r.docs.map((function(e){return(0,a.Z)({id:e.id},e.data())})),e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error("Error getting documents: "+e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),i.getDocument=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r){var n,a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,c.JU)(s.db,t,r),e.next=4,(0,c.QT)(n);case 4:if(!(a=e.sent).exists()){e.next=9;break}return e.abrupt("return",a.data());case 9:throw new Error("Document not found");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error fetching document: "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r){return e.apply(this,arguments)}}(),i.updateDocument=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r,n){var a;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(0,c.JU)(s.db,t,r),e.next=4,(0,c.r7)(a,n);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error updating document: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n){return e.apply(this,arguments)}}(),i.deleteDocument=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r){var n;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=(0,c.JU)(s.db,t,r),e.next=4,(0,c.oe)(n);case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error deleting document: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}(),i.addToArray=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r,a,o){var i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=(0,c.JU)(s.db,t,r),e.next=4,(0,c.r7)(i,(0,n.Z)({},a,(0,c.vr)(o)));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error adding to array: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n,a){return e.apply(this,arguments)}}(),i.removeFromArray=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r,a,o){var i;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=(0,c.JU)(s.db,t,r),e.next=4,(0,c.r7)(i,(0,n.Z)({},a,(0,c.Ab)(o)));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error removing from array: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n,a){return e.apply(this,arguments)}}(),i.updateNestedMap=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r,a,o,i){var f;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,f=(0,c.JU)(s.db,t,r),e.next=4,(0,c.r7)(f,(0,n.Z)({},"".concat(a,".").concat(o),i));case 4:e.next=9;break;case 6:throw e.prev=6,e.t0=e.catch(0),new Error("Error updating nested map: "+e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r,n,a,u){return e.apply(this,arguments)}}(),i.getDocumentByField=function(){var e=(0,o.Z)((0,u.Z)().mark((function e(t,r,n){var a,o;return(0,u.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=(0,c.IO)((0,c.hJ)(s.db,t),(0,c.ar)(r,"==",n)),e.next=4,(0,c.PL)(a);case 4:if((o=e.sent).empty){e.next=9;break}return e.abrupt("return",o.docs[0].data());case 9:throw new Error("Document not found");case 10:e.next=15;break;case 12:throw e.prev=12,e.t0=e.catch(0),new Error("Error fetching document: "+e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,r,n){return e.apply(this,arguments)}}(),t.Z=i},2703:function(e,t,r){var n=r(5671),a=r(3144),u=function(){function e(){(0,n.Z)(this,e)}return(0,a.Z)(e,null,[{key:"getNameInitial",value:function(e){var t=e.match(/\b\w/g)||[];return((t.shift()||"")+(t.pop()||"")).toUpperCase()}},{key:"getRouteInfo",value:function(e,t){if(e.path===t)return e;var r;for(var n in e)if(e.hasOwnProperty(n)&&"object"===typeof e[n]&&(r=this.getRouteInfo(e[n],t)))return r;return r}},{key:"getColorContrast",value:function(e){if(!e)return"dark";var t=parseInt(a(e).substring(0,2),16),r=function(e){return parseInt(a(e).substring(2,4),16)}(e),n=function(e){return parseInt(a(e).substring(4,6),16)}(e);function a(e){return"#"===e.charAt(0)?e.substring(1,7):e}return(299*t+587*r+114*n)/1e3>130?"dark":"light"}},{key:"shadeColor",value:function(e,t){var r=parseInt(e.substring(1,3),16),n=parseInt(e.substring(3,5),16),a=parseInt(e.substring(5,7),16);r=parseInt(r*(100+t)/100),n=(n=parseInt(n*(100+t)/100))<255?n:255,a=(a=parseInt(a*(100+t)/100))<255?a:255;var u=1===(r=r<255?r:255).toString(16).length?"0".concat(r.toString(16)):r.toString(16),o=1===n.toString(16).length?"0".concat(n.toString(16)):n.toString(16),s=1===a.toString(16).length?"0".concat(a.toString(16)):a.toString(16);return"#".concat(u).concat(o).concat(s)}},{key:"rgbaToHex",value:function(e){var t=function(e){return e.replace(/^\s+|\s+$/gm,"")},r=e.substring(e.indexOf("(")).split(","),n=parseInt(t(r[0].substring(1)),10),a=parseInt(t(r[1]),10),u=parseInt(t(r[2]),10),o=parseFloat(t(r[3].substring(0,r[3].length-1))).toFixed(2),s=[n.toString(16),a.toString(16),u.toString(16),Math.round(255*o).toString(16).substring(0,2)];return s.forEach((function(e,t){1===e.length&&(s[t]="0"+e)})),"#".concat(s.join(""))}},{key:"getSignNum",value:function(e,t,r){return e>0?t:e<0?r:null}},{key:"antdTableSorter",value:function(e,t,r){return"number"===typeof e[r]&&"number"===typeof t[r]?e[r]-t[r]:"string"===typeof e[r]&&"string"===typeof t[r]?(e=e[r].toLowerCase())>(t=t[r].toLowerCase())?-1:t>e?1:0:void 0}},{key:"filterArray",value:function(e,t,r){var n=e;return e&&(n=e.filter((function(e){return e[t]===r}))),n}},{key:"deleteArrayRow",value:function(e,t,r){var n=e;return e&&(n=e.filter((function(e){return e[t]!==r}))),n}},{key:"wildCardSearch",value:function(e,t){return e=e.filter((function(e){return function(e){for(var r in e)if(null!=e[r]&&-1!==e[r].toString().toUpperCase().indexOf(t.toString().toUpperCase()))return!0}(e)}))}},{key:"getBreakPoint",value:function(e){var t=[];for(var r in e){if(e.hasOwnProperty(r))e[r]&&t.push(r)}return t}}]),e}();t.Z=u},124:function(e,t,r){r.r(t);var n=r(1413),a=r(4165),u=r(5861),o=r(9439),s=r(2791),c=r(814),i=r(6988),f=r(7888),l=r(7309),p=r(7008),d=r(4215),m=r(2622),v=r(1549),g=r(872),h=r(8470),b=r(7689),x=r(4276),y=r(2703),Z=r(184),w=c.Z.confirm;t.default=function(){var e=(0,b.s0)(),t=(0,s.useState)(),r=(0,o.Z)(t,2),c=r[0],S=r[1],k=(0,s.useState)([]),D=(0,o.Z)(k,2),I=D[0],j=D[1],E=(0,s.useState)([]),N=(0,o.Z)(E,2),C=N[0],T=N[1];(0,s.useEffect)((function(){var e=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){var t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.getDocuments("sumSysSub");case 3:t=e.sent,S(t),console.log("asd",t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Error fetching documents: ",e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var J=function(t){e("/app/apps/summ-data/summ-syssub/summ-syssub-edit/".concat(t.id))},P=function(){var e=(0,u.Z)((0,a.Z)().mark((function e(t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w({title:"Are you sure you want to delete this data?",content:"This action cannot be undone.",okText:"Yes, delete it",okType:"danger",cancelText:"No, cancel",onOk:function(){var e=(0,u.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.Z.deleteDocument("sumSysSub",t.id);case 3:i.ZP.success("Data deleted successfully"),S((function(e){return e.filter((function(e){return e.id!==t.id}))})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i.ZP.error("Error deleting Data: "+e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onCancel:function(){console.log("Delete action canceled")}});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=[{title:"ID",dataIndex:"id",render:function(e,t,r){return r+1}},{title:"System Name",dataIndex:"commSysDeffName",sorter:function(e,t){return y.Z.antdTableSorter(e,t,"commSysDeffName")}},{title:"System Number",dataIndex:"commSysDeffNo",sorter:function(e,t){return y.Z.antdTableSorter(e,t,"commSysDeffNo")}},{title:"Sub System Name",dataIndex:"commSysDeffSubName",sorter:function(e,t){return y.Z.antdTableSorter(e,t,"commSysDeffSubName")}},{title:"Sub System Number",dataIndex:"commSysDeffSubNo",sorter:function(e,t){return y.Z.antdTableSorter(e,t,"commSysDeffSubNo")}},{title:"",dataIndex:"actions",render:function(e,t){return(0,Z.jsx)("div",{className:"text-right",children:(0,Z.jsx)(g.Z,{menu:(r=t,[{key:"edit",label:(0,Z.jsxs)(h.Z,{alignItems:"center",onClick:function(){return J(r)},children:[(0,Z.jsx)(d.Z,{}),(0,Z.jsx)("span",{className:"ml-2",children:"Edit & View Detail"})]})},{key:"delete",label:(0,Z.jsxs)(h.Z,{alignItems:"center",onClick:function(){return P(r)},children:[(0,Z.jsx)(m.Z,{}),(0,Z.jsx)("span",{className:"ml-2",children:I.length>0?"Delete (".concat(I.length,")"):"Delete"})]})}])})});var r}}],A={onChange:function(e,t){j(t),T(e)}};return(0,Z.jsxs)(f.Z,{children:[(0,Z.jsxs)(h.Z,{alignItems:"center",justifyContent:"space-between",mobileFlex:!1,children:[(0,Z.jsx)(h.Z,{className:"mb-1",mobileFlex:!1,children:(0,Z.jsx)("div",{className:"mr-md-3 mb-3"})}),(0,Z.jsx)("div",{children:(0,Z.jsx)(l.ZP,{onClick:function(){e("/app/apps/summ-data/summ-syssub/summ-syssub-add")},type:"primary",icon:(0,Z.jsx)(v.Z,{}),block:!0,children:"Add System/SubSystem Drawing"})})]}),(0,Z.jsx)("div",{className:"table-responsive",children:(0,Z.jsx)(p.Z,{columns:U,dataSource:c,rowKey:"id",rowSelection:(0,n.Z)({selectedRowKeys:C,type:"checkbox",preserveSelectedRowKeys:!1},A)})})]})}}}]);
//# sourceMappingURL=124.9629ebb2.chunk.js.map