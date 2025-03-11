"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // lang 버튼
  const langList = document.querySelector(".lang_list");
  const menu = document.querySelector(".language_menu");
  langList.addEventListener("click", () => {
    menu.classList.add("active");
  });
  document.addEventListener("click", function (event) {
    if (!langList.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove("active");
    }
  });
  window.addEventListener("scroll", () => {
    menu.classList.remove("active");
  });
  // intro 섹션
  let introTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".intro_wrap",
      start: "top top",
      end: "+=500%",
      pin: true,
      scrub: true,
    },
  });

  introTl.to(["header", ".intro_scroll_down"], {
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
    },
    y: 0,
    opacity: 1,
    ease: "power2.out",
  });

  // 배경색 변경
  introTl.to(".intro_description", {
    scrollTrigger: {
      trigger: ".intro_description_text",
      start: "top top",
    },
    backgroundColor: "rgba(0,0,0,0.6)",
  });

  const introTexts = document.querySelectorAll(".intro_description_text");

  introTexts.forEach((text, index) => {
    introTl.to(text, { opacity: 1, duration: 3 });

    if (index < introTexts.length - 1) {
      introTl.to(text, { opacity: 0, duration: 1 }, "+=1");
    }
  });
  // ------------------------------------------------------------------------
  //   //showcase 섹션
  let showcaseTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".showcase",
      start: "0% 0%",
      end: "+=300%",
      pin: true,
      scrub: 0,
    },
  });

  const showcaseImages = document.querySelectorAll(".showcase_img");
  const showcaseTexts = document.querySelectorAll(".showcase_intro_text");
  const showcaseDescription = document.querySelector(
    ".showcase_descirption_text"
  );

  showcaseTl.to(".showcase_intro", {
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    duration: 1,
  });

  showcaseTl.to(".showcase_intro", {
    opacity: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    duration: 1,
  });
  gsap.to(".showcase_intro_inner", {
    scrollTrigger: {
      trigger: ".showcase",
      start: "0% 0%",
      end: "10% 0%",
      scrub: 0,
    },
    opacity: 1,
    duration: 1,
  });
  gsap.to(".showcase_intro_text:nth-child(1)", {
    x: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".showcase_intro_inner",
      start: "0% 0%",
      end: "100% 0%",
      scrub: 0,
    },
  });

  gsap.to(".showcase_intro_text:nth-child(3)", {
    x: "-100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".showcase_intro_inner",
      start: "0% 0%",
      end: "100% 0%",
      scrub: 0,
    },
  });

  gsap.to(".showcase_intro_inner", {
    scrollTrigger: {
      trigger: ".showcase_intro",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0,
    },
    opacity: 0,
  });
  showcaseImages.forEach((image, index) => {
    showcaseTl.to(image, { y: "0%", duration: 1 });

    if (index === 2) {
      showcaseTl.to(".showcase_intro", {
        opacity: 1,
        duration: 1,
        backgroundColor: "rgba(0,0,0,0.6)",
      });
    }
    if (index === 2) {
      showcaseTl.to(showcaseDescription, {
        opacity: 1,
        duration: 1,
      });
    }
    if (index === 1) {
      showcaseTl.to(".showcase_intro_text", {
        opacity: 0,
      });
    }
  });

  // ------------------------------------------------------------------------
  //challenge ~ talent 헤더
  let invHeaderTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".challenge",
      start: "0% 0%",
      end: "100% 100%",
      scrub: 0.5,
    },
  });
  invHeaderTl.to(["header", ".language_menu"], {
    filter: "brightness(0) invert(0)",
    backgroundColor: "none",
  });

  //prove 섹션
  let proveTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".challenge",
      start: "100% 50%",
      end: "120% 50%",
      scrub: 0.5,
    },
  });

  proveTl.to([".prove_box1", ".prove_box2"], { x: 0 });

  proveTl.to(
    ".prove_list:nth-child(1)",
    {
      x: "-18%",
      scrub: 0,
    },
    "-=0.5"
  );
  proveTl.to(
    ".prove_list:nth-child(3)",
    {
      x: "19%",
      scrub: 0,
    },
    "-=0.5"
  );
});

// possibility 섹션
let possibilityTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".possibility",
    start: "60% 50%",
    end: "100% 100%",
    scrub: 1,
    markers: true,
  },
});
possibilityTl.to(document, {
  background: "var(--color-black)",
  color: "var(--color-white)",
});
