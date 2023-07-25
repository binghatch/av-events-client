import React from "react";
import SessionCard from "../components/SessionCard";
import { getSessionData } from "../utils/airtable";
import { SessionAirtableRecord } from "../types";// Import the SessionAirtableRecord interface

export default async function SessionsSection() {
  const response = await getSessionData();
  const data: SessionAirtableRecord[] = JSON.parse(response); // Type data as SessionAirtableRecord[]

  return (
    <section className="p-6" id="sessions">
      <h2 className="text-3xl font-bold text-persimmon-500">Sessions</h2>
      <p>This is an overview of the sessions that will take place.</p>
      <div>
        {data && data.map(sessionData => {
          return <SessionCard key={sessionData.id} sessionData={sessionData.fields} />
        })}
      </div>
    </section>
  )
}
