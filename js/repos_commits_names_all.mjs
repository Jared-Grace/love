import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_commits_names_all } from "./git_folder_commits_names_all.mjs";
import { repos_beside_paths } from "./repos_beside_paths.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function repos_commits_names_all() {
  "Every commit name any of these repositories can still reach - this one and every repository standing beside it - as one list.";
  "A RUN OF THE GATES DOES NOT SEE ONE REPOSITORY. The sweeps that ask after every function step out of this folder and back down into each neighbour by name, so what a run actually looked at was this repository's commit and every neighbour's together, and a record of what runs decided is entitled to be filed under any of them.";
  "WHAT IS FILED THERE TODAY IS THIS REPOSITORY'S COMMITS AND NOTHING ELSE, checked rather than assumed: read on 2026-09-05 the judging record held 1646 names and not one of them belonged to a neighbour. So asking the neighbours as well changes no answer this is currently put to, and the honest reason for doing it is that it cannot delete a judgement a narrower question would have kept.";
  "NO IS INDISTINGUISHABLE FROM GONE, which is what makes the narrower question worth widening even against no measured fault. A reader that can only ask the folder it stands in does not fail or complain when it is handed a neighbour's commit - it answers that the name is not there, which is the same answer it gives for a commit a rewrite really destroyed. Whoever is deceived by that is a caller deleting entries.";
  "The neighbours are asked for rather than listed, so that a repository appearing or leaving beside this one changes the answer by itself. A typed list is right on the day it is written and quietly wrong afterwards.";
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
