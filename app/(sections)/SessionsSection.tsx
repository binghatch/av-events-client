"use client";
import { useState, useEffect } from "react";
import SessionCard from "../components/SessionCard";
import { HandleToggleFunction, SessionAirtableRecord, SpeakerAirtableRecord } from "../types";// Import the SessionAirtableRecord interface
import SessionSelector from "../components/SessionSelector";
import { DateTime } from 'luxon';



interface ChildProps {
  sessions: SessionAirtableRecord[];
}

export default function SessionsSection({ sessions }: ChildProps) {
  const [selectedGroup, setSelectedGroup] = useState<string | "All">("All");
  const [currentTime, setCurrentTime] = useState<DateTime>(DateTime.now().setZone('Europe/Berlin'));

  const handleToggle: HandleToggleFunction = (group) => {
    if (group === "All" || selectedGroup === group) {
      setSelectedGroup("All");
    } else {
      setSelectedGroup(group);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(DateTime.now().setZone('Europe/Berlin'));
    }, 300000); // 5 minutes = 300000 ms
  
    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-12 p-6" id="sessions">
      <h2 className=""><span className="thick-underline text-3xl font-black">Sessions</span></h2>
      <p>This is an overview of the sessions that will take place.</p>
      <SessionSelector handleToggle={handleToggle} selectedGroup={selectedGroup} />
      <div>
        {sessions && sessions.map(session => {
          if (selectedGroup === "All" || selectedGroup === session.fields.session_group) {
            return <SessionCard key={session.id} sessionData={session.fields} currentTime={currentTime} />
          }
          return null; // Don't render if this isn't the selected group.
        })}
      </div>
    </section>
  )
}
