(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(2),c=n.n(l),r=n(3),i=n(4),m=n(6),u=n(5),s=n(7),p=(n(14),function(e){for(var t=e.page,n=e.total,a=e.perPage,l=e.onPageChange,c=[],r=1;r<=Math.ceil(n/a);r++)c.push(r);var i=function(e){var n="page-item";return e===t&&(n+=" active"),n};return o.a.createElement("nav",{"aria-label":"Page navigation example"},o.a.createElement("ul",{className:"pagination justify-content-start"},o.a.createElement("li",{className:function(e){var t="page-item";return e<=1&&(t+=" disabled"),t}(t)},o.a.createElement("button",{type:"button",onClick:function(){return l(t-1)},className:"page-link",href:"#",tabIndex:"-1","aria-disabled":"true"},"Previous")),c.map(function(e){return o.a.createElement("li",{key:e,className:i(e)},o.a.createElement("button",{type:"button",onClick:function(){return l(e)},className:"page-link",href:"#"},e))}),o.a.createElement("li",{className:function(e){var t="page-item";return e===c.length&&(t+=" disabled"),t}(t)},o.a.createElement("button",{type:"button",onClick:function(){return l(t+1)},className:"page-link",href:"#"},"Next"))))});p.defaultProps={onPageChange:function(){}};var g=p,b=function(e){function t(){var e,n;Object(r.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={tabs:[{title:"Tab 1",content:"Some text 1"},{title:"Tab 2",content:"Some text 2"},{title:"Tab 3",content:"Some text 3"},{title:"Tab 4",content:"Some text 4"},{title:"Tab 5",content:"Some text 5"},{title:"Tab 6",content:"Some text 6"},{title:"Tab 7",content:"Some text 7"},{title:"Tab 8",content:"Some text 8"},{title:"Tab 9",content:"Some text 9"},{title:"Tab 10",content:"Some text 10"},{title:"Tab 11",content:"Some text 11"},{title:"Tab 12",content:"Some text 12"},{title:"Tab 13",content:"Some text 13"},{title:"Tab 14",content:"Some text 14"},{title:"Tab 15",content:"Some text 15"},{title:"Tab 16",content:"Some text 16"},{title:"Tab 17",content:"Some text 17"},{title:"Tab 18",content:"Some text 18"},{title:"Tab 19",content:"Some text 19"},{title:"Tab 20",content:"Some text 20"}],page:1,perPage:5},n.onPageChange=function(e){n.setState({page:e})},n.onPerPageChange=function(e){n.setState({page:1,perPage:e.target.value})},n}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.tabs,n=e.page,a=e.perPage,l=n*a,c=l-a,r=t.slice(c,l);return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Page \u2116 ",n),o.a.createElement("span",null,"Items per page"),o.a.createElement("select",{onChange:this.onPerPageChange},o.a.createElement("option",{value:"5"},"5"),o.a.createElement("option",{value:"10"},"10"),o.a.createElement("option",{value:"15"},"15")),o.a.createElement("table",null,r.map(function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,e.title),o.a.createElement("td",null,e.content))})),o.a.createElement(g,{page:n,total:t.length,perPage:a,onPageChange:this.onPageChange}))}}]),t}(o.a.Component);c.a.render(o.a.createElement(b,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a256d408.chunk.js.map