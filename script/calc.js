function addToInputs(value) {
    if (value === '*') {
        value = 'x';
    }
    document.getElementById('inputs').value += value;
}

function clearInput() {
    document.getElementById('inputs').value = '';
}

function calculate() {
    var expression = document.getElementById('inputs').value;

    expression = expression.replace(/x/g, '*');

    try {
        var result = eval(expression);
        document.getElementById('inputs').value = result;
    } catch (error) {
        document.getElementById('inputs').value = 'Invalid!';
    }
}