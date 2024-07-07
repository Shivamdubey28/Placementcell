function divide(x, y) {
    if (y === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return x / y;
}

try {
    // Attempting division
    console.log(divide(10,2)); // Output: 5
    console.log(divide(10, 0)); // This will throw an error
    console.log(divide(20, 4)); // This line won't be executed
} catch (error) {
    // Handling the error
    console.error("An error occurred:", error.message);
}

// console.log(divide(10,2)); // Output: 5
// console.log(divide(10, 0)); // This will throw an error
// console.log(divide(20, 4)); // This line won't be executed
