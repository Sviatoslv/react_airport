(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,r){e.exports=r(20)},18:function(e,t,r){},20:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),l=r(10),i=r.n(l),s=(r(18),r(2)),o=r.n(s),u=r(3),c=r(1),p=r(4),m=r(5),d=r(7),b=r(6),f=r(8),O=function(){var e=Object(u.a)(o.a.mark(function e(){var t,r;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.iev.aero/api/flights/13-06-2019",e.next=3,fetch("".concat("https://api.iev.aero/api/flights/13-06-2019"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),h=r(11),g=function(e){return n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,n.a.createElement("button",{name:"Terminal",onClick:e.sortTable,className:"header-cell__title-wrapper",type:"button"},"Terminal")),n.a.createElement("th",null,n.a.createElement("button",{name:"Local time",onClick:e.sortTable,className:"header-cell__title-wrapper",type:"button"},"Local time")),n.a.createElement("th",null,n.a.createElement("button",{name:"Destination",onClick:e.sortTable,className:"header-cell__title-wrapper",type:"button"},"Destination")),n.a.createElement("th",null,n.a.createElement("button",{name:"Status",onClick:e.sortTable,className:"header-cell__title-wrapper",type:"button"},"Status")),n.a.createElement("th",null,n.a.createElement("button",{name:"Airline",onClick:e.sortTable,className:"header-cell__title-wrapper",type:"button"},"Airline")),n.a.createElement("th",null,n.a.createElement("button",{name:"Flight",onClick:e.sortTable,className:"header-cell__title-wrapper",type:"button"},"Flight")),n.a.createElement("th",null,n.a.createElement("button",{name:"unSort",onClick:e.sortTable,className:" header-cell__title-wrapper header-cell__title-wrapper--unsort ",type:"button"}))))},v=function(e){var t=e.flight,r=e.isDepartures,a=r?t.timeDepExpectCalc:t.timeArrExpectCalc,l=r?t.timeDepShedule:t.timeArrShedule,i=function(e){var t=new Date(Date.parse(e));return"".concat(t.getHours(),":").concat(t.getMinutes())};return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("span",{className:"flights-table__terminal"},t.term)),n.a.createElement("td",null,i(a)),n.a.createElement("td",null,r?t["airportToID.name_en"]:t["airportFromID.name_en"]),n.a.createElement("td",null,r?"Departed at ":"Landed ",i(l)),n.a.createElement("td",{className:"flights-table__logo-cell"},n.a.createElement("img",{src:t.airline.en.logoSmallName,alt:"logo",style:{width:"50px"}}),n.a.createElement("p",null,t.airline.en.name)),n.a.createElement("td",null,t["planeTypeID.code"]),n.a.createElement("td",{className:"flights-table__link-cell"},n.a.createElement("a",{href:"https://iev.aero/en/departures?date=20-07-2019"},"Flight details")))},E=function(e){var t=e.filterInput,r=e.handleFilterTyping;return n.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},n.a.createElement("input",{type:"text",name:"filterInput",value:t,onChange:r,className:"filter",placeholder:"Filtering by airline, destination or flight",autoComplete:"off"}))},y=function(e){var t=e.toggleTab,r=e.isDepartures;return n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{type:"button",name:"departures",onClick:t,className:r?"button button--active":"button"},"departures"),n.a.createElement("button",{type:"button",name:"arrivals",onClick:t,className:r?"button":"button button--active"},"arrivals"))},D=function(e){function t(){var e,r;Object(p.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={isDepartures:!0,filterInput:""},r.handleFilterTyping=function(e){var t=e.target,a=t.name,n=t.value;r.props.filterFlight(n),r.setState(Object(h.a)({},a,n))},r.toggleTab=function(e){r.setState("departures"===e.target.name?{isDepartures:!0}:{isDepartures:!1})},r}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.departures,r=e.arrivals,a=e.sortTable,l=this.state,i=l.isDepartures,s=l.filterInput,o=(i?t:r).map(function(e){return n.a.createElement(v,{key:e.ID,flight:e,isDepartures:i})});return n.a.createElement("div",null,n.a.createElement(E,{filterInput:s,handleFilterTyping:this.handleFilterTyping}),n.a.createElement(y,{toggleTab:this.toggleTab,isDepartures:i}),n.a.createElement("table",{className:"flights-table"},n.a.createElement(g,{sortTable:a}),n.a.createElement("tbody",{className:"flights-table__body"},o)))}}]),t}(n.a.Component),j=function(e){function t(){var e,r;Object(p.a)(this,t);for(var a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(r=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(n)))).state={arrivalsOrigin:[],departuresOrigin:[],arrivals:[],departures:[],sortOrder:1},r.isValueExist=function(e,t){var r=t.toLowerCase(),a=e["planeTypeID.code"].toLowerCase(),n=e.airline.en.name.toLowerCase(),l=e["airportToID.name_en"],i=e["airportFromID.name_en"];return a.includes(r)||n.includes(r)||(l?l.toLowerCase().includes(r):i.toLowerCase().includes(r))},r.filterFlight=function(e){r.setState(function(t){return{departures:Object(c.a)(t.departuresOrigin).filter(function(t){return r.isValueExist(t,e)}),arrivals:Object(c.a)(t.arrivalsOrigin).filter(function(t){return r.isValueExist(t,e)})}})},r.getMinutes=function(e){var t=new Date(Date.parse(e));return 60*t.getHours()+t.getMinutes()},r.sortTable=function(e){switch(e.target.getAttribute("name")){case"Terminal":return r.setState(function(e){return{departures:Object(c.a)(e.departuresOrigin).sort(function(t,r){return e.sortOrder*t.term.localeCompare(r.term)}),arrivals:Object(c.a)(e.arrivalsOrigin).sort(function(t,r){return e.sortOrder*t.term.localeCompare(r.term)}),sortOrder:-e.sortOrder}});case"Local time":return r.setState(function(e){return{departures:Object(c.a)(e.departuresOrigin).sort(function(t,a){return e.sortOrder*(r.getMinutes(t.timeDepExpectCalc)-r.getMinutes(a.timeDepExpectCalc))}),arrivals:Object(c.a)(e.arrivalsOrigin).sort(function(t,a){return e.sortOrder*(r.getMinutes(t.timeArrExpectCalc)-r.getMinutes(a.timeArrExpectCalc))}),sortOrder:-e.sortOrder}});case"Destination":return r.setState(function(e){return{departures:Object(c.a)(e.departuresOrigin).sort(function(t,r){return e.sortOrder*t["airportToID.name_en"].localeCompare(r["airportToID.name_en"])}),arrivals:Object(c.a)(e.arrivalsOrigin).sort(function(t,r){return e.sortOrder*t["airportFromID.name_en"].localeCompare(r["airportFromID.name_en"])}),sortOrder:-e.sortOrder}});case"Status":return r.setState(function(e){return{departures:Object(c.a)(e.departuresOrigin).sort(function(t,a){return e.sortOrder*(r.getMinutes(t.timeDepShedule)-r.getMinutes(a.timeDepShedule))}),arrivals:Object(c.a)(e.arrivalsOrigin).sort(function(t,a){return e.sortOrder*(r.getMinutes(t.timeArrShedule)-r.getMinutes(a.timeArrShedule))}),sortOrder:-e.sortOrder}});case"Airline":return r.setState(function(e){return{departures:Object(c.a)(e.departuresOrigin).sort(function(t,r){return e.sortOrder*t.airline.en.name.localeCompare(r.airline.en.name)}),arrivals:Object(c.a)(e.arrivalsOrigin).sort(function(t,r){return e.sortOrder*t.airline.en.name.localeCompare(r.airline.en.name)}),sortOrder:-e.sortOrder}});case"Flight":return r.setState(function(e){return{departures:Object(c.a)(e.departuresOrigin).sort(function(t,r){return e.sortOrder*t["planeTypeID.code"].localeCompare(r["planeTypeID.code"])}),arrivals:Object(c.a)(e.arrivalsOrigin).sort(function(t,r){return e.sortOrder*t["planeTypeID.code"].localeCompare(r["planeTypeID.code"])}),sortOrder:-e.sortOrder}});case"unSort":return r.setState(function(e){return{departures:Object(c.a)(e.departuresOrigin),arrivals:Object(c.a)(e.arrivalsOrigin),sortOrder:1}});default:return}},r}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,this.setState({arrivalsOrigin:Object(c.a)(t.body.arrival),departuresOrigin:Object(c.a)(t.body.departure),arrivals:Object(c.a)(t.body.arrival),departures:Object(c.a)(t.body.departure)});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.arrivals,r=e.departures;return n.a.createElement("div",{className:"App"},n.a.createElement("h1",{className:"App-header"},"React airport SEARCH FLIGHT"),n.a.createElement(D,{arrivals:t,departures:r,filterFlight:this.filterFlight,sortTable:this.sortTable}))}}]),t}(n.a.Component);i.a.render(n.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7e2ade8b.chunk.js.map