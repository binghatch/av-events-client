import { SpeakerAirtableRecord } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

interface SpeakerAirtableData {
  speakerData?: SpeakerAirtableRecord; // Make sure to handle undefined speakerData
}

export default function SpeakerTile({ speakerData }: SpeakerAirtableData) {
  if (!speakerData || !speakerData.fields) {
    return null; // Return null or some fallback content if speakerData or speakerData.fields is undefined
  }

  const { fields } = speakerData;

  return (
    <li className="w-full group">
      <Link href={fields.linkedin || "#"} className={fields.linkedin ? 'pointer-events-auto' : 'pointer-events-none'} target="_blank">
        <div className="flex flex-row justify-center items-center relative overflow-hidden w-full h-full aspect-square border border-midnight-800 rounded-lg bg-midnight-900">
          {fields.avatar ? (
            <Image className="object-cover w-auto h-auto grayscale group-hover:grayscale-0 transition-all duration-300" fill sizes="(max-width: 440px)" src={fields.avatar[0]?.url} alt={fields.full_name}></Image>
          ) : (
            <span className="text-5xl grayscale group-hover:grayscale-0 transition-all duration-300">{`${fields.first_name[0]} ${fields.last_name[0]}`}</span>
          )}
          <div className="flex flex-col justify-end items-start absolute w-full h-full bottom-0 left-0 p-3 bg-gradient-to-b from-transparent to-midnight-950">
            <p className="font-bold truncate max-w-full">{`${fields.first_name} ${fields.last_name}`}</p>
            <p className="text-sm truncate max-w-full">{fields.company}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}