import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
export async function git_folder_ignored_tracked(folder) {
  "$plain folder";
  "Every file this repository still records that its own ignore rules now say it should not be recording.";
  "A rule added to the ignore list only ever governs files git has not met yet. Anything already recorded goes on being recorded, silently, for as long as the repository lasts - so a rule written to stop a folder being kept does not stop it, and the folder keeps growing exactly as before while the rule sitting above it reads as though it had been dealt with.";
  "Asked of git rather than worked out from the rules, because the rules are a language with negations and anchors and folder-wide sweeps in it, and a second reader of them would answer differently from the first at exactly the cases that matter.";
  arguments_assert(arguments, 1);
  let printed = await git_folder_run(folder, [
    "ls-files",
    "--cached",
    "--ignored",
    "--exclude-standard",
  ]);
  let lines = text_split_newline(printed);
  let filled = list_filter_text_empty_not_is(lines);
  return filled;
}
