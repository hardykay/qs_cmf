/*!

Holder - client side image placeholders
Version 2.7.1+6hydf
© 2015 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  http://opensource.org/licenses/MIT

*/
!function(a){if(a.document){var b=a.document;b.querySelectorAll||(b.querySelectorAll=function(c){var d,e=b.createElement("style"),f=[];for(b.documentElement.firstChild.appendChild(e),b._qsa=[],e.styleSheet.cssText=c+"{x-qsa:expression(document._qsa && document._qsa.push(this))}",a.scrollBy(0,0),e.parentNode.removeChild(e);b._qsa.length;)d=b._qsa.shift(),d.style.removeAttribute("x-qsa"),f.push(d);return b._qsa=null,f}),b.querySelector||(b.querySelector=function(a){var c=b.querySelectorAll(a);return c.length?c[0]:null}),b.getElementsByClassName||(b.getElementsByClassName=function(a){return a=String(a).replace(/^|\s+/g,"."),b.querySelectorAll(a)}),Object.keys||(Object.keys=function(a){if(a!==Object(a))throw TypeError("Object.keys called on non-object");var b,c=[];for(b in a)Object.prototype.hasOwnProperty.call(a,b)&&c.push(b);return c}),function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";a.atob=a.atob||function(a){a=String(a);var c,d=0,e=[],f=0,g=0;if(a=a.replace(/\s/g,""),a.length%4===0&&(a=a.replace(/=+$/,"")),a.length%4===1)throw Error("InvalidCharacterError");if(/[^+/0-9A-Za-z]/.test(a))throw Error("InvalidCharacterError");for(;d<a.length;)c=b.indexOf(a.charAt(d)),f=f<<6|c,g+=6,24===g&&(e.push(String.fromCharCode(f>>16&255)),e.push(String.fromCharCode(f>>8&255)),e.push(String.fromCharCode(255&f)),g=0,f=0),d+=1;return 12===g?(f>>=4,e.push(String.fromCharCode(255&f))):18===g&&(f>>=2,e.push(String.fromCharCode(f>>8&255)),e.push(String.fromCharCode(255&f))),e.join("")},a.btoa=a.btoa||function(a){a=String(a);var c,d,e,f,g,h,i,j=0,k=[];if(/[^\x00-\xFF]/.test(a))throw Error("InvalidCharacterError");for(;j<a.length;)c=a.charCodeAt(j++),d=a.charCodeAt(j++),e=a.charCodeAt(j++),f=c>>2,g=(3&c)<<4|d>>4,h=(15&d)<<2|e>>6,i=63&e,j===a.length+2?(h=64,i=64):j===a.length+1&&(i=64),k.push(b.charAt(f),b.charAt(g),b.charAt(h),b.charAt(i));return k.join("")}}(a),Object.prototype.hasOwnProperty||(Object.prototype.hasOwnProperty=function(a){var b=this.__proto__||this.constructor.prototype;return a in this&&(!(a in b)||b[a]!==this[a])}),function(){if("performance"in a==!1&&(a.performance={}),Date.now=Date.now||function(){return(new Date).getTime()},"now"in a.performance==!1){var b=Date.now();performance.timing&&performance.timing.navigationStart&&(b=performance.timing.navigationStart),a.performance.now=function(){return Date.now()-b}}}(),a.requestAnimationFrame||(a.webkitRequestAnimationFrame?!function(a){a.requestAnimationFrame=function(b){return webkitRequestAnimationFrame(function(){b(a.performance.now())})},a.cancelAnimationFrame=webkitCancelAnimationFrame}(a):a.mozRequestAnimationFrame?!function(a){a.requestAnimationFrame=function(b){return mozRequestAnimationFrame(function(){b(a.performance.now())})},a.cancelAnimationFrame=mozCancelAnimationFrame}(a):!function(a){a.requestAnimationFrame=function(b){return a.setTimeout(b,1e3/60)},a.cancelAnimationFrame=a.clearTimeout}(a))}}(this),function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define(b):"object"==typeof exports?exports.Holder=b():a.Holder=b()}(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={exports:{},id:d,loaded:!1};return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports}var c={};return b.m=a,b.c=c,b.p="",b(0)}([function(a,b,c){(function(b){function d(a,b,c,d){var f=e(c.substr(c.lastIndexOf(a.domain)),a);f&&h({mode:null,el:d,flags:f,engineSettings:b})}function e(a,b){var c={theme:B(J.settings.themes.gray,null),stylesheets:b.stylesheets,instanceOptions:b};return a.match(/([\d]+p?)x([\d]+p?)(?:\?|$)/)?f(a,c):g(a,c)}function f(a,b){var c=a.split("?"),d=c[0].split("/");b.holderURL=a;var e=d[1],f=e.match(/([\d]+p?)x([\d]+p?)/);if(!f)return!1;if(b.fluid=-1!==e.indexOf("p"),b.dimensions={width:f[1].replace("p","%"),height:f[2].replace("p","%")},2===c.length){var g=A.parse(c[1]);if(g.bg&&(b.theme.background=(-1===g.bg.indexOf("#")?"#":"")+g.bg),g.fg&&(b.theme.foreground=(-1===g.fg.indexOf("#")?"#":"")+g.fg),g.theme&&b.instanceOptions.themes.hasOwnProperty(g.theme)&&(b.theme=B(b.instanceOptions.themes[g.theme],null)),g.text&&(b.text=g.text),g.textmode&&(b.textmode=g.textmode),g.size&&(b.size=g.size),g.font&&(b.font=g.font),g.align&&(b.align=g.align),b.nowrap=z.truthy(g.nowrap),b.auto=z.truthy(g.auto),z.truthy(g.random)){J.vars.cache.themeKeys=J.vars.cache.themeKeys||Object.keys(b.instanceOptions.themes);var h=J.vars.cache.themeKeys[0|Math.random()*J.vars.cache.themeKeys.length];b.theme=B(b.instanceOptions.themes[h],null)}}return b}function g(a,b){var c=!1,d=String.fromCharCode(11),e=a.replace(/([^\\])\//g,"$1"+d).split(d),f=/%[0-9a-f]{2}/gi,g=b.instanceOptions;b.holderURL=[];for(var h=e.length,i=0;h>i;i++){var j=e[i];if(j.match(f))try{j=decodeURIComponent(j)}catch(k){j=e[i]}var l=!1;if(J.flags.dimensions.match(j))c=!0,b.dimensions=J.flags.dimensions.output(j),l=!0;else if(J.flags.fluid.match(j))c=!0,b.dimensions=J.flags.fluid.output(j),b.fluid=!0,l=!0;else if(J.flags.textmode.match(j))b.textmode=J.flags.textmode.output(j),l=!0;else if(J.flags.colors.match(j)){var m=J.flags.colors.output(j);b.theme=B(b.theme,m),l=!0}else if(g.themes[j])g.themes.hasOwnProperty(j)&&(b.theme=B(g.themes[j],null)),l=!0;else if(J.flags.font.match(j))b.font=J.flags.font.output(j),l=!0;else if(J.flags.auto.match(j))b.auto=!0,l=!0;else if(J.flags.text.match(j))b.text=J.flags.text.output(j),l=!0;else if(J.flags.size.match(j))b.size=J.flags.size.output(j),l=!0;else if(J.flags.random.match(j)){null==J.vars.cache.themeKeys&&(J.vars.cache.themeKeys=Object.keys(g.themes));var n=J.vars.cache.themeKeys[0|Math.random()*J.vars.cache.themeKeys.length];b.theme=B(g.themes[n],null),l=!0}l&&b.holderURL.push(j)}return b.holderURL.unshift(g.domain),b.holderURL=b.holderURL.join("/"),c?b:!1}function h(a){var b=a.mode,c=a.el,d=a.flags,e=a.engineSettings,f=d.dimensions,g=d.theme,h=f.width+"x"+f.height;if(b=null==b?d.fluid?"fluid":"image":b,null!=d.text&&(g.text=d.text,"object"===c.nodeName.toLowerCase())){for(var j=g.text.split("\\n"),k=0;k<j.length;k++)j[k]=z.encodeHtmlEntity(j[k]);g.text=j.join("\\n")}var n=d.holderURL,o=B(e,null);if(d.font&&(g.font=d.font,!o.noFontFallback&&"img"===c.nodeName.toLowerCase()&&J.setup.supportsCanvas&&"svg"===o.renderer&&(o=B(o,{renderer:"canvas"}))),d.font&&"canvas"==o.renderer&&(o.reRender=!0),"background"==b)null==c.getAttribute("data-background-src")&&r(c,{"data-background-src":n});else{var p={};p[J.vars.dataAttr]=n,r(c,p)}d.theme=g,c.holderData={flags:d,engineSettings:o},("image"==b||"fluid"==b)&&r(c,{alt:g.text?g.text+" ["+h+"]":h});var q={mode:b,el:c,holderSettings:{dimensions:f,theme:g,flags:d},engineSettings:o};"image"==b?("html"!=o.renderer&&d.auto||(c.style.width=f.width+"px",c.style.height=f.height+"px"),"html"==o.renderer?c.style.backgroundColor=g.background:(i(q),"exact"==d.textmode&&(c.holderData.resizeUpdate=!0,J.vars.resizableImages.push(c),l(c)))):"background"==b&&"html"!=o.renderer?i(q):"fluid"==b&&(c.holderData.resizeUpdate=!0,"%"==f.height.slice(-1)?c.style.height=f.height:null!=d.auto&&d.auto||(c.style.height=f.height+"px"),"%"==f.width.slice(-1)?c.style.width=f.width:null!=d.auto&&d.auto||(c.style.width=f.width+"px"),("inline"==c.style.display||""===c.style.display||"none"==c.style.display)&&(c.style.display="block"),m(c),"html"==o.renderer?c.style.backgroundColor=g.background:(J.vars.resizableImages.push(c),l(c)))}function i(a){function c(){var b=null;switch(h.renderer){case"canvas":b=L(k,a);break;case"svg":b=M(k,a);break;default:throw"Holder: invalid renderer: "+h.renderer}return b}var d=null,e=a.mode,f=a.holderSettings,g=a.el,h=a.engineSettings;switch(h.renderer){case"svg":if(!J.setup.supportsSVG)return;break;case"canvas":if(!J.setup.supportsCanvas)return;break;default:return}var i={width:f.dimensions.width,height:f.dimensions.height,theme:f.theme,flags:f.flags},k=j(i);if(d=c(),null==d)throw"Holder: couldn't render placeholder";"background"==e?(g.style.backgroundImage="url("+d+")",g.style.backgroundSize=i.width+"px "+i.height+"px"):("img"===g.nodeName.toLowerCase()?r(g,{src:d}):"object"===g.nodeName.toLowerCase()&&(r(g,{data:d}),r(g,{type:"image/svg+xml"})),h.reRender&&b.setTimeout(function(){var a=c();if(null==a)throw"Holder: couldn't render placeholder";"img"===g.nodeName.toLowerCase()?r(g,{src:a}):"object"===g.nodeName.toLowerCase()&&(r(g,{data:a}),r(g,{type:"image/svg+xml"}))},100)),r(g,{"data-holder-rendered":!0})}function j(a){function b(a,b,c,d){b.width=c,b.height=d,a.width=Math.max(a.width,b.width),a.height+=b.height}var c=J.defaults.size;switch(parseFloat(a.theme.size)?c=a.theme.size:parseFloat(a.flags.size)&&(c=a.flags.size),a.font={family:a.theme.font?a.theme.font:"Arial, Helvetica, Open Sans, sans-serif",size:k(a.width,a.height,c),units:a.theme.units?a.theme.units:J.defaults.units,weight:a.theme.fontweight?a.theme.fontweight:"bold"},a.text=a.theme.text||Math.floor(a.width)+"x"+Math.floor(a.height),a.noWrap=a.theme.nowrap||a.flags.nowrap,a.align=a.theme.align||a.flags.align||"center",a.flags.textmode){case"literal":a.text=a.flags.dimensions.width+"x"+a.flags.dimensions.height;break;case"exact":if(!a.flags.exactDimensions)break;a.text=Math.floor(a.flags.exactDimensions.width)+"x"+Math.floor(a.flags.exactDimensions.height)}var d=new y({width:a.width,height:a.height}),e=d.Shape,f=new e.Rect("holderBg",{fill:a.theme.background});f.resize(a.width,a.height),d.root.add(f);var g=new e.Group("holderTextGroup",{text:a.text,align:a.align,font:a.font,fill:a.theme.foreground});g.moveTo(null,null,1),d.root.add(g);var h=g.textPositionData=K(d);if(!h)throw"Holder: staging fallback not supported yet.";g.properties.leading=h.boundingBox.height;var i=null,j=null,l=a.width*J.setup.lineWrapRatio,m=l;if(h.lineCount>1){var n,o=0,p=0,q=0;j=new e.Group("line"+q),("left"===a.align||"right"===a.align)&&(m=a.width*(1-2*(1-J.setup.lineWrapRatio)));for(var r=0;r<h.words.length;r++){var s=h.words[r];i=new e.Text(s.text);var t="\\n"==s.text;!a.noWrap&&(o+s.width>=m||t===!0)&&(b(g,j,o,g.properties.leading),g.add(j),o=0,p+=g.properties.leading,q+=1,j=new e.Group("line"+q),j.y=p),t!==!0&&(i.moveTo(o,0),o+=h.spaceWidth+s.width,j.add(i))}if(b(g,j,o,g.properties.leading),g.add(j),"left"===a.align)g.moveTo(a.width-l,null,null);else if("right"===a.align){for(n in g.children)j=g.children[n],j.moveTo(a.width-j.width,null,null);g.moveTo(0-(a.width-l),null,null)}else{for(n in g.children)j=g.children[n],j.moveTo((g.width-j.width)/2,null,null);g.moveTo((a.width-g.width)/2,null,null)}g.moveTo(null,(a.height-g.height)/2,null),(a.height-g.height)/2<0&&g.moveTo(null,0,null)}else i=new e.Text(a.text),j=new e.Group("line0"),j.add(i),g.add(j),"left"===a.align?g.moveTo(a.width-l,null,null):"right"===a.align?g.moveTo(0-(a.width-l),null,null):g.moveTo((a.width-h.boundingBox.width)/2,null,null),g.moveTo(null,(a.height-h.boundingBox.height)/2,null);return d}function k(a,b,c){var d=parseInt(a,10),e=parseInt(b,10),f=Math.max(d,e),g=Math.min(d,e),h=.8*Math.min(g,f*J.defaults.scale);return Math.round(Math.max(c,h))}function l(a){var b;b=null==a||null==a.nodeType?J.vars.resizableImages:[a];for(var c=0,d=b.length;d>c;c++){var e=b[c];if(e.holderData){var f=e.holderData.flags,g=D(e);if(g){if(!e.holderData.resizeUpdate)continue;if(f.fluid&&f.auto){var h=e.holderData.fluidConfig;switch(h.mode){case"width":g.height=g.width/h.ratio;break;case"height":g.width=g.height*h.ratio}}var j={mode:"image",holderSettings:{dimensions:g,theme:f.theme,flags:f},el:e,engineSettings:e.holderData.engineSettings};"exact"==f.textmode&&(f.exactDimensions=g,j.holderSettings.dimensions=f.dimensions),i(j)}else p(e)}}}function m(a){if(a.holderData){var b=D(a);if(b){var c=a.holderData.flags,d={fluidHeight:"%"==c.dimensions.height.slice(-1),fluidWidth:"%"==c.dimensions.width.slice(-1),mode:null,initialDimensions:b};d.fluidWidth&&!d.fluidHeight?(d.mode="width",d.ratio=d.initialDimensions.width/parseFloat(c.dimensions.height)):!d.fluidWidth&&d.fluidHeight&&(d.mode="height",d.ratio=parseFloat(c.dimensions.width)/d.initialDimensions.height),a.holderData.fluidConfig=d}else p(a)}}function n(){for(var a,c=[],d=Object.keys(J.vars.invisibleImages),e=0,f=d.length;f>e;e++)a=J.vars.invisibleImages[d[e]],D(a)&&"img"==a.nodeName.toLowerCase()&&(c.push(a),delete J.vars.invisibleImages[d[e]]);c.length&&I.run({images:c}),b.requestAnimationFrame(n)}function o(){J.vars.visibilityCheckStarted||(b.requestAnimationFrame(n),J.vars.visibilityCheckStarted=!0)}function p(a){a.holderData.invisibleId||(J.vars.invisibleId+=1,J.vars.invisibleImages["i"+J.vars.invisibleId]=a,a.holderData.invisibleId=J.vars.invisibleId)}function q(a,b){return null==b?document.createElement(a):document.createElementNS(b,a)}function r(a,b){for(var c in b)a.setAttribute(c,b[c])}function s(a,b,c){var d,e;null==a?(a=q("svg",E),d=q("defs",E),e=q("style",E),r(e,{type:"text/css"}),d.appendChild(e),a.appendChild(d)):e=a.querySelector("style"),a.webkitMatchesSelector&&a.setAttribute("xmlns",E);for(var f=0;f<a.childNodes.length;f++)a.childNodes[f].nodeType===F&&a.removeChild(a.childNodes[f]);for(;e.childNodes.length;)e.removeChild(e.childNodes[0]);return r(a,{width:b,height:c,viewBox:"0 0 "+b+" "+c,preserveAspectRatio:"none"}),a}function t(a,c){if(b.XMLSerializer){var d=new XMLSerializer,e="",f=c.stylesheets;if(c.svgXMLStylesheet){for(var g=u(),h=f.length-1;h>=0;h--){var i=g.createProcessingInstruction("xml-stylesheet",'href="'+f[h]+'" rel="stylesheet"');g.insertBefore(i,g.firstChild)}g.removeChild(g.documentElement),e=d.serializeToString(g)}var j=d.serializeToString(a);return j=j.replace(/\&amp;(\#[0-9]{2,}\;)/g,"&$1"),e+j}}function u(){return b.DOMParser?(new DOMParser).parseFromString("<xml />","application/xml"):void 0}function v(a){J.vars.debounceTimer||a.call(this),J.vars.debounceTimer&&b.clearTimeout(J.vars.debounceTimer),J.vars.debounceTimer=b.setTimeout(function(){J.vars.debounceTimer=null,a.call(this)},J.setup.debounce)}function w(){v(function(){l(null)})}var x=c(1),y=c(2),z=c(3),A=c(4),B=z.extend,C=z.getNodeArray,D=z.dimensionCheck,E="http://www.w3.org/2000/svg",F=8,G="2.7.1",H="\nCreated with Holder.js "+G+".\nLearn more at http://holderjs.com\n(c) 2012-2015 Ivan Malopinsky - http://imsky.co\n",I={version:G,addTheme:function(a,b){return null!=a&&null!=b&&(J.settings.themes[a]=b),delete J.vars.cache.themeKeys,this},addImage:function(a,b){var c=document.querySelectorAll(b);if(c.length)for(var d=0,e=c.length;e>d;d++){var f=q("img"),g={};g[J.vars.dataAttr]=a,r(f,g),c[d].appendChild(f)}return this},setResizeUpdate:function(a,b){a.holderData&&(a.holderData.resizeUpdate=!!b,a.holderData.resizeUpdate&&l(a))},run:function(a){a=a||{};var c={},f=B(J.settings,a);J.vars.preempted=!0,J.vars.dataAttr=f.dataAttr||J.vars.dataAttr,c.renderer=f.renderer?f.renderer:J.setup.renderer,-1===J.setup.renderers.join(",").indexOf(c.renderer)&&(c.renderer=J.setup.supportsSVG?"svg":J.setup.supportsCanvas?"canvas":"html");var g=C(f.images),i=C(f.bgnodes),j=C(f.stylenodes),k=C(f.objects);c.stylesheets=[],c.svgXMLStylesheet=!0,c.noFontFallback=f.noFontFallback?f.noFontFallback:!1;for(var l=0;l<j.length;l++){var m=j[l];if(m.attributes.rel&&m.attributes.href&&"stylesheet"==m.attributes.rel.value){var n=m.attributes.href.value,o=q("a");o.href=n;var p=o.protocol+"//"+o.host+o.pathname+o.search;c.stylesheets.push(p)}}for(l=0;l<i.length;l++)if(b.getComputedStyle){var r=b.getComputedStyle(i[l],null).getPropertyValue("background-image"),s=i[l].getAttribute("data-background-src"),t=null;t=null==s?r:s;var u=null,v="?"+f.domain+"/";if(0===t.indexOf(v))u=t.slice(1);else if(-1!=t.indexOf(v)){var w=t.substr(t.indexOf(v)).slice(1),x=w.match(/([^\"]*)"?\)/);null!=x&&(u=x[1])}if(null!=u){var y=e(u,f);y&&h({mode:"background",el:i[l],flags:y,engineSettings:c})}}for(l=0;l<k.length;l++){var A=k[l],D={};try{D.data=A.getAttribute("data"),D.dataSrc=A.getAttribute(J.vars.dataAttr)}catch(E){}var F=null!=D.data&&0===D.data.indexOf(f.domain),G=null!=D.dataSrc&&0===D.dataSrc.indexOf(f.domain);F?d(f,c,D.data,A):G&&d(f,c,D.dataSrc,A)}for(l=0;l<g.length;l++){var H=g[l],I={};try{I.src=H.getAttribute("src"),I.dataSrc=H.getAttribute(J.vars.dataAttr),I.rendered=H.getAttribute("data-holder-rendered")}catch(E){}var K=null!=I.src,L=null!=I.dataSrc&&0===I.dataSrc.indexOf(f.domain),M=null!=I.rendered&&"true"==I.rendered;K?0===I.src.indexOf(f.domain)?d(f,c,I.src,H):L&&(M?d(f,c,I.dataSrc,H):!function(a,b,c,e,f){z.imageExists(a,function(a){a||d(b,c,e,f)})}(I.src,f,c,I.dataSrc,H)):L&&d(f,c,I.dataSrc,H)}return this}},J={settings:{domain:"holder.js",images:"img",objects:"object",bgnodes:"body .holderjs",stylenodes:"head link.holderjs",stylesheets:[],themes:{gray:{background:"#EEEEEE",foreground:"#AAAAAA"},social:{background:"#3a5a97",foreground:"#FFFFFF"},industrial:{background:"#434A52",foreground:"#C2F200"},sky:{background:"#0D8FDB",foreground:"#FFFFFF"},vine:{background:"#39DBAC",foreground:"#1E292C"},lava:{background:"#F8591A",foreground:"#1C2846"}}},defaults:{size:10,units:"pt",scale:1/16},flags:{dimensions:{regex:/^(\d+)x(\d+)$/,output:function(a){var b=this.regex.exec(a);return{width:+b[1],height:+b[2]}}},fluid:{regex:/^([0-9]+%?)x([0-9]+%?)$/,output:function(a){var b=this.regex.exec(a);return{width:b[1],height:b[2]}}},colors:{regex:/(?:#|\^)([0-9a-f]{3,})\:(?:#|\^)([0-9a-f]{3,})/i,output:function(a){var b=this.regex.exec(a);return{foreground:"#"+b[2],background:"#"+b[1]}}},text:{regex:/text\:(.*)/,output:function(a){return this.regex.exec(a)[1].replace("\\/","/")}},font:{regex:/font\:(.*)/,output:function(a){return this.regex.exec(a)[1]}},auto:{regex:/^auto$/},textmode:{regex:/textmode\:(.*)/,output:function(a){return this.regex.exec(a)[1]}},random:{regex:/^random$/},size:{regex:/size\:(\d+)/,output:function(a){return this.regex.exec(a)[1]}}}},K=function(){var a=null,b=null,c=null;return function(d){var e=d.root;if(J.setup.supportsSVG){var f=!1,g=function(a){return document.createTextNode(a)};(null==a||a.parentNode!==document.body)&&(f=!0),a=s(a,e.properties.width,e.properties.height),a.style.display="block",f&&(b=q("text",E),c=g(null),r(b,{x:0}),b.appendChild(c),a.appendChild(b),document.body.appendChild(a),a.style.visibility="hidden",a.style.position="absolute",a.style.top="-100%",a.style.left="-100%");var h=e.children.holderTextGroup,i=h.properties;r(b,{y:i.font.size,style:z.cssProps({"font-weight":i.font.weight,"font-size":i.font.size+i.font.units,"font-family":i.font.family})}),c.nodeValue=i.text;var j=b.getBBox(),k=Math.ceil(j.width/(e.properties.width*J.setup.lineWrapRatio)),l=i.text.split(" "),m=i.text.match(/\\n/g);k+=null==m?0:m.length,c.nodeValue=i.text.replace(/[ ]+/g,"");var n=b.getComputedTextLength(),o=j.width-n,p=Math.round(o/Math.max(1,l.length-1)),t=[];if(k>1){c.nodeValue="";for(var u=0;u<l.length;u++)if(0!==l[u].length){c.nodeValue=z.decodeHtmlEntity(l[u]);var v=b.getBBox();t.push({text:l[u],width:v.width})}}return a.style.display="none",{spaceWidth:p,lineCount:k,boundingBox:j,words:t}}return!1}}(),L=function(){var a=q("canvas"),b=null;return function(c){null==b&&(b=a.getContext("2d"));var d=c.root;a.width=J.dpr(d.properties.width),a.height=J.dpr(d.properties.height),b.textBaseline="middle",b.fillStyle=d.children.holderBg.properties.fill,b.fillRect(0,0,J.dpr(d.children.holderBg.width),J.dpr(d.children.holderBg.height));{var e=d.children.holderTextGroup;e.properties}b.font=e.properties.font.weight+" "+J.dpr(e.properties.font.size)+e.properties.font.units+" "+e.properties.font.family+", monospace",b.fillStyle=e.properties.fill;for(var f in e.children){var g=e.children[f];for(var h in g.children){var i=g.children[h],j=J.dpr(e.x+g.x+i.x),k=J.dpr(e.y+g.y+i.y+e.properties.leading/2);b.fillText(i.properties.text,j,k)}}return a.toDataURL("image/png")}}(),M=function(){if(b.XMLSerializer){var a=u(),c=s(null,0,0),d=q("rect",E);return c.appendChild(d),function(b,e){var f=b.root;s(c,f.properties.width,f.properties.height);for(var g=c.querySelectorAll("g"),h=0;h<g.length;h++)g[h].parentNode.removeChild(g[h]);var i=e.holderSettings.flags.holderURL,j="holder_"+(Number(new Date)+32768+(0|32768*Math.random())).toString(16),k=q("g",E),l=f.children.holderTextGroup,m=l.properties,n=q("g",E),o=l.textPositionData,p="#"+j+" text { "+z.cssProps({fill:m.fill,"font-weight":m.font.weight,"font-family":m.font.family+", monospace","font-size":m.font.size+m.font.units})+" } ",u=a.createComment("\nSource URL: "+i+H),v=a.createCDATASection(p),w=c.querySelector("style");r(k,{id:j}),c.insertBefore(u,c.firstChild),w.appendChild(v),k.appendChild(d),k.appendChild(n),c.appendChild(k),r(d,{width:f.children.holderBg.width,height:f.children.holderBg.height,fill:f.children.holderBg.properties.fill}),l.y+=.8*o.boundingBox.height;for(var x in l.children){var y=l.children[x];for(var A in y.children){var B=y.children[A],C=l.x+y.x+B.x,D=l.y+y.y+B.y,F=q("text",E),G=document.createTextNode(null);r(F,{x:C,y:D}),G.nodeValue=B.properties.text,F.appendChild(G),n.appendChild(F)}}var I=N(t(c,e.engineSettings),"background"===e.mode);return I}}}(),N=function(){var a="data:image/svg+xml;charset=UTF-8,",b="data:image/svg+xml;charset=UTF-8;base64,";return function(c,d){return d?b+btoa(unescape(encodeURIComponent(c))):a+encodeURIComponent(c)}}();for(var O in J.flags)J.flags.hasOwnProperty(O)&&(J.flags[O].match=function(a){return a.match(this.regex)});J.setup={renderer:"html",debounce:100,ratio:1,supportsCanvas:!1,supportsSVG:!1,lineWrapRatio:.9,renderers:["html","canvas","svg"]},J.dpr=function(a){return a*J.setup.ratio},J.vars={preempted:!1,resizableImages:[],invisibleImages:{},invisibleId:0,visibilityCheckStarted:!1,debounceTimer:null,cache:{},dataAttr:"data-src"},function(){var a=1,c=1,d=q("canvas"),e=null;d.getContext&&-1!=d.toDataURL("image/png").indexOf("data:image/png")&&(J.setup.renderer="canvas",e=d.getContext("2d"),J.setup.supportsCanvas=!0),J.setup.supportsCanvas&&(a=b.devicePixelRatio||1,c=e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1),J.setup.ratio=a/c,document.createElementNS&&document.createElementNS(E,"svg").createSVGRect&&(J.setup.renderer="svg",J.setup.supportsSVG=!0)}(),o(),x&&x(function(){J.vars.preempted||I.run(),b.addEventListener?(b.addEventListener("resize",w,!1),b.addEventListener("orientationchange",w,!1)):b.attachEvent("onresize",w),"object"==typeof b.Turbolinks&&b.document.addEventListener("page:change",function(){I.run()})}),a.exports=I}).call(b,function(){return this}())},function(a){function b(a){function b(a){if(!v){if(!g.body)return e(b);for(v=!0;a=w.shift();)e(a)}}function c(a){(t||a.type===i||g[m]===l)&&(d(),b())}function d(){t?(g[s](q,c,j),a[s](i,c,j)):(g[o](r,c),a[o](k,c))}function e(a,b){setTimeout(a,+b>=0?b:1)}function f(a){v?e(a):w.push(a)}null==document.readyState&&document.addEventListener&&(document.addEventListener("DOMContentLoaded",function y(){document.removeEventListener("DOMContentLoaded",y,!1),document.readyState="complete"},!1),document.readyState="loading");var g=a.document,h=g.documentElement,i="load",j=!1,k="on"+i,l="complete",m="readyState",n="attachEvent",o="detachEvent",p="addEventListener",q="DOMContentLoaded",r="onreadystatechange",s="removeEventListener",t=p in g,u=j,v=j,w=[];if(g[m]===l)e(b);else if(t)g[p](q,c,j),a[p](i,c,j);else{g[n](r,c),a[n](k,c);try{u=null==a.frameElement&&h}catch(x){}u&&u.doScroll&&!function z(){if(!v){try{u.doScroll("left")}catch(a){return e(z,50)}d(),b()}}()}return f.version="1.4.0",f.isReady=function(){return v},f}a.exports="undefined"!=typeof window&&b(window)},function(a,b,c){var d=c(5),e=function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}var c=1,e=d.defclass({constructor:function(a){c++,this.parent=null,this.children={},this.id=c,this.name="n"+c,null!=a&&(this.name=a),this.x=0,this.y=0,this.z=0,this.width=0,this.height=0},resize:function(a,b){null!=a&&(this.width=a),null!=b&&(this.height=b)},moveTo:function(a,b,c){this.x=null!=a?a:this.x,this.y=null!=b?b:this.y,this.z=null!=c?c:this.z},add:function(a){var b=a.name;if(null!=this.children[b])throw"SceneGraph: child with that name already exists: "+b;this.children[b]=a,a.parent=this}}),f=d(e,function(b){this.constructor=function(){b.constructor.call(this,"root"),this.properties=a}}),g=d(e,function(a){function c(c,d){if(a.constructor.call(this,c),this.properties={fill:"#000"},null!=d)b(this.properties,d);else if(null!=c&&"string"!=typeof c)throw"SceneGraph: invalid node name"}this.Group=d.extend(this,{constructor:c,type:"group"}),this.Rect=d.extend(this,{constructor:c,type:"rect"}),this.Text=d.extend(this,{constructor:function(a){c.call(this),this.properties.text=a},type:"text"})}),h=new f;return this.Shape=g,this.root=h,this};a.exports=e},function(a,b){(function(a){b.extend=function(a,b){var c={};for(var d in a)a.hasOwnProperty(d)&&(c[d]=a[d]);if(null!=b)for(var e in b)b.hasOwnProperty(e)&&(c[e]=b[e]);return c},b.cssProps=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+":"+a[c]);return b.join(";")},b.encodeHtmlEntity=function(a){for(var b=[],c=0,d=a.length-1;d>=0;d--)c=a.charCodeAt(d),b.unshift(c>128?["&#",c,";"].join(""):a[d]);return b.join("")},b.getNodeArray=function(b){var c=null;return"string"==typeof b?c=document.querySelectorAll(b):a.NodeList&&b instanceof a.NodeList?c=b:a.Node&&b instanceof a.Node?c=[b]:a.HTMLCollection&&b instanceof a.HTMLCollection?c=b:b instanceof Array?c=b:null===b&&(c=[]),c},b.imageExists=function(a,b){var c=new Image;c.onerror=function(){b.call(this,!1)},c.onload=function(){b.call(this,!0)},c.src=a},b.decodeHtmlEntity=function(a){return a.replace(/&#(\d+);/g,function(a,b){return String.fromCharCode(b)})},b.dimensionCheck=function(a){var b={height:a.clientHeight,width:a.clientWidth};return b.height&&b.width?b:!1},b.truthy=function(a){return"string"==typeof a?"true"===a||"yes"===a||"1"===a||"on"===a||"✓"===a:!!a}}).call(b,function(){return this}())},function(a,b,c){var d=encodeURIComponent,e=decodeURIComponent,f=c(6),g=c(7),h=/(\w+)\[(\d+)\]/,i=/\w+\.\w+/;b.parse=function(a){if("string"!=typeof a)return{};if(a=f(a),""===a)return{};"?"===a.charAt(0)&&(a=a.slice(1));for(var b={},c=a.split("&"),d=0;d<c.length;d++){var g,j,k,l=c[d].split("="),m=e(l[0]);if(g=h.exec(m))b[g[1]]=b[g[1]]||[],b[g[1]][g[2]]=e(l[1]);else if(g=i.test(m)){for(g=m.split("."),j=b;g.length;)if(k=g.shift(),k.length){if(j[k]){if(j[k]&&"object"!=typeof j[k])break}else j[k]={};g.length||(j[k]=e(l[1])),j=j[k]}}else b[l[0]]=null==l[1]?"":e(l[1])}return b},b.stringify=function(a){if(!a)return"";var b=[];for(var c in a){var e=a[c];if("array"!=g(e))b.push(d(c)+"="+d(a[c]));else for(var f=0;f<e.length;++f)b.push(d(c+"["+f+"]")+"="+d(e[f]))}return b.join("&")}},function(a){var b=function(){},c=Array.prototype.slice,d=function(a,d){var e=b.prototype="function"==typeof a?a.prototype:a,f=new b,g=d.apply(f,c.call(arguments,2).concat(e));if("object"==typeof g)for(var h in g)f[h]=g[h];if(!f.hasOwnProperty("constructor"))return f;var i=f.constructor;return i.prototype=f,i};d.defclass=function(a){var b=a.constructor;return b.prototype=a,b},d.extend=function(a,b){return d(a,function(a){return this.uber=a,b})},a.exports=d},function(a,b){function c(a){return a.replace(/^\s*|\s*$/g,"")}b=a.exports=c,b.left=function(a){return a.replace(/^\s*/,"")},b.right=function(a){return a.replace(/\s*$/,"")}},function(a){var b=Object.prototype.toString;a.exports=function(a){switch(b.call(a)){case"[object Date]":return"date";case"[object RegExp]":return"regexp";case"[object Arguments]":return"arguments";case"[object Array]":return"array";case"[object Error]":return"error"}return null===a?"null":void 0===a?"undefined":a!==a?"nan":a&&1===a.nodeType?"element":(a=a.valueOf?a.valueOf():Object.prototype.valueOf.apply(a),typeof a)}}])}),function(a,b){b&&(Holder=a.Holder)}(this,"undefined"!=typeof Meteor&&"undefined"!=typeof Package);