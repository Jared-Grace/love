import { arguments_assert } from "./arguments_assert.mjs";
import { folder_home_repo } from "./folder_home_repo.mjs";
import { repo_love_name } from "./repo_love_name.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists_assert_json } from "./file_exists_assert_json.mjs";
export async function git_folder_love() {
  "Where this repo is checked out with its own history beside it, named from the root.";
  "There is already a reading that answers where this repo's code sits, worked out from its own file's place on disk, and it is the right one for nearly everything. It cannot be used for this. The whole-repo gates run against a frozen copy of the tree that carries no history at all, and asked from inside that copy it answers the copy - so a question about the past would be asked of something that has none, and get a quiet empty answer rather than a refusal.";
  "So this one names the place the history actually lives, and then makes sure it found it. Written-down places go wrong silently when things are moved, which has happened here before, so being wrong has to look like being wrong.";
  arguments_assert(arguments, 0);
  let name = repo_love_name();
  let folder = folder_home_repo(name);
  let path = path_join([folder, ".git"]);
  await file_exists_assert_json(path, {
    hint: "this repo's history is not where it is written down as being, so nothing asked about its past can be answered — has the checkout moved?",
    folder,
  });
  return folder;
}
