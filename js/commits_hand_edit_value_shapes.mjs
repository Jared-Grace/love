import { arguments_assert } from "./arguments_assert.mjs";
import { commits_hand_edit_kinds_generic } from "./commits_hand_edit_kinds_generic.mjs";
import { commit_edit_value_shape_named } from "./commit_edit_value_shape_named.mjs";
export async function commits_hand_edit_value_shapes(count_given) {
  "How many of the hand-made single-file edits to code changed nothing but written-out values, split by the shape of the change.";
  "IT IS THE READING THAT SETTLES WHETHER A VALUE VERB IS WORTH BUILDING. The count of value-only hand edits beside it is a number with no verdict in it, because a record rewritten by hand and a single number raised by hand look the same from there and only one of them is a command that could have been reached for.";
  arguments_assert(arguments, 1);
  let r = await commits_hand_edit_kinds_generic(
    count_given,
    commit_edit_value_shape_named,
  );
  return r;
}
