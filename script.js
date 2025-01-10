const dodawanieBtn = document.getElementById('DODAWANIE');
const odejmowanieBtn = document.getElementById('ODEJMOWANIE');
const mnozenieBtn = document.getElementById('MNOZENIE');
const dzielenieBtn = document.getElementById('DZIELENIE');
const pierwszaInput = document.getElementById('pierwsza');
const drugaInput = document.getElementById('druga');
const resultDisplay = document.getElementById('result');
const wynikLabel = document.getElementById('test');

function calculate(operation) {
    const pierwsza = parseFloat(pierwszaInput.value);
    const druga = parseFloat(drugaInput.value);
    
    if (isNaN(pierwsza) || isNaN(druga)) {
        resultDisplay.textContent = "Wprowadź obie liczby!";
        return;
    }
    
    let result;
    
    switch (operation) {
        case 'addition':
            result = pierwsza + druga;
            break;
        case 'subtraction':
            result = pierwsza - druga;
            break;
        case 'multiplication':
            result = pierwsza * druga;
            break;
        case 'division':
            if (druga === 0) {
                resultDisplay.textContent = "Nie można dzielić przez zero!";
                return;
            }
            result = pierwsza / druga;
            break;
        default:
            result = "Błąd";
    }
    resultDisplay.textContent = result;
    
    if (operation === 'division') {
        wynikLabel.textContent = "Wynik działania wynosi: " + result;
    } else {
        wynikLabel.textContent = "Wynik: " + result;
    }
}

dodawanieBtn.addEventListener('click', () => calculate('addition'));
odejmowanieBtn.addEventListener('click', () => calculate('subtraction'));
mnozenieBtn.addEventListener('click', () => calculate('multiplication'));
dzielenieBtn.addEventListener('click', () => calculate('division'));
