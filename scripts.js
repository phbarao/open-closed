const date = new Date();
const day = date.getDay(); // 0: Sunday - 6: Saturday

window.open(
  // open on weekdays, closed on weekends
  day > 0 && day < 6
    ? (window.location.href = "/pages/open.html")
    : (window.location.href = "/pages/closed.html")
);
