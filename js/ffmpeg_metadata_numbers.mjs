import { greater_than_equal } from "./greater_than_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function ffmpeg_metadata_numbers(printed_text, metadata_key) {
  "$plain printed_text";
  "$plain metadata_key";
  "read the stream of readings ffmpeg printed while it listened to something, and answer one record per reading holding the second it was taken at and the number it carries";
  "THE READINGS COME BACK ON THE OUTPUT CHANNEL AND THAT IS THE WHOLE REASON THIS PATH WORKS. Everything ffmpeg normally says about what it saw goes to the error channel, and the runner here hands back only what was printed - so a measurement read the usual way arrives nowhere. Asking the metadata printer to write to a file named as a single dash routes the readings to the output channel instead, and nothing new had to be built around the running program to catch them.";
  "A READING IS TWO LINES AND ONLY ONE OF THEM HOLDS THE TIME. The frame line carries the time and the line under it carries the number, so the time is remembered from the line above rather than looked for on the line it belongs to. Read the second line alone and every reading is timeless; read the first alone and every reading is empty.";
  "It answers a list rather than a total, because what these measurements are for is the shape of a fault over time, and a total is the very reading that hid the fault in the first place.";
  let readings = [];
  let second_seen = 0;
  let time_word = "pts_time:";
  let key_prefix = text_combine_multiple([metadata_key, "="]);
  let lines_printed = printed_text.split("\n");
  for (let line_text of lines_printed) {
    let time_place = line_text.indexOf(time_word);
    if (greater_than_equal(time_place, 0)) {
      let after_time = line_text.slice(time_place + time_word.length);
      second_seen = Number.parseFloat(after_time);
      continue;
    }
    if (line_text.startsWith(key_prefix)) {
      let after_key = line_text.slice(key_prefix.length);
      readings.push({
        second: second_seen,
        reading: Number.parseFloat(after_key),
      });
    }
  }
  return readings;
}
