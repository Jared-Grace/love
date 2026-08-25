import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function commit_edit_changed_lines(commit) {
  "Every line one commit put into the code or took out of it, with the headings that name the files left out.";
  "IT IS THE WALK TWO READINGS SHARE. Naming what an edit was and counting what kind of lines it touched both start by asking git for the difference and throwing away everything that is not a change, and that opening was written out twice. The two differ in what they do with the lines, not in how they get them.";
  "ONLY THE CODE IS ASKED FOR. Prose written as data, sermon text and pictures are hand-made by their nature, so a reading that counted them would say the vocabulary of commands has a gap where it never had one.";
  "NO CONTEXT IS ASKED FOR EITHER. What comes back is the changed lines alone, because every reader of this counts kinds of change and a line that did not change is not one.";
  arguments_assert(arguments, 1);
  let folder = folder_current_absolute();
  let words = ["show", commit, "--format=", "--unified=0", "--", "js"];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let changed = [];
  for (let line of lines) {
    let heading = text_starts_with(line, "+++");
    if (heading) {
      continue;
    }
    let heading2 = text_starts_with(line, "---");
    if (heading2) {
      continue;
    }
    let put_in = text_starts_with(line, "+");
    let taken_out = text_starts_with(line, "-");
    let touched = put_in || taken_out;
    if (not(touched)) {
      continue;
    }
    list_add(changed, line);
  }
  return changed;
}
