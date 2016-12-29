jQuery(function($){

$('.nano').hide();

//$('#tags').animateCss('fadeIn');


//$('#tags').attr('placeholder', 'Wikipedia');
///////////iframe///////////////////

$('a#one').click(function() {
  $('.results').hide();
  $('.nano').hide();
  $('iframe.one').show();
});

//////////////////////////////

$("input").autocomplete({
  minLength: 2,
  select: function(event, ui) {
    if (ui.item) {
      $('input').val(ui.item.value);
    }
    $('button#searchFor').click();
  }
});

$('input').keyup(function(event) {
  if (event.which === "Enter") {
    $('button#searchFor').click();
    $('html, body').animate({
    scrollTop: $(".results").offset().top
  }, 1000);
  }
});

//////// Search Button Begins ////////////////
$('button#searchFor').click(function() {
  function emptyInput() {
    $('.results').empty();
  }
  /////// iframe
  $('input').keyup(function(event) {
    if (event.which === "Backspace") {
      emptyInput();
    }
  });
  //$('iframe.one').hide();
  /////////////
  var query = '';

  var baseURL = 'https://en.wikipedia.org/wiki/';
  emptyInput();
  query = $('input').val();

  $('.results').removeClass('vert-mid').addClass('animated slideInDown');

  var queryURL = 'https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=' + query + '&callback=?'

  $.getJSON(queryURL, function(data) {
    for (var i = 0; i < 10; i++) {
      var term = data.query.search[i].title;
      //var pic = data.query.allimages[i].url;
      //console.log(pic);
      var snip = data.query.search[i].snippet;
      //var picLink = '<img src="' + baseURL + pic + '">';
      var titleLink = '<div id="divide"><a id="two" href="' + baseURL + term + '"target="_blank">' + '<p id="article-one">' + term + '</p><p id="article-two">' + snip + '</p>' + '</a></div>';

      //$('.results').append('<dd>' + picLink + '</dd>');
      //$('#form').slideUp();
      $('.results').append('<dt id="articles">' + titleLink + '</dt>');
      $('.nano').show().addClass('fadeIn');
    }

  })

});
/////////Search Ends ////////////////////// 
$("input").autocomplete({
  autoFocus: true,
  source: function(req, res) {
    $.ajax({
      url: "http://en.wikipedia.org/w/api.php",
      dataType: "jsonp",
      data: {
        'action': "opensearch",
        'format': "json",
        'search': req.term,
      },
      success: function(data) {
        res(data[1])

      }
    });
  }
})

$('#AutocompleteElementID').data().uiAutocomplete.term = null;
});