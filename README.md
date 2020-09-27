# Algorithmic_javascript

### This is open-source Project
__If you want to contribute then follow theses steps__
>1.fork the repo. <br>2.take the algorithm which you want to add to list<br> 3.Make sure it's not repeated. <br> 4. Be ready with your code in *JAVASCRIPT* <br> 5.The added algorithm should have following sub-sections <br>
    > 5.1 A short Introduction
      5.2 The challenge
      5.3 Algorithmic thinking
      5.4 Code Implementation


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

__The challenge:__ 


__Algorithmic Thinking:__ <p> </p>


<hr>
<hr>
<b>3. Finding the Most Recurring Characterg</b>

<p> In this challenge, we will be dealing with strings, arrays and objects. We will learn to manipulate these data types using various methods that'd bring us to a working solution in the end.</p>

__The challenge:__ Given a string of text, find and return the most recurring character. e.g

```js
maxRecurringChar('aabacada') // will return 'a'
``` 

__Algorithmic Thinking:__ <p> From the challenge statement, we can infer that our function has only one parameter; the string of text.<br> We need to somehow keep track of every character in the string as well as the number of times it exists. <br> This we would describe as character mapping. Once we successfully create such a map, we can easily determine which character has the highest occurence. </p>


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

__The challenge:__ 


__Algorithmic Thinking:__ <p> </p>



<hr>
<hr>

<b>6. Name </b>

__The challenge:__ 


__Algorithmic Thinking:__ <p> </p>


<hr>
<hr>

<b>7. Name </b>

__The challenge:__ 


__Algorithmic Thinking:__ <p> </p>


<hr>
<hr>
