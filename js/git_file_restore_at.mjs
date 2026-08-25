import { git_file_read_at } from "./git_file_read_at.mjs";
import { path_join } from "./path_join.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function git_file_restore_at(folder, commit, path) {
  "$plain folder";
  "$plain commit";
  "$plain path";
  "Puts one named file back on the disk exactly as it stood at one named commit, and answers where it wrote.";
  "Named one file at a time on purpose, because the shared folder is the whole reason this exists. Asking git itself to put a file back takes a whole path and throws away everything uncommitted under it, which in a folder several of us are editing at once means discarding work nobody asked about and nobody can see - so that is refused here, and this writes the files it was handed and nothing else.";
  "What comes back out of the history is written straight through the repository's own file writing, so the change is noted for committing like any other edit rather than appearing in the folder with nothing to account for it.";
  let text = await git_file_read_at(folder, commit, path);
  let file_path = path_join([folder, path]);
  await file_overwrite_uncached(file_path, text);
  return file_path;
}
