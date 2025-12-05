document.getElementById("clickBtn").addEventListener("click", function () {
  const messages = [
    { text: "Snoopy does a happy dance!", image: "dancingSnoopy.png" },
    { text: "Charlie Brown sighs...", image: "charlieBrown.png" },
    { text: "Linus drops his blanket in surprise!", image: "linus.png" },
    { text: "Lucy charges 5 cents for advice.", image: "lucy.png" },
    { text: "Woodstock chirps excitedly!", image: "woodstock.png" }
  ];

  const randomMsg = messages[Math.floor(Math.random() * messages.length)];

  document.getElementById("message").innerHTML = `
    <p>${randomMsg.text}</p>
    <img src="${randomMsg.image}" class="msg-img">
  `;
});


document.getElementById("danceBtn").addEventListener("click", () => {
  const snoopy = document.getElementById("snoopyDance");
  snoopy.style.left = snoopy.style.left === "0px" ? "300px" : "0px";
});