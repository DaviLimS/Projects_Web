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

    if(b === 'testuser' && z === 'mypassword') {
        let c = document.getElementsByClassName('testIdUser')[0].style.backgroundColor = "rgb(204, 255, 203)";
        let p = document.getElementsByClassName('pass1')[0].style.backgroundColor = "rgb(204, 255, 203)";
        let r = document.getElementsByClassName('alert')[0].textContent = "correct";
    }
    if (b != 'testuser' && b != '' && z != 'mypassword' && z != '') {
        let c = document.getElementsByClassName('testIdUser')[0].style.backgroundColor = "rgb(255,114,118)";
        let p = document.getElementsByClassName('pass1')[0].style.backgroundColor = "rgb(255,114,118)";
        let r = document.getElementsByClassName('alert')[0].textContent = "ID or password it's not correct, try again";
    }
}

function del() {
    let d = document.getElementById('idUser').value = '';
    let j = document.getElementById('password').value = '';
    let y = document.getElementsByClassName('alert')[0].textContent = ' ';

    let c = document.getElementsByClassName('testIdUser')[0].style.backgroundColor = "white";
    let p = document.getElementsByClassName('pass1')[0].style.backgroundColor = "white";
}