let ticketPrice = 800;
let age = 35;
let student = true;
//children get free ticket
if (age < 10) {
    ticketPrice = 'Free';
}
//students get 50% discount
else if (age <= 30 && student === true) {
    ticketPrice = ticketPrice * 50 / 100;
}
//senior citizens get 15% discount
else if (age >= 60) {
    ticketPrice = ticketPrice * 15 / 100;
}
else {
    ticketPrice;
}
console.log(ticketPrice);