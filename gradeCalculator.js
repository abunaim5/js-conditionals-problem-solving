// Grade Calculator
let gradeNum = 73;

if (gradeNum >= 90 && gradeNum <= 100) {
    console.log('A');
}
else if (gradeNum >= 80 && gradeNum <= 89) {
    console.log('B');
}
else if (gradeNum >= 70 && gradeNum <= 79) {
    console.log('C');
}
else if (gradeNum >= 60 && gradeNum <= 69) {
    console.log('D');
}
else if (gradeNum >= 0 && gradeNum <= 59) {
    console.log('Fail')
}
else {
    console.log('Not a grade number')
}