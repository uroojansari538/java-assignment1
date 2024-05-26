// let a = 2, b = 1;
// let result = --a - --b + ++b + b--;

// alert("a ="+ a); 
// alert("b ="+ b); 
// alert("result ="+result); 
// document.writin("<tr>",subject,"</tr>")
// <tr>total marks</tr>
// <tr>obtained marks</tr>
// <tr>percentage</tr>

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
let a=10

alert(++a);
alert(++a);
alert(--a);
document.write('Result <br>')
document.write('The value of a is; 10 <br>')
document.write(' <br>')
document.write('The value of ++ a is;11 <br>')
document.write('Now the value of a is 11 <br>')
document.write(' <br>')
document.write('The value of ++ a is;11 <br>')
document.write('Now the value of a is 12 <br>')
document.write(' <br>')
document.write('The value of -- a is;11 <br>')
document.write('Now the value of a is; 11<br>')
document.write(' <br>')
document.write(' The value of -- a is;11<br>')
document.write(' Now the value of a is; 10<br>')
document.write(' <br>')
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
let a1 = 2, b = 1;
let result = --a1 - --b + ++b + b--;
alert("a ="+ a); 
alert("b ="+ b); 
alert("result ="+result); 
alert(--a1,--b)
alert(--a- --b + ++b)
alert( --a - --b + ++b + b--)
document.write('a1 is ??<br>')
document.write('b is ??<br>')
document.write('result is ??<br>')
// 3. Write a program that takes input a name from user &
// greet the user.
let name1 = prompt("Enter your name:");
alert("Hello, " + name1 + "! Welcome!");
// Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.\
let numberInput = document.getElementById("numberInput");
let multiplicationTableDiv = document.getElementById("multiplicationTable");
let number = numberInput.value ? parseInt(numberInput.value) : 5;
multiplicationTableDiv.innerHTML = "";
let tableHTML = "<h3>Multiplication Table of " + number + "</h3>";
    tableHTML += "<table border='1'>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + number + " × " + i + "</td><td>=</td><td>" + (number * i) + "</td></tr>";
    }
    tableHTML += "</table>";
    multiplicationTableDiv.innerHTML = tableHTML;
//     6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

let subject1Marks = prompt('enter your subject1 marks')
    let subject2Marks = prompt('enter your subject2 marks')
    let subject3Marks = prompt('enter your subject3 marks')
    let eachsubjectmarks =100
    
    alert(subject1Marks+subject2Marks+subject3Marks)
    let totalMarks =subject1Marks+subject2Marks+subject3Marks
    let percentage = (totalMarks / 300) * 100;
    alert(totalMarks/percentage)
