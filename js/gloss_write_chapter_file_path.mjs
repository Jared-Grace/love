import { path_inside_folder_assert } from "./path_inside_folder_assert.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_write_chapter_file_path(chapter_code, fn) {
  "Where a whole chapter's authored word explanations are handed over at once: gloss, then the chapter code, in the store's own handover folder.";
  "It sits beside the per-passage name rather than replacing it. A passage file always carries the verses it covers after the chapter code, so a name with nothing after the chapter code cannot be mistaken for one, and a chapter can be handed over whole or a passage at a time without the two ever landing on one name.";
  "Handing a chapter over whole is what makes a store-wide rewrite affordable. A chapter runs to about thirty passages, and asking for each one and answering each one separately cost two exchanges per passage - so a hundred and fifty eight chapters was some ten thousand of them, which is more than the work itself.";
  "THE NAME IS BUILT FROM A CALLER'S WORD, SO WHERE IT LANDS IS CHECKED RATHER THAN ASSUMED. The chapter code is stuck onto a fixed folder, which looks constraining and is not: a code beginning with a slash and holding two dots twice walks back out of the folder, and the file that is then written over - and, in the caller above, taken away - would be one nobody named. Every ordinary code passes untouched; the check costs nothing and closes the only way an argument here could choose a file for itself.";
  let extension = json_extension();
  let name = "gloss_" + chapter_code + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  path_inside_folder_assert(folder, path);
  return path;
}
