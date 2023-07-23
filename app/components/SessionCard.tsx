'use client';

import { useState } from "react";
import { convertIso8601To24HourTime, convertSecondsToTime } from "@/app/utils/conversions";
import Image from 'next/image';
import { SpeakerAirtableRecord } from "@/app/types";

interface SessionAirtableData {
  sessionData: {
    session_title: string;
    session_subheading: string;
    session_type: string;
    session_start: string;
    session_duration: number;
    session_description?: string;
    session_speakers?: SpeakerAirtableRecord[];
  };
}

export default function SessionCard({ sessionData }: SessionAirtableData) {
  const {
    session_title,
    session_subheading,
    session_type,
    session_start,
    session_duration,
    session_description,
    session_speakers
  } = sessionData;

  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleToggle = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="flex flex-col p-6 first:mt-8 mt-4 border border-gray-800 rounded-lg bg-gray-900 text-white max-h-full">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-baseline">
          <h3 className="text-3xl font-bold">{convertIso8601To24HourTime(session_start)}</h3>
          <span className="text-sm ms-2">{convertSecondsToTime(session_duration)}</span>
        </div>
        <div className="px-2 py-0.5 border border-indigo-500 rounded-md bg-indigo-950 text-sm text-indigo-500">{session_type}</div>
      </div>
      <div className="flex flex-col justify-start items-start mt-6 w-full">
        <h4 className="text-xl font-bold text-ellipsis overflow-hidden">{session_title}</h4>
        <p className="text-gray-500 text-ellipsis overflow-hidden">{session_subheading}</p>
        <div className={`block relative w-full overflow-hidden ${showFullDescription ? "max-h-[512px]" : "max-h-20"} transition-max-h duration-300 ease-in-out`}>
          <div className={`flex flex-row justify-start items-end w-full h-20 transition-all duration-300 ease-in-out absolute bottom-0 left-0 overflow-hidden bg-gradient-to-t from-gray-900 from-20% ${showFullDescription ? "to-transparent to-30%" : ""}`} role="button" onClick={() => handleToggle()}>
            <span className="text-sm">{showFullDescription ? "Read less" : "Read more"}</span>
          </div>
          <div className="mb-4">
            <p className="mt-4 mb-12 text-sm tracking-wide font-light">{session_description}</p>
          </div>
        </div>
      </div>
    <div>
        {session_speakers && session_speakers.length > 0 && session_speakers.map(speaker => (
          <div className="flex flex-row justify-start items-center w-full first:mt-8 mt-4" key={speaker.id}>
            <div className="border border-gray-800 rounded-full overflow-hidden">
              <Image src={speaker.fields.avatar[0].url} width={56} height={56} alt={speaker.fields.full_name} />
            </div>
            <div className="ms-4">
              <h5 className="font-bold">{speaker.fields.full_name}</h5>
              <p className="text-gray-500 text-ellipsis line-clamp-1">{speaker.fields.job_title} at {speaker.fields.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}