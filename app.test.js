const message = require('./app');
if (message === "Hello World") {
    console.log("Test Passed!");
    process.exit(0);
} else {
    console.log("Test Failed!");
    process.exit(1);
}
