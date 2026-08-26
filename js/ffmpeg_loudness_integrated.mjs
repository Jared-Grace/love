import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
import { error } from "./error.mjs";
export async function ffmpeg_loudness_integrated(path_in) {
  "$plain path_in";
  "answer how loud a recording is as a whole, as one weighted number for the entire thing";
  "THIS IS THE NUMBER THAT DECIDES HOW MUCH TO TURN THE RECORDING UP. Loudness is aimed at rather than pushed at: a recording is measured, the distance from where it should sit is worked out, and that distance is the gain. Turning things up by a fixed amount instead makes a quiet recording still quiet and a loud one distorted, and neither fault is visible from inside the run.";
  "THE READING GROWS AS THE RECORDING PLAYS AND ONLY THE LAST ONE IS THE ANSWER. The meter reports its running whole-file figure on every frame, so every reading before the end is a whole-file figure for a file that has not finished. Taking the first, or an average of them, answers about the opening rather than the recording.";
  "It refuses an empty answer rather than handing back nothing, because a measurement that silently produced no readings looks exactly like a quiet recording, and the gain worked out from it would be wrong in the loudest possible direction.";
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-i",
    path_in,
    "-af",
    "ebur128=metadata=1,ametadata=print:key=lavfi.r128.I:file=-",
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings = ffmpeg_metadata_numbers(printed_text, "lavfi.r128.I");
  if (equal(readings.length, 0)) {
    error("the loudness meter answered no readings at all for this recording");
  }
  let last_reading = readings[subtract(readings.length, 1)];
  let r = last_reading.reading;
  return r;
}
