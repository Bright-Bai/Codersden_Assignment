let challenge='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3));
console.log(challenge.substring(0,3));
console.log(challenge.includes("Script"));
console.log(challenge.split(""));
console.log(challenge.split(" "));
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(","));
console.log(challenge.replace('JavaScript', 'Python'));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf('a'));
console.log(challenge.lastIndexOf('a'));
let sentence2 ='You cannot end a sentence with because because because is a conjunction';
console.log(sentence2.indexOf('because'));
console.log(sentence2.lastIndexOf('because'));
console.log(sentence2.search("because"));
console.log(challenge.trim());
console.log(challenge.startsWith('30'));
console.log(challenge.endsWith('Script'));
let string = '30 Days of';
console.log(string.concat(" ","JavaScript"));
console.log(challenge.match("a"));
console.log(challenge.repeat(2));

//number 1

 console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\'by John Holmes teaches us to help one another.");

 //number 2

 console.log("\"Love is not patronizing and charity isn't about pity,it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");

 //number 3

let num1 = '10';
let num2 = 10;
console.log(num1 === num2);  
let numint = parseInt(num1);
console.log(numint);

//number 4
//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.


//number 5
//Check if 'on' is found in both python and jargon

//number 6
//I hope this course is not full of jargon. Check if jargon is in the sentence
let thisSentence = "I hope this course is not full of jargon."
console.log(thisSentence.includes('jargon'));

//number 7
//Generate a random number between 0 and 100 inclusively.

    
let randomNum = Math.floor(Math.random() * 100) 

console.log(randomNum)    

//number 8
//Generate a random number between 50 and 100 inclusively.
let randomNum1 = Math.floor(Math.random() * 100) + 50


console.log(randomNum1)         


//number 9
//Generate a random number between 0 and 255 inclusively.
let randomNum2 = Math.floor(Math.random()*255)  


console.log(randomNum2)         

 
//number 10
//Access the 'JavaScript' string characters using a random number.
         
//number 11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//number 12
//Use substr to slice out the phrase because because because from the following sentence:
let sentence1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence1.substr(30,24));


//level 3
//number 1
let loveNumber = 'Love is the best thing in this world.\
 Some found their love and some are still looking for their love.'; 
 console.log(loveNumber.search("love"));
 //number 2



 //number 3
 let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple.;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
 console.log(sentence.replace("/[%$@#&]/g"," "));
 
 let regEx = /\d+/

//number 4
 let sentence3 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
 
 console.log(sentence3.match(regEx));
 console.log(sentence3.match(/\d+/g));
 let newnumber =sentence3.match(/\d+/g);
 let firstNumber = newnumber[0] 

 let secondNumber = newnumber[1]

 let thirdNumber = newnumber[2]


 console.log((firstNumber*12)+(secondNumber*12)+(thirdNumber*12));









