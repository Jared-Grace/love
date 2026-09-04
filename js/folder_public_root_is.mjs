import { arguments_assert } from "./arguments_assert.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { path_base } from "./path_base.mjs";
import { path_join } from "./path_join.mjs";
import { equal } from "./equal.mjs";
export async function folder_public_root_is(file_path) {
  "$plain file_path";
  "Whether a path names a file lying directly at the top of this repo's published folder - asked of whichever copy of the repo is doing the asking, and answering the same in every one of them.";
  "THIS IS A QUESTION ABOUT WHERE A PATH SITS AND NOTHING ELSE. It says where the file is, never what may be done to it. Two callers want the position and want opposite things from it, so the position is asked here and each caller adds its own reason on top.";
  "IT ANSWERS THE SAME IN A FROZEN COPY, AND THAT IS THE WHOLE POINT OF SEPARATING IT. A copy is a copy of this repo, so the folder at the top of it holds the same pieces under the same names, and the committed note about those pieces travels into the copy with everything else. Anything asking whether a piece is accounted for must get the same answer wherever it runs, or a check that passes here fails when the judging runs it and names the fault the caller was written to clear.";
  "The path is reduced to a whole one first, so a name spelled from here and the same name spelled from the root come back the same. Nothing is asked of the disk: what a path means is worked out from the text alone, and the file about to be written may not be there yet.";
  arguments_assert(arguments, 1);
  let absolute = await path_resolve(file_path);
  let folder = folder_public_absolute();
  let file_name = path_base(absolute);
  let expected = path_join([folder, file_name]);
  let root = equal(absolute, expected);
  return root;
}
