import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_audio_joined_chapters(bible_folder) {
  "$plain bible_folder";
  "The chapters of a recorded bible holding a joined name the reader now reads part by part, so their recording says it the old, guessed way.";
  "It reads only. The line beside each sound keeps its hyphen, so a chapter recorded again is still named; ask once, before recording.";
  arguments_assert(arguments, 1);
  let f = bible_audio_root_folder();
  let root = path_join([f, bible_folder]);
  let args = {
    root,
  };
  let reported = await py_script_speech_json_report(
    fn_name("bible_audio_joined_chapters"),
    args,
  );
  return reported;
}
