

// Quotes @ https://raw.githubusercontent.com/liberaltech/QuoteDB/master/quotes.json

jQuery(document).ready(function(){
	jQuery('#button').click(function quotefunc() {
			jQuery.getJSON({
				url: "https://raw.githubusercontent.com/liberaltech/QuoteDB/master/quotes.json",
				dataType:'json',
				success: function(data){
					
					
					$('<img />').attr('src', '/images/').appendTo('#mylist');
					
					var myQuotes = data.quoteDB;
			  	var randomQuote = Math.floor(Math.random() * myQuotes.length);
			  	var Q = myQuotes[randomQuote].quote;
			  	var A = myQuotes[randomQuote].author;
			  	jQuery('#quote', '#randomquote').text(Q);
			 	 	jQuery('#author', '#randomquote').text(A);
					
			  	// var newText = Q + '\n - ' + A + '\n';
					
					
				}
			});
		});
		jQuery('#button').trigger("click").hide();
		setTimeout(function() {
			setInterval(function() {
				jQuery('#button').trigger("click");
			}, 4000);
		},4000);
		// jQuery('#button').click(quotefunc());
});

// function quotefunc() {
//   var randomQuote = Math.floor(Math.random() * myQuotes.length);
//   var Q = myQuotes[randomQuote].quote;
//   var A = myQuotes[randomQuote].author;
//   jQuery('#quote', '#randomquote').text(Q);
//   jQuery('#author', '#randomquote').text(A);
//
//   var newText = Q + '\n - ' + A + '\n';
// }
// jQuery(document).ready(function() {
//   jQuery('button').click(quotefunc());
// });

jQuery("button.twitter-share").click(function() {
  var Quote = jQuery('#quote').html();
  var Author = jQuery('#author').html();
  var user = " @iamjorgemejia";
  var Link = encodeURI('https://twitter.com/intent/tweet?text=');

  Link += '"' + Quote + '"';
  Link += " - ";
  Link += Author;
  Link += user;
  //$('iframe').open(Link, "_blank"); 
  window.open(Link, "_blank");
});