import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
import { functions_path } from "./functions_path.mjs";
export async function repos_paths_map_unordered_combine_squash_functions(
  lambda$path,
) {
  arguments_assert(arguments, 1);
  ("Every repo-wide sweep of the function files comes through here - the names, the paths, the sources every gate reads. So this is the one place where a sweep that found nothing can be refused for all of them at once.");
  ("Nothing this is ever handed can be truly empty. The five callers ask for the function files themselves, not for something to be found in them, and a folder of them that came back with no files means the reading broke rather than that the repo has no functions. A finder is free to find nothing and does not come through here.");
  ("Worth refusing rather than passing on, because of which way an empty answer fails. Almost every gate above this passes by finding nothing to complain about, so an empty sweep does not turn one of them red - it turns every one of them green at the same moment, each printing the same clean line it prints when the repo is genuinely in order.");
  let path = functions_path();
  let squashed = await repos_paths_map_unordered_combine_squash(
    path,
    lambda$path,
  );
  list_empty_not_is_assert_json(squashed, {
    path,
    hint: "a sweep of every repo's function files came back with nothing at all - look at what reads the folder rather than at whatever asked for this, and treat any gate that passed in the same run as unasked",
  });
  return squashed;
}
