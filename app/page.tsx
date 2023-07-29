import HeaderSection from "./(sections)/HeaderSection";
import SessionsSection from "./(sections)/SessionsSection";
import SpeakerSection from "./(sections)/SpeakerSection";
import SocialsSection from "./(sections)/SocialsSection";
import NewsletterSection from "./(sections)/NewsletterSection";
import FooterSection from "./(sections)/FooterSection";
import { getData } from "./utils/airtable";
import NavBarSection from "./(sections)/NavBarSection";




export default async function Home() {
  const { sessions, speakers } = await getData();
 
  return (
    <div className="flex flex-col min-w-screen min-h-screen items-center justify-start bg-hero-bg bg-no-repeat bg-top bg-auto">
      <div className="w-full md:w-2/3">
        <NavBarSection />
      </div>
      <header className="w-full md:w-2/3">
        <HeaderSection />
      </header>
      <main className="w-full md:w-2/3">
        <SessionsSection sessions={sessions} />
        <SpeakerSection speakers={speakers} />
        <NewsletterSection />
        <SocialsSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  )
}
