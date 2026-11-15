import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function calendar_time_range_local_text(utc_iso, minutes) {
  arguments_assert(arguments, 2);
  ('A meeting\'s start and end, the start given in UTC and the end minutes later, said in the reader\'s own clock and language: e.g. "Thu, Nov 19, 3:00 – 3:25 PM" (human: "Can the meeting time include the duration?").');
  ("The browser's own range formatter writes it, so the date is said once and AM/PM once when both ends share them, and each language gets its own dash and order.");
  let start = new Date(utc_iso);
  let end = new Date(start.getTime() + multiply(minutes, 60000));
  let format = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
  let text = format.formatRange(start, end);
  return text;
}
