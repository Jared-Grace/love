import { floor } from "./floor.mjs";
import { less_than } from "./less_than.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
export function subtitles_time_text(seconds) {
  "$plain seconds";
  "One moment of a video written the way a subtitle file spells a moment: hours, then minutes, then seconds down to the hundredth.";
  "THE FORMAT READS NOTHING ELSE. A plain count of seconds is not refused, it is read as zero - so a whole song's words pile up at the first frame and never move, which looks like the file never being loaded rather than like a fault in one line.";
  "A moment before the start is written as the start rather than as a negative time. A line is often reached for a little early so that its fade is finished by the time the word is sung, and the first line of a song is the one that reaches past the beginning; clamping is what that line means, and a negative time is what no reader accepts.";
  "The hour is written without padding because the format does not need it and no song here runs to ten hours; the minute and the second are padded, because those two are read by position.";
  let from_start = seconds;
  if (less_than(seconds, 0)) {
    from_start = 0;
  }
  let p = divide(from_start, 3600);
  let hours = floor(p);
  let right = multiply(hours, 3600);
  let after_hours = subtract(from_start, right);
  let p2 = divide(after_hours, 60);
  let minutes = floor(p2);
  let right2 = multiply(minutes, 60);
  let seconds_left = subtract(after_hours, right2);
  let seconds_text = seconds_left.toFixed(2).padStart(5, "0");
  let minutes_text = String(minutes).padStart(2, "0");
  let written = hours + ":" + minutes_text + ":" + seconds_text;
  return written;
}
