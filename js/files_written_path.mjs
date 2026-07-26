import { path_join } from "./path_join.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { files_written_folder } from "./files_written_folder.mjs";
import { process_session_or_null } from "./process_session_or_null.mjs";
export function files_written_path() {
  "One note per conversation, and that is the whole point of it. Several of us";
  "change files in this one directory at the same time, so a single shared note";
  "would hand my commit a peer's work and label it as mine, which is the very";
  "thing a note of changed files exists to prevent.";
  "Keeping them apart also means one process ever adds to a note and one process";
  "ever empties it, so no line can be lost to two writers meeting.";
  "Nothing names the person at the keyboard, so their changes gather under a name";
  "of their own rather than mixing into whichever conversation ran last.";
  let session = process_session_or_null();
  let named = session;
  let none = null_is(session);
  if (none) {
    named = "keyboard";
  }
  let name = text_combine(named, ".txt");
  let folder = files_written_folder();
  let f_path = path_join([folder, name]);
  return f_path;
}
