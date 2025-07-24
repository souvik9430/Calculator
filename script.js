function appendValue(value) {
  document.getElementById('result').value += value;
}

function calculate() {
  const input = document.getElementById('result').value;


  if (input === "0/0") {
    document.getElementById('result').value = "undefined";
    return;
  }

  try {
    let output = eval(input);
    document.getElementById('result').value = output;
  } catch {
    document.getElementById('result').value = "Error";
  }
}

function clearResult() {
  document.getElementById('result').value = '';
}

function backspace() {
  document.getElementById('result').value = document.getElementById('result').value.slice(0, -1);
}

document.addEventListener('keydown', function (e) {
    const key = e.key;

    if (!isNaN(key) || ['+', '-', '*', '/', '(', ')', '.'].includes(key)) {
      appendValue(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key === 'Escape') {
      clearResult();
    }
  });