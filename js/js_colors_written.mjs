import { fn_name } from "./fn_name.mjs";
import { folder_js } from "./folder_js.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { color_written_regex } from "./color_written_regex.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { color_written_css } from "./color_written_css.mjs";
export async function js_colors_written() {
  "every colour spelled anywhere in js, and the files that spell it — one entry per distinct spelling, so a colour written in four places is one entry naming four files. The files are what makes a finding actionable: a near miss is only worth collapsing once you can see which two places disagree.";
  ("KEYED BY THE COLOUR AND NOT BY THE TYPING, WHICH IS WHY EVERY MATCH GOES THROUGH A REWRITE ON THE WAY IN. A hex literal and an rgb call are handed back as they came; a ",
    fn_name("color_oklch"),
    " call of plain numbers becomes the oklch colour it builds. Doing it here rather than in each reader is what keeps every key parseable, so nothing downstream has to know that some colours in this repo are typed as calls - and nothing downstream can forget.");
  let path_folder = folder_js();
  let names = await folder_read_files(path_folder);
  let found = {};
  let regex = color_written_regex();
  for (let name of names) {
    let mjs = name.endsWith(".mjs");
    if (not(mjs)) {
      continue;
    }
    let js = folder_js();
    let path = path_join([js, name]);
    let text = await file_read(path);
    let matches = text.match(regex);
    if (not(matches)) {
      continue;
    }
    for (let match of matches) {
      let written = color_written_css(match);
      let already = found[written];
      if (not(already)) {
        found[written] = [];
      }
      let listed = found[written].includes(name);
      if (not(listed)) {
        found[written].push(name);
      }
    }
  }
  return found;
}
