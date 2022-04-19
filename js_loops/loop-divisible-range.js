// Écrivez une fonction `divisibleRange(min, max, num)` qui accepte trois nombres comme arguments.
// La fonction doit imprimer tous les nombres compris entre `min` et `max` (exclusif) qui sont également divisibles par num.
function divisibleRange(x,y,z){
    for (i=x+1;i<y;i++){
        if (i%z==0){
            console.log(i)
        }
    }
}
divisibleRange(17, 40, 9) ;
// imprime
// 18
// 27
// 36
divisibleRange(10, 24, 4) ;
// imprime
// 12
// 16
// 20
