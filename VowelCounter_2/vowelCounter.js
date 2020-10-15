// a short intoduction:I am a newbie called as Rishab
//the challenge:The challenge is to create a function which will counter the number of vowels in the string passed as argument to the function
//Algorithm thinking:I created a function which takes a string then inside that function a for loop will run for 5 times and creates a Regular expression in each iteration 
// after the creation of regular expression of checks of that vowel exists in the string and if exits how many time and the total number of time is detected by the count variable 
// at last i just return that count variable which is our number of variable
var vowels=['a','e','i','o','u'];
var count=0;
function counter(str){
if(typeof str!='string'){
throw TypeError();
}
    for(var i in vowels){
    var e=new RegExp(`(\\s*${vowels[i]}\\s*)`,"g");
    console.log(e);
    var a=str.match(e);
    console.log(a);
    if(a!=null){
       count+=a.length; 
    }
    }
    return count;
}
// to run : counter("Hello") => 2;
