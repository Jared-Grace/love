import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_audio_joined_chapters_words(bible_folder, words) {
  "$plain bible_folder";
  "The chapters of a recorded bible, each with its piece numbers, holding one of these joined words where the reader now reads it from what is written down; an empty list means every such joined word.";
  "It reads only. The line beside each sound keeps its hyphen, so a chapter recorded again is still named; ask once, before recording.";
  arguments_assert(arguments, 2);
  let f = bible_audio_root_folder();
  let root = path_join([f, bible_folder]);
  let args = {
    root,
    words,
  };
  let reported = await py_script_speech_json_report(
    fn_name("bible_audio_joined_chapters"),
    args,
  );
  return reported;
}
