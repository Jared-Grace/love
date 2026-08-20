import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { folder_moved_ensure } from "./folder_moved_ensure.mjs";
import { folder_root_move_spellings_repoint } from "./folder_root_move_spellings_repoint.mjs";
import { folder_root_move_bare_named } from "./folder_root_move_bare_named.mjs";
import { error_json } from "./error_json.mjs";
import { not } from "./not.mjs";
export async function folder_root_move(before, after) {
  "Gives one of this repo's own folders a new home inside the repo, and writes every path that named the old one out again naming the new one.";
  "The moving on its own is the small half. A folder's name is spelled in places the move never visits - the ignore list, a stored baseline, a document, a script that runs on this machine - and a spelling left behind does not break: the reader simply finds an empty folder, which reads exactly like nobody having got round to it yet.";
  "The writing out happens before the moving, so every file is still where git says it is while it is being read. Afterwards those same files are somewhere else, and reading them by the path git still holds would quietly find nothing at all.";
  "A new home that is already taken is refused rather than moved into, because moving into it would bury whatever is there.";
  arguments_assert(arguments, 2);
  let repo = folder_repo_love();
  let f_path_before = path_join([repo, before]);
  let f_path_after = path_join([repo, after]);
  let there = await folder_exists(f_path_before);
  if (not(there)) {
    error_json({
      hint: "there is no folder of this name at the root of the repo to move - the name wanted is the folder's own, spelled the way it sits beside the others",
      before,
      f_path_before,
    });
  }
  let taken = await folder_exists(f_path_after);
  if (taken) {
    error_json({
      hint: "something already lives where this folder is to go, and moving on top of it would bury it - name a place that is free, or move what is there first",
      after,
      f_path_after,
    });
  }
  let repointed = await folder_root_move_spellings_repoint(before, after);
  let bare = await folder_root_move_bare_named(before);
  let moved = await folder_moved_ensure(f_path_before, f_path_after);
  let r = {
    before,
    after,
    moved,
    repointed,
    bare,
  };
  return r;
}
