//=================================================chapter # 21 - 25==========================================//



//Question 1


var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName+lastName;

alert("welcome " + fullName)



//Question 2



var fvrt = prompt("Enter youe favourite mobile phone model")



document.write("My favorite phone is:" + fvrt + "<br> length of string:" + fvrt.length )



//Question 3



var letter = "Pakistani"
var len = letter.indexOf('n')

document.write("String: " + letter + "<BR> Index of 'n': " + len)



//Question 4


var word = "Hello World"

var len = word.lastIndexOf('l')

document.write("String: " + word + "<BR> Last Index of 'l': " + len)



//Question 5


var word = "pakistani"
var char = word.charAt(3);


document.write("String: " + word + "<BR> Charactor at Index of 'i': " + char)





//Question 6


var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = firstName.concat(' ' + lastName)


alert("welcome " + fullName)


//Question 7


var city1 = "Hyderbad"
var city = city1.replace('Hyder','Islam')
document.write("city1: " + city1 + "<br> After replacement:"+city)




//Question 8


var message = "Ali and Sami are best friends. They play cricket and football together."

message.split("and").join("&")
"Ali & Sami are best friends. They play cricket & football together."



//Question 9  



var word = "472"

document.write("Value: ", word, "<BR>", "Type: ", typeof (word), "<BR>", "Value: ", word = +word, "<BR>", "Type: ", typeof (word), )


//Question 10



var inp = "peanuts"
var upr = inp.toUpperCase()

document.write("User input: ", inp, "<BR>", "Upper case: ", upr)




//Question 11


var userInput1 = prompt("enter your name")
var firstletter = userInput1[0].toUpperCase()

console.log(firstletter + userInput1.slice(1))


//Question 12


// method (I)


var num = prompt('enter a dotted number')
var rslt = num.split('.').join("")

document.write("Number: " , num , "<BR> Result: " , rslt )

// method (II)

var numb = prompt('enter a dotted number')
var reslt = numb.replace('.', "")

document.write("Number: " , numb , "<BR> Result: " , reslt )





//Question 13


var name = prompt("input your name")

name = name.toLocaleLowerCase()
var check = false

for (i = 0; i < name.length; i++) {
    if (name.slice(i, i + 1).charCodeAt() == 33 || name.slice(i, i + 1).charCodeAt() == 44  || name.slice(i, i + 1).charCodeAt() == 46 || name.slice(i, i + 1).charCodeAt() == 64 ) {
        check = true;
    } else {
        check = false;
    }
}

if (check == true) {
    alert("please enter a valid username")
} else {
    name
}



//Question 14



var itemBakery = ["cake", "apple pie", "cookie", "chips", "patties"]
var inputCart = prompt("Welcome to ABC Bakery! What you want?")
var isFound = false //this is called flag
inputCart = inputCart.toLocaleLowerCase()

for (i = 0; i < itemBakery.length; i++) {
    if (inputCart === itemBakery[i]) {
        alert(inputCart + " is available at index " + i + " in our bakery")
        isFound = true
        break
    }
}
if (isFound === false) {
    alert("We are sorry. " + inputCart + " is not availabale")
}



//Question 15




var str = prompt();
var flag = 0
var count = 0
var ceck = +str.slice(0, 1)

if (ceck.toString() != "NaN") {
    flag++
} else {
    for (i = 0; i < str.length; i++) {
        var cc = +str.slice(i, i + 1)
        if (cc.toString() == "NaN") {
            count++
        }
    }
}

if (flag == 1 || count == str.length) {
    alert("password does not meet above requirements")
} else {
    console.log("ok")
}


//Question 16



var university = "University of Karachi";
var uni = university.split("")

for (i = 0; i < uni.length; i++) {
    console.log(uni[i]);
}



//Question 17



var userinput = prompt();
var checkLastInput = userinput.slice(userinput.length - 1)

document.write("User input " + userinput +"<BR>" + "Last character of input: " + checkLastInput)



//Question 18



var text1 = "The quick brown fox jumps over the lazy dog"
var flag = 0
var checker = "the "
var textcheck = text1.toLocaleLowerCase()

for (i = 0; i < textcheck.length; i++) {
    dd = textcheck.slice(i, (checker.length) + i)

    if (checker == dd) {
        flag++
    }
}

console.log(text1)
console.log("there are " + flag + " occurrence(s) of world 'the'")






//======================================================chapter # 26 - 30========================================//

//Question 1

var userInput = +prompt("Enter a Possitive Numbers")

console.log("Number: " + userInput)
console.log("floor value " + Math.round(userInput))
console.log("floor value " + Math.floor(userInput))
console.log("ceil value " + Math.ceil(userInput))



//Question 2


var userInput3 = +prompt("Enter a Negative floating numbers")

console.log("Number: " + userInput3)
console.log("floor value " + Math.round(userInput3))
console.log("floor value " + Math.floor(userInput3))
console.log("ceil value " + Math.ceil(userInput3))


//Question 3

var userInput = +prompt("Enter a number for Absolute value")

console.log("The Absolute value of: " + userInput + " is " + Math.abs(userInput))



//Question 4

var diceValue = Math.floor(6 * Math.random() + 1)

console.log(diceValue)



//Question 5

var coinValue = Math.floor(2 * Math.random() + 1)

if (coinValue === 2) {
    alert(coinValue + " Random coin value: Head")
} else if (coinValue === 1) {
    alert(coinValue + " Random coin value: Tail")
}




//Question 6


var ran = Math.floor(100 * Math.random() + 1)

console.log("Random number between 1 to 100: " + ran)


//Question 7



var kg = prompt("Enter your weight in kilograms")
kg = kg.toLowerCase()
var weight = kg.split("k")

console.log("Your weight is " + weight[0] + " Kilograms")



//Question 8


var secNum = Math.floor(Math.random() * 10)
var numInput = +prompt("Enter a number between 1 and 10")

if (numInput === secNum) {
    alert("Congratulations!")
} else {
    alert("Please try again")
}



//======================================================chapter # 31 - 34========================================//


//Question 1


alert(new Date())



//Question 2


var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var date = new Date()
var curMonth = date.getMonth()

alert(month[curMonth])



//Question 3


var day = prompt("Enter day")

day = day.slice(0, 3)

alert(day)


//Question 4


var day = prompt("Enter day")
day = day.toLocaleLowerCase()

if (day === "sunday" || day === "sataurday") {
    alert("It's fun day")
} else {
    alert("Go to work")
}

//Question 5


var date = +prompt("Enter date")

if (date === 1 && date <= 15) {
    alert("First fifteen days of month")
} else if (date > 15 && date <= 31) {
    alert("Last fifteen days of month")
} else {
    alert("Please enter correct date")
}


//Question 6

var myDate = new Date();
var oldDate = new Date(01 / 01 / 70);
var min = myDate.getFullYear() - oldDate.getFullYear();

alert("elapsed minutes since 1970 :" + min * 365 * 24 * 60);
alert("elapsed miliseconds since 1970 :" + min * 365 * 24 * 60 * 60)



//Question 7


var currTime = new Date()

currTime = currTime.getHours()
if (currTime <= 12) {
    alert("It's AM")
} else {
    alert("It's PM")
}


//Question 8



var laterDate = new Date("12/31/20")

document.write("Later Date: " + laterDate)



//Question 9



var ramadanDay = new Date("June 18, 2015")
var nowDay = new Date()
var msRamadan = ramadanDay.getTime()
var msNowDay = nowDay.getTime()
var msDiff = msNowDay - msRamadan
var totalDiff = msDiff /(1000 *60 *60 *24)
totalDiff = Math.floor(totalDiff)

document.write(totalDiff + " Days have passed since 1st Ramadan, 2015" )




//Question 10

var pastDate = new Date("jan 1,2015")
var newDate = new Date("dec 5, 2015")
var days = newDate.getTime() - pastDate.getTime()
var day1 = days / (1000 * 3600 * 24)
var finalTime = day1 * 86400

console.log(
    "on the reference date : " + newDate + "\n" + finalTime + " seconds had passed since the beinning of 2015"
)




//Question 11


var checkTime = new Date();
var oneYr = new Date();
var oldYear = oneYr.setHours(oneYr.getHours() - 1);
var oldhund = new Date(oldYear)

console.log("Curent Date: " + checkTime + " 100 Year back, it was " + oldhund)



//Question 12


var oneYr = new Date();
var oldyear = oneYr.setYear(oneYr.getFullYear() - 100);
var oldhund = new Date(oldyear)

console.log("Curent Date: " + oneYr + " 100 Year back, it was " + oldhund)



//Question 13


var currentYear = new Date()
var getUserdate = prompt("Enter you date of birth format like this ==> MM/d/yy")
var userDate = new Date(getUserdate)
var diff = currentYear - userDate
var age = diff / (24 * 60 * 60 * 1000 * 365)
var bdYear = currentYear.getFullYear() - age

document.write("Your age is " + Math.floor(age) + "<BR>" + "Your birthday year is " + Math.floor(bdYear))




//Question 14



// (a)

var name = "Mr Johhn";


// (b)

var date = new Date()
var month = date.getMonth()


// (c)

var unit = 410


// (d)

var chargesUnit = 16


// (e)

var netAmount = unit * chargesUnit


// (f)

var dueDateCharge = 500


// (g)

var grossAmount = netAmount + dueDateCharge

document.write("Customer Name: " + name + "<BR>")
document.write("Month: " + month + "<BR>")
document.write("Number of Units: " + unit + "<BR>")
document.write("Charges per init: " + chargesUnit + "<BR>")
document.write("Net Amount Payable(eithin Due Date): " + netAmount + "<BR>")
document.write("Late payment surcharge: " + dueDateCharge + "<BR>")
document.write("Gross Amount payable(after Due Date): " + grossAmount )



//======================================================chapter # 35 - 38========================================//


//Question 1

function date() {
    console.log(new Date())
}
date()



//Question 2


function fullName(firstName, lastName) {
    console.log("Hello !" + firstName + " " + lastName)
}
fullName("Mr", "Johhn")


//Question 3

function sum(a, b) {
    console.log(a + b)
}
sum(2, 6)


//Question 4


function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
    }
}

//Question 5



function square(num) {
    return num * num
}



//Question 6

function factorial(num) {
    if (num == 0)
        return 1;
    else {
        return (num * factorial(num - 1));
    }
}
factorial(5)


//Question 7


function counting() {
    var start = +prompt("Enter counting start number")
    var end = +prompt("Enter counting end number")
    for (var i = start; i <= end; i++) {
        console.log(i)
    }
}



//Question 8


function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num
    }
    var hypotenuse = calculateSquare(base) + calculateSquare(perpendicular)
    return calculateSquare(hypotenuse)
}


//Question 9


function areaRectangle(width, height) {
    return width * height
}
areaRectangle(4, 5)


//Question 10 



function reverseText(text) {
    alert(text.split('').reverse().join(''))
  }
  function isPalindrome(text) {
    var reverseText = ''
    for(var i = text.length - 1; i >= 0; i--) {
        reverseText += text[i]
    }    
    console.log('reverseText--->', reverseText)
    if(reverseText === text) {
        alert(text + ' is Palindrome')
    } else {
        alert(text + ' is not Palindrome')
    }
  }
  isPalindrome('madam')


//Question 11



var line = "the quick brown fox jumps over the lazy dog"

function upperCase(string) {
    string = string.split(" ")
    var array = []
    for (var i = 0; i < string.length; i++) {
        array.push(string[i].charAt(0).toUpperCase() + string[i].slice(1))
    }
    return array.join(" ")
}
console.log("Line was: " + line)
console.log("After running function: " + upperCase(line))




//Question 12


function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];

    for (var i = 1; i < array1.length; i++) {
        if (result.length < array1[i].length) {
            result = array1[i];
        }
    }
    return result;
}
console.log(find_longest_word('Web Development Tutorial'));



//Question 13


function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) {
        uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
    });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));



//Question 14

function circum(radius) {
    var circle = 2 * Math.PI * radius;
    alert("The circumference is " + Math.floor(circle))
}
circum(3)

function area(radius) {
    var circle = Math.PI * (radius * radius)
    alert("The area is: " + Math.floor(circle))
}
area(3)








//=======================================================================THE END===============================================================//