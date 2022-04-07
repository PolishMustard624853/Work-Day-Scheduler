let timerE1 = document.querySelector("#timer");
setInterval(function() {
    let timer = moment()
    timerE1.textContent = timer.format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        let text = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem("time, text");
    })
})



// Local Storage to save information entered by user
$("#hour8 .description").val(localStorage.getItem("hour8"));


















