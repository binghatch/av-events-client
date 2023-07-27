"use client";
import { useState } from "react";
import SessionCard from "../components/SessionCard";
import { HandleToggleFunction, SessionAirtableRecord, SpeakerAirtableRecord } from "../types";// Import the SessionAirtableRecord interface
import SessionSelector from "../components/SessionSelector";

interface ChildProps {
  sessions: SessionAirtableRecord[];
}

export default function SessionsSection({ sessions }: ChildProps) {
  const [selectedGroup, setSelectedGroup] = useState<string | "All" | null>("All");

  const handleToggle: HandleToggleFunction = (group) => {
    if (group === "All" || selectedGroup === group) {
      setSelectedGroup("All");
    } else {
      setSelectedGroup(group);
    }
  };

  return (
    <section className="mt-12 p-6" id="sessions">
      <h2 className="text-4xl font-bold text-terracotta-400">Sessions</h2>
      <p>This is an overview of the sessions that will take place.</p>
      <SessionSelector handleToggle={handleToggle} />
      <div>
        {sessions && sessions.map(session => {
          if (selectedGroup === "All" || selectedGroup === session.fields.session_group) {
            return <SessionCard key={session.id} sessionData={session.fields} />
          }
          return null; // Don't render if this isn't the selected group.
        })}
      </div>
    </section>
  )
}
