$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        licenseKey:'gplv3-license',
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$(".navDot:eq(0)").css({"backgroundColor":"#ffffff"});
	$.fn.fullpage.setAllowScrolling(true);
	
});

/**
	There's some bugs here atm, but a basic proof of concept exsits
	Behavior should be reflected based on navigation progress, not just scroll
	Else this leads to behavior currently exhibted when scrolling faster than fullpage can scroll
*/
let dotCount = 0;
$('body').on('mousewheel', function(e){
	if(e.originalEvent.wheelDelta > 0) {
		console.log('up');
		if(dotCount > 0){
			$(".navDot:eq("+dotCount+")").css({"backgroundColor":"transparent"});
			dotCount--;
			$(".navDot:eq("+dotCount+")").css({"backgroundColor":"#ffffff"});
		}
	}
	else {
		console.log('down');
		if(dotCount < 4){
			$(".navDot:eq("+dotCount+")").css({"backgroundColor":"transparent"});
			dotCount++;
			$(".navDot:eq("+dotCount+")").css({"backgroundColor":"#ffffff"});
		}
	}
});