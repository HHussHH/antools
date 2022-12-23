document.addEventListener("DOMContentLoaded", () => {
  const btns = document.querySelectorAll(".review__btn"),
    back = document.querySelector(".review__back"),
    next = document.querySelector(".review__next");
  let slideIndex = 2;

  console.log(btns);

  back.addEventListener("click", (e) => {
    e.preventDefault();

    slideIndex--;
    slideIndex < 1 ? (slideIndex = 3) : slideIndex;

    console.log(`Будет открыт слайд под номером ${slideIndex}`);
  });

  next.addEventListener("click", (e) => {
    e.preventDefault();
    slideIndex++;
    slideIndex > 3 ? (slideIndex = 1) : slideIndex;

    console.log(`Будет открыт слайд под номером ${slideIndex}`);
  });
});
