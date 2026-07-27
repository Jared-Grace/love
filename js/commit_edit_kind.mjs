import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { diff_line_kind } from "./diff_line_kind.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_index_of_from } from "./text_index_of_from.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
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
    return "imports only (the canonicalizing pass)";
  }
  let only_comment = kinds_all_is(kinds, "comment");
  if (only_comment) {
    return "comment prose only";
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
    return "comment and imports only";
  }
  let pair = equal(size, 2);
  if (pair) {
    let swapped = commit_edit_callee_swap_is(code);
    if (swapped) {
      return "one call, different function put in its place";
    }
    return "one line of code replaced";
  }
  let single = equal(size, 1);
  if (single) {
    let first = list_first(code);
    let put_in = text_starts_with(first, "+");
    if (put_in) {
      return "one line of code added";
    }
    return "one line of code removed";
  }
  return "several lines of code";
}
function kinds_all_is(kinds, wanted) {
  let size = list_size(kinds);
  let empty = equal(size, 0);
  if (empty) {
    return false;
  }
  for (let kind of kinds) {
    let same = equal(kind, wanted);
    if (not(same)) {
      return false;
    }
  }
  return true;
}
function commit_edit_callee_swap_is(code) {
  "Two lines that read the same from their opening bracket onward, and differently before it, are one call with a different function put in its place - the arguments untouched";
  let taken_out = null;
  let put_in = null;
  for (let line of code) {
    let added = text_starts_with(line, "+");
    if (added) {
      put_in = line;
      continue;
    }
    taken_out = line;
  }
  let missing = equal(put_in, null) || equal(taken_out, null);
  if (missing) {
    return false;
  }
  let bracket = "(";
  let has_out = text_includes(taken_out, bracket);
  let has_in = text_includes(put_in, bracket);
  let callable = has_out && has_in;
  if (not(callable)) {
    return false;
  }
  let at_out = text_index_of_from(taken_out, bracket, 0);
  let at_in = text_index_of_from(put_in, bracket, 0);
  let tail_out = text_slice_from(taken_out, at_out);
  let tail_in = text_slice_from(put_in, at_in);
  let same_arguments = equal(tail_out, tail_in);
  return same_arguments;
}
