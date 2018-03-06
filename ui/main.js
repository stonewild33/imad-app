console.log('Loaded!');
var e = document.getElementById('saket');
e.innerHTML='saket the great';

var img = document.getElementById('madi');

var moveLeft = 0;

function moveRight()
{   
    moveLeft = moveLeft + 10;
    img.style.moveLeft= moveLeft + 'px';
}
img.onclick = function() {
    var interval = setInterval(moveRight,100);
};