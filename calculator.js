function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  // const num1 = (document.getElementById('num1').value);
  // const num2 = (document.getElementById('num2').value);
  let result;
  if (!isNaN(num1) && !isNaN(num2)) {
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by 0";
        break;
      case '%':
        result = num2 !== 0 ? num1 % num2 : "Cannot divide by 0";
        break;
      case '**':
        result = num1 ** num2;
        break;
      default:
        result = "Invalid";
    }
  }
  else if (!isNaN(num1)) {
    switch (operator) {
      case 'sqr':
        result = num1 >= 0 ? Math.sqrt(num1).toFixed(5): "Invalid";
        break;
      case 'log':
        result = num1 > 0 ? Math.log(num1).toFixed(5): "Invalid";
        break;
      case 'exp':
        result = Math.exp(num1).toFixed(5);
        break;
      case 'sin':
        result = Math.sin(num1 * Math.PI / 180).toFixed(5);
        break;
      case 'cos':
        result = Math.cos(num1 * Math.PI / 180).toFixed(5);
        break;
      case 'tan':
        result = Math.tan(num1 * Math.PI / 180).toFixed(5);
        break;
      default:
        result = "Invalid";
    }
  }
  else {
    result = "Invalid input";
  }

  document.getElementById("result").textContent = result;
}
