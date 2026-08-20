import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_root_move_untouched } from "./folder_root_move_untouched.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { list_any_starts_with } from "./list_any_starts_with.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { text_binary_is } from "./text_binary_is.mjs";
import { not } from "./not.mjs";
export async function folder_root_move_files_each(handle) {
  "Goes over every file in this repo that renaming a folder may look at, handing each one over as its path from the repo's own root, its whole path on this machine, and what it says inside.";
  "The two halves of a rename - writing the references out again, and reporting the ones only a person can judge - were asking the same four questions of the same files before they got to their own question. They now ask them here once, so a place that must be left alone cannot be left alone by one half and swept by the other.";
  "The files are the ones git is keeping, so a downloaded package and a folder of local records are out of reach by construction rather than by a list of what to skip. On top of that, what is not a reference is left out, and so is anything that turns out to be a picture or a program rather than writing.";
  let repo = folder_repo_love();
  let untouched = folder_root_move_untouched();
  let paths = await git_files_tracked_folder(repo);
  for (let tracked_path of paths) {
    let recorded = list_any_starts_with(tracked_path, untouched);
    if (recorded) {
      continue;
    }
    let f_path = path_join([repo, tracked_path]);
    let text = await file_read_try(f_path);
    if (not(text)) {
      continue;
    }
    let binary = text_binary_is(text);
    if (binary) {
      continue;
    }
    await handle(tracked_path, f_path, text);
  }
}
