function generate() {
    let x = Math.random();
    let y = x * 1000000;

    document.getElementById("ui").innerText = y;
}