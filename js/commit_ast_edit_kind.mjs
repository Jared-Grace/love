import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_commit_files } from "./git_commit_files.mjs";
import { git_file_js_parse_at_or_null } from "./git_file_js_parse_at_or_null.mjs";
import { js_flo_body_or_null } from "./js_flo_body_or_null.mjs";
import { js_statements_change_named } from "./js_statements_change_named.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_combine } from "./text_combine.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
import { list_size } from "./list_size.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function commit_ast_edit_kind(commit) {
  "What one commit did to the code, read by parsing the file on both sides of it and comparing the two, rather than by counting the lines the diff printed.";
  "THE OLDER READING OF THIS QUESTION COUNTS DIFF LINES, and the largest bucket it can offer is several lines of code - which names no command anybody could go and write. A tree knows what a text diff cannot: that three statements swapped places, that one was put in the middle, that everything survived. Those are the names a missing transform can be specified from.";
  "ONLY A COMMIT THAT REACHED ONE CODE FILE IS ANSWERED. A commit touching several is nearly always the sweeping commit gathering up whatever was in the folder at that moment, so it is a batch rather than an edit, and there is no single before and after to compare.";
  "EVERY WAY OF FAILING IS ANSWERED IN WORDS RATHER THAN BY THROWING, because a sweep of hundreds of commits meets a file that did not exist yet, a file a rename carried elsewhere, and a file written before this repo kept one function to a file - and it wants to count each of those and go on.";
  arguments_assert(arguments, 1);
  let folder = folder_current_absolute();
  let touched = await git_commit_files(commit);
  let paths = property_get(touched, "files");
  function code_is(touched_path) {
    let code = text_ends_with(touched_path, ".mjs");
    return code;
  }
  let code_paths = list_filter(paths, code_is);
  let left = list_size(code_paths);
  let alone = equal(left, 1);
  if (not(alone)) {
    let r = "not one code file";
    return r;
  }
  let path = list_first(code_paths);
  let parent = text_combine(commit, "~1");
  let ast_before = await git_file_js_parse_at_or_null(folder, parent, path);
  let ast_after = await git_file_js_parse_at_or_null(folder, commit, path);
  let read_both = null_not_is(ast_before) && null_not_is(ast_after);
  if (not(read_both)) {
    let r2 = "the file would not parse at one end";
    return r2;
  }
  let before = js_flo_body_or_null(ast_before);
  let after = js_flo_body_or_null(ast_after);
  let found_both = null_not_is(before) && null_not_is(after);
  if (not(found_both)) {
    let r3 = "no exported function at one end";
    return r3;
  }
  let named = js_statements_change_named(before, after);
  return named;
}
