import { useGSAP } from "@gsap/react";
import { flavorlists } from "../constants";
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const FlavorSlider = () => {
  const sliderRef = useRef();

  const isTablet = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  useGSAP(
    () => {
      const sliderNode = sliderRef.current;
      if (!sliderNode) return;

      const extraTravel = 1500;
      const scrollWidth = sliderNode.scrollWidth || window.innerWidth;
      const scrollAmount = Math.max(0, scrollWidth - window.innerWidth);

      let containerTimeline = null;

      if (!isTablet) {
        containerTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "2% top",
            end: `+=${scrollAmount + extraTravel}px`,
            scrub: true,
            pin: true,
          },
        });

        containerTimeline.to(".flavor-section", {
          x: `-${scrollAmount + extraTravel}px`,
          ease: "power1.inOut",
        });
      }

      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "top top",
          end: "bottom 80%",
          scrub: true,
        },
      });

      titleTl
        .to(".first-text-split", {
          xPercent: -30,
          ease: "power1.inOut",
        })
        .to(
          ".flavor-text-scroll",
          {
            xPercent: -22,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(
          ".second-text-split",
          {
            xPercent: -10,
            ease: "power1.inOut",
          },
          "<"
        );

      const overlayStart = containerTimeline ? "left center" : "top 70%";
      const overlayEnd = containerTimeline ? "right center" : "bottom 30%";

      gsap.utils
        .toArray(".flavor-card .realm-overlay")
        .forEach((overlay) => {
          const parentCard = overlay.closest(".flavor-card");
          if (!parentCard) return;

          gsap.set(overlay, { xPercent: -120, opacity: 0 });

          gsap.to(overlay, {
            xPercent: -10,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: parentCard,
              scrub: true,
              start: overlayStart,
              end: overlayEnd,
              ...(containerTimeline && { containerAnimation: containerTimeline }),
            },
          });
        });
    },
    { dependencies: [isTablet] }
  );

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`flavor-card relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none overflow-hidden rounded-3xl ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.jpg`}
              alt="minecraft realm background"
              className="realm-art absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full object-cover rounded-3xl"
            />

            <img
              // src="/images/slider-dip.png"
              alt="realm lighting overlay"
              className="realm-overlay left-0 h-full object-cover"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
