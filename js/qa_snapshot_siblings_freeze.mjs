import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { path_directory } from "./path_directory.mjs";
import { repos_names } from "./repos_names.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { path_join } from "./path_join.mjs";
import { qa_tree_names_skipped } from "./qa_tree_names_skipped.mjs";
import { qa_tree_folder_freeze } from "./qa_tree_folder_freeze.mjs";
import { qa_snapshot_link } from "./qa_snapshot_link.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { equal } from "./equal.mjs";
export async function qa_snapshot_siblings_freeze(repos) {
  arguments_assert(arguments, 1);
  ("put a frozen copy of every neighbouring repo beside the frozen copy of this one");
  ("a name in another repo is found by stepping out of this folder and back down into a neighbour by name, so a copy sitting on its own resolves nothing - it has to have neighbours the same way.");
  ("they used to be pointers to the living repos, on the reasoning that no question asked here is about their contents. That reasoning is wrong, and it is what made the whole gate flap. Asking after every function in the repo does not stop at this repo: the sweeps over shadowing, over folding, over duplicate names all walk the neighbours too. So a person saving a file in a neighbour while the gate ran was reaching straight through the freeze, and the gate would go red and then be quiet the moment it was asked again - which is exactly the pair of answers freezing exists to make impossible.");
  ("cheap enough not to be a trade. Left of what is skipped, the neighbours together come to about a megabyte against this repo's hundred and sixty, so freezing them costs under a percent of a copy that was being taken anyway.");
  ("what is installed is still pointed at rather than copied, the same way this repo's is. Nothing asked here is about the contents of an installed package, and those are the folders that would actually cost something.");
  let here = folder_current_absolute();
  let beside = path_directory(here);
  let names = await repos_names();
  let mine = repo_current_name();
  let skipped = qa_tree_names_skipped();
  for (let name of names) {
    if (equal(name, mine)) {
      continue;
    }
    let live = path_join([beside, name]);
    let frozen = path_join([repos, name]);
    await qa_tree_folder_freeze(live, frozen, skipped);
    let installed = path_join([live, "node_modules"]);
    let there = await folder_exists(installed);
    if (there) {
      let link = path_join([frozen, "node_modules"]);
      await qa_snapshot_link(installed, link);
    }
  }
}
