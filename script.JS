let  months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
function age() {
   let todaydate = new Date();
   let inputDate = new Date(document.getElementById("enterDate").value);
   let dobDate, dobmonth, dobyear;

   // get date, months and years form the calender.---
   let dobDetails = {
       date: inputDate.getDate(),
       month: inputDate.getMonth()+1,
       year: inputDate.getFullYear()
   }
   // getting current date from the new Date()
   let currentYear = todaydate.getFullYear();
   let currentMonth = todaydate.getMonth()+1;
   let currentDate = todaydate.getDate();

   leapYear(currentYear);

  // Checking the the condition if not born !
   if(
       dobDetails.year > currentYear || 
       ( dobDetails.month > currentMonth && dobDetails.year == currentYear) ||
       (dobDetails.date > currentDate && dobDetails.month == currentMonth && dobDetails.year == currentYear)
    ){
       alert("DOB is out of date !");
       return;
    }

    birthYear = currentYear - dobDetails.year;

    if(currentMonth >= dobDetails.month){
      birthmonth = currentMonth - dobDetails.month;
    } else {
        birthYear--;
        birthmonth = 12 + currentMonth - dobDetails.month;

    }
    if(currentDate >= dobDetails.date){
        birthDate = currentDate - dobDetails.date;
    } 
    else {
        birthmonth--;
        let days = months[currentMonth - 2 ];
        birthDate = days + currentDate - dobDetails.date;
        if( birthmonth < 0  ) {
            birthmonth = 11;
            birthYear--;
        }
    }
    console.log(birthYear, birthmonth, birthDate);
    resultDisplay(birthYear, birthmonth, birthDate);
};
function resultDisplay(birthDate, birthmonth, birthYear){
   document.getElementById('years').textContent = birthDate;
   document.getElementById('months').textContent = birthmonth;
   document.getElementById('days').textContent = birthYear;

 }

//  checking for the leap year---
function leapYear(year){
    if(year % 4 ==0 || (year % 100 ==0 && year % 400 ==0 )){
        months[1] = 29;
    } 
    else {
        months[1] = 28;
    }
    console.log(year, months[1]);
}
