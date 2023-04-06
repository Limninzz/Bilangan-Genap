//    console.log(getResult("1"));
getResult=(number) => {
    let arrNum=[];
    let result=0;
    for(let i=1; i<=number; i++){
        arrNum.push(i);
    }
    let oddNum=oddFinder(arrNum);
    for(let i=0; i<oddNum.length; i++){
        result+=oddNum[i]
    }
    if(oddNum.length==0){
        oddNum="Bilangan genap tidak ada";
    }
    if(arrNum.length==0) {
        arrNum="Angka Harus lebih besar dari 0"
    }
    document.getElementById("arrNum").innerHTML=arrNum;
    document.getElementById("oddNum").innerHTML=oddNum;
    document.getElementById("sumOdd").innerHTML=result;
    
     console.log(result, oddNum, arrNum)
     return;
}


oddFinder=(number) => {
    let result=[];
    let temp=0;
    for (let i=0; i<number.length; i++) {
        temp=parseInt(number[i]);
        if (temp%2===0){
            result.push(temp);
        }
    }
     return result;
}