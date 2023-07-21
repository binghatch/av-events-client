import Airtable from "airtable"
import HeaderSection from "./components/HeaderSection";
import SessionsSection from "./components/SessionsSection";
import SpeakerSection from "./components/SpeakerSection";
import NewsletterSection from "./components/NewsletterSection";
import SocialsSection from "./components/SocialsSection";
import FooterSection from "./components/FooterSection";

const getData = async () => {
  try {
    Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
    const base = Airtable.base(`${process.env.AIRTABLE_BASE_ID}`);
  
    const record = await base('events').find(`${process.env.AIRTABLE_RECORD_ID}`)
    console.log(record);

    const sessionIds = record._rawJson.fields.sessions;
    const sessions = await Promise.all(sessionIds.map(async (session: String) => {
      const sessionData = await base('sessions').find(session.toString());
      console.log(sessionData);
      return sessionData;
    }));
  
    return sessions;
  } catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex flex-row min-h-screen items-center justify-around">
      <HeaderSection />
      <SessionsSection />
      <SpeakerSection />
      <NewsletterSection />
      <SocialsSection />
      <FooterSection />
    </main>
  )
}
