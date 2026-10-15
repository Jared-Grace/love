import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_audio_fade_out_seconds() {
  "How long the song takes to fall silent at the end of a video whose document says where the sound ends.";
  "★ THE FADE ENDS AT THE CUT AND STARTS AFTER THE LAST SUNG WORD. Told 2026-10-15, choosing to end Psalm 127 song 2 before its closing vocal run: the goal is that the final word is still heard at full volume. So the end of the sound is set at least this long after the last word ends, and nothing a listener can name is ever held quiet.";
  "Long enough that the music is let down rather than stopped, short enough that a Short gets back to its first line soon.";
  arguments_assert(arguments, 0);
  let seconds = 1.5;
  return seconds;
}
