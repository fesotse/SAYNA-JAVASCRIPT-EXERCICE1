// Ecrivez une fonction `divisors` qui accepte un nombre comme argument.
// La fonction doit retourner un tableau contenant tous les nombres positifs qui peuvent être divisés en arguments.
function divisors(div){
    let list=[];
    for (let i=0; i<div+1; i++){
        if (div%i==0){
            list.push(i);
        }
        else{
            continue
        }
    }
    return list
}
console.log(divisors(15)) ; // [1, 3, 5, 15].
console.log(divisors(7)) ; // [1, 7]
console.log(divisors(24)) ; // [1, 2, 3, 4, 6, 8, 12, 24]
