import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function song_pronunciation_bible(words) {
  "$plain words";
  ("How the audio Bible says each name named, spelled in plain letters ready to file in ",
    fn_name("song_pronunciations"),
    ", beside the sound it was spelled from.");
  ("★ THE DECISION IS THE AUDIO BIBLE'S, READ AND NEVER MADE AGAIN. The sound is asked of the same answers the reader speaks from, the hand-written ones winning over BibleVox, so a spelling filed from here says the name the way the recordings do. Only the writing differs: the reader takes sound symbols, a song generator takes letters.");
  ("★ IT ANSWERS AND DOES NOT FILE. A spelling worked out from sounds by rule is a guess about how a generator will read letters, so each one is filed by hand after a look, one name at a time, and a song coming back wrong is still what decides.");
  ("A word the audio Bible holds no saying for comes back with both null; a sound using a symbol the spelling key does not know comes back with that symbol as unknown and no spelling.");
  ("The words arrive as one comma-joined word, as every list does on a command line.");
  arguments_assert(arguments, 1);
  let asked = text_split_comma_or_empty(words);
  let args = {
    words: asked,
  };
  let reported = await py_script_speech_json_report(
    fn_name("song_pronunciation_bible"),
    args,
  );
  return reported;
}
