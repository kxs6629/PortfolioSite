$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        licenseKey:'gplv3-license',
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});