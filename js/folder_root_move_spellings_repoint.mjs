import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { text_binary_is } from "./text_binary_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_replace } from "./text_replace.mjs";
import { not } from "./not.mjs";
export async function folder_root_move_spellings_repoint(before, after) {
  "Every place in the repo that spells one folder as the start of a path, written again with the folder's new name. Answers the files it changed.";
  "Only a spelling with a folder mark after it is touched. The bare name on its own is an ordinary word - this repo writes `letters` six times meaning the letters of the alphabet, and not one of them is the folder - so a sweep that took the bare name would have rewritten all six, and not one of them would have gone red.";
  "The files are the ones git is keeping, so a downloaded package and a folder of local records are out of reach by construction rather than by a list of what to skip.";
  let repo = folder_repo_love();
  let from = text_combine(before, "/");
  let to = text_combine(after, "/");
  let paths = await git_files_tracked_folder(repo);
  let changed = [];
  for (let path_relative of paths) {
    let f_path = path_join([repo, path_relative]);
    let text = await file_read_try(f_path);
    if (not(text)) {
      continue;
    }
    let binary = text_binary_is(text);
    if (binary) {
      continue;
    }
    let spelled = text_includes(text, from);
    if (not(spelled)) {
      continue;
    }
    let written = text_replace(text, from, to);
    await file_overwrite_uncached(f_path, written);
    changed.push(path_relative);
  }
  return changed;
}
