const pro = new Promise(function(resolve,reject){
    gotThing=true
    if(gotThing){
        resolve("Yes")
    }else{
        reject("No")
    }
})
pro.then((data)=>{
    console.log(data);
}).catch((data)=>{
    console.log(data);
}).finally(()=>{
    console.log("final block");
})