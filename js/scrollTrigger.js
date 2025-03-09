"use strict";

document.addEventListener("DOMContentLoaded", () => {
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
      start: "top top",
      end: "+=400%",
      pin: true,
      scrub: true,
    },
  });

  const showcaseImages = document.querySelectorAll(".showcase_img");
  const showcaseTexts = document.querySelectorAll(".showcase_intro_text");
  const showcaseDescription = document.querySelector(
    ".showcase_descirption_text"
  );

  gsap.to(".showcase_intro_text:nth-child(1)", {
    x: "100%", // 오른쪽으로 이동
    opacity: 1,
    scrollTrigger: {
      trigger: ".showcase",
      start: "top top",
      end: "80% top",
      scrub: true, // 스크롤과 함께 자연스럽게 이동
    },
  });

  gsap.to(".showcase_intro_text:nth-child(2)", {
    opacity: 1, // 가운데 고정
    scrollTrigger: {
      trigger: ".showcase",
      start: "top top",
      end: "80% top",
      scrub: true,
    },
  });

  gsap.to(".showcase_intro_text:nth-child(3)", {
    x: "-100%", // 왼쪽으로 이동
    opacity: 1,
    scrollTrigger: {
      trigger: ".showcase",
      markers: true,
      start: "top top",
      end: "80% top",
      scrub: true,
    },
  });
  gsap.to(".showcase_intro_text", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".showcase",
      start: "top top",
      end: "80% top",
      scrub: true,
    },
  });

  showcaseImages.forEach((image, index) => {
    showcaseTl.to(image, { y: "0%", duration: 1 });

    if (index === 2) {
      // 세 번째 이미지 올라올 때 description 텍스트 등장
      showcaseTl.to(showcaseDescription, { opacity: 1, duration: 1 });
    }
  });
});
