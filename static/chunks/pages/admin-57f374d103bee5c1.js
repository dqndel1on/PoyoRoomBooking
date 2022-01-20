(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{2347:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return n(2243)}])},2407:function(e,t,n){"use strict";var r=n(5893),a=n(1664),s=n(1163),l=(n(7294),n(5434)),c=n(9649);t.Z=function(e){var t=e.branch,n=(0,s.useRouter)(),u=(0,c.Z)().deleteBranch;return(0,r.jsxs)("div",{className:"w-96 h-auto text-pink-600 mt-5 border hover:shadow-2xl transition-all duration-300 ease-in",children:[(0,r.jsx)(a.default,{href:"/branch/".concat(Number(t[2].hex)),children:(0,r.jsx)("img",{src:"../branch.jpg"})}),(0,r.jsxs)("div",{className:"p-2",children:[(0,r.jsx)(a.default,{href:"/branch/".concat(t[0]),children:(0,r.jsxs)("h1",{className:"text-2xl cursor-pointer font-black",children:["0",Number(t[2].hex),", ",t[0]]})}),(0,r.jsxs)("div",{className:"flex justify-between flex-wrap mt-2 text-lg font-bold",children:[(0,r.jsxs)("h2",{className:"flex items-center",children:[(0,r.jsx)(l.vcr,{className:"mr-2 w-6 h-6"})," ",t[0]]}),(0,r.jsxs)("h2",{className:"flex items-center",children:[(0,r.jsx)(l.KA2,{className:"mr-2 w-6 h-6"}),Number(t[1].hex)]})]}),"/admin"===n.pathname&&(0,r.jsx)("button",{onClick:function(){return u(Number(t[2].hex))},className:"mt-4 bg-pink-600 text-white px-3 py-2 rounded-md",children:"Remove Branch"})]})]})}},2243:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(5893),a=n(9008),s=n(7294),l=n(9649);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,s=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var u=function(){var e=c(s.useState(0),2),t=e[0],n=e[1],a=c(s.useState(""),2),u=a[0],i=a[1],o=c(s.useState(0),2),d=o[0],h=o[1],m=(0,l.Z)().addBranch;return(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),m({_branchId:t,_branchName:u,_totalRooms:d})},children:[(0,r.jsx)("h1",{className:"text-3xl font-black",children:"Add Branch"}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Branch Id:"}),(0,r.jsx)("input",{value:t,onChange:function(e){return n(Number(e.target.value))},className:"border text-black",type:"number"})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Branch Name:"}),(0,r.jsx)("input",{value:u,onChange:function(e){return i(e.target.value)},className:"border text-black",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Total Rooms:"}),(0,r.jsx)("input",{value:d,onChange:function(e){return h(Number(e.target.value))},className:"border text-black",type:"number"})]}),(0,r.jsx)("input",{className:"mt-5 bg-pink-600 rounded-md px-3 py-2 text-white",type:"submit",value:"Add Branch"})]})})},i=n(2407),o=function(){var e=(0,l.Z)().branches;return console.log(e),(0,r.jsxs)("div",{className:"mt-10",children:[(0,r.jsx)("h1",{className:"text-3xl font-black",children:"List of Branches"}),(0,r.jsx)("div",{className:"flex justify-between items-center flex-wrap my-10",children:e.map((function(e){return(0,r.jsx)(i.Z,{branch:e},e[0])}))})]})};function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,s=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=function(){var e=d(s.useState(0),2),t=e[0],n=e[1],a=d(s.useState(0),2),c=a[0],u=a[1],i=d(s.useState(""),2),o=i[0],h=i[1],m=(0,l.Z)().checkOut;return(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("form",{onSubmit:function(){m({_branchName:o,_branchId:t,_roomNumber:c})},children:[(0,r.jsx)("h1",{className:"text-3xl font-black",children:"Check Out"}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Branch Id:"}),(0,r.jsx)("input",{required:!0,value:t,onChange:function(e){return n(Number(e.target.value))},className:"border text-black",type:"number"})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Branch Name:"}),(0,r.jsx)("input",{required:!0,value:o,onChange:function(e){return h(e.target.value)},className:"border text-black",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Room Number:"}),(0,r.jsx)("input",{required:!0,value:c,onChange:function(e){return u(Number(e.target.value))},className:"border text-black",type:"number"})]}),(0,r.jsx)("input",{required:!0,className:"mt-5 bg-pink-600 rounded-md px-3 py-2 text-white",type:"submit",value:"Check Out"})]})})};function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var l,c=e[Symbol.iterator]();!(r=(l=c.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(u){a=!0,s=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw s}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var x=function(){var e=m(s.useState(0),2),t=e[0],n=e[1],a=m(s.useState(""),2),c=a[0],u=a[1],i=m(s.useState(0),2),o=i[0],d=i[1],h=(0,l.Z)().updateBranch;return(0,r.jsx)("div",{className:"mt-10",children:(0,r.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h({_branchId:t,_branchName:c,_totalRooms:o})},children:[(0,r.jsx)("h1",{className:"text-3xl font-black",children:"Update Branch"}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Branch Id:"}),(0,r.jsx)("input",{value:t,onChange:function(e){return n(Number(e.target.value))},className:"border text-black",type:"number"})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Branch Name:"}),(0,r.jsx)("input",{value:c,onChange:function(e){return u(e.target.value)},className:"border text-black",type:"text"})]}),(0,r.jsxs)("div",{className:"mt-5",children:[(0,r.jsx)("label",{children:"Total Rooms:"}),(0,r.jsx)("input",{value:o,onChange:function(e){return d(Number(e.target.value))},className:"border text-black",type:"number"})]}),(0,r.jsx)("input",{className:"mt-5 bg-pink-600 rounded-md px-3 py-2 text-white",type:"submit",value:"Update Branch"})]})})},b=function(){return(0,r.jsxs)("div",{className:"container mx-auto px-20",children:[(0,r.jsx)(a.default,{children:(0,r.jsx)("title",{children:"Add/Delete/Update Branch | Poyo"})}),(0,r.jsx)(u,{}),(0,r.jsx)(x,{}),(0,r.jsx)(h,{}),(0,r.jsx)(o,{})]})}},9008:function(e,t,n){e.exports=n(5443)},1163:function(e,t,n){e.exports=n(387)}},function(e){e.O(0,[228,774,888,179],(function(){return t=2347,e(e.s=t);var t}));var t=e.O();_N_E=t}]);