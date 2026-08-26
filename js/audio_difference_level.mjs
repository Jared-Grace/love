import { add } from "./add.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
import { ffmpeg_metadata_numbers } from "./ffmpeg_metadata_numbers.mjs";
import { equal } from "./equal.mjs";
import { error } from "./error.mjs";
import { list_last_property } from "./list_last_property.mjs";
export async function audio_difference_level(
  path_a,
  seconds_a,
  path_b,
  seconds_b,
  seconds_length,
  decibels_gain,
) {
  "$plain path_a";
  "$plain seconds_a";
  "$plain path_b";
  "$plain seconds_b";
  "$plain seconds_length";
  "$plain decibels_gain";
  "take a stretch out of each of two recordings, turn one of them upside down, lay them on top of each other, and answer how much is left over";
  "WHAT IS LEFT OVER IS THE ONLY HONEST ANSWER TO ARE THESE THE SAME. Two recordings of one performance look alike on a meter, sound alike through a wall, and measure alike for loudness, so every reading taken of them one at a time agrees whether they are the same or not. Laid on top of each other with one inverted, everything they share cancels and only what differs survives, so the leftover is a direct measurement of the disagreement rather than a comparison of two summaries.";
  "IT ANSWERS TWO DIFFERENT QUESTIONS AND THE CALLER DECIDES WHICH ONE IT ASKED. Handed two takes it says whether they are the same performance - a leftover far below the two of them says yes, a leftover near their own level says these are unrelated recordings that happen to be similar. Handed a file and a copy of it that has been through a container it says whether the copy still holds the same samples, where a leftover down at the noise of the smallest step the copy can store means nothing was lost that the format could have kept.";
  "THE GAIN IS TAKEN AS A PARAMETER RATHER THAN WORKED OUT HERE, because the two recordings very often differ in level and in nothing else. Left uncorrected, a pure difference in level fills the leftover with the whole recording and reads exactly like two unrelated takes - so measure the level of each first, hand the distance in here, and what is left over is then about the performance rather than about the volume knob.";
  "BOTH ARE BROUGHT TO ONE RATE BEFORE ANYTHING IS SUBTRACTED, because two recordings at different rates cannot be laid on top of each other at all - the samples do not line up, and every one of them then disagrees with its neighbour by something that has nothing to do with the performance.";
  "It refuses an empty answer rather than handing back nothing, because a run that produced no reading looks exactly like two recordings that cancelled perfectly, which is the one answer nobody should ever be handed by accident.";
  let seconds_a_end = add(seconds_a, seconds_length);
  let seconds_b_end = add(seconds_b, seconds_length);
  let v = String(seconds_a);
  let v2 = String(seconds_a_end);
  let branch_a = text_combine_multiple([
    "[0:a]aresample=48000:resampler=soxr:precision=28,aformat=sample_fmts=fltp:channel_layouts=stereo,atrim=start=",
    v,
    ":end=",
    v2,
    ",asetpts=N/SR/TB[a];",
  ]);
  let v3 = String(seconds_b);
  let v4 = String(seconds_b_end);
  let v5 = String(decibels_gain);
  let branch_b = text_combine_multiple([
    "[1:a]aresample=48000:resampler=soxr:precision=28,aformat=sample_fmts=fltp:channel_layouts=stereo,atrim=start=",
    v3,
    ":end=",
    v4,
    ",asetpts=N/SR/TB,volume=",
    v5,
    "dB,volume=-1[b];",
  ]);
  let measuring =
    "[a][b]amix=inputs=2:duration=shortest:normalize=0,astats=metadata=1:measure_perchannel=none:measure_overall=RMS_level+Peak_level,ametadata=print:file=-";
  let filter_text = text_combine_multiple([branch_a, branch_b, measuring]);
  let command_words = [
    "-hide_banner",
    "-nostats",
    "-loglevel",
    "error",
    "-i",
    path_a,
    "-i",
    path_b,
    "-filter_complex",
    filter_text,
    "-f",
    "null",
    "-",
  ];
  let printed_text = await ffmpeg_words_run(command_words);
  let readings_rms = ffmpeg_metadata_numbers(
    printed_text,
    "lavfi.astats.Overall.RMS_level",
  );
  let readings_peak = ffmpeg_metadata_numbers(
    printed_text,
    "lavfi.astats.Overall.Peak_level",
  );
  if (equal(readings_rms.length, 0)) {
    error(
      "laying the two recordings on top of each other produced no reading at all, which is not the same as their having cancelled",
    );
  }
  let decibels_rms = list_last_property(readings_rms, "reading");
  let decibels_peak = list_last_property(readings_peak, "reading");
  let r = {
    decibels_rms,
    decibels_peak,
  };
  return r;
}
