import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_audio_fade_out_seconds } from "./lyric_video_audio_fade_out_seconds.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function lyric_video_audio_cut_end(
  path_audio,
  seconds_from,
  seconds_to,
  path_output,
) {
  "$plain path_audio";
  "$plain seconds_from";
  "$plain seconds_to";
  "$plain path_output";
  "Writes a copy of a song's recording that begins seconds_from in and ends at seconds_to, fading out over the last moments before the end, for a lyric video that should stop soon after the last sung word instead of playing a long closing run.";
  "Both times are measured against the whole recording, as every time in a document is. The film's length is asked of the copy, so ending the sound here also ends the film.";
  arguments_assert(arguments, 4);
  let fade = lyric_video_audio_fade_out_seconds();
  let length = subtract(seconds_to, seconds_from);
  let fade_start = subtract(length, fade);
  let v = String(seconds_from);
  let v2 = String(length);
  let words = [
    "-y",
    "-loglevel",
    "error",
    "-ss",
    v,
    "-t",
    v2,
    "-i",
    path_audio,
    "-af",
    "afade=t=out:st=" + fade_start + ":d=" + fade,
    path_output,
  ];
  let ran = await ffmpeg_words_run(words);
  return ran;
}
