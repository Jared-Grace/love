import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { subtract } from "./subtract.mjs";
export async function audio_region_balance(
  path_in,
  seconds_start,
  seconds_length,
) {
  "$plain path_in";
  "$plain seconds_start";
  "$plain seconds_length";
  "answer how loud each side is over one stretch of a recording, and how far the stretch leans";
  "A WHOLE-FILE READING CANNOT ANSWER THIS AND WILL SEEM TO. The lean of a recording is measured over the whole of it elsewhere in this repo, and that reading is the right one for correcting a mix; it is the wrong one for every question about a piece. An opening spliced on from another take has its own lean, a few seconds long inside something several minutes long, and it disappears entirely into a figure taken over the whole thing.";
  "IT WAS BUILT FOR THE MOMENT AFTER A CORRECTION RATHER THAN BEFORE ONE. A correction worked out across a whole recording is smoothed, so its value at the very beginning is set mostly by what comes later - which is how a centred song ends up with an opening leaning almost two decibels to one side while every whole-file reading says it is straight. Measuring the piece on its own is what turns that into a number that can be corrected, and the correction is then checked the same way.";
  "IT ANSWERS THE LEAN AS WELL AS THE TWO SIDES, because the lean is the only one of the three anybody acts on and working it out at each call site is where a sign gets flipped. Positive means the left side is the louder one.";
  "It refuses an empty answer rather than handing back nothing, because a stretch that produced no reading and a stretch that is perfectly centred are the same answer to anything reading a number here.";
  let filter_text =
    "aresample=48000:resampler=soxr:precision=28,astats=metadata=1:measure_overall=none:measure_perchannel=RMS_level,ametadata=print:file=-";
  let v = String(seconds_start);
  let v2 = String(seconds_length);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-ss",
    v,
    "-t",
    v2,
    "-i",
    path_in,
    "-af",
    filter_text,
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings_left = ffmpeg_metadata_numbers(
    printed_text,
    "lavfi.astats.1.RMS_level",
  );
  let readings_right = ffmpeg_metadata_numbers(
    printed_text,
    "lavfi.astats.2.RMS_level",
  );
  if (equal(readings_left.length, 0)) {
    error(
      "listening to this stretch produced no reading at all, which is not the same as its being centred",
    );
  }
  let decibels_left = list_last_property(readings_left, "reading");
  let decibels_right = list_last_property(readings_right, "reading");
  let decibels_lean = subtract(decibels_left, decibels_right);
  let r = {
    decibels_left,
    decibels_right,
    decibels_lean,
  };
  return r;
}
