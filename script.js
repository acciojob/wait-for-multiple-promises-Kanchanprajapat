// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createPromise(index) {
    return new Promise((resolve) => {
        const time = (Math.random() * 2 + 1).toFixed(3); // Random time between 1 and 3 seconds
        setTimeout(() => {
            resolve({ index, time });
        }, time * 1000);
    });
}

// Create an array of three promises
const promises = [
    createPromise(1),
    createPromise(2),
    createPromise(3)
];

// Function to update the table with the results
function updateTable(results) {
    const tbody = document.getElementById('output');
    const loadingRow = document.getElementById('loading');
    if (loadingRow) {
        loadingRow.remove();
    }

    let totalTime = 0;

    results.forEach(result => {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');

        cell1.textContent = `Promise ${result.index}`;
        cell2.textContent = result.time;

        row.appendChild(cell1);
        row.appendChild(cell2);
        tbody.appendChild(row);

        totalTime += parseFloat(result.time);
    });

    const totalRow = document.createElement('tr');
    const totalCell1 = document.createElement('td');
    const totalCell2 = document.createElement('td');

    totalCell1.textContent = 'Total';
    totalCell2.textContent = totalTime.toFixed(3);

    totalRow.appendChild(totalCell1);
    totalRow.appendChild(totalCell2);
    tbody.appendChild(totalRow);
}

// Use Promise.all to wait for all promises to resolve
Promise.all(promises)
    .then(results => {
        updateTable(results);
    });
