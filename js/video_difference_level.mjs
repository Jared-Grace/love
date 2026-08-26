import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_stats_numbers } from "./ffmpeg_stats_numbers.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { less_than } from "./less_than.mjs";
import { greater_than } from "./greater_than.mjs";
export async function video_difference_level(
  path_a,
  seconds_a,
  path_b,
  seconds_b,
  seconds_length,
) {
  "$plain path_a";
  "$plain seconds_a";
  "$plain path_b";
  "$plain seconds_b";
  "$plain seconds_length";
  "compare a stretch of one film against a stretch of another frame by frame, and answer how far apart the closest and the furthest frames were";
  "THIS IS WHAT MAKES REDRAWING A PICTURE AN ACCOUNTED COST RATHER THAN A HOPE. Any change to a film that needs a filter forces every frame to be drawn again, and how much was lost in doing so is invisible from inside the run - the file is the right length, plays properly, and looks right on a small screen at any quality at all. Measured against the source it came from, the loss is a number, and a number can be judged.";
  "THE TWO STRETCHES ARE NAMED SEPARATELY BECAUSE THE POINT IS USUALLY THAT THEY HAVE MOVED. A film made longer at the front holds the same pictures at a later time, so comparing both from their own beginnings compares an opening against the middle of an opening and answers a large difference about nothing. Give each its own start and the same content is put beside itself.";
  "THAT MAKES IT A TEST OF ALIGNMENT AS WELL AS OF QUALITY, and the second reading comes free. If the two starts are out by even one frame, matching content never meets and the answer collapses - so a high reading is evidence of both things at once, and a low one does not say which of the two went wrong.";
  "THE WORST FRAME IS REPORTED, NOT THE AVERAGE, because the fault worth finding is a moment rather than a tendency and an average is exactly what buries it. The best is reported beside it because the two together say which kind of answer this is: close together is a uniform redrawing, far apart is a film that is perfect for most of its length and breaks somewhere.";
  "NOTHING HERE IS AVERAGED IN DECIBELS, on purpose. These figures are ratios written on a folding scale, and adding them up and dividing is arithmetic the scale does not support - the answer looks reasonable, is wrong, and is wrong in the flattering direction.";
  "It refuses an empty answer rather than handing back nothing, because no frames compared reads exactly like nothing wrong and is the opposite.";
  let v = String(seconds_a);
  let v2 = String(seconds_length);
  let v3 = String(seconds_b);
  let v4 = String(seconds_length);
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
    path_a,
    "-ss",
    v3,
    "-t",
    v4,
    "-i",
    path_b,
    "-filter_complex",
    "[0:v][1:v]psnr=stats_file=-",
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings = ffmpeg_stats_numbers(printed_text, "psnr_avg");
  if (equal(readings.length, 0)) {
    error(
      "comparing the two films produced no frame at all, which is not the same as their having matched",
    );
  }
  let decibels_worst = readings[0];
  let decibels_best = readings[0];
  for (let reading of readings) {
    if (less_than(reading, decibels_worst)) {
      decibels_worst = reading;
    }
    if (greater_than(reading, decibels_best)) {
      decibels_best = reading;
    }
  }
  let frames_compared = readings.length;
  let r = {
    frames_compared,
    decibels_worst,
    decibels_best,
  };
  return r;
}
