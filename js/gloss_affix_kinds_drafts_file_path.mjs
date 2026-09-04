import { json_extension } from "./json_extension.mjs";
import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_affix_kinds_drafts_file_path(fn) {
  "Where machine-written repairs to the affix claims wait to be read: one file for the whole store, holding the chapters to put right and the words within them.";
  "It is deliberately not the repairs file itself. That file's entries were each read by a person before they went in, and a sweep tipping a thousand unread sentences into it would take that meaning away without changing a line of it - after which nobody could tell, of any entry there, whether anyone had looked at it.";
  "So the two files have the same shape and the promoting step is the reading. A draft that is wrong is deleted from here and never reaches the store; what is promoted is what somebody kept.";
  let extension = json_extension();
  let name = "gloss_affix_kinds_drafts" + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  return path;
}
