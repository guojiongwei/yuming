webpackJsonp([18],{"S+3S":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(l("Yarq")),n=s(l("AA3o")),u=s(l("xSur")),i=s(l("UzKs")),o=s(l("Y7Ml")),c=s(l("0282")),r=l("BXMe");function s(e){return e&&e.__esModule?e:{default:e}}l("IYQi");var f=function(e){function t(e){(0,n.default)(this,t);var l=(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return l.state={title:""},l}return(0,o.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname.split("/")[2];this.setState({title:e})}},{key:"click",value:function(){window.history.go(-1)}},{key:"render",value:function(){var e=this.state.title;return c.default.createElement("div",{className:"header"},c.default.createElement("ul",null,c.default.createElement("li",{onClick:this.click.bind(this)},c.default.createElement("span",{className:"iconfont icon-fanhui"})),c.default.createElement("li",null,e),c.default.createElement("li",null,c.default.createElement(r.NavLink,{to:"/home"},c.default.createElement("span",{className:"iconfont icon-shouye"})))))}}]),t}(c.default.Component);t.default=f}});