import { arguments_assert } from "./arguments_assert.mjs";
import { path_base } from "./path_base.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { folders_function_named_roots } from "./folders_function_named_roots.mjs";
import { path_join } from "./path_join.mjs";
import { equal } from "./equal.mjs";
export async function folders_function_named_orphaned_spelled_path(spelled) {
  arguments_assert(arguments, 1);
  ("Where on the disk one of the folders left behind under a dead name actually sits.");
  ("What comes back from the finder is a folder and then a name, written that way so a person reading the answer is told which of the two roots it means without having to know their full addresses. That is the right shape to read and the wrong shape to act on, so this is the way back: the same two roots are asked again and the one whose own last part is the folder named is the one it came from.");
  ("Nothing at all when no root answers to that folder, which means the spelling came from somewhere else or the roots have moved since it was written. An address guessed from a spelling that no longer fits would name a folder nobody put anything in, and moving or deleting by that address is the one mistake here that cannot be taken back.");
  let name = path_base(spelled);
  let folder_said = await path_dirname(spelled);
  let roots = folders_function_named_roots();
  for (let root of roots) {
    let base = path_base(root);
    let same = equal(base, folder_said);
    if (same) {
      let p = path_join([root, name]);
      return p;
    }
  }
  return null;
}
