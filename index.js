function openPopup(id) {
    document.querySelector(".overlay").style.display = "block";
    document.getElementById("popup" + id).style.display = "block";
  }
  
  function closePopup() {
    document.querySelectorAll(".popup").forEach((p) => (p.style.display = "none"));
    document.querySelector(".overlay").style.display = "none";
  }
  function createHeartBubble() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s"; // 4-7s
  heart.style.width = heart.style.height = 10 + Math.random() * 20 + "px"; // random size
  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

// Generate hearts continuously
setInterval(createHeartBubble, 400);

function openImagePopup(src) {
  const popupImage = document.getElementById("popup-image");
  popupImage.src = src;
  document.querySelector(".image-popup-overlay").style.display = "flex";
}

function closeImagePopup() {
  document.querySelector(".image-popup-overlay").style.display = "none";
}
