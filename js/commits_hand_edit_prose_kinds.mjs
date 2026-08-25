import { arguments_assert } from "./arguments_assert.mjs";
import { commits_hand_edit_kinds_generic } from "./commits_hand_edit_kinds_generic.mjs";
import { commit_edit_prose_touched_kind } from "./commit_edit_prose_touched_kind.mjs";
export async function commits_hand_edit_prose_kinds(count_given) {
  "How often the hand-made single-file edits to code touched the paragraphs written for a reader - alone, beside code, or not at all.";
  "IT ANSWERS ONE QUESTION AND ONE ONLY: is it worth catching a prose edit at the moment somebody makes it. Two verbs already write prose, so a hand edit of that shape is a verb that was there and was not reached for. How often that happens is a number, and the number is what decides whether anything should be built around it.";
  "IT IS THE THIRD READING STANDING ON THE SAME WALK, and it differs from the two beside it in nothing but how it names one edit. Naming by the lines a diff printed says what the largest missing command is; naming by the trees on both sides says the same thing more exactly; naming by whether prose was touched says how much of what is already covered is being done by hand anyway.";
  arguments_assert(arguments, 1);
  let r = await commits_hand_edit_kinds_generic(
    count_given,
    commit_edit_prose_touched_kind,
  );
  return r;
}
