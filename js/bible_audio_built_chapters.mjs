import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_audio_built_chapters(bible_folder) {
  "$plain bible_folder";
  "The chapters of a recorded bible, each with its piece numbers, where a guessed word the reader now builds from a known word plus an ending makes the piece sound different from its recording; also every word built, with its sound.";
  "It reads only. A piece recorded again is still named, because the sound before is worked out fresh; ask once, before recording.";
  arguments_assert(arguments, 1);
  let f = bible_audio_root_folder();
  let root = path_join([f, bible_folder]);
  let args = {
    root,
  };
  let reported = await py_script_speech_json_report(
    fn_name("bible_audio_built_chapters"),
    args,
  );
  return reported;
}
