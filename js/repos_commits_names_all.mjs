import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_commits_names_all } from "./git_folder_commits_names_all.mjs";
import { repos_beside_paths } from "./repos_beside_paths.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function repos_commits_names_all() {
  "Every commit name any of these repositories can still reach - this one and every repository standing beside it - as one list.";
  "A RUN OF THE GATES DOES NOT SEE ONE REPOSITORY, so a name a run is filed under need not belong to this one. The sweeps that ask after every function step out of this folder and back down into each neighbour by name, and what a run actually looked at was this repository's commit and every neighbour's together. Asking only the folder the question is put in therefore answers no about names that are perfectly alive one folder across.";
  "NO IS INDISTINGUISHABLE FROM GONE, WHICH IS WHY THIS IS ITS OWN QUESTION. A reader narrowed to one repository does not fail or complain when it is asked about a neighbour's commit - it answers that the name is not there, which is the same answer it gives for a commit a rewrite really did destroy. Measured 2026-09-05 that turned a record of 1720 judgements into 79: of the 1650 dropped, the ones alive in a neighbour were dropped for no reason other than which folder the question was asked in.";
  "The neighbours are asked for rather than listed, so that a repository appearing or leaving beside this one changes the answer by itself. A typed list is right on the day it is written and quietly wrong afterwards, and wrong here means judgements deleted.";
  arguments_assert(arguments, 0);
  let here = folder_current_absolute();
  let names = await git_folder_commits_names_all(here);
  let paths = await repos_beside_paths();
  let beside = properties_get(paths);
  for (let name of beside) {
    let folder = property_get(paths, name);
    let found = await git_folder_commits_names_all(folder);
    list_add_multiple(names, found);
  }
  return names;
}
