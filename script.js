document.getElementById('btn').addEventListener('click', function () {
    const input = document.getElementById('ip').value;
    const outputDiv = document.getElementById('output');
    const num = parseInt(input, 10);

    // Start the promise chain
    new Promise((resolve) => {
        setTimeout(() => {
            outputDiv.innerHTML = `Result: ${num}`;
            resolve(num);
        }, 2000);  // Step 2: Wait 2 seconds
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result * 2;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);  // Step 3: Multiply by 2, wait 1 second
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result - 3;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);  // Step 4: Subtract 3, wait 1 second
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result / 2;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);  // Step 5: Divide by 2, wait 1 second
        });
    })
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const newResult = result + 10;
                outputDiv.innerHTML = `Result: ${newResult}`;
                resolve(newResult);
            }, 1000);  // Step 6: Add 10, wait 1 second
        });
    })
    .then((finalResult) => {
        outputDiv.innerHTML = `Final Result: ${finalResult}`;  // Step 7: Final result
    })
    .catch((error) => {
        outputDiv.innerHTML = `Error: ${error}`;  // Handle any errors
    });
});

