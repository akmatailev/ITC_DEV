
// 1. Мобилдик меню
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuBtn.textContent = nav.classList.contains("open") ? "✕" : "☰";
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuBtn.textContent = "☰";
  });
});

// 2. Караңгы жана жарык режим
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  const isLight = document.body.classList.contains("light");
  themeBtn.textContent = isLight ? "☾" : "☼";
});

// 3. Курстар жөнүндө маалымат
const courses = {
  frontend: {
    title: "Frontend Development",
    description: "HTML аркылуу сайттын түзүлүшүн, CSS аркылуу дизайнын, JavaScript аркылуу интерактивдүү функцияларын түзүүнү үйрөнөсүң. Практикалык долбоорлорду жасайсың."
  },
  ai: {
    title: "Artificial Intelligence",
    description: "ChatGPT жана башка AI куралдарын колдонуу, туура Prompt түзүү, сүрөт жана текст генерациялоо, AI менен долбоорлорду иштеп чыгуу жолдорун үйрөнөсүң."
  },
  python: {
    title: "Python Development",
    description: "Python тилинин негиздерин, өзгөрмөлөрдү, шарттарды, циклдерди, функцияларды жана практикалык программаларды түзүүнү үйрөнөсүң."
  }
};

const modal = document.getElementById("courseModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalClose = document.getElementById("modalClose");

document.querySelectorAll(".course-link").forEach(button => {
  button.addEventListener("click", () => {
    const course = courses[button.dataset.course];

    modalTitle.textContent = course.title;
    modalDescription.textContent = course.description;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
  });
});

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

// 4. Интерактивдүү IT тест
const quizOptions = document.querySelectorAll(".quiz-option");
const quizResult = document.getElementById("quizResult");

quizOptions.forEach(option => {
  option.addEventListener("click", () => {
    quizOptions.forEach(item => {
      item.classList.remove("correct-answer", "wrong-answer");
      item.disabled = true;
    });

    if (option.dataset.answer === "correct") {
      option.classList.add("correct-answer");
      quizResult.textContent = "Туура! 🎉 JavaScript сайтка интерактивдүүлүк кошот.";
      quizResult.style.color = "#4ade80";
    } else {
      option.classList.add("wrong-answer");
      quizOptions.forEach(item => {
        if (item.dataset.answer === "correct") {
          item.classList.add("correct-answer");
        }
      });
      quizResult.textContent = "Туура эмес. Жашыл жоопту карап көрүңүз.";
      quizResult.style.color = "#fb7185";
    }
  });
});

// 5. Секцияларга киргенде пайда болуу анимациясы
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".course-card, .project-card, .about-content, .quiz-box")
  .forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
