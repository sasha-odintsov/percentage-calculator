/* eslint-disable linebreak-style */

import showResultNumbr from './lib/showresultnumbr';
import calcNumbr from './lib/calcNumbr';
import showError from './lib/showError';
import calcPercnt from './lib/calcPercnt';
import showResultPercnt from './lib/showResultPercnt';
import reset from './lib/reset';

(() => {
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
  document.querySelector('.fieldset-primary-buttons .button').addEventListener('click', () => { getNumbr(); });

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
  document.querySelector('.fieldset-secondary-buttons .button').addEventListener('click', () => { getPercnt(); });

  document.querySelector('.reset').addEventListener('click', () => { reset(); });
})();
