function updateCLock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    let timePeriod = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");
    const timePeriodElement = document.getElementById("period");

    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
    timePeriodElement.textContent = timePeriod;
}
setInterval(updateCLock, 1000);















park south korea
airport parking 100
water 350
moterway toll olaza 600
dinner 3500(tip 200)
fuel 10000
tea 400


day 2
breakfast 3250(250) tip
tea + washroom 1000
toll plaza 70
lunch 9250(100) tip
fuel 12000
drinks 1300



day 3
driver 7000
tea and drinks 850
arzoq 580
cofee 850

day 4
nill

day 5
hotel tip basecamp 3000
tea and drinks 1400
porter 6000
lunch 10050
fuel 8920
tea and cofee 900
mulberry hotel 23000
dinner 7300
water 400
irfan  guide  40000