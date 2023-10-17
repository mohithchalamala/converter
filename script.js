document.getElementById('pa').onclick = temp;
document.getElementById('si').onclick = clear;

function temp() {
    var f = document.getElementById("far").value;
    var s = document.getElementById("cel").value;

    if (f !== '') {
        s = (parseFloat(f) - 32) / 1.8;
    } else {
        f = parseFloat(s) * 1.8 + 32;
    }

    document.getElementById('far').value = parseFloat(f).toFixed(1);
    document.getElementById('cel').value = parseFloat(s).toFixed(1);
}

function clear() {
    document.getElementById('far').value = '';
    document.getElementById('cel').value = '';
}
