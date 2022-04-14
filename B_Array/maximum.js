// Ecrivez une fonction `maximum` qui accepte un tableau de nombres comme argument.
// La fonction doit retourner le plus grand nombre du tableau. Si le tableau est vide, la fonction doit renvoyer null.
function maximum(list){
    let sup=null;
    let x=0
    if (list!=null){
        for (i=0;i<list.length;i++){
            if (x<list[i]){
                x=list[i];
                sup=x;
            }
            else{
                continue
            } 
        }
    }
    
    return sup
}//ici le resultat est le resultat attendu mais il manque certain paramètre dans la fonction

console.log(maximum([8, 6, 3, 9])) ; // 9
console.log(maximum([13, 15, 21, 11, 2])) ; // 21
console.log(maximum([])) ; // null
