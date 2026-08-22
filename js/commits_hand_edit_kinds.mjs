import { arguments_assert } from "./arguments_assert.mjs";
import { commits_hand_edit_kinds_generic } from "./commits_hand_edit_kinds_generic.mjs";
import { commit_edit_kind } from "./commit_edit_kind.mjs";
export async function commits_hand_edit_kinds(count_given) {
  "What the hand-made single-file edits to code actually were, counted by kind, with each one named by counting the lines its diff printed.";
  "THE NAMES THIS ONE CAN OFFER RUN OUT AT SEVERAL LINES OF CODE, because reading the printed lines of a diff is all it does, and a diff does not know what a statement is. That bucket is the largest one it finds and it specifies no command at all, which is what the reading standing on parsed trees was written for.";
  arguments_assert(arguments, 1);
  let r = await commits_hand_edit_kinds_generic(count_given, commit_edit_kind);
  return r;
}
