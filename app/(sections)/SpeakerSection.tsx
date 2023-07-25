import { Suspense } from "react";
import SpeakerTile from "../components/SpeakerTile";
import { SpeakerAirtableRecord } from "../types";
import { getSpeakerData } from "../utils/airtable"

export default async function SpeakerSection() {
  const data = await getSpeakerData();

  return (
    <section className="p-6" id="speakers">
      <h2 className="text-3xl font-bold text-persimmon-500">Speakers</h2>
      <p>This is an overview of the speakers that will be on stage.</p>
      <div className="mt-8">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 list-none">
          {data && data.map((speakerData) => (
            <Suspense key={speakerData.id} fallback={<div>Loading ...</div>}>
              <SpeakerTile speakerData={speakerData} />
            </Suspense>
          ))}
        </ul>
      </div>
    </section>
  )
}