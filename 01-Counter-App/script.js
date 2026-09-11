const incr = document.getElementById("increment");
const decr = document.getElementById("decrement");
const reset = document.getElementById("reset");
const counter = document.getElementById("count");
let count =0;
incr.addEventListener('click',()=>{
    count =  count + 1;
    counter.textContent = `Count: ${count}`;
});
decr.addEventListener('click',()=>{
    count =  count - 1;
    counter.textContent = `Count: ${count}`;
});
reset.addEventListener('click',()=>{
    count = 0;
    counter.textContent = `Count: ${count}`;
});