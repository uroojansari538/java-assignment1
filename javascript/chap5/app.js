// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.
let num1= 3
let num2= 5
document. write ('<h3>sum of 3 and 5 is 8 </h3>')
// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
alert(num1+num2)
alert(num1-num2)
alert(num1*num2)
alert(num1/num2)
alert(num1%num2)
// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
let num = 5;
alert(++num);
alert(num+7);
let numb=13
alert(--numb);
alert(12/3);
alert(12%3)
document.write('<br><br><br>')
document.write(' value after variable declaration is: ??”.')
document.write('<br><br><br>')
document.write('Initial  value: 5”.')
document.write('<br><br><br>')
document.write('value after increment is: 6”.')
document.write('<br><br><br>')
document.write(' value after addition is: 13”.')
document.write('<br><br><br>')
document.write('value after decrement is: 12”.')
document.write('<br><br><br>')
document.write(' Output : “The remainder is : 0”.')
document.write('<br><br><br>')

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
alert(600*5)

document. write ('Total cost to buy 5 tickets to a movie is 3000pkr <br>')
document.write('<br><br><br>')
document.write('<br><br><br>')
// 5. Write a script to display multiplication table of any 
// number in your browser. 
document.writeln('4 x 1 = ', 4*1, '<br>')
document.write('4 x 2 = ', 4*2, '<br>')
document.write('4 x 3 = ', 4*3, '<br>')
document.writeln('4 x 4 = ', 4*4, '<br>')
document.write('4 x 5 = ', 4*5, '<br>')
document.write('4 x 6 = ', 4*6, '<br>')
document.writeln('4 x 7 = ', 4*7, '<br>')
document.write('4 x 8 = ', 4*8, '<br>')
document.write('4 x 9 = ', 4*9, '<br>')
document.writeln('4 x 10 = ', 4*10, '<br>')
document.write('<br><br><br>')
document.write('<br><br><br>')
// 6. The Temperature Converter: It’s hot out! Let’s make a 
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Conversion Formulae:


let c = 25;
let f = (c*9/5)+32
document.write(c+' <sup>o</sup>C is '+ f + ' <sup>o</sup>F');
document.write('<br><br><br>')
let F = 70;
let C= (f-32)*5/9
document.write(F +'<sup>o</sup>F is'+ C +'<sup>o</sup>C')
document.write('<br><br><br>')



// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
document.write('price of item 1 is 650 <br>')
document.write('quantity of item 1 is 3 <br>')
document.write('price of item 2 is 100 <br>')
document.write('quantity of item 2 is 7 <br>')
document.write('shipping charges is 100 <br>')

document.write('total cost of your order is 2750 <br>')
document.write('<br><br><br>')
// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser

document.write(' total marks 980 <br>')
document.write('marks obtained 804 <br>')
document.write('percentage 82.040816% <br>')
document.write('<br><br><br>')
document.write('<br><br><br>')
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
alert(10*104.80 + 25 * 28);
document.write('<h2>Currency in PKR</h2>')
document.write('<h3>Total currency in pkr is 1748</h3>')
document.write('<br><br><br>')
document.write('<br><br><br>')
// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
let mynum =16
alert(mynum+5*10/2)
// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”
const currentyear =2024
const birthyear =1992

alert(currentyear-birthyear)
document.write('<br><br><br>')
document.write('<br><br><br>')
document.write('<h3>current year =2024</h3><br>')
document.write('<h3>birth year = 1992</h3><br>')
document.write('<h3>your age is 32</h3><br>')

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

let pi = 3.142
let Circumference = 2*pi*radius
radius= 20

document. write('Radius of  circle = 20 <br>')
document. write('The circumference is 125.67999999 <br>')
document. write('The circumference is 1256.8<br>')



// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”
let favouritesnack = "choclatecookies"
let currentage = 32
let maximumage = 65
let amountperday = 2
let yearsRemaining = maximumage - currentage;
let daysRemaining = yearsRemaining * 365;
let totalSnacksNeeded = daysRemaining * amountperday;
alert( 65-32)
// =33 yearsRemaining
alert(33*365)
// =12045 daysRemaining
alert(12045*2)
// totalSnacksNeeded=24090
