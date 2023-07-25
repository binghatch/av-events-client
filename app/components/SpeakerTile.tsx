import { SpeakerAirtableRecord } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

interface SpeakerAirtableData {
  speakerData: SpeakerAirtableRecord | undefined; // Make sure to handle undefined speakerData
}

export default function SpeakerTile({ speakerData }: SpeakerAirtableData) {
  if (!speakerData) {
    return null; // Return null or some fallback content if speakerData is undefined
  }

  const { fields } = speakerData;

  return (
    <li className="w-full">
      <Link href={fields.linkedin || "#"} className={fields.linkedin ? 'pointer-events-auto' : 'pointer-events-none'} target="_blank">
        <div className="flex flex-row justify-center items-center relative overflow-hidden w-full h-full aspect-square border border-gray-800 rounded-lg bg-gray-900">
          {fields.avatar ? (
            <Image className="object-cover" fill src={fields.avatar[0].thumbnails.full.url} alt={fields.full_name}></Image>
          ) : (
            <span className="text-5xl">{`${fields.first_name[0]} ${fields.last_name[0]}`}</span>
          )}
          <div className="flex flex-col justify-end items-start absolute w-full h-full bottom-0 left-0 p-3 bg-gradient-to-b from-transparent to-gray-950">
            <p className="font-bold truncate max-w-full">{`${fields.first_name} ${fields.last_name}`}</p>
            <p className="text-sm truncate max-w-full">{`${fields.company}`}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}