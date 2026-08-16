import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_write_chapter_file_path(chapter_code, fn) {
  "Where a whole chapter's authored word explanations are handed over at once: gloss, then the chapter code, in the store's own handover folder.";
  "It sits beside the per-passage name rather than replacing it. A passage file always carries the verses it covers after the chapter code, so a name with nothing after the chapter code cannot be mistaken for one, and a chapter can be handed over whole or a passage at a time without the two ever landing on one name.";
  "Handing a chapter over whole is what makes a store-wide rewrite affordable. A chapter runs to about thirty passages, and asking for each one and answering each one separately cost two exchanges per passage - so a hundred and fifty eight chapters was some ten thousand of them, which is more than the work itself.";
  let extension = json_extension();
  let name = "gloss_" + chapter_code + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  return path;
}
