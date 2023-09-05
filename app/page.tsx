import HeaderSection from "./(sections)/HeaderSection";
import SessionsSection from "./(sections)/SessionsSection";
import SpeakerSection from "./(sections)/SpeakerSection";
import SocialsSection from "./(sections)/SocialsSection";
import NewsletterSection from "./(sections)/NewsletterSection";
import FooterSection from "./(sections)/FooterSection";
import { getData } from "./utils/airtable";
import NavBarSection from "./(sections)/NavBarSection";
import Image from "next/image";
import HeroImage from "../public/images/av-hero-bg.png";
import LivestreamSection from "./(sections)/LiveStreamSection";

export default async function Home() {
  const { sessions, speakers } = await getData();

  return (
    <div className="relative flex flex-col min-w-screen min-h-screen items-center justify-start">
      {/* Hero image in the background */}
      <div className="absolute top-0 left-0 w-screen min-h-screen z-0">
        <Image src={HeroImage} priority className="w-full object-cover" alt="Assembly Summit" />
      </div>

      {/* The overlay div */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pattern" />

      <div className="w-full md:w-2/3 relative z-20">
        <div className="w-full">
          <HeaderSection />
        </div>

        <main className="w-full">
          <LivestreamSection />
          <SessionsSection sessions={sessions} />
          <SpeakerSection speakers={speakers} />
          <NewsletterSection />
          <SocialsSection />
        </main>

        <footer>
          <FooterSection />
        </footer>
      </div>
    </div>
  );
}
