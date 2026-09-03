import { arguments_assert } from "./arguments_assert.mjs";
import { git_history_paths_drop_rehearse } from "./git_history_paths_drop_rehearse.mjs";
import { git_history_rewrite_accept } from "./git_history_rewrite_accept.mjs";
export async function git_history_paths_drop(folder, paths_text, bundle_path) {
  "$plain folder";
  "$plain paths_text";
  "$plain bundle_path";
  "Takes named paths out of a repository's whole history and leaves every copy of it standing on the result - the machine, and each address it writes to.";
  "do NOT grant, and nothing calls this. It forces every address it writes to onto a new history, which is the one thing around here that another person's copy cannot simply catch up with. The wording matters as much as the meaning: this said the same thing in its own words for as long as it has existed, the refusal check reads one exact phrase, and so the only thing that would have stopped a standing approval being written here was somebody opening the file first.";
  "It is two halves and neither is folded into the other. The rehearsing half does the whole rewrite on a copy nobody is using and proves the present came through it untouched, and is safe to run on its own, as often as you like. The accepting half is shared with the renaming neighbour, because past the rehearsal there is nothing about the two that differs - and the steps it holds are the ones where doing them out of order costs an afternoon, so having one copy of them rather than two is the point.";
  "Renaming is the neighbour to reach for wherever it would do. This takes content out of the past for good, and is only right for something that should never have been committed at all; a folder that merely moved keeps every byte if it is renamed instead.";
  "THE REHEARSAL NOW HAPPENS BEFORE ANYTHING IS STOPPED OR WRITTEN, where it used to happen after the background work was halted and the undo file written. Nothing about the rehearsal touches the repository it was pointed at, so there was never anything for that undo to undo, and a rehearsal that refuses - which is what a rehearsal is for - no longer costs a halted machine and a bundle of the whole history first. What the old order was quietly buying was a rehearsal taken while nobody could commit, and that is bought properly now: the accepting half asks whether the folder has moved on since the copy was taken, and refuses rather than throwing a peer's work away.";
  "Which paths belong here is not decided here and cannot be. A folder can look like something built and be the source it was built from - stripping one such folder in rehearsal pruned fifty-three thousand commits and looked like the biggest win on offer. So the list arrives from a person who knows what each path was, and the rehearsal only refuses the ones it can prove are wrong.";
  arguments_assert(arguments, 3);
  let rehearsed = await git_history_paths_drop_rehearse(folder, paths_text);
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
