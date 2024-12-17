$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
        licenseKey:'gplv3-license',
		// autoScrolling:true,
		navigation: true,
		anchors: ['welcome','about','experience','project','contact'],
		menu:"#navMenu",
		slidesNavigation: true,
		slidesNavPosition :'bottom',
		parallax: true
	});
});