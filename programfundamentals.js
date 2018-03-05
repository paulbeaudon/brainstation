var name = "Paul Beaudon";
console.log("Ex.1\nHello " + name);

var x = 1125;
var answer = x%2;
console.log("Ex.2\n" + answer);

var a=true;
var b=false;
var c=true;
var d= a || b || c;
console.log("Ex.3\n" + d);
var e = a && b && c;
console.log("Ex.4\n" + e);

var answer1 = 10-3*5/4 + 202 % 3;
var answer2 = 10-(3* (5/4) + (202%3));
console.log("Ex.5\n" + answer1 + ", " + answer2);

var q=12;
var q1 = String(q);
var w="113";
var w1=parseInt(w);
var e= "1.12345";
var e1=parseFloat(e);
var r="Hello World";
var r1=parseInt(r);
console.log("Ex.6\n" + q1 + "\n" + w1 + "\n" + e1 + "\n" + r1);

var str1 = "I am a BrainStation student";
var str2 = "I am a student.";
var n1 = str1.search("BrainStation");
var n2 = str2.search("BrainStation");

console.log(n1 + ", " + n2);

var rep = str1.replace("BrainStation student", "Junior Develeoper");
console.log(rep);
