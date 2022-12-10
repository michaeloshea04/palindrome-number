//write a function that reverses a string
function reverseString(str){
    let newString = "";
    for (let i = str.length -1; i >= 0; i--){
        newString += str[i];
    }
    return newString;    
}

//write a function that compares two strings
//if the function returns 0 then the strings are equal
function compareString(str1, str2){
    if (str1 > str2)
    {
        return 1;
    }
    else if(str1 < str2)
    {
        return -1;
    }
    else
    {
        return 0;
    }
    
}


//put the two functions inside an overall function which returns a boolean value
function isPalindrome(int){
    let string1 = int.toString();
    let string2 = reverseString(int.toString());
    
    if (compareString(string1, string2) == 0)
    {
        return true;
    }
    return false;
} 



const addBtn = document.querySelector("#addBtn");
const numberDisplay = document.querySelector("#numberDisplay");
let number1 = 0;

addBtn.addEventListener('click', function(){
    number1 = document.getElementById("num1").value;
    numResult = parseInt(number1);    
    numberDisplay.textContent = numResult;
  
  })