
var el = function (selector) {
  return document.querySelector(selector);
}

var getISOString = function () {
  return (new Date()).toISOString();
}

var getHours = function () {
  return (new Date()).getHours();
}

var getMinutes = function () {
  return (new Date()).getMinutes();
}

var getSeconds = function () {
  return (new Date()).getSeconds();
}

var hour_hand = el('.hour-hand');
var min_hand = el('.min-hand');
var sec_hand = el('.sec-hand');
var clock_time = el('.clock-time');
// console.log(clock_time, hour_hand, min_hand, sec_hand);

var update = function () {
  clock_time.setAttribute('datetime',getISOString());
  hour_hand.style.transform = 'rotate(' + (getHours() * 30) + 'deg)';
  min_hand.style.transform = 'rotate(' + (getMinutes() * 6) + 'deg)';
  sec_hand.style.transform = 'rotate(' + (getSeconds() * 6) + 'deg)';
}

update();
window.setInterval(update, 1000);
// console.log(update(),clock_time, hour_hand, getHours(), min_hand, getMinutes());