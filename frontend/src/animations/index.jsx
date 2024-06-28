import gsap from "gsap";

const tl = gsap.timeline();

export const preLoaderAnim = () => {
  tl.to("body", {
    duration: 0.1,
    ease: "power3.inOut",
  })
    .to(".preloader", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "100vh", },
    })
    .to(".text-container", {
      duration: 0,
      opacity: 1,
      ease: "Power3.easeOut",
    })
    .from(".text-container span", {
      duration: 1.5,
      delay: 1,
      y: 300,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    })
    .to(".text-container span", {
      duration: 1,
      y: -300,
      skewY: -20,
      stagger: 0.2,
      ease: "Power3.easeOut",
    })
    .to(".preloader", {
      duration: 0.05,
      css: { overflowY: "hidden", height: "unset" },
    })
    .to("body", {
      duration: 0.1,
      css: { overflowY: "scroll" },
      ease: "power3.inOut",
    })
    .from(".landing__top .sub", {
      duration: 1,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    })
    .to(
      ".preloader",
      {
        duration: 1.5,
        height: "0vh",
        ease: "Power3.easeOut",
      },
      "-=2"
    )
    .to(".preloader", {
      duration: 1,
      css: { display: "none" },
    });
};
