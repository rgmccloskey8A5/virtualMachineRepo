document.getElementById("clickBtn").addEventListener("click", function () {
  const messages = [
    "Snoopy does a happy dance!",
    "<img src='dancingSnoopy.png' class='msg-img'>",
    "Charlie Brown sighs...",
    "<img src='charlieBrown.png' class='msg-img'>",
    "Linus drops his blanket in surprise!",
    "<img src='linus.png' class='msg-img'>",
    "Lucy charges 5 cents for advice.",
    "<img src='lucy.png' class='msg-img'>",
    "Woodstock chirps excitedly!",
    "<img src='woodstock.png' class='msg-img'>"
  ];

  document.getElementById("message").innerHTML =
    messages[Math.floor(Math.random() * messages.length)];
});


document.getElementById("danceBtn").addEventListener("click", () => {
  const snoopy = document.getElementById("snoopyDance");
  snoopy.style.left = snoopy.style.left === "0px" ? "300px" : "0px";
});