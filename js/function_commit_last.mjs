import { path_join } from "./path_join.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { property_get } from "./property_get.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_get } from "./list_get.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_join } from "./list_join.mjs";
import { not } from "./not.mjs";
export async function function_commit_last(f_name) {
  "The last commit to touch a function's file, as a short name, how long ago, and what the message said";
  "A gate says which functions are wrong. It cannot say whose work that is, and with several of us editing one folder the answer is nearly always somebody else's half-finished migration - so the reader goes looking for a fault of their own that is not there. The commit is the missing half of the sentence.";
  "The fields are joined by a character that cannot appear in a command, so asking for them costs one question rather than one question each, and the message is put back together from whatever is left after the first two.";
  let search = await function_name_to_path_search(f_name);
  let exists = property_get(search, "exists");
  if (not(exists)) {
    let unknown = null;
    return unknown;
  }
  ("the repo is asked where it lives and the path is spelled relative to it, because the searched path is spelled from the folder the repos sit in and git refuses a path outside the repo it is standing in");
  let repo_name = property_get(search, "repo_name");
  let here = folder_current_absolute();
  let folder = path_join([here, "..", repo_name]);
  let f_path = function_name_to_path_relative(f_name);
  let asked = text_combine_multiple(["log -1 --format=%h/%ar/%s -- ", f_path]);
  let printed = await command_line_git_folder(folder, asked);
  let trimmed = text_trim(printed);
  let empty = text_empty_is(trimmed);
  if (empty) {
    let never = null;
    return never;
  }
  let parts = text_split(trimmed, "/");
  let commit = list_first(parts);
  let when = list_get(parts, 1);
  let said = list_slice(parts, 2);
  let subject = list_join(said, "/");
  let last = {
    f_name,
    commit,
    when,
    subject,
  };
  return last;
}
