import { arguments_assert } from "./arguments_assert.mjs";
import { commits_hand_edit_kinds_generic } from "./commits_hand_edit_kinds_generic.mjs";
import { commit_edit_prose_verb_named } from "./commit_edit_prose_verb_named.mjs";
export async function commits_hand_edit_prose_verbs(count_given) {
  "How many of the hand-made single-file edits to code were prose a verb already in the repo would have made outright, named by the verb that fits.";
  "IT IS THE READING THAT SETTLES WHETHER ANYTHING SHOULD BE BUILT. The count of prose-only hand edits beside it is a number with no verdict in it, because a paragraph rewritten by hand and a single line reworded by hand look the same from there and only one of them was a command that was there and was not reached for. Splitting the count by the verb that fits turns it into the case for or against catching a prose edit as it is made.";
  arguments_assert(arguments, 1);
  let r = await commits_hand_edit_kinds_generic(
    count_given,
    commit_edit_prose_verb_named,
  );
  return r;
}
