import { files_to_commit_folder } from "./files_to_commit_folder.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { path_resolve } from "./path_resolve.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { file_append } from "./file_append.mjs";
import { files_to_commit_path } from "./files_to_commit_path.mjs";
export async function file_to_commit_add(f_path) {
  arguments_assert(arguments, 1);
  ("Notes that this file has just been changed, so the commit that follows can name");
  ("exactly what it is committing instead of sweeping up everything in the folder.");
  ("One plain path per line: the note is read once and thrown away, so it never");
  ("needs to carry anything a later reader would have to interpret.");
  ("noted as the full path from the root: the same file is written under several spellings depending on where a command was started from, and only the process doing the writing knows which folder its spelling was relative to");
  let absolute = await path_resolve(f_path);
  ("a note never notes itself. Spending the note removes the file, and a removal is a change, so without this the note comes straight back holding its own name — the one entry that can never mean anything to a commit");
  let folder_note = files_to_commit_folder();
  ("both sides resolved from the root before comparing, since the note folder is named from where the command was started and the file is not");
  let folder_rooted = await path_resolve(folder_note);
  let own = text_starts_with(absolute, folder_rooted);
  if (own) {
    return;
  }
  let line = text_combine(absolute, "\n");
  let path_note = files_to_commit_path();
  await file_append(path_note, line);
}
