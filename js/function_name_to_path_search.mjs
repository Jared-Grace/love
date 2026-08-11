import { function_name_to_path_search_cached } from "./function_name_to_path_search_cached.mjs";
import { function_name_to_path_search_live } from "./function_name_to_path_search_live.mjs";
import { function_paths_frozen_is } from "./function_paths_frozen_is.mjs";

export async function function_name_to_path_search(f_name) {
  "Looks in every repository here for the file a name would live in, reporting whether exactly one holds it, whether several do, and where it was found.";
  "Asks the disk every time, unless this process has said its folders cannot change, in which case each name is looked up once and kept. Both roads answer the same thing; they differ only in how often the disk is troubled for it.";
  "The choice sits here rather than at the callers because there are dozens of them, reached through a dozen more, and none of them knows whether the folder underneath is moving. The one process that does know says so once, at its start.";
  "Why it is worth a choice at all: one asking is one look on disk per repository, and a sweep asking after every function makes nearly thirty-two thousand of them. The whole gate is a hundred and seventy-nine such sweeps over a copy that cannot change, which is the same handful of answers found again about five million times.";
  "The imports above were written by hand, and a moment when they were missing is why. This sits on the road the dispatcher itself walks to find any function at all, so while they are wrong nothing can be run - the repair that would fix them included.";
  let frozen = function_paths_frozen_is();
  if (frozen) {
    let kept = await function_name_to_path_search_cached(f_name);
    return kept;
  }
  let fresh = await function_name_to_path_search_live(f_name);
  return fresh;
}
