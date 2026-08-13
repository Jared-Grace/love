import { equal } from "./equal.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_text_empty_not_is } from "./list_filter_text_empty_not_is.mjs";
import { list_single_message } from "./list_single_message.mjs";
import { path_base } from "./path_base.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
export async function git_folder_commit_file_path(folder, commit, file_name) {
  "$plain folder";
  "$plain commit";
  "$plain file_name";
  "Where a file of a given name sat at one commit, asked of the repository rather than typed out.";
  "A folder layout is a thing that moves. The same file lived under one folder for a year and under another one afterwards, and a path written down by hand goes on naming the older one long after it has emptied - so the question asked here is the name, which did not move, and the answer is whatever the commit itself says.";
  "Exactly one file may wear the name. Two would make the answer a guess, and none means the name is being asked of a commit that never had it.";
  let listed = await git_folder_run(folder, [
    "ls-tree",
    "-r",
    "--name-only",
    commit,
  ]);
  let lines = text_split_newline(listed);
  let paths = list_filter_text_empty_not_is(lines);
  function lambda(file_path) {
    let base = path_base(file_path);
    let named = equal(base, file_name);
    return named;
  }
  let named_paths = list_filter(paths, lambda);
  let only = list_single_message(named_paths, {
    commit,
    file_name,
    named_paths,
    hint: "one file of this name was looked for in this commit",
  });
  return only;
}
