import { arguments_assert } from "./arguments_assert.mjs";
import { path_relative } from "./path_relative.mjs";
import { path_join } from "./path_join.mjs";
import { path_normalize } from "./path_normalize.mjs";
import { file_copy_overwrite } from "./file_copy_overwrite.mjs";
import { list_add } from "./list_add.mjs";
export async function qa_tree_files_recopy(source, target, paths) {
  arguments_assert(arguments, 3);
  ("Takes the named files across again, one at a time, into the copy that already");
  ("holds an older reading of them.");
  ("This is the whole repair, and what makes it work is how much smaller the");
  ("opening gets. Taking the folder wholesale leaves every file readable for as");
  ("long as the whole taking lasts, so anything saved in that stretch can land in");
  ("pieces. Taking one file is over in a moment, so for the same file to be caught");
  ("half-written twice, the second save would have to fall inside that moment.");
  ("Doing the whole folder again instead would not settle at all. Several of us");
  ("write here continuously, and a folder held to the standard of one instant is a");
  ("folder that never reaches it - while a file held to the standard of being whole");
  ("reaches it at once, which is the only standard that was ever wanted.");
  let landed = [];
  for (let p of paths) {
    let relative = path_relative(source, p);
    let joined = path_join([target, relative]);
    let landing = path_normalize(joined);
    await file_copy_overwrite(p, landing);
    list_add(landed, p);
  }
  return landed;
}
