import { list_skip } from "./list_skip.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { git_object_name_path } from "./git_object_name_path.mjs";
export async function git_folder_worktrees(folder) {
  "$plain folder";
  "The other copies of this repository laid out elsewhere on the machine, not counting the one being asked.";
  "A rewrite has to know about these because each of them stands on a commit, and a commit something stands on cannot be let go of. Three of them were what kept a finished rewrite from giving any space back on 2026-08-15 - the history was already replaced, and the old one stayed reachable through copies nobody was looking at. They come back on their own afterwards, so the answer here is a list to take away rather than anything to preserve.";
  "Git names the copy being asked first and the rest after it, so dropping the first is what leaves the others.";
  arguments_assert(arguments, 1);
  let printed = await git_folder_run(folder, [
    "worktree",
    "list",
    "--porcelain",
  ]);
  let lines = text_lines_working(printed);
  function worktree_line_is(line) {
    let named = text_starts_with(line, "worktree ");
    return named;
  }
  let named_lines = list_filter(lines, worktree_line_is);
  function worktree_line_folder(line) {
    let entry = git_object_name_path(line);
    let r = entry.path;
    return r;
  }
  let folders = list_map(named_lines, worktree_line_folder);
  let others = list_skip(folders, 1);
  return others;
}
