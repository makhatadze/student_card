(this["webpackJsonpstudent-card"]=this["webpackJsonpstudent-card"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),o=n.n(c),l=(n(12),n(1)),s=n(2),i=n(4),u=n(3),h=(n(13),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"student-item bg-light-green dib br3 pa3 ma2 grow"},r.a.createElement("img",{alt:"Student",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))}),d=(n(14),function(e){var t=e.Students;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))}),m=function(e){e.studentsSearchField;var t=e.searchChange;return r.a.createElement("input",{className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"search student",onChange:t})},f=function(e){return r.a.createElement("div",{className:"mt3 pt2",style:{overflowY:"scroll",borderTop:"5px solid black",height:"800px"}},e.children)},p=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooooops. That is not good!"):this.props.children}}]),n}(a.Component),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onStudentSearchChange=function(t){e.setState({studentsSearchField:t.target.value})},e.state={Students:[],studentsSearchField:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({Students:t})}))}},{key:"render",value:function(){var e=this.state,t=e.Students,n=e.studentsSearchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",null,r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"Caucasus University"),r.a.createElement(m,{searchChange:this.onStudentSearchChange}),r.a.createElement(f,null,r.a.createElement(p,null,r.a.createElement(d,{Students:a}))))):r.a.createElement("h1",null,"Loading")}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5d68b8aa.chunk.js.map