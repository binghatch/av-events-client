import Airtable from "airtable";
import { SessionAirtableRecord, SpeakerAirtableRecord } from "../types";

Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
const base = Airtable.base(`${process.env.AIRTABLE_BASE_ID}`);

export const getData = async (): Promise<{sessions: SessionAirtableRecord[], speakers: SpeakerAirtableRecord[]}> => {
  try {
    // Fetch all speakers first
    const speakerRecords = await base('speakers').select({
      sort: [{ field: 'last_name', direction: 'asc' }],
    }).all();

    const speakers: SpeakerAirtableRecord[] = speakerRecords.map(record => ({
      id: record.id,
      fields: record.fields as SpeakerAirtableRecord['fields'],
    }));

    // Fetch event record and get sessionIds
    const eventRecord = await base('events').find(`${process.env.AIRTABLE_RECORD_ID}`);
    const sessionIds = eventRecord.fields.sessions as string[];

    // Fetch all session data in parallel
    const sessions: SessionAirtableRecord[] = await Promise.all(sessionIds.map(async (sessionId: string) => {
      const sessionRecord = await base('sessions').find(sessionId);

      // Get speaker data for this session
      const sessionSpeakerIds = sessionRecord.fields.session_speakers as string[] || [];
      const sessionSpeakers: SpeakerAirtableRecord[] = speakers.filter(speaker => sessionSpeakerIds.includes(speaker.id));

      // Create new session object with session_speakers field as SpeakerAirtableRecord[]
      const newSession: SessionAirtableRecord = {
          id: sessionRecord.id,
          fields: {
              ...sessionRecord.fields,
              session_speakers: sessionSpeakers
          } as SessionAirtableRecord['fields']
      };

      return newSession;
    }));

    return {
      sessions,
      speakers,
    }
  } catch (e) {
    console.error("Error fetching data from Airtable:", e);
    return { sessions: [], speakers: [] };
  }
};