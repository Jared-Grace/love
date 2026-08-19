import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_repairs_file_path(fn) {
  "Where corrected word explanations are handed over: one file for the whole store, holding the chapters to put right and the words within them.";
  "It sits beside the per-chapter handover rather than replacing it. That one replaces a passage entire and is what a fresh authoring wants; this one names single words across many chapters, which is what a reading of the whole store leaves behind - thirty explanations spread over twenty chapters, each of them one sentence wrong in a passage that is otherwise right.";
  "One file rather than one per chapter, because the repairs are a single reading and lose their meaning taken apart. A file per chapter would also have to be written and run twenty times over, and a loop of runs is the shape this repo builds a command out of rather than performs.";
  let extension = json_extension();
  let name = "gloss_repairs" + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  return path;
}
