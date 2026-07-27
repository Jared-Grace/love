import { kinds_all_is } from "./kinds_all_is.mjs";
import { commit_edit_callee_swap_is } from "./commit_edit_callee_swap_is.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
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
  let only_import = kinds_all_is(kinds, "import");
  if (only_import) {
    let r = "imports only (the canonicalizing pass)";
    return r;
  }
  let only_comment = kinds_all_is(kinds, "comment");
  if (only_comment) {
    let r2 = "comment prose only";
    return r2;
  }
  let code = [];
  for (let line of changed) {
    let kind = diff_line_kind(line);
    let real = equal(kind, "code");
    if (real) {
      list_add(code, line);
    }
  }
  let size = list_size(code);
  let none = equal(size, 0);
  if (none) {
    let r3 = "comment and imports only";
    return r3;
  }
  let pair = equal(size, 2);
  if (pair) {
    let swapped = commit_edit_callee_swap_is(code);
    if (swapped) {
      let r4 = "one call, different function put in its place";
      return r4;
    }
    let r5 = "one line of code replaced";
    return r5;
  }
  let single = equal(size, 1);
  if (single) {
    let first = list_first(code);
    let put_in = text_starts_with(first, "+");
    if (put_in) {
      let r6 = "one line of code added";
      return r6;
    }
    let r7 = "one line of code removed";
    return r7;
  }
  let r8 = "several lines of code";
  return r8;
}
