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
        localStorage.setItem("text, time");
    })
    function timeTracker() {
        let timeNow = moment().hour();

        //loops over time-blocks, past / present / future
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour")[1]);
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    
    // Local Storage to save information entered by user
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    // $("#hour9 .description").val(localStorage.getItem("hour9"));
    // $("#hour10 .description").val(localStorage.getItem("hour10"));
    // $("#hour11 .description").val(localStorage.getItem("hour11"));
    // $("#hour12 .description").val(localStorage.getItem("hour12"));
    // $("#hour13 .description").val(localStorage.getItem("hour13"));
    // $("#hour14 .description").val(localStorage.getItem("hour14"));
    // $("#hour15 .description").val(localStorage.getItem("hour15"));
    // $("#hour16 .description").val(localStorage.getItem("hour16"));
    // $("#hour17 .description").val(localStorage.getItem("hour17"));
    
    timeTracker();
})














