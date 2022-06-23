function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function multiplication(a, b) {
    return a * b;
}
function division (a, b) {
    return a / b;
}

let a = parseInt(prompt('Input your first number'));
let b = parseInt(prompt('Input your second number'));

let choice = prompt('Choose from the list of operations [*,-,+,/]');

if (choice == '*') {
    let mul= multiplication(a, b);
    alert(mul);
}
if (choice == '+') {
    let add = addition(a, b);
    alert(add);
}
if (choice == '-') {
    let sub = subtraction(a, b);
    alert(sub);
}
if (choice == '/') {
    let div = division(a, b);
    alert(div);
}