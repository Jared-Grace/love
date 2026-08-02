import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { not } from "./not.mjs";
export async function js_codes() {
  "Every function file this repo holds, keyed by the name of the function inside it, with its source exactly as written.";
  "Reading is the whole of what this does. Every judgment about what a piece of source means stays in the functions that receive this, which is what lets those judgments be asked the same questions by a written-down set of files that was never committed.";
  let names = await folder_read_files("js");
  let codes = {};
  for (let name of names) {
    let mjs = name.endsWith(".mjs");
    if (not(mjs)) {
      continue;
    }
    let f_name = name.slice(0, -4);
    let file_path = path_join(["js", name]);
    codes[f_name] = await file_read(file_path);
  }
  return codes;
}
