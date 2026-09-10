import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_lesson_same_as_message(which, right) {
  arguments_assert(arguments, 2);
  ("the sentence that tells a learner the screen they are reading is one they have already read, and what is being asked of them instead of what was asked last time");
  ("It exists because a lesson that reuses an earlier lesson's telling word for word is read as a mistake. A learner who meets the same paragraph twice stops to hunt for the difference, and the difference is not in the paragraph at all - it is in what the card below asks them for. The sentence says that outright so the hunt never starts.");
  ("`which` names the lesson being repeated and `right` says what changed. `which` is a phrase rather than a fixed wording because the repeated lesson is not always the one immediately before: where another lesson sits between the two, the previous lesson is the wrong thing to say and the repeated one has to be named.");
  let r = text_combine_multiple([
    "This lesson is the same as ",
    which,
    ", except ",
    right,
  ]);
  return r;
}
