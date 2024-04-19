// btn1 check
document.getElementById("btn1").addEventListener("click", btn1);
function btn1() {
  alert(`The answer is "Bullet".`);
}

// btn2 check
document.getElementById("btn2").addEventListener("click", btn2);
function btn2() {
  alert(`The answer is "Leg".`);
}

// btn3 check
document.getElementById("btn3").addEventListener("click", btn3);
function btn3() {
  alert(`The answer is "Corners".`);
}

// btn4 check
document.getElementById("btn4").addEventListener("click", btn4);
function btn4() {
  alert(`The answer is "Drawing Board".`);
}

// btn5 check
document.getElementById("btn5").addEventListener("click", btn5);
function btn5() {
  alert(`The answer is "Rocket Science".`);
}

// mark0 alert
document.getElementById("mark0").addEventListener("click", mark0);
function mark0() {
  window.location.replace(
    "https://www.ef.com/wwen/english-resources/english-idioms/"
  );
}

// mark1 alert
document.getElementById("mark1").addEventListener("click", mark1);
function mark1() {
  document.getElementById(
    "result"
  ).innerHTML = `Nice try, better luck next time! <br>If you want to see more about english idioms <a href="https://www.ef.com/wwen/english-resources/english-idioms/">Click here</a>`;
}

// mark2 alert
document.getElementById("mark2").addEventListener("click", mark1);

// mark 3
document.getElementById("mark3").addEventListener("click", mark3);
function mark3() {
  document.getElementById(
    "result"
  ).innerHTML = `Not bad! <br>If you want to see more about english idioms <a href="https://www.ef.com/wwen/english-resources/english-idioms/">Click here</a>`;
}

// mark 4
document.getElementById("mark4").addEventListener("click", mark4);
function mark4() {
  document.getElementById(
    "result"
  ).innerHTML = `Almost at 100%! You'll get there eventually <br>If you want to see more about english idioms <a href="https://www.ef.com/wwen/english-resources/english-idioms/">Click here</a>`;
}

// mark 5
document.getElementById("mark5").addEventListener("click", mark5);
function mark5() {
  document.getElementById(
    "result"
  ).innerHTML = `Did you really get 100%? <br>If you want to see more about english idioms <a href="https://www.ef.com/wwen/english-resources/english-idioms/">Click here</a>`;
}
