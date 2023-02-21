const dest = new Date("October 28,2022 21:12:00").getTime(); // change this

const countDown = setInterval(function () {
  const now = new Date().getTime();

  const diff = (dest - now) / 1000; // in seconds

  const days = Math.floor(diff / (60 * 60 * 24));
  const hours = Math.floor((diff % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((diff % (60 * 60)) / 60);
  const seconds = Math.floor(diff % 60);

  let dd = days < 10 ? "0" + days : days;
  let hh = hours < 10 ? "0" + hours : hours;
  let mm = minutes < 10 ? "0" + minutes : minutes;
  let ss = seconds < 10 ? "0" + seconds : seconds;

  if (diff < 0) {
    clearInterval(countDown);
    dd = "4";
    hh = "5";
    mm = "6";
    ss = "10";
    document.getElementById(
      "title"
    ).innerHTML = `<h2 id="title-dead">Offer Expired</h2>`;
  }

  document.getElementById("dd").innerHTML = dd;
  document.getElementById("hh").innerHTML = hh;
  document.getElementById("mm").innerHTML = mm;
  document.getElementById("ss").innerHTML = ss;
}, 1000);
