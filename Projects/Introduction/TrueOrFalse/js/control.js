function check() {
    let bool01 = document.querySelector('#bool1');
    let bool02 = document.querySelector('#bool2');

    let bool1 = bool01.value;
    let bool2 = bool02.value;

    if(bool1 === bool2) {
        let text = document.getElementsByClassName('text')[0].textContent = "true";
    }
    else {
        let text = document.getElementsByClassName('text')[0].textContent = "false";
    }
}