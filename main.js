/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/


// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.
function funny() {
    return "Is this funny";

};

funny();

console.log(funny());
document.getElementById('q1').innerHTML = "</p>" + funny() + "</p>";



// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

document.getElementById('submitBtn').addEventListener("click", function divideByTwo(number) {
    var number = document.getElementById('number').value;
    var divideByTwo = number / 2;
    document.getElementById('q2').innerHTML = divideByTwo;
});



// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.



function greeting(firstName, firstNameTwo) {
    document.getElementById('q3').innerHTML += "<p>Hello " + firstName + "</p>";
    document.getElementById('q3').innerHTML += "<p>Hello " + firstNameTwo + "</p>";
};

greeting("jerermy", "erica");

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
var averageNum = [2, 6, 8, 10, 12, 14];

function average(array) {
    var sumNum = 0;
    for (var i = 0; i < array.length; i++) {
        sumNum += array[i];
        console.log(sumNum);
    }
    return (sumNum / array.length);

}
var averageTotal = average(averageNum);
console.log(averageTotal);
document.getElementById('q4').innerHTML = "<p>" + averageTotal + "</p>";





// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.


var unitPriceEachMonth = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var totalPriceEachMonth = "0";

function cashews(array) {
    for (var i = 0; i < array.length; i++) {
        totalPriceEachMonth = (array[i] * 6);
        document.getElementById('q5').innerHTML += "<li>The Cost Month " + unitPriceEachMonth[i] + " is $ " + totalPriceEachMonth + "</li>"
    }
}
cashews(unitPriceEachMonth);








// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area
// and perimeter of a rectangle.



function areaRectangle(length, width) {
    return length * width;
}
areaRectangle(4, 2);
console.log(areaRectangle(4, 2));
document.getElementById('q6a').innerHTML = "<li> The Area Rectangle:" + areaRectangle(4, 2) + "</li>";



function perimeterRectangle(length, width) {
    return (length * 2) + (width * 2);
}
perimeterRectangle(4, 2);
console.log(perimeterRectangle(4, 2));
document.getElementById('q6b').innerHTML = "<li> The Perimeter Rectangle:" + perimeterRectangle(4, 2) + "</li>";

// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

var numberQuarter = 12;

function quarter(number) {
    return number / 4;
}

quarter(numberQuarter);
console.log(quarter(numberQuarter));
document.getElementById('q7').innerHTML = "<li>For " + numberQuarter + " one quarter is " + quarter(numberQuarter) + "</li>";


// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement
// to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings(hours) {
    if (hours > 8) {
        document.getElementById('q8').innerHTML = "<li> Im a regular sleeping beauty</li>";
    } else {
        document.getElementById('q8').innerHTML = "<li> Who's a grumpy bear </li>";
    }
}
sleepings(3);


// 9. Develop a function that determines a person's age by asking them for their birth year.

var currentYear = 2016;

document.getElementById('submitBtn2').addEventListener("click", function age(birthYear) {
    var birthYear = document.getElementById('birthYear').value;
    var age = currentYear - birthYear;
    document.getElementById('q9').innerHTML = "<li> Your age is: " + age + "</li>";

})



// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.
var teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]
var teamOne = "";
var teamTwo = "";


function team(array) {
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            teamOne += array[i] + " , ";
            document.getElementById('q10a').innerHTML = "<li>" + teamOne + "</li>";

        } else {
            teamTwo += array[i] + " , ";
            document.getElementById('q10b').innerHTML = "<li>" + teamTwo + "</li>";
        }

    }
}
team(teammates);



// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

function add(a, b) {
    return a + b;
}

document.getElementById('submitBtn3').addEventListener("click", function() {
    var digits = document.getElementById('digits').value;
    var digitsArray = digits.split('').map(function(i) {
        return parseInt(i, 10)
    }).reduce(add, 0);

    console.log(digitsArray);
    document.getElementById('q11').innerHTML = digitsArray;
})


var arraydigistthree = [1, 2, 3];
var sumArray = 0;

function sumOfThree(array) {
    for (var i = 0; i < array.length; i++) {
        sumArray += array[i];
    }
    return sumArray;
}
sumOfThree(arraydigistthree);




// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.



function piggyBank(quarters, dimes, nickels, pennies) {

    return ((quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01));
}

var amount = piggyBank(2, 4, 6, 8);
console.log(piggyBank(2, 4, 6, 8));
var amountDollars = "$" + amount.toFixed(2);
console.log(amountDollars);
document.getElementById('q12').innerHTML = amountDollars;



// ADVANCED TRACK



// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

var phoneNumbers = ["456799", "1234567898", "12345678911", "23456789101"];


function phoneNumberCleanUp(array) {
    for (var i = 0; i < array.length; i++) {
        if ((array[i].length < 10) && (array[i].length > 11)) {
            console.log("This is a bad number: " + array[i]);

        } else if (array[i].length === 10) {
            console.log("This is a good number: " + array[i]);

        } else if ((array[i].length === 11) && (array[i].charAt(0) === "1")) {
            console.log("This is a good number: " + array[i].slice(array[i].length, -1));

        } else if ((array[i].length === 11) && (array[i].charAt(0) !== "1")) {
            console.log("This is a bad number also: " + array[i]);

        } else {
            console.log("This is a bad number too: " + array[i]);
        }
    }
}
phoneNumberCleanUp(phoneNumbers);


var phoneNumbers2 = ["456799", "1234567898", "12345678911", "23456789101"];

const phoneNumberCleanUp2 = phoneNumbers2 => {
    phoneNumbers2.forEach(phoneNumber2 => {
        if (phoneNumber2.length === 10)
            console.log('This is a good number:', phoneNumber2);
        else if ((phoneNumber2.length === 11) && phoneNumber2.startsWith('1'))
            console.log('This is a good number:', phoneNumber2.substring(1));
        else
            console.log('This is a bad number:', phoneNumber2);
    });
};
phoneNumberCleanUp2(phoneNumbers2);





// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.

var parameterNumbers = [8, 4, "green", "yellow"];

function parameterNum(array) {
    for (var i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            console.log("Not a number: " + array[i]);
        } else {
            console.log("Is a number: " + array[i])
        }
    }
}
parameterNum(parameterNumbers);


// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.


function dieRolling() {
    var dieOne = Math.floor(Math.random() * 7);
    var dieTwo = Math.floor(Math.random() * 7);
    return dieOne + dieTwo;
}
dieRolling();
console.log(dieRolling);
document.getElementById('q18').innerHTML = dieRolling();


// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

var totalRolls = 0;
var counter = 0;

function dieRolling() {
    while (totalRolls < 40) {
        var dieOne = Math.floor(Math.random() * 7);
        var dieTwo = Math.floor(Math.random() * 7);
        totalRolls += (dieOne + dieTwo);
        counter++;
        console.log(totalRolls)
        document.getElementById('q19a').innerHTML += "<li> Each Roll: " + totalRolls + "</li>";
    }
}
dieRolling();
console.log(counter);


document.getElementById('q19b').innerHTML = counter;



// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.




document.getElementById('submitBtn4').addEventListener("click", function leapYear(year) {
    var year = document.getElementById('year').value;
    if (((year % 4 === 0) && (year % 100 !== 0)) || ((year % 100 === 0) && (year % 400 === 0))) {
        document.getElementById('q20a').innerHTML = "<li> This is a Leap Year:  " + year + "</li>";
    }else {
      document.getElementById('q20b').innerHTML = "<li>This is not a Leap Year: " + year + "</li>";
    }
});
