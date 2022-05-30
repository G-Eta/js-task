console.log("Q2")
const team = ["Merit", "Abdulsamad", "Comely", "Gabriel-Eta Ekpo", "Emmanuel Stephen", "Ayobami SO", "Danny"];
console.log(team[3]);
console.log("")

console.log("Q3")
const bio = {firstName:"Gabriel", lastName:"Ekpo", bestMovie:"Avengers", bestFood:"Rice", complexion:"Dark", birthMonth:"December", state:"Cross River", groupName:"Artemis"};
console.log(bio.bestMovie)
console.log("")

console.log("Q4")
let noun = "Dog";
let verb = "Jumps";
let adjective = "Greatly"

let a = noun + " " + verb;
let b = noun + " " + verb + " " + adjective;
let c = "He" + " " + verb + " " + adjective;
let d = "The" + " " +  noun + " " + verb + " " + adjective;
let e = adjective + " " + verb + " " + "He" + " " + "does";

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log("")

console.log("Q5")
let x = myFunction(25, 5); 
function myFunction(a, b) {
    return a / b;
}
console.log(x)
console.log("")

console.log("Q6")
function quadFunc(a, b, c){
    let positive = (-1*b + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    return positive;
}

console.log(quadFunc(4,6,-4));

function quadFuncNeg(a, b, c){
    let negative = (-1*b - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
    return negative;
}

console.log(quadFuncNeg(4,6,-4));

console.log("")

console.log("Q7")
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
const wordBlanks = "The";
let word = wordBlanks + " " + myAdjective + " " +myNoun + " " +myVerb + " " + myAdverb;
console.log(word)
console.log("")

console.log("Q8")

const p = 3.142;
let area = areaCircle(9); 

function areaCircle(r) {
    return  r * r * p;
}
console.log("The area is" + " " + area)
console.log("")

console.log("Q9")
prin=8200;
time = 1.5;
rate= 17.5;
interest= prin * (1 + (rate*time));
console.log("The Simple Interest is" + " " + interest)
console.log("")

console.log("Q10")
mod = 10 % 4;
console.log(mod)
console.log("")

console.log("Q11")
const mWeight = 78;
const mHeight = 1.69;
const mBMI = mWeight/Math.pow(mHeight, 2);
const mBMI2 = mWeight/(mHeight * mHeight);

const nWeight = 92;
const nHeight = 1.95;
const nBMI = nWeight/Math.pow(nHeight, 2);
const nBMI2 = nWeight/(nHeight * nHeight);

console.log('Q11B')
console.log("Merit's BMI using formula 1 is " + " " + mBMI);
console.log("Merit's BMI using formula 2 is " + " " + mBMI2);

console.log("Nutjob's BMI using formula 1 is " + " " + nBMI);
console.log("Nutjob's BMI using formula 2 is" + " " + nBMI2);

console.log('QUESTION 11C')
const compareBMI = mBMI > nBMI;
console.log(compareBMI);


console.log('2nd Dataset')
const mWeight2 = 85;
const mHeight2 = 1.76;
const mBMI3 = mWeight2/Math.pow(mHeight2, 2);
const mBMI4 = mWeight2/(mHeight2 * mHeight2);

const nWeight2 = 95;
const nHeight2 = 1.88;
const nBMI3 = nWeight2/Math.pow(nHeight2, 2);
const nBMI4 = nWeight2/(nHeight2 * nHeight2);

console.log('QUESTION 11B')
console.log("Merit's BMI using formula 1 is " + " " + mBMI3);
console.log("Merit's BMI using formula 2 is " + " " + mBMI4);

console.log("Nutjob's BMI using formula 1 is " + " " + nBMI3);
console.log("Nutjob's BMI using formula 2 is" + " " + nBMI4);

console.log('QUESTION 11C')
const compareBMI2 = mBMI3 > nBMI4;
console.log(compareBMI2);