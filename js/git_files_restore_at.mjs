import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { git_file_restore_at } from "./git_file_restore_at.mjs";
export async function git_files_restore_at(folder, commit, paths_comma) {
  "$plain folder";
  "$plain commit";
  "$plain paths_comma";
  "Puts several named files back on the disk as they stood at one named commit, and answers where each one was written.";
  "The files are named by whoever asks rather than worked out from the commit, because a commit touches whatever it touched and that is almost never the set somebody wants back. Undoing one thing that went wrong means naming the pieces of that one thing, and a command that took the whole commit would carry everything else in it along.";
  "One command rather than one run per file, so that putting a build back is a single thing that happened, recorded under a single name with the files it names as its arguments.";
  async function restore(path) {
    let file_path = await git_file_restore_at(folder, commit, path);
    return file_path;
  }
  let restored = await text_split_comma_map_async(paths_comma, restore);
  return restored;
}
