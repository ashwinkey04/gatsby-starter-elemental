(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+YiH":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"siteUrl":"https://ashwinkey04.github.io/gatsby-starter-elemental","disqus":null}}}}')},"0EVa":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.data,a=new Date(t),n=a.getDate(),i=a.getMonth(),o=a.getFullYear();return r.a.createElement("span",null,n," ",["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ",o)}},"4M6O":function(e,t,a){"use strict";a("rE2o"),a("ioFf"),a("RW0V"),a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("T39b");var n=a("TqRt");t.__esModule=!0,t.insertScript=function(e,t,a){var n=window.document.createElement("script");return n.async=!0,n.src=e,n.id=t,a.appendChild(n),n},t.removeScript=function(e,t){var a=window.document.getElementById(e);a&&t.removeChild(a)},t.debounce=function(e,t,a){var n;return function(){var r=this,i=arguments,o=function(){n=null,a||e.apply(r,i)},s=a&&!n;window.clearTimeout(n),n=setTimeout(o,t),s&&e.apply(r,i)}},t.isReactElement=i,t.shallowComparison=function(e,t){var a=new Set(Object.keys(e),Object.keys(t)),n=Array.isArray(a),r=0;for(a=n?a:a[Symbol.iterator]();;){var o;if(n){if(r>=a.length)break;o=a[r++]}else{if((r=a.next()).done)break;o=r.value}var s=o;if(e[s]!==t[s]&&!i(e[s]))return!0}return!1};var r=n(a("q1tI"));function i(e){return!!r.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return r.default.isValidElement(e)}))}},G9Z5:function(e,t,a){},O0kv:function(e,t,a){},ORnI:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("VUT9"));t.Disqus=r.default;var i=n(a("qASQ"));t.CommentCount=i.default;var o=r.default;t.default=o},VUT9:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),i=n(a("8OQS")),o=n(a("VbXa")),s=n(a("q1tI")),A=n(a("17x9")),d=a("4M6O"),l=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",t.config?a.config=t.config:a.config={identifier:t.identifier,url:t.url,title:t.title},a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){"undefined"!=typeof window&&window.document&&this.shortname&&this.cleanInstance(),this.loadInstance()},a.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){if("undefined"!=typeof window&&window.document&&this.shortname){var e=this.config;window.disqus_config=function(){this.page.identifier=e.identifier,this.page.title=e.title,this.page.url=e.url},(0,d.insertScript)("https://"+this.shortname+".disqus.com/embed.js","disqus-embed-script",window.document.body)}},a.cleanInstance=function(){(0,d.removeScript)("disqus-embed-script",window.document.body),window&&window.DISQUS&&window.DISQUS.reset();try{delete window.DISQUS}catch(t){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild)},a.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return s.default.createElement("div",(0,r.default)({id:"disqus_thread"},t,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:73},__self:this}))},t}(s.default.Component);t.default=l,l.propTypes={config:A.default.shape({identifier:A.default.string,title:A.default.string,url:A.default.string}),identifier:A.default.string,title:A.default.string,url:A.default.string}},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return g}));var n=a("q1tI"),r=a.n(n),i=a("9eSz"),o=a.n(i),s=a("Bl7J"),A=a("fLCP"),d=a("uRzu"),l=function(e){var t=A.data;return t.allMarkdownRemark.edges.length>0?r.a.createElement("section",{id:"latest-blogposts",className:"container"},r.a.createElement("div",{className:"section-title"},r.a.createElement("h2",null,"Latest Blogposts")),r.a.createElement(d.a,{data:t,remove:e.id})):r.a.createElement(r.a.Fragment,null)},c=a("vrFN"),u=a("0EVa"),m=a("+YiH"),f=a("Wbzz"),p=a("ORnI");function h(e){var t=e.url,a=e.title,n={url:t,identifier:a,title:a};return r.a.createElement(p.Disqus,{config:n})}var E=function(e){var t=e.title,a=e.location;return r.a.createElement(f.b,{query:"1630408781",render:function(e){var n=e.site.siteMetadata.siteUrl+a;return null===e.site.siteMetadata.disqus?null:r.a.createElement(h,{url:n,title:t})},data:m})},g=(a("G9Z5"),t.default=function(e){var t=e.data,a=e.location;return r.a.createElement(s.a,null,r.a.createElement(c.a,{lang:"en",title:t.markdownRemark.frontmatter.title,description:t.markdownRemark.frontmatter.description,image:t.markdownRemark.frontmatter.image.publicURL}),r.a.createElement("div",{className:"container"},r.a.createElement("article",{className:"blog-post"},null!=t.markdownRemark.frontmatter.banner&&r.a.createElement("div",{className:"banner"},r.a.createElement(o.a,{fluid:t.markdownRemark.frontmatter.banner.childImageSharp.fluid})),r.a.createElement("div",{className:"head text-primary"},r.a.createElement("h1",null,t.markdownRemark.frontmatter.title),r.a.createElement("p",{className:"post-date"},r.a.createElement(u.a,{data:t.markdownRemark.frontmatter.date}))),r.a.createElement("div",{className:"content row flex"},r.a.createElement("div",{className:"col s12 m11 l10",dangerouslySetInnerHTML:{__html:t.markdownRemark.html}}))),r.a.createElement(E,{title:t.markdownRemark.frontmatter.title,location:a.pathname}),r.a.createElement(l,{id:t.markdownRemark.id})))},"863632220")},fLCP:function(e){e.exports=JSON.parse('{"data":{"allMarkdownRemark":{"edges":[{"node":{"id":"f528f362-e52e-5122-b45b-2f55e742a6be","frontmatter":{"title":"How I squashed commits in git","description":"Squashing means moving the changes done in a particular commit to its immedeate or older parent commits.","date":"2019-11-07 20:03:36 +0530","image":{"publicURL":"/static/4877d96a3ad43bdeeac5e90f629e52ba/image.jpg","childImageSharp":{"fluid":{"srcSet":"/static/4877d96a3ad43bdeeac5e90f629e52ba/9104c/image.jpg 480w,\\n/static/4877d96a3ad43bdeeac5e90f629e52ba/a6352/image.jpg 960w,\\n/static/4877d96a3ad43bdeeac5e90f629e52ba/dba73/image.jpg 1368w","base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAECBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB4t86oEf/xAAaEAACAgMAAAAAAAAAAAAAAAAAAQMQEhMh/9oACAEBAAEFAo48zW1SH1n/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAg/9oACAEBAAY/Al//xAAaEAEAAgMBAAAAAAAAAAAAAAABABEQIUGB/9oACAEBAAE/IU7oixNPphU3FsCsf//aAAwDAQACAAMAAAAQkA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QEyf/xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhEEGBUf/aAAgBAQABPxByhBjsvhhnDJtJ83jpyMLT4zDWQ9W8f//Z","aspectRatio":1.5,"src":"/static/4877d96a3ad43bdeeac5e90f629e52ba/dba73/image.jpg","sizes":"(max-width: 1368px) 100vw, 1368px"},"id":"d6fefd08-c43e-5821-aa79-02b164e6c3c9"}}},"fields":{"slug":"/blog/squash/"}}}]}}}')},qASQ:function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r=n(a("pVnL")),i=n(a("8OQS")),o=n(a("VbXa")),s=n(a("q1tI")),A=n(a("17x9")),d=a("4M6O"),l=(0,d.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).shortname="undefined"!=typeof GATSBY_DISQUS_SHORTNAME&&""!==GATSBY_DISQUS_SHORTNAME?GATSBY_DISQUS_SHORTNAME:"",a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.loadInstance()},a.shouldComponentUpdate=function(e){return this.props!==e&&(0,d.shallowComparison)(this.props,e)},a.componentDidUpdate=function(){this.loadInstance()},a.loadInstance=function(){window.document.getElementById("dsq-count-scr")?l():(0,d.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},a.cleanInstance=function(){(0,d.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},a.render=function(){var e=this.props,t=e.config,a=e.placeholder,n=(0,i.default)(e,["config","placeholder"]);return s.default.createElement("span",(0,r.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},n,{__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:49},__self:this}),a)},t}(s.default.Component);t.default=c,c.defaultProps={placeholder:"..."},c.propTypes={config:A.default.shape({identifier:A.default.string,title:A.default.string,url:A.default.string}),placeholder:A.default.string}},uRzu:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),o=a("9eSz"),s=a.n(o),A=a("0EVa"),d=a("10BB");a("O0kv");var l=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.color=window.getComputedStyle(this.textSecondary,null).getPropertyValue("color"),this.textSecondary.querySelector("path").setAttribute("fill",this.color)},o.render=function(){var e=this;return r.a.createElement("div",{className:"item col s12 m6"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"image"},r.a.createElement(s.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),r.a.createElement(i.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),r.a.createElement("div",{className:"content"},r.a.createElement("h3",{className:"text-primary"},r.a.createElement(i.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),r.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description),r.a.createElement("p",{className:"date text-secondary",ref:function(t){return e.textSecondary=t}},r.a.createElement("span",{className:"icon"},r.a.createElement(d.a,null)),r.a.createElement(A.a,{data:this.props.data.node.frontmatter.date})))))},n}(r.a.Component);t.a=function(e){var t=e.data.allMarkdownRemark.edges,a=[];return t.forEach((function(t,n){e.remove&&t.node.id===e.remove||a.push(r.a.createElement(l,{key:t.node.id,data:t}))})),r.a.createElement("div",{className:"row"},a)}}}]);
//# sourceMappingURL=component---src-templates-blog-js-e5bf9eb2e237c406b643.js.map