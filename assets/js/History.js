let history = [];

function saveHistory(a, op, b, result) {
    //?/ Save operation to history
    history.push({a, op, b, result});
    if (history.length > 10) history.shift(); //* save last 10 only
    renderHistory();
}

function renderHistory() {
    const historyDiv = document.getElementById('history');
    if (!historyDiv) return;

    historyDiv.innerHTML = ''; //!remove old

    history.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('history-item');

        div.innerHTML = `
            <span class="operation">${item.a} ${item.op} ${item.b}</span>
            <span class="result">  = ${item.result} </span>
        `;

        historyDiv.appendChild(div);
    });
}
