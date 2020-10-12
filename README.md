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
    
### Star the repository If you enjoyed contributing to open source projects.
<br>

__Algorithms practiced using JS__

## List of problems
1. String reversing  
2. Vowel counter 
3. Finding the Most Recurring Character
4. Sentence Capitalization
5. Palindromes
6. Pig Latin 
7. Deep Compare
8. Binary Search Tree

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

    ```js
    function sentenceCap(text) {
    let wordArray = text.toLowerCase().split(' ')

    let capsarray = []

    wordArray.forEach(word => {
        capsarray.push(word[0].toUpperCase()+ word.slice(1) )    
    });

    return capsarray.join(' ')
    
    }
    console.log(sentenceCap("ARTIFICIAL")) 
    //will return Artificial
    ```

<p> 

* We call the .toLowerCase() method on the string of text received to convert the entire sentence to lowercase. We also chain the .split() method in sequence to divide the lowercase sentence into an array of words as shown below. This array is stored as wordsArray
</p>
<p>

* Next, using the .foreach() method, we iterate through every word(element) in the array and execute a function on it. 
* The function takes the first letter of the word and turns it to uppercase using the .toUpperCase() method. To retrieve the remaining part of the word in lowercase, we use the .slice() method to slice the string starting from position 1 till the end.

* We combine the transformed first letter and the sliced section together to form the capitalized word which we push into our array of capitalized words capsArray.

* After this process has being carried out for every word, capsArray now holds the capitalized version of every word in the sentence

* Finally .join() method is used. Then We pass in an empty space as the separator. This gives us the capitalized sentence which we return in conclusion.
</p>


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

<b>6. Pig Latin Translator</b>

For specific information on Pig Latin, view this [article](https://en.wikipedia.org/wiki/Pig_Latin).

__The challenge:__ <p>Convert a string of text into Pig Latin.</p>


__Algorithmic Thinking:__

We will consider two(2) ways to implement this function in JavaScript. They are:

An imperative approach
A declarative approach
Before going ahead to implement both solutions, it’d be helpful to gain a better understanding of the two terms used above.

Imperative vs Declarative
Very often, we find these terms thrown around like they are very simple concepts everyone should know. However, the difference is usually not much obvious to most.

Simply put, an imperative style of programming is one which specifies how things get done. Although this might sound like what you do each time you write code, there's a difference to it. Imagine you were to add an array of numbers and return the sum, there are different ways you could approach the problem. One way could be writing a forloop that'd go over each element in the array and cumulatively add every element to an accumulator until the final sum is reached. That is imperative. You are specifying how things get done.

On the other hand, a declarative approach would abstract this process, allowing you to specify what should be done rather than how. Thus, you may use the .reduce() method on the array to reduce every element to a final value by returning the sum within the call back.

[Source](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/pig-latin)

__code Implementation:__ 

1. Imperative Approach

We start by converting the received string str to lowercase. This is to prevent any casing related errors during comparison(“a” does not equal “A”).

```js
    // Convert string to lowercase
    str = str.toLowerCase()
```

Next, we initialize two variables:

```js
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;
```

vowels - containing the five English vowels
vowelIndex - for storing the index at which the first vowel in the word is found. It is initialized to 0.

We use an if…else statement to check if the first letter of the word can be found within our vowels array by calling the .includes() method on the array while passing it the first letter of the string str[0]. If it is found, this returns true, which implies that the first letter is a vowel. Hence, we simply add "``way``" to the end of the string and return the result as the Pig Latin equivalent.


```js
    if (vowels.includes(str[0])) {
        // If first letter is a vowel
        return str + "way";
    } else {
        ...
    }
```

If the statement evaluates to false, it signifies that the starting character is a consonant. Hence, we use a for…of loop to iterate through the string to identify the position of the first vowel. When we locate the first vowel, we use the .indexOf() method to retrieve it’s position in the string and store it into the variable vowelIndex. After this step we terminate the loop using the break statement.

```js
    // If the first letter isn't a vowel i.e is a consonant
        for (let char of str) {
            // Loop through until the first vowel is found
            if (vowels.includes(char)) {
                // Store the index at which the first vowel exists
                vowelIndex = str.indexOf(char);
                break;
            }
        }
```

At the last line, we use the .slice() method to manipulate the string to generate the Pig Latin equivalent.

```js
    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
```

2. Declarative Approach

In this approach, we implement a very concise solution to this challenge by combining the .replace() method and regular expressions to transform the received string into its Pig Latin equivalent.


Our solution comprises mainly of two parts as analyzed below:

```js
 str.replace(/^([aeiouy])(._)/, '$1$2way')
```

The first .replace statement specifies a replacement to be carried out if the word begins with a vowel. This is specified in the first bracket within the_ *.replace()* method call i.e *([aeiou])*. The second bracket *(.*)* refers to every other character after the vowel. Thus, the expression specifies a pattern for words beginning with a vowel and followed by anything else. When this case is matched, a new string in the format of '``$1$2way``' is generated and used to replace the original srtring. $1 here refers to the first bracket and $2, the second bracket. This means that we simply take the word as it was and affix "``way``" to the end.

```js
 str.replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
```

The second .replace statement specifies that if the word does not start with a vowel i.e ^([aeiouy]+), and is followed by anything else (``*.*)*, it should be replaced with a string formatted in the order '$2$1ay``'. The plus sign in ^([aeiouy]+) caters for a situation where there is a consonant cluster. Thus it represents every non-vowel character at the start of the word. '$2$1ay' generates the new string in the order of remaining characters + consonant cluster + '``ay``'. This gives the Pig Latin equivalent.

```js
function pigLatin_declarative(str) {
    return str
        .replace(/^([aeiouy])(._)/, '$1$2way')
        .replace(/^(_[_^aeiouy]+)(._)/, '$2$1ay')
}
```

Note that we chain both .replace() methods in succession such that both cases are tested and only the one that matches will be evaluated further.

[Source](https://scotch.io/courses/the-ultimate-guide-to-javascript-algorithms/pig-latin)


<hr>
<hr>

<b>7. Deep Comparison </b>

Comparing objects can be troublesome, not to mention multi-dimensional objects/arrays. Here is something simple to help.

__The challenge:__ <p> - JS Objects, contrary to the way we perceive it, are simply pointers to the data stored, rather than the actual data itself. Thus, to compare objects/arrays a and b we cannot just use normal comparison operators.</p> 
```js 
a === b //false
```
<p> - Use of multidimensional objects/arrays is possible, making it difficult to compare simply by iteration since we don't know the depth of a value. </p>

<p> - Different data types like Dates and undefined must also be taken into consideration. <p>
 
 <p>Given the above, return a boolean signifying whether a and b are equivalent in content. </p>

__Algorithmic Thinking:__ <p>As we would be comparing each item contained in the objects, a loop may be the first instinct to solving it. However, with the potential of multidimensional iterables, we would have to disect nested arrays in the same way when we encounter them. A combination of iteration and recursion is therefore necessary. So for each item of the array a data type check is necessary as well, to allow execution of a relevant comparison.
 
 Breaking it down:
 * check if ```a === b```
 * check if ```a``` and ```b``` are both iterable
 * iterate over ```a``` using keys and call deepCompare recursively
</p>


__code Implementation:__ <p> 

Firstly, we'll do the most simple check of ```a === b``` to avoid unnecessary complexity. This will process all of the equal literal values for us.

```js 
if(a === b) return true
```

Then comes the interesting part! There are several data types we need to look out for: Objects, Arrays(which JS treats as an object), and Dates(which is also treated as an object!), thus all we have to do is check if both a and b are of type object. If not, we can just return false as they didn't pass the ```a === b``` test.

```js 
if(typeof a === "object" && typeof b === "object")...
```

Note that we use ```===``` here to differentiate between data types strictly.

Next, we can process the dates first, as that doesn't require iteration. Make sure to compare ```Date.valueOf()``` instead of the date object itself.

```js 
if(a instanceof Date && b instanceof Date) return a.valueOf() === b.valueOf() 
```

Lastly, by taking the keys of the iterables we can compare the length of ```a``` and ```b```, then make use of built-in Array.some method to check if any values of the two iterables don't match.

```js
//get keys/index of object/array a
const keysA = Object.keys(a)

//make sure a and b are the same length
if(keysA.length !== Object.keys(b).length) return false
   
//Array.some() iterates through the values in an array and stops executing nested code until there is one that returns true
//in this case that would be when there is one different value between a and b
return !keysA.some( key => { 
  //run deepCompare recursively
  return !deepCompare(a[key], b[key])
})
 ```


Put it all together, and we have

```js
const deepCompare = (a, b) => {
  if(a === b) return true

  if(typeof a === "object" && typeof b === "object")
  {
    if(a instanceof Date && b instanceof Date) return a.valueOf() === b.valueOf()
    else 
    {
      const keysA = Object.keys(a)
      if(keysA.length !== Object.keys(b).length) return false
      return !keysA.some( key => {
        return !deepCompare(a[key], b[key])
      })
    }
  }
  else return false
}

deepCompare(1, 2) 
//false

deepCompare({"first": 1, "second": 2}, {"first": 1, "second": 2})
//true

deepCompare([1, "2", 3.0], [1, "2", 3])
//false

const arr = [1, 2, "3", [{4: "5", 6: 7}, 8.0, new Date(), undefined]]
deepCompare(arr, [1, 2, "3", [{4: "5", 6: 7}, 8.0, new Date(), undefined]]) 
//true

  ```
  
It's that simple! Hope this helps.
</p>
<hr>
<hr>

<b>8. Binary Search Tree </b>  
Building, traversing or finding values in Binary Search Trees

__The challenge:__ <p> 

The challange is to build a Binary Search Tree, traverse across the tree or find a value in the BST using JavaScript Language.  
Rather than dealing with complex problem statements on Binary Search Trees, this program focuses on providing a clean overview of how to Build a Binary Tree using the concepts of Object Oriented Programming in JavaScript Language.

The functions that have been implemented in the program are as follows:

```js
// 1. For adding new value in the Binary Search Tree

add(val) // val is the value passed as a parameter to be added in the BST

// 2. For Inorder Traversal of the BST

inorder_traversal() // User calls this function
inorder(temp)  // helper function

// 2. For Preorder Traversal of the BST

preorder_traversal() // User calls this function
preorder(temp)  // helper function

// 2. For Postorder Traversal of the BST

postorder_traversal() // User calls this function
postorder(temp)  // helper function
```
</p>


__Algorithmic Thinking:__ <p> 

1. **_Building the tree:_**  
A Binary Search Tree is a Tree Data Structure such that every node of the tree has less than or equal to 2 children (namely left and right), such that every single node holding values, smaller than a Node X, are to the left of Node X, whereas all nodes holding values greater than a Node X are to the right of Node X.  

                                   Node X  
                             (Storing val = 5)
                                   /   \  
                                  /     \  
                       This branch       This branch  
                         has nodes       has nodes  
                            having       having  
                           val < 5       val > 5

On similar grounds, here is an example of a Binary Search Tree:

                                     5
                                   /   \
                                  2     7
                                 / \   / \
                                1   3 6   9

Hence this is what has to be taken care of while building a BST!  

We can use a recursion algorithm to build a tree:

    1. For every node: Check if to-be-added value is equal to the value that the node stores. If this is true, then we increase the count of that Node.  
    
    2. Else If to-be-added value is smaller than the node value then we go to the left subtree.  
    
    3. Else (to-be-added value is greater than node value) we go to the right subtree.


2. **_Inorder Traversal:_**  

This traversal ensures that the left subtree is printed before the root node, and the right subtree is printed after the root node.

3. _**Preorder Traversal:**_  

This traversal ensures that the root node is printed before the left subtree and right subtree.

4. _**Postorder Traversal:**_  

This traversal ensures that the root node is printed in the end, that is, after left subtree and right subtree gets printed.

5. **_Finding a value in the tree:_**  

This problem can be conquered using a recursion logic:  

    1. If value of the node is equal to to-be-founded value, then return the count of the node.  
    
    2. Else if to-be-founded value is smaller than value of the root node, then go to left subtree.  
    
    3. Else (to-be-founded value is greater than value of the root node), go to right subtree.  
    
    4. if root node is NULL, then to-be-founded value does not exist in the tree, hence return 0.

</p>


__Code Implementation:__ <p>

For complete code check out the Binary Search Tree Folder, here I am showing snippets of code on which the algorithms are based.

0. **_The Node Class_**

```js
class Node{
    constructor(val){
        this.val = val         // storing value
        this.left = null       // address of the left child
        this.right = null      // address of the right child
        this.count = 1         // count of the occurence of this.val in the node
    }
}
```

1. **_Building the tree:_**  

```js
  if (val == temp.val){
    temp.count += 1
    return
  }
  else if (val < temp.val){
    temp = temp.left
  }
  else{
    temp = temp.right
  }
```

2. **_Inorder Traversal:_**  

```js
 // printing the left subtree
 this.inorder(temp.left)
 
 // printing value of the node for all the counts
 for (let index = 0; index < temp.count; index++) {
 console.log(temp.val + " ")
 }
 
 // printing the right subtree
 this.inorder(temp.right)
 
 return
```

3. _**Preorder Traversal:**_  

```js
 // printing value of the node for all the counts
 for (let index = 0; index < temp.count; index++) {
 console.log(temp.val + " ")
 }
 
 // printing the left subtree
 this.inorder(temp.left)
 
 // printing the right subtree
 this.inorder(temp.right)
 
 return
```

4. **_Postorder Traversal:_**  

```js
 // printing the left subtree
 this.inorder(temp.left)
 
 // printing the right subtree
 this.inorder(temp.right)
 
 // printing value of the node for all the counts
 for (let index = 0; index < temp.count; index++) {
 console.log(temp.val + " ")
 }
 
 return
```

5. **_Finding a value in the tree:_**  

```js
if(val == temp.val){ // if val is equal to current node value
  return temp.count
}
else if (val < temp.val){ // if val is less than current node value
  return this.find_val(val, temp.left)
}
else{ // if val is greater than current node value
  return this.find_val(val, temp.right)
}
```
</p>

<hr>
<hr>

<b>9. Numbers to Roman Numerals </b>

__The challenge:__ <p>Convert a regular number to a Roman Numeral</p>


__Algorithmic Thinking:__ <p>You want to convert a number to a roman numeral... the trick to this problem is to kind of "split" the problem to individual digits. Instead of doing some weird convoluted solution, you should see that each digit would map to a string value and they only "add up".

**Example**
- DXXXII = 532
    - Now, let's think about this example step by step. Let's take 500 out of 532. What is 500 in roman numeral? `500 = D`, right? We "append" that to our "string". now we evaluate 32... so 32 is essentially 30 + 2, so we take out 30 this time. `30 = XXX`, then append to "string". And finally, we have 2... you can't really "destructure" 2 any further so we have `2 = II`, and then append to string...
    - now we have `"D" + "XXX" + "II" = 532`, YAY!!!
</p>


__code Implementation:__ <p>

```javascript
// A regular number
const num = 3;

// convert a number from 0 - 3000 to a roman numeral  
function convertToRomanNumeral(number) {
    // 0, 1, 2, 3, 4, ..., 9
    const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    // 0, 10, 20, 30, 40, ..., 90
    const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    // 0, 100, 200, 300, 400, ..., 900
    const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM']
    // 0, 1000, 2000, 3000
    const thousands = ['', 'M', 'MM', 'MMM']

    // get the value of digit in the thousandth postion (e.g. 3576 => 3) and accesses at index of the value of the digit (e.g. 3576 => thousands[3] = 'MMM')
    const thousandthDigit = thousands[Math.floor(number / 1000)];

    // get the value of digit in the hundredth postion (e.g. 3576 => 5) and accesses at index of the value of the digit (e.g. 3576 => hundreds[5] = 'D')
    const hundredthDigit = hundreds[Math.floor((number % 1000) / 100)];

    // get the value of digit in the tenth postion (e.g. 3576 => 7) and accesses at index of the value of the digit (e.g. 3576 => tens[7] = 'LXx')
    const tenthDigit = tens[Math.floor((number % 100) / 10)];

    // get the value of digit in the oneth postion (e.g. 3576 => 6) and accesses at index of the value of the digit (e.g. 3576 => ones[6] = 'VI')
    const onethDigit = ones[Math.floor((number % 10) / 1)];

    // combines the individual strings into one and returns...
    return thousandthDigit + hundredthDigit + tenthDigit + onethDigit;
}

console.log(convertToRomanNumeral(40));

/*
    I = 1
    V = 5
    X = 10
    L = 50
    C = 100
    D = 500
    M = 1000

    examples...
    II = 2
    III = 3
    IV = 4
    VI = 6
    IX = 9

    The algorithm or the plan
*/
```

It's very simple ones you realize it.
</p>
<hr>
<hr>

<b>10. Caesar Cipher </b>

__The challenge:__ <p> Given a string and a shift key, encrypt the string through Caesar Cipher.</p>

__Algorithmic Thinking:__ <p> This is a very simple algorithm that requires only a tiny bit of prerequisite knowledge regarding ASCII, and also some discretion when processing possible over 26 keys. Basically we just need to know that all chracters are stored as numbers in computer memory according to the ASCII standard: https://www.w3schools.com/charsets/ref_html_ascii.asp. And that the modulus function is our friend :)</p>


__code Implementation:__ <p>
 
So first of all we need to split the string into characters to be processed individually and convert it to ASCII codes. Then we must check whether the character is either uppercase or lowercase(everything else should be kept the same) then add the key to it accordingly. But it is not a simple matter of simply doing ```char + key``` because for example, by shifting X by 3 we should get A. However, X(88) + 3 equals to 91 which is "\[". Thus what we should be doing is:
 
```js
// js has built in String.charCodeAt() method to help us get the ASCII code 
// https://www.w3schools.com/jsref/jsref_charcodeat.asp
// the reverse is String.fromCharCode()
const char = charCodeAt("X")
const key = 3

const encryptedWrongly = char + key

// uppercase letters start at code 65, ends at 90
const encryptedCorrectly = 65 + (char + key) % 65
 
```

Also taking into account the possibility of >26 keys:

```js
const encrypted = 65 + (char + key) % 65 % 26
```

Additional functionality can be added by allowing the argument to be an array of keys:

```js
const allShifts = [...Array(25).keys()].map( n => n + 1 )
const cipher = (str, keys=allShifts) => {
 ...
 const res = keys.map( key => {
   ...
 })
}
```

Putting it all together:

```js
const allShifts = [...Array(26).keys()]

// return all possible shifts if keys not given
const cipher = (str, keys=allShifts) => {
  const chars = str.split("")
  const res = keys.map( key => {
    return chars.map( c => {
      const char = c.charCodeAt(0)
      if(char > 64 && char < 91)
      {
        return String.fromCharCode(65 + (char + key) % 65 % 26)
      }
      else if(char > 96 && char < 123)
      {
        return String.fromCharCode(97 + (char + key) % 97 % 26)
      }
      else
      {
        return String.fromCharCode(char)
      }
    })
  })
  return res.map( (r, i) => { return { key: keys[i], result: r.join("") } } )
}

cipher("JavaScript", [1, 2, 27])  
/*[{ key: 1, result: 'KbwbTdsjqu' },
   { key: 2, result: 'LcxcUetkrv' },
   { key: 27, result: 'KbwbTdsjqu' }]*/
   
cipher("Something")
/*[{ key: 1, result: 'Tpnfuijoh' },
   { key: 2, result: 'Uqogvjkpi' },
   { key: 3, result: 'Vrphwklqj' },
   { key: 4, result: 'Wsqixlmrk' },
   ......,
   { key: 20, result: 'Migynbcha' },
   { key: 21, result: 'Njhzocdib' },
   { key: 22, result: 'Okiapdejc' },
   { key: 23, result: 'Pljbqefkd' },
   { key: 24, result: 'Qmkcrfgle' },
   { key: 25, result: 'Rnldsghmf' }
]
*/
```

And that's the easiest encryption ever! Happy Coding!
</p>
<hr>
<hr>

<b>11. Name </b>

__The challenge:__ <p> </p>


__Algorithmic Thinking:__ <p> </p>


__code Implementation:__ <p> </p>
<hr>
<hr>
