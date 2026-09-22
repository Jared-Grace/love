import { arguments_assert } from "./arguments_assert.mjs";
import { folder_home_backup } from "./folder_home_backup.mjs";
import { date_today_iso } from "./date_today_iso.mjs";
import { path_join } from "./path_join.mjs";
import { git_history_purge_words } from "./git_history_purge_words.mjs";
export async function git_history_purge_words_bundled(words_text) {
  "$plain words_text";
  arguments_assert(arguments, 1);
  ("Takes a body of work out of this repository's whole past, named by its words and nothing else, naming the undo bundle itself from today's date.");
  ("do NOT grant. It reaches the purge, which forces every address it writes to onto a new history, and a standing approval here would be a standing approval for that.");
  ("★ A SECOND ARGUMENT IS A PLACE THE LINE CAN BE CUT. The words alone are two hundred characters on one line, and a line handed to somebody to run arrives however their terminal decides to deliver it. Measured on this very purge: the line was pasted, everything up to the last word arrived, the path after it did not, and what ran was the same command missing the argument that says where the undo copy goes. It threw, which is the good ending; the bad one is a command whose last argument is optional. So there is nothing after the words to lose.");
  ("The bundle's name is not a choice either. It is the copy of this repository as it stood before the rewrite, so the only thing that tells two of them apart is the day it was taken, and the day is something the machine already knows. Choosing it by hand only makes it possible to write yesterday's name over yesterday's copy.");
  let folder = folder_home_backup("love");
  let today = date_today_iso();
  let name = "love_before_purge_" + today + ".bundle";
  let bundle_path = path_join([folder, name]);
  let purged = await git_history_purge_words(words_text, bundle_path);
  let r = {
    bundle_path,
    purged,
  };
  return r;
}
