import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { ai_log_path } from "./ai_log_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { files_to_commit_folder } from "./files_to_commit_folder.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function folder_gitignore_absolute_gate_run() {
  "Fail if any of the local records is kept at a place that depends on where the process happens to be standing. Read-only.";
  "A path spelled from the root means the same folder to every process here. A path spelled as a bare name means a different folder to each of them, and nothing says so - the folder is simply made, beside whoever asked, and read back empty by everybody else. That is how one folder became five, holding a second copy of the log and a second compiled cache, two of them committed into a repo whose ignore rules had never heard of them.";
  "One of the five was worse than waste. The note saying which files a commit is for is written by the command that changed them and read by the commit afterwards, so under two different folders it is simply not there, and a commit that finds no note files nothing and reports success.";
  "Asked of the real places rather than of a name made up here, so what is checked is what is actually used. Starting with this repo's own folder is the whole of the test: a path that does is spelled from the root by construction, and is this repo's rather than somewhere else's.";
  "The folder is found from this code's own place on disk, so the frozen copy the gates run inside answers with its own folder and passes on its own terms - which is right, because a copy of the repo is still the repo, and its records are its own.";
  arguments_assert(arguments, 0);
  let repo = folder_repo_love();
  let folder = files_to_commit_folder();
  let f_path2 = ai_log_path();
  let kept = [folder, f_path2];
  function lambda(f_path) {
    let inside = text_starts_with(f_path, repo);
    let outside = not(inside);
    return outside;
  }
  let stray = list_filter(kept, lambda);
  list_empty_is_assert_json(stray, {
    hint: text_combine_multiple([
      "these are kept somewhere that moves with the process - spell them from the root, the way ",
      fn_name("folder_gitignore_join"),
      " does",
    ]),
    repo,
    stray,
  });
  let r = {
    checked: list_size(kept),
    repo,
  };
  return r;
}
