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
  // ------------------------------------------------------------------------
  // intro 섹션
  const introTl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".intro_wrap",
        start: "top top",
        end: "+=500%",
        pin: true,
        scrub: true,
      },
    })
    .to(["header", ".intro_scroll_down"], {
      scrollTrigger: {
        trigger: ".wrapper",
        start: "5.5% top",
      },
      y: 0,
      opacity: 1,
      ease: "power2.out",
    })
    // 배경색 변경
    .to(".intro_description", {
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
      end: "400%",
      pin: true,
      scrub: 0,
    },
  });

  const showcaseImages = document.querySelectorAll(".showcase_img");
  const showcaseTexts = document.querySelectorAll(".showcase_intro_text");
  const showcaseDescription = document.querySelector(
    ".showcase_descirption_text"
  );
  // intro
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
  // text
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
  const darkHeaderTl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".challenge",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0.5,
      },
    })
    .to(["h1", ".language_menu", "header"], {
      filter: "brightness(0) invert(0)",
      background: "none",
      color: "#000",
    });
  const lightHeaderTl = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".talent",
        start: "80% 0%",
        end: "100% 100%",
        scrub: 1,
      },
    })
    .to(["h1", ".language_menu", "header"], {
      filter: "brightness(0) invert(1)",
      background: "",
      color: "#fff",
    });
  //  challenge ~ talent bg
  // white
  const whiteBg = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "30% 0%",
        end: "100% 100%",
        toggleActions: "play none none reverse",
      },
    })
    .to("body", { background: "#fff" })
    .to([".talent", ".challenge"], { color: "#000" });
  // dark
  const darkBg = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "55% 0%",
        end: "100% 100%",
        toggleActions: "play none none reverse",
      },
    })
    .to("body", { background: "#000" });
  // ------------------------------------------------------------------------
  //prove 섹션
  const prove = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".challenge",
        start: "80% 50%",
        end: "120% 50%",
        scrub: 0.5,
      },
    })
    .to([".prove_box1", ".prove_box2"], { x: 0 })
    .to(".prove_list:nth-child(1)", { x: "-18%", scrub: 0 }, "-=0.5")
    .to(".prove_list:nth-child(3)", { x: "19%", scrub: 0 }, "-=0.5");
  // ------------------------------------------------------------------------
  // possibility 섹션
  const possibility = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".possibility",
        start: "0% top",
        end: "+=100%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })
    .to(".possibility_content", {
      xPercent: -100,
      x: function () {
        return window.innerWidth;
      },
    });
  // ------------------------------------------------------------------------
  // feature섹션
  const featureBanner = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".feature",
        start: "0% 90%",
        end: "0% 60%",
        scrub: 0,
      },
    })
    .from(".feature_left", { x: -300 }, "line")
    .from(".feature_right", { x: 300 }, "line");

  const featureText = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".feature",
        start: "0% 40%",
        end: "100% 30%",
        scrub: 0,
      },
    })
    .to(".feature_title", { opacity: 1, duration: 1 });
  // ------------------------------------------------------------------------
  // service 섹션
  let serviceTitle = document.querySelector(".service_head").offsetWidth;
  console.log(serviceTitle);
  let serviceCon = document.querySelector(".service_con");
  const service = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".service_con",
        start: "0% 0%",
        end: "+=200%",
        scrub: 0,
        pin: true,
        invalidateOnRefresh: true,
      },
    })
    .to(".service_con", {
      x: function () {
        return -serviceTitle;
      },
    })
    // item
    .to(".card_item:nth-child(2)", 1, { xPercent: -100, x: -40 * 1 }, "card")
    .to(".card_item:nth-child(3)", 1, { xPercent: -200, x: -40 * 2 }, "card")
    .to(".card_item:nth-child(4)", 1, { xPercent: -300, x: -40 * 3 }, "card")
    .to(".icon_unlock", { opacity: 0 }, "card")
    .to(".icon_lock", { opacity: 1 }, "card+=0.5")
    .to("card_item:not(:last-child)", { opacity: 0 })
    .to(".icon_lock", { opacity: 0 })
    .to(".card_info_icon .title_text", { opacity: 1 }, "+=0.5")
    .to(".card_list", { opacity: 0 }, "+=0.2")
    .to(".service_main_title", { opacity: 1 });

  // service 두번재 영역
  const serviceSecond = gsap.timeline({
    scrollTrigger: {
      trigger: ".service_second_con",
      start: "0% 0%",
      end: "100%100%",
      scrub: 0,
      invalidateOnRefresh: true,
    },
    onEnter: function () {
      gsap.set(".service_second_con .service_main_title", { opacity: 0 });
      gsap.set(".service_third_con .service_main_title", { opacity: 1 });
    },
    onLeaveBack: function () {
      gsap.set(".service_second_con .service_main_title", { opacity: 1 });
      gsap.set(".service_third_con .service_main_title", { opacity: 0 });
    },
  });

  const serviceThird = gsap
    .timeline({
      scrollTrigger: {
        trigger: ".service_third_con",
        start: "0% 0%",
        end: "100%",
        scrub: 0,
        pin: true,
        markers: true,
        invalidateOnRefresh: true,
      },
    })
    .to(".third_card_item:nth-child(2)", { xPercent: -100, x: -40 * 1 }, "card")
    .to(".third_card_item:nth-child(3)", { xPercent: -200, x: -40 * 2 }, "card")
    .to(".third_card_item:nth-child(4)", { xPercent: -300, x: -40 * 3 }, "card")
    .to(".title_bg", { opacity: 1 }, "+=0.5")
    .to(".service_text", { opacity: 1 });

  // ------------------------------------------------------------------------
});
