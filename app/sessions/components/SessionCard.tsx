import { convertIso8601To24HourTime, convertSecondsToTime } from "@/app/utils/conversions"
import Image from 'next/image'

interface SpeakerAirtableRecord {
  id: string;
  fields: {
    full_name: string;
    first_name: string;
    last_name: string;
    job_title: string;
    company: string;
    avatar: {
      id: string;
      width: number;
      height: number;
      url: string;
      filename: string;
      size: number;
      type: string;
    }[];
  };
}

interface SessionCardProps {
  sessionTitle: string,
  sessionSubheading: string,
  sessionType: "Keynote" | "Opening Words",
  sessionStart: string,
  sessionDuration: number,
  sessionDescription?: string,
  sessionSpeakers?: SpeakerAirtableRecord[]
}

export default function SessionCard(props: SessionCardProps) {
  const { 
    sessionTitle,
    sessionSubheading,
    sessionType,
    sessionStart,
    sessionDuration,
    sessionDescription,
    sessionSpeakers
  } = props;

  return (
    <div className="flex flex-col p-6 m-4 border border-gray-800 rounded-lg bg-gray-900 text-white">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-baseline">
          <h3 className="text-3xl font-bold">{convertIso8601To24HourTime(sessionStart)}</h3>
          <span className="text-sm ms-2">{convertSecondsToTime(sessionDuration)}</span>
        </div>
        <div className="px-2 py-0.5 border border-indigo-500 rounded-md bg-indigo-950 text-sm text-indigo-500">{sessionType}</div>
      </div>
      <div className="mt-6 w-full">
        <h4 className="text-xl font-bold text-ellipsis overflow-hidden">{sessionTitle}</h4>
        <p className="text-gray-500 text-ellipsis overflow-hidden">{sessionSubheading}</p>
        <p className="pt-4">{sessionDescription}</p>
      </div>
      <div>  
        {sessionSpeakers && sessionSpeakers.length > 0 && sessionSpeakers.map(speaker => (
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
  )
}