(this["webpackJsonpcorn-calculator"]=this["webpackJsonpcorn-calculator"]||[]).push([[0],[,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n.n(a),r=n(4),o=n.n(r),s=(n(10),n(2)),u=(n(11),function(t){var e=t.label,n=t.initialQuantity,i=t.onQuantityChange,r=Object(a.useState)(n&&n>=0?n:0),o=Object(s.a)(r,2),u=o[0],l=o[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("label",{forhtml:"quantity",children:[e,":"]}),Object(c.jsx)("input",{type:"number",name:"quantity",value:u,onChange:function(t){var n=Number.parseInt(t.target.value,10)||0;n<0&&(n=0),console.debug("".concat(e," Quantity "),n),l(n),i(n)},min:0})]})}),l=(n(12),function(t){var e=t.initialCornQuantity,n=t.initialGeeseQuantity,i=Object(a.useState)(e||0),r=Object(s.a)(i,2),o=r[0],l=r[1],j=Object(a.useState)(n||0),b=Object(s.a)(j,2),d=b[0],h=b[1],O=Object(a.useState)("no cargo to take"),f=Object(s.a)(O,2),p=f[0],g=f[1],x=Object(a.useState)(1),m=Object(s.a)(x,2),v=m[0],y=m[1];Object(a.useEffect)((function(){Q()}),[o,d,n,e]),Object(a.useEffect)((function(){k()}),[o,d,n,e]);var k=function(){return y(1===o&&1===d?o+d:o>=1&&d>=1?0:o<=0&&d<=0?1:Math.max(o,0)+Math.max(d,0))},Q=function(){return 0===o&&0===d?g("no cargo to take"):o>1&&d>0||o>0&&d>1?g("Do not make trip, corn is at risk"):d===o&&d>=1?g("take the corn first"):d>0?g("take in this order : ".concat(1===d?"goose":"geese")):o>0?g("take in this order :  ".concat(1===o?"corn":"corns")):void 0};return Object(c.jsxs)("form",{children:[Object(c.jsx)("legend",{children:"Plan your trip"}),Object(c.jsxs)("fieldset",{children:[Object(c.jsx)("div",{className:"input-group",children:Object(c.jsx)(u,{label:"Corn Quantity",initialQuantity:o,onQuantityChange:function(t){l(t)}})}),Object(c.jsx)("div",{className:"input-group",children:Object(c.jsx)(u,{label:"Geese Quantity",initialQuantity:d,onQuantityChange:function(t){h(t)}})})]}),Object(c.jsxs)("label",{children:["\xa3 ",parseFloat(.25*v).toFixed(2)]}),Object(c.jsx)("p",{className:"user-info",children:p}),Object(c.jsxs)("p",{className:"user-info",children:["Trip Count: ",v]})]})});n(13);var j=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("header",{className:"App-header",style:{backgroundImage:"url(".concat("/corn-calculator/farm.jpg",")"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},children:Object(c.jsx)("h1",{children:"River trip adviser"})}),Object(c.jsx)("div",{className:"App-content",children:Object(c.jsx)(l,{})})]})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(j,{})}),document.getElementById("root")),b()}],[[14,1,2]]]);
//# sourceMappingURL=main.d7d74ce2.chunk.js.map