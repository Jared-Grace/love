import { file_overwrite } from "./file_overwrite.mjs";
import { json_format_to_spaces_replaced } from "./json_format_to_spaces_replaced.mjs";
import { newline } from "./newline.mjs";
import { permission_settings_shared_path } from "./permission_settings_shared_path.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function permission_settings_shared_write(settings) {
  "$plain settings";
  "Writes the shared settings file, laid out the way the editor that also writes it lays it out.";
  "This file has two writers and only one of them is here. The editor rewrites it whenever somebody approves a rule at the keyboard, and it lays the file out over many lines, two spaces in, ending with a line break. Writing it any other way from this side does not lose anything - both spellings hold the same settings and the check that reads them compares what they mean rather than how they look - but the file then flips between the two spellings all day.";
  "Measured 2026-08-02: it flipped twelve times in ninety minutes, and every flip is a change to every line of a file of nearly three thousand. That is what makes matching worth a function rather than a preference. A whole-file change buries a real one-line change in the reading, and it lands in every sweep of the working folder, so it also attaches this file to commits that had nothing to do with it.";
  "The width is spelled here rather than taken from the repo's usual one, which is a single space. What is being matched is another program's habit, so the number has to be free to follow that program and must not move when the repo changes its own mind about how wide it writes.";
  let path = permission_settings_shared_path();
  let json = json_format_to_spaces_replaced(settings, 2, null);
  let text = text_combine_multiple([json, newline()]);
  await file_overwrite(path, text);
  return path;
}
