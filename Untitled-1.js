
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



    function check(array){
        let i = 0;
        for (values in array){
            if(array[i] !== i+1) return true
            return false
    }
    }
    function checkAndCorrect(array){

        let i = 0;
     while (i < array.length){
        if(array[i]> array[i+1]){
            let a = array[i];
            array[i]=array[i+1];
            array[i+1] = a;
            count++;
            i++
        }
    i++;
    }

  }
function solve(array){
    var count = 0;
while (check(array)){
    checkAndCorrect(array)
}
console.log(count);
return count;
  }

solve([1,2,5,3,7,8,6,4]);