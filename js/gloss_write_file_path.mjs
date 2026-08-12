import { gloss_write_folder } from "./gloss_write_folder.mjs";
import { json_extension } from "./json_extension.mjs";
import { path_join } from "./path_join.mjs";
export function gloss_write_file_path(chapter_code, verse_key) {
  "Where one passage's authored word explanations are handed over: gloss, then the chapter code, then the verses it covers, joined by underscores, with any comma in the verses turned into a dash.";
  "Naming the file is one piece of knowledge shared by the one who writes it and the one who reads it back, so it is answered here rather than spelled at both ends, where the two spellings could drift and the read would simply find nothing.";
  let dashed = verse_key.split(",").join("-");
  let extension = json_extension();
  let name = "gloss_" + chapter_code + "_" + dashed + extension;
  let folder = gloss_write_folder();
  let path = path_join([folder, name]);
  return path;
}
