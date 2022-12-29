function enter() {
    let a = document.querySelector('#idUser');
    let b = a.value;

    if(b === '') {
        let c = document.getElementsByClassName('testIdUser')[0].style.backgroundColor = "rgb(252, 223, 166)";
        let r = document.getElementsByClassName('alert')[0].textContent = "fields are not filled in properly";
    }

    let m = document.querySelector('#password');
    let z = m.value;

    if(z === '') {
        let p = document.getElementsByClassName('pass1')[0].style.backgroundColor = "rgb(252, 223, 166)";
        let r = document.getElementsByClassName('alert')[0].textContent = "fields are not filled in properly";
    }
}

function cancel() {
    let d = document.getElementsByClassName('testIdUser')[0].textContent = "";
    let j = document.getElementsByClassName('pass')[0].textContent = "";
}