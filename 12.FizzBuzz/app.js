// click event 
document.querySelector('.submitBtn').addEventListener('click', fizzbuzz);


// function for checking whole number
function whole_num_check(n) 
{
    const num_test = (n - Math.floor(n) ===0); 
    // 3.40 - 3 = .40 === 0? false

    return num_test; //true or false
}
 

function fizzbuzz() {
    
// getting the number value
const number = parseInt(document.querySelector('input').value);


let textDiv = document.querySelector('.integers');


// loop to print the integers 
for(let i=1; i<= number; i++) {
    
    if(whole_num_check(i/2) && whole_num_check(i/3)) {

        textDiv.textContent += '   Fizz Buzz ';

    }
    else if (whole_num_check(i/2)) {
      
        textDiv.textContent += '   Fizz ';

    }
    else if (whole_num_check(i/3)) {
     
        textDiv.textContent += '   Buzz ';
        
    }
    else {
        textDiv.textContent += i;

    }

}
};
