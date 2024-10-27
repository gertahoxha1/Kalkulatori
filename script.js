const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/calculate', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);
    const operator = req.query.operator;
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
            break;
        case '*':
            result = num1 * num2;
            break;
        default:
            result = 'Invalid operator';
    }

    res.send(`Result: ${result}`);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
