import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_history_purge_paths } from "./git_history_purge_paths.mjs";
import { git_history_purge } from "./git_history_purge.mjs";
export async function git_history_purge_words(words_text, bundle_path) {
  "$plain words_text";
  "$plain bundle_path";
  arguments_assert(arguments, 2);
  ("Takes a body of work out of this repository's whole past, named by its words alone: works out for itself which forgotten files belong to those words, and hands both to the purge.");
  ("do NOT grant. It reaches the purge, which forces every address it writes to onto a new history, and a standing approval here would be a standing approval for that.");
  ("★ THE FILE LIST WAS THE PART THAT COULD NOT BE TYPED. Fifty paths joined by commas is two thousand characters on one line, and a line that long does not survive being handed to somebody to run - it arrives with a real break in the middle of a name, and what gets run is a shorter list nobody chose. The names were never a choice anyway: a file belongs in the purge when its own name holds one of the words and the present no longer has it, which is a reading, not a decision. So the reading is done here and the only thing said out loud is the words.");
  ("The words stay a choice and stay outside. A word short enough to be worth hiding sits inside innocent names, and whether what is left afterwards is the innocent kind is the one judgement here that no rule makes. Writing the list down in this repository would also be the plainest possible way of defeating the purge, since this repository is public.");
  let folder = await git_folder_love();
  let found = await git_history_purge_paths(words_text);
  let purged = await git_history_purge(
    folder,
    words_text,
    found.paths_text,
    bundle_path,
  );
  let r = {
    found,
    purged,
  };
  return r;
}
