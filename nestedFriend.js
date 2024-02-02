let myScore = 90;
let friendScore = 39;
// if (myScore > 80) {
//     if (friendScore > 80) {
//         console.log("Friend lets's go restaurant and take a lunch");
//     }
//     else if (friendScore >= 60) {
//         console.log('Good luck next time');
//     }
//     else if (friendScore < 60 && friendScore >= 40) {
//         console.log('Message unseen')
//     }
//     else if(friendScore< 40) {
//         console.log('You are blocked')
//     }
// }
// else{
//     console.log('I am sleepy and very sad')
// }
// Ternary
myScore > 80
    ? friendScore > 80
        ? console.log("Friend lets's go restaurant and take a lunch") : friendScore >= 60
            ? console.log('Good luck next time') : friendScore < 60 && friendScore >= 40
                ? console.log('Message unseen') : friendScore < 40
                    ? console.log('You are blocked') : console.log('muri kha') : console.log('I am sleepy and very sad');