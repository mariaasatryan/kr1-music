function toLatin() {
  const surname = document.getElementById('surname');
  const name = document.getElementById('name');
  const fathersname = document.getElementById('fathersname');
  const gender = document.getElementById('gender');
  const birthPlace = document.getElementById('birth-place');
  const issuedBy = document.getElementById('issued-by');

  if (surname.innerText === 'Асатрян') {
    surname.innerText = 'Asatryan';
    name.innerText = 'Maria';
    fathersname.innerText = 'Karenovna';
    gender.innerText = 'Female';
    birthPlace.innerText = 'Moscow';
    issuedBy.innerText = 'MIA OF RUSSIA FOR THE CITY OF MOSCOW';
  } 
  
  else {
    surname.innerText = 'Асатрян';
    name.innerText = 'Мария';
    fathersname.innerText = 'Кареновна';
    gender.innerText = 'Женский';
    birthPlace.innerText = 'г. Москва';
    issuedBy.innerText = 'ГУ МВД РОССИИ ПО Г. МОСКВЕ';
  }
}

const button = document.getElementById('translit-button');
button.addEventListener('click', toLatin);