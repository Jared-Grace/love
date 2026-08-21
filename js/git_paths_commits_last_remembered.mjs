import { arguments_assert } from "./arguments_assert.mjs";
import { git_paths_commits_last } from "./git_paths_commits_last.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function git_paths_commits_last_remembered(folder) {
  "$plain folder";
  "The last commit to touch each file in one repository, read once and then kept for as long as this process lives.";
  arguments_assert(arguments, 1);
  ("Reading the history costs about twenty-nine seconds, and the run that wants this asks gate by gate - so without keeping the answer a run with nine red gates would read the same history nine times over. It is kept per folder, because each repository beside this one has a history of its own.");
  ("It is safe to keep only because a run is short and the question is about what has already been committed. A peer committing halfway through would change the answer, and being told the same thing about a name in two places is better than being told two different things - which is the same bargain the one-at-a-time question already makes.");
  let held = global_function_property_exists(
    git_paths_commits_last_remembered,
    folder,
  );
  if (held) {
    let kept = global_function_property_get(
      git_paths_commits_last_remembered,
      folder,
    );
    return kept;
  }
  let paths = await git_paths_commits_last(folder);
  global_function_property_set(
    git_paths_commits_last_remembered,
    folder,
    paths,
  );
  return paths;
}
