// import Airtable from "airtable";
// import SessionCard from "./components/SessionCard";

// const getData = async () => {
//   try {
//     Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
//     const base = Airtable.base(`${process.env.AIRTABLE_BASE_ID}`);
  
//     const record = await base('events').find(`${process.env.AIRTABLE_RECORD_ID}`)

//     const sessionIds = record._rawJson.fields.sessions;
//     const sessions = await Promise.all(sessionIds.map(async (session: string) => {
//       const sessionData = await base('sessions').find(session.toString());

//       const speakerIds = sessionData._rawJson.fields.session_speakers;
//       const speakers = await Promise.all(speakerIds.map(async (speaker: string) => {
//         const speakerData = await base('speakers').find(speaker.toString());
//         console.log(speakerData.fields.avatar);
//         return speakerData;
//       }));

//       sessionData._rawJson.fields.session_speakers = speakers;
//       return sessionData;
//     }));
  
//     return sessions;
//   } catch(e) {
//     console.log(e);
//   }
// }

// export default async function SessionsPage() {
//   const data = await getData();

//   return (
//     <>
//       {data && data.map(session => {
//         return (
//           <SessionCard
//             key={session.id}
//             sessionTitle={session.fields.session_title}
//             sessionStart={session.fields.session_start}
//             sessionDuration={session.fields.session_duration}
//             sessionSubheading={session.fields.session_subheading}
//             sessionType={session.fields.session_type}
//             sessionSpeakers={session.fields.session_speakers}
//             sessionDescription={session.fields.session_description}
//           />
//         )
//       })}
//     </>
//   )
// }