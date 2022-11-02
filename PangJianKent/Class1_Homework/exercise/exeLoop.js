
//Log every number from 0 to 10
for (let i=0; i<=10; i++){
    console.log("Answer 1:"+i)
}

//Log every number from 4 to -16
for (let i=4; i>=-16; i--){
    console.log("Answer 2:"+i)
}

//Log every fourth number from 8 to 41
for (let i=8; i<=41; i+=4){
    console.log("Answer 3:"+i)
}

//The Classic Fizzbuzz Program
for (let i=0; i<=100; i++){
    if ((i%3==0) && (i%5==0)){
        console.log(i+" is Fizzbuzz")
    } else if (i%3==0){
        console.log(i+" is Fizz")
    } else if ((i%5==0)) {
        console.log(i+" is buzz")
    }
}
