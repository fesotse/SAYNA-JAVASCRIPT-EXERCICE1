// Ecrivez une fonction `larger` qui accepte deux nombres en tant qu’argument. 
// La fonction doit retourner le plus grand nombre.
function larger(a,b){
    if(a>=0 &&b>=0){
        if (a>b){
            resultat=a;
        }
        else{
            resultat=b;
        }
    }
    else if(a<0 &&b<0) {
        if (a>b){
            resultat=a;
        }
        else{
            resultat=b;
        }
    }
    else if(a<0 &&b>0) {
        resultat=b
    }
    else if(a>0 &&b<0) {
        resultat=a
    }
    return resultat

}

console.log(larger(256, 400)) ; // 400
console.log(larger(31, 4)) ; // 31
console.log(larger(-6, 7)) ; // 7
console.log(larger(11.3, 11.2)) ; // 11.3
console.log(larger(-10, -3)) ; // -3
