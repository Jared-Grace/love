import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_set } from "./property_set.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function bible_audio_heteronyms_said_write(bible_folder) {
  "$plain bible_folder";
  "Writes how each word with two different sayings is said on its own button: the saying a recorded bible uses for it most, counted by letting the reader say every verse holding it. Returns the counts it chose from.";
  "★ THE BIBLE CHOOSES, NOBODY PICKS. A word alone has no sentence for the reader to guess its meaning from, and measured 2026-11-27 the guess said 'sows' as the pig and 'content' as a table of contents; the verses say which meaning this bible uses.";
  "The file is read by the speech engine for buttons only; a verse still chooses by its own sentence. Re-running it after a bible changes rewrites the file whole.";
  arguments_assert(arguments, 1);
  let f = bible_audio_root_folder();
  let root = path_join([f, bible_folder]);
  let args = {
    root,
  };
  let reported = await py_script_speech_json_report(
    fn_name("bible_audio_heteronyms_said"),
    args,
  );
  let words = property_get(reported, "words");
  let said = {};
  for (let word of properties_get(words)) {
    let counted = property_get(words, word);
    let value = property_get(counted, "said");
    property_set(said, word, value);
  }
  await file_overwrite_json(
    "./data/given/speech_pronunciations_alone_bible.json",
    said,
  );
  return words;
}
