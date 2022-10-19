$(document).ready(function () {
    // listen for save button clicks
    $('.saveBtn').on('click', function (e) {
        // get nearby values
        var time = $(this).parent().attr("id");
        var value =$(this).siblings(".description").val();
        // save in localStorage
        localStorage.setItem(time, value)
        // Show notification that item was saved to localStorage by adding class 'show'
        $(".notification").addClass("show")
        // Timeout to remove 'show' class after 5 seconds
        setTimeout(function () {
              $('.notification').removeClass('show');
        }, 5000);
    });

    function hourUpdater() {
        var currentHour = moment().hours();
        $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
        if (blockHour < currentHour){
            $(this).addClass("past");
        } else if(blockHour === currentHour){
            $(this).removeClass("past");
            $(this).addClass("present");
        } else{
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
        });
        // loop over time blocks
        // loop over time blocks ---> https://api.jquery.com/each/
        // inside this loop, // check if we've moved past this time. If we have, make the row grey. If it's future, make it green. if it's past, make it red. Using the past, present, and future classes in css file

        // check if we've moved past this time
    }

    hourUpdater();

    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);

    //match local storage to what is in time
    // load any saved data from localStorage
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-1 .description').val(localStorage.getItem('hour-1'));
    $('#hour-2 .description').val(localStorage.getItem('hour-2'));
    $('#hour-3 .description').val(localStorage.getItem('hour-3'));
    $('#hour-4 .description').val(localStorage.getItem('hour-4'));
    $('#hour-5 .description').val(localStorage.getItem('hour-5'));







    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"))
});