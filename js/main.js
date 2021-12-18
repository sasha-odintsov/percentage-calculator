function calcNumbr() { 
    let x = document.getElementById('calc-primary_x').value;
    let y = document.getElementById('calc-primary_y').value;
    let amount = (y / 100) * x;    
    let text = `
        ${x}% от числа ${y} = ${amount}
    `;
    document.getElementById('result-primary').innerHTML = text;
};

function calcPercnt() { 
    let x = document.getElementById('calc-secondary_x').value;
    let y = document.getElementById('calc-secondary_y').value;
    let amount = (x * 100) / y;
    let text = `
        Число ${x} от числа ${y} = ${amount}%
    `;
    document.getElementById('result-secondary').innerHTML = text;
};

function reset() { 
    document.getElementsByClassName('reset').value = '';
};