import { commit_edit_diff_kind_named } from "./commit_edit_diff_kind_named.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function commit_edit_kind(commit) {
  "What one hand-made commit actually changed, named as the kind of edit it was";
  "The count of hand-made commits on its own overstates the gap badly. Half of them turn out to be a comment reworded or a colour picked, which no command was ever going to make, and others are the canonicalizing pass's own import repair wearing a hand-made label. Naming the kind is what turns a raw count into the number that matters - the edits a missing command would actually have made";
  let folder = folder_current_absolute();
  let words = ["show", commit, "--format=", "--unified=0", "--", "js"];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let changed = [];
  for (let line of lines) {
    let heading = text_starts_with(line, "+++");
    let heading2 = text_starts_with(line, "---");
    if (heading) {
      continue;
    }
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
  let kinds = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    list_add(kinds, kind);
  }
  let r = commit_edit_diff_kind_named(kinds, changed);
  return r;
}
