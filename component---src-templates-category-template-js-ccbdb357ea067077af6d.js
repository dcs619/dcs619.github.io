webpackJsonp([78839606078735],{177:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(9),u=l(n),s=a(1),r=l(s),d=a(2),c=l(d),f=a(38),o=l(f),i=function(e){var t=e.edges,a=e.theme;return r.default.createElement(r.default.Fragment,null,r.default.createElement("ul",{className:u.default.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},t.map(function(e){var t=e.node,l=t.frontmatter.title,n=t.fields.slug;return r.default.createElement("li",{key:n,className:u.default.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},r.default.createElement(o.default,{to:n},l))})),r.default.createElement(u.default,{styleId:"132031231",css:["ul.__jsx-style-dynamic-selector{margin:"+a.space.stack.m+";padding:"+a.space.m+";list-style:circle;}","li.__jsx-style-dynamic-selector{padding:"+a.space.xs+" 0;font-size:"+a.font.size.s+";line-height:"+a.font.lineHeight.l+";}"],dynamic:[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]}))};i.propTypes={edges:c.default.array.isRequired,theme:c.default.object.isRequired},t.default=i,e.exports=t.default},178:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(177);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(n).default}}),e.exports=t.default},522:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.categoryQuery=void 0;var n=a(137),u=l(n),s=a(2),r=l(s),d=a(1),c=l(d),f=a(70),o=l(f),i=a(43),m=a(86),p=l(m),g=a(106),y=l(g),h=a(178),E=l(h),_=function(e){var t=e.pathContext.category,a=e.data,l=a.allMarkdownRemark,n=l.totalCount,s=l.edges,r=a.site.siteMetadata.facebook;return c.default.createElement(c.default.Fragment,null,c.default.createElement(i.ThemeContext.Consumer,null,function(e){return c.default.createElement(p.default,{theme:e},c.default.createElement("header",null,c.default.createElement(y.default,{theme:e},c.default.createElement("span",null,"Posts in category")," ",c.default.createElement(u.default,null),t),c.default.createElement("p",{className:"meta"},"There ",n>1?"are":"is"," ",c.default.createElement("strong",null,n)," post",n>1?"s":""," ","in the category."),c.default.createElement(E.default,{edges:s,theme:e})))}),c.default.createElement(o.default,{facebook:r}))};_.propTypes={data:r.default.object.isRequired,pathContext:r.default.object.isRequired},t.default=_;t.categoryQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-category-template-js-ccbdb357ea067077af6d.js.map