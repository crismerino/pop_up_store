var calendar = {
  months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], 
  
  today: new Date(),
  setDay: function(day) {
    document.getElementById("today").id = "";
    document.getElementById("days").children[day-1].id = "today";
  }, //Changes id today on css to another li element.
  setMonth: function(month) {
    // Change month name
    document.getElementById("month").childNodes[0].data = this.months[month];
  },
  setYear: function(year) {
    document.getElementById("year").childNodes[0].data = year;
  }
}

console.log(calendar.today);
//logs to console the new "Date()" object

calendar.setDay(calendar.today.getDate());
//this passes to setDay, the day (number) using getDate.
calendar.setMonth(calendar.today.getMonth());
//this passes to setMonth the month (number between 0-11) to setMonth

calendar.setYear(calendar.today.getFullYear());
// this passes to setYear the 4ditits of a year using getFullYear.

//-------------------------------------------------------------------------------------------//

var daysList = document.getElementById('days').children;
for (i=0; i<daysList.length; i++)
{
  daysList[i].addEventListener('click', showInfo);

};

var eventCard = {
  20141121: {img:"http://lorempixel.com/400/350/cats/1", text: "Gatos, gatos everywhere! GATOOOOOOS!!"}
};
//console.log(eventCard['20141121']);

function showInfo (evt)
{
  var clickedDay = calendar.today.getFullYear().toString() + (calendar.today.getMonth() + 1).toString() +evt.target.textContent.toString(); // Fucking paranoia

  if (eventCard[clickedDay]) {
    var newImg = document.getElementById('fotoevento').children[0].src = eventCard[clickedDay].img;

    document.getElementById('bottomcalendario').textContent = eventCard[clickedDay].text;
  }
}