const fortunes = [
  "올해는 당신에게 가장 환하게 웃는 날이 올 거예요.",
  "오래 기다린 마음 하나가 조용히 이루어질 거예요.",
  "생각보다 더 따뜻한 사람을 만나게 될 거예요.",
  "포기하지 않길 잘했다는 순간이 찾아올 거예요.",
  "당신의 진심이 결국 빛을 보는 해가 될 거예요.",
  "올해는 마음이 편안해지는 방향으로 흘러갈 거예요."
];

const fortuneEl = document.getElementById("fortune");
const retryBtn = document.getElementById("retry");

const pickRandomFortune = () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
};

fortuneEl.textContent = pickRandomFortune();

retryBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});
