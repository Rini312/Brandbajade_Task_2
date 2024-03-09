document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("load", () => {
      gsap.registerPlugin(ScrollTrigger);
  
      if (window.location.href.split("#")[1]) {
        const elem = "#" + window.location.href.split("#")[1];
  
        if (elem == "#contact") {
          if (window.innerWidth > 1000) {
            var height = -window.innerHeight;
          } else {
            var height = -window.innerHeight / 2;
          }
          console.log(height);
          gsap.to(window, { duration: 0.2, scrollTo: { y: elem, offsetY: height } });
        } else {
          gsap.to(window, { duration: 0.2, scrollTo: elem });
        }
      }
  
      document.getElementById("div").addEventListener("click", () => {
        window.location.href = "/";
      });
  
      //* Hero vector animation
  
      ScrollTrigger.matchMedia({
        "(min-width: 1920px)": function () {
          // add animations and labels to the timeline
          let container = miniTimeline("bottom+=100 bottom");
          let bigB = miniTimeline("bottom bottom");
          let c = miniTimeline("bottom bottom");
          let smallB = miniTimeline("bottom bottom");
          let brand_text = miniTimeline("bottom bottom");
          const offsetTop = $("#small_b").offset().top + $("#small_b").height() + 32;
  
          bigB
            .fromTo(
              "#big_b",
              {
                top: "50%",
                left: "0rem",
                height: "310px",
                transform: "translate(0%, -50%) rotate(25deg)",
              },
              {
                top: "50%",
                left: "50%",
                height: "370px",
                transform: "translate(-50%, -50%) rotate(25deg)",
                ease: "power2.out",
                duration: 2,
              }
            )
            .to("#big_b", {
              top: "50%",
              left: "50%",
              transform: "translate(-61%, -50%) rotate(0deg)",
              ease: "power2.out",
              duration: 3,
            });
  
          c.fromTo(
            "#c",
            {
              top: "53%",
              right: "5rem",
  
              height: "106px",
  
              transform: "translate(0%, -50%) rotate(25deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-28%, -28%) rotate(25deg)",
  
              ease: "power2.out",
  
              duration: 2,
            }
          ).to("#c", {
            top: "50%",
  
            left: "50%",
  
            transform: "translate(-58%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          smallB
            .fromTo(
              "#small_b",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
            .to("#small_b", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          brand_text
            .fromTo(
              ".brand_text",
              {
                opacity: 0,
              },
              {
                opacity: 1,
              }
            )
            .fromTo(
              ".brand_text",
              {
                top: offsetTop,
              },
              {
                top: "5.5rem",
                fontSize: "20px",
                opacity: 0,
                delay: 0.1,
              }
            );
  
          container
            .fromTo(
              "#div",
  
              {
                scale: 1,
              },
  
              {
                height: "6rem",
  
                scale: 0.2,
  
                delay: 3,
  
                duration: 1.5,
  
                top: "0rem",
              }
            )
            .fromTo(
              "#hamburger",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
            .fromTo(
              ".header_cta",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            );
        },
  
        "(min-width: 1000px) and (max-width: 1919px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=100 bottom");
  
          let bigB = miniTimeline("bottom bottom");
  
          let c = miniTimeline("bottom bottom");
  
          let smallB = miniTimeline("bottom bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          const offsetTop = $("#small_b").offset().top + $("#small_b").height() - 32;
  
          bigB
  
            .fromTo(
              "#big_b",
  
              {
                top: "50%",
  
                left: "0rem",
  
                height: "310px",
  
                transform: "translate(0%, -50%) rotate(25deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "370px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#big_b", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#c",
  
            {
              top: "53%",
  
              right: "5rem",
  
              height: "106px",
  
              transform: "translate(0%, -50%) rotate(25deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-28%, -28%) rotate(25deg)",
  
              ease: "power2.out",
  
              duration: 2,
            }
          ).to("#c", {
            top: "50%",
  
            left: "50%",
  
            transform: "translate(-58%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          smallB
  
            .fromTo(
              "#small_b",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#small_b", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          brand_text
  
            .fromTo(
              ".brand_text",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(
              ".brand_text",
  
              {
                top: offsetTop,
              },
  
              {
                top: "5.5rem",
  
                fontSize: "20px",
  
                opacity: 0,
  
                delay: 0.1,
              }
            );
  
          container
  
            .fromTo(
              "#div",
  
              {
                scale: 1,
              },
  
              {
                height: "6rem",
  
                scale: 0.2,
  
                delay: 3,
  
                duration: 1.5,
  
                top: "0rem",
              }
            )
  
            .fromTo(
              "#hamburger",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(
              ".header_cta",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(".brand_name", { opacity: 0 }, { opacity: 1 });
        },
  
        "(max-width: 1000px) and (min-width: 600px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=100 bottom");
  
          let bigB = miniTimeline("bottom bottom");
  
          let c = miniTimeline("bottom bottom");
  
          let smallB = miniTimeline("bottom bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          const offsetTop = $("#small_b").offset().top + $("#small_b").height() + 32;
  
          bigB
  
            .fromTo(
              "#big_b",
  
              {
                top: "50%",
  
                left: "0rem",
  
                height: "310px",
  
                transform: "translate(0%, -50%) rotate(25deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "370px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#big_b", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#c",
  
            {
              top: "53%",
  
              right: "5rem",
  
              height: "106px",
  
              transform: "translate(0%, -50%) rotate(25deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-28%, -28%) rotate(25deg)",
  
              ease: "power2.out",
  
              duration: 2,
            }
          ).to("#c", {
            top: "50%",
  
            left: "50%",
  
            transform: "translate(-58%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          smallB
  
            .fromTo(
              "#small_b",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
              },
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "269px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 2,
              }
            )
  
            .to("#small_b", {
              top: "50%",
  
              left: "50%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          brand_text
  
            .fromTo(
              ".brand_text",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(
              ".brand_text",
  
              {
                top: offsetTop,
              },
  
              {
                top: "5.5rem",
  
                opacity: 0,
  
                fontSize: "20px",
              }
            );
  
          container
  
            .fromTo(
              "#div",
  
              {
                scale: 1,
              },
  
              {
                height: "6rem",
  
                scale: 0.2,
  
                delay: 1,
  
                top: "0.75rem",
              }
            )
  
            .fromTo(
              "#hamburger",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(
              ".header_cta",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            );
        },
  
        "(min-width: 401px) and (max-width: 525px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=400 bottom");
  
          let bigB = miniTimeline("bottom+=200 bottom");
  
          let c = miniTimeline("bottom+=200 bottom");
  
          let smallB = miniTimeline("bottom+=200 bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          bigB
  
            .fromTo(
              "#big_b",
  
              {
                top: "1rem",
  
                left: "45%",
  
                height: "200px",
  
                transform: "translate(-50%, 0%) rotate(25deg)",
              },
  
              {
                top: "50%",
  
                left: "45%",
  
                height: "260px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 3,
              }
            )
  
            .to("#big_b", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#c",
  
            {
              top: "97%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-50%, -150%) rotate(25deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-55%, -30%) rotate(25deg)",
  
              ease: "power2.out",
  
              duration: 3,
            }
          ).to("#c", {
            // top: "50%",
  
            left: "50%",
  
            transform: "translate(-54%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          smallB
  
            .fromTo(
              "#small_b",
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "189px",
  
                transform: "translate(-50%, -46%) rotate(25deg)",
  
                force3D: false,
              },
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "198px",
  
                transform: "translate(-55%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 3,
  
                force3D: false,
              }
            )
  
            .to("#small_b", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
  
              force3D: false,
            });
  
          container
  
            .fromTo(
              "#div",
  
              {
                scale: 1,
  
                height: "100%",
              },
  
              {
                height: "5rem",
  
                scale: 0.2,
  
                delay: 1,
  
                top: "0rem",
              }
            )
  
            .fromTo(
              "#hamburger",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(
              ".header_cta",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            );
        },
  
        "(max-width: 400px) and (min-width:390px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=400 bottom");
  
          let bigB = miniTimeline("bottom+=100 bottom");
  
          let c = miniTimeline("bottom+=100 bottom");
  
          let smallB = miniTimeline("bottom+=100 bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          bigB
  
            .fromTo(
              "#big_b",
  
              {
                top: "1rem",
  
                left: "45%",
  
                height: "200px",
  
                transform: "translate(-50%, 0%) rotate(25deg)",
              },
  
              {
                top: "50%",
  
                left: "45%",
  
                height: "260px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 3,
              }
            )
  
            .to("#big_b", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#c",
  
            {
              top: "98%",
  
              left: "49%",
  
              height: "86px",
  
              transform: "translate(-50%, -150%) rotate(25deg)",
            },
  
            {
              top: "50%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-55%, -30%) rotate(25deg)",
  
              ease: "power2.out",
  
              duration: 3,
            }
          ).to("#c", {
            // top: "50%",
  
            left: "50%",
  
            transform: "translate(-54%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          smallB
  
            .fromTo(
              "#small_b",
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "189px",
  
                transform: "translate(-50%, -46%) rotate(25deg)",
  
                force3D: false,
              },
  
              {
                top: "50%",
  
                left: "46%",
  
                height: "198px",
  
                transform: "translate(-55%, -52%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 3,
  
                force3D: false,
              }
            )
  
            .to("#small_b", {
              top: "50%",
  
              left: "51%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
  
              force3D: false,
            });
  
          container
  
            .fromTo(
              "#div",
  
              {
                scale: 1,
  
                height: "100%",
              },
  
              {
                height: "5rem",
  
                scale: 0.2,
  
                delay: 1,
  
                duration: 2,
  
                top: "0rem",
              }
            )
  
            .fromTo(
              "#hamburger",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(
              ".header_cta",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            );
        },
  
        "(max-width: 389px)": function () {
          // add animations and labels to the timeline
  
          let container = miniTimeline("bottom+=500 bottom");
  
          let bigB = miniTimeline("bottom+=100 bottom");
  
          let c = miniTimeline("bottom+=100 bottom");
  
          let smallB = miniTimeline("bottom+=100 bottom");
  
          let brand_text = miniTimeline("bottom bottom");
  
          bigB
  
            .fromTo(
              "#big_b",
  
              {
                top: "1rem",
  
                left: "47%",
  
                height: "150px",
  
                transform: "translate(-50%, 0%) rotate(25deg)",
              },
  
              {
                top: "43%",
  
                left: "45%",
  
                height: "260px",
  
                transform: "translate(-50%, -50%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 3,
              }
            )
  
            .to("#big_b", {
              top: "43%",
  
              left: "51%",
  
              transform: "translate(-61%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
            });
  
          c.fromTo(
            "#c",
  
            {
              top: "98%",
  
              left: "48%",
  
              height: "86px",
  
              transform: "translate(-50%, -150%) rotate(25deg)",
            },
  
            {
              top: "43%",
  
              left: "50%",
  
              height: "86px",
  
              transform: "translate(-55%, -30%) rotate(25deg)",
  
              ease: "power2.out",
  
              duration: 3,
            }
          ).to("#c", {
            // top: "50%",
  
            left: "50%",
  
            transform: "translate(-54%, -38%) rotate(0deg)",
  
            ease: "power2.out",
  
            duration: 3,
          });
  
          smallB
  
            .fromTo(
              "#small_b",
  
              {
                top: "50%",
  
                left: "50%",
  
                height: "150px",
  
                transform: "translate(-40%, -46%) rotate(25deg)",
  
                force3D: false,
              },
  
              {
                top: "40%",
  
                left: "40%",
  
                height: "198px",
  
                transform: "translate(-55%, -52%) rotate(25deg)",
  
                ease: "power2.out",
  
                duration: 3,
  
                force3D: false,
              }
            )
  
            .to("#small_b", {
              top: "43%",
  
              left: "51%",
  
              transform: "translate(-65%, -50%) rotate(0deg)",
  
              ease: "power2.out",
  
              duration: 3,
  
              force3D: false,
            });
  
          container
  
            .fromTo(
              "#div",
  
              {
                scale: 1,
  
                height: "100%",
              },
  
              {
                height: "5rem",
  
                scale: 0.2,
  
                delay: 1,
  
                duration: 2,
  
                top: "0rem",
              }
            )
  
            .fromTo(
              "#hamburger",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            )
  
            .fromTo(
              ".header_cta",
  
              {
                opacity: 0,
              },
  
              {
                opacity: 1,
              }
            );
        },
      });
  
      //* split about paragraph
  
      const homeAbt = document.getElementById("hero_abt");
  
      splitWordAndAppend(
        "BRANDBAJADE.COM is a creative & communication agency established in 2016 in New Delhi, India to create the " +
          "most compelling designs for brands - faster and thriving.  No; not a Pink Floyd of the rock band, but yes we " +
          "are here to rock the BRAND. We drum the brand of our partners, which makes a powerful and productive relationship " +
          "with their customers in a complex, cluttered and hyper-connected world.",
  
        homeAbt
      );
  
      //* Home about animation
  
      ScrollTrigger.matchMedia({
        "(min-width: 1920px)": function () {
          let uspTl = createTimeline({
            trigger: "#home_abt_cont",
            start: "top bottom",
            end: "center bottom",
            scrub: 2,
          });
  
          animateHomeAbt(uspTl);
        },
  
        "(min-width: 1401px) and (max-width: 1919px)": function () {
          let uspTl = createTimeline({
            trigger: "#home_abt_cont",
  
            start: "top-=300 bottom",
  
            end: "top-=100 bottom",
  
            scrub: 2,
          });
  
          animateHomeAbt(uspTl);
        },
  
        "(min-width: 1000px) and (max-width: 1400px)": function () {
          let uspTl = createTimeline({
            trigger: "#hero_abt span",
  
            start: "top bottom",
  
            end: "top+=100 bottom",
  
            scrub: 2,
          });
  
          animateHomeAbt(uspTl);
        },
  
        "(max-width: 1000px) and (min-width: 600px)": function () {
          let uspTl = createTimeline({
            trigger: "#hero_abt span",
  
            start: "top-=500 bottom",
  
            end: "top bottom",
  
            scrub: 2,
          });
  
          animateHomeAbt(uspTl);
        },
  
        "(max-width: 600px)": function () {
          let uspTl = createTimeline({
            trigger: "#hero_abt span",
  
            start: "top bottom",
  
            end: "bottom bottom",
  
            scrub: 2,
          });
  
          animateHomeAbt(uspTl);
        },
      });
  
      let whyUsTl = createTimeline({
        trigger: ".why_us_cont",
        endTrigger: ".why_us_cont",
        start: `top top`,
        end: `bottom+=200 bottom`,
        scrub: 1,
        pin: true,
      });
  
      whyUsTl
        .fromTo(
          ".why_us_cont h2",
          {
            opacity: 0,
            y: 30,
          },
          { opacity: 1, y: 0, stagger: 1, ease: "power2.out" }
        )
        .fromTo(
          ".why_us_cont svg",
          {
            strokeDasharray: 300,
          },
          {
            strokeDasharray: 0,
            ease: "power2.out",
          }
        )
        .fromTo(
          ".why_us_cont .why_us_card",
          {
            opacity: 0,
            y: 30,
          },
          { opacity: 1, y: 0, stagger: 1, ease: "power2.out" }
        );
  
      $(".testimonial_cont").owlCarousel({
        nav: false,
        loop: true,
        margin: 60,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        slideTransition: "linear",
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1440: {
            items: 3,
          },
        },
      });
  
      $("#client_carousel").owlCarousel({
        nav: false,
        loop: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
          1000: {
            items: 4,
          },
          1919: {
            items: 5,
          },
        },
      });
  
      $(".srvc_back_img_container").owlCarousel({
        nav: false,
        loop: true,
        margin: 0,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        items: 1,
      });
    });
  });