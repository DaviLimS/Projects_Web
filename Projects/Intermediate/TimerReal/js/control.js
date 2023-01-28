let s = 0;
let m = 0;
let h = 0;

let delay = 1000;
let cron;

function start() {
    cron = setInterval(() => { timer(); }, delay);

    let w = new Date;
    s = w.getSeconds();
    m = w.getMinutes();
    h = w.getHours();
}

function pause() {
    clearInterval(cron);
}

function reset() {
    clearInterval(cron);
    s = 0;
    m = 0;
    h = 0;

    document.getElementById("text").innerText = "0" + h + ":" + "0" + m + ":" + "0" + s;
}

function timer() {
    if(s <= 0 && m <= 0 && h <= 0) {
        pause();
    }
    else {
        s--;
    }

    if(s == 0 && m != 0 && h != 0) {
        s = 59;
        m--;

        if(m == 0 && h != 0) {
            m = 59;
            h--;
        }
    }

    let format = (h < 10 ? "0" + h : h) + ":" + (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
    document.getElementById('text').innerText = format;

    return format;
}