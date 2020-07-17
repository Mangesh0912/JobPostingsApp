(this.webpackJsonpsmartrecruiters_posting_list_app=this.webpackJsonpsmartrecruiters_posting_list_app||[]).push([[0],{23:function(e,t,n){},36:function(e,t,n){e.exports=n(49)},41:function(e,t,n){},42:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(32),c=n.n(o),i=(n(41),n(42),n(9)),s=n(10),l=n(12),u=n(11),m=(n(23),n(29),n(13)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e,a){return Object(i.a)(this,n),t.call(this,e)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.jobPostings,n=e.index,a=t.name,o=t.location.city,c=t.location.countryName;return r.a.createElement("li",{key:n,className:"jobPosting","data-test":"posting"},r.a.createElement("b",{"data-test":"posting-name",className:"cursor","node-info":"designation","node-index":n},a),r.a.createElement("p",{"data-test":"posting-location",className:"top","node-info":"designation","node-index":n},o,",",c))}}]),n}(r.a.Component),d=n(2);var b=function(){var e=new Map;return e.set("Engineering","18571"),e.set("Product","18588"),e.set("Client Success","18605"),e}(),g=m;function h(e){if(!e)return"";var t=g.filter((function(t){return t.countryShortCode.toLowerCase()===e.toLowerCase()}));return t?t[0].countryName:""}var f=n(16),v=n.n(f),y=n(21);function E(e){return j.apply(this,arguments)}function j(){return(j=Object(y.a)(v.a.mark((function e(t){var n,a,r,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,o=r.content,c=[],o.forEach((function(e){var t=e.location.country,n=h(t),a=e.location.city,r=e.department.label,o=e.id;c.push({name:e.name,location:{country:t,countryName:n,city:a},department:{label:r},id:o})})),e.abrupt("return",c);case 14:e.prev=14,e.t0=e.catch(1),console.log("Error occurred during fetching:",e.t0);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}var N=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleClick=function(e){console.log(e.target);var t=e.target,n=t.getAttribute("node-info");if(console.log("Node info is:",n),n&&"designation"===n){var a=t.getAttribute("node-index"),o=r.state.jobPostings[a].id;r.setState({navigate:!0,redirectUrl:"/jobdetails/"+o})}},r.state={error:"",isLoaded:!1,jobPostings:[],navigate:!1,redirectUrl:"",countryRegionData:m},r}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e){e!==this.props&&this.updateJobPostings()}},{key:"componentDidMount",value:function(){this.fetchJobPostingsForUI();m.filter((function(e){return"Germany"===e.countryName}))}},{key:"updateJobPostings",value:function(){var e=this;try{var t="https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings?country={country}&department={dept}",n=this.props,a=n.countryName,r=n.departmentName,o=function(e){if(!e)return"";var t=g.filter((function(t){return t.countryName.toLowerCase()===e.toLowerCase()}));return t?t[0].countryShortCode.toLowerCase():""}(a),c=b.get(r)||"";t=(t=t.replace("{country}",o)).replace("{dept}",c),console.log("Url is:",t),E(t).then((function(t){return e.setState({jobPostings:t})})).catch((function(e){return console.log("error occurred is:",e)}))}catch(i){console.log("Error is:",i)}}},{key:"fetchJobPostingsForUI",value:function(){var e=this;E("https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings").then((function(t){return e.setState({jobPostings:t})})).catch((function(e){return console.log("error occurred is:",e)}))}},{key:"render",value:function(){var e=this.state,t=e.jobPostings,n=e.navigate,a=e.redirectUrl;return n?r.a.createElement(d.a,{to:a,push:!0}):r.a.createElement("div",{onClick:this.handleClick},t.map((function(e,t){return r.a.createElement(p,{jobPostings:e,index:t,value:"jobPostingElem"})})))}}]),n}(r.a.Component),C=(n(48),n(18)),P=n(26),k=n(35),O=n(63),w=n(62),x=Object(w.a)((function(e){return{label:{display:"block"},input:{width:200},listbox:{width:200,margin:0,padding:0,zIndex:1,position:"absolute",listStyle:"none",backgroundColor:e.palette.background.paper,overflow:"auto",maxHeight:200,border:"1px solid rgba(0,0,0,.25)",'& li[data-focus="true"]':{backgroundColor:"#4a8df6",color:"white",cursor:"pointer"},"& li:active":{backgroundColor:"#2977f5",color:"white"}}}})),D=function(e){var t=x(),n=e.componentType,a=e.placeHolder,o=r.a.useState({componentName:"",componentValue:""}),c=Object(k.a)(o,2),i=c[0],s=c[1];r.a.useEffect((function(){e.handleChange&&(console.log("Text box data is:",i),e.handleChange(i))}),[i.componentName,i.componentValue]);var l=Object(O.a)({id:"use-autocomplete-demo",options:"Country"===n?S:J,getOptionLabel:function(e){return e.title}}),u=l.getRootProps,m=(l.getInputLabelProps,l.getInputProps),p=l.getListboxProps,d=l.getOptionProps,b=l.groupedOptions;return r.a.createElement("div",null,r.a.createElement("div",u(),r.a.createElement("input",Object.assign({className:t.input},m(),{name:"componentValue",onBlur:function(e){var t;s(Object(P.a)(Object(P.a)({},i),{},(t={},Object(C.a)(t,e.target.name,e.target.value),Object(C.a)(t,"componentName",n),t)))},placeholder:a}))),b.length>0?r.a.createElement("ul",Object.assign({className:t.listbox},p()),b.map((function(e,t){return r.a.createElement("li",d({option:e,index:t}),e.title)}))):null)},S=function(){var e=[];return console.log("Country region data:",m),m.forEach((function(t){e.push({title:t.countryName})})),e}(),J=[{title:"Product"},{title:"Client Success"},{title:"Engineering"}];var L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleChange=function(e){console.log("Data from Autocomplete component is:",e);var t=e.componentName,n=e.componentValue;"Country"===t?r.setState({countryNameParams:n}):"Department"===t&&r.setState({departmentNameParams:n})},r.applyFilter=function(){var e=r.state,t=e.countryNameParams,n=e.departmentNameParams;r.setState({countryName:t,departmentName:n})},r.state={countryName:"",departmentName:"",countryNameParams:"",departmentNameParams:""},r}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.countryName,n=e.departmentName;return r.a.createElement("div",{"data-test":"app",className:"dashboard"},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("b",null,"SmartRecruiters Postings List App"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"box"},r.a.createElement(D,{handleChange:this.handleChange,componentType:"Country",placeHolder:"Country"}),"\xa0\xa0\xa0\xa0",r.a.createElement(D,{handleChange:this.handleChange,componentType:"Department",placeHolder:"Department"}),"\xa0\xa0\xa0\xa0",r.a.createElement("button",{onClick:this.applyFilter},"Filter List")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(N,{countryName:t,departmentName:n})))}}]),n}(r.a.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(20),U=n(27),T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(i.a)(this,n),(r=t.call(this,e)).navigateToJobPostingsPage=function(){r.setState({navigate:!0})},r.state={jobDescription:"",qualifications:"",navigate:!1,name:"",city:"",country:""},r}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchJobDetails()}},{key:"fetchJobDetails",value:function(){var e=Object(y.a)(v.a.mark((function e(){var t,n,a,r,o,c,i,s,l,u,m;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.smartrecruiters.com/v1/companies/smartrecruiters/postings/{postingID}",n=window.location.pathname,a=n.split("/")[2],t=t.replace("{postingID}",a),e.prev=4,e.next=7,fetch(t);case 7:return r=e.sent,e.next=10,r.json();case 10:o=e.sent,c=o.jobAd.sections.jobDescription.text,i=o.jobAd.sections.qualifications.text,s=o.name,l=o.location.city,u=o.location.country,m=h(u),this.setState({jobDescription:c,qualifications:i,name:s,city:l,country:m}),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(4),console.log("Error occurred:",e.t0);case 23:case"end":return e.stop()}}),e,this,[[4,20]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.jobDescription,n=e.qualifications,a=e.navigate,o=e.name,c=e.city,i=e.country;return a?r.a.createElement(d.a,{to:"/",push:!0}):r.a.createElement("div",{className:"dashboard"},r.a.createElement("br",null),r.a.createElement("div",{className:"container"},r.a.createElement("p",{onClick:this.navigateToJobPostingsPage,className:"cursor","data-test":"back"},r.a.createElement("i",{className:"fa fa-long-arrow-left","aria-hidden":"true"})," back to the list"),r.a.createElement("br",null),r.a.createElement("b",{"data-test":"posting-name"},o),r.a.createElement("p",{"data-test":"posting-location",className:"top"},c,", ",i),r.a.createElement("br",null),r.a.createElement("b",null,"Job Description"),r.a.createElement("div",{"data-test":"job-description"},r.a.createElement(U.a,{content:t})),r.a.createElement("div",{"data-test":"job-qualifications"}," ",r.a.createElement(U.a,{content:n}))))}}]),n}(r.a.Component);c.a.render(r.a.createElement(A.a,null,r.a.createElement("div",null,r.a.createElement(d.d,null,r.a.createElement(d.b,{path:"/jobdetails/:id",component:T}),r.a.createElement(d.b,{path:"/",component:I})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.73d0b389.chunk.js.map