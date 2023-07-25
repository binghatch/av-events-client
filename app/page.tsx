import Airtable from "airtable"
import HeaderSection from "./(sections)/HeaderSection";
import SessionsSection from "./(sections)/SessionsSection";
import SpeakerSection from "./(sections)/SpeakerSection";
import NewsletterSection from "./(sections)/NewsletterSection";
import SocialsSection from "./(sections)/SocialsSection";
import FooterSection from "./(sections)/FooterSection";


export default async function Home() {

  return (
    <main className="flex flex-col min-h-screen items-center justify-around">
      <HeaderSection />
      <SessionsSection />
      <SpeakerSection />
      {/* <NewsletterSection /> */}
      <SocialsSection />
      <FooterSection />
    </main>
  )
}
