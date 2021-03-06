/*         ______________________________________
  ________|                                      |_______
  \       |           SmartAdmin WebApp          |      /
   \      |      Copyright © 2014 MyOrange       |     /
   /      |______________________________________|     \
  /__________)                                (_________\

 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * =======================================================================
 * SmartAdmin is FULLY owned and LICENSED by MYORANGE INC.
 * This script may NOT be RESOLD or REDISTRUBUTED under any
 * circumstances, and is only to be used with this purchased
 * copy of SmartAdmin Template.
 * =======================================================================
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * =======================================================================
 * original filename: app.config.js
 * filesize: 12kb
 * author: Sunny (@bootstraphunt)
 * email: info@myorange.ca
 * =======================================================================
 * 
 * GLOBAL ROOT (DO NOT CHANGE)
 */
	$.root_ = $('body');	
/*
 * APP CONFIGURATION (HTML/AJAX/PHP Versions ONLY)
 * Description: Enable / disable certain theme features here
 * GLOBAL: Your left nav in your app will no longer fire ajax calls, set 
 * it to false for HTML version
 */	
	$.navAsAjax = false; 
/*
 * GLOBAL: Sound Config (define sound path, enable or disable all sounds)
 */
	$.sound_path = "sound/";
	$.sound_on = true; 
/*
 * SAVE INSTANCE REFERENCE (DO NOT CHANGE)
 * Save a reference to the global object (window in the browser)
 */
	var root = this,	
/*
 * DEBUGGING MODE
 * debugState = true; will spit all debuging message inside browser console.
 * The colors are best displayed in chrome browser.
 */
	debugState = false,	
	debugStyle = 'font-weight: bold; color: #00f;',
	debugStyle_green = 'font-weight: bold; font-style:italic; color: #46C246;',
	debugStyle_red = 'font-weight: bold; color: #ed1c24;',
	debugStyle_warning = 'background-color:yellow',
	debugStyle_success = 'background-color:green; font-weight:bold; color:#fff;',
	debugStyle_error = 'background-color:#ed1c24; font-weight:bold; color:#fff;',
/*
 * Impacts the responce rate of some of the responsive elements (lower 
 * value affects CPU but improves speed)
 */
	throttle_delay = 350,
/*
 * The rate at which the menu expands revealing child elements on click
 */
	menu_speed = 235,	
/*
 * Collapse current menu item as other menu items are expanded
 * Careful when using this option, if you have a long menu it will
 * keep expanding and may distrupt the user experience This is best 
 * used with fixed-menu class
 */
	menu_accordion = true,	
/*
 * Turn on JarvisWidget functionality
 * Global JarvisWidget Settings
 * For a greater control of the widgets, please check app.js file
 * found within COMMON_ASSETS/UNMINIFIED_JS folder and see from line 1355
 * dependency: js/jarviswidget/jarvis.widget.min.js
 */
	enableJarvisWidgets = true,
/*
 * Use localstorage to save widget settings
 * turn this off if you prefer to use the onSave hook to save
 * these settings to your datatabse instead
 */	
	localStorageJarvisWidgets = true,
/*
 * Turn off sortable feature for JarvisWidgets 
 */	
	sortableJarvisWidgets = true,		
/*
 * Warning: Enabling mobile widgets could potentially crash your webApp 
 * if you have too many widgets running at once 
 * (must have enableJarvisWidgets = true)
 */
	enableMobileWidgets = false,	
/*
 * Turn on fast click for mobile devices
 * Enable this to activate fastclick plugin
 * dependency: js/plugin/fastclick/fastclick.js 
 */
	fastClick = false,
/*
 * SMARTCHAT PLUGIN ARRAYS & CONFIG
 * Dependency: js/plugin/moment/moment.min.js 
 *             js/plugin/cssemotions/jquery.cssemoticons.min.js 
 *             js/smart-chat-ui/smart.chat.ui.js
 * (DO NOT CHANGE BELOW) 
 */	
	boxList = [],
	showList = [],
 	nameList = [],
	idList = [],
/*
 * Width of the chat boxes, and the gap inbetween in pixel (minus padding)
 */	
	chatbox_config = {
	    width: 200,
	    gap: 35
	},
/*
 * These elements are ignored during DOM object deletion for ajax version 
 * It will delete all objects during page load with these exceptions:
 */
	ignore_key_elms = ["#header, #left-panel, #right-panel, #main, div.page-footer, #shortcut, #divSmallBoxes, #divMiniIcons, #divbigBoxes, #voiceModal, script, .ui-chatbox"],
/*
 * VOICE COMMAND CONFIG
 * dependency: js/speech/voicecommand.js
 */
	voice_command = true,
/*
 * Turns on speech as soon as the page is loaded
 */	
	voice_command_auto = false,
/*
 * 	Sets the language to the default 'en-US'. (supports over 50 languages 
 * 	by google)
 * 
 *  Afrikaans         ['af-ZA']
 *  Bahasa Indonesia  ['id-ID']
 *  Bahasa Melayu     ['ms-MY']
 *  Català            ['ca-ES']
 *  Čeština           ['cs-CZ']
 *  Deutsch           ['de-DE']
 *  English           ['en-AU', 'Australia']
 *                    ['en-CA', 'Canada']
 *                    ['en-IN', 'India']
 *                    ['en-NZ', 'New Zealand']
 *                    ['en-ZA', 'South Africa']
 *                    ['en-GB', 'United Kingdom']
 *                    ['en-US', 'United States']
 *  Español           ['es-AR', 'Argentina']
 *                    ['es-BO', 'Bolivia']
 *                    ['es-CL', 'Chile']
 *                    ['es-CO', 'Colombia']
 *                    ['es-CR', 'Costa Rica']
 *                    ['es-EC', 'Ecuador']
 *                    ['es-SV', 'El Salvador']
 *                    ['es-ES', 'España']
 *                    ['es-US', 'Estados Unidos']
 *                    ['es-GT', 'Guatemala']
 *                    ['es-HN', 'Honduras']
 *                    ['es-MX', 'México']
 *                    ['es-NI', 'Nicaragua']
 *                    ['es-PA', 'Panamá']
 *                    ['es-PY', 'Paraguay']
 *                    ['es-PE', 'Perú']
 *                    ['es-PR', 'Puerto Rico']
 *                    ['es-DO', 'República Dominicana']
 *                    ['es-UY', 'Uruguay']
 *                    ['es-VE', 'Venezuela']
 *  Euskara           ['eu-ES']
 *  Français          ['fr-FR']
 *  Galego            ['gl-ES']
 *  Hrvatski          ['hr_HR']
 *  IsiZulu           ['zu-ZA']
 *  Íslenska          ['is-IS']
 *  Italiano          ['it-IT', 'Italia']
 *                    ['it-CH', 'Svizzera']
 *  Magyar            ['hu-HU']
 *  Nederlands        ['nl-NL']
 *  Norsk bokmål      ['nb-NO']
 *  Polski            ['pl-PL']
 *  Português         ['pt-BR', 'Brasil']
 *                    ['pt-PT', 'Portugal']
 *  Română            ['ro-RO']
 *  Slovenčina        ['sk-SK']
 *  Suomi             ['fi-FI']
 *  Svenska           ['sv-SE']
 *  Türkçe            ['tr-TR']
 *  български         ['bg-BG']
 *  Pусский           ['ru-RU']
 *  Српски            ['sr-RS']
 *  한국어          ['ko-KR']
 *  中文                            ['cmn-Hans-CN', '普通话 (中国大陆)']
 *                    ['cmn-Hans-HK', '普通话 (香港)']
 *                    ['cmn-Hant-TW', '中文 (台灣)']
 *                    ['yue-Hant-HK', '粵語 (香港)']
 *  日本語                         ['ja-JP']
 *  Lingua latīna     ['la']
 */
	voice_command_lang = 'en-US',
/*
 * 	Use localstorage to remember on/off (best used with HTML Version
 * 	when going from one page to the next)
 */	
	voice_localStorage = true;
/*
 * Voice Commands
 * Defines voice command variables and functions
 */	
 	if (voice_command) {
	 		
		var commands = {
					
			'show dashboard' : function() { $('nav a[href="dashboard.html"]').trigger("click"); },
			'show inbox' : function() { $('nav a[href="inbox.html"]').trigger("click"); },
			'show graphs' : function() { $('nav a[href="flot.html"]').trigger("click"); },
			'show flotchart' : function() { $('nav a[href="flot.html"]').trigger("click"); },
			'show morris chart' : function() { $('nav a[href="morris.html"]').trigger("click"); },
			'show inline chart' : function() { $('nav a[href="inline-charts.html"]').trigger("click"); },
			'show dygraphs' : function() { $('nav a[href="dygraphs.html"]').trigger("click"); },
			'show tables' : function() { $('nav a[href="table.html"]').trigger("click"); },
			'show data table' : function() { $('nav a[href="datatables.html"]').trigger("click"); },
			'show jquery grid' : function() { $('nav a[href="jqgrid.html"]').trigger("click"); },
			'show form' : function() { $('nav a[href="form-elements.html"]').trigger("click"); },
			'show form layouts' : function() { $('nav a[href="form-templates.html"]').trigger("click"); },
			'show form validation' : function() { $('nav a[href="validation.html"]').trigger("click"); },
			'show form elements' : function() { $('nav a[href="bootstrap-forms.html"]').trigger("click"); },
			'show form plugins' : function() { $('nav a[href="plugins.html"]').trigger("click"); },
			'show form wizards' : function() { $('nav a[href="wizards.html"]').trigger("click"); },
			'show bootstrap editor' : function() { $('nav a[href="other-editors.html"]').trigger("click"); },
			'show dropzone' : function() { $('nav a[href="dropzone.html"]').trigger("click"); },
			'show image cropping' : function() { $('nav a[href="image-editor.html"]').trigger("click"); },
			'show general elements' : function() { $('nav a[href="general-elements.html"]').trigger("click"); },
			'show buttons' : function() { $('nav a[href="buttons.html"]').trigger("click"); },
			'show fontawesome' : function() { $('nav a[href="fa.html"]').trigger("click"); },
			'show glyph icons' : function() { $('nav a[href="glyph.html"]').trigger("click"); },
			'show flags' : function() { $('nav a[href="flags.html"]').trigger("click"); },
			'show grid' : function() { $('nav a[href="grid.html"]').trigger("click"); },
			'show tree view' : function() { $('nav a[href="treeview.html"]').trigger("click"); },
			'show nestable lists' : function() { $('nav a[href="nestable-list.html"]').trigger("click"); },
			'show jquery U I' : function() { $('nav a[href="jqui.html"]').trigger("click"); },
			'show typography' : function() { $('nav a[href="typography.html"]').trigger("click"); },
			'show calendar' : function() { $('nav a[href="calendar.html"]').trigger("click"); },
			'show widgets' : function() { $('nav a[href="widgets.html"]').trigger("click"); },
			'show gallery' : function() { $('nav a[href="gallery.html"]').trigger("click"); },
			'show maps' : function() { $('nav a[href="gmap-xml.html"]').trigger("click"); },
			'show pricing tables' : function() { $('nav a[href="pricing-table.html"]').trigger("click"); },
			'show invoice' : function() { $('nav a[href="invoice.html"]').trigger("click"); },
			'show search' : function() { $('nav a[href="search.html"]').trigger("click"); },
			'go back' :  function() { history.back(1); }, 
			'scroll up' : function () { $('html, body').animate({ scrollTop: 0 }, 100); },
			'scroll down' : function () { $('html, body').animate({ scrollTop: $(document).height() }, 100);},
			'hide navigation' : function() { 
				if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")){
					$('span.minifyme').trigger("click");
				} else {
					$('#hide-menu > span > a').trigger("click"); 
				}
			},
			'show navigation' : function() { 
				if ($.root_.hasClass("container") && !$.root_.hasClass("menu-on-top")){
					$('span.minifyme').trigger("click");
				} else {
					$('#hide-menu > span > a').trigger("click"); 
				}
			},
			'mute' : function() {
				$.sound_on = false;
				$.smallBox({
					title : "MUTE",
					content : "All sounds have been muted!",
					color : "#a90329",
					timeout: 4000,
					icon : "fa fa-volume-off"
				});
			},
			'sound on' : function() {
				$.sound_on = true;
				$.speechApp.playConfirmation();
				$.smallBox({
					title : "UNMUTE",
					content : "All sounds have been turned on!",
					color : "#40ac2b",
					sound_file: 'voice_alert',
					timeout: 5000,
					icon : "fa fa-volume-up"
				});
			},
			'stop' : function() {
				smartSpeechRecognition.abort();
				$.root_.removeClass("voice-command-active");
				$.smallBox({
					title : "VOICE COMMAND OFF",
					content : "Your voice commands has been successfully turned off. Click on the <i class='fa fa-microphone fa-lg fa-fw'></i> icon to turn it back on.",
					color : "#40ac2b",
					sound_file: 'voice_off',
					timeout: 8000,
					icon : "fa fa-microphone-slash"
				});
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			},
			'help' : function() {
				$('#voiceModal').removeData('modal').modal( { remote: "ajax/modal-content/modal-voicecommand.html", show: true } );
				if ($('#speech-btn .popover').is(':visible')) {
					$('#speech-btn .popover').fadeOut(250);
				}
			},		
			'got it' : function() {
				$('#voiceModal').modal('hide');
			},	
			'logout' : function() {
				$.speechApp.stop();
				window.location = $('#logout > span > a').attr("href");
			}
		}; 
		
	};
/*
 * END APP.CONFIG
 */ 
 
 
 
 
 	
/*! SmartAdmin - v1.5.1 - 2014-11-15 */if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={"WebkitTransition":"webkitTransitionEnd","MozTransition":"transitionend","OTransition":"oTransitionEnd otransitionend","transition":"transitionend"};for(var c in b)if(void 0!==a.style[c])return{"end":b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={"bindType":a.support.transition.end,"delegateType":a.support.transition.end,"handle":function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.1",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.1",c.DEFAULTS={"loadingText":"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active"));a&&this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=600,c.DEFAULTS={"interval":5e3,"pause":"hover","wrap":!0,"keyboard":!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c="prev"==a?-1:1,d=this.getItemIndex(b),e=(d+c)%this.$items.length;return this.$items.eq(e)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i="next"==b?"first":"last",j=this;if(!f.length){if(!this.options.wrap)return;f=this.$element.find(".item")[i]()}if(f.hasClass("active"))return this.sliding=!1;var k=f[0],l=a.Event("slide.bs.carousel",{"relatedTarget":k,"direction":h});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var m=a(this.$indicators.children()[this.getItemIndex(f)]);m&&m.addClass("active")}var n=a.Event("slid.bs.carousel",{"relatedTarget":k,"direction":h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),j.sliding=!1,setTimeout(function(){j.$element.trigger(n)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(n)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&"show"==b&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a(this.options.trigger).filter('[href="#'+b.id+'"], [data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.1",d.TRANSITION_DURATION=350,d.DEFAULTS={"toggle":!0,"trigger":'[data-toggle="collapse"]'},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":a.extend({},e.data(),{"trigger":this});c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){b&&3===b.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=c(d),f={"relatedTarget":this};e.hasClass("open")&&(e.trigger(b=a.Event("hide.bs.dropdown",f)),b.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f)))}))}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.1",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={"relatedTarget":this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(b){if(/(38|40|27|32)/.test(b.which)&&!/input|textarea/i.test(b.target.tagName)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var e=c(d),g=e.hasClass("open");if(!g&&27!=b.which||g&&27==b.which)return 27==b.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.divider):visible a",i=e.find('[role="menu"]'+h+', [role="listbox"]'+h);if(i.length){var j=i.index(b.target);38==b.which&&j>0&&j--,40==b.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',g.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.1",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={"backdrop":!0,"keyboard":!0,"show":!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{"relatedTarget":b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.options.backdrop&&d.adjustBackdrop(),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in").attr("aria-hidden",!1),d.enforceFocus();var f=a.Event("shown.bs.modal",{"relatedTarget":b});e?d.$element.find(".modal-dialog").one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a('<div class="modal-backdrop '+e+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()},c.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({"paddingLeft":!this.bodyIsOverflowing&&a?this.scrollbarWidth:"","paddingRight":this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({"paddingLeft":"","paddingRight":""})},c.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right","")},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({"remote":!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.tooltip",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.DEFAULTS={"animation":!0,"placement":"top","selector":!1,"template":'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',"trigger":"hover focus","title":"","delay":0,"html":!1,"container":!1,"viewport":{"selector":"body","padding":0}},c.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(this.options.viewport.selector||this.options.viewport);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{"trigger":"manual","selector":""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={"show":b.delay,"hide":b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c&&c.$tip&&c.$tip.is(":visible")?void(c.hoverState="in"):(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({"top":0,"left":0,"display":"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.options.container?a(this.options.container):this.$element.parent(),p=this.getPosition(o);h="bottom"==h&&k.bottom+m>p.bottom?"top":"top"==h&&k.top-m<p.top?"bottom":"right"==h&&k.right+l>p.width?"left":"left"==h&&k.left-l<p.left?"right":h,f.removeClass(n).addClass(h)}var q=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(q,h);var r=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",r).emulateTransitionEnd(c.TRANSITION_DURATION):r()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top=b.top+g,b.left=b.left+h,a.offset.setOffset(d[0],a.extend({"using":function(a){d.css({"top":Math.round(a.top),"left":Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=this.tip(),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{"width":e.right-e.left,"height":e.bottom-e.top}));var f=d?{"top":0,"left":0}:b.offset(),g={"scroll":d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{"width":a(window).width(),"height":a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{"top":b.top+b.height,"left":b.left+b.width/2-c/2}:"top"==a?{"top":b.top-d,"left":b.left+b.width/2-c/2}:"left"==a?{"top":b.top+b.height/2-d/2,"left":b.left-c}:{"top":b.top+b.height/2-d/2,"left":b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={"top":0,"left":0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.width&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type)})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b,g=f&&f.selector;(e||"destroy"!=b)&&(g?(e||d.data("bs.popover",e={}),e[g]||(e[g]=new c(this,f))):e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.1",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{"placement":"right","trigger":"click","content":"","template":'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},c.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){var e=a.proxy(this.process,this);this.$body=a("body"),this.$scrollElement=a(a(c).is("body")?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.1",b.DEFAULTS={"offset":10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b="offset",c=0;a.isWindow(this.$scrollElement[0])||(b="position",c=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var d=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+c,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){d.offsets.push(this[0]),d.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.1",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{"relatedTarget":b[0]}),g=a.Event("show.bs.tab",{"relatedTarget":e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);
this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({"type":"hidden.bs.tab","relatedTarget":b[0]}),b.trigger({"type":"shown.bs.tab","relatedTarget":e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.1",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={"offset":0,"target":window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=i?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=a("body").height();"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({"top":g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*! SmartAdmin - v1.5 - 2014-09-27 */!function(a){a.extend(a.fn,{"validate":function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.validateDelegate(":submit","click",function(b){c.settings.submitHandler&&(c.submitButton=b.target),a(b.target).hasClass("cancel")&&(c.cancelSubmit=!0)}),this.submit(function(b){function d(){var d;return c.settings.submitHandler?(c.submitButton&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)),c.settings.submitHandler.call(c,c.currentForm,b),c.submitButton&&d.remove(),!1):!0}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},"valid":function(){if(a(this[0]).is("form"))return this.validate().form();var b=!0,c=a(this[0].form).validate();return this.each(function(){b&=c.element(this)}),b},"removeAttrs":function(b){var c={},d=this;return a.each(b.split(/\s/),function(a,b){c[b]=d.attr(b),d.removeAttr(b)}),c},"rules":function(b,c){var d=this[0];if(b){var e=a.data(d.form,"validator").settings,f=e.rules,g=a.validator.staticRules(d);switch(b){case"add":a.extend(g,a.validator.normalizeRule(c)),f[d.name]=g,c.messages&&(e.messages[d.name]=a.extend(e.messages[d.name],c.messages));break;case"remove":if(!c)return delete f[d.name],g;var h={};return a.each(c.split(/\s/),function(a,b){h[b]=g[b],delete g[b]}),h}}var i=a.validator.normalizeRules(a.extend({},a.validator.classRules(d),a.validator.attributeRules(d),a.validator.dataRules(d),a.validator.staticRules(d)),d);if(i.required){var j=i.required;delete i.required,i=a.extend({"required":j},i)}return i}}),a.extend(a.expr[":"],{"blank":function(b){return!a.trim(""+b.value)},"filled":function(b){return!!a.trim(""+b.value)},"unchecked":function(a){return!a.checked}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{"defaults":{"messages":{},"groups":{},"rules":{},"errorClass":"invalid","validClass":"valid","errorElement":"em","focusInvalid":!0,"errorContainer":a([]),"errorLabelContainer":a([]),"onsubmit":!0,"ignore":":hidden","ignoreTitle":!1,"onfocusin":function(a){this.lastActive=a,this.settings.focusCleanup&&!this.blockFocusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.addWrapper(this.errorsFor(a)).hide())},"onfocusout":function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},"onkeyup":function(a,b){(9!==b.which||""!==this.elementValue(a))&&(a.name in this.submitted||a===this.lastElement)&&this.element(a)},"onclick":function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},"highlight":function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d).parent().addClass("state-error").removeClass("state-success"):a(b).addClass(c).removeClass(d).parent().addClass("state-error").removeClass("state-success")},"unhighlight":function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d).parent().addClass("state-success").removeClass("state-error"):a(b).removeClass(c).addClass(d).parent().addClass("state-success").removeClass("state-error")}},"setDefaults":function(b){a.extend(a.validator.defaults,b)},"messages":{"required":"This field is required","remote":"Please fix this field","email":"Please enter a valid email address","url":"Please enter a valid URL","date":"Please enter a valid date","dateISO":"Please enter a valid date (ISO)","number":"Please enter a valid number","digits":"Please enter only digits","creditcard":"Please enter a valid credit card number","equalTo":"Please enter the same value again","maxlength":a.validator.format("Please enter no more than {0} characters"),"minlength":a.validator.format("Please enter at least {0} characters"),"rangelength":a.validator.format("Please enter a value between {0} and {1} characters long"),"range":a.validator.format("Please enter a value between {0} and {1}"),"max":a.validator.format("Please enter a value less than or equal to {0}"),"min":a.validator.format("Please enter a value greater than or equal to {0}")},"autoCreateRanges":!1,"prototype":{"init":function(){function b(b){var c=a.data(this[0].form,"validator"),d="on"+b.type.replace(/^validate/,"");c.settings[d]&&c.settings[d].call(c,this[0],b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c=this.groups={};a.each(this.settings.groups,function(b,d){"string"==typeof d&&(d=d.split(/\s/)),a.each(d,function(a,d){c[d]=b})});var d=this.settings.rules;a.each(d,function(b,c){d[b]=a.validator.normalizeRule(c)}),a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ","focusin focusout keyup",b).validateDelegate("[type='radio'], [type='checkbox'], select, option","click",b),this.settings.invalidHandler&&a(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler)},"form":function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},"checkForm":function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},"element":function(b){b=this.validationTargetFor(this.clean(b)),this.lastElement=b,this.prepareElement(b),this.currentElements=a(b);var c=this.check(b)!==!1;return c?delete this.invalid[b.name]:this.invalid[b.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),c},"showErrors":function(b){if(b){a.extend(this.errorMap,b),this.errorList=[];for(var c in b)this.errorList.push({"message":b[c],"element":this.findByName(c)[0]});this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},"resetForm":function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue")},"numberOfInvalids":function(){return this.objectLength(this.invalid)},"objectLength":function(a){var b=0;for(var c in a)b++;return b},"hideErrors":function(){this.addWrapper(this.toHide).hide()},"valid":function(){return 0===this.size()},"size":function(){return this.errorList.length},"focusInvalid":function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},"findLastActive":function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},"elements":function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){return!this.name&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in c||!b.objectLength(a(this).rules())?!1:(c[this.name]=!0,!0)})},"clean":function(b){return a(b)[0]},"errors":function(){var b=this.settings.errorClass.replace(" ",".");return a(this.settings.errorElement+"."+b,this.errorContext)},"reset":function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([]),this.currentElements=a([])},"prepareForm":function(){this.reset(),this.toHide=this.errors().add(this.containers)},"prepareElement":function(a){this.reset(),this.toHide=this.errorsFor(a)},"elementValue":function(b){var c=a(b).attr("type"),d=a(b).val();return"radio"===c||"checkbox"===c?a("input[name='"+a(b).attr("name")+"']:checked").val():"string"==typeof d?d.replace(/\r/g,""):d},"check":function(b){b=this.validationTargetFor(this.clean(b));var c,d=a(b).rules(),e=!1,f=this.elementValue(b);for(var g in d){var h={"method":g,"parameters":d[g]};try{if(c=a.validator.methods[g].call(this,f,b,h.parameters),"dependency-mismatch"===c){e=!0;continue}if(e=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,h),!1}catch(i){throw this.settings.debug&&window.console&&console.log("Exception occured when checking element "+b.id+", check the '"+h.method+"' method.",i),i}}return e?void 0:(this.objectLength(d)&&this.successList.push(b),!0)},"customDataMessage":function(b,c){return a(b).data("msg-"+c.toLowerCase())||b.attributes&&a(b).attr("data-msg-"+c.toLowerCase())},"customMessage":function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},"findDefined":function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a];return void 0},"defaultMessage":function(b,c){return this.findDefined(this.customMessage(b.name,c),this.customDataMessage(b,c),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c],"<strong>Warning: No message defined for "+b.name+"</strong>")},"formatAndAdd":function(b,c){var d=this.defaultMessage(b,c.method),e=/\$?\{(\d+)\}/g;"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),this.errorList.push({"message":d,"element":b}),this.errorMap[b.name]=d,this.submitted[b.name]=d},"addWrapper":function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},"defaultShowErrors":function(){var a,b;for(a=0;this.errorList[a];a++){var c=this.errorList[a];this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message)}if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},"validElements":function(){return this.currentElements.not(this.invalidElements())},"invalidElements":function(){return a(this.errorList).map(function(){return this.element})},"showLabel":function(b,c){var d=this.errorsFor(b);d.length?(d.removeClass(this.settings.validClass).addClass(this.settings.errorClass),d.html(c)):(d=a("<"+this.settings.errorElement+">").attr("for",this.idOrName(b)).addClass(this.settings.errorClass).html(c||""),this.settings.wrapper&&(d=d.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.append(d).length||(this.settings.errorPlacement?this.settings.errorPlacement(d,a(b)):d.insertAfter(b))),!c&&this.settings.success&&(d.text(""),"string"==typeof this.settings.success?d.addClass(this.settings.success):this.settings.success(d,b)),this.toShow=this.toShow.add(d)},"errorsFor":function(b){var c=this.idOrName(b);return this.errors().filter(function(){return a(this).attr("for")===c})},"idOrName":function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},"validationTargetFor":function(a){return this.checkable(a)&&(a=this.findByName(a.name).not(this.settings.ignore)[0]),a},"checkable":function(a){return/radio|checkbox/i.test(a.type)},"findByName":function(b){return a(this.currentForm).find("[name='"+b+"']")},"getLength":function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},"depend":function(a,b){return this.dependTypes[typeof a]?this.dependTypes[typeof a](a,b):!0},"dependTypes":{"boolean":function(a){return a},"string":function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},"optional":function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},"startRequest":function(a){this.pending[a.name]||(this.pendingRequest++,this.pending[a.name]=!0)},"stopRequest":function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},"previousValue":function(b){return a.data(b,"previousValue")||a.data(b,"previousValue",{"old":null,"valid":!0,"message":this.defaultMessage(b,"remote")})}},"classRuleSettings":{"required":{"required":!0},"email":{"email":!0},"url":{"url":!0},"date":{"date":!0},"dateISO":{"dateISO":!0},"number":{"number":!0},"digits":{"digits":!0},"creditcard":{"creditcard":!0}},"addClassRules":function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},"classRules":function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},"attributeRules":function(b){var c={},d=a(b);for(var e in a.validator.methods){var f;"required"===e?(f=d.get(0).getAttribute(e),""===f&&(f=!0),f=!!f):f=d.attr(e),f?c[e]=f:d[0].getAttribute("type")===e&&(c[e]=!0)}return c.maxlength&&/-1|2147483647|524288/.test(c.maxlength)&&delete c.maxlength,c},"dataRules":function(b){var c,d,e={},f=a(b);for(c in a.validator.methods)d=f.data("rule-"+c.toLowerCase()),void 0!==d&&(e[c]=d);return e},"staticRules":function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},"normalizeRules":function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0!==e.param?e.param:!0:delete b[d]}}),a.each(b,function(d,e){b[d]=a.isFunction(e)?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(b.min&&b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),b.minlength&&b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},"normalizeRule":function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},"addMethod":function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},"methods":{"required":function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:a.trim(b).length>0},"remote":function(b,c,d){if(this.optional(c))return"dependency-mismatch";var e=this.previousValue(c);if(this.settings.messages[c.name]||(this.settings.messages[c.name]={}),e.originalMessage=this.settings.messages[c.name].remote,this.settings.messages[c.name].remote=e.message,d="string"==typeof d&&{"url":d}||d,e.old===b)return e.valid;e.old=b;var f=this;this.startRequest(c);var g={};return g[c.name]=b,a.ajax(a.extend(!0,{"url":d,"mode":"abort","port":"validate"+c.name,"dataType":"json","data":g,"success":function(d){f.settings.messages[c.name].remote=e.originalMessage;var g=d===!0||"true"===d;if(g){var h=f.formSubmitted;f.prepareElement(c),f.formSubmitted=h,f.successList.push(c),delete f.invalid[c.name],f.showErrors()}else{var i={},j=d||f.defaultMessage(c,"remote");i[c.name]=e.message=a.isFunction(j)?j(b):j,f.invalid[c.name]=!0,f.showErrors(i)}e.valid=g,f.stopRequest(c,g)}},d)),"pending"},"minlength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d},"maxlength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||d>=e},"rangelength":function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(a.trim(b),c);return this.optional(c)||e>=d[0]&&e<=d[1]},"min":function(a,b,c){return this.optional(b)||a>=c},"max":function(a,b,c){return this.optional(b)||c>=a},"range":function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},"email":function(a,b){return this.optional(b)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)},"url":function(a,b){return this.optional(b)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)},"date":function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},"dateISO":function(a,b){return this.optional(b)||/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)},"number":function(a,b){return this.optional(b)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},"digits":function(a,b){return this.optional(b)||/^\d+$/.test(a)},"creditcard":function(a,b){if(this.optional(b))return"dependency-mismatch";if(/[^0-9 \-]+/.test(a))return!1;var c=0,d=0,e=!1;a=a.replace(/\D/g,"");for(var f=a.length-1;f>=0;f--){var g=a.charAt(f);d=parseInt(g,10),e&&(d*=2)>9&&(d-=9),c+=d,e=!e}return c%10===0},"equalTo":function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()}}}),a.format=a.validator.format}(jQuery),function(a){var b={};if(a.ajaxPrefilter)a.ajaxPrefilter(function(a,c,d){var e=a.port;"abort"===a.mode&&(b[e]&&b[e].abort(),b[e]=d)});else{var c=a.ajax;a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(b[f]&&b[f].abort(),b[f]=c.apply(this,arguments)):c.apply(this,arguments)}}}(jQuery),function(a){a.extend(a.fn,{"validateDelegate":function(b,c,d){return this.bind(c,function(c){var e=a(c.target);return e.is(b)?d.apply(e,arguments):void 0})}})}(jQuery);
/*! SmartAdmin - v1.5 - 2014-09-27 */ ! function (a, b, c, d) {
    function e(b, c) {
        this.obj = a(b), this.o = a.extend({}, a.fn[f].defaults, c), this.objId = this.obj.attr("id"), this.pwCtrls = ".jarviswidget-ctrls", this.widget = this.obj.find(this.o.widgets), this.toggleClass = this.o.toggleClass.split("|"), this.editClass = this.o.editClass.split("|"), this.fullscreenClass = this.o.fullscreenClass.split("|"), this.customClass = this.o.customClass.split("|"), this.storage = {
            "enabled": this.o.localStorage
        }, this.initialized = !1, this.init()
    }
    var f = "jarvisWidgets",
        g = ("ontouchstart" in b || b.DocumentTouch && c instanceof DocumentTouch ? "touchstart" : "click") + "." + f;
    e.prototype = {
        "_runLoaderWidget": function (a) {
            var b = this;
            b.o.indicator === !0 && a.parents(b.o.widgets).find(".jarviswidget-loader:first").stop(!0, !0).fadeIn(100).delay(b.o.indicatorTime).fadeOut(100)
        },
        "_getPastTimestamp": function (a) {
            var b = this,
                c = new Date(a),
                d = c.getMonth() + 1,
                e = c.getDate(),
                f = c.getFullYear(),
                g = c.getHours(),
                h = c.getMinutes(),
                i = c.getUTCSeconds();
            10 > d && (d = "0" + d), 10 > e && (e = "0" + e), 10 > g && (g = "0" + g), 10 > h && (h = "0" + h), 10 > i && (i = "0" + i);
            var j = b.o.timestampFormat.replace(/%d%/g, e).replace(/%m%/g, d).replace(/%y%/g, f).replace(/%h%/g, g).replace(/%i%/g, h).replace(/%s%/g, i);
            return j
        },
        "_loadAjaxFile": function (b, c, d) {
            var e = this;
            b.find(".widget-body").load(c, function (c, d, f) {
                var g = a(this);
                if ("error" == d && g.html('<h4 class="alert alert-danger">' + e.o.labelError + "<b> " + f.status + " " + f.statusText + "</b></h4>"), "success" == d) {
                    var h = b.find(e.o.timestampPlaceholder);
                    h.length && h.html(e._getPastTimestamp(new Date)), "function" == typeof e.o.afterLoad && e.o.afterLoad.call(this, b)
                }
                e = null
            }), this._runLoaderWidget(d)
        },
        "_loadKeys": function () {
            var a = this;
            
            console.log('***a***' + a.objId);
            if (a.o.ajaxnav === !0) {
                var b = location.hash.replace(/^#/, "");
                a.storage.keySettings = "Plugin_settings_" + b + "_" + a.objId, a.storage.keyPosition = "Plugin_position_" + b + "_" + a.objId
            } else if (a.initialized === !1) {
                console.log('***_loadKeys*');
                var b = a.o.pageKey || location.pathname;
                console.log('***a.o.pageKey*' + a.o.pageKey);
                console.log('***location.pathname*' + location.pathname);
                a.storage.keySettings = "jarvisWidgets_settings_" + b + "_" + a.objId, a.storage.keyPosition = "jarvisWidgets_position_" + a.o.uniquename + "_" + a.objId
            }
        },
        "_saveSettingsWidget": function () {
            var b = this,
                c = b.storage;
            b._loadKeys();
            var d = b.obj.find(b.o.widgets).map(function () {
                var b = {};
                return b.id = a(this).attr("id"), b.style = a(this).attr("data-widget-attstyle"), b.title = a(this).children("header").children("h2").text(), b.hidden = "none" == a(this).css("display") ? 1 : 0, b.collapsed = a(this).hasClass("jarviswidget-collapsed") ? 1 : 0, b
            }).get(),
                e = JSON.stringify({
                    "widget": d
                });
            c.enabled && c.getKeySettings != e && (localStorage.setItem(c.keySettings, e), c.getKeySettings = e), "function" == typeof b.o.onSave && b.o.onSave.call(this, null, e, c.keySettings)
        },
        "_savePositionWidget": function () {
            var b = this,
                c = b.storage;
            b._loadKeys();
            var d = b.obj.find(b.o.grid + ".sortable-grid").map(function () {
                console.log('------=' + a(this).html);
                console.log('---#$#%$%---=' + a(this).children(b.o.widgets).html);
                var c = a(this).children(b.o.widgets).map(function () {
                    console.log('&&&&&&&&a=' + a(this).attr("id"));
                    return {
                        "id": a(this).attr("id")
                    }
                }).get();
                return {
                    "section": c
                }
            }).get(),
                e = JSON.stringify({
                    "grid": d
                });
            console.log('****c.enabled==' + c.enabled);
            console.log('******eeee*******' + d);
            console.log('******eeee*******'+e);
            c.enabled && c.getKeyPosition != e && (localStorage.setItem(c.keyPosition, e), c.getKeyPosition = e), "function" == typeof b.o.onSave && b.o.onSave.call(this, e, c.keyPosition)
        },
        "init": function () {
            var b = this;
            if (!b.initialized) {
                if (b._initStorage(b.storage), a("#" + b.objId).length || alert("It looks like your using a class instead of an ID, dont do that!"), b.o.rtl === !0 && a("body").addClass("rtl"), a(b.o.grid).each(function () {
                        a(this).find(b.o.widgets).length && a(this).addClass("sortable-grid")
                }), b.storage.enabled && b.storage.getKeyPosition) {
                    var c = JSON.parse(b.storage.getKeyPosition);
                    for (var e in c.grid) {
                        var h = b.obj.find(b.o.grid + ".sortable-grid").eq(e);
                        for (var i in c.grid[e].section) h.append(a("#" + c.grid[e].section[i].id))
                    }
                }
                if (b.storage.enabled && b.storage.getKeySettings) {
                    var j = JSON.parse(b.storage.getKeySettings);
                    for (var e in j.widget) {
                        var k = a("#" + j.widget[e].id);
                        j.widget[e].style && k.removeClassPrefix("jarviswidget-color-").addClass(j.widget[e].style).attr("data-widget-attstyle", "" + j.widget[e].style), 1 == j.widget[e].hidden ? k.hide(1) : k.show(1).removeAttr("data-widget-hidden"), 1 == j.widget[e].collapsed && k.addClass("jarviswidget-collapsed").children("div").hide(1), k.children("header").children("h2").text() != j.widget[e].title && k.children("header").children("h2").text(j.widget[e].title)
                    }
                }
                if (b.widget.each(function () {
                        var c, e, f, g, h, i, j, k, l = a(this),
                            m = a(this).children("header");
                        if (!m.parent().attr("role")) {
                            l.data("widget-hidden") === !0 && l.hide(), l.data("widget-collapsed") === !0 && l.addClass("jarviswidget-collapsed").children("div").hide(), c = b.o.customButton === !0 && l.data("widget-custombutton") === d && 0 !== b.customClass[0].length ? '<a href="javascript:void(0);" class="button-icon jarviswidget-custom-btn"><i class="' + b.customClass[0] + '"></i></a>' : "", e = b.o.deleteButton === !0 && l.data("widget-deletebutton") === d ? '<a href="javascript:void(0);" class="button-icon jarviswidget-delete-btn" rel="tooltip" title="Delete" data-placement="bottom"><i class="' + b.o.deleteClass + '"></i></a>' : "", f = b.o.editButton === !0 && l.data("widget-editbutton") === d ? '<a href="javascript:void(0);" class="button-icon jarviswidget-edit-btn" rel="tooltip" title="Edit" data-placement="bottom"><i class="' + b.editClass[0] + '"></i></a>' : "", g = b.o.fullscreenButton === !0 && l.data("widget-fullscreenbutton") === d ? '<a href="javascript:void(0);" class="button-icon jarviswidget-fullscreen-btn" rel="tooltip" title="Fullscreen" data-placement="bottom"><i class="' + b.fullscreenClass[0] + '"></i></a>' : "", b.o.colorButton === !0 && l.data("widget-colorbutton") === d ? (h = '<a data-toggle="dropdown" class="dropdown-toggle color-box selector" href="javascript:void(0);"></a><ul class="dropdown-menu arrow-box-up-right color-select pull-right"><li><span class="bg-color-green" data-widget-setstyle="jarviswidget-color-green" rel="tooltip" data-placement="left" data-original-title="Green Grass"></span></li><li><span class="bg-color-greenDark" data-widget-setstyle="jarviswidget-color-greenDark" rel="tooltip" data-placement="top" data-original-title="Dark Green"></span></li><li><span class="bg-color-greenLight" data-widget-setstyle="jarviswidget-color-greenLight" rel="tooltip" data-placement="top" data-original-title="Light Green"></span></li><li><span class="bg-color-purple" data-widget-setstyle="jarviswidget-color-purple" rel="tooltip" data-placement="top" data-original-title="Purple"></span></li><li><span class="bg-color-magenta" data-widget-setstyle="jarviswidget-color-magenta" rel="tooltip" data-placement="top" data-original-title="Magenta"></span></li><li><span class="bg-color-pink" data-widget-setstyle="jarviswidget-color-pink" rel="tooltip" data-placement="right" data-original-title="Pink"></span></li><li><span class="bg-color-pinkDark" data-widget-setstyle="jarviswidget-color-pinkDark" rel="tooltip" data-placement="left" data-original-title="Fade Pink"></span></li><li><span class="bg-color-blueLight" data-widget-setstyle="jarviswidget-color-blueLight" rel="tooltip" data-placement="top" data-original-title="Light Blue"></span></li><li><span class="bg-color-teal" data-widget-setstyle="jarviswidget-color-teal" rel="tooltip" data-placement="top" data-original-title="Teal"></span></li><li><span class="bg-color-blue" data-widget-setstyle="jarviswidget-color-blue" rel="tooltip" data-placement="top" data-original-title="Ocean Blue"></span></li><li><span class="bg-color-blueDark" data-widget-setstyle="jarviswidget-color-blueDark" rel="tooltip" data-placement="top" data-original-title="Night Sky"></span></li><li><span class="bg-color-darken" data-widget-setstyle="jarviswidget-color-darken" rel="tooltip" data-placement="right" data-original-title="Night"></span></li><li><span class="bg-color-yellow" data-widget-setstyle="jarviswidget-color-yellow" rel="tooltip" data-placement="left" data-original-title="Day Light"></span></li><li><span class="bg-color-orange" data-widget-setstyle="jarviswidget-color-orange" rel="tooltip" data-placement="bottom" data-original-title="Orange"></span></li><li><span class="bg-color-orangeDark" data-widget-setstyle="jarviswidget-color-orangeDark" rel="tooltip" data-placement="bottom" data-original-title="Dark Orange"></span></li><li><span class="bg-color-red" data-widget-setstyle="jarviswidget-color-red" rel="tooltip" data-placement="bottom" data-original-title="Red Rose"></span></li><li><span class="bg-color-redLight" data-widget-setstyle="jarviswidget-color-redLight" rel="tooltip" data-placement="bottom" data-original-title="Light Red"></span></li><li><span class="bg-color-white" data-widget-setstyle="jarviswidget-color-white" rel="tooltip" data-placement="right" data-original-title="Purity"></span></li><li><a href="javascript:void(0);" class="jarviswidget-remove-colors" data-widget-setstyle="" rel="tooltip" data-placement="bottom" data-original-title="Reset widget color to default">Remove</a></li></ul>', m.prepend('<div class="widget-toolbar">' + h + "</div>")) : h = "", b.o.toggleButton === !0 && l.data("widget-togglebutton") === d ? (j = l.data("widget-collapsed") === !0 || l.hasClass("jarviswidget-collapsed") ? b.toggleClass[1] : b.toggleClass[0], i = '<a href="javascript:void(0);" class="button-icon jarviswidget-toggle-btn" rel="tooltip" title="Collapse" data-placement="bottom"><i class="' + j + '"></i></a>') : i = "", k = b.o.refreshButton === !0 && l.data("widget-refreshbutton") !== !1 && l.data("widget-load") ? '<a href="javascript:void(0);" class="button-icon jarviswidget-refresh-btn" data-loading-text="&nbsp;&nbsp;Loading...&nbsp;" rel="tooltip" title="Refresh" data-placement="bottom"><i class="' + b.o.refreshButtonClass + '"></i></a>' : "";
                            var n = b.o.buttonOrder.replace(/%refresh%/g, k).replace(/%delete%/g, e).replace(/%custom%/g, c).replace(/%fullscreen%/g, g).replace(/%edit%/g, f).replace(/%toggle%/g, i);
                            ("" !== k || "" !== e || "" !== c || "" !== g || "" !== f || "" !== i) && m.prepend('<div class="jarviswidget-ctrls">' + n + "</div>"), b.o.sortable === !0 && l.data("widget-sortable") === d && l.addClass("jarviswidget-sortable"), l.find(b.o.editPlaceholder).length && l.find(b.o.editPlaceholder).find("input").val(a.trim(m.children("h2").text())), m.append('<span class="jarviswidget-loader"><i class="fa fa-refresh fa-spin"></i></span>'), l.attr("role", "widget").children("div").attr("role", "content").prev("header").attr("role", "heading").children("div").attr("role", "menu")
                }
                }), b.o.buttonsHidden === !0 && a(b.o.pwCtrls).hide(), a(".jarviswidget header [rel=tooltip]").tooltip(), b.obj.find("[data-widget-load]").each(function () {
                {
                            var c = a(this),
                                d = c.children(),
                                e = c.data("widget-load"),
                                f = 1e3 * c.data("widget-refresh");
                            c.children()
                }
                        c.find(".jarviswidget-ajax-placeholder").length || (c.children("widget-body").append('<div class="jarviswidget-ajax-placeholder">' + b.o.loadingLabel + "</div>"), c.data("widget-refresh") > 0 ? (b._loadAjaxFile(c, e, d), a.intervalArr.push(setInterval(function () {
                            b._loadAjaxFile(c, e, d)
                }, f))) : b._loadAjaxFile(c, e, d))
                }), b.o.sortable === !0 && jQuery.ui) {
                    var l = b.obj.find(b.o.grid + ".sortable-grid").not("[data-widget-excludegrid]");
                    l.sortable({
                        "items": l.find(b.o.widgets + ".jarviswidget-sortable"),
                        "connectWith": l,
                        "placeholder": b.o.placeholderClass,
                        "cursor": "move",
                        "revert": !0,
                        "opacity": b.o.opacity,
                        "delay": 200,
                        "cancel": ".button-icon, #jarviswidget-fullscreen-mode > div",
                        "zIndex": 1e4,
                        "handle": b.o.dragHandle,
                        "forcePlaceholderSize": !0,
                        "forceHelperSize": !0,
                        "update": function (a, c) {
                            b._runLoaderWidget(c.item.children()), b._savePositionWidget(), "function" == typeof b.o.onChange && b.o.onChange.call(this, c.item)
                        }
                    })
                }
                b.o.buttonsHidden === !0 && b.widget.children("header").on("mouseenter." + f, function () {
                    a(this).children(b.o.pwCtrls).stop(!0, !0).fadeTo(100, 1)
                }).on("mouseleave." + f, function () {
                    a(this).children(b.o.pwCtrls).stop(!0, !0).fadeTo(100, 0)
                }), b._clickEvents(), b.storage.enabled && (a(b.o.deleteSettingsKey).on(g, this, function (a) {
                    var c = confirm(b.o.settingsKeyLabel);
                    c && localStorage.removeItem(keySettings), a.preventDefault()
                }), a(b.o.deletePositionKey).on(g, this, function (a) {
                    var c = confirm(b.o.positionKeyLabel);
                    c && localStorage.removeItem(keyPosition), a.preventDefault()
                })), initialized = !0
            }
        },
        "_initStorage": function (a) {
            a.enabled = a.enabled && !! function () {
                var a, b = +new Date;
                try {
                    return localStorage.setItem(b, b), a = localStorage.getItem(b) == b, localStorage.removeItem(b), a
                } catch (c) { }
            }(), this._loadKeys(), a.enabled && (a.getKeySettings = localStorage.getItem(a.keySettings), a.getKeyPosition = localStorage.getItem(a.keyPosition))
        },
        "_clickEvents": function () {
            function c() {
                if (a("#jarviswidget-fullscreen-mode").length) {
                    var c = a(b).height(),
                        e = a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("header").height();
                    a("#jarviswidget-fullscreen-mode").children(d.o.widgets).children("div").height(c - e - 15)
                }
            }
            var d = this,
                e = d.widget.children("header");
            e.on(g, ".jarviswidget-toggle-btn", function (b) {
                var c = a(this),
                    e = c.parents(d.o.widgets);
                d._runLoaderWidget(c), e.hasClass("jarviswidget-collapsed") ? c.children().removeClass(d.toggleClass[1]).addClass(d.toggleClass[0]).parents(d.o.widgets).removeClass("jarviswidget-collapsed").children("[role=content]").slideDown(d.o.toggleSpeed, function () {
                    d._saveSettingsWidget()
                }) : c.children().removeClass(d.toggleClass[0]).addClass(d.toggleClass[1]).parents(d.o.widgets).addClass("jarviswidget-collapsed").children("[role=content]").slideUp(d.o.toggleSpeed, function () {
                    d._saveSettingsWidget()
                }), "function" == typeof d.o.onToggle && d.o.onToggle.call(this, e), b.preventDefault()
            }), e.on(g, ".jarviswidget-fullscreen-btn", function (b) {
                var e = a(this).parents(d.o.widgets),
                    f = e.children("div");
                d._runLoaderWidget(a(this)), a("#jarviswidget-fullscreen-mode").length ? (a(".nooverflow").removeClass("nooverflow"), e.unwrap("<div>").children("div").removeAttr("style").end().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[1]).addClass(d.fullscreenClass[0]).parents(d.pwCtrls).children("a").show(), f.hasClass("jarviswidget-visible") && f.hide().removeClass("jarviswidget-visible")) : (a("body").addClass("nooverflow"), e.wrap('<div id="jarviswidget-fullscreen-mode"/>').parent().find(".jarviswidget-fullscreen-btn:first").children().removeClass(d.fullscreenClass[0]).addClass(d.fullscreenClass[1]).parents(d.pwCtrls).children("a:not(.jarviswidget-fullscreen-btn)").hide(), f.is(":hidden") && f.show().addClass("jarviswidget-visible")), c(), "function" == typeof d.o.onFullscreen && d.o.onFullscreen.call(this, e), b.preventDefault()
            }), a(b).on("resize." + f, function () {
                c()
            }), e.on(g, ".jarviswidget-edit-btn", function (b) {
                var c = a(this).parents(d.o.widgets);
                d._runLoaderWidget(a(this)), c.find(d.o.editPlaceholder).is(":visible") ? a(this).children().removeClass(d.editClass[1]).addClass(d.editClass[0]).parents(d.o.widgets).find(d.o.editPlaceholder).slideUp(d.o.editSpeed, function () {
                    d._saveSettingsWidget()
                }) : a(this).children().removeClass(d.editClass[0]).addClass(d.editClass[1]).parents(d.o.widgets).find(d.o.editPlaceholder).slideDown(d.o.editSpeed), "function" == typeof d.o.onEdit && d.o.onEdit.call(this, c), b.preventDefault()
            }), a(d.o.editPlaceholder).find("input").keyup(function () {
                a(this).parents(d.o.widgets).children("header").children("h2").text(a(this).val())
            }), e.on(g, "[data-widget-setstyle]", function (b) {
                var c = a(this).data("widget-setstyle"),
                    e = "";
                a(this).parents(d.o.editPlaceholder).find("[data-widget-setstyle]").each(function () {
                    e += a(this).data("widget-setstyle") + " "
                }), a(this).parents(d.o.widgets).attr("data-widget-attstyle", "" + c).removeClassPrefix("jarviswidget-color-").addClass(c), d._runLoaderWidget(a(this)), d._saveSettingsWidget(), b.preventDefault()
            }), e.on(g, ".jarviswidget-custom-btn", function (b) {
                var c = a(this).parents(d.o.widgets);
                d._runLoaderWidget(a(this)), a(this).children("." + d.customClass[0]).length ? (a(this).children().removeClass(d.customClass[0]).addClass(d.customClass[1]), "function" == typeof d.o.customStart && d.o.customStart.call(this, c)) : (a(this).children().removeClass(d.customClass[1]).addClass(d.customClass[0]), "function" == typeof d.o.customEnd && d.o.customEnd.call(this, c)), d._saveSettingsWidget(), b.preventDefault()
            }), e.on(g, ".jarviswidget-delete-btn", function (b) {
                var c = a(this).parents(d.o.widgets),
                    e = c.attr("id"),
                    f = c.children("header").children("h2").text();
                a.SmartMessageBox ? a.SmartMessageBox({
                    "title": "<i class='fa fa-times' style='color:#ed1c24'></i> " + d.o.labelDelete + ' "' + f + '"',
                    "content": d.o.deleteMsg,
                    "buttons": "[No][Yes]"
                }, function (b) {
                    "Yes" == b && (d._runLoaderWidget(a(this)), a("#" + e).fadeOut(d.o.deleteSpeed, function () {
                        a(this).remove(), "function" == typeof d.o.onDelete && d.o.onDelete.call(this, c)
                    }))
                }) : a("#" + e).fadeOut(d.o.deleteSpeed, function () {
                    a(this).remove(), "function" == typeof d.o.onDelete && d.o.onDelete.call(this, c)
                }), b.preventDefault()
            }), e.on(g, ".jarviswidget-refresh-btn", function (b) {
                var c = a(this).parents(d.o.widgets),
                    e = c.data("widget-load"),
                    f = c.children(),
                    g = a(this);
                g.button("loading"), f.addClass("widget-body-ajax-loading"), setTimeout(function () {
                    g.button("reset"), f.removeClass("widget-body-ajax-loading"), d._loadAjaxFile(c, e, f)
                }, 1e3), b.preventDefault()
            }), e = null
        },
        "destroy": function () {
            var c = this,
                d = "." + f,
                e = c.obj.find(c.o.grid + ".sortable-grid").not("[data-widget-excludegrid]");
            e.sortable("destroy"), c.widget.children("header").off(d), a(c.o.deleteSettingsKey).off(d), a(c.o.deletePositionKey).off(d), a(b).off(d), c.obj.removeData(f)
        }
    }, a.fn[f] = function (b) {
        return this.each(function () {
            var c = a(this),
                d = c.data(f);
            if (!d) {
                var g = "object" == typeof b && b;
                c.data(f, d = new e(this, g))
            }
            "string" == typeof b && d[b]()
        })
    }, a.fn[f].defaults = {
        "grid": "section",
        "widgets": ".jarviswidget",
        "localStorage": !0,
        "deleteSettingsKey": "",
        "settingsKeyLabel": "Reset settings?",
        "deletePositionKey": "",
        "positionKeyLabel": "Reset position?",
        "sortable": !0,
        "buttonsHidden": !1,
        "toggleButton": !0,
        "toggleClass": "min-10 | plus-10",
        "toggleSpeed": 200,
        "onToggle": function () { },
        "deleteButton": !0,
        "deleteMsg": "Warning: This action cannot be undone",
        "deleteClass": "trashcan-10",
        "deleteSpeed": 200,
        "onDelete": function () { },
        "editButton": !0,
        "editPlaceholder": ".jarviswidget-editbox",
        "editClass": "pencil-10 | delete-10",
        "editSpeed": 200,
        "onEdit": function () { },
        "colorButton": !0,
        "fullscreenButton": !0,
        "fullscreenClass": "fullscreen-10 | normalscreen-10",
        "fullscreenDiff": 3,
        "onFullscreen": function () { },
        "customButton": !0,
        "customClass": "",
        "customStart": function () { },
        "customEnd": function () { },
        "buttonOrder": "%refresh% %delete% %custom% %edit% %fullscreen% %toggle%",
        "opacity": 1,
        "dragHandle": "> header",
        "placeholderClass": "jarviswidget-placeholder",
        "indicator": !0,
        "indicatorTime": 600,
        "ajax": !0,
        "loadingLabel": "loading...",
        "timestampPlaceholder": ".jarviswidget-timestamp",
        "timestampFormat": "Last update: %m%/%d%/%y% %h%:%i%:%s%",
        "refreshButton": !0,
        "refreshButtonClass": "refresh-10",
        "labelError": "Sorry but there was a error:",
        "labelUpdated": "Last Update:",
        "labelRefresh": "Refresh",
        "labelDelete": "Delete widget:",
        "afterLoad": function () { },
        "rtl": !1,
        "onChange": function () { },
        "onSave": function () { },
        "ajaxnav": !0
    }, a.fn.removeClassPrefix = function (b) {
        return this.each(function (c, d) {
            var e = d.className.split(" ").map(function (a) {
                return 0 === a.indexOf(b) ? "" : a
            });
            d.className = a.trim(e.join(" "))
        }), this
    }
}(jQuery, window, document);
/*! SmartAdmin - v1.5 - 2014-09-27 */function SmartUnLoading(){$(".divMessageBox").fadeOut(300,function(){$(this).remove()}),$(".LoadingBoxContainer").fadeOut(300,function(){$(this).remove()})}function getInternetExplorerVersion(){var a=-1;if("Microsoft Internet Explorer"==navigator.appName){var b=navigator.userAgent,c=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");null!=c.exec(b)&&(a=parseFloat(RegExp.$1))}return a}function checkVersion(){var a="You're not using Windows Internet Explorer.",b=getInternetExplorerVersion();b>-1&&(a=b>=8?"You're using a recent copy of Windows Internet Explorer.":"You should upgrade your copy of Windows Internet Explorer."),alert(a)}function isIE8orlower(){var a="0",b=getInternetExplorerVersion();return b>-1&&(a=b>=9?0:1),a}jQuery(document).ready(function(){$("body").append("<div id='divSmallBoxes'></div>"),$("body").append("<div id='divMiniIcons'></div><div id='divbigBoxes'></div>")});var ExistMsg=0,SmartMSGboxCount=0,PrevTop=0;$.SmartMessageBox=function(a,b){var c,d;a=$.extend({"title":"","content":"","NormalButton":void 0,"ActiveButton":void 0,"buttons":void 0,"input":void 0,"inputValue":void 0,"placeholder":"","options":void 0},a);var e=0;if(e=1,0==isIE8orlower()&&$.sound_on){var f=document.createElement("audio");f.setAttribute("src",$.sound_path+"messagebox.mp3"),f.addEventListener("load",function(){f.play()},!0),f.pause(),f.play()}SmartMSGboxCount+=1,0==ExistMsg&&(ExistMsg=1,c="<div class='divMessageBox animated fadeIn fast' id='MsgBoxBack'></div>",$("body").append(c),1==isIE8orlower()&&$("#MsgBoxBack").addClass("MessageIE"));var g="",h=0;if(void 0!=a.input)switch(h=1,a.input=a.input.toLowerCase(),a.input){case"text":a.inputValue="string"===$.type(a.inputValue)?a.inputValue.replace(/'/g,"&#x27;"):a.inputValue,g="<input class='form-control' type='"+a.input+"' id='txt"+SmartMSGboxCount+"' placeholder='"+a.placeholder+"' value='"+a.inputValue+"'/><br/><br/>";break;case"password":g="<input class='form-control' type='"+a.input+"' id='txt"+SmartMSGboxCount+"' placeholder='"+a.placeholder+"'/><br/><br/>";break;case"select":if(void 0==a.options)alert("For this type of input, the options parameter is required.");else{g="<select class='form-control' id='txt"+SmartMSGboxCount+"'>";for(var i=0;i<=a.options.length-1;i++)"["==a.options[i]?j="":"]"==a.options[i]?(k+=1,j="<option>"+j+"</option>",g+=j):j+=a.options[i];g+="</select>"}break;default:alert("That type of input is not handled yet")}d="<div class='MessageBoxContainer animated fadeIn fast' id='Msg"+SmartMSGboxCount+"'>",d+="<div class='MessageBoxMiddle'>",d+="<span class='MsgTitle'>"+a.title+"</span class='MsgTitle'>",d+="<p class='pText'>"+a.content+"</p>",d+=g,d+="<div class='MessageBoxButtonSection'>",void 0==a.buttons&&(a.buttons="[Accept]"),a.buttons=$.trim(a.buttons),a.buttons=a.buttons.split("");var j="",k=0;void 0==a.NormalButton&&(a.NormalButton="#232323"),void 0==a.ActiveButton&&(a.ActiveButton="#ed145b");for(var i=0;i<=a.buttons.length-1;i++)"["==a.buttons[i]?j="":"]"==a.buttons[i]?(k+=1,j="<button id='bot"+k+"-Msg"+SmartMSGboxCount+"' class='btn btn-default btn-sm botTempo'> "+j+"</button>",d+=j):j+=a.buttons[i];d+="</div>",d+="</div>",d+="</div>",SmartMSGboxCount>1&&($(".MessageBoxContainer").hide(),$(".MessageBoxContainer").css("z-index",99999)),$(".divMessageBox").append(d),1==h&&$("#txt"+SmartMSGboxCount).focus(),$(".botTempo").hover(function(){$(this).attr("id")},function(){$(this).attr("id")}),$(".botTempo").click(function(){var a=$(this).attr("id"),c=a.substr(a.indexOf("-")+1),d=$.trim($(this).text());if(1==h){if("function"==typeof b){var e=c.replace("Msg",""),f=$("#txt"+e).val();b&&b(d,f)}}else"function"==typeof b&&b&&b(d);$("#"+c).addClass("animated fadeOut fast"),SmartMSGboxCount-=1,0==SmartMSGboxCount&&$("#MsgBoxBack").removeClass("fadeIn").addClass("fadeOut").delay(300).queue(function(){ExistMsg=0,$(this).remove()})})};var BigBoxes=0;$.bigBox=function(a,b){var c;if(a=$.extend({"title":"","content":"","icon":void 0,"number":void 0,"color":void 0,"sound":$.sound_on,"sound_file":"bigbox","timeout":void 0,"colortime":1500,"colors":void 0},a),a.sound&&0==isIE8orlower()){var d=document.createElement("audio");navigator.userAgent.match("Firefox/")?d.setAttribute("src",$.sound_path+a.sound_file+".ogg"):d.setAttribute("src",$.sound_path+a.sound_file+".mp3"),d.addEventListener("load",function(){d.play()},!0),d.pause(),d.play()}BigBoxes+=1,c="<div id='bigBox"+BigBoxes+"' class='bigBox animated fadeIn fast'><div id='bigBoxColor"+BigBoxes+"'><i class='botClose fa fa-times' id='botClose"+BigBoxes+"'></i>",c+="<span>"+a.title+"</span>",c+="<p>"+a.content+"</p>",c+="<div class='bigboxicon'>",void 0==a.icon&&(a.icon="fa fa-cloud"),c+="<i class='"+a.icon+"'></i>",c+="</div>",c+="<div class='bigboxnumber'>",void 0!=a.number&&(c+=a.number),c+="</div></div>",c+="</div>",$("#divbigBoxes").append(c),void 0==a.color&&(a.color="#004d60"),$("#bigBox"+BigBoxes).css("background-color",a.color),$("#divMiniIcons").append("<div id='miniIcon"+BigBoxes+"' class='cajita animated fadeIn' style='background-color: "+a.color+";'><i class='"+a.icon+"'/></i></div>"),$("#miniIcon"+BigBoxes).bind("click",function(){var a=$(this).attr("id"),b=a.replace("miniIcon","bigBox"),c=a.replace("miniIcon","bigBoxColor");$(".cajita").each(function(){var a=$(this).attr("id"),b=a.replace("miniIcon","bigBox");$("#"+b).css("z-index",9998)}),$("#"+b).css("z-index",9999),$("#"+c).removeClass("animated fadeIn").delay(1).queue(function(){$(this).show(),$(this).addClass("animated fadeIn"),$(this).clearQueue()})});var e,f=$("#botClose"+BigBoxes),g=$("#bigBox"+BigBoxes),h=$("#miniIcon"+BigBoxes);if(void 0!=a.colors&&a.colors.length>0&&(f.attr("colorcount","0"),e=setInterval(function(){var b=f.attr("colorcount");f.animate({"backgroundColor":a.colors[b].color}),g.animate({"backgroundColor":a.colors[b].color}),h.animate({"backgroundColor":a.colors[b].color}),b<a.colors.length-1?f.attr("colorcount",1*b+1):f.attr("colorcount",0)},a.colortime)),f.bind("click",function(){clearInterval(e),"function"==typeof b&&b&&b();var a=$(this).attr("id"),c=a.replace("botClose","bigBox"),d=a.replace("botClose","miniIcon");$("#"+c).removeClass("fadeIn fast"),$("#"+c).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()}),$("#"+d).removeClass("fadeIn fast"),$("#"+d).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()})}),void 0!=a.timeout){var i=BigBoxes;setTimeout(function(){clearInterval(e),$("#bigBox"+i).removeClass("fadeIn fast"),$("#bigBox"+i).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()}),$("#miniIcon"+i).removeClass("fadeIn fast"),$("#miniIcon"+i).addClass("fadeOut fast").delay(300).queue(function(){$(this).clearQueue(),$(this).remove()})},a.timeout)}};var SmallBoxes=0,SmallCount=0,SmallBoxesAnchos=0;$.smallBox=function(a,b){var c;if(a=$.extend({"title":"","content":"","icon":void 0,"iconSmall":void 0,"sound":$.sound_on,"sound_file":"smallbox","color":void 0,"timeout":void 0,"colortime":1500,"colors":void 0},a),a.sound&&0==isIE8orlower()){var d=document.createElement("audio");navigator.userAgent.match("Firefox/")?d.setAttribute("src",$.sound_path+a.sound_file+".ogg"):d.setAttribute("src",$.sound_path+a.sound_file+".mp3"),d.addEventListener("load",function(){d.play()},!0),d.pause(),d.play()}SmallBoxes+=1,c="";var e="",f="smallbox"+SmallBoxes;if(e=void 0==a.iconSmall?"<div class='miniIcono'></div>":"<div class='miniIcono'><i class='miniPic "+a.iconSmall+"'></i></div>",c=void 0==a.icon?"<div id='smallbox"+SmallBoxes+"' class='SmallBox animated fadeInRight fast'><div class='textoFull'><span>"+a.title+"</span><p>"+a.content+"</p></div>"+e+"</div>":"<div id='smallbox"+SmallBoxes+"' class='SmallBox animated fadeInRight fast'><div class='foto'><i class='"+a.icon+"'></i></div><div class='textoFoto'><span>"+a.title+"</span><p>"+a.content+"</p></div>"+e+"</div>",1==SmallBoxes)$("#divSmallBoxes").append(c),SmallBoxesAnchos=$("#smallbox"+SmallBoxes).height()+40;else{var g=$(".SmallBox").size();0==g?($("#divSmallBoxes").append(c),SmallBoxesAnchos=$("#smallbox"+SmallBoxes).height()+40):($("#divSmallBoxes").append(c),$("#smallbox"+SmallBoxes).css("top",SmallBoxesAnchos),SmallBoxesAnchos=SmallBoxesAnchos+$("#smallbox"+SmallBoxes).height()+20,$(".SmallBox").each(function(a){0==a?($(this).css("top",20),heightPrev=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).css("top",heightPrev),heightPrev=heightPrev+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)}))}var h=$("#smallbox"+SmallBoxes);void 0==a.color?h.css("background-color","#004d60"):h.css("background-color",a.color);var i;void 0!=a.colors&&a.colors.length>0&&(h.attr("colorcount","0"),i=setInterval(function(){var b=h.attr("colorcount");h.animate({"backgroundColor":a.colors[b].color}),b<a.colors.length-1?h.attr("colorcount",1*b+1):h.attr("colorcount",0)},a.colortime)),void 0!=a.timeout&&setTimeout(function(){clearInterval(i);{var a=$(this).height()+20;$("#"+f).css("top")}0!=$("#"+f+":hover").length?$("#"+f).on("mouseleave",function(){SmallBoxesAnchos-=a,$("#"+f).remove(),"function"==typeof b&&b&&b();var c=0;$(".SmallBox").each(function(a){0==a?($(this).animate({"top":20},300),c=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":c},350),c=c+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})}):(clearInterval(i),SmallBoxesAnchos-=a,"function"==typeof b&&b&&b(),$("#"+f).removeClass().addClass("SmallBox").animate({"opacity":0},300,function(){$(this).remove();var a=0;$(".SmallBox").each(function(b){0==b?($(this).animate({"top":20},300),a=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":a}),a=a+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})}))},a.timeout),$("#smallbox"+SmallBoxes).bind("click",function(){clearInterval(i),"function"==typeof b&&b&&b();{var a=$(this).height()+20;$(this).attr("id"),$(this).css("top")}SmallBoxesAnchos-=a,$(this).removeClass().addClass("SmallBox").animate({"opacity":0},300,function(){$(this).remove();var a=0;$(".SmallBox").each(function(b){0==b?($(this).animate({"top":20},300),a=$(this).height()+40,SmallBoxesAnchos=$(this).height()+40):($(this).animate({"top":a},350),a=a+$(this).height()+20,SmallBoxesAnchos=SmallBoxesAnchos+$(this).height()+20)})})})};
/*! SmartAdmin - v1.5 - 2014-09-27 */!function(){if(!jQuery.browser){jQuery.browser={},jQuery.browser.mozilla=!1,jQuery.browser.webkit=!1,jQuery.browser.opera=!1,jQuery.browser.msie=!1;var a=navigator.userAgent;jQuery.browser.name=navigator.appName,jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10);var b,c,d;-1!=(c=a.indexOf("Opera"))?(jQuery.browser.opera=!0,jQuery.browser.name="Opera",jQuery.browser.fullVersion=a.substring(c+6),-1!=(c=a.indexOf("Version"))&&(jQuery.browser.fullVersion=a.substring(c+8))):-1!=(c=a.indexOf("MSIE"))?(jQuery.browser.msie=!0,jQuery.browser.name="Microsoft Internet Explorer",jQuery.browser.fullVersion=a.substring(c+5)):-1!=(c=a.indexOf("Chrome"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Chrome",jQuery.browser.fullVersion=a.substring(c+7)):-1!=(c=a.indexOf("Safari"))?(jQuery.browser.webkit=!0,jQuery.browser.name="Safari",jQuery.browser.fullVersion=a.substring(c+7),-1!=(c=a.indexOf("Version"))&&(jQuery.browser.fullVersion=a.substring(c+8))):-1!=(c=a.indexOf("Firefox"))?(jQuery.browser.mozilla=!0,jQuery.browser.name="Firefox",jQuery.browser.fullVersion=a.substring(c+8)):(b=a.lastIndexOf(" ")+1)<(c=a.lastIndexOf("/"))&&(jQuery.browser.name=a.substring(b,c),jQuery.browser.fullVersion=a.substring(c+1),jQuery.browser.name.toLowerCase()==jQuery.browser.name.toUpperCase()&&(jQuery.browser.name=navigator.appName)),-1!=(d=jQuery.browser.fullVersion.indexOf(";"))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,d)),-1!=(d=jQuery.browser.fullVersion.indexOf(" "))&&(jQuery.browser.fullVersion=jQuery.browser.fullVersion.substring(0,d)),jQuery.browser.majorVersion=parseInt(""+jQuery.browser.fullVersion,10),isNaN(jQuery.browser.majorVersion)&&(jQuery.browser.fullVersion=""+parseFloat(navigator.appVersion),jQuery.browser.majorVersion=parseInt(navigator.appVersion,10)),jQuery.browser.version=jQuery.browser.majorVersion}}(jQuery);
/*! SmartAdmin - v1.5 - 2014-09-27 */function FastClick(a){var b,c=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.lastTouchIdentifier=this.touchStartY=this.touchStartX=0,this.layer=a,!a||!a.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(c,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(c,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(c,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(c,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(c,arguments)},FastClick.notNeeded(a)||(this.deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(b=a.onclick,a.addEventListener("click",function(a){b(a)},!1),a.onclick=null))}FastClick.prototype.deviceIsAndroid=0<navigator.userAgent.indexOf("Android"),FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":case"select":return!0;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent("click",!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.focus=function(a){var b;this.deviceIsIOS&&a.setSelectionRange?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){var b,c,d;if(1<a.targetTouches.length)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],this.deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!this.deviceIsIOS4){if(c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,200>a.timeStamp-this.lastClickTime&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){return a=a.changedTouches[0],10<Math.abs(a.pageX-this.touchStartX)||10<Math.abs(a.pageY-this.touchStartY)?!0:!1},FastClick.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){var b,c,d;if(d=this.targetElement,this.touchHasMoved(a)&&(this.trackingClick=!1,this.targetElement=null),!this.trackingClick)return!0;if(200>a.timeStamp-this.lastClickTime)return this.cancelNextClick=!0;if(this.lastClickTime=a.timeStamp,b=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(d=a.changedTouches[0],d=document.elementFromPoint(d.pageX-window.pageXOffset,d.pageY-window.pageYOffset)),c=d.tagName.toLowerCase(),"label"===c){if(b=this.findControl(d)){if(this.focus(d),this.deviceIsAndroid)return!1;d=b}}else if(this.needsFocus(d))return 100<a.timeStamp-b||this.deviceIsIOS&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(d),this.deviceIsIOS4&&"select"===c||(this.targetElement=null,a.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(b=d.fastClickScrollParent)&&b.fastClickLastScrollTop!==b.scrollTop?!0:(this.needsClick(d)||(a.preventDefault(),this.sendClick(d,a)),!1)},FastClick.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){return this.targetElement&&!a.forwardedTouchEvent&&a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0},FastClick.prototype.onClick=function(a){return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(a=this.onMouse(a),a||(this.targetElement=null),a)},FastClick.prototype.destroy=function(){var a=this.layer;this.deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){var b;if("undefined"==typeof window.ontouchstart)return!0;if(/Chrome\/[0-9]+/.test(navigator.userAgent)){if(!FastClick.prototype.deviceIsAndroid)return!0;if((b=document.querySelector("meta[name=viewport]"))&&-1!==b.content.indexOf("user-scalable=no"))return!0}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a){return new FastClick(a)},"undefined"!=typeof define&&define.amd?define(function(){return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
/*! SmartAdmin - v1.5 - 2014-09-27 */!function(a){var b=function(b,c){var b=a(b),d=this,e='li:has([data-toggle="tab"])',f=a.extend({},a.fn.bootstrapWizard.defaults,c),g=null,h=null;this.rebindClick=function(a,b){a.unbind("click",b).bind("click",b)},this.fixNavigationButtons=function(){return g.length||(h.find("a:first").tab("show"),g=h.find(e+":first")),a(f.previousSelector,b).toggleClass("disabled",d.firstIndex()>=d.currentIndex()),a(f.nextSelector,b).toggleClass("disabled",d.currentIndex()>=d.navigationLength()),d.rebindClick(a(f.nextSelector,b),d.next),d.rebindClick(a(f.previousSelector,b),d.previous),d.rebindClick(a(f.lastSelector,b),d.last),d.rebindClick(a(f.firstSelector,b),d.first),f.onTabShow&&"function"==typeof f.onTabShow&&f.onTabShow(g,h,d.currentIndex())===!1?!1:void 0},this.next=function(){return b.hasClass("last")?!1:f.onNext&&"function"==typeof f.onNext&&f.onNext(g,h,d.nextIndex())===!1?!1:($index=d.nextIndex(),void($index>d.navigationLength()||h.find(e+":eq("+$index+") a").tab("show")))},this.previous=function(){return b.hasClass("first")?!1:f.onPrevious&&"function"==typeof f.onPrevious&&f.onPrevious(g,h,d.previousIndex())===!1?!1:($index=d.previousIndex(),void(0>$index||h.find(e+":eq("+$index+") a").tab("show")))},this.first=function(){return f.onFirst&&"function"==typeof f.onFirst&&f.onFirst(g,h,d.firstIndex())===!1?!1:b.hasClass("disabled")?!1:void h.find(e+":eq(0) a").tab("show")},this.last=function(){return f.onLast&&"function"==typeof f.onLast&&f.onLast(g,h,d.lastIndex())===!1?!1:b.hasClass("disabled")?!1:void h.find(e+":eq("+d.navigationLength()+") a").tab("show")},this.currentIndex=function(){return h.find(e).index(g)},this.firstIndex=function(){return 0},this.lastIndex=function(){return d.navigationLength()},this.getIndex=function(a){return h.find(e).index(a)},this.nextIndex=function(){return h.find(e).index(g)+1},this.previousIndex=function(){return h.find(e).index(g)-1},this.navigationLength=function(){return h.find(e).length-1},this.activeTab=function(){return g},this.nextTab=function(){return h.find(e+":eq("+(d.currentIndex()+1)+")").length?h.find(e+":eq("+(d.currentIndex()+1)+")"):null},this.previousTab=function(){return d.currentIndex()<=0?null:h.find(e+":eq("+parseInt(d.currentIndex()-1)+")")},this.show=function(a){return b.find(e+":eq("+a+") a").tab("show")},this.disable=function(a){h.find(e+":eq("+a+")").addClass("disabled")},this.enable=function(a){h.find(e+":eq("+a+")").removeClass("disabled")},this.hide=function(a){h.find(e+":eq("+a+")").hide()},this.display=function(a){h.find(e+":eq("+a+")").show()},this.remove=function(b){var c=b[0],d="undefined"!=typeof b[1]?b[1]:!1,f=h.find(e+":eq("+c+")");if(d){var g=f.find("a").attr("href");a(g).remove()}f.remove()},h=b.find("ul:first",b),g=h.find(e+".active",b),h.hasClass(f.tabClass)||h.addClass(f.tabClass),f.onInit&&"function"==typeof f.onInit&&f.onInit(g,h,0),f.onShow&&"function"==typeof f.onShow&&f.onShow(g,h,d.nextIndex()),d.fixNavigationButtons(),a('a[data-toggle="tab"]',h).on("click",function(b){var c=h.find(e).index(a(b.currentTarget).parent(e));return f.onTabClick&&"function"==typeof f.onTabClick&&f.onTabClick(g,h,d.currentIndex(),c)===!1?!1:void 0}),a('a[data-toggle="tab"]',h).on("shown shown.bs.tab",function(b){$element=a(b.target).parent();var c=h.find(e).index($element);return $element.hasClass("disabled")?!1:f.onTabChange&&"function"==typeof f.onTabChange&&f.onTabChange(g,h,d.currentIndex(),c)===!1?!1:(g=$element,void d.fixNavigationButtons())})};a.fn.bootstrapWizard=function(c){if("string"==typeof c){var d=Array.prototype.slice.call(arguments,1);return 1===d.length&&d.toString(),this.data("bootstrapWizard")[c](d)}return this.each(function(){var d=a(this);if(!d.data("bootstrapWizard")){var e=new b(d,c);d.data("bootstrapWizard",e)}})},a.fn.bootstrapWizard.defaults={"tabClass":"nav nav-pills","nextSelector":".wizard li.next","previousSelector":".wizard li.previous","firstSelector":".wizard li.first","lastSelector":".wizard li.last","onShow":null,"onInit":null,"onNext":null,"onPrevious":null,"onLast":null,"onFirst":null,"onTabChange":null,"onTabClick":null,"onTabShow":null}}(jQuery);
/*! SmartAdmin - v1.5 - 2014-10-16 */
function runAllForms() {
    $.fn.slider && $(".slider").slider(), $.fn.select2 && $("select.select2").each(function () {
        var a = $(this),
            b = a.attr("data-select-width") || "100%";
        a.select2({
            "allowClear": !0,
            "width": b
        }), a = null
    }), $.fn.mask && $("[data-mask]").each(function () {
        var a = $(this),
            b = a.attr("data-mask") || "error...",
            c = a.attr("data-mask-placeholder") || "X";
        a.mask(b, {
            "placeholder": c
        }), a = null
    }), $.fn.autocomplete && $("[data-autocomplete]").each(function () {
        var a = $(this),
            b = a.data("autocomplete") || ["The", "Quick", "Brown", "Fox", "Jumps", "Over", "Three", "Lazy", "Dogs"];
        a.autocomplete({
            "source": b
        }), a = null
    }), $.fn.datepicker && $(".datepicker").each(function () {
        var a = $(this),
            b = a.attr("data-dateformat") || "dd.mm.yy";
        a.datepicker({
            "dateFormat": b,
            "prevText": '<i class="fa fa-chevron-left"></i>',
            "nextText": '<i class="fa fa-chevron-right"></i>'
        }), a = null
    }), $("button[data-loading-text]").on("click", function () {
        var a = $(this);
        a.button("loading"), setTimeout(function () {
            a.button("reset"), a = null
        }, 3e3)
    })
}

function runAllCharts() {
    if ($.fn.sparkline) {
        var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb;
        $(".sparkline:not(:has(>canvas))").each(function () {
            var tb = $(this),
                ub = tb.data("sparkline-type") || "bar";
            if ("bar" == ub && (a = tb.data("sparkline-bar-color") || tb.css("color") || "#0000f0", b = tb.data("sparkline-height") || "26px", c = tb.data("sparkline-barwidth") || 5, d = tb.data("sparkline-barspacing") || 2, e = tb.data("sparkline-negbar-color") || "#A90329", f = tb.data("sparkline-barstacked-color") || ["#A90329", "#0099c6", "#98AA56", "#da532c", "#4490B1", "#6E9461", "#990099", "#B4CAD3"], tb.sparkline("html", {
                    "barColor": a,
                    "type": ub,
                    "height": b,
                    "barWidth": c,
                    "barSpacing": d,
                    "stackedBarColor": f,
                    "negBarColor": e,
                    "zeroAxis": "false"
            }), tb = null), "line" == ub && (b = tb.data("sparkline-height") || "20px", ab = tb.data("sparkline-width") || "90px", g = tb.data("sparkline-line-color") || tb.css("color") || "#0000f0", h = tb.data("sparkline-line-width") || 1, i = tb.data("fill-color") || "#c0d0f0", j = tb.data("sparkline-spot-color") || "#f08000", k = tb.data("sparkline-minspot-color") || "#ed1c24", l = tb.data("sparkline-maxspot-color") || "#f08000", m = tb.data("sparkline-highlightspot-color") || "#50f050", n = tb.data("sparkline-highlightline-color") || "f02020", o = tb.data("sparkline-spotradius") || 1.5, thisChartMinYRange = tb.data("sparkline-min-y") || "undefined", thisChartMaxYRange = tb.data("sparkline-max-y") || "undefined", thisChartMinXRange = tb.data("sparkline-min-x") || "undefined", thisChartMaxXRange = tb.data("sparkline-max-x") || "undefined", thisMinNormValue = tb.data("min-val") || "undefined", thisMaxNormValue = tb.data("max-val") || "undefined", thisNormColor = tb.data("norm-color") || "#c0c0c0", thisDrawNormalOnTop = tb.data("draw-normal") || !1, tb.sparkline("html", {
                    "type": "line",
                    "width": ab,
                    "height": b,
                    "lineWidth": h,
                    "lineColor": g,
                    "fillColor": i,
                    "spotColor": j,
                    "minSpotColor": k,
                    "maxSpotColor": l,
                    "highlightSpotColor": m,
                    "highlightLineColor": n,
                    "spotRadius": o,
                    "chartRangeMin": thisChartMinYRange,
                    "chartRangeMax": thisChartMaxYRange,
                    "chartRangeMinX": thisChartMinXRange,
                    "chartRangeMaxX": thisChartMaxXRange,
                    "normalRangeMin": thisMinNormValue,
                    "normalRangeMax": thisMaxNormValue,
                    "normalRangeColor": thisNormColor,
                    "drawNormalOnTop": thisDrawNormalOnTop
            }), tb = null), "pie" == ub && (p = tb.data("sparkline-piecolor") || ["#B4CAD3", "#4490B1", "#98AA56", "#da532c", "#6E9461", "#0099c6", "#990099", "#717D8A"], q = tb.data("sparkline-piesize") || 90, r = tb.data("border-color") || "#45494C", s = tb.data("sparkline-offset") || 0, tb.sparkline("html", {
                    "type": "pie",
                    "width": q,
                    "height": q,
                    "tooltipFormat": '<span style="color: {{color}}">&#9679;</span> ({{percent.1}}%)',
                    "sliceColors": p,
                    "borderWidth": 1,
                    "offset": s,
                    "borderColor": r
            }), tb = null), "box" == ub && (t = tb.data("sparkline-width") || "auto", u = tb.data("sparkline-height") || "auto", v = tb.data("sparkline-boxraw") || !1, w = tb.data("sparkline-targetval") || "undefined", x = tb.data("sparkline-min") || "undefined", y = tb.data("sparkline-max") || "undefined", z = tb.data("sparkline-showoutlier") || !0, A = tb.data("sparkline-outlier-iqr") || 1.5, B = tb.data("sparkline-spotradius") || 1.5, C = tb.css("color") || "#000000", D = tb.data("fill-color") || "#c0d0f0", E = tb.data("sparkline-whis-color") || "#000000", F = tb.data("sparkline-outline-color") || "#303030", G = tb.data("sparkline-outlinefill-color") || "#f0f0f0", H = tb.data("sparkline-outlinemedian-color") || "#f00000", I = tb.data("sparkline-outlinetarget-color") || "#40a020", tb.sparkline("html", {
                    "type": "box",
                    "width": t,
                    "height": u,
                    "raw": v,
                    "target": w,
                    "minValue": x,
                    "maxValue": y,
                    "showOutliers": z,
                    "outlierIQR": A,
                    "spotRadius": B,
                    "boxLineColor": C,
                    "boxFillColor": D,
                    "whiskerColor": E,
                    "outlierLineColor": F,
                    "outlierFillColor": G,
                    "medianColor": H,
                    "targetColor": I
            }), tb = null), "bullet" == ub) {
                var vb = tb.data("sparkline-height") || "auto";
                J = tb.data("sparkline-width") || 2, K = tb.data("sparkline-bullet-color") || "#ed1c24", L = tb.data("sparkline-performance-color") || "#3030f0", M = tb.data("sparkline-bulletrange-color") || ["#d3dafe", "#a8b6ff", "#7f94ff"], tb.sparkline("html", {
                    "type": "bullet",
                    "height": vb,
                    "targetWidth": J,
                    "targetColor": K,
                    "performanceColor": L,
                    "rangeColors": M
                }), tb = null
            }
            "discrete" == ub && (N = tb.data("sparkline-height") || 26, O = tb.data("sparkline-width") || 50, P = tb.css("color"), Q = tb.data("sparkline-line-height") || 5, R = tb.data("sparkline-threshold") || "undefined", S = tb.data("sparkline-threshold-color") || "#ed1c24", tb.sparkline("html", {
                "type": "discrete",
                "width": O,
                "height": N,
                "lineColor": P,
                "lineHeight": Q,
                "thresholdValue": R,
                "thresholdColor": S
            }), tb = null), "tristate" == ub && (T = tb.data("sparkline-height") || 26, U = tb.data("sparkline-posbar-color") || "#60f060", V = tb.data("sparkline-negbar-color") || "#f04040", W = tb.data("sparkline-zerobar-color") || "#909090", X = tb.data("sparkline-barwidth") || 5, Y = tb.data("sparkline-barspacing") || 2, Z = tb.data("sparkline-zeroaxis") || !1, tb.sparkline("html", {
                "type": "tristate",
                "height": T,
                "posBarColor": _,
                "negBarColor": V,
                "zeroBarColor": W,
                "barWidth": X,
                "barSpacing": Y,
                "zeroAxis": Z
            }), tb = null), "compositebar" == ub && (b = tb.data("sparkline-height") || "20px", ab = tb.data("sparkline-width") || "100%", c = tb.data("sparkline-barwidth") || 3, h = tb.data("sparkline-line-width") || 1, g = tb.data("data-sparkline-linecolor") || "#ed1c24", _ = tb.data("data-sparkline-barcolor") || "#333333", tb.sparkline(tb.data("sparkline-bar-val"), {
                "type": "bar",
                "width": ab,
                "height": b,
                "barColor": _,
                "barWidth": c
            }), tb.sparkline(tb.data("sparkline-line-val"), {
                "width": ab,
                "height": b,
                "lineColor": g,
                "lineWidth": h,
                "composite": !0,
                "fillColor": !1
            }), tb = null), "compositeline" == ub && (b = tb.data("sparkline-height") || "20px", ab = tb.data("sparkline-width") || "90px", bb = tb.data("sparkline-bar-val"), cb = tb.data("sparkline-bar-val-spots-top") || null, db = tb.data("sparkline-bar-val-spots-bottom") || null, eb = tb.data("sparkline-line-width-top") || 1, fb = tb.data("sparkline-line-width-bottom") || 1, gb = tb.data("sparkline-color-top") || "#333333", hb = tb.data("sparkline-color-bottom") || "#ed1c24", ib = tb.data("sparkline-spotradius-top") || 1.5, jb = tb.data("sparkline-spotradius-bottom") || ib, j = tb.data("sparkline-spot-color") || "#f08000", kb = tb.data("sparkline-minspot-color-top") || "#ed1c24", lb = tb.data("sparkline-maxspot-color-top") || "#f08000", mb = tb.data("sparkline-minspot-color-bottom") || kb, nb = tb.data("sparkline-maxspot-color-bottom") || lb, ob = tb.data("sparkline-highlightspot-color-top") || "#50f050", pb = tb.data("sparkline-highlightline-color-top") || "#f02020", qb = tb.data("sparkline-highlightspot-color-bottom") || ob, thisHighlightLineColor2 = tb.data("sparkline-highlightline-color-bottom") || pb, rb = tb.data("sparkline-fillcolor-top") || "transparent", sb = tb.data("sparkline-fillcolor-bottom") || "transparent", tb.sparkline(bb, {
                "type": "line",
                "spotRadius": ib,
                "spotColor": j,
                "minSpotColor": kb,
                "maxSpotColor": lb,
                "highlightSpotColor": ob,
                "highlightLineColor": pb,
                "valueSpots": cb,
                "lineWidth": eb,
                "width": ab,
                "height": b,
                "lineColor": gb,
                "fillColor": rb
            }), tb.sparkline(tb.data("sparkline-line-val"), {
                "type": "line",
                "spotRadius": jb,
                "spotColor": j,
                "minSpotColor": mb,
                "maxSpotColor": nb,
                "highlightSpotColor": qb,
                "highlightLineColor": thisHighlightLineColor2,
                "valueSpots": db,
                "lineWidth": fb,
                "width": ab,
                "height": b,
                "lineColor": hb,
                "composite": !0,
                "fillColor": sb
            }), tb = null)
        })
    }
    $.fn.easyPieChart && $(".easy-pie-chart").each(function () {
        var a = $(this),
            b = a.css("color") || a.data("pie-color"),
            c = a.data("pie-track-color") || "rgba(0,0,0,0.04)",
            d = parseInt(a.data("pie-size")) || 25;
        a.easyPieChart({
            "barColor": b,
            "trackColor": c,
            "scaleColor": !1,
            "lineCap": "butt",
            "lineWidth": parseInt(d / 8.5),
            "animate": 1500,
            "rotate": -90,
            "size": d,
            "onStep": function (a, b, c) {
                $(this.el).find(".percent").text(Math.round(c))
            }
        }), a = null
    })
}

function setup_widgets_desktop() {
    $.fn.jarvisWidgets && enableJarvisWidgets && $("#widget-grid").jarvisWidgets({
        "uniquename":"test1234",
        "grid": "article",
        "widgets": ".jarviswidget",
        "localStorage": localStorageJarvisWidgets,
        "deleteSettingsKey": "#deletesettingskey-options",
        "settingsKeyLabel": "Reset settings?",
        "deletePositionKey": "#deletepositionkey-options",
        "positionKeyLabel": "Reset position?",
        "sortable": sortableJarvisWidgets,
        "buttonsHidden": !1,
        "toggleButton": !0,
        "toggleClass": "fa fa-minus | fa fa-plus",
        "toggleSpeed": 200,
        "onToggle": function () { },
        "deleteButton": !0,
        "deleteMsg": "Warning: This action cannot be undone!",
        "deleteClass": "fa fa-times",
        "deleteSpeed": 200,
        "onDelete": function () { },
        "editButton": !0,
        "editPlaceholder": ".jarviswidget-editbox",
        "editClass": "fa fa-cog | fa fa-save",
        "editSpeed": 200,
        "onEdit": function () { },
        "colorButton": !0,
        "fullscreenButton": !0,
        "fullscreenClass": "fa fa-expand | fa fa-compress",
        "fullscreenDiff": 3,
        "onFullscreen": function () { },
        "customButton": !1,
        "customClass": "folder-10 | next-10",
        "customStart": function () {
            alert("Hello you, this is a custom button...")
        },
        "customEnd": function () {
            alert("bye, till next time...")
        },
        "buttonOrder": "%refresh% %custom% %edit% %toggle% %fullscreen% %delete%",
        "opacity": 1,
        "dragHandle": "> header",
        "placeholderClass": "jarviswidget-placeholder",
        "indicator": !0,
        "indicatorTime": 600,
        "ajax": !0,
        "timestampPlaceholder": ".jarviswidget-timestamp",
        "timestampFormat": "Last update: %m%/%d%/%y% %h%:%i%:%s%",
        "refreshButton": !0,
        "refreshButtonClass": "fa fa-refresh",
        "labelError": "Sorry but there was a error:",
        "labelUpdated": "Last Update:",
        "labelRefresh": "Refresh",
        "labelDelete": "Delete widget:",
        "afterLoad": function () { },
        "rtl": !1,
        "onChange": function () { },
        "onSave": function () {  },
        "ajaxnav": $.navAsAjax
    })
}

function setup_widgets_mobile() {
    enableMobileWidgets && enableJarvisWidgets && setup_widgets_desktop()
}

function loadScript(a, b) {
    if (jsArray[a]) b && (debugState && root.root.console.log("This script was already loaded %c: " + a, debugStyle_warning), b());
    else {
        jsArray[a] = !0;
        var c = document.getElementsByTagName("body")[0],
            d = document.createElement("script");
        d.type = "text/javascript", d.src = a, d.onload = b, c.appendChild(d)
    }
}

function checkURL() {
    var a = location.href.split("#").splice(1).join("#");
    if (!a) try {
        var b = window.document.URL;
        b && b.indexOf("#", 0) > 0 && b.indexOf("#", 0) < b.length + 1 && (a = b.substring(b.indexOf("#", 0) + 1))
    } catch (c) { }
    if (container = $("#content"), a) {
        $("nav li.active").removeClass("active"), $('nav li:has(a[href="' + a + '"])').addClass("active");
        var d = $('nav a[href="' + a + '"]').attr("title");
        document.title = d || document.title, debugState && root.console.log("Page title: %c " + document.title, debugStyle_green), loadURL(a + location.search, container)
    } else {
        var e = $('nav > ul > li:first-child > a[href!="#"]');
        window.location.hash = e.attr("href"), e = null
    }
}

function loadURL(a, b) {
    debugState && root.root.console.log("Loading URL: %c" + a, debugStyle), $.ajax({
        "type": "GET",
        "url": a,
        "dataType": "html",
        "cache": !0,
        "beforeSend": function () {
            if ($.navAsAjax && $(".google_maps")[0] && b[0] == $("#content")[0]) {
                var a = $(".google_maps"),
                    c = 0;
                a.each(function () {
                    c++;
                    var b = document.getElementById(this.id);
                    c == a.length + 1 || (b && b.parentNode.removeChild(b), debugState && root.console.log("Destroying maps.........%c" + this.id, debugStyle_warning))
                }), debugState && root.console.log("\u2714 Google map instances nuked!!!")
            }
            if ($.navAsAjax && $(".dataTables_wrapper")[0] && b[0] == $("#content")[0]) {
                var d = $.fn.dataTable.fnTables(!0);
                $(d).each(function () {
                    0 != $(this).find(".details-control").length ? ($(this).find("*").addBack().off().remove(), $(this).dataTable().fnDestroy()) : $(this).dataTable().fnDestroy()
                }), debugState && root.console.log("\u2714 Datatable instances nuked!!!")
            }
            if ($.navAsAjax && $.intervalArr.length > 0 && b[0] == $("#content")[0] && enableJarvisWidgets) {
                for (; $.intervalArr.length > 0;) clearInterval($.intervalArr.pop());
                debugState && root.console.log("\u2714 All JarvisWidget intervals cleared")
            }
            if ($.navAsAjax && b[0] == $("#content")[0] && enableJarvisWidgets && $("#widget-grid")[0] && ($("#widget-grid").jarvisWidgets("destroy"), debugState && root.console.log("\u2714 JarvisWidgets destroyed")), $.navAsAjax && b[0] == $("#content")[0]) {
                if ("function" == typeof pagedestroy) try {
                    pagedestroy(), debugState && root.console.log("\u2714 Pagedestroy()")
                } catch (e) {
                    pagedestroy = void 0, debugState && root.console.log("! Pagedestroy() Catch Error")
                }
                $.fn.sparkline && $("#content .sparkline")[0] && ($("#content .sparkline").sparkline("destroy"), debugState && root.console.log("\u2714 Sparkline Charts destroyed!")), $.fn.easyPieChart && $("#content .easy-pie-chart")[0] && ($("#content .easy-pie-chart").easyPieChart("destroy"), debugState && root.console.log("\u2714 EasyPieChart Charts destroyed!")), $.fn.select2 && $("#content select.select2")[0] && ($("#content select.select2").select2("destroy"), debugState && root.console.log("\u2714 Select2 destroyed!")), $.fn.mask && $("#content [data-mask]")[0] && ($("#content [data-mask]").unmask(), debugState && root.console.log("\u2714 Input Mask destroyed!")), $.fn.datepicker && $("#content .datepicker")[0] && ($("#content .datepicker").off(), $("#content .datepicker").remove(), debugState && root.console.log("\u2714 Datepicker destroyed!")), $.fn.slider && $("#content .slider")[0] && ($("#content .slider").off(), $("#content .slider").remove(), debugState && root.console.log("\u2714 Bootstrap Slider destroyed!"))
            }
            pagefunction = null, b.removeData().html(""), b.html('<h1 class="ajax-loading-animation"><i class="fa fa-cog fa-spin"></i> Loading...</h1>'), b[0] == $("#content")[0] && ($("body").find("> *").filter(":not(" + ignore_key_elms + ")").empty().remove(), drawBreadCrumb(), $("html").animate({
                "scrollTop": 0
            }, "fast"))
        },
        "success": function (a) {
            b.css({
                "opacity": "0.0"
            }).html(a).delay(50).animate({
                "opacity": "1.0"
            }, 300), a = null, b = null
        },
        "error": function (c, d, e) {
            b.html('<h4 class="ajax-loading-error"><i class="fa fa-warning txt-color-orangeDark"></i> Error requesting <span class="txt-color-red">' + a + "</span>: " + c.status + ' <span style="text-transform: capitalize;">' + e + "</span></h4>")
        },
        "async": !0
    })
}

function drawBreadCrumb(a) {
    var b = $("nav li.active > a"),
        c = b.length;
    bread_crumb.empty(), bread_crumb.append($("<li>Home</li>")), b.each(function () {
        bread_crumb.append($("<li></li>").html($.trim($(this).clone().children(".badge").remove().end().text()))), --c || (document.title = bread_crumb.find("li:last-child").text())
    }), void 0 != a && $.each(a, function (a, b) {
        bread_crumb.append($("<li></li>").html(b)), document.title = bread_crumb.find("li:last-child").text()
    })
}

function pageSetUp() {
    "desktop" === thisDevice ? ($("[rel=tooltip], [data-rel=tooltip]").tooltip(), $("[rel=popover], [data-rel=popover]").popover(), $("[rel=popover-hover], [data-rel=popover-hover]").popover({
        "trigger": "hover"
    }), setup_widgets_desktop(), runAllCharts(), runAllForms()) : ($("[rel=popover], [data-rel=popover]").popover(), $("[rel=popover-hover], [data-rel=popover-hover]").popover({
        "trigger": "hover"
    }), runAllCharts(), setup_widgets_mobile(), runAllForms())
}

function getParam(a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var b = "[\\?&]" + a + "=([^&#]*)",
        c = new RegExp(b),
        d = c.exec(window.location.href);
    return null == d ? "" : d[1]
}
$.intervalArr = [];
var calc_navbar_height = function () {
    var a = null;
    return $("#header").length && (a = $("#header").height()), null === a && (a = $('<div id="header"></div>').height()), null === a ? 49 : a
},
    navbar_height = calc_navbar_height,
    shortcut_dropdown = $("#shortcut"),
    bread_crumb = $("#ribbon ol.breadcrumb"),
    topmenu = !1,
    thisDevice = null,
    ismobile = /iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()),
    jsArray = {},
    initApp = function (a) {
        return a.addDeviceType = function () {
            return ismobile ? ($.root_.addClass("mobile-detected"), thisDevice = "mobile", fastClick ? ($.root_.addClass("needsclick"), FastClick.attach(document.body), !1) : void 0) : ($.root_.addClass("desktop-detected"), thisDevice = "desktop", !1)
        }, a.menuPos = function () {
            ($.root_.hasClass("menu-on-top") || "top" == localStorage.getItem("sm-setmenu")) && (topmenu = !0, $.root_.addClass("menu-on-top"))
        }, a.SmartActions = function () {
            var a = {
                "userLogout": function (a) {
                    function b() {
                        window.location = a.attr("href")
                    }
                    $.SmartMessageBox({
                        "title": "<i class='fa fa-sign-out txt-color-orangeDark'></i> Logout <span class='txt-color-orangeDark'><strong>" + $("#show-shortcut").text() + "</strong></span> ?",
                        "content": a.data("logout-msg") || "You can improve your security further after logging out by closing this opened browser",
                        "buttons": "[No][Yes]"
                    }, function (a) {
                        "Yes" == a && ($.root_.addClass("animated fadeOutUp"), setTimeout(b, 1e3))
                    })
                },
                "resetWidgets": function (a) {
                    $.SmartMessageBox({
                        "title": "<i class='fa fa-refresh' style='color:green'></i> Clear Local Storage",
                        "content": a.data("reset-msg") || "Would you like to RESET all your saved widgets and clear LocalStorage?1",
                        "buttons": "[No][Yes]"
                    }, function (a) {
                        "Yes" == a && localStorage && (localStorage.clear(), location.reload())
                    })
                },
                "launchFullscreen": function (a) {
                    $.root_.hasClass("full-screen") ? ($.root_.removeClass("full-screen"), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()) : ($.root_.addClass("full-screen"), a.requestFullscreen ? a.requestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen ? a.webkitRequestFullscreen() : a.msRequestFullscreen && a.msRequestFullscreen())
                },
                "minifyMenu": function (a) {
                    $.root_.hasClass("menu-on-top") || ($.root_.toggleClass("minified"), $.root_.removeClass("hidden-menu"), $("html").removeClass("hidden-menu-mobile-lock"), a.effect("highlight", {}, 500))
                },
                "toggleMenu": function () {
                    $.root_.hasClass("menu-on-top") ? $.root_.hasClass("menu-on-top") && $(window).width() < 979 && ($("html").toggleClass("hidden-menu-mobile-lock"), $.root_.toggleClass("hidden-menu"), $.root_.removeClass("minified")) : ($("html").toggleClass("hidden-menu-mobile-lock"), $.root_.toggleClass("hidden-menu"), $.root_.removeClass("minified"))
                },
                "toggleShortcut": function () {
                    function a() {
                        shortcut_dropdown.animate({
                            "height": "hide"
                        }, 300, "easeOutCirc"), $.root_.removeClass("shortcut-on")
                    }

                    function b() {
                        shortcut_dropdown.animate({
                            "height": "show"
                        }, 200, "easeOutCirc"), $.root_.addClass("shortcut-on")
                    }
                    shortcut_dropdown.is(":visible") ? a() : b(), shortcut_dropdown.find("a").click(function (b) {
                        b.preventDefault(), window.location = $(this).attr("href"), setTimeout(a, 300)
                    }), $(document).mouseup(function (b) {
                        shortcut_dropdown.is(b.target) || 0 !== shortcut_dropdown.has(b.target).length || a()
                    })
                }
            };
            $.root_.on("click", '[data-action="userLogout"]', function (b) {
                var c = $(this);
                a.userLogout(c), b.preventDefault(), c = null
            }), $.root_.on("click", '[data-action="resetWidgets"]', function (b) {
                var c = $(this);
                a.resetWidgets(c), b.preventDefault(), c = null
            }), $.root_.on("click", '[data-action="launchFullscreen"]', function (b) {
                a.launchFullscreen(document.documentElement), b.preventDefault()
            }), $.root_.on("click", '[data-action="minifyMenu"]', function (b) {
                var c = $(this);
                a.minifyMenu(c), b.preventDefault(), c = null
            }), $.root_.on("click", '[data-action="toggleMenu"]', function (b) {
                a.toggleMenu(), b.preventDefault()
            }), $.root_.on("click", '[data-action="toggleShortcut"]', function (b) {
                a.toggleShortcut(), b.preventDefault()
            })
        }, a.leftNav = function () {
            topmenu || $("nav ul").jarvismenu({
                "accordion": menu_accordion || !0,
                "speed": menu_speed || !0,
                "closedSign": '<em class="fa fa-plus-square-o"></em>',
                "openedSign": '<em class="fa fa-minus-square-o"></em>'
            })
        }, a.domReadyMisc = function () {
            $("[rel=tooltip]").length && $("[rel=tooltip]").tooltip(), $("#search-mobile").click(function () {
                $.root_.addClass("search-mobile")
            }), $("#cancel-search-js").click(function () {
                $.root_.removeClass("search-mobile")
            }), $("#activity").click(function (a) {
                var b = $(this);
                b.find(".badge").hasClass("bg-color-red") && (b.find(".badge").removeClassPrefix("bg-color-"), b.find(".badge").text("0")), b.next(".ajax-dropdown").is(":visible") ? (b.next(".ajax-dropdown").fadeOut(150), b.removeClass("active")) : (b.next(".ajax-dropdown").fadeIn(150), b.addClass("active"));
                var c = b.next(".ajax-dropdown").find(".btn-group > .active > input").attr("id");
                b = null, c = null, a.preventDefault()
            }), $('input[name="activity"]').change(function () {
                var a = $(this);
                url = a.attr("id"), container = $(".ajax-notifications"), loadURL(url, container), a = null
            }), $(document).mouseup(function (a) {
                $(".ajax-dropdown").is(a.target) || 0 !== $(".ajax-dropdown").has(a.target).length || ($(".ajax-dropdown").fadeOut(150), $(".ajax-dropdown").prev().removeClass("active"))
            }), $("button[data-btn-loading]").on("click", function () {
                var a = $(this);
                a.button("loading"), setTimeout(function () {
                    a.button("reset")
                }, 3e3)
            }), $this = $("#activity > .badge"), parseInt($this.text()) > 0 && ($this.addClass("bg-color-red bounceIn animated"), $this = null)
        }, a.mobileCheckActivation = function () {
            $(window).width() < 979 ? ($.root_.addClass("mobile-view-activated"), $.root_.removeClass("minified")) : $.root_.hasClass("mobile-view-activated") && $.root_.removeClass("mobile-view-activated"), debugState && console.log("mobileCheckActivation")
        }, a
    }({});
initApp.addDeviceType(), initApp.menuPos(), jQuery(document).ready(function () {
    initApp.SmartActions(), initApp.leftNav(), initApp.domReadyMisc()
}),
    function (a, b, c) {
        function d() {
            e = b[h](function () {
                f.each(function () {
                    var b, c, d = a(this),
                        e = a.data(this, j);
                    try {
                        b = d.width()
                    } catch (f) {
                        b = d.width
                    }
                    try {
                        c = d.height()
                    } catch (f) {
                        c = d.height
                    } (b !== e.w || c !== e.h) && d.trigger(i, [e.w = b, e.h = c])
                }), d()
            }, g[k])
        }
        var e, f = a([]),
            g = a.resize = a.extend(a.resize, {}),
            h = "setTimeout",
            i = "resize",
            j = i + "-special-event",
            k = "delay",
            l = "throttleWindow";
        g[k] = throttle_delay, g[l] = !0, a.event.special[i] = {
            "setup": function () {
                if (!g[l] && this[h]) return !1;
                var b = a(this);
                f = f.add(b);
                try {
                    a.data(this, j, {
                        "w": b.width(),
                        "h": b.height()
                    })
                } catch (c) {
                    a.data(this, j, {
                        "w": b.width,
                        "h": b.height
                    })
                }
                1 === f.length && d()
            },
            "teardown": function () {
                if (!g[l] && this[h]) return !1;
                var b = a(this);
                f = f.not(b), b.removeData(j), f.length || clearTimeout(e)
            },
            "add": function (b) {
                function d(b, d, f) {
                    var g = a(this),
                        h = a.data(this, j);
                    h.w = d !== c ? d : g.width(), h.h = f !== c ? f : g.height(), e.apply(this, arguments)
                }
                if (!g[l] && this[h]) return !1;
                var e;
                return a.isFunction(b) ? (e = b, d) : (e = b.handler, void (b.handler = d))
            }
        }
    }(jQuery, this), $("#main").resize(function () {
        initApp.mobileCheckActivation()
    });
var ie = function () {
    for (var a, b = 3, c = document.createElement("div"), d = c.getElementsByTagName("i") ; c.innerHTML = "<!--[if gt IE " + ++b + "]><i></i><![endif]-->", d[0];);
    return b > 4 ? b : a
}();
if ($.fn.extend({
        "jarvismenu": function (a) {
            var b = {
                    "accordion": "true",
                    "speed": 200,
                    "closedSign": "[+]",
                    "openedSign": "[-]"
},
                c = $.extend(b, a),
                d = $(this);
            d.find("li").each(function () {
                0 !== $(this).find("ul").size() && ($(this).find("a:first").append("<b class='collapse-sign'>" + c.closedSign + "</b>"), "#" == $(this).find("a:first").attr("href") && $(this).find("a:first").click(function () {
                    return !1
}))
}), d.find("li.active").each(function () {
                $(this).parents("ul").slideDown(c.speed), $(this).parents("ul").parent("li").find("b:first").html(c.openedSign), $(this).parents("ul").parent("li").addClass("open")
}), d.find("li a").click(function () {
                0 !== $(this).parent().find("ul").size() && (c.accordion && ($(this).parent().find("ul").is(":visible") || (parents = $(this).parent().parents("ul"), visible = d.find("ul:visible"), visible.each(function (a) {
                    var b = !0;
                    parents.each(function (c) {
                        return parents[c] == visible[a] ? (b = !1, !1) : void 0
}), b && $(this).parent().find("ul") != visible[a] && $(visible[a]).slideUp(c.speed, function () {
                        $(this).parent("li").find("b:first").html(c.closedSign), $(this).parent("li").removeClass("open")
})
}))), $(this).parent().find("ul:first").is(":visible") && !$(this).parent().find("ul:first").hasClass("active") ? $(this).parent().find("ul:first").slideUp(c.speed, function () {
        $(this).parent("li").removeClass("open");
        if ($(this).parent("li").hasClass('firstMenuItem')) {
            $(this).closest('#leftMenuNav').removeClass('menu-activated');
        }
        $(this).parent("li").find("b:first").delay(c.speed).html(c.closedSign);

}) : $(this).parent().find("ul:first").slideDown(c.speed, function () {
                    $(this).parent("li").addClass("open"), $(this).closest('#leftMenuNav').addClass('menu-activated'), $(this).parent("li").find("b:first").delay(c.speed).html(c.openedSign)
}))
})
}
}), jQuery.fn.doesExist = function () {
        return jQuery(this).length > 0
}, $.navAsAjax || $(".google_maps")) {
    var gMapsLoaded = !1;
    window.gMapsCallback = function () {
        gMapsLoaded = !0, $(window).trigger("gMapsLoaded")
    }, window.loadGoogleMaps = function () {
        if (gMapsLoaded) return window.gMapsCallback();
        var a = document.createElement("script");
        a.setAttribute("type", "text/javascript"), a.setAttribute("src", "http://maps.google.com/maps/api/js?sensor=false&callback=gMapsCallback"), (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(a)
    }
}
$.navAsAjax && ($("nav").length && checkURL(), $(document).on("click", 'nav a[href!="#"]', function (a) {
    a.preventDefault();
    var b = $(a.currentTarget);
    b.parent().hasClass("active") || b.attr("target") || ($.root_.hasClass("mobile-view-activated") ? ($.root_.removeClass("hidden-menu"), $("html").removeClass("hidden-menu-mobile-lock"), window.setTimeout(function () {
        window.location.search ? window.location.href = window.location.href.replace(window.location.search, "").replace(window.location.hash, "") + "#" + b.attr("href") : window.location.hash = b.attr("href")
    }, 150)) : window.location.search ? window.location.href = window.location.href.replace(window.location.search, "").replace(window.location.hash, "") + "#" + b.attr("href") : window.location.hash = b.attr("href"))
}), $(document).on("click", 'nav a[target="_blank"]', function (a) {
    a.preventDefault();
    var b = $(a.currentTarget);
    window.open(b.attr("href"))
}), $(document).on("click", 'nav a[target="_top"]', function (a) {
    a.preventDefault();
    var b = $(a.currentTarget);
    window.location = b.attr("href")
}), $(document).on("click", 'nav a[href="#"]', function (a) {
    a.preventDefault()
}), $(window).on("hashchange", function () {
    checkURL()
})), $("body").on("click", function (a) {
    $('[rel="popover"], [data-rel="popover"]').each(function () {
        $(this).is(a.target) || 0 !== $(this).has(a.target).length || 0 !== $(".popover").has(a.target).length || $(this).popover("hide")
    })
}), $("body").on("hidden.bs.modal", ".modal", function () {
    $(this).removeData("bs.modal")
});
var mobil = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
var ie = false;
var wG = 0;
var mobilG = 1024;
var cc_question;
var pageTitle = window.document.title;
function msieversion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0)
        return (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
    else
        return ('diger');
}

initApp.mobileCheckActivation = function () {
};

if (msieversion() != 'diger')
    ie = true;

$(function () {
    $.blockUI.defaults.fadeOut = 100;
    $.blockUI.defaults.fadeIn = 0;
    $.datepicker.setDefaults($.datepicker.regional['tr']);

    var isFirefox = typeof InstallTrigger !== 'undefined';
    if (isFirefox) {
        $.root_.addClass("firefox");
    }


    wG = $(window).width();

    if (msieversion() != 'diger')
        $('html').addClass('ie ie' + msieversion());

    if ($('html').is('.ie6, .ie7, .ie8')) {
        ie = true;
    }



    $(".temsilci-pane .opener").click(function () {
        $(this).parent().toggleClass("active");
    });



    var btnMinify = $(".minifyme");


    $.root_.on('click.ezme', '[data-action="minifyMenu"]', function (e) {
        menuDurumu();
        window.setTimeout(function () {
            adjustDataTables();
        }, 100);
        e.preventDefault();
    });

    function menuDurumu(noClassdel) {
        if ($.root_.hasClass("minified")) {
            $.root_.removeClass('_menu-not-minified').addClass("_menu-minified");
        }
        else {
            $.root_.removeClass('_menu-minified').addClass("_menu-not-minified");

        }

    }

    menuDurumu(true);

    //$("<span class=\"page-width\"/>").appendTo("body");


    $(".datepicker + .input-group-addon").click(function () {
        $(this).prev("input").focus();
    });

    $.root_.on("click", '[data-action="popover-ad"]', function (a) {
        var t = $(this).position().top + $(this).height();
        var l = $(this).position().left;
        $("#popovers .popover:not(" + $(this).data("content") + ")").fadeOut(50);
        $("#popovers .popover" + $(this).data("content")).fadeIn(350).css({ top: t, left: l });
        a.preventDefault()
    });

    var pp = $("#popovers .popover");
    $(document).mouseup(function (a) {
        var cl = $(a.target).data("content");
        if (cl) {
            var p = pp.filter(cl);
            p.hasClass(cl.replace(".", "")) || pp.is(a.target) || 0 !== pp.has(a.target).length || pp.fadeOut(250);
        }
        else
            pp.is(a.target) || 0 !== pp.has(a.target).length || pp.fadeOut(250);
    });

    var back_to_top = $('.back-to-top');
    back_to_top.on('click', function (event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0,
        }, 500
		);
    });
    cc_question = $(".select-question-type");
    if (cc_question.length) {
        cc_question_sections = cc_question.find("section");
        $(window).on("resize.cc_question", resizeQuestion);
        resizeQuestion();
    }


});


function tooltipSetup() {
    var tooltipItems = $("[rel=tooltip]");
    tooltipItems.tooltip("destroy").unbind('click');
    tooltipItems.tooltip({ trigger: 'click', container: $('#mainViewWrapper #main') }).click(function () {
        tooltipItems.not(this).tooltip('hide');
        var tooltipdiv = $(this).next('.tooltip');
        if ($(window).width() < 1024 && tooltipdiv.length > 0 && (tooltipdiv.hasClass('bottom') || tooltipdiv.hasClass('top'))) {

            tooltipdiv.css('margin-left', '-' + ((tooltipdiv.width() - $(this).width()) / 2) + "px");
            tooltipdiv.find('.tooltip-arrow').css('left', '90%')
        }
    });
}

function loginResize() {
    var width = $(window).width();
    if (width <= 767) {
        var minH = $(".loginPane .tabs").removeAttr("style").outerHeight();
        var he = ($(window).height() - $("#header").outerHeight(true));
        var h = Math.max(he, minH);
        $(".loginPane .tabs").outerHeight(h);
    } else {
        $(".loginPane .tabs").removeAttr("style")
    }

};

function xyScrollInit(el) {
    var slimscrollTimeOutID;
    $(window).resize(function () {
        clearTimeout(slimscrollTimeOutID);
        slimscrollTimeOutID = setTimeout(function () {
            init();
        }, 300);
    });
    init();
    function init() {
        $(el).slimScroll({ height: "300px", alwaysVisible: true });
        $(el).slimScrollH({
            scrollByElement: $(el).parent(),
            width: 'auto',
            height: '300px'
        });
    }
}

function resizeQuestion() {
    var b = 0;
    cc_question_sections.removeAttr('style');
    $.each(cc_question_sections, function (i, e) {
        b = cc_question_sections.eq(i).height() > b ? cc_question_sections.eq(i).height() : b;
    });
    cc_question_sections.height(b);
    cc_question_sections.css("line-height", b + "px");
}


function adjustDataTables(isFilter) {
    if (!$('body').hasClass('spinner-active')) {
        var wwidth = $(window).width();
        var vbgridViews = $('#mainViewWrapper vb-grid-view');
        _.each(vbgridViews, function (gridView) {
            if (wwidth > 1000) {
                var $gridView = $(gridView);
                var tables = $gridView.find('.vb-grid:not(".DTFC_Cloned")');
                var fixedTables = $($gridView.find('.vb-grid.DTFC_Cloned')[1]);
                var bodyElement = $gridView.find('.dataTables_scroll .dataTables_scrollBody');
                var isFixedTable = false;

                if (tables.length > 0 && tables.find('td').length > 0) {
                    var table = tables.DataTable();
                    table.columns.adjust();
                    var initializeScroll = true;
                    if (fixedTables.length > 0) {
                        if (fixedTables.find('th').length > 0) {
                            adjustFixedTableRows($gridView);
                            isFixedTable = true;
                        }
                        else {
                            initializeScroll = false;
                        }
                    }
                    if (initializeScroll) {
                        if (isFilter) {
                            $gridView.find('.dataTables_scrollBody,.dataTables_scroll,.slimScrollDiv,.slimScrollDivH').height('auto');
                        }
                        if (bodyElement.height() > 448) {
                            bodyElement.slimScroll({ height: "450px", alwaysVisible: true });
                        }
                        if ($gridView.find('.dataTables_scrollBody').width() < $gridView.find('.dataTables_scrollBody table').width()) {

                            bodyElement.slimScrollH({
                                scrollByElement: bodyElement.parent(),
                                width: 'auto', height: (bodyElement.parent().height + 'px')
                            });
                        }
                        var scrollBody = $gridView.find('.dataTables_scrollBody');
                        if (isFixedTable) {
                            var headHeight = $gridView.find('.dataTables_scrollHead').height();
                            var bodyHeight = scrollBody.height();
                            if (bodyHeight > $gridView.find('.dataTables_scrollBody>table').height()) {
                                bodyHeight = $gridView.find('.dataTables_scrollBody>table').height();
                            }
                            if (headHeight && bodyHeight && headHeight > 0 && bodyHeight > 0) {
                                $gridView.find('.DTFC_LeftHeadWrapper table').height($gridView.find('.dataTables_scrollBody table').height())
                                $gridView.find('.DTFC_LeftHeadWrapper').height(headHeight + 'px');
                                $gridView.find('.dataTables_scrollHead').height(headHeight + 'px');
                                $gridView.find('.DTFC_LeftBodyWrapper').height(bodyHeight + 'px');
                                $gridView.find('.DTFC_LeftBodyLiner').height(bodyHeight - 1 + 'px');
                                $gridView.find('.dataTables_scrollBody').height(bodyHeight + 'px');
                                $gridView.find('.slimScrollDivH').height(bodyHeight + 'px');
                                $gridView.find('.dataTables_scroll').height((headHeight + bodyHeight + 1) + 'px');
                            }
                        }
                        scrollBody.mouseenter();
                    }

                }
            }
            else {
                $(gridView).children().first().scope().vm.responsiveHelper.respond();
            }
        });
    }
}

function adjustFixedTableRows(container) {
    if (container.find('.DTFC_Cloned').length > 0) {
        var grid = container.find('.vb-grid:not(".DTFC_Cloned")');
        var fixedColumns = grid.DataTable().fixedColumns();
        var fixedHeadLeft = container.find('.DTFC_LeftHeadWrapper table');
        if (fixedHeadLeft.length > 0)
            fixedColumns.settings()[0]._oFixedColumns._fnEqualiseHeights('thead', container.find('.dataTables_scrollHead table')[0], fixedHeadLeft[0]);
        var fixedLeft = container.find('.DTFC_LeftBodyLiner table');
        if (fixedLeft.length > 0)
            fixedColumns.settings()[0]._oFixedColumns._fnEqualiseHeights('tbody', container.find('.dataTables_scrollBody table')[0], fixedLeft[0]);

    }
}


function gridViewScreenSizeListener() {
    var gridScreenChangeTimeoutID;
    $(window).resize(function () {
        clearTimeout(gridScreenChangeTimeoutID);
        gridScreenChangeTimeoutID = setTimeout(adjustDataTables, 300);
    });
}
gridViewScreenSizeListener();



function loginSubmit(form) {
    form.submit(function () {
        if ($(this).valid()) {
            var $paswords = $('input[type=password]');
            _.each($paswords, function (input) {
                var $hidden = $(input).next('input[type=hidden]');
                if ($hidden.length > 0) {
                    $hidden.val($(input).val());
                    $(input).val(undefined);
                    $(input).attr('type', 'text');
                }
            })
            $(window).block({
                baseZ: 1060,
                css: {
                    border: 'none',
                    backgroundColor: 'transparent',
                    top: '300px',
                    left: '50%',
                    zIndex: '9999',
                    position: 'absolute',
                    width: '128px',
                    height: '128px',
                    margin: '-64px 0 0 -64px'

                },
                themedCSS: {
                    top: '300px',
                },
                message: '<span id="loading-image"></span>',
                ignoreIfBlocked: true
            });
        }
    });
}


function InitializeForMainPage() {
    DisableBackButtonFunctionality();
}
function DisableBackButtonFunctionality() {
    if (!history.pushState) {
        var url = '/main';
        for (var i = 0; i < 2; i++) {
            History.pushState(null, null, url);
        }
        window.document.title = pageTitle;
        History.Adapter.bind(window, 'statechange', function () {
            window.document.title = pageTitle;
        })
    }
    else {
        history.pushState(undefined, pageTitle, "");
        window.onpopstate = function (event) {
            try {
                history.pushState(undefined, pageTitle, "");
            }
            catch (ex) {

            }
        };
    }
}

// encryption
var hD = '0123456789ABCDEF';
function dec2hex(d) {
    var h = hD.substr(d & 15, 1);
    while (d > 15) {
        d >>= 4;
        h = hD.substr(d & 15, 1) + h;
    }
    return h;
}
var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
function base64_decode(input) {
    var output = new Array();
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    var orig_input = input;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    if (orig_input != input)
        alert("Warning! Characters outside Base64 range in input string ignored.");
    if (input.length % 4) {
        alert("Error: Input length is not a multiple of 4 bytes.");
        return "";
    }
    var j = 0;
    while (i < input.length) {
        enc1 = keyStr.indexOf(input.charAt(i++));
        enc2 = keyStr.indexOf(input.charAt(i++));
        enc3 = keyStr.indexOf(input.charAt(i++));
        enc4 = keyStr.indexOf(input.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output[j++] = chr1;
        if (enc3 != 64)
            output[j++] = chr2;
        if (enc4 != 64)
            output[j++] = chr3;
    }
    return output;
}
function Convert(str) {
    var output = base64_decode(str);
    var separator = "";
    var hexText = "";

    for (i = 0; i < output.length; i++) {
        hexText = hexText + separator + (output[i] < 16 ? "0" : "") + dec2hex(output[i]);
    }
    return hexText;
}
// encryption