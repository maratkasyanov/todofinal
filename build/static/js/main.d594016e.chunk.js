(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var s=n(10),a=n(2),c=n(3),i=n(4),l=n(6),r=n(5),o=n(1),d=n.n(o),u=n(14),j=n.n(u),f=n(0),b=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={label:"",min:"",sec:""},e.onLableChange=function(t){e.setState({label:t.target.value})},e.onTimeMinChange=function(t){e.setState({min:t.target.value})},e.onTimeSecChange=function(t){e.setState({sec:t.target.value})},e.onSubmitTask=function(t){console.log(""===e.state.min),""===e.state.min&&""===e.state.sec?(console.log("\u0437\u0430\u0448\u0435\u043b"),t.preventDefault(),e.props.onAdd(e.state.label,"0","0")):""===e.state.min?(console.log("\u0437\u0430\u0448\u0435\u043b"),t.preventDefault(),e.props.onAdd(e.state.label,"0",e.state.sec)):""===e.state.sec?(console.log("\u0437\u0430\u0448\u0435\u043b"),t.preventDefault(),e.props.onAdd(e.state.label,e.state.min,"0")):(t.preventDefault(),e.props.onAdd(e.state.label,e.state.min,e.state.sec)),console.log(e.state),e.setState({label:"",min:"",sec:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("div",{className:"form",children:[Object(f.jsx)("form",{onSubmit:this.onSubmitTask,children:Object(f.jsx)("input",{onChange:this.onLableChange,className:"new-todo",placeholder:"Task",autoFocus:!0,value:this.state.label})}),Object(f.jsx)("form",{onSubmit:this.onSubmitTask,children:Object(f.jsx)("input",{onChange:this.onTimeMinChange,className:"new-todo new-timer__min",placeholder:"Min",value:this.state.min,autoFocus:!0})}),Object(f.jsx)("form",{onSubmit:this.onSubmitTask,children:Object(f.jsx)("input",{onChange:this.onTimeSecChange,className:"new-todo new-timer__sec",value:this.state.sec,placeholder:"Sec",autoFocus:!0})})]})}}]),n}(d.a.Component);b.defaultProps={onAdd:function(){console.log("\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")}};var m=n(9),h=function(e){var t=Object(o.useState)(0),n=Object(m.a)(t,2),s=n[0],a=n[1],c=Object(o.useState)(0),i=Object(m.a)(c,2),l=i[0],r=i[1],d=Object(o.useState)(!1),u=Object(m.a)(d,2),j=u[0],b=u[1],h=Object(o.useState)(!0),p=Object(m.a)(h,2),O=p[0],x=p[1],v=new Date,g=function(e){var t=new Date((new Date).getTime()+6e4*e[0]+1e3*e[1])-v;a(Math.floor(t/1e3/60%60)),r(Math.floor(t/1e3%60))};return Object(o.useEffect)((function(){if(!1===j&&!0!==O){var t=setInterval((function(){return g([s,l])}),1e3);return function(){return clearInterval(t)}}if(!1===j&&!1!==O){var n=setInterval((function(){return g(e.fulldate)}),1e3);return function(){return clearInterval(n)}}console.log(s,l),g([s,l])}),[j]),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:function(){b(!0),x(!1)},className:"icon icon-play min"}),Object(f.jsx)("button",{onClick:function(){b(!1),x(!1)},className:"icon icon-play sec"}),Object(f.jsxs)("div",{className:"timer",role:"timer",children:[Object(f.jsx)("p",{id:"second",children:l}),Object(f.jsxs)("p",{id:"second",children:[s,":"]})]})]})},p=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={label:"",fullstate:e.props.fulldata,timer:0},e}return Object(i.a)(n,[{key:"render",value:function(){var e="description ";return this.props.doneee?e+="done":this.props.doneee||(e="description"),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"view",children:[Object(f.jsx)("input",{onClick:this.props.Ondoned,className:"toggle",type:"checkbox"}),Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:e,children:this.props.elem}),Object(f.jsx)("span",{className:"description-time",children:Object(f.jsx)(h,{fulldate:this.state.fullstate})}),Object(f.jsxs)("span",{className:"created",children:["created ",this.props.created]})]}),Object(f.jsx)("button",{onClick:this.props.edititng,className:"icon icon-edit"}),Object(f.jsx)("button",{onClick:this.props.onDeleted,className:"icon icon-destroy"})]}),Object(f.jsx)("input",{type:"text",className:"edit"})]})}}]),n}(d.a.Component);p.defaultProps={doneee:function(){},Ondoned:function(){},className:"",edititng:function(){},onDeleted:function(){}};var O=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),i=0;i<s;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={value:e.props.value,id:e.props.id},e.onChangeValue=function(t){e.setState({value:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.ChangeEdit(e.state.value,e.state.id)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{type:"text",className:"edit",value:this.state.value,onChange:this.onChangeValue})})}}]),n}(d.a.Component);O.defaultProps={value:""};var x=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"abd",value:function(){var e=this;return this.props.text.map((function(t){return Object(f.jsxs)("li",{style:{display:t.display},className:t.clas,children:[Object(f.jsx)("div",{className:"view",children:Object(f.jsx)(p,{created:t.created,doneee:t.done,Ondoned:function(){return e.props.doned(t.id)},edititng:function(){return e.props.edititng(t.id)},onDeleted:function(){return e.props.onDeleted(t.id)},fulldata:[t.minutes,t.seconds],elem:t.name,id:t.id,clas:t.name,time:t.minutes+":"+t.seconds,minutes:t.minutes,seconds:t.seconds})}),Object(f.jsx)(O,{id:t.id,ChangeEdit:e.props.ChangeEdit,value:t.name})]},t.id)}))}},{key:"render",value:function(){return Object(f.jsx)("ul",{className:"todo-list",children:this.abd()})}}]),n}(d.a.Component);x.defaultProps={clas:"1",id:123,display:"",key:213};var v=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),l=0;l<s;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={clasesNames:[{selectedClass:!0},{selectedClass:!1},{selectedClass:!1}]},e.selected=function(t){var n=Number(t.target.className);if(e.props.filterlistener(n),"selected"!==t.target.className){var s=e.state.clasesNames.findIndex((function(e){return!0===e.selectedClass}));e.setState((function(e){var t=e.clasesNames,c=Object(a.a)(t);return c[s].selectedClass=!1,c[n].selectedClass=!0,{clasesNames:c}}))}else console.log("selected1")},e}return Object(i.a)(n,[{key:"render",value:function(){var e="0 ",t="1 ",n="2 ";return!0===this.state.clasesNames[0].selectedClass?e+="selected":!0===this.state.clasesNames[1].selectedClass?t+="selected":!0===this.state.clasesNames[2].selectedClass&&(n+="selected"),Object(f.jsxs)("ul",{className:"filters",children:[Object(f.jsx)("li",{onClick:this.selected,className:"0",children:Object(f.jsx)("button",{className:e,children:"All"})}),Object(f.jsx)("li",{onClick:this.selected,className:"1",children:Object(f.jsx)("button",{className:t,children:"Active"})}),Object(f.jsx)("li",{onClick:this.selected,className:"2",children:Object(f.jsx)("button",{className:n,children:"Completed"})})]})}}]),n}(d.a.Component);v.defaultProps={filterlistener:function(){}};var g=function(e){return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsxs)("span",{className:"todo-count",children:[e.nocompletley-e.donecounter," items left"]}),Object(f.jsx)(v,{filterlistener:e.filterlistener}),Object(f.jsx)("button",{onClick:e.clearOnclick,className:"clear-completed",children:"Clear completed"})]})};g.defaultProps={clearOnclick:function(){}};var N=g,y=(n(23),n(26)),C=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).filling=function(e){return Object(y.a)(e,{includeSeconds:!0})},e.maxid=3,e.nowDate=new Date,e.state={text:[{id:0,name:"Comp",done:!1,clas:"",display:"",created:e.filling(e.nowDate),minutes:2,seconds:55},{id:1,name:"Edit",done:!1,clas:"",display:"",created:e.filling(e.nowDate),minutes:12,seconds:12},{id:2,name:"Acti",done:!1,clas:"",display:"",created:e.filling(e.nowDate),minutes:9,seconds:31}]},e.edititng=function(t){var n=Object(a.a)(e.state.text.slice());n.map((function(s){return s.id===t&&(s.clas+=" editing",e.setState((function(e){e.text;return{text:n}}))),{elem:s}}))},e.deleteItem=function(t){var n=e.state.text.findIndex((function(e){return e.id===t})),s=Object(a.a)(e.state.text.toSpliced(n,1));e.setState((function(e){e.text;return{text:s}}))},e.onDone=function(t){e.setState((function(e){var n=e.text,c=n.findIndex((function(e){return e.id===t})),i=n[c],l=Object(s.a)(Object(s.a)({},i),{},{done:!i.done});return{text:[].concat(Object(a.a)(n.slice(0,c)),[l],Object(a.a)(n.slice(c+1)))}}))},e.onAdded=function(t,n,s){if(e.isNumeric(n)||e.isNumeric(s))if(e.isNumeric(n))if(e.isNumeric(s)){var c={id:e.maxid++,name:t,done:!1,clas:"",display:"",created:e.filling(new Date),minutes:n,seconds:s};e.setState((function(e){var t=e.text;return{text:[].concat(Object(a.a)(t),[c])}}))}else{var i={id:e.maxid++,name:t,done:!1,clas:"",display:"",created:e.filling(new Date),minutes:n,seconds:0};e.setState((function(e){var t=e.text;return{text:[].concat(Object(a.a)(t),[i])}}))}else{var l={id:e.maxid++,name:t,done:!1,clas:"",display:"",created:e.filling(new Date),minutes:0,seconds:s};e.setState((function(e){var t=e.text;return{text:[].concat(Object(a.a)(t),[l])}}))}else{var r={id:e.maxid++,name:t,done:!1,clas:"",display:"",created:e.filling(new Date),minutes:0,seconds:0};e.setState((function(e){var t=e.text;return{text:[].concat(Object(a.a)(t),[r])}}))}},e.clearOnclick=function(){for(var t=[],n=0;n<e.state.text.length;n++)!0===e.state.text[n].done&&t.push(n);if(t.length>1){var s=Object(a.a)(e.state.text);s=s.filter((function(e,n){return-1===t.indexOf(n)})),e.setState((function(e){e.text;return{text:s}}))}else if(1===t.length){var c=Object(a.a)(e.state.text.toSpliced(t[0],1));e.setState((function(e){e.text;return{text:c}}))}},e.filterlistener=function(t){if(0===t){for(var n=Object(a.a)(e.state.text.slice()),s=0;s<n.length;s++)n[s].display="";e.setState((function(e){e.text;return{text:n}}))}else if(1===t){for(var c=[],i=0;i<e.state.text.length;i++)!0===e.state.text[i].done&&c.push(i);for(var l=Object(a.a)(e.state.text.slice()),r=0;r<l.length;r++)l[r].display="";for(var o=0;o<c.length;o++){var d=c[o];l[d].display="none"}e.setState((function(e){e.text;return{text:l}}))}else if(2===t){for(var u=[],j=0;j<e.state.text.length;j++)!1===e.state.text[j].done&&u.push(j);for(var f=Object(a.a)(e.state.text.slice()),b=0;b<f.length;b++)f[b].display="";for(var m=0;m<u.length;m++){var h=u[m];f[h].display="none"}e.setState((function(e){e.text;return{text:f}}))}},e.editingTask=function(t,n){e.setState((function(e){var c=e.text,i=c.findIndex((function(e){return e.id===n})),l=c[i],r=Object(s.a)(Object(s.a)({},l),{},{clas:"",name:t});return{text:[].concat(Object(a.a)(c.slice(0,i)),[r],Object(a.a)(c.slice(i+1)))}}))},e}return Object(i.a)(n,[{key:"isNumeric",value:function(e){return!isNaN(e)}},{key:"render",value:function(){var e=this.state.text.filter((function(e){return e.done})).length,t=this.state.text.length;return this.state.text.length>0?Object(f.jsxs)("section",{className:"todoapp",children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)(b,{onAdd:this.onAdded})]}),Object(f.jsxs)("section",{className:"main",children:[Object(f.jsx)(x,{ChangeEdit:this.editingTask,doned:this.onDone,edititng:this.edititng,onDeleted:this.deleteItem,text:this.state.text}),Object(f.jsx)(N,{filterlistener:this.filterlistener,clearOnclick:this.clearOnclick,nocompletley:t,donecounter:e})]})]}):Object(f.jsxs)("section",{className:"todoapp",children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)(b,{onAdd:this.onAdded})]}),Object(f.jsx)("section",{className:"main",children:Object(f.jsx)(N,{nocompletley:t,donecounter:e})})]})}}]),n}(d.a.Component);j.a.render(Object(f.jsx)(C,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d594016e.chunk.js.map