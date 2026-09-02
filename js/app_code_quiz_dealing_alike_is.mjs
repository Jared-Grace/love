import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_dealing_value_alike_is } from "./app_code_quiz_dealing_value_alike_is.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { js_tokens_join_repeated_is } from "./js_tokens_join_repeated_is.mjs";
import { equal } from "./equal.mjs";
import { app_code_quiz_tokens_values_mirrored_is } from "./app_code_quiz_tokens_values_mirrored_is.mjs";
export function app_code_quiz_dealing_alike_is(code, candidate) {
  "Whether a line made by dealing a question's own value tiles round its own places is still a right answer to the question the learner was actually asked: it comes out to the value they were shown, and it keeps the two things about the question a learner can see on the screen without being told which lesson they are in - a repeat across a join, and values that read the same backwards.";
  "The value is the whole of what the screen says, and it is asked here by the core this is built on. Everything above the core is there because a lesson is about how a line is written and not only about what it comes to, so a dealing that keeps the value while writing a different sentence out of the same tiles is not the answer the lesson wanted.";
  "The two rules above the value are read off the question rather than declared by a lesson, and that is deliberate. A chaining lesson writes 1 < 3 && 3 < 6, where the middle number is the one both comparisons are about, and the repeat across the join is what shows that; 3 < 6 && 1 < 3 is true out of the same tiles and chains nothing. A swapping lesson writes (7 === 6) === (6 === 7), whose values mirror; (7 === 7) === (6 === 6) is true out of the same tiles and has stopped being about swapping. Neither lesson has to say so, because both are things a learner can see in the line they were given.";
  "Every lesson that measurably needed protecting is covered by one of the two - the four swapping lessons by the mirror, the chaining lesson by the join. Reading the rules off the question rather than off a list of lesson names is what keeps a new lesson from having to be added to anything.";
  "It is asked only of a dealing - values into value places, every sign and bracket left where the question put them. A rearrangement free to move a sign can land on the right value while saying something else entirely, so those are still asked what they mean rather than what they come to.";
  arguments_assert(arguments, 2);
  let value_alike = app_code_quiz_dealing_value_alike_is(code, candidate);
  if (not(value_alike)) {
    return false;
  }
  let asked = app_code_quiz_tokens(code);
  let dealt = app_code_quiz_tokens(candidate);
  let join_asked = js_tokens_join_repeated_is(asked);
  let join_dealt = js_tokens_join_repeated_is(dealt);
  let join_alike = equal(join_asked, join_dealt);
  if (not(join_alike)) {
    return false;
  }
  let mirror_asked = app_code_quiz_tokens_values_mirrored_is(asked);
  let mirror_dealt = app_code_quiz_tokens_values_mirrored_is(dealt);
  let mirror_alike = equal(mirror_asked, mirror_dealt);
  return mirror_alike;
}
