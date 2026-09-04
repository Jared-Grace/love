import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_root_folder } from "./bible_audio_root_folder.mjs";
import { path_join } from "./path_join.mjs";
import { bible_audio_sounded_out_door_commit } from "./bible_audio_sounded_out_door_commit.mjs";
import { git_commit_second } from "./git_commit_second.mjs";
import { py_script_speech_json_report } from "./py_script_speech_json_report.mjs";
export async function bible_audio_repair_queue(bible_folder) {
  "$plain bible_folder";
  "The chapters of a recorded bible whose sound needs making again, because it was spoken before the reading could sound out a name it does not know and the reading of that day would have dropped a word of them.";
  "★ IT FINDS ITS OWN SET, WHICH IS THE WHOLE REASON IT IS A COMMAND AND NOT A LIST. A pass over hundreds of chapters does not fit in one night, so the same question gets asked again the next night and the night after. A list handed in would name chapters already done and spend a night doing them twice; asked afresh, a chapter that has been recorded again holds newer sound and simply is not in the answer any more.";
  "★ BOTH HALVES ARE NEEDED AND NEITHER ALONE NAMES THE RIGHT SET. Every chapter recorded before the door could be at fault, but most hold no hard name and are perfectly good - measured on the first of September 2026, that was 738 chapters against 508 truly wanting doing. And the dropped words alone cannot tell a chapter already put right from one nobody has touched, because the check reads the words rather than the sound, and the words read clean now whatever was spoken.";
  "★ THE READING IT ASKS ABOUT IS DELIBERATELY THE OLD ONE. Asked with the reading as it is, this comes back empty for every chapter in the repo, including the ones whose sound is silent where a name should be. The fault is in the recording, and the only way left to name it is to put the question the way it was put on the day.";
  arguments_assert(arguments, 1);
  let root = bible_audio_root_folder();
  let folder = path_join([root, bible_folder]);
  let commit = bible_audio_sounded_out_door_commit();
  let before_second = await git_commit_second(commit);
  let script_name = fn_name("bible_audio_repair_queue");
  let args = {
    root: folder,
    before_second,
  };
  let reported = await py_script_speech_json_report(script_name, args);
  return reported;
}
