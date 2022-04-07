let timerE1 = document.querySelector("#timer");
setInterval(function() {
    let timer = moment()
    timerE1.textContent = timer.format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

























// Local Storage to save information entered by user
$("#hour8 .description").val(localStorage.getItem("#hour8"));