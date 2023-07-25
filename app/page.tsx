import HeaderSection from "./(sections)/HeaderSection";
import SessionsSection from "./(sections)/SessionsSection";
import SpeakerSection from "./(sections)/SpeakerSection";
import NewsletterSection from "./(sections)/NewsletterSection";
import SocialsSection from "./(sections)/SocialsSection";
import FooterSection from "./(sections)/FooterSection";


export default async function Home() {

  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-hero-bg bg-no-repeat bg-top bg-auto">
      <header className="w-full px-0 md:px-40">
        <HeaderSection />
      </header>
      <main className="w-full md:w-2/3">
        <SessionsSection />
        <SpeakerSection />
        {/* <NewsletterSection /> */}
        <SocialsSection />
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  )
}
