// BMI Calculator
// SI, Metric Units:
let weight = 100.5;
let height = 1.74;
let heightSquare = height * height;
let BMI = weight / heightSquare;
BMI = parseFloat(BMI.toPrecision(3));
console.log(BMI);
// if (BMI < 18.5){
//     console.log('You are under weight');
// }
// else{
//     if (BMI >= 18.5 && BMI <= 24.9) {
//         console.log('You are normal');
//     }
//     else{
//         if (BMI >= 25 && BMI <= 29.9){
//             console.log('You are overweight')
//         }
//         else{
//             console.log('You are obese')
//         }
//     }
// }

// Ternary operator
BMI < 18.5 ? console.log('You are under weight') : BMI >= 18.5 && BMI <= 24.9 ? console.log('You are normal') : BMI >= 25 && BMI <= 29.9 ? console.log('You are overweight') : console.log('You are obese');