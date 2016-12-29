function addTriangleTo(target) {
  var dimensions = target.getClientRects()[0];
  var pattern = Trianglify({
    cell_size: 100,
    variance: 0.75,
    x_colors: 'random',
    y_colors: 'match_x',
    palette: Trianglify.colorbrewer,
    color_space: 'lab',
    color_function: false,
    stroke_width: 1.51,
    width: 1500,
    height: 1500,
    seed: null
  });
  target.style['background-image'] = 'url(' + pattern.png() + ')';
}

// addTriangleTo(document.getElementById('one'));
// addTriangleTo(document.getElementById('two'));
// addTriangleTo(document.getElementById('three'));
// addTriangleTo(document.getElementById('four'));
// addTriangleTo(document.getElementById('five'));
// addTriangleTo(document.getElementById('six'));
// addTriangleTo(document.getElementById('seven'));
// addTriangleTo(document.getElementById('eight'));
// addTriangleTo(document.getElementById('nine'));
// addTriangleTo(document.getElementById('zero'));
// addTriangleTo(document.getElementById('times'));
// addTriangleTo(document.getElementById('divide'));
// addTriangleTo(document.getElementById('plus'));
// addTriangleTo(document.getElementById('minus'));
// addTriangleTo(document.getElementById('clear'));
// addTriangleTo(document.getElementById('equals'));
// addTriangleTo(document.getElementById('period'));
// addTriangleTo(document.getElementById('input'));
addTriangleTo(document.getElementById('main-back'));

$('#one').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '1'
}).click(function() {
  calculator.ans.value += 1
})
$('#two').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '2'
}).click(function() {
  calculator.ans.value += 2
})
$('#three').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '3'
}).click(function() {
  calculator.ans.value += 3
})
$('#four').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '4'
}).click(function() {
  calculator.ans.value += 4
})
$('#five').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '5'
}).click(function() {
  calculator.ans.value += 5
})
$('#six').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '6'
}).click(function() {
  calculator.ans.value += 6
})
$('#seven').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '7'
}).click(function() {
  calculator.ans.value += 7
})
$('#eight').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '8'
}).click(function() {
  calculator.ans.value += 8
})
$('#nine').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '9'
}).click(function() {
  calculator.ans.value += 9
})
$('#zero').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '0'
}).click(function() {
  calculator.ans.value += 0
})
$('#equals').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '='
}).click(function() {
  var result = eval(calculator.ans.value)
  calculator.ans.value = result
})
$('#clear').attr({
  class: 'animated fadeIn',
  type: 'reset',
  value: 'C'
})
$('#plus').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '+'
}).click(function() {
  calculator.ans.value += '+'
})
$('#minus').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '-'
}).click(function() {
  calculator.ans.value += '-'
})
$('#times').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '*'
}).click(function() {
  calculator.ans.value += '*'
})
$('#divide').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '/'
}).on('click', function() {
  calculator.ans.value += '/'
})
$('#period').attr({
  class: 'animated fadeIn',
  type: 'button',
  value: '.'
}).on('click', function() {
  calculator.ans.value += '.'
})