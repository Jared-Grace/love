import { color_written_regex } from "./color_written_regex.mjs";
import { folder_js } from "./folder_js.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
export async function js_colors_written() {
  "every colour spelled anywhere in js, and the files that spell it — one entry per distinct spelling, so a colour written in four places is one entry naming four files. The files are what makes a finding actionable: a near miss is only worth collapsing once you can see which two places disagree.";
  let names = await folder_read_files(folder_js());
  let found = {};
  let regex = color_written_regex();
  for (let name of names) {
    let mjs = name.endsWith(".mjs");
    if (!mjs) {
      continue;
    }
    let path = path_join([folder_js(), name]);
    let text = await file_read(path);
    let matches = text.match(regex);
    if (!matches) {
      continue;
    }
    for (let written of matches) {
      let already = found[written];
      if (!already) {
        found[written] = [];
      }
      let listed = found[written].includes(name);
      if (!listed) {
        found[written].push(name);
      }
    }
  }
  return found;
}
