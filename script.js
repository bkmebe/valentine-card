// ===========================
// Elements
// ===========================
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const loveMsg = document.getElementById("loveMsg");
const music = document.getElementById("bgMusic");

// ===========================
// Start music on first interaction (mobile-friendly)
// ===========================
const startMusic = () => {
  music.play().catch(() => {});
  document.removeEventListener("click", startMusic);
  document.removeEventListener("touchstart", startMusic);
};
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);

// ===========================
// YES button behavior
// ===========================
const yesClicked = (e) => {
  e.preventDefault();
  loveMsg.style.display = "block";
  yesBtn.disabled = true;

  // Confetti
  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = 'hsl(${Math.random() * 360}, 100%, 60%)';
    c.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 5000);
  }

  // Fireworks
  for (let i = 0; i < 8; i++) {
    const f = document.createElement("div");
    f.className = "firework";
    f.style.left = Math.random() * 100 + "vw";
    f.style.top = Math.random() * 60 + "vh";
    f.style.background = 'hsl(${Math.random() * 360}, 100%, 60%)';
    f.style.animationDuration = 0.8 + Math.random() * 0.8 + "s";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), 1000);
  }

  // Final playful card
  setTimeout(() => showFinalCard(), 1500);
};

yesBtn.addEventListener("click", yesClicked);
yesBtn.addEventListener("touchstart", yesClicked);

// ===========================
// NO button (evil)
// ===========================
const moveNoButton = () => {
  const card = document.querySelector(".card");
  noBtn.style.left = Math.random() * (card.clientWidth - 80) + "px";
  noBtn.style.top = Math.random() * 60 + "px";
};
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

// ===========================
// Floating hearts
// ===========================
const createHeart = () => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
};
setInterval(createHeart, 500);

// ===========================
// Final playful card with tiny floating hearts
// ===========================
const showFinalCard = () => {
  const finalCard = document.createElement("div");
  finalCard.className = "final-card";
  finalCard.textContent = "I knew you’d say YES… you can’t resist 😏💖";

  document.body.appendChild(finalCard);

  // Animate card in
  setTimeout(() => {
    finalCard.style.transform = "translate(-50%, -50%) scale(1)";
  }, 50);

  // Add tiny floating hearts inside the card
  const heartInterval = setInterval(() => {
    const tinyHeart = document.createElement("div");
    tinyHeart.textContent = "❤️";
    tinyHeart.style.position = "absolute";
    tinyHeart.style.left = Math.random() * 80 + "%";
    tinyHeart.style.bottom = "0px";
    tinyHeart.style.fontSize = Math.random() * 14 + 12 + "px";
    tinyHeart.style.opacity = Math.random() * 0.8 + 0.2;
    tinyHeart.style.transition = "transform 2s linear, opacity 2s linear";

    finalCard.appendChild(tinyHeart);

    // Animate the tiny heart upward
    setTimeout(() => {
      tinyHeart.style.transform = 'translateY(-120px)';
      tinyHeart.style.opacity = "0";
    }, 50);

    // Remove after animation
    setTimeout(() => tinyHeart.remove(), 2100);
  }, 300); // every 0.3s a new heart
  // Remove the final card after 6 seconds
  setTimeout(() => {
    clearInterval(heartInterval); // stop generating hearts
    finalCard.style.transform = "translate(-50%, -50%) scale(0)";
    finalCard.style.opacity = "0";
    setTimeout(() => finalCard.remove(), 500);
  }, 6000);
};