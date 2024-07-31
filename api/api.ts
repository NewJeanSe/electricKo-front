document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal") as HTMLElement;
  const openModalBtn = document.getElementById(
    "openModalBtn"
  ) as HTMLButtonElement;
  const closeModalBtn = document.getElementById(
    "closeModalBtn"
  ) as HTMLButtonElement;
  const span = document.getElementsByClassName("close")[0] as HTMLElement;

  openModalBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeModalBtn.onclick = function () {
    modal.style.display = "none";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event: MouseEvent) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
