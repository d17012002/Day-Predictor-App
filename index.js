//Select inputs
let input1 = document.getElementById("date");
let input2 = document.getElementById("month");
let input3 = document.getElementById("year");
let submitBtn = document.getElementById("submit");

submitBtn.addEventListener("click", getInfo);

function getInfo(e){
    e.preventDefault();
    //Get input value - Integer
    let date = parseInt(input1.value);
    let month = parseInt(input2.value);
    let year = parseInt(input3.value);

    var monthDays;
    if(year%4!=0){
        monthDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    }else{
        monthDays = [31,29,31,30,31,30,31,31,30,31,30,31];
    }

    let yearCompleted = year - 1;
   
    let leapYear = parseInt(yearCompleted/4);

    let ordinaryYear = yearCompleted - leapYear;
   
    let daysCompleted = 0;
    if (month==1) {
        daysCompleted = date;
    }else{
        for(var i = 0;i<=(month-2);i++){
            daysCompleted += monthDays[i];
        }
        daysCompleted+=date;
    }

    let value = (leapYear*2) + ordinaryYear + daysCompleted;
    let rem = value%7;

    switch (rem) {
        case 0:
            alert("Saturday") 
            break;
        case 1:
            alert("Sunday")
            break;
        case 2:
            alert("Monday")
            break;
        case 3:
            alert("Tuesday")
            break;
        case 4:
            alert("Wednesday")
            break;
        case 5:
            alert("Thursday")
            break;
        case 6:
            alert("Friday")
            break;

        default:
            break;
    }
}
