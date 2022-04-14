// Ecrivez une fonction `longestWord` qui accepte une chaîne de phrase comme argument.
// La fonction doit retourner le mot le plus long de la phrase. S'il y a une égalité, elle renvoie le mot qui apparaît le plus tard.
function longestWord(list){
    let longest=null;
    let x=0;
    const myArray=list.split(" ");
    for (i=0; i<myArray.length;i++){
        if(x<myArray[i].length){
            x=myArray[i].length;
            longest=myArray[i];
        }
        else{
            continue
        }
    }
    return longest  
}
console.log(longestWord("I am pretty hungry")) ; // 'hungry' (faim)
console.log(longestWord("nous devrions penser en dehors de la boîte")) ; // "devrions".
console.log(longestWord("down the rabbit hole")) ; // "rabbit" (lapin)
console.log(longestWord("elephant down")) ; // "elephant".
