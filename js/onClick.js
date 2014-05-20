$(document).ready(function(){
	$('.vid1').click(function(){
		$(this).toggleClass("open-vid");
		$(this).toggleClass("animate");
		$(".corporate").show();
		$("#video1")[0].play();
		$(".vid2, .vid3, .reelgif, .reeltext").hide();
	});
	$('.vid2').click(function(){
		$(this).toggleClass("open-vid");
		$(this).toggleClass("animate");
		$("commercial").show();
		$("#video2")[0].play();
		$(".vid1, .vid3, .reelgif, .reeltext").hide();
	});
	$('.vid3').click(function(){
		$(this).toggleClass("open-vid");
		$(this).toggleClass("animate");
		$("narrative").show();
		$("#video3")[0].play();
		$(".vid1, .vid2, .reelgif, .reeltext").hide();
	});
});