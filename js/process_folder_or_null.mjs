import { text_suffix_without_try } from "./text_suffix_without_try.mjs";
import fs from "fs";
import { path_join } from "./path_join.mjs";
import { process_folder_deleted_note } from "./process_folder_deleted_note.mjs";
export function process_folder_or_null(pid) {
  "Where a running process is working, or nothing when there is no such process or it is not ours to look at.";
  "The kernel keeps answering this after the folder itself has been thrown away, and marks the answer when it does. That case is the entire reason this exists - a process still burning a core inside a folder that no longer exists is exactly what we are looking for - so the mark is taken off and the folder is answered plainly.";
  "Anything that is not a process answers nothing rather than throwing, because the caller reads the whole of /proc and most of what is in there is not a process at all.";
  let path = path_join(["/proc", pid, "cwd"]);
  function read() {
    let folder = fs.readlinkSync(path);
    return folder;
  }
  let answered = null;
  try {
    answered = read();
  } catch (e) {
    return null;
  }
  let note = process_folder_deleted_note();
  let plain = text_suffix_without_try(answered, note);
  return plain;
}
