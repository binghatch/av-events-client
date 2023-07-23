import { SpeakerAirtableRecord } from "@/app/types";
import Link from "next/link";
import Image from "next/image";

interface SpeakerAirtableData {
  speakerData: SpeakerAirtableRecord
}

export default function SpeakerTile({ speakerData }: SpeakerAirtableData) {
  return (
    <li className="w-full">
      <Link href={speakerData.fields.linkedin}>
        <div className="flex flex-row justify-center items-center relative overflow-hidden w-full h-full aspect-square border border-gray-800 rounded-lg bg-gray-900">
          <Image objectFit="cover" fill src={speakerData.fields.avatar[0].thumbnails.full.url} alt={speakerData.fields.full_name}></Image>
          <div className="flex flex-col justify-end items-start absolute w-full h-full bottom-0 left-0 p-4 bg-gradient-to-b from-transparent to-gray-950">
            <p className="font-bold truncate max-w-full">{`${speakerData.fields.first_name} ${speakerData.fields.last_name}`}</p>
            <p className="text-sm truncate max-w-full">{`${speakerData.fields.company}`}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}