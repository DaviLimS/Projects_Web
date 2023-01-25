let h = 0;
let m = 0;
let s = 0;

let tempo = 1000;
let cron;

function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    clearInterval(cron);
    h = 0;
    m = 0;
    s = 0;

    document.getElementById('text').innerText = "00:00:00";
} 

function timer() {
    s++;
    if(s == 60) {
        s = 0;
        m++;

        if(m == 60) {
            m = 0;
            h++;
        }
    }

    let format = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    document.getElementById('text').innerText = format;

    return format;
}