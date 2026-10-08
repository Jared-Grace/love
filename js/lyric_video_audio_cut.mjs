import { arguments_assert } from "./arguments_assert.mjs";
import { ffmpeg_words_run } from "./ffmpeg_words_run.mjs";
export async function lyric_video_audio_cut(path_audio, seconds, path_output) {
  "$plain path_audio";
  "$plain seconds";
  "$plain path_output";
  "Writes a copy of a song's recording that begins the given number of seconds in, for a lyric video that should start at the singing rather than at the instrumental opening.";
  "★ WHY A SHORT FILM STARTS AT THE VOICE. Told 2026-10-08: the later songs were made to come in at the breath of the first vocals, to save listeners' time and not lose those turned off by an intro, and these films are YouTube Shorts, where the decision to stay is made in the first second. The recording itself is left whole; only the film is cut.";
  "The copy is written as wav so nothing is lost before the film's own encoding; the fade the film puts on its opening is what keeps the cut from clicking.";
  arguments_assert(arguments, 3);
  let v = String(seconds);
  let words = [
    "-y",
    "-loglevel",
    "error",
    "-ss",
    v,
    "-i",
    path_audio,
    path_output,
  ];
  let ran = await ffmpeg_words_run(words);
  return ran;
}
