const openSideBar = document.querySelector(".btn-open-sidebar");
const sideBar = document.querySelector(".sidebar");

openSideBar.addEventListener("click", () => {
    openSideBar.classList.toggle("open");
    sideBar.classList.toggle("open");
});