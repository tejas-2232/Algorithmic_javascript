const generate = document.querySelector('.generate');  
generate.addEventListener("click",main);

var num;
function generateRandomNum() {
  var randomNum = Math.ceil(Math.random()*6);
  var randomNumEl = document.querySelector('.randomNumEl');
  randomNumEl.innerHTML = randomNum;
  num=randomNum;
}
function poi(){
  console.log('Number:',num);
}

function main(){
  generateRandomNum();
  poi();
  turnof();
  locker();
  pn_red();
  pn_green(); 
  pn_red_board();
  pn_green_board();
  /*clean();*/
}

let turns=['Red Player Obtained','Green Player Obtained'];
if(num==null){
  turnw= turns[0]; 
  turno = document.querySelector('.turno');
  turno.innerHTML = turnw; 
}
let i=0;
let j=0;
function turnof(){
   if(num!=6){
    
    turnw= turns[i++];
    turno = document.querySelector('.turno');
    turno.innerHTML = turnw;
    if(i>1){
      i=0;
    }
    j=i;
  }
  else{
    turnw = turns[j]; 
    turno = document.querySelector('.turno');
    turno.innerHTML = turnw; 
  }
}

let r = true;
let g = true;
var p_red = -6;
var p_green = 9;

function locker(){
  if(num === 6 && turno.innerHTML ==='Red Player Obtained'){
    r=false;
  }
  else if(num === 6 && turno.innerHTML ==='Green Player Obtained'){
    g=false;
  }
}


function pn_red(){
  if(!r && turno.innerHTML ==='Red Player Obtained'){
      if(p_red + num < 27) {
          p_red += num;
        }
      else if(p_red + num == 27){
          alert('Red Won, Congrats');
          alert('Refresh to start new game!');
          const overw = document.querySelector('.turno');
          overw.innerHTML = '!! Game over !!';
      }
      else{
        p_red = p_red;
      }
  }
  console.log('R:',p_red);
}

function pn_green(){
  if(!g && turno.innerHTML ==='Green Player Obtained'){
      if(p_green + num < 41) {
          p_green = p_green+num;
        }
      else if(p_green + num == 41){
         alert('Green won, Congrats');
         alert('Refresh to start new game!');
         const overw = document.querySelector('.turno');
         overw.innerHTML = '!! Game over !!';
      }
      else{
        p_green = p_green;
      }
  }
  console.log('G:',p_green);
}
/*var k=0;
var c;*/

function pn_red_board(){
  if(!r && turno.innerHTML ==='Red Player Obtained'){
    document.querySelector(`#b${p_red+1}`).style.backgroundColor = 'red';
    /*c[k] = `#b${p_red+1}`;
    k++;*/
  }
}

function pn_green_board(){
  if(!g && turno.innerHTML ==='Green Player Obtained' && p_green <= 27){
    document.querySelector(`#b${p_green}`).style.backgroundColor = 'green';
    /*c[k++] = `#b${p_green}`;*/
  }
  else if(!g && turno.innerHTML ==='Green Player Obtained' && p_green > 27){
    document.querySelector(`#b${p_green-27}`).style.backgroundColor = 'green';
    /*c[k++] = `#b${p_green-27}`;*/
  }
}

/*function clean(){
  console.log(typeof c[1]);
}*/
