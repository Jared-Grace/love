import { git_folder_run } from "./git_folder_run.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function git_file_read_at(folder, commit, path) {
  "$plain folder";
  "$plain commit";
  "$plain path";
  "One file as it stood at one named commit, read straight out of the history rather than off the disk";
  "The disk holds one version of a file and the history holds every version, so a question about what a change did to something can only be asked here. Reading the disk instead answers about now, which is the one moment the question is never about";
  "Nothing is moved or checked out to do it. A folder shared by everybody working at once cannot be walked backwards to look at something and walked forwards again afterwards, because their edits are sitting in it the whole time";
  let where = text_combine_multiple([commit, ":", path]);
  let words = ["show", where];
  let text = await git_folder_run(folder, words);
  return text;
}
