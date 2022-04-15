// Écrivez une fonction `divisible(num1, num2)` qui accepte deux nombres comme arguments.
// La fonction doit retourner un booléen indiquant si oui ou non `num1` est divisible par `num2`.
function divisible(x,y){
    if (x%y==0){
        resultat=true;
    }
    else{
        resultat=false;
    }
    return resultat
}

console.log(divisible(12, 3)) ; // vrai
console.log(divisible(12, 5)) ; // false
console.log(divisible(60, 4)) ; // true
console.log(divisible(60, 11)) ; // false
console.log(divisible(21, 7)) ; // true
console.log(divisible(21, 6)) ; // false
