function updateTableWithRace(promises) {
    if (promises.length === 0) {
        return;
    }

    Promise.race(promises).then(result => {
        // Update the table with the result
        updateTable([result]);

        // Remove the resolved promise from the array
        promises = promises.filter(promise => promise !== result);

        // Race the remaining promises
        updateTableWithRace(promises);
    });
}

// Use Promise.race to display promises as they resolve
updateTableWithRace(promises);