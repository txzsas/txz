/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});
/**
 * Copyright (c) 2007-2016 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.0
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else{a(jQuery)}}(function($){var g=location.href.replace(/#.*/,'');var h=$.localScroll=function(a){$('body').localScroll(a)};h.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window};$.fn.localScroll=function(a){a=$.extend({},h.defaults,a);if(a.hash&&location.hash){if(a.target)window.scrollTo(0,0);scroll(0,location,a)}return a.lazy?this.on(a.event,'a,area',function(e){if(filter.call(this)){scroll(e,this,a)}}):this.find('a,area').filter(filter).bind(a.event,function(e){scroll(e,this,a)}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')===g&&(!a.filter||$(this).is(a.filter))}};h.hash=function(){};function scroll(e,a,b){var c=a.hash.slice(1),elem=document.getElementById(c)||document.getElementsByName(c)[0];if(!elem)return;if(e)e.preventDefault();var d=$(b.target);if(b.lock&&d.is(':animated')||b.onBefore&&b.onBefore(e,elem,d)===false)return;if(b.stop){d.stop(true)}if(b.hash){var f=elem.id===c?'id':'name',$a=$('<a> </a>').attr(f,c).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[f]='';$('body').prepend($a);location.hash=a.hash;$a.remove();elem[f]=c}d.scrollTo(elem,b).trigger('notify.serialScroll',[elem])}return h}));
function replaceInStr(a,b,c) {
	var re = new RegExp(a , "g");
	return c.replace(re, b);
}
function getBodyId() {
		return document.body.getAttribute('id');
	}

$('#idiomas span').not('.fr')
.click(function() {
	var flag = $(this).attr('data-flag'), lang = $('html').attr('lang'), marker = '/ay_', goTo = '/index.php';
	if (flag == lang) return;
	if ( this.parentElement.tagName == 'LI' ) {
		if ( flag !== 'en' ) {
			goTo = marker+flag+'/index.php';
		}
	} else {
	    if (getBodyId()=='search-result') {
		    goTo = marker+flag+'/search.php';
	    } else {
		    goTo = replaceInStr(marker+lang,marker+flag,document.URL);
	    }
	}
	window.location.href = goTo;
})

if ($('#copyrightOpen').length > 0) {
	var $copyright = $('#copyright');
	$('#copyrightOpen').click(function() {
		$copyright.animate({
		    top: "0"
		  }, 600, function() {
		    // Animation complete.
		});
	});
	$('#copyrightClose').click(function() {
		$copyright.css('top','-500px');
	});
}

$('#menuToggle').click(function() {
	var $pageNav = $('#pageNav');
	if (parseInt($pageNav.css('left')) < 0) {
		$pageNav.finish().animate({
		    left: "0"
		  }, 600, function() {
		    // Animation complete.
		});
	} else {
		$pageNav.finish().animate({
		    left: "-30em"
		  }, 600, function() {
		    $pageNav.css('left','');
		});
	}
});

if ($('#acerca_de').length > 0) {
	$('#acerca_de').click(function() {
		$('#acerca_section').slideDown('slow', function() { $.scrollTo( '#acerca_section', 800 ) });
	});
}
if ($('#croads').length > 0) {
	$('#croads a:not(#copyrightClose)').click(function() {
		$.scrollTo( this.getAttribute("href"), 800, {offset: {top:-30} } ); return false;
	});
}
if (getBodyId() == 'Foundations-of-Buddhism') {
	$('a.ft').each(function() {
		var _this = $(this),
		nr = replaceInStr('\\[','',_this.text()),
		nr = Number(replaceInStr(']','',nr))-1,
		_fn = $('ol.footnotes li').eq(nr);
		cont = _fn.html();
		_this.tooltip({ content: cont });
	})
}
var prepareSearch = function() {
	var $searchForm = $('#searchForm');
	$('#selectAll').click(function(e){
		$searchForm.find('input:checkbox').prop('checked', true);
	});
	$('#deselectAll').click(function(e){
		$searchForm.find('input:checkbox').prop('checked', false);
	});
	$searchForm.find('li').click(function(e) {
		if (e.target.type !== 'checkbox') {
			$('input:checkbox', this).trigger('click');
		}
	});
	$('#searchInput')[0].select();
	$( '#searchBut' ).click(function() {
		var _searchStr = $('#searchInput').val(), flag = true;
		if ( _searchStr.length < 2 ) {
			$('#lengthErr:hidden').slideDown('slow');
			flag = false;
		} else {
			$('#lengthErr:visible').hide();
		}
		if ($searchForm.find('input[type=checkbox]:checked').length == 0)
		 {
			$('#bookErr:hidden').slideDown('slow');
			flag = false;
		} else {
			$('#bookErr:visible').hide();
		}
		if ( flag ) {
		var msg = "", lang = $('html').attr('lang');
		if ( lang == 'ru' ) { msg =  "<p>Идёт поиск...</p>"; } else { msg =  "<p>Search in progress...</p>"; }
		 $searchForm.submit();
		 $.blockUI({ message: msg, css: { backgroundColor: '#fff', color: '#000' }  });
		 }
	});
}
if (getBodyId() == 'search' || getBodyId() == 'search-test') {
	prepareSearch();
	$(window).on('unload', function() {
	    $.unblockUI();
	});
}

if (getBodyId() == 'search-result' || getBodyId() == 'search-result-test') {
	$('#searchSummary').insertAfter( '#searchToken' );
	$('#searchSummary a').click(function() {
		$.scrollTo( this.getAttribute("href"), 800, {offset: {top:-30} } ); return false;
	});
	$('.searchBookTitle').click(function() {
		$.scrollTo({ top:0, left:0}, 800 );
	});
}

$('a.hidemail').each(function(){var href=$(this).attr('href');$(this).click(function(){var t;var self=$(this);$(window).blur(function(){clearTimeout(t)});t=setTimeout(function(){document.location.href='https://www.agniyoga.org/ay_en/contact.php'},500)})});
var loadPapers = function(_id){
	var $id=$('#_id'), $onePaper=$( '#onePaper' ),
	theFolder = (_id == 'prevPapers') ? 'ay_en/study-papers/' : 'ay_en/compilations/' ;
	$('.toLoad a').click( function(e) {
		var this_id = this.id;
		e.preventDefault();
		var h = theFolder+$(this).attr('href');
		  $onePaper.load( h + ' #toLoad', function( response, status, xhr ) {
			  if ( status == "error" ) {
				var msg = "Sorry but there was an error: ";
				$onePaper.html( msg + xhr.status + " " + xhr.statusText );
			  } else {
				$onePaper.fadeIn(200, slide);
				}
			});

		  var slide = function() {
			  if (_id == 'prevPapers' && this.id !== 'curPaper') {
				  $.scrollTo( { top:0, left:0 }, 800 );
			  } else if (_id == 'compilationsList' ) {
				   $.scrollTo( $onePaper,800, {offset:-40} );
			  }
		  }
	})
}
if (document.getElementById('prevPapers') ) {
	loadPapers('prevPapers');
} else if (document.getElementById('compilationsList') ) {
	loadPapers('compilationsList');
}

//when DOM fully loaded
$(function() {
	if (getBodyId() !== 'index') {
	    var $pageNav = $('#pageNav'), $contWrap = $('#contWrap'),
	    leftH = $pageNav.innerHeight(), rightH = $pageNav.next('section:not(".entradas")').innerHeight() || $('#searchResult').innerHeight();
	    $('#copyrightOpen').css('opacity','1'); $pageNav.css('opacity','1');
	    if (leftH>rightH) { $contWrap.css({'min-height':leftH+'px'}) } else {$contWrap.css({'min-height':'initial'}) };
	  }
});