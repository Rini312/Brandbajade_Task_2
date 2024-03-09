document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", () => {
      const t = document.querySelector(".preloader_cont");
      gsap.fromTo(t, { y: 0 }, { y: "-100%", ease: "power2.out" }),
        gsap.fromTo(t, { display: "flex" }, { display: "none" }),
        gsap.registerPlugin(ScrollTrigger);
      var e = !1;
      document.getElementById("hamburger").addEventListener("click", function () {
        (e = !e)
          ? (gsap.fromTo(
              "#top-bar",
              {
                position: "absolute",
                right: 0,
                transform: "translate(0%, 0%) rotate(0deg)",
              },
              {
                transform: "translate(-25%, -5%) rotate(-45deg)",
                ease: "power2.out",
                duration: 0.3,
              }
            ),
            gsap.fromTo(
              "#bottom-bar",
              {
                position: "absolute",
                bottom: 0,
                transform: "translate(0%, 0%) rotate(0deg)",
              },
              {
                right: "100%",
                width: 24,
                transform: "translate(10%, 56%) rotate(45deg)",
                ease: "power2.out",
                duration: 0.3,
              }
            ),
            gsap.fromTo(
              "#mid-bar",
              { position: "absolute", transform: "translate(0%, 0%) rotate(0)" },
              {
                width: 24,
                transform: "translate(35%, -32%) rotate(45deg)",
                ease: "power2.out",
                duration: 0.3,
              }
            ),
            gsap.fromTo(
              ".menu-container",
              { width: 0, padding: 0 },
              { padding: "1rem 0rem 0rem 3rem", width: "100%" }
            ),
            gsap.fromTo(
              ".menu-container ul li",
              { display: "none" },
              { display: "block" }
            ),
            gsap.fromTo(
              ".menu-container ul li",
              { opacity: 0, x: -40 },
              { opacity: 1, stagger: 0.1, duration: 0.2, x: 0 }
            ))
          : (resetHamburger(), closeNav());
      }),
        window.addEventListener("scroll", function () {
          e && ((e = !1), closeNav(), resetHamburger());
        });
  
      const v = document.querySelector("#wp_msg_activator");
  
      var isWpBoxOpen = false;
      v &&
        v.firstElementChild.addEventListener("click", () => {
          isWpBoxOpen = !isWpBoxOpen;
  
          if (isWpBoxOpen) {
            gsap.to("#wp_msg_activator", {
              backgroundColor: "rgba(255, 255, 255, 0.5)",
            });
  
            gsap.to(".wp-help-prompt", {
              visibility: "visible",
              opacity: 1,
              x: "0rem",
              stagger: 0.2,
            });
          } else {
            gsap.to(".wp-help-prompt", {
              visibility: "hidden",
              opacity: 0,
              x: "1rem",
              stagger: 0.2,
            });
  
            gsap.to("#wp_msg_activator", {
              backgroundColor: "rgba(0, 0, 0, 0)",
            });
          }
        });
  
      $(".contact_btn").click(function () {
        var buttonId = $(this).attr("id");
        $("#modal-container").removeAttr("class").addClass(buttonId);
        $("body").addClass("modal-active");
      });
  
      $("#modal-container").click(function () {
        $(this).removeAttr("class");
        $("body").removeClass("modal-active");
      });
  
      $(".modal").click(function (e) {
        e.stopPropagation();
      });
    });
  });