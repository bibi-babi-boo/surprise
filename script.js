onload = () => {
  document.body.classList.remove("container");
};

document.addEventListener("DOMContentLoaded", () => {
  const gift = document.getElementById("openGift");
  const giftScreen = document.getElementById("giftScreen");

  gift.addEventListener("click", () => {
    document.body.classList.add("opened");
    giftScreen.classList.add("opening");
  });
});