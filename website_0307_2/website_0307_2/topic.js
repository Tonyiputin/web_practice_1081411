var topic = [
    "課程介紹",
    "環境安裝",
    "國定假日",
    "lab2 lab3",
    "lab4"
];


var startDate= new Date(); 
function setMonthAndDay(startMonth, startDay){
    //一次設定好月份與日期
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,14);
