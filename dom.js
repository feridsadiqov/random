const arr = [
  "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg&quot",
  "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg&quot",
  "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg&quot",
];

function randommm() {
  let img = document.createElement("img");
  let randomNum = Math.floor(Math.random() * arr.length);
  img.setAttribute("src", arr[randomNum]);
  return document.querySelector(".random").append(img);
}
window.onload = randommm();
