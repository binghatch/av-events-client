// import MailchimpForm from "../components/MailchimpForm";
import SpeakerTile from "../components/SpeakerTile";
import { SpeakerAirtableRecord } from "../types";
import { getSpeakerData } from "../utils/airtable"

export default async function SpeakerSection() {
  const data = await getSpeakerData();

  return (
    <section className="p-4" id="speakers">
      <h2 className="text-3xl font-bold text-terracotta-400">Speakers</h2>
      <p>This is an overview of the speakers that will be on stage.</p>
      <div className="mt-8">
        {/* <MailchimpForm /> */}
      </div>
    </section>
  )
}