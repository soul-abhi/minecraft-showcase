import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const HeroSection = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline({
      delay: 1,
    });

    tl.to(".hero-content", {
      y: 0,
      ease: "power1.inOut",
    })
      .to(
        ".hero-text-scroll",
        {
          duration: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        "-=0.5"
      )
      .from(
        titleSplit.chars,
        {
          yPercent: 200,
          stagger: 0.02,
          ease: "power2.out",
        },
        "-=0.5"
      );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });

    heroTl.to(".hero-container", {
      rotate: 7,
      scale: 0.9,
      yPercent: 30,
      ease: "power1.inOut",
    });

    gsap.fromTo(
      ".hero-video",
      {
        clipPath: "circle(4% at 50% 50%)",
        scale: 1.1,
        opacity: 0,
      },
      {
        clipPath: "circle(125% at 50% 50%)",
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power2.out",
        delay: 0.2,
      }
    );
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <div className="hero-video-wrapper" aria-hidden="true">
          <video
            className="hero-video"
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="hero-grid" />

        <div className="hero-content">
          <div className="overflow-hidden">
            <h1 className="hero-title">BlockCraft Realms</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Create + Explore </h1>
            </div>
          </div>

          <h2>
            Step inside a living Minecraft gallery packed with redstone builds,
            cinematic biomes, and survival stories forged block by block.
          </h2>

          <div className="hero-button">
            <p>Enter the Overworld</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
