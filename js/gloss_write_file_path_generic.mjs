import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_write_file_path_generic(
  chapter_code,
  verse_key,
  fn,
  prefix,
) {
  "Where one passage of authored material is handed over: a word saying what the material is, then the chapter code, then the verses it covers, joined by underscores, with any comma in the verses turned into a dash.";
  "$plain prefix";
  "the prefix is the opening word of a file name, ending in its own underscore. It names text and nothing that runs.";
  "What is handed over is not always a whole explanation. A passage already written can be handed a set of wordings alone, and the two must not land on the same name or the second would be read as the first. So the opening word is asked for rather than spelled here, and the rest of the name - which is the part a reader recognises the passage by - stays one shape for both.";
  let dashed = verse_key.split(",").join("-");
  let extension = json_extension();
  let name = prefix + chapter_code + "_" + dashed + extension;
  let folder = gloss_write_folder(fn);
  let path = path_join([folder, name]);
  return path;
}
