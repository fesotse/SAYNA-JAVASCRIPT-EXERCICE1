// Écrivez une fonction `moyenneDeQuatre(num1, num2, num3, num4)` qui accepte quatre nombres comme arguments.
// La fonction doit renvoyer la moyenne des quatre nombres.
function averageOfFour(a,b,c,d){
    let sum=a+b+c+d;
    return sum/4
}

console.log(averageOfFour(10, 4, 12, 3)) ; // 7,25
console.log(averageOfFour(-20, 50, 4, 21)) ; // 13,75
console.log(averageOfFour(10, 4, 12, 3)) ; // 7.25
console.log(averageOfFour(5, 5, 3, 7)) ; // 5
