function calculate() {
    let temperature = document.querySelector('#temp');
    let wind = document.querySelector('#wind');

    let var1 = temperature.value;
    let var2 = wind.value;

    let thermSensation = var1 - var2;

    if(var1 != '' && var2 != '') {
        let p = document.getElementsByClassName('indicator')[0].textContent = thermSensation + "°";
    }
    else {
        let p = document.getElementsByClassName('indicator')[0].textContent = "error";
    }
}