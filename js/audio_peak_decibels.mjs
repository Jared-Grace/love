import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { error } from "./error.mjs";
export async function audio_peak_decibels(path_in) {
  "$plain path_in";
  "answer how close the loudest instant of a recording comes to the ceiling, as a number of decibels below it";
  "THIS IS WHAT SAYS WHETHER A LIMITER IS EARNING ITS PLACE. A recording sitting well below the ceiling has nothing for a limiter to hold down, so putting one in front of it changes the sound and buys no headroom. One already touching the ceiling has no room left for the encoder that comes after it, and that difference is invisible in the loudness figure, which is an average over the whole recording and says nothing about its loudest instant.";
  "THE METER IS ASKED TO FORGET EACH FRAME AS IT GOES, so every reading is that frame's own loudest instant rather than a running high-water mark. Left to accumulate, the reading is the highest so far, which means once the recording touches the ceiling every later reading repeats it - and counting those reads as though the recording were pinned at the ceiling for the rest of its length.";
  "The loudest of all the readings is the answer, so the readings are compared rather than the last one taken. Silence reads as no number at all, and a recording is not taken to have no loudest instant merely because it ends quietly.";
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-i",
    path_in,
    "-af",
    "astats=metadata=1:reset=1,ametadata=print:file=-",
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let lines = printed_text.split("\n");
  let loudest = null;
  for (let line of lines) {
    if (line.includes("Peak_level=")) {
      let after = line.split("Peak_level=")[1];
      let v = after.trim();
      let reading = Number(v);
      if (Number.isFinite(reading)) {
        if (equal(loudest, null)) {
          loudest = reading;
        }
        if (greater_than(reading, loudest)) {
          loudest = reading;
        }
      }
    }
  }
  if (equal(loudest, null)) {
    error(
      "the meter answered no loudest-instant reading at all for this recording",
    );
  }
  let r = loudest;
  return r;
}
