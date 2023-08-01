import { Suspense } from "react";
import SpeakerTile from "../components/SpeakerTile";
import { SpeakerAirtableRecord } from "../types";

interface ChildProps {
  speakers: SpeakerAirtableRecord[];
}

export default async function SpeakerSection({ speakers }: ChildProps ) {
  return (
    <section className="mt-12 p-6" id="speakers">
      <h2 className=""><span className="thick-underline text-3xl font-black">Speakers</span></h2>
      <p>This is an overview of the speakers that will be on stage.</p>
      <div className="mt-8">
        <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 list-none">
          {speakers && speakers.map((speaker) => (
            <Suspense key={speaker.id} fallback={<div>Loading ...</div>}>
              <SpeakerTile speakerData={speaker} />
            </Suspense>
          ))}
        </ul>
      </div>
    </section>
  )
}