import { findings_folder } from "./findings_folder.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_replace_path_start } from "./text_replace_path_start.mjs";
import { equal } from "./equal.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_files_tracked_folder } from "./git_files_tracked_folder.mjs";
import { path_join } from "./path_join.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { text_binary_is } from "./text_binary_is.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { not } from "./not.mjs";
export async function folder_root_move_spellings_repoint(before, after) {
  "Every place in the repo that spells one folder as the start of a path, written again with the folder's new name. Answers the files it changed.";
  "Only a spelling with a folder mark after it is touched. The bare name on its own is an ordinary word - this repo writes `letters` six times meaning the letters of the alphabet, and not one of them is the folder - so a sweep that took the bare name would have rewritten all six, and not one of them would have gone red.";
  "The spelling only counts where a name is allowed to begin, so the same letters on the end of a longer word are left alone. Without that this rewrote `wrappy/` inside a downloaded package's address into a package that does not exist, and nothing anywhere went red.";
  "The files are the ones git is keeping, so a downloaded package and a folder of local records are out of reach by construction rather than by a list of what to skip.";
  "The one folder left out is the one holding records of what the repository used to contain. Those name paths that are gone, and saying they were somewhere they never were does not repoint anything - it only makes the record lie.";
  let repo = folder_repo_love();
  let from = text_combine(before, "/");
  let kept = findings_folder();
  let records = text_combine(kept, "/");
  let paths = await git_files_tracked_folder(repo);
  let changed = [];
  for (let tracked_path of paths) {
    let recorded = text_starts_with(tracked_path, records);
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
    let spelled = text_includes(text, from);
    if (not(spelled)) {
      continue;
    }
    let written = text_replace_path_start(text, before, after);
    let same = equal(written, text);
    if (same) {
      continue;
    }
    await file_overwrite_uncached(f_path, written);
    changed.push(tracked_path);
  }
  return changed;
}
