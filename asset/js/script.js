// Online Exam Result System
var mark = 70;

if (mark >= 90) {
    console.log("Grade A");
} 
else if (mark >= 75) {
    console.log("Grade B");
} 
else if (mark >= 50) {
    console.log("Grade C");

} 
else if(mark >= 40){
    console.log("pass")
}
else {
    console.log("Fail");
}

// Employee Attendance and Salary
var basic_salary = 30000;
var Attendance = 24;
var salary;
if (Attendance >=28){
    salary = basic_salary;
}else if(Attendance >=20){
    salary = basic_salary * 0.80;
}else{
    salary = basic_salary * 0.50;
}
console.log("salary="+salary,"Attendance="+Attendance);


//BANK LOAN ELIGIBILITY
var age = 24;
var monthly_salary = 20000;

if (age >= 21 && monthly_salary >= 25000) {
    console.log("eligible for loan");
} 
else {
    console.log("Not eligible for loan");
}

//order

var payment = false;  
var stock = true;     

if (stock && payment) {
    console.log("Order confirmed & Online payment successful");
} else if (stock && !payment) {
    console.log("Order confirmed && Cash on Delivery ");
} else {
    console.log("Out of stock");
  
}



// // 1to20

for (var i = 1; i <= 20; i++) {
    // console.log(i);
}


// 20 to 1


for (var i = 20; i >= 1; i--) {
    // console.log(i);
}

// 1 t0 50 even 




for (var i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        // console.log(i);
    }
}



// 1 to 30 odd



for (var i = 1; i <= 30; i++) {
    if (i % 2 !== 0) {
        // console.log(i);
    }
}

//  table 7


for (var i = 1; i <= 10; i++) {
    console.log(i + " * 7 = " + (i * 7));
}


// sum of odd number

var a= 0
for(var i=0 ;i<=10;i++)
{
    if(i%2 !==0){
        a = a+i;
    }
}
console.log("sum of odd="+a);

//factorial 5
var a= 5
var fact =1
for(var i= 1;i<=a;i++){
    fact = fact*i;
}
console.log(fact);
  

//pattern prg

for (var i=1; i<=5; i++) {
    var row = "";
    for (var j = 1; j <= i; j++) {
        row=row+j;
    }
    console.log(row);
}

//prime

for (var i = 1;i<=10; i++) {
    var count=0;

    for (var j=1; j<=i; j++) {
        if (i%j === 0) {
            count++;
        }
    }

    if (count === 2) {
        console.log(i);
    }
}

//large no

var a = 10;
var b = 25;
var c = 8;
var d = 40;
var e = 15;

var large= a;

if (b>large) {
    large=b;
}
if (c>large) {
    large=c;
}
if (d>large) {
    large = d;
}
if (e>large) {
    large = e;
}

console.log("large number = " + large);

  





