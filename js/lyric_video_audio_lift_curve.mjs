import { arguments_assert } from "./arguments_assert.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function lyric_video_audio_lift_curve(
  path_audio,
  seconds_from,
  seconds_to,
  decibels,
  power,
  path_output,
) {
  "$plain path_audio";
  "$plain seconds_from";
  "$plain seconds_to";
  "$plain decibels";
  "$plain power";
  "$plain path_output";
  "Writes a copy of a recording whose loudness is raised from nothing at seconds_from to the full decibels at seconds_to, and held there to the end, for a song whose own fade-out begins while its last word is still being sung.";
  "Built 2026-10-20 for Psalm 119:17-24 song 2: the singer held the last word into the recording's own fade, and the human heard it as the last word getting too quiet. Raising the loudness by the amount the fade took away keeps the word at full volume; the last fraction of a second, where the fade has gone to near silence, cannot be brought back and still ends the song.";
  "The rise follows the share of the way through raised to power: 1 rises evenly, 2 rises slowly then steeply. A recording's own fade usually takes away little at first and much at the end, so a power near 2 follows it and cancels it, where an even rise overshoots in the middle and falls short at the end - which the human heard as the volume not being smooth.";
  "The times are measured against the file given, not against the whole recording.";
  arguments_assert(arguments, 6);
  let span = "(" + seconds_to + "-" + seconds_from + ")";
  let ramp = "min(1,max(0,(t-" + seconds_from + ")/" + span + "))";
  let curve = "pow(" + ramp + "," + power + ")";
  let filter = "volume='pow(10," + decibels + "*" + curve + "/20)':eval=frame";
  let words = [
    "-y",
    "-loglevel",
    "error",
    "-i",
    path_audio,
    "-af",
    filter,
    path_output,
  ];
  let ran = await ffmpeg_words_run(words);
  return ran;
}
