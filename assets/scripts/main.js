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

// (function(){
// 	let dotCount = 0;
// 	let prevScroll = 0;
// 	$(window).scroll(function(){
// 		let curScroll = $(this).scrollTop();
// 		if (curScroll > prevScroll){
// 			dotCount++;
			// $("#dotList").children()[dotCount].attr("background-color","#ffffff");
// 		} else {
// 			dotCount--;
// 			$("#dotList").children()[dotCount].attr("background-color","#ffffff");
// 		}
// 		prevScroll = curScroll;
// 		console.log(dotCount);
// 	});
// }());

let dotCount = 0;
let curSpan = $(".navDot")[dotCount]
$('body').on('mousewheel', function(e){
	if(e.originalEvent.wheelDelta > 0) {
		console.log('up 3');
		dotCount--;
		console.log($(".navDot")[dotCount])
		curSpan.css("background-color","#ffffff");
		// $("#dotList").children()[dotCount].attr("background-color","#ffffff");
		// .attr("background-color","#ffffff")
	}
	else {
		console.log('down 3');
		dotCount++;
		console.log($(".navDot")[dotCount])
		// console.log($("#dotList").children()[dotCount])
		// $("#dotList").children()[dotCount].attr("background-color","#ffffff")
	}
});