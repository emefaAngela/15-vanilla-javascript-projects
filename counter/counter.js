//setting initial count
 let count =0;

//accessing dom elements
const value = document.getElementById('count');
const decrease = document.getElementById('decrease');
const reset = document.getElementById('reset');
const increase = document.getElementById('increase');

 
//adding event listeners and functions to elements
decrease.addEventListener("click", function reduce(){
  count = count - 1;
  //updating count element
value.textContent = count;
});

reset.addEventListener("click", function setup(){
     count = 0;
     value.textContent = count;
     
});

increase.addEventListener("click", function add(){
    count = count + 1;
    value.textContent = count;
});
