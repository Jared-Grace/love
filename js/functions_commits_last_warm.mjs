import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { function_commit_last_remembered } from "./function_commit_last_remembered.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { git_folder_is } from "./git_folder_is.mjs";
import { git_paths_commits_last_remembered } from "./git_paths_commits_last_remembered.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";

export async function functions_commits_last_warm(f_names) {
  "$plain f_names";
  "Answers the last-commit question for all of these functions at once by reading each history once, and puts the answers where the one-at-a-time question looks.";
  arguments_assert(arguments, 1);
  ("★ THIS CHANGES NOTHING ABOUT THE ANSWERS AND ONLY ABOUT WHAT THEY COST. It fills the same store the one-at-a-time question fills, with what a single read of the history says - so every later ask finds its answer already there and never reaches git. A name this misses is simply not put in the store, and the ask that follows goes and finds it the old way, which is why nothing here needs to be right about every name to be safe.");
  ("The reason is arithmetic. Asking git for the last commit to touch one path makes it walk the whole history looking for that path, at about five seconds a time, and a run that goes red names about a hundred and thirteen functions. Reading the whole history once costs twenty-nine seconds and holds the answer for every path in it.");
  ("The names are handled one after another rather than all at once on purpose: the expensive part is the read of a history, that read is kept, and the folders are few - so running them in a crowd would only multiply the same read by however many names started before the first one finished.");
  let seeded = [];
  let here = folder_current_absolute();
  for (let f_name of f_names) {
    let held = global_function_property_exists(
      function_commit_last_remembered,
      f_name,
    );
    if (held) {
      continue;
    }
    let search = await function_name_to_path_search(f_name);
    let exists = property_get(search, "exists");
    if (not(exists)) {
      continue;
    }
    let repo_name = property_get(search, "repo_name");
    let folder = path_join([here, "..", repo_name]);
    let repo = await git_folder_is(folder);
    if (not(repo)) {
      continue;
    }
    let paths = await git_paths_commits_last_remembered(folder);
    let f_path = function_name_to_path_relative(f_name);
    let heading = property_get_or_null(paths, f_path);
    let missing_is = null_is(heading);
    if (missing_is) {
      continue;
    }
    let last = {
      f_name,
      commit: property_get(heading, "commit"),
      when: property_get(heading, "when"),
      subject: property_get(heading, "subject"),
    };
    global_function_property_set(function_commit_last_remembered, f_name, last);
    list_add(seeded, f_name);
  }
  return seeded;
}
