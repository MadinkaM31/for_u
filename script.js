const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Хех, ты самая лучшая девушка)";
  gif.src =
    "https://media4.giphy.com/media/qFmdpUKAFZ6rMobzzu/giphy.gif?cid=ecf05e472ilga03cdugxeuw5itdvdyci8r8oca8hryx3oy17&ep=v1_gifs_related&rid=giphy.gif&ct=g";
    ;
    yesBtn.outerHTML = '';
    noBtn.outerHTML = '';
    
  }
  
  );

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});