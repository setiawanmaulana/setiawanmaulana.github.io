/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*==================== sticky navbar ====================*/
  let header = document.querySelector("header");

  header.classList.toggle(window.scrollY > 0);

  /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};
/*==================== scroll reveal ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "68px",
  duration: 2500,
  delay: 200,
  reset: true, //animation repeat
});

sr.reveal(".home-content , .heading , .contact");
sr.reveal(".home-img ", { origin: "bottom" });
sr.reveal(".about-content , .skills-data , .contact-me", { origin: "left" });
sr.reveal(".about-img , .content", { origin: "right" });
sr.reveal(".services-box , .project-box ", { interval: 100 });
/*================================ send to gogle sheet ====================================*/
function message() {
  var Name = document.getElementsByClassName("nama");
  var email = document.getElementsByClassName("email");
  var msg = document.getElementsByClassName("pesan");
  const success = document.getElementById("success");
  const danger = document.getElementById("danger");
  const btnKirim = document.querySelector(".btn-kirim");
  const btnLoading = document.querySelector(".btn-loading");

  const scriptURL =
    "https://script.google.com/macros/s/AKfycbyGpEl9wPMbFbl4UGh7NXaW0tUCgN5reBYdMr-LqPHM-_UBQRnnYRE_ouvWDWwfQfFT/exec";
  const form = document.forms["contact-form"];

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //when klick submit button
    //tampilkan tombol loading hilangkan tombol kirim
    btnLoading.style.display = "block";
    btnKirim.style.display = "none";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        success.style.display = "block";
        btnKirim.style.display = "block";
        btnLoading.style.display = "none";
        form.reset();
        setTimeout(() => {
          success.style.display = "none";
        }, 5000);
      })
      .catch((error) => {
        console.error("Error!", error.message);
        danger.style.display = "block";
        btnKirim.style.display = "block";
        btnLoading.style.display = "none";
        setTimeout(() => {
          danger.style.display = "none";
        }, 5000);
      });
  });
}
