import { folder_root_move_files_each } from "./folder_root_move_files_each.mjs";
import { text_replace_path_start } from "./text_replace_path_start.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function folder_root_move_spellings_repoint(before, after) {
  "Every place in the repo that spells one folder as the start of a path, written again with the folder's new name. Answers the files it changed.";
  "Only a spelling with a folder mark after it is touched. The bare name on its own is an ordinary word - this repo writes `letters` six times meaning the letters of the alphabet, and not one of them is the folder - so a sweep that took the bare name would have rewritten all six, and not one of them would have gone red.";
  "The spelling only counts where a name is allowed to begin, so the same letters on the end of a longer word are left alone. Without that this rewrote `wrappy/` inside a downloaded package's address into a package that does not exist, and nothing anywhere went red.";
  "Which files are looked at at all is decided in one place shared with the reporting half, so what one of them leaves alone the other cannot sweep.";
  let from = text_combine(before, "/");
  let changed = [];
  async function handle(tracked_path, f_path, text) {
    let spelled = text_includes(text, from);
    if (not(spelled)) {
      return;
    }
    let written = text_replace_path_start(text, before, after);
    let same = equal(written, text);
    if (same) {
      return;
    }
    await file_overwrite_uncached(f_path, written);
    changed.push(tracked_path);
  }
  await folder_root_move_files_each(handle);
  return changed;
}
