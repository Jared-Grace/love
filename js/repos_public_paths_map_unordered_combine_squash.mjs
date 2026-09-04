import { arguments_assert } from "./arguments_assert.mjs";
import { repo_folder_public_or_null } from "./repo_folder_public_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { repos_paths_map_unordered } from "./repos_paths_map_unordered.mjs";
import { list_squash } from "./list_squash.mjs";
export async function repos_public_paths_map_unordered_combine_squash(
  lambda$folder,
) {
  "Every repository's own served folder handed to one reading, all at once, and the answers joined into one list.";
  "EACH REPOSITORY IS ASKED WHERE IT SERVES FROM RATHER THAN TOLD. Its sibling takes one folder name and looks for that same name inside every repository beside it, which holds only for as long as they all agree on their layout. On 2026-09-03 this one moved its served folder under web/ and the one beside it did not, and every reading that went through the sibling with a served folder in hand has been wrong about the repositories beside this one from that day.";
  "A repository that names no served folder is passed over with nothing rather than stopped on: not every repository is sent anywhere, and one that is not has no served files to read. Two of the four folders beside this one are in that position.";
  "The reading is handed in because the same walk answers different questions - what every page is called, what every path to one is - and which reading is asked is the whole of the difference between them.";
  arguments_assert(arguments, 1);
  async function per_repo(folder) {
    let served = await repo_folder_public_or_null(folder);
    if (null_is(served)) {
      let none = [];
      return none;
    }
    let found = await lambda$folder(served);
    return found;
  }
  let result = await repos_paths_map_unordered(per_repo);
  let squashed = list_squash(result);
  return squashed;
}
