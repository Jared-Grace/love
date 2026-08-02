import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { path_directory } from "./path_directory.mjs";
import { repos_names } from "./repos_names.mjs";
import { repo_current_name } from "./repo_current_name.mjs";
import { path_join } from "./path_join.mjs";
import { property_set } from "./property_set.mjs";
import { equal } from "./equal.mjs";
export async function repos_beside_paths() {
  arguments_assert(arguments, 0);
  ("Where each neighbouring repo lives, by name - every repo standing beside this one, and never this one itself.");
  ("A name in another repo is found by stepping out of this folder and back down into a neighbour by name, so anything that has to stand in for the neighbours needs the same list of them and the same places they sit. Two callers were each walking out, asking who is there, and dropping themselves from the answer, which is four lines of agreement about where a neighbour is that neither of them is really about.");
  ("This one is left out on purpose rather than by accident: a copy of this repo already exists wherever these are being put, so putting it in again would be putting a folder inside itself.");
  let here = folder_current_absolute();
  let beside = path_directory(here);
  let names = await repos_names();
  let mine = repo_current_name();
  let paths = {};
  for (let name of names) {
    let own = equal(name, mine);
    if (own) {
      continue;
    }
    let live = path_join([beside, name]);
    property_set(paths, name, live);
  }
  return paths;
}
