webpackJsonp([0x6bb91e53a7a7],{177:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(8),r=l(n),s=a(1),u=l(s),c=a(2),d=l(c),f=a(38),i=l(f),o=function(e){var t=e.edges,a=e.theme;return u.default.createElement(u.default.Fragment,null,u.default.createElement("ul",{className:r.default.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},t.map(function(e){var t=e.node,l=t.frontmatter.title,n=t.fields.slug;return u.default.createElement("li",{key:n,className:r.default.dynamic([["132031231",[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]]])},u.default.createElement(i.default,{to:n},l))})),u.default.createElement(r.default,{styleId:"132031231",css:["ul.__jsx-style-dynamic-selector{margin:"+a.space.stack.m+";padding:"+a.space.m+";list-style:circle;}","li.__jsx-style-dynamic-selector{padding:"+a.space.xs+" 0;font-size:"+a.font.size.s+";line-height:"+a.font.lineHeight.l+";}"],dynamic:[a.space.stack.m,a.space.m,a.space.xs,a.font.size.s,a.font.lineHeight.l]}))};o.propTypes={edges:d.default.array.isRequired,theme:d.default.object.isRequired},t.default=o,e.exports=t.default},178:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(177);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return l(n).default}}),e.exports=t.default},518:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.guery=void 0;var n=a(8),r=l(n),s=a(137),u=l(s),c=a(2),d=l(c),f=a(1),i=l(f),o=a(43),m=a(86),p=l(m),y=a(106),g=l(y),h=a(178),_=l(h),E=a(70),b=l(E),x=function(e){var t=e.data,a=t.posts.edges,l=t.site.siteMetadata.facebook,n={};a.forEach(function(e){var t=e.node.frontmatter.category;t&&null!=t&&(n[t]||(n[t]=[]),n[t].push(e))});var s=[];for(var c in n)s.push([c,n[c]]);return i.default.createElement(i.default.Fragment,null,i.default.createElement(o.ThemeContext.Consumer,null,function(e){return i.default.createElement(p.default,{theme:e},i.default.createElement("header",{className:r.default.dynamic([["3401059523",[e.color.brand.primary]]])},i.default.createElement(g.default,{title:"Posts by categories",theme:e})),s.map(function(t){return i.default.createElement("section",{key:t[0],className:r.default.dynamic([["3401059523",[e.color.brand.primary]]])},i.default.createElement("h2",{className:r.default.dynamic([["3401059523",[e.color.brand.primary]]])},i.default.createElement(u.default,null)," ",t[0]),i.default.createElement(_.default,{edges:t[1],theme:e}))}),i.default.createElement(r.default,{styleId:"3401059523",css:["h2.__jsx-style-dynamic-selector{margin:0 0 0.5em;}","h2.__jsx-style-dynamic-selector svg{height:0.8em;fill:"+e.color.brand.primary+";}"],dynamic:[e.color.brand.primary]}))}),i.default.createElement(b.default,{facebook:l}))};x.propTypes={data:d.default.object.isRequired},t.default=x;t.guery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-category-js-bbb34571e9395b2ce79b.js.map