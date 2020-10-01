# Algorithmic_javascript
<br>

> ## This is open-source Project and Part HACKTOBERFEST 2020 

#### <font color='green'> Contribute to open source and make the world *A Better Place* </font>

#### Feel free to give a pull request. It should not be spam or invalid. It will be accepted and will be merged if it's valid PR

##### PS:You will also WIN cool T-shirt from Digital Ocean If you do FOUR successful Pull Requests with.

> # Hurry Up and Start Coding! :)


<br>

> ### [Sign In Here To start Hacking](https://hacktoberfest.digitalocean.com) <br>

<br>

#### Sign-in on their website before contributing to repository
<br>

#### Event Details

 Hacktoberfest® is open to everyone in our global community. Whether you’re a developer, student learning to code, event host, or company of any size, you can help drive growth of open source and make positive contributions to an ever-growing community. All backgrounds and skill levels are encouraged to complete the challenge.
* Hacktoberfest is a celebration open to everyone in our global community.

* Pull requests can be made in any GitHub-hosted repositories/projects.

* You can sign up anytime between October 1 and October 31.

<br>

#### Rules

* To earn your Hacktoberfest tee or tree reward, you must register and make four valid pull requests (PRs) between October 1-31 (in any time zone). 
* PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. If a maintainer reports your pull request as spam or behavior not in line with the project’s code of conduct, you will be ineligible to participate.
* This year, the first 70,000 participants who successfully complete the challenge will be eligible to receive a prize. 

<br>

#### Quality Standards

In line with Hacktoberfest values **(Quantity is fun, quality is key)** , here you are provided examples of pull requests that we consider to be low-quality contributions (which we discourage).

* Pull requests that are automated (e.g. scripted opening pull requests to remove whitespace/fix typos/optimize images).

* Pull requests that are disruptive (e.g. taking someone else's branch/commits and making a pull request).

* Pull requests that are regarded by a project maintainer as a hindrance vs. helping.

* Something that's clearly an attempt to simply +1 your pull request count for October.

**Last but not least, one pull request to fix a typo is fine, but 5 pull requests to remove a stray whitespace is not.**
<br>

> ## Refer to [HacktoberFest](https://hacktoberfest.digitalocean.com/details) Website for detailed information

<br>

__If you want to contribute then follow theses steps__
>1.fork the repo. <br>2.take the algorithm which you want to add to list<br> 3.Make sure it's not repeated. <br> 4. Be ready with your code in *JAVASCRIPT* <br>5.Add code file in folder and name the folder with problem name. e.g If you are adding Factorial code and it is sixth in  serial number then Folder Name becomes **Factorial_6** <br> 6.The added algorithm should have following sub-sections <br>
    > 5.1 A short Introduction <br>
    > 5.2 The challenge<br>
    > 5.3 Algorithmic thinking<br>
    > 5.4 Code Implementation <br> 
    6. add two hr tags after each problem in README.md file <br>
    


__Algorithms practiced using JS__

## List of problems
1. String reversing  
2. Vowel counter 
3. Finding the Most Recurring Character
4. Sentence Capitalization
5. Palindromes

## Explanation
<b>1. String reversing</b>
 <p>The string reversal algorithm is perhaps the most common JavaScript code challenge on the internet. In this article, we explore various string reversal techniques as a good number of string manipulation algorithms are dependent on ones ability to reverse a string. </p> <br>

__The challenge:__ Given a string of text, write an algorithm that returns the text received in a reversed format. E.g

<hr>

```js
 reverseString('algorithm')
 // should return "mhtirogla"
```

<hr>

__Algorithmic Thinking:__
<p>
The process here is quite simple and straight forward. Our function will receive only one parameter i.e the string to be reversed.

Next, we would have to manipulate the characters in this string logically in order to return the string in reverse.
</p>

__Code Implementation:__
We will now explore ways to solve this challenge below. They are:

    1.Chaining in-built methods
    2.Using a For-loop

*1.Chaining in-built methods:*

        
    The **.split()** method is used to split a string into an array of characters. It receives one argument which specifies the separator that determines where every split occurs.


    The .reverse() method reverses the order of the elements in an array


    The **.join()** method is used to combine the elements of an array into a string. It receives one argument which specifies the separator. When none is supplied, it defaults to a comma.


<p> In the code snippet below we use these methods to create a one-line solution by chaining them in succession to split the received text into an array of characters, reverse the order of array’s elements and join the elements of the reversed array to produce the reversed text.</p>

```js
    function reverseString(text){
        return text.split("").reverse().join("")
    }
```

*2.For-Loop Way:*

<p> For loops are used to execute a piece of code as long as a condition is met. In the solution below, we use a decrementing for-loop to run through the string received and append each character to another variable in reverse order. See how this is done below</p>

```js
    function reverseString(text){
        let result;

        for(let i=text.length-1;i>=0,i--){
            result+=text[i];
        }
        return result;
    }
```



<hr>
<hr>
<b>2. Vowel counter </b>

<p>Here we will be working with strings and arrays. The main challenge is given in The challenge section below.Let's find it </p>

__The challenge:__ <p>You are given a string of text containing zero or more vowels in it,count the number of vowels that can be found in given text. For example:</p>

    ```js
    vowelCounter("Hacktoberfest is very Nice") //will return 8
    ```


__Algorithmic Thinking:__ <p> After reading the problem statement, __ given text of string__ must be in your mind. Let's go further to explore</p>

> A function is a block of organized, reusable code that is used to perform a single, related action. They may or may not accepts value as parameter for computational tasks. The values are also called as Arguments.

*Let's Breakdown the approach* 

* write a function which receives a parameter called "text". It should be string of any desired length which is to be passed in function as an argument.

* create a counter to count vowels

* Next, we need to scan the string and search for the vowels ('a','e','i','o','u')

* Function will return the number of vowels found. So you have to use __*return*__ function which stops the the function execution and returns a value.
<br>

__Code Implementation:__ 
<p> We are going to use Two approaches for solving this problem:</p>

    1. Using Iterative approach
    2. Using Regular Expression

1.Using Iterative approach:  
<br>
```js
const vowel = ["a", "e", "i", "o", "u"];

function vowelcnt(text) {
    let counter = 0;

    //Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowel.includes(letter)) {
            counter++;
        }
    }

    // Return number of vowels

    return counter;
}

console.log(vowelcnt("i love HacktoberFest"))
```

**Breaking-down the steps:**

* Firstly, we declard const vowel which is array of five vowels. 
* We declare a function and initialize the counter.
* We make use of For loop to itearte over the given string. Next, we convert the all letters of string to lowercase as we don't want to miss out on uppercase letters.
* In for loop,use if to check if selected letter is included in the array of vowels which we declared earlier. We call *includes()* method on array of vowels to check whether the array includes selected letter or not.

* If the condition is true, we increment the counter.
* After looping through, counter is returned which gives the counte of vowels found in given string.






<hr>
<hr>
<b>3. Finding the Most Recurring Characterg</b>

<p> In this challenge, we will be dealing with strings, arrays and objects. We will learn to manipulate these data types using various methods that'd bring us to a working solution in the end.</p>

__The challenge:__ Given a string of text, find and return the most recurring character. e.g

```js
maxRecurringChar('aabacada') // will return 'a'
``` 

__Algorithmic Thinking:__ <p> From the challenge statement, we can infer that our function has only one parameter; the string of text.<br> We need to somehow keep track of every character in the string as well as the number of times it exists. <br> This we would describe as character mapping. Once we successfully create such a map, we can easily determine which character has the highest occurence. </p>
<br>

__Code Implementation:__

We need to keep track of every character in the string as well as the number of times it exists.

The main concept we need here is character mapping. Our aim is to map characters to the number of times they exist.

for example: In string "success" <br>
* s=3
* u=1
* c=2
* e=1

*To implement this, an objet can be used.We loop through string received & add each character to a character map object as a key & the number of times it exists as a value*

```js
  let charmap = {
       s:3,
       u:1,
       c:2,
       e:1
  }
```

**Let's implement it**

```js

/* 
maxCharValue is used to store the maximum value yet encountered at the point of every iteration with the for---in loop.

maxChar is used to store the character with the highest value on every iteration.

*/
function maxRecurringChar(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

console.log(maxRecurringChar('success'))
//  will return 's' because it is occuring 3 times
```


<hr>
<hr>

<b>4. Sentence Capitalization</b>
<p> Often during presentation situation arises where we need to manipulate the letter casing of strings within our application. Javascript offers two popular methods designed for this purpose:

    1.toUpperCase(): this method returns the string passed in as an argument converted in uppercase letters. <br>
    
    2.toLowerCase(): this method returns the string passed in as an argument converted to lowercase letters. 

__The challenge:__ Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g
```js
capitalSentence("a cat and a dog") // would return "A Cat And A Dog"
```


__Algorithmic Thinking:__ <p>
At a glance this may seem like a very simple challenge, but it actually isn’t when considered carefully.

Working through the challenge, it seems that we need to write a function that'd receive the sentence to be converted as an argument 
Next,we go through every word in sentence and capitilize every first letter of word. This brings concept of LOOP to mind
 </p>


__Code Implementation:__

1. Using .forEach Method:
    The .forEach method in javascript runs a provided function on each element within array

2. Using .map and .slice method:
    The .map method is used to create a new array with the results gotten from calling a provided function on every element in the array on which it is called.

    ```js   
    function capSentence(text) {
        let wordsArray = text.toLowerCase().split(' ')
        let capsArray = wordsArray.map(word=>{
            return word[0].toUpperCase() + word.slice(1)
    })
        return capsArray.join(' ')
    }

3. Using .map() and .replace() method:

    ```js
    function capSentence(text){
        let wordsArray =text.toLowerCase().split(' ')
        let capsArray = wordsArray.map(word=>{
            return word.replce(word[0],word[0].toUpperCase())
        } )

        return capsArray.joint(' ')
    }
    ```

<hr>
<hr>


<b>5. Palindromes </b>
   
*What is a Palindrome:* A palindrome is a word, number, or other sequence of characters which reads the same backward as forward, such as "madam" or "racecar". <br>

__The challenge:__ <p>Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g </p>

```js
    palindromeChecker('racecar') // will return true
```

__Algorithmic Thinking:__ <p> According to challenge,"Given a string of text" implies that our funciton must have string-typed parameter which we call "text" <br><br>
Next we will have to check if the string is paindrome or not. To do this we have to reverse the string and compare that rerverser string with the original one(i.e the one which is passed as argument) <br> <br>
Finally , we return True or False depending on the result of evaluation. <br><br>
True: when it's palindrom <br>
False: Otherwise </p>

__code Implementation:__ <p>  In this challenge, we'd consider two, yet three ways to implement this as highlighted below:

    1. An Intuitive Approach
    2. Looping Through and Comparing Characters
    3. Looping Through and Comparing Characters(Optimized)


</p>

1. An Intuitive Approach:
    ```js
    
    function palindromeCheck(text){
        var reverseText= text.toLowercase().split(' ').reverse().join(' ' )

        return text=== reverseText
    }
    ```
Let's unveil the "mysteries":

* Firstly, the function accepts the string that is to be tested
* Next, all the letters are converted to lowercase,then <font color="red" >.split()</font> method is called on string that is received as text 
* Next, we call <font color="red" > .reverse()</font> to re-order the array elements in reverse.

* After that <font color="red" >.join()</font> is called on reversed array to form a whole string.
<br>


2. Looping Through and Comparing Characters:

        This could be a bit confusing than the previous implementation.
        We will break it into simple steps.Stay in the game. 
* For example, If we have to test string "machine", we will compare "m" with "e", because if the string is reversed then "e" will take m's position

* Similarly, "a" will be compared to "n".

* Let's Jump to code.


    ```js
    function palindromeChecker(text) {
        let charArray = text.toLowerCase().split('')

        let result = charArray.every((letter, index) => {
            return letter === charArray[charArray.length - index - 1];
    })

        return result
    }
    ```

Let's review it:
* First we convert the string to lowercase and after it we use <font color="red" >.split()</font> method 

* We use special array method <font color="red" >.every()</font>  to loop through array & perform our check. In fact,<font color="red" >.every()</font>
method tests whether all elements pass the test or not which is implemented by provided function

* Here, provided function accepts two parameters: current letter and index. Read more about every function [here](https://www.geeksforgeeks.org/javascript-array-every-method/).

* In <font color="red" >.every()</font> method, it will return true if test passes all cases and will return false if it didn't.

> Did you notice any problem?There is problem with this implementation if we think performanace wise



3. Looping Through and Comparing Characters(Optimized):


    ```js
    function palindromeChecker(text) {
        var textLen = text.length;
        for (var i = 0; i < textLen/2; i++) {
            if (text[i] !== text[textLen - 1 - i]) {
                return false;
            }
        }
    return true;
    }
    ```
<hr>
<hr>

<b>6. Factorial of a number </b>

<p>The Factorial of a non-negative number ,n , is computed as the product of all integers between 1 and n (both inclusive).<br><br>
   * factorial(n) = n * (n-1) * ..... * 1<br>
   It can be thought of as:<br>
   * factorial(n) = n * factorial(n-1).</p> <br>

__The challenge:__ <p>Given a number, print the factorial of this number </p>

```js
    answer = factorial(n) // will return the factorial.
```

__Algorithmic Thinking:__ <p>Approaches <br>
There are two ways to compute the factorial of a number in JavaScript.<br><br>

1. Iterative<br>
2. Recursive<br><br>
Both of these approaches will be explored below. </p>


__code Implementation:__ <p><strong>1. The Iterative approach</strong><br><br>
Keeping in mind the first definition of a ​factorial, the variable i is initially set equal to n and is gradually decremented to 1. In each step, the result of the multiplication is stored in the variable answer. </p><br>

```js
    function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
       for(var i = n; i >= 1; i--){
         answer = answer * i;
       }
       return answer;
     }  
    }
    let n = 4;
    answer = factorial(n)
    console.log("The factorial of " + n + " is " + answer);
```
<br>
<p><strong>2. The Recursive approach</strong><br><br>
As stated above, the factorial of n can be found by finding the factorial of a number one less than n, and then multiplying this answer with n. So the factorial of n-1 can be thought of as a subproblem that needs to be computed first. </p><br>

```js
    function factorial(n){
    //base case
    if(n == 0 || n == 1){
        return 1;
    //recursive case
    }else{
        return n * factorial(n-1);
     }
    }
    let n = 4;
    answer = factorial(n)
    console.log("The factorial of " + n + " is " + answer);
```
<br>

<hr>
<hr>

<b>7. Name </b>

__The challenge:__ <p> </p>


__Algorithmic Thinking:__ <p> </p>


__code Implementation:__ <p> </p>
<hr>
<hr>

<b>8. Name </b>

__The challenge:__ <p> </p>


__Algorithmic Thinking:__ <p> </p>


__code Implementation:__ <p> </p>
<hr>
<hr>

<b>9. Name </b>

__The challenge:__ <p> </p>


__Algorithmic Thinking:__ <p> </p>


__code Implementation:__ <p> </p>
<hr>
<hr>

<b>10. Name </b>

__The challenge:__ <p> </p>


__Algorithmic Thinking:__ <p> </p>


__code Implementation:__ <p> </p>
<hr>
<hr>

<b>11. Name </b>

__The challenge:__ <p> </p>


__Algorithmic Thinking:__ <p> </p>


__code Implementation:__ <p> </p>
<hr>
<hr>
