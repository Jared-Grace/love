import { file_overwrite } from "./file_overwrite.mjs";
import { folder_gitignore_join } from "./folder_gitignore_join.mjs";
export async function phone_report_write(text) {
  "keep what a page on the phone has to say, so it can be read here instead of read aloud.";
  "The dev server already runs any function in this repo for a page that asks it to, so a page on the phone can hand its own findings straight back to the machine. Before this, a phone-only fault was diagnosed by asking somebody to look at a panel on a small screen and type out what it said, one round trip per guess.";
  "The whole report is written each time rather than added to the end, so the file always holds one run and never a run mixed with the one before it. A page that wants a history keeps it itself and sends the whole of it.";
  let name = "phone_report.txt";
  let file_path = folder_gitignore_join(name);
  await file_overwrite(file_path, text);
  return file_path;
}
