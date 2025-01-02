function calculate() {
    
    const input1 = Number(document.getElementById("input1").value);
    const input2 = Number(document.getElementById("input2").value);
    const operation = document.getElementById("operation").value;

    let result; 

    
    switch (operation) {
        case 'add':
            result = input1 + input2;
            break;
        case 'subtract':
            result = input1 - input2;
            break;
        case 'Multiple': 
            result = input1 * input2;
            break;
        case 'Division': 
            result = input1 / input2;
            break;
        
    }

    
    document.getElementById("result").innerHTML = result + " is the result of two values.";
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('input,select').forEach(element => {
        element.addEventListener('input', calculate);
    });
});
