import { daemon_reachable_paths } from "./daemon_reachable_paths.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { integer_to_try } from "./integer_to_try.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { text_trim } from "./text_trim.mjs";
export async function daemon_code_commit_last_at(f_name) {
  "The second of the newest commit to touch anything this daemon's code is made of.";
  "One question naming every file rather than one question per file, because a daemon reaches several hundred of them and only the newest answer is wanted. Git is asked for the single newest commit across the whole list, so the reading costs the same whether the daemon is made of ten files or a thousand.";
  "Counted in seconds, the same as when the daemon started, so the two can be held against each other as numbers.";
  let paths = await daemon_reachable_paths(f_name);
  let command_words = ["log", "-1", "--format=%ct", "--"];
  list_add_multiple(command_words, paths);
  let folder = folder_current_absolute();
  let printed = await git_folder_run(folder, command_words);
  let trimmed = text_trim(printed);
  let at = integer_to_try(trimmed);
  return at;
}
