import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_dev } from "./folder_web_dev.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { folder_read_htmls } from "./folder_read_htmls.mjs";
export async function apps_paths_dev() {
  "Every app's working page, found by reading the working stage's folder in this repository and in each one beside it.";
  "It reads the working stage rather than the served one because the served one also holds pages that are no app at all, and only an app has a bundle to build.";
  "IT ASKS THE STAGE'S OWN FOLDER FUNCTION RATHER THAN JOINING THE STAGE'S NAME ONTO A ROOT. Joined onto the served root, this named a room inside the served folder, which is where the working stage lived until 2026-09-03 and is not where it lives now. The move rewrote the places that spell a path out in letters, and could not see this one, because there was no path here to rewrite - only a call that went on returning the old root.";
  "Nothing went red when that happened. The folder simply was not there, so this answered with an empty list, and an empty list reads as this repository has no apps rather than as this is looking in the wrong place. Everything that asks which apps exist was handed that answer: the watcher that rebuilds a bundle when its source changes discovered nothing to watch, and every staleness report agreed there was nothing stale.";
  arguments_assert(arguments, 0);
  let folder = folder_web_dev();
  let aps = await repos_paths_map_unordered_combine_squash(
    folder,
    folder_read_htmls,
  );
  return aps;
}
