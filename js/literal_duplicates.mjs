import { literal_duplicates_generic } from "./literal_duplicates_generic.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { file_read } from "./file_read.mjs";
export async function literal_duplicates() {
  "Every getter in this repo whose written value some other file here still spells";
  "out. Reading the source is the whole of what this adds - the judgment about what";
  "counts as a repeat lives below, where a written-down set of files can ask it the";
  "same questions.";
  let names = await folder_read_files("js");
  let codes = {};
  for (let name of names) {
    let b = name.endsWith(".mjs");
    if (not(b)) {
      continue;
    }
    let f_name = name.slice(0, -4);
    let file_path = path_join(["js", name]);
    codes[f_name] = await file_read(file_path);
  }
  let found = literal_duplicates_generic(codes);
  return found;
}
