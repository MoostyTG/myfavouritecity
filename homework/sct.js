function calculate() {
    const x = Number(document.getElementById('x').value);
    const y = Number(document.getElementById('y').value);
    const result = document.getElementById('result');

    if (x === 0) {
        result.value = 'Беда! На 0 делить нельзя!';
    }
    else if (y === 0) {
        result.value = 'Беда! На 0 делить нельзя!';
    }
    else {
    const z = 1 / (x * y);
    result.value = z;
    }
}

document.getElementById('verify').addEventListener('click', calculate);