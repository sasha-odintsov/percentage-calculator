function calcNumbr() { 
    let x = document.getElementById('calc-primary_x').value;
    let y = document.getElementById('calc-primary_y').value;
    let amount = (y / 100) * x;    
    let text = `
        ${x}% от числа ${y} = ${amount}
    `;
    let errorMessage = `Заполните все поля!`;
    
    if (document.getElementById('calc-primary_x').value.length == "") {
        document.getElementById('result-primary').innerHTML = errorMessage;
        document.getElementById('result-primary').style.color = "red";
    } else if (document.getElementById('calc-primary_y').value.length == "") { 
        document.getElementById('result-primary').innerHTML = errorMessage;
        document.getElementById('result-primary').style.color = "red";
    }
    else { 
        document.getElementById('result-primary').innerHTML = text;
        document.getElementById('result-primary').style.color = "#575757";
    }
};

function calcPercnt() { 
    let x = document.getElementById('calc-secondary_x').value;
    let y = document.getElementById('calc-secondary_y').value;
    let amount = (x * 100) / y;
    let text = `
        Число ${x} от числа ${y} = ${amount}%
    `;
    let errorMessage = `Заполните все поля!`;
    
    if (document.getElementById('calc-secondary_x').value.length == "") {
        document.getElementById('result-secondary').innerHTML = errorMessage;
        document.getElementById('result-secondary').style.color = "red";
    } else if (document.getElementById('calc-secondary_y').value.length == "") { 
        document.getElementById('result-secondary').innerHTML = errorMessage;
        document.getElementById('result-secondary').style.color = "red";
    }
    else { 
        document.getElementById('result-secondary').innerHTML = text;
        document.getElementById('result-secondary').style.color = "#575757";
    }
};

function reset() { 
    document.getElementsByClassName('reset').value = '';
};