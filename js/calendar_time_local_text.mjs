import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_time_local_text(utc_iso) {
  arguments_assert(arguments, 1);
  ("A meeting's start, given in UTC, said in the reader's own clock and language: weekday, date and time, e.g. \"Thu, Nov 19, 9:00 AM\". The host and the guest each read their own hour, so neither converts time zones in their head.");
  let text = new Date(utc_iso).toLocaleString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  return text;
}
