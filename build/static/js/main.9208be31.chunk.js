(this["webpackJsonpmy-react-app"]=this["webpackJsonpmy-react-app"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(9),s=n(2),c=n(3),i=n(4),l=n(6),r=n(5),o=n(1),d=n.n(o),u=n(13),j=n.n(u),f=n(0),h=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={label:""},e.onLableChange=function(t){e.setState({label:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.onAdd(e.state.label),e.setState({label:""})},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{onChange:this.onLableChange,className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0,value:this.state.label})})}}]),n}(d.a.Component);h.defaultProps={onAdd:function(){console.log("\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e")}};var b=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={label:""},e}return Object(i.a)(n,[{key:"render",value:function(){var e="description ";return this.props.doneee?e+="done":this.props.doneee||(e="description"),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:"view",children:[Object(f.jsx)("input",{onClick:this.props.Ondoned,className:"toggle",type:"checkbox"}),Object(f.jsxs)("label",{children:[Object(f.jsx)("span",{className:e,children:this.props.elem}),Object(f.jsxs)("span",{className:"created",children:["created ",this.props.created]})]}),Object(f.jsx)("button",{onClick:this.props.edititng,className:"icon icon-edit"}),Object(f.jsx)("button",{onClick:this.props.onDeleted,className:"icon icon-destroy"})]}),Object(f.jsx)("input",{type:"text",className:"edit"})]})}}]),n}(d.a.Component);b.defaultProps={doneee:function(){},Ondoned:function(){},className:"",edititng:function(){},onDeleted:function(){}};var p=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={value:e.props.value,id:e.props.id},e.onChangeValue=function(t){e.setState({value:t.target.value})},e.onSubmit=function(t){t.preventDefault(),e.props.ChangeEdit(e.state.value,e.state.id)},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{onSubmit:this.onSubmit,children:Object(f.jsx)("input",{type:"text",className:"edit",value:this.state.value,onChange:this.onChangeValue})})}}]),n}(d.a.Component);p.defaultProps={value:""};var x=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"abd",value:function(){var e=this;return this.props.text.map((function(t){return Object(f.jsxs)("li",{style:{display:t.display},className:t.clas,children:[Object(f.jsx)("div",{className:"view",children:Object(f.jsx)(b,{created:t.created,doneee:t.done,Ondoned:function(){return e.props.doned(t.id)},edititng:function(){return e.props.edititng(t.id)},onDeleted:function(){return e.props.onDeleted(t.id)},elem:t.name,id:t.id,clas:t.name})}),Object(f.jsx)(p,{id:t.id,ChangeEdit:e.props.ChangeEdit,value:t.name})]},t.id)}))}},{key:"render",value:function(){return Object(f.jsx)("ul",{className:"todo-list",children:this.abd()})}}]),n}(d.a.Component);x.defaultProps={clas:"1",id:123,display:"",key:213};var O=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,i=new Array(a),l=0;l<a;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={clasesNames:[{selectedClass:!0},{selectedClass:!1},{selectedClass:!1}]},e.selected=function(t){var n=Number(t.target.className);if(e.props.filterlistener(n),"selected"!==t.target.className){var a=e.state.clasesNames.findIndex((function(e){return!0===e.selectedClass}));e.setState((function(e){var t=e.clasesNames,c=Object(s.a)(t);return c[a].selectedClass=!1,c[n].selectedClass=!0,{clasesNames:c}}))}else console.log("selected1")},e}return Object(i.a)(n,[{key:"render",value:function(){var e="0 ",t="1 ",n="2 ";return!0===this.state.clasesNames[0].selectedClass?e+="selected":!0===this.state.clasesNames[1].selectedClass?t+="selected":!0===this.state.clasesNames[2].selectedClass&&(n+="selected"),Object(f.jsxs)("ul",{className:"filters",children:[Object(f.jsx)("li",{onClick:this.selected,className:"0",children:Object(f.jsx)("button",{className:e,children:"All"})}),Object(f.jsx)("li",{onClick:this.selected,className:"1",children:Object(f.jsx)("button",{className:t,children:"Active"})}),Object(f.jsx)("li",{onClick:this.selected,className:"2",children:Object(f.jsx)("button",{className:n,children:"Completed"})})]})}}]),n}(d.a.Component);O.defaultProps={filterlistener:function(){}};var m=function(e){return Object(f.jsxs)("footer",{className:"footer",children:[Object(f.jsxs)("span",{className:"todo-count",children:[e.nocompletley-e.donecounter," items left"]}),Object(f.jsx)(O,{filterlistener:e.filterlistener}),Object(f.jsx)("button",{onClick:e.clearOnclick,className:"clear-completed",children:"Clear completed"})]})};m.defaultProps={clearOnclick:function(){}};var v=m,g=(n(22),n(25)),y=function(e){Object(l.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(c.a)(this,n);for(var i=arguments.length,l=new Array(i),r=0;r<i;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).filling=function(e){return Object(g.a)(e,{includeSeconds:!0})},e.maxid=3,e.nowDate=new Date,e.state={text:[{id:0,name:"Completed task",done:!1,clas:"",display:"",created:e.filling(e.nowDate)},{id:1,name:"Editing task",done:!1,clas:"",display:"",created:e.filling(e.nowDate)},{id:2,name:"Active task",done:!1,clas:"",display:"",created:e.filling(e.nowDate)}]},e.edititng=function(t){var n=Object(s.a)(e.state.text.slice());n.map((function(a){a.id===t&&(a.clas+=" editing",e.setState((function(e){e.text;return{text:n}})))}))},e.deleteItem=function(t){var n=e.state.text.findIndex((function(e){return e.id===t})),a=Object(s.a)(e.state.text.toSpliced(n,1));e.setState((function(e){e.text;return{text:a}}))},e.onDone=function(t){e.setState((function(e){var n=e.text,c=n.findIndex((function(e){return e.id===t})),i=n[c],l=Object(a.a)(Object(a.a)({},i),{},{done:!i.done});return{text:[].concat(Object(s.a)(n.slice(0,c)),[l],Object(s.a)(n.slice(c+1)))}}))},e.onAdded=function(t){var n={id:e.maxid++,name:t,done:!1,clas:"",display:"",created:e.filling(new Date)};e.setState((function(e){var t=e.text;return{text:[].concat(Object(s.a)(t),[n])}}))},e.clearOnclick=function(){for(var t=[],n=0;n<e.state.text.length;n++)!0===e.state.text[n].done&&t.push(n);if(t.length>1){var a=Object(s.a)(e.state.text);a=a.filter((function(e,n){return-1===t.indexOf(n)})),e.setState((function(e){e.text;return{text:a}}))}else if(1===t.length){var c=Object(s.a)(e.state.text.toSpliced(t[0],1));e.setState((function(e){e.text;return{text:c}}))}},e.filterlistener=function(t){if(0===t){for(var n=Object(s.a)(e.state.text.slice()),a=0;a<n.length;a++)n[a].display="";e.setState((function(e){e.text;return{text:n}}))}else if(1===t){for(var c=[],i=0;i<e.state.text.length;i++)!0===e.state.text[i].done&&c.push(i);for(var l=Object(s.a)(e.state.text.slice()),r=0;r<l.length;r++)l[r].display="";for(var o=0;o<c.length;o++){var d=c[o];l[d].display="none"}e.setState((function(e){e.text;return{text:l}}))}else if(2===t){for(var u=[],j=0;j<e.state.text.length;j++)!1===e.state.text[j].done&&u.push(j);for(var f=Object(s.a)(e.state.text.slice()),h=0;h<f.length;h++)f[h].display="";for(var b=0;b<u.length;b++){var p=u[b];f[p].display="none"}e.setState((function(e){e.text;return{text:f}}))}},e.editingTask=function(t,n){e.setState((function(e){var c=e.text,i=c.findIndex((function(e){return e.id===n})),l=c[i],r=Object(a.a)(Object(a.a)({},l),{},{clas:"",name:t});return{text:[].concat(Object(s.a)(c.slice(0,i)),[r],Object(s.a)(c.slice(i+1)))}}))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.text.filter((function(e){return e.done})).length,t=this.state.text.length;return this.state.text.length>0?Object(f.jsxs)("section",{className:"todoapp",children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)(h,{onAdd:this.onAdded})]}),Object(f.jsxs)("section",{className:"main",children:[Object(f.jsx)(x,{ChangeEdit:this.editingTask,doned:this.onDone,edititng:this.edititng,onDeleted:this.deleteItem,text:this.state.text}),Object(f.jsx)(v,{filterlistener:this.filterlistener,clearOnclick:this.clearOnclick,nocompletley:t,donecounter:e})]})]}):Object(f.jsxs)("section",{className:"todoapp",children:[Object(f.jsxs)("header",{children:[Object(f.jsx)("h1",{children:"todos"}),Object(f.jsx)(h,{onAdd:this.onAdded})]}),Object(f.jsx)("section",{className:"main",children:Object(f.jsx)(v,{nocompletley:t,donecounter:e})})]})}}]),n}(d.a.Component);j.a.render(Object(f.jsx)(y,{}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.9208be31.chunk.js.map