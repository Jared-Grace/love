import { arguments_assert } from "./arguments_assert.mjs";
import { commits_hand_edit_kinds_generic } from "./commits_hand_edit_kinds_generic.mjs";
import { commit_ast_edit_kind } from "./commit_ast_edit_kind.mjs";
export async function commits_ast_edit_kinds(count_given) {
  "What the hand-made single-file edits to code actually were, counted by kind, with each one named by parsing the file on both sides of the commit and comparing the two.";
  "THIS IS THE READING THE BUILD LIST COMES OUT OF. A name like one statement added or statements reordered is already the specification of a command somebody can go and write, so the largest kinds here are the transforms missing from the repo, in the order they are worth writing. Counting printed lines can never reach that, because the largest thing it can say is that several lines changed.";
  arguments_assert(arguments, 1);
  let r = await commits_hand_edit_kinds_generic(
    count_given,
    commit_ast_edit_kind,
  );
  return r;
}
