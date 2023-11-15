function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    var display = document.getElementById('display');
    try {
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (error) {
        display.value = 'Error';
    }
}
