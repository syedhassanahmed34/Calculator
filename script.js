document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        clearDisplay();
    }
});

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    var expression = document.getElementById('display').value;
    var result;
    try {
        var operator = expression.match(/[+\-*\/]/)[0];
        var operands = expression.split(operator);
        var operand1 = parseFloat(operands[0]);
        var operand2 = parseFloat(operands[1]);
        
        switch(operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
            default:
                result = 'Error';
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
