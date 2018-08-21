
/* function minimumBribes(q) {
    let i = 0;
    while(i < q.length){
        let c = q[i] - (i+1);
        if (c > 2 || c <-2) {
            console.log("Too chaotic");
            return ("Too chaotic");
        }
        i++;
    }
    i = 0;
    var a =0;
    while (i < q.length){
        if(q[i] !== (i+1)){
            a = a + Math.abs(q[i] - (i+1));
            i++;
        }else{
            i++;
        }
    }
    if (a%2 !== 0){
        console.log(a/2+1)
    }
    console.log(a/2);
    
}
*/


function solve(array){
    
let count = 0;
let chaosCounter = false;
let chaosArray = Array.apply(null, Array(array.length)).map(Number.prototype.valueOf,0);
        function recursivePart (array){
                let i = 0;
                while (i < array.length){
                if(array[i]> array[i+1]){
                let a = array[i];
                array[i]=array[i+1];
                array[i+1] = a;
                chaosArray[a-1] = chaosArray[a-1]+1;
                count++;
                i++;
            }
            i++;
            }
        }
        for (i=0;i<=array.length;i++){
        if(array[i] !== (i+1) ) {
        recursivePart(array);
        }
        console.log(i);
        }
        //end of recursion
        for (i=0;i<chaosArray.length;i++){
            if (chaosArray[i] > 2) chaosCounter = true
        }
        if (chaosCounter) return(console.log("Too chaotic"))
        return(console.log(count))
}
solve([1,2,5,3,7,8,6,4]);

