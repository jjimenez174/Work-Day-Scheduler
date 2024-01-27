$(document).ready(function(){
  //console.log("Ready")
});  
 
//Display Current Date & Time
function updateCurrentHour() {
  $("#currentDay").text(dayjs().format('dddd, MMMM D YYYY h:mm A'));
}
  updateCurrentHour();
  setInterval(updateCurrentHour, 1000);

  var currentTime = dayjs().format('h');

//Current Time Determines the Past, the Present and the Future
$(".time-block").each(function(){
  var timeBlock = parseInt($(this).attr("id").split("-")[1]);
  
  if (timeBlock < currentTime){
    $(this).removeClass("future");
    $(this).removeClass("present");
    $(this).addClass("past");
  }
  else if (timeBlock === currentTime){
    $(this).removeClass("past");
    $(this).removeClass("future");
    $(this).addClass("present");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
  }
});

//Save Date
$(".saveBtn").on("click", function(e) {
  e.preventDefault();
  var toDo = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id").split("-")[1];
  localStorage.setItem(time, toDo);
});

//Get Item From Local Storage
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));
