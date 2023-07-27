import { DateTime } from "luxon";

export function convertIso8601To24HourTime(iso8601Time: string | undefined) {
  if (!iso8601Time || iso8601Time.length < 16) {
    return "";
  }
  
  const dateTime = DateTime.fromISO(iso8601Time, { zone: 'Europe/Berlin' });
  
  const formattedTime = dateTime.toFormat('HH:mm');
  
  return formattedTime;
}

export function convertSecondsToTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}
