const clock=document.getElementById('time') //this line selects the clock element
// document.querySelector('#clock') //this line selects the clock element using a CSS selector
// document.querySelector('.clock') //this line selects the clock element using a class selector

let date = new Date() //this line creates a new Date object
console.log(date.toLocaleTimeString) //this line logs the date object to the console

setInterval(function(){
    let date = new Date() //this line creates a new Date object
    clock.innerHTML = date.toLocaleTimeString() //this line updates the clock element with the current time
    console.log(date.toLocaleTimeString()) //this line logs the current time to the console
},1000) //this line sets an interval to update the clock every second