# Algorithmic_javascript

__Algorithms practiced using JS__

## List of problems
1. String reversing  
2. Vowel counter 
3. Finding the Most Recurring Character

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

__The challenge:__ Given a string of text, write an algorithm that returns the text received in a reversed format. E.g

```js
reverseString('algorithms') // should return 'smhtirogla'
```

__Algorithmic Thinking:__
<p>
The process here is quite simple and straight forward. Our function will receive only one parameter i.e the string to be reversed.

Next, we would have to manipulate the characters in this string logically in order to return the string in reverse.
</p>

<hr>

<b>2. Vowel counter </b>

__The challenge:__ 


<hr>

<b>3. Finding the Most Recurring Characterg</b>

<p> In this challenge, we will be dealing with strings, arrays and objects. We will learn to manipulate these data types using various methods that'd bring us to a working solution in the end.</p>

__The challenge:__ Given a string of text, find and return the most recurring character. e.g

```js
maxRecurringChar('aabacada') // will return 'a'
``` 

__Algorithmic Thinking:__ <p> From the challenge statement, we can infer that our function has only one parameter; the string of text.<br> We need to somehow keep track of every character in the string as well as the number of times it exists. <br> This we would describe as character mapping. Once we successfully create such a map, we can easily determine which character has the highest occurence. </p>