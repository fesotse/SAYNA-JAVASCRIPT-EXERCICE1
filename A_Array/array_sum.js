// creation d'une fonction faisant la somme des élements d'une tableau

function arraySum(tab){
    let somme=0;
    for (let i=0; i<tab.length; i++){
        somme+=tab[i];
    }
    return somme;
} 
console.log(arraySum([6, 2, 3])) ; // 11
console.log(arraySum([7, 6, -5, 2])) ; // 10
console.log(arraySum([8])) ; // 8
console.log(arraySum([])) ; // 0