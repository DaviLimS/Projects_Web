function move() {
    let a = event.keyCode;
    let b = String.fromCharCode(a);

    let c = document.getElementById('player');
    let x;

    if(b === 'D') {
        x++;
    }

    let z = x;
    let y = z + 'px';

    c.style.marginLeft = y;
    return;
}