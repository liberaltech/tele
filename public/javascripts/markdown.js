$('#outward').html(marked($('#inward').val()));
document.onkeyup = function(){
  $('#outward').html(marked($('#inward').val()));
}