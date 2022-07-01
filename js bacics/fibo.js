"use strict";

function fibo(n){
    if(n<2){
        return n;
    }else{
        return (fibo(n-1)+fibo(n-2));
    }
}

for(let i=0;i<20;i++){
    console.log(fibo(i));
}

// iffi to call function instantly
(()=>{
    console.log("arrow function");
})();