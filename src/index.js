/* eslint-disable linebreak-style */

import showResultNumbr from './lib/showresultnumbr';
import calcNumbr from './lib/calcNumbr';
import showError from './lib/showError';
import calcPercnt from './lib/calcPercnt';
import showResultPercnt from './lib/showResultPercnt';
import resetNumbr from './lib/resetNumbr';
import resetPercnt from './lib/resetPercnt';

(() => {
  function getNumbr() {
    const x = document.getElementById('calc-primary_x').value;
    const y = document.getElementById('calc-primary_y').value;
    const result = document.getElementById('result-primary');

    if (!x.length || !y.length) {
      result.innerHTML = showError();
      result.style.color = 'red';
    } else {
      result.innerHTML = showResultNumbr(x, y, calcNumbr(x, y));
      result.style.color = '#575757';
    }
  }
  document.querySelector('.fieldset-primary-buttons .button').addEventListener('click', () => { getNumbr(); });
  document.querySelector('.fieldset-primary-buttons .reset').addEventListener('click', () => { resetNumbr(); });

  function getPercnt() {
    const x = document.getElementById('calc-secondary_x').value;
    const y = document.getElementById('calc-secondary_y').value;
    const result = document.getElementById('result-secondary');

    if (!x.length || !y.length) {
      result.innerHTML = showError();
      result.style.color = 'red';
    } else {
      result.innerHTML = showResultPercnt(x, y, calcPercnt(x, y));
      result.style.color = '#575757';
    }
  }
  document.querySelector('.fieldset-secondary-buttons .button').addEventListener('click', () => { getPercnt(); });
  document.querySelector('.fieldset-secondary-buttons .reset').addEventListener('click', () => { resetPercnt(); });
})();
