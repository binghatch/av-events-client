import { useState, useEffect } from "react";
import SessionCard from "../components/SessionCard";
import { SessionAirtableRecord, SpeakerAirtableRecord } from "../types";// Import the SessionAirtableRecord interface
import SessionSelector from "../components/SessionSelector";
import { getData } from "../utils/airtable";

interface ChildProps {
  sessions: SessionAirtableRecord[];
}

export default function SessionsSection({ sessions }: ChildProps) {

  return (
    <section className="mt-12 p-6" id="sessions">
      <h2 className="text-4xl font-bold text-terracotta-400">Sessions</h2>
      <p>This is an overview of the sessions that will take place.</p>
      <SessionSelector />
      <div>
        {sessions && sessions.map(session => {
          return <SessionCard key={session.id} sessionData={session.fields} />
        })}
      </div>
    </section>
  )
}
