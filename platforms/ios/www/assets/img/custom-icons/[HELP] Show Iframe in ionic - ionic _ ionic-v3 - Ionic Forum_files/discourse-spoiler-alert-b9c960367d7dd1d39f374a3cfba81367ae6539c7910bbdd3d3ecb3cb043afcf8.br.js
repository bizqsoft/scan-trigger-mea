!function(c){var f=document.documentMode,d="undefined"!=typeof InstallTrigger,t={max:{text:10,link:10,image:20},partial:{text:5,link:5,image:6},none:{text:0,link:0,image:0}};function b(e,t){var r=0<t?"blur("+t+"px)":"";f?e.css("-ms-filter","progid:DXImageTransform.Microsoft.Blur(pixelradius="+t+")"):e.css("filter",r).css("-webkit-filter",r)}function n(e,t){var r,i,o,s,n,a,l,p,u;c("div.lazyYT",e).each(function(){c(this).replaceWith("<p>https://youtube.com/watch?v="+c(this).data("youtube-id")+"</p>")}),r=e,i=t.text,o="gray 0 0 "+i+"px",s="-webkit-user-select",f&&(o=i<=0?"0 0 0 0 gray":"0 0 "+i+"px .1px gray",s="-ms-user-select"),d&&(s="-moz-user-select"),r.css("background-color","transparent").css("color","rgba(0,0,0,0)").css("text-shadow",o).css(s,"none"),n=e,a=t.link,c("a",n).addClass("no-track-link"),c("a,pre",n).each(function(e,t){b(c(t),a)}),l=e,p=t.image,u=c("img",l),f?u.css("opacity",0===p?"1.0":"0.0"):b(u,p)}c.fn.spoil=function(e){var s=c.extend(t,e||{});return this.each(function(){var t,e,r,i,o;t=c(this),r=(e=s).max,i=e.partial,o=e.none,t.data("spoiler-state","blurred"),n(t,r),t.on("mouseover",function(){t.css("cursor","pointer"),"blurred"===t.data("spoiler-state")&&n(t,i)}).on("mouseout",function(){"blurred"===t.data("spoiler-state")&&n(t,r)}).on("click",function(e){"blurred"===t.data("spoiler-state")?(t.data("spoiler-state","revealed").css("cursor","auto"),n(t,o),e.preventDefault()):e.target&&"A"!==e.target.tagName&&(t.data("spoiler-state","blurred").css("cursor","pointer"),n(t,i),e.preventDefault())})})}}(jQuery),define("discourse/plugins/discourse-spoiler-alert/initializers/spoiler-alert",["exports","discourse/lib/plugin-api","discourse/lib/to-markdown","discourse/controllers/composer"],function(e,t,s,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e,t,r){return t&&i(e.prototype,t),r&&i(e,r),e};function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){$(".spoiler",e).removeClass("spoiler").addClass("spoiled").spoil()}function a(e){e.decorateCooked(o,{id:"spoiler-alert"}),e.addToolbarPopupMenuOptionsCallback(function(){return{action:"insertSpoiler",icon:"magic",label:"spoiler.title"}}),r.default.reopen({actions:{insertSpoiler:function(){this.get("toolbarEvent").applySurround("[spoiler]","[/spoiler]","spoiler_text",{multiline:!1,useBlockMode:!0})}}}),s.Tag&&(s.Tag.prototype.decorate=function(e){return"spoiled"===this.element.attributes.class&&(this.prefix="[spoiler]",this.suffix="[/spoiler]"),(this.prefix||this.suffix)&&(e=[this.prefix,e,this.suffix].join("")),this.inline&&(e=" "+e+" "),e},s.Tag.block=function(t,r,i){return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(o,s.Tag),n(o,[{key:"decorate",value:function(e){var t=this.element.attributes,r=this.element.parent;return"p"===this.name&&r&&"li"===r.name&&(this.gap=""),"div"===this.name&&"spoiled"===t.class&&(this.prefix="[spoiler]",this.suffix="[/spoiler]",e=e.trim()),""+this.gap+this.prefix+e+this.suffix+this.gap}}]),o;function o(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,t,r,i));return e.gap="\n\n",e}})}e.default={name:"apply-spoilers",initialize:function(e){e.lookup("site-settings:main").spoiler_enabled&&(0,t.withPluginApi)("0.5",a)}}}),define("discourse/plugins/discourse-spoiler-alert/lib/discourse-markdown/spoiler-alert",["exports","pretty-text/pretty-text"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.whiteList(["span.spoiler","div.spoiler"]),e.markdownIt?function(e){e.registerOptions(function(e,t){e.features["spoiler-alert"]=!!t.spoiler_enabled}),e.registerPlugin(function(e){e.inline.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"span.spoiler"}),e.block.bbcode.ruler.push("spoiler",{tag:"spoiler",wrap:"div.spoiler"})})}(e):e.addPreProcessor(o)},(0,t.registerOption)(function(e,t){t.features["spoiler-alert"]=!!e.spoiler_enabled});var i=/\n|<img|!\[[^\]]*\][(\[]/;function r(e,t){var r=i.test(t)?"div":"span";return"<"+r+" class='spoiler'>"+t+"</"+r+">"}function o(e){for(e=e||"";e!==(e=e.replace(/\[spoiler\]((?:(?!\[spoiler\]|\[\/spoiler\])[\S\s])*)\[\/spoiler\]/gi,r)););return e}});
//# sourceMappingURL=https://sjc4.discourse-cdn.com/ionicframework/assets/plugins/discourse-spoiler-alert-b9c960367d7dd1d39f374a3cfba81367ae6539c7910bbdd3d3ecb3cb043afcf8.js.map