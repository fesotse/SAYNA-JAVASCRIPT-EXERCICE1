//creation d'une fonction pour compter les nombres
//impaires dans un tableau
function arrayOdds(num){
    let total=0;
    for (let i=0; i<num.length; i++){
        if (num[i]%2!=0){
            total+=1;
        }
        else{
            continue;
        }
    }
    return total;
}
console.log(arrayOdds([4, 7, 2, 5, 9])) ; // 3
console.log(arrayOdds([11, 31, 58, 99, 21, 60])) ; // 4
console.log(arrayOdds([100, 40, 4])) ; // 0
