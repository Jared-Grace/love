import { git_folder_is } from "./git_folder_is.mjs";
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
  ("A folder beside the repos that is not a repository is left out too, and git is asked rather than a list being kept here. Anything anybody leaves in that folder was otherwise frozen into every copy and walked by every sweep that asks after every name, purely for sitting there.");
  ("What that cost is not a slow sweep - it is that a run of the gates could not say which contents it had looked at. The answer to a run is worth keeping only against a name for what it saw, and a folder with no history has no such name to give, so one of them left every answer unkeepable. On the day this was written that was p_np, two files with no history of any kind.");
  ("Asked rather than listed, because a typed list of what to leave out is right on the day it is written and quietly wrong afterwards: it goes on naming what it named while the folders beside it change. The question git is asked is the same question every time and is about the folder that is actually there.");
  ("Where this is asked is what makes asking git safe. Everything here is about the living folders - which to copy, and which can name what they hold - and inside a frozen copy there is no history at all, so the same question asked in there would answer no about every neighbour and quietly empty the sweeps. Nothing in a copy asks this; the copy resolves a neighbour by its folder being there.");
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
    let repository = await git_folder_is(live);
    if (repository) {
      property_set(paths, name, live);
    }
  }
  return paths;
}
