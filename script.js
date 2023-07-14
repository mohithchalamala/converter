document.getElementById('pa').onclick = temp;
document.getElementById('si').onclick = clear;

function temp() {
    var fuck = document.getElementById("far").value;
    var suck = document.getElementById("cel").value;

    if (fuck !== '') {
        suck = (parseFloat(fuck) - 32) / 1.8;
    } else {
        fuck = parseFloat(suck) * 1.8 + 32;
    }

    document.getElementById('far').value = parseFloat(fuck).toFixed(1);
    document.getElementById('cel').value = parseFloat(suck).toFixed(1);
}

function clear() {
    document.getElementById('far').value = '';
    document.getElementById('cel').value = '';
}
