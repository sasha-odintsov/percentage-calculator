/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const showResultNumbr = (a, b, c) => `${a}% от числа ${b} = ${c}`;
const showError = () => 'Заполните все поля!';
const calcNumbr = (a, b) => (b / 100) * a;

function getNumbr() {
  const x = document.getElementById('calc-primary_x').value;
  const y = document.getElementById('calc-primary_y').value;
  if (!document.getElementById('calc-primary_x').value.length) {
    document.getElementById('result-primary').innerHTML = showError();
    document.getElementById('result-primary').style.color = 'red';
  } else if (!document.getElementById('calc-primary_y').value.length) {
    document.getElementById('result-primary').innerHTML = showError();
    document.getElementById('result-primary').style.color = 'red';
  } else {
    document.getElementById('result-primary').innerHTML = showResultNumbr(x, y, calcNumbr(x, y));
    document.getElementById('result-primary').style.color = '#575757';
  }
}

const calcPercnt = (a, b) => (a * 100) / b;
const showResultPercnt = (a, b, c) => `Число ${a} от числа ${b} = ${c}%`;

function getPercnt() {
  const x = document.getElementById('calc-secondary_x').value;
  const y = document.getElementById('calc-secondary_y').value;

  if (!document.getElementById('calc-secondary_x').value.length) {
    document.getElementById('result-secondary').innerHTML = showError();
    document.getElementById('result-secondary').style.color = 'red';
  } else if (!document.getElementById('calc-secondary_y').value.length) {
    document.getElementById('result-secondary').innerHTML = showError();
    document.getElementById('result-secondary').style.color = 'red';
  } else {
    document.getElementById('result-secondary').innerHTML = showResultPercnt(x, y, calcPercnt(x, y));
    document.getElementById('result-secondary').style.color = '#575757';
  }
}

function reset() {
  document.getElementsByClassName('reset').value = '';
}

// function calcPercnt(a, b) {
//     return (a * 100) / b;
// };

// function showResultPercnt(a, b, c) {
//     return `
//         Число ${a} от числа ${b} = ${c}%
//     `;
// };
// function calcNumbr(a, b) {
//     return (b / 100) * a;
// };
// function showResultNumbr(a, b, c) {
//     return `
//         ${a}% от числа ${b} = ${c}
//     `;
// };
// function showError() {
//     return `Заполните все поля!`;
// };
// const reset = () => document.getElementsByClassName('reset').value = '';
