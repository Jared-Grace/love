import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma_or_empty } from "./text_split_comma_or_empty.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function speech_words_said(words, voice) {
  "$plain words";
  "$plain voice";
  "The sounds the reader would say for each word named, said on its own in this voice, asked of the same engine and the same name list the word recordings are made with, without making a recording.";
  "Each word is asked exactly as spelled, so a name can be asked in small letters and with a capital side by side to see whether the letters' case changes what is said.";
  "The words arrive as one comma-joined word, as every list does on a command line.";
  arguments_assert(arguments, 2);
  let asked = text_split_comma_or_empty(words);
  let args = {
    words: asked,
    voice,
  };
  let reported = await py_script_speech_json_report(
    fn_name("speech_words_said"),
    args,
  );
  return reported;
}
