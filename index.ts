// 1. Hello Variable
// nstructions: Declare a variable named greeting with the string value "Hello, World!" and print it.

let greeting : string = "Hello,World!";
console.log(greeting);

// 2. Basic Math
// Instructions: Define two variables with integer values and calculate their sum, difference, product, and quotient.
// sum
let  num1 = 4;
let num2 = 5;
console.log(num1 + num2);

//diff
console.log(num1 - num2);

// product
console.log(num1 * num2);

//quotient
console.log(num1 / num2);

//3. Swapping Values
//Instructions: Swap the values of two variables without using a third variable.
let a = 1;
let b  = 2;
 a = a + b;
b = a - b;
a = a - b; 

 {console.log("a is" + a);
 console.log("b is" +b);}




// 4. Type Annotation (TypeScript)
//Instructions: This applies to TypeScript. Create a string variable and try changing its type.
let message: String = "hello";
console.log(message);

let  hello : number = 25;
console.log(hello);

// 5. Modulus Operator
//Instructions: Use the modulus operator to find the remainder of two numbers.

console.log(num1%num2);

//6. Increment Challenge
//Instructions: Increment a variable's value by 1 using two different methods.
let counter = 0;
counter+= 1;
console.log(counter);
counter=+1
console.log(counter);
//7. Logical Gates
//Instructions: Given three boolean variables, write expressions for AND, OR, and NOT gates
let A = true;
let B = false;
let C = true;
console.log(  A || B,   B && C,   (A!) );

//8. Compound Assignment
//Instructions: Show examples of using compound assignment operators.
let num = 10;

console.log(num+=10,num-=10,num*=10,num/=10);

//9. Even or Odd
//Instructions: Write a program to check if a number is even or odd.
let result = num % 2;

if (result==0){console.log("Even");}

 else {console.log("Odd");}

//10. Voting Eligibility
//Instructions: Check if a person is eligible to vote.
let age = 18;
if (age >=18){console.log("eligibile for voting");}

else {console.log("not eligible for voting");} 

//11. Grading System
//Instructions: Assign a grade based on a numerical score.
let scores = 90;



if(scores>=80 && scores<=90){
    console.log("grade is A");
}
else if(scores>=60 &&  scores <=70){
    console.log("grade is B");
}
else if(scores>=50 && scores<=60)
{console.log("grade is C");
}
else if(scores>=40 && scores<=49){
    console.log("grade is D");
}
else if(scores>=1 && scores<=33){
    console.log("grade is F");
}
//12. Max of Three
//Instructions: Find the maximum of three numbers.
let x = 40, y = 10, z = 20;

if(x>y && x>z){
    console.log("x");
}
else if (y>z){
    console.log("Y");

}
else{console.log("z");}


//13. Leap Year Checker
//Instructions: Check if a given year is a leap year.
let year = 2024;


if(2024%4===0){
    if(2024%100===0){
        if(2024%400===0){
            console.log(year + "is a leap year");
        } else {console.log(year + "is not leap year");
    } 

    } else {console.log(year + "is a leap year");
}
} else {console.log(year + "is not leap year");}

//14. Fahrenheit to Celsius Converter
//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.
let celsius = 100;
let Fahrenheit = celsius * 9/5 +32;
console.log(Fahrenheit);

//15. Positive, Negative, or Zero
//Instructions: Check if a number is positive, negative, or zero.

let number = 4;
if (number > 0){console.log("positive");
}
 else if(number < 0 ){console.log("negative");

 }
else {console.log("zero");}

//16. Multiplication Table
//Instructions: Write a program that prints the multiplication table of a given number up to 10.

const table = 5;

console.log("5 * 1 =" ,5 * 1);
console.log("5 * 2 =", 5 * 2);
console.log("5 * 3 =", 5 * 3);
console.log("5 * 4 =", 5 * 4);
console.log("5 * 5 =", 5 * 5);
console.log("5 * 6 =", 5 * 6);
console.log("5 * 7 =", 5 * 7);
console.log("5 * 8 =", 5 * 8);
console.log("5 * 9 =", 5 * 9);
console.log("5 * 10 =", 5 * 10);





 



