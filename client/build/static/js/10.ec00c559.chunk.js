webpackJsonp([10],{969:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),c=n.n(l),u=n(167),i=n(924),p=n.n(i),s=n(925),m=n.n(s),f=n(926),y=n.n(f),E=n(927),h=n.n(E),b=n(71),v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),d=function(e){function t(){var e,n,o,l;r(this,t);for(var c=arguments.length,u=Array(c),i=0;i<c;i++)u[i]=arguments[i];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={menuAnchor:null,leave:!1},o.openMenu=function(e){o.setState({menuAnchor:e.currentTarget})},o.closeMenu=function(){o.setState({menuAnchor:null})},o.leaveRoom=function(){o.setState({leave:!0})},l=n,a(o,l)}return o(t,e),v(t,[{key:"render",value:function(){var e=this.openMenu,t=this.closeMenu,n=this.leaveRoom,r=this.props.user.name,a=this.state,o=a.menuAnchor;return a.leave?c.a.createElement(b.c,{to:"/connect"}):c.a.createElement(l.Fragment,null,c.a.createElement(u.n,{component:"nav"},c.a.createElement(u.o,null,c.a.createElement(u.p,null,c.a.createElement(h.a,{style:{fontSize:30}})),c.a.createElement(u.r,{primary:c.a.createElement(u.z,{variant:"title",color:"secondary"},"You"),disableTypography:!0,secondary:c.a.createElement(u.z,{variant:"caption"},r)}),c.a.createElement(u.q,null,c.a.createElement(u.y,{title:"Menu",disableFocusListener:!0},c.a.createElement(u.m,{onClick:e},c.a.createElement(y.a,null)))))),c.a.createElement(u.t,{anchorEl:o,open:Boolean(o),onClose:t},c.a.createElement(u.u,{component:b.b,to:"/user/profile"},c.a.createElement(u.p,null,c.a.createElement(p.a,{color:"primary"})),c.a.createElement(u.r,{primary:"Profile"})),c.a.createElement(u.u,{onClick:n},c.a.createElement(u.p,null,c.a.createElement(m.a,{color:"primary"})),c.a.createElement(u.r,{primary:"Exit"}))))}}]),t}(l.Component);t.default=d}});
//# sourceMappingURL=10.ec00c559.chunk.js.map