
var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var times = [
    "08:00AM",
    "09:00AM",
    "10:00AM",
    "11:00AM",
    "12:00PM",
    "01:00PM",
    "02:00PM",
    "03:00PM",
    "04:00PM",
    "05:00PM"
];



function currentDay() {
    document.getElementById("currentDay").innerHTML = days[d.getDay()] + ", " + " " + (d.getMonth() + 1) + "." + d.getDate() + "." + d.getFullYear() + " ";
}


$("button").click(function(){
    alert("The paragraph was clicked.");
    var myValue = $(this).attr('id');
    console.log(myValue);
  });



// function displayTime() {
//     for (i = 0; i < times.length; i++) {
//         var timeDisplay = document.createElement('input');
//         timeDisplay.type="input-group-text";
//         timeDisplay.value= times[i];



//         document.getElementById('calendarTimes').appendChild(v);
//     }
// }
// displayTime ();



function saveItem() {

    localStorage.setItem(value);

}

function currentTimeDisplay() {
    console.log(d.getHours());
    if (d.getHours() > $hour1) {
        //change the previos backgrounds to light red
    }
}

function displayItem() {
    localStorage.getItem(this);
}

function showTime() {
    //if condition for if time has passed, call a function to change the color of an item# in css
}

currentDay();
currentTimeDisplay();
