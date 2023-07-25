export interface SessionAirtableRecord {
  id: string;
  fields: {
    session_title: string;
    session_subheading: string;
    session_type: string;
    session_start: string;
    session_duration: number;
    session_description: string;
    session_speakers: SpeakerAirtableRecord[];
  };
}

export interface SpeakerAirtableRecord {
  id: string;
  fields: {
    full_name: string;
    first_name: string;
    last_name: string;
    job_title: string;
    company: string;
    avatar?: {
      id: string;
      width: number;
      height: number;
      url: string;
      filename: string;
      size: number;
      type: string;
      thumbnails: {
        small: {
          url: string;
          width: number;
          height: number;
        };
        large: {
          url: string;
          width: number;
          height: number;
        };
        full: {
          url: string;
          width: number;
          height: number;
        };
      };
    }[];
    linkedin?: string;
    show: boolean;
  };
}