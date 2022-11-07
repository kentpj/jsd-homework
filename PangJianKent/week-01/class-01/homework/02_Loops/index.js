// //The even/odd reporter
// for(let a=0;a<=20;a++) {
//     if (a%2 === 0) { 
//         console.log(a+' is even');
//     } else {
//         console.log(a+' is odd');
//     }
    
// }

// //Multiplication Tables
// for(let b=1;b<=12;b++) {
//     let result = b * 9;
//     console.log(""+b+" X 9 = "+result+"");
// }

//The Grade Assigner
let grade = [["A",85],["B",80],["C",60],["D",40,],["F",0]]
let startIndex = 60
let endIndex = 100

for(let c=startIndex;c<=endIndex;c++) {
    for (let d=0;d<=grade.length;d++){
        if (c>=grade[d][1]){
            console.log("For "+c+", you got a "+grade[d][0]+"")
            break;
        }
    }
} 

//Golf


//99 Bottles of Beer
