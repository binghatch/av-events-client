import Airtable from "airtable"

const getData = async () => {
  try {
    Airtable.configure({ apiKey: process.env.AIRTABLE_API_KEY });
    const base = Airtable.base(`${process.env.AIRTABLE_BASE_ID}`);
  
    const record = await base('events').find(`${process.env.AIRTABLE_RECORD_ID}`)
    console.log(record);

    const sessionIds = record._rawJson.fields.sessions;
    const sessions = await Promise.all(sessionIds.map(async (session: String) => {
      const sessionData = await base('sessions').find(session.toString());
      console.log(sessionData);
      return sessionData;
    }));
  
    return sessions;
  } catch(e) {
    console.log(e);
  }
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex flex-row min-h-screen items-center justify-around">
      {data && data.map(session => {
        return (
          <div className="w-96 p-6 border border-opacity-10 rounded-md" key={session.id}>
            <h1 className="text-lg">{session.fields.session_name}</h1>
            <p className="text-gray-400">{session.fields.session_subheading}</p>
            <p className="text-sm">{session.fields.session_description}</p>
          </div>
        )
      })}
    </main>
  )
}
