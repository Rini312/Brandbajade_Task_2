const splitWordAndAppend = (t, r) => {
    t.split(" ").forEach((t) => {
      const e = document.createElement("span");
      e.innerText = t + " ";
      r.appendChild(e);
    });
  },
  createTimeline = ({
    trigger: t,
    endTrigger: e,
    start: r,
    end: o,
    pin: a,
    markers: n,
    scrub: i,
  }) =>
    gsap.timeline({
      scrollTrigger: {
        trigger: t,
        endTrigger: e,
        pin: !!a,
        start: r,
        end: o,
        markers: !!n && { startColor: "white", endColor: "white", fontSize: "16px" },
        scrub: i,
      },
    });
let headerTl = createTimeline({
  trigger: "#home_abt_cont",
  endTrigger: "#home_abt_cont",
  start: "top bottom",
  end: "bottom center",
  scrub: 1,
});
const animateHomeAbt = (t) => {
    t.fromTo(
      "#hero_abt span",
      { opacity: 0.1 },
      { opacity: 1, ease: "power2.out", stagger: 0.3, transition: 0.5 }
    );
  },
  miniTimeline = (t) =>
    createTimeline({
      trigger: "#hero_container",
      endTrigger: ".hero_slider",
      start: "top top",
      end: t,
      pin: !0,
      scrub: 1,
    }),
  closeNav = () => {
    gsap.fromTo(
      ".menu-container",
      { width: "100%", padding: "1rem 0rem 0rem 3rem" },
      { width: 0, delay: 0.7, padding: 0, paddingLeft: 0 }
    );
    gsap.fromTo(".menu-container ul li", { display: "block" }, { display: "none", delay: 0.5 });
    gsap.fromTo(
      ".menu-container ul li",
      { opacity: 1, x: 0 },
      { opacity: 0, stagger: 0.1, duration: 0.2, x: -40 }
    );
  },
  resetHamburger = () => {
    gsap.fromTo(
      "#top-bar",
      { transform: "translateX(-25%) rotate(-45deg)" },
      { transform: "translateX(0px) rotate(0deg)", ease: "power2.out", duration: 0.5 }
    );
    gsap.fromTo(
      "#bottom-bar",
      { right: "100%", width: 24, transform: "translate(10%, 55%) rotate(45deg)" },
      {
        position: "absolute",
        bottom: 0,
        width: 35,
        transform: "translate(0%, 0%) rotate(0deg)",
        ease: "power2.out",
        duration: 0.5,
      }
    );
    gsap.fromTo(
      "#mid-bar",
      { width: 24, transform: "translate(35%, -28%) rotate(45deg)" },
      {
        position: "absolute",
        width: 27,
        transform: "translate(0%, 0%) rotate(0)",
        ease: "power2.out",
        duration: 0.3,
      }
    );
  };

const toggleCallModal = () => {
  document.getElementById("call_modal_backdrop").style.display = "flex";
};

function closeCallModal() {
    var modal = document.getElementById('call_modal_backdrop');
    modal.classList.remove('show');
console.log("remove");
}
