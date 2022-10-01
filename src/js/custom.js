// gsap.config({ trialWarn: false });
// console.clear();
// gsap.registerPlugin(ScrollTrigger, SplitText, ScrollSmoother);
// let smoother = ScrollSmoother.create({
//   smooth: 2
// });

// let split = new SplitText("h2", { type: "lines" });
// let masks;
// function makeItHappen() {
//   masks = [];
//   split.lines.forEach((target) => {
//     let mask = document.createElement("span");
//     mask.className = "mask";
//     target.append(mask);
//     masks.push(mask);
//     gsap.to(mask, {
//       scaleX: 0,
//       transformOrigin: "right center",
//       ease: "none",
//       scrollTrigger: {
//         trigger: target,
//         markers: {
//           startColor: "white",
//           endColor: "#42a6e0",
//           fontSize: "12px",
//           indent: 10
//         },
//         scrub: true,
//         start: "top center",
//         end: "bottom center"
//       }
//     });
//   });
// }

// window.addEventListener("resize", newTriggers);

// function newTriggers() {
//   ScrollTrigger.getAll().forEach((trigger, i) => {
//     trigger.kill();
//     masks[i].remove();
//   });
//   split.split();
//   makeItHappen();
// }

// makeItHappen();
gsap.registerPlugin(scrollTrigger);
gsap.to(".text h2" ,{
  backgroundPositionX: "0%",
  stragger: 1,
  scrollTrigger: {
    trigger:".text h2" ,
    scrub: 1,
    start:"top center", 
    end: "bottom top",
  },
  });