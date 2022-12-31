function reset() {
    let test = document.getElementsByClassName('text')[0].textContent = "";
}

function keyValue() {
    let a = event.keyCode;
    let b = String.fromCharCode(a); 

    switch(a) {
        case  91:
            b = 'Command';
            break;
        case 18:
            b = 'Option';
            break;
        case 17:
            b = 'Control';
            break;
        case 16:
            b = 'Shift';
            break;
        case 20:
            b = 'Caps Lock';
            break;
        case 9:
            b = 'Tab';
            break;
        case 37:
            b = 'Left Arrow';
            break;
        case 38:
            b = 'Up Arrow';
            break;
        case 39:
            b = 'Right Arrow';
            break;
        case 40:
            b = 'Down Arrow';
            break;
        case 8:
            b = 'Delete';
            break;
        case 13:
            b = 'Enter'
            break;
        case 32:
            b = 'Space';
            break;
        default:
            break;
    }

    let c = document.getElementsByClassName('text')[0].textContent = b + " code: " + a;
}