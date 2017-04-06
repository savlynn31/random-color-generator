var red;
var green;
var blue;
var rgbColor;
var test = document.getElementById('test');
var button = document.getElementById('button');
var colorBox = document.getElementById('color');

button.addEventListener('click', function() {
  var html = '';
  for (var i = 0; i < 4; i++) {
    red = Math.floor(Math.random() * 256 );
    green = Math.floor(Math.random() * 256 );
    blue = Math.floor(Math.random() * 256 );
    rgbColor = 'rgb(' + red + ',' + green + ',' +   blue + ')';
    html += '<div style="background-color:' +       rgbColor + '"></div>';
  }
    colorBox.innerHTML = html;
});