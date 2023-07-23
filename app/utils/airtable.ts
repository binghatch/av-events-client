import Airtable from "airtable";
import { SessionAirtableRecord, SpeakerAirtableRecord } from "../types";

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
const base = Airtable.base(`${process.env.AIRTABLE_BASE_ID}`);

export const getSessionData = async (): Promise<string> => {
  try {
    const record = await base('events').find(`${process.env.AIRTABLE_RECORD_ID}`);

    const sessionIds = record._rawJson.fields.sessions;
    const sessions: SessionAirtableRecord[] = await Promise.all(sessionIds.map(async (session: string) => {
      const sessionData = await base('sessions').find(session.toString());

      const speakerIds = sessionData._rawJson.fields.session_speakers;
      const speakers = await Promise.all(speakerIds.map(async (speaker: string) => {
        const speakerData = await base('speakers').find(speaker.toString());
        return speakerData;
      }));

      sessionData.fields.session_speakers = speakers;
      return sessionData;
    }));

    // Serialize the data to JSON
    const serializedData = JSON.stringify(sessions);
    return serializedData;
  } catch (e) {
    console.error("Error fetching data from Airtable:", e);
    return "[]"; // Return an empty array as JSON string in case of an error.
  }
};

export const getSpeakerData = async (): Promise<SpeakerAirtableRecord[]> => {
  try {
    const allSpeakers: SpeakerAirtableRecord[] = [];

    const records = await base('speakers').select({
      sort: [{ field: 'last_name', direction: 'asc' }],
    }).all();

    records.forEach((record) => {
      const speaker = { id: record.id, fields: record.fields } as SpeakerAirtableRecord;
      allSpeakers.push(speaker);
    });


    return allSpeakers;
  } catch (e) {
    console.error("Error fetching data from Airtable:", e);
    return []; // Return an empty array as JSON string in case of an error.
  }
};