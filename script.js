new Swiper(".card-wrapper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const copyright = document.querySelector(".copyright");
  const menuToggle = document.querySelector("#click");
  const navLinks = document.querySelectorAll(".navbar-link");
  const revealItems = document.querySelectorAll(
    ".about-section, .service-section, .contact-faq-section, .footer, .card-item, .contact-item, .faq-item"
  );

  if (copyright) {
    copyright.textContent =
      "\u00A9 " +
      new Date().getFullYear() +
      " EQUA | Firma Legal. Todos los derechos reservados.";
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuToggle) menuToggle.checked = false;
    });
  });

  revealItems.forEach((item) => item.classList.add("reveal"));

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -60px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
});

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    const isOpen = item.classList.contains("open");

    document.querySelectorAll(".faq-item").forEach((i) => i.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });
});
