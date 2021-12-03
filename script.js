let a = ''; // first number
let b = ''; //second number
let sign = ''; //знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/'];

// screen out
const out = document.querySelector('.calc-screen p');

// ClearAll function
        function clearAll() {
            a = '';
            b = '';
            sign = '';
            finish = false;
            out.textContent = 0;
            console.log('--- AC ---')
        }

document.querySelector('.buttons').addEventListener('click', e => {
    // нажата не кнопка
    if (!e.target.classList.contains('btn')) return;
    // нажата кнопка Очистить всё (ac)
    if (e.target.classList.contains('ac')) {
        clearAll();
        return;
    }
    
    out.textContent = '';

    // получаю нажатую кнопку
    const key = e.target.textContent;
    
    //если нажата кнопка 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            if (key === '.' && a.includes('.')) {
                a += '';
                console.log(a, b, sign);
                out.textContent = a;
            } else {
                a += key;
                console.log(a, b, sign);
                out.textContent = a;
            }
            
    
            
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            if (key === '.' && b.includes('.')) {
                b += '';
                console.log(a, b, sign);
                out.textContent = b;
            } else {
                b += key;
                out.textContent = b;
                console.log(a, b, sign);}
        }
        return;
    }

    //если нажата кнопка + - / X
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }

    // если нажата кнопка =
    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = (+a) - (+b);
                break;
            case "X":
                a = (+a) * (+b);
                break;
            case "/":
                if (b === '0') {
                    clearAll;
                    out.textContent = 'Деление на ноль!';
                    return;
                }
                a = (+a) / (+b);
                break;
        }
        finish = true;
        if (a.toString().includes('.')) {
            out.textContent = a.toFixed(2);
        } else {out.textContent = a;}
        
        console.log(a, b, sign);
    }

})