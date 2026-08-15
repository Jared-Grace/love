import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { assert_json } from "./assert_json.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { folder_machine_temp } from "./folder_machine_temp.mjs";
import { path_join } from "./path_join.mjs";
import { uuid } from "./uuid.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_head_tracked } from "./git_head_tracked.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { git_folder_commits_count } from "./git_folder_commits_count.mjs";
export async function git_history_paths_drop_rehearse(folder, paths_text) {
  "$plain folder";
  "$plain paths_text";
  "Does the whole of a history rewrite on a copy nobody is using, and proves the result before anybody is asked to accept it. Changes nothing about the repository it was pointed at and sends nothing anywhere.";
  "The safe half of the job, and the half worth having on its own. Everything that can be checked is checked here - that the paths are real candidates, that the present survived untouched, that the fall in commits is small enough to look at - so what is left to do afterwards is only the accepting.";
  "A path the current commit still tracks is refused rather than dropped, because dropping it would take a live file out of the present, and the size of what it would save is exactly what makes that look like a good idea.";
  "Which paths belong here is not decided here and cannot be. A folder can look like something built and be the source it was built from - stripping one such folder in rehearsal pruned fifty-three thousand commits and looked like the biggest win on offer. So the list arrives from a human who knows what each path was, and this only refuses the ones it can prove are wrong.";
  "The copy is made on the machine's own scratch folder and never inside the repository. Making it inside was how four copies of this repository once ended up committed into it, and they were the largest thing in its history for the better part of a year.";
  arguments_assert(arguments, 2);
  let paths = text_split_comma(paths_text);
  let none = list_empty_is(paths);
  assert_json(not(none), {
    hint: "no paths were named to drop from the history — would you like to pass them as one comma-joined word?",
    paths_text,
  });
  let tracked = await git_head_tracked(folder);
  function tracked_still_is(path) {
    let alive = tracked.paths[path];
    return alive;
  }
  let alive = list_filter(paths, tracked_still_is);
  list_empty_is_assert_json(alive, {
    hint: "these paths are still tracked by the current commit, so dropping them would take live files out of the present — would you like to name only paths the present no longer holds?",
    alive,
  });
  let tree_before = await git_folder_head_tree(folder);
  let commits_before = await git_folder_commits_count(folder);
  let name = await uuid();
  let clone_folder = path_join([await folder_machine_temp(), name]);
  await git_folder_run(folder, [
    "clone",
    "--no-hardlinks",
    "--bare",
    folder,
    clone_folder,
  ]);
  let asked = ["filter-repo", "--force", "--invert-paths"];
  for (let path of paths) {
    list_add(asked, "--path");
    list_add(asked, path);
  }
  await git_folder_run(clone_folder, asked);
  let tree_after = await git_folder_head_tree(clone_folder);
  equal_assert_json(tree_after, tree_before, {
    hint: "the rewrite changed what the current commit holds, so one of the named paths is still live somewhere — the copy is left in place to look at, and nothing has been sent anywhere",
    clone_folder,
    paths,
  });
  let commits_after = await git_folder_commits_count(clone_folder);
  let r = {
    clone_folder,
    paths,
    tree: tree_before,
    commits_before,
    commits_after,
  };
  return r;
}
