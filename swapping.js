let enteredNum = prompt("Enter a number of at least 3 digits"); // user enters 3 digit num
let secondNum = enteredNum[1]; // stores second entered num
let lastNum = enteredNum[enteredNum.length - 1]; // stores last number based on length - 1 
let newNum = ""; // store new number with swapped digits

for (let i = 0; i < enteredNum.length; i++) {
   let swappedNum;
   if (i == 1) {
        swappedNum = lastNum; }
    else if (i == lastNum) {
        swappedNum = secondNum; }
    else {
        swappedNum = enteredNum[i];}

        
    newNum += swappedNum;
}


console.log("You originally entered " + enteredNum);
console.log("Your new number is " + newNum);