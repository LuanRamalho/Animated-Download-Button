const btn = document.querySelector("#download");
const fill = document.querySelector(".fill");
const label = document.querySelector(".label");
const icon = btn.querySelector("i");
let timer;
btn.onclick = () => {
  if (timer) return;
  btn.classList.remove("done");
  fill.style.width = "0%";
  icon.className = "fa-solid fa-spinner fa-spin";
  let progress = 0;
  label.textContent = "0%";
  timer = setInterval(() => {
    progress += 2;
    fill.style.width = progress + "%";
    label.textContent = progress + "%";
    if (progress >= 100) {
      clearInterval(timer);
      timer = null;
      setTimeout(() => {
        btn.classList.add("done");
        icon.className = "fa-solid fa-check";
        label.textContent = "Downloaded!";
      }, 250);
    }
  }, 35);
};