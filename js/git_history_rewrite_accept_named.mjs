import { arguments_assert } from "./arguments_assert.mjs";
import { git_folder_head_tree } from "./git_folder_head_tree.mjs";
import { git_history_rewrite_accept } from "./git_history_rewrite_accept.mjs";
export async function git_history_rewrite_accept_named(
  folder,
  clone_folder,
  commit,
  bundle_path,
) {
  "$plain folder";
  "$plain clone_folder";
  "$plain commit";
  "$plain bundle_path";
  arguments_assert(arguments, 4);
  ("Accepts a rewrite that was rehearsed earlier and is still sitting where it was left, naming it by the folder it is in and the commit the repository stood at when it was taken.");
  ("do NOT grant. Everything it does is done by the accepting command it hands over to, which forces every address it writes to onto a new history, and a standing approval here would be a standing approval for that.");
  ("★ A REHEARSAL GOES STALE BY BEING REHEARSED AGAIN, WHICH IS THE ONE THING IT USED TO TAKE TO USE ONE. A rewrite is proved on a copy, and the accepting step refuses that copy once the repository has been committed to since it was taken - rightly, because accepting it would throw that work away. But until this existed the only way to reach the accepting step was through a fresh rehearsal, so a proof that came out clean could not be acted on: it had to be made all over again. Measured here, that was an hour and twenty minutes of machine time to reproduce an answer already written down, and an hour and twenty minutes is long enough for somebody to commit and make the new one stale too.");
  ("Nothing is trusted that was not re-checked. The commit named is checked against what the repository holds right now, so a copy taken before somebody else's work is refused before anything is touched. What the copy came out holding is read from the copy itself rather than taken on anybody's word, and the repository is afterwards proved to be holding exactly that. A folder named wrongly fails that proof, and the undo written beforehand is what puts it back.");
  ("The commit is the one thing that has to be said out loud, because it is not in the copy any more - it is what the repository stood at when the copy was taken, and the copy's own past was rewritten out from under it. It is in what the rehearsal handed back.");
  let tree = await git_folder_head_tree(clone_folder);
  let rehearsed = {
    clone_folder,
    commit,
    tree,
  };
  let accepted = await git_history_rewrite_accept(
    folder,
    rehearsed,
    bundle_path,
  );
  return accepted;
}
