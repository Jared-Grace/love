import { repos_beside_paths } from "./repos_beside_paths.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_files_uncommitted_folder } from "./git_files_uncommitted_folder.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function qa_commit_beside_heads() {
  arguments_assert(arguments, 0);
  ("Which commit each neighbouring repo is standing on, or nothing at all when any of them has work nobody has committed.");
  ("A run of the gates does not see one repo. A name in another repo is found by stepping out of this folder and back down into a neighbour by name, and the sweeps that ask after every function walk the neighbours too - so what a run actually saw was this repo's commit and every neighbour's together. An answer filed under this repo's commit alone is filed under part of its own question.");
  ("Nothing is answered when a neighbour has uncommitted work, and that is the whole of the care taken here. A neighbour standing on a commit with edits on top of it is not that commit, so its name would identify contents it does not have - and the answer built on it would be handed to the next asker as though it were about their contents too. Having no key at all costs a run of the gates; a wrong key costs a wrong answer, quietly, to everybody afterwards.");
  let paths = await repos_beside_paths();
  let names = properties_get(paths);
  let heads = {};
  for (let name of names) {
    let folder = property_get(paths, name);
    let waiting = await git_files_uncommitted_folder(folder);
    let dirty = list_empty_not_is(waiting);
    if (dirty) {
      return null;
    }
    let commit = await git_folder_head_commit(folder);
    heads[name] = commit;
  }
  return heads;
}
