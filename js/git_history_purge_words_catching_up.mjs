import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_love } from "./git_folder_love.mjs";
import { git_history_purge_paths } from "./git_history_purge_paths.mjs";
import { git_history_purge_rehearse } from "./git_history_purge_rehearse.mjs";
import { git_history_rewrite_accept_catching_up } from "./git_history_rewrite_accept_catching_up.mjs";
export async function git_history_purge_words_catching_up(
  words_text,
  bundle_path,
) {
  "$plain words_text";
  "$plain bundle_path";
  arguments_assert(arguments, 2);
  ("Takes a body of work out of this repository's whole past, named by its words alone, while everyone else goes on working - the neighbour of the purge that stops the machine for the whole rehearsal.");
  ("do NOT grant. It reaches the accepting step, which forces every address it writes to onto a new history.");
  ("The background work is left running on purpose: the rehearsal is taken on a copy, and whatever is committed while it runs is laid on top afterwards. What it asks in return is a present already cleaned of the words - the accepting step refuses otherwise, before anything moves.");
  let folder = await git_folder_love();
  let found = await git_history_purge_paths(words_text);
  let rehearsed = await git_history_purge_rehearse(
    folder,
    words_text,
    found.paths_text,
  );
  let accepted = await git_history_rewrite_accept_catching_up(
    folder,
    rehearsed,
    words_text,
    bundle_path,
  );
  let r = {
    found,
    rehearsed,
    accepted,
  };
  return r;
}
