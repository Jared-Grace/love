import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_file_js_parse_at_or_null } from "./git_file_js_parse_at_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_imports_relative_paths } from "./js_imports_relative_paths.mjs";
import { js_imports_dynamic_relative_paths } from "./js_imports_dynamic_relative_paths.mjs";
import { list_add } from "./list_add.mjs";
export async function git_commit_file_imports_relative(commit, path) {
  "$plain commit";
  "$plain path";
  "Every file one file reached for as it stood at one commit, named by where it sits - the ones written at the top and the ones reached for part way down a body alike";
  "Both kinds, because a caller asking what a file depends on wants what it depends on, and which syntax was used to say so is not a difference that caller can act on. Asking the two readers separately is how the dynamic half went unwatched for as long as it did.";
  "A file the history has not got, or one that will not parse, answers with nothing rather than refusing. A sweep over hundreds of commits meets both and wants the same thing from each - leave this one out and go on.";
  arguments_assert(arguments, 2);
  let here = folder_current_absolute();
  let ast = await git_file_js_parse_at_or_null(here, commit, path);
  let unreadable = null_is(ast);
  if (unreadable) {
    let r = [];
    return r;
  }
  let declared = js_imports_relative_paths(ast);
  let reached = js_imports_dynamic_relative_paths(ast);
  let paths = [];
  for (let declared_path of declared) {
    list_add(paths, declared_path);
  }
  for (let reached_path of reached) {
    list_add(paths, reached_path);
  }
  return paths;
}
