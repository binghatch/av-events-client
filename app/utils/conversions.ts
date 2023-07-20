export function convertIso8601To24HourTime(iso8601Time: string) {
  const formattedTime = iso8601Time.slice(11, 16);
  
  return formattedTime;
}

export function convertSecondsToTime(seconds: number) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
}