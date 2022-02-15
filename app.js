// Tutorial Credit to Nuno Oliviera http://jsfiddle.net/nmoliveira/D999e/

let ticket = document.getElementById('ticket'),
    ctx = ticket.getContext('2d'),
    isDown = false,
    radius = 50,
    pi2 = Math.PI * 2,
    img = new Image;

img.onload = start;
img.src = './assets/award.jpg';


function start() {
    ctx.drawImage(this, 0, 0, ticket.width, ticket.height);
    ctx.globalCompositeOperation = 'destination-out';
    ticket.onmousedown = handleMouseDown;
    ticket.onmousemove = handleMouseMove;
    window.onmouseup = handleMouseUp;
}

function handleMouseDown(e) {
    isDown = true;
    let pos = getXY(e);
    erase(pos.x, pos.y);
}
function handleMouseUp(e) {
    isDown = false;
}
function handleMouseMove(e) {
    if (!isDown) return;
    let pos = getXY(e);
    erase(pos.x, pos.y);   
}

function getXY(e) {
    let rect = ticket.getBoundingClientRect();
    return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    }
}

function erase(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, pi2);
    ctx.fill();
}