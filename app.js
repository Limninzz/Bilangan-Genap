// let input1=document.getElementById("input1");
// console.log(input1);
//   console.log(function1("5"));
function function1(input1) {
    // console.log(input1);
    let result =[];

    for(let i=0; i<input1.length; i++){
        result.push(input1[i]);
    }
    let output=function2(result);
    // console.log(output)
    let hasil=document.getElementById("hasil");
        hasil.innerHTML=output;
    return hasil;
}


function function2(input2) {
    // console.log(input2)
    let temp=0;
    for (let i=0; i<input2.length; i++) {
        temp+=parseInt(input2[i]);
    }
    // console.log(temp);
    if (temp%2===0){
        return "Genap";
    } else {
        return "Ganjil";
    }
}