(this["webpackJsonpapp-weather"]=this["webpackJsonpapp-weather"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(2),c=n.n(i),l=(n(12),n(3)),u=n(4),o=n(5),s=n(6),m=function(e){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:e.submit},r.a.createElement("input",{type:"text",value:e.value,onChange:e.change,placeholder:"Wpisz miasto"}),r.a.createElement("button",null,"Wyszukaj miasto")))},h=(n(13),function(e){var t=e.weather,n=t.date,a=t.city,i=t.sunrise,c=t.sunset,l=t.temp,u=t.pressure,o=t.wind,s=t.err,m=null;if(!s&&a){var h=new Date(1e3*i).toLocaleTimeString(),d=new Date(1e3*c).toLocaleTimeString();m=r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,"Wyniki wyszukiwania dla ",r.a.createElement("em",null,a)),r.a.createElement("h4",null,"Dane dla dnia i godziny: ",n),r.a.createElement("h4",null,"Aktualna temperatura: ",l," \xb0C"),r.a.createElement("h4",null,"Wsch\xf3d s\u0142o\u0144ca dzisiaj o: ",h),r.a.createElement("h4",null,"Zach\xf3d s\u0142o\u0144ca dzisiaj o: ",d),r.a.createElement("h4",null,"Aktualna si\u0142a wiatru: ",o," m/s"),r.a.createElement("h4",null,"Aktualne ci\u015bnienie: ",u," hPa"))}return r.a.createElement("div",{className:"result"},s?"Nie mamy w bazie ".concat(a):m)}),d=(n(14),"dd342ecc1e01ffd589e9ee349054ad5e"),p=function(e){Object(s.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={value:"",date:"",city:"",sunrise:"",sunset:"",temp:"",pressure:"",wind:"",err:!1},e.handleInputChange=function(t){e.setState({value:t.target.value})},e.handleCitySubmit=function(t){t.preventDefault();var n="http://api.openweathermap.org/data/2.5/weather?q=".concat(e.state.value,"&appid=").concat(d,"&units=metric");fetch(n).then((function(e){if(e.ok)return e;throw Error("Nie uda\u0142o si\u0119")})).then((function(e){return e.json()})).then((function(t){var n=(new Date).toLocaleDateString();e.setState((function(e){return{err:!1,date:n,sunrise:t.sys.sunrise,sunset:t.sys.sunset,temp:t.main.temp,pressure:t.main.pressure,wind:t.wind.speed,city:e.value}}))})).catch((function(t){console.log(t),e.setState((function(e){return{err:!0,city:e.value}}))}))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{value:this.state.value,change:this.handleInputChange,submit:this.handleCitySubmit}),r.a.createElement(h,{weather:this.state}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.5377c8b0.chunk.js.map