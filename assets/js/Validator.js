// validation.js
function showError(msg) {
    //? Simple alert for error messages
    alert(msg);
}

function validateNumber(num) {
    if (num === '' || isNaN(num)) {
        showError("رقم غير صالح");
        return false;
    }
    return true;
}

function validateOperation(op) {
    const allowed = ['+', '-', '*', '/'];
    if (!allowed.includes(op)) {
        showError("عملية غير صالحة");
        return false;
    }
    return true;
}
