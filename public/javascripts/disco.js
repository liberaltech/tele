$(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
$(function(){
	$('a#prance').on('click', function() {

		$.smoothScroll({
			scrollElement: $('html,body'),
			scrollTarget: '#dance'
		});
		return false;
	});
});
jQuery(window).scroll(function () {
	var s = $(window).scrollTop(),
	d = $(document).height(),
	c = $(window).height();
	scrollPercent = (s / (d-c)) * 100;
	var position = scrollPercent;
	$("#progressbar").attr('value', position);
});
