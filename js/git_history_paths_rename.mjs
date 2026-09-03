import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_paths_rename_rehearse } from "./git_history_paths_rename_rehearse.mjs";
import { git_history_rewrite_accept } from "./git_history_rewrite_accept.mjs";
export async function git_history_paths_rename(
  folder,
  folders_before_text,
  folders_after_text,
  bundle_path,
) {
  "$plain folder";
  "$plain folders_before_text";
  "$plain folders_after_text";
  "$plain bundle_path";
  "Moves named folders to new names through a repository's whole history, and leaves every copy of it standing on the result - the machine, and each address it writes to.";
  "do NOT grant, and nothing calls this. It forces every address it writes to onto a new history, which is the one thing around here that another person's copy cannot simply catch up with. The wording matters as much as the meaning: the refusal check reads one exact phrase, and so the only thing that would stop a standing approval being written here is somebody opening the file first.";
  "THE ANSWER TO A FOLDER THAT HAS MOVED, where until now the only tool on offer was the one that erases. Moving a folder in an ordinary commit leaves every old name dead at the current commit, and a name the history carries that the present has lost is what the heavy-absent gate exists to find - so an honest tidy-up reads to it as a deletion and is counted against every app, blocking every deploy. Renamed through the history, the old names were never there: there is nothing for that gate to find, and nothing is lost, because every byte stays under its new name.";
  "So where either this or its dropping neighbour would do, this is the one to reach for. Dropping takes content out of the past for good and is only right for something that should never have been committed; renaming keeps all of it and changes only what it is called.";
  "It is two halves and neither is folded into the other. The rehearsing half does the whole rewrite on a copy nobody is using and proves it twice over - that every blob survived, and that every name landed where the substitution says it should - and it is safe to run on its own, as often as you like, before anybody is asked for anything. The accepting half is shared with the dropping neighbour, because past the rehearsal there is nothing about the two that differs.";
  "Which folders belong here is not decided here and cannot be. The rehearsal refuses the ones it can prove are wrong - a name matching no path is a typo, not a rename - but only a person knows that a folder moved rather than being replaced by something with the same name.";
  arguments_assert(arguments, 4);
  let rehearsed = await git_history_paths_rename_rehearse(
    folder,
    folders_before_text,
    folders_after_text,
  );
  let accepted = await git_history_rewrite_accept(
    folder,
    rehearsed,
    bundle_path,
  );
  let r = {
    rehearsed,
    accepted,
  };
  return r;
}
