import React from "react";
import SessionCard from "../sessions/components/SessionCard";
import { getData } from "../utils/airtable";
import { SessionAirtableRecord } from "../utils/airtable"; // Import the SessionAirtableRecord interface

export default async function SessionsSection() {
  const response = await getData();
  const data: SessionAirtableRecord[] = JSON.parse(response); // Type data as SessionAirtableRecord[]

  console.log(data);

  return (
    <section>
      <h2>Sessions</h2>
      <p>This is an overview of the sessions that will take place.</p>
      {data && data.map(sessionData => {
        return <SessionCard key={sessionData.id} sessionData={sessionData.fields} />
      })}
    </section>
  )
}
