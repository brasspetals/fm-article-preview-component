function toggleShare() {
  const btn = document.querySelector(".card__share-btn");
  btn.classList.toggle("card__share-btn--active");
  
  const menu = document.querySelector(".card__share-menu");
  menu.classList.toggle("hidden");
} 