// calculator.js

let current = '';
let previous = '';
let operator = null;
const MAX_LENGTH = 10;

const display = document.getElementById('display');

function updateDisplay(value) {
    display.textContent = value;
}

//? big number
function pressNumber(num) {
    if (current.length >= MAX_LENGTH) {
        showError("الرقم كبير قوي");
        return;
    }
    current += num;
    updateDisplay(current);
}

//? set operator
function setOperator(op) {
    if (current === '') {
        showError("اختر الرقم الأول");
        return;
    }
    if (previous !== '') {
        calculate();
    }
    operator = op;
    previous = current;
    current = '';
}

//? calculate
function calculate() {
    if (previous === '' || current === '' || operator === null) {
        showError("عملية غير مكتملة");
        return;
    }

    if (operator === '/' && Number(current) === 0) {
        showError("لا يمكن القسمة على صفر");
        return;
    }

    let a = Number(previous);
    let b = Number(current);
    let result;

    switch (operator) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = a / b; break;
    }

    // قص الرقم لو طويل
    result = result.toString().slice(0, MAX_LENGTH);

    updateDisplay(result);

    saveHistory(a, operator, b, result);

    // إعادة التهيئة
    previous = '';
    current = result;
    operator = null;
}


// مسح كل شيء
function clearAll() {
    current = '';
    previous = '';
    operator = null;
    updateDisplay('0');
}

// مسح الرقم الحالي فقط
function clearEntry() {
    current = '';
    updateDisplay('0');
}

// تحديث setOperator بحيث الرقم القديم يروح للـ previous
function setOperator(op) {
    if (current === '') {
        showError("اختر الرقم الأول");
        return;
    }
    if (previous !== '') {
        // لو في عملية سابقة، احسبها أول
        calculate();
    }
    operator = op;
    previous = current;
    current = '';   //delete current from here
    updateDisplay('0'); //! ready for new number

//? big number
function pressNumber(num) {
    if (current.length >= MAX_LENGTH) {
        showError("الرقم كبير قوي");
        return;
    }
    current += num;
    updateDisplay(current);
}
}
