//What number's bigger?
let numOne = prompt("Key in the 1st number")
let numTwo = prompt("Key in the 2nd number")

if (numOne>numTwo){
    console.log("numOne ("+numOne+") is bigger than numTwo ("+numTwo+")")
}else if (numOne<numTwo){
    console.log("numOne ("+numOne+") is smaller than numTwo ("+numTwo+")")
}else if (numOne===numTwo){
    console.log("numOne ("+numOne+") is equal to numTwo ("+numTwo+")")
}

//Driving Age
const minDrivingAge = 16
let userName
let userAge

userName= prompt("What is your name?");
userAge=prompt("How old are you?");
validateAge(userAge);

function validateAge(age){
    if (age<minDrivingAge) {
        console.log("Sorry, you can't drive yet!")
        calAge(age)
    }else {
        console.log("Drive into the sunset!")
    }
}

function calAge(age){
    calAge = minDrivingAge-age
    console.log("Sorry, you still have "+calAge+" years before you can drive")
}

// console.log(userName)
// console.log(userAge)