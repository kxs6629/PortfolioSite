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


function navFunction(){
	let links = $("#navLinks")[0];
	console.log(links);
	console.log($("#navLinks"));
	if (links.style.display === "block"){
		links.style.display = "none";
	}
	else {
		links.style.display = "block"
	}
}