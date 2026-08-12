import { repos_beside_paths } from "./repos_beside_paths.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { git_folder_head_commit } from "./git_folder_head_commit.mjs";
import { git_files_uncommitted_folder } from "./git_files_uncommitted_folder.mjs";
import { git_folder_is } from "./git_folder_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function qa_commit_beside_heads() {
  arguments_assert(arguments, 0);
  ("Which commit each neighbouring repo is standing on, together with the ones that cannot say.");
  ("A run of the gates does not see one repo. A name in another repo is found by stepping out of this folder and back down into a neighbour by name, and the sweeps that ask after every function walk the neighbours too - so what a run actually saw was this repo's commit and every neighbour's together. An answer filed under this repo's commit alone is filed under part of its own question.");
  ("Two things stop a neighbour saying which contents it holds, and both end the same way. One has work nobody has committed, so the commit it stands on names contents it does not have. The other is not a repository at all, so there is no name to give: on the day this was written that was p_np, a folder of two files sitting beside the repos, frozen into every copy and walked by every sweep, with no history of any kind.");
  ("Neither is treated as a small matter. Having no key costs one run of the gates; a key that identifies the wrong contents costs a wrong answer, quietly, to every asker afterwards - which is the whole of what a shared record is for. So the heads are answered only when every neighbour could say, and the ones that could not are named, because which neighbour it was is the difference between a minute's work and a design question.");
  let paths = await repos_beside_paths();
  let names = properties_get(paths);
  let heads = {};
  let silent = [];
  for (let name of names) {
    let folder = property_get(paths, name);
    let repository = await git_folder_is(folder);
    if (repository) {
      let waiting = await git_files_uncommitted_folder(folder);
      let dirty = list_empty_not_is(waiting);
      if (dirty) {
        list_add(silent, {
          name,
          why: "has work nobody has committed, so the commit it stands on names contents it does not have",
        });
        continue;
      }
      let commit = await git_folder_head_commit(folder);
      heads[name] = commit;
      continue;
    }
    list_add(silent, {
      name,
      why: "is not a repository, so it has no name for the contents it holds - and it is frozen into every copy and walked by every sweep all the same",
    });
  }
  let known = list_empty_not_is(silent);
  let r = {
    heads,
    silent,
    keyable: known ? false : true,
  };
  return r;
}
