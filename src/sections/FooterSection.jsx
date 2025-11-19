const FooterSection = () => {

  return (
    <section className="footer-section">
      <img
        src="/images/footer-dip.png"
        alt=""
        className="w-full object-cover -translate-y-1"
      />

      <div className="2xl:h-[110dvh] relative md:pt-[20vh] pt-[10vh]">
        <div className="overflow-hidden z-10">
          <h1 className="general-title text-center text-milk py-5">
            #MINEYOURSTORY
          </h1>
        </div>

        <div className="footer-portal" aria-hidden="true" />

        <div className="flex-center gap-5 relative z-10 md:mt-20 mt-5">
          <div className="social-btn">
            <img src="./images/yt.svg" alt="BlockCraft YouTube Portal" />
          </div>
          <div className="social-btn">
            <img src="./images/insta.gif" alt="BlockCraft Instagram Realm" />
          </div>
          
        </div>

        <div className="mt-40 md:px-10 px-5 flex gap-10 md:flex-row flex-col justify-between text-milk font-paragraph md:text-lg font-medium">
          <div className="flex items-center md:gap-16 gap-5">
            <div>
              <p>BlockCraft Realms</p>
            </div>
            <div>
              <p>Crafter's Guild</p>
              <p>Mining Academy</p>
              <p>Block Builders</p>
            </div>
            <div>
              <p>Community</p>
              <p>Connect</p>
              <p>Block Talk</p>
            </div>
          </div>

          <div className="md:max-w-lg">
            <p>
              Join the Adventure! Get devlogs on mega builds, event drops, and
              behind-the-scenes Minecraft cinematics.
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 md:mt-10">
              {/* The input field and arrow icon for newsletter signup. */}{" "}
              {/* A
          border at the bottom for a clean, modern look. */}
              <input
                type="email"
                placeholder="Drop your guild email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="minecraft-mail-arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          {/* The final row with copyright and legal links. */}
          <p>Copyright © 2025 BlockCraft Realms Network - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Mine Privacy Policy</p>
            <p>Server Rules & Guild Terms</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
