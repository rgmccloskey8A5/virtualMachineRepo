document.getElementById("clickBtn").addEventListener("click", function () {
  const messages = [
    "Snoopy does a happy dance!",
    "Charlie Brown sighs...",
    "Linus drops his blanket in surprise!",
    "Lucy charges 5 cents for advice.",
    "Woodstock chirps excitedly!"
  ];
  document.getElementById("message").textContent = messages[Math.floor(Math.random() * messages.length)];
});
