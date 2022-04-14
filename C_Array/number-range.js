// Ecrivez une fonction `numberRange(min, max, step)` qui accepte comme arguments trois nombres comme, `min`, `max`, et `step`. 

// La fonction doit retourner tous les nombres entre `min` et `max` avec un intervalle de `step`.

//`min` et `max` sont inclusifs.
function numberRange(a,b,c){
    let result=[]
    for (i=a;i<b;i+=c){
        result.push(i)
    }
    return result
}

console.log(numberRange(10, 40, 5)) ; // [10, 15, 20, 25, 30, 35, 40]
console.log(numberRange(14, 24, 3)) ; // [14, 17, 20, 23].
console.log(numberRange(8, 35, 6)) ; // [8, 14, 20, 26, 32]

