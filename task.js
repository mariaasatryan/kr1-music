const xInput = document.getElementById('x');
const resultInput = document.getElementById('result');
const form = document.getElementById('taskForm');
let check = false;

function verify() {
  const x = parseFloat(xInput.value);
  
  if (isNaN(x)) {
    resultInput.value = 'Введите число';
    check = false;
    return;
  }

  if (x > 0) {
    resultInput.value = 'Число положительное';
  } else if (x < 0) {
    resultInput.value = 'Число отрицательное';
  } else {
    resultInput.value = 'Число равно нулю';
  }
  check = true;
}

function send() {
  if (check) {
    form.submit();
  }
  else {
    alert('Сначала нажмите "Проверить"');
  }
}

document.getElementById('verify').addEventListener('click', verify);
document.getElementById('send').addEventListener('click', send);
xInput.addEventListener('input', () => { check = false; });