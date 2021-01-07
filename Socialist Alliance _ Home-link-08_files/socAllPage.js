var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

//	window.onload = init; 

$(document).ready(function() {
	fillMonitor(); 
	setNewWindowLinks(); 
//	formatHomeStories(); 
}); 

function fillMonitor() {
	if (typeof(window.innerHeight) == 'number') {
	//Non-IE
	windowHeight = window.innerHeight;
	} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
	//IE 6+ in 'standards compliant mode'
	windowHeight = document.documentElement.clientHeight;
	} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) {
	//IE 4 compatible
	windowHeight = document.body.clientHeight;
	}

	var pageWrap = document.getElementById('wrap');
	var wrapHeight = pageWrap.offsetHeight; 

	if (wrapHeight < windowHeight) {
		pageWrap.style.height = windowHeight + 'px'; 
	}
}

function setNewWindowLinks() {
	var links = document.getElementsByTagName('a'); 
	var numLinks = links.length; 

	for (var i = 0; i < numLinks; i++) {
		if (links[i].className == 'newWindow') {
			links[i].onclick = function () {
				window.open(this.href); 
				return false; 
			}
		}
	}
}

/*
function formatHomeStories() {
	$('.Home .story').each(function() {
		// hide all after headline and first para
		$(this).children().slice(2).css('opacity', 0).hide(); 
		// add 'show/hide' link
		$(this).append('<p><a class="showStory">read more ...</a></p>'); 
	})

	$('.Home .story a.showStory').bind('click', showStory, false); 
}

function showStory() {
	// show hidden paragraphs
	var linkPara = $(this).parent('p'); 
	linkPara.siblings().show(500, function() {
		// fade in content
		linkPara.siblings().animate({opacity: 1}, 500, function() {
			// change 'show/hide' link
			linkPara.html('<a class="hideStory">read less ...</a>'); 
			$('.Home .story a.hideStory').bind('click', hideStory, false); 
		})
	}); 
}

function hideStory() {
	// hide paragraphs
	var linkPara = $(this).parent('p'); 
	linkPara.siblings().slice(2).animate({opacity: 0}, 500, function() {
		// hide content
		$(this).hide(500, function() {
			// change 'show/hide' link
			linkPara.html('<a class="showStory">read more ...</a>'); 
			$('.Home .story a.showStory').bind('click', showStory, false); 
		})
	}); 
}
*/

}
/*
     FILE ARCHIVED ON 00:59:42 Jun 01, 2020 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:00:15 Jan 06, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 125.494
  exclusion.robots: 0.13
  exclusion.robots.policy: 0.12
  RedisCDXSource: 2.177
  esindex: 0.009
  LoadShardBlock: 101.34 (3)
  PetaboxLoader3.datanode: 167.245 (5)
  CDXLines.iter: 19.4 (3)
  load_resource: 217.711 (2)
  PetaboxLoader3.resolve: 63.368 (2)
*/