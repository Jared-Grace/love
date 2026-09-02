import { arguments_assert } from "./arguments_assert.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_value_dealings_alike } from "./app_code_quiz_value_dealings_alike.mjs";
export function app_code_quiz_value_dealings(code) {
  "Every other line a learner could reasonably build out of an unscramble's own tiles: the question's shape exactly as it wrote it - every bracket, every comma, every name and every sign left standing where it stands - with only the values handed round among the places of their own kind, and only the dealings kept that come out to the value the learner was shown and repeat their values where the question repeated its own.";
  "This exists because the backwards unscramble shows a value and nothing else. A learner given the tiles of (2 > 9) === (5 === 4) and told the answer is true has nothing on the screen that picks that line out from (2 > 4) === (5 === 9), so both are right answers to the question that was actually put to them, and the quiz used to accept only the first. Every expression lesson in the course can draw a line with another answer as good as the one it wants, and a few of them can draw nothing else.";
  "The signs stay put, and that is the whole of the difference between this and the maker that deals the signs too. A line free to move a sign can hit the right value while saying something quite else - 1 < 9 && 3 < 9 dealt into 1 && 9 < 3 < 9 is true, and is not a comparison of two comparisons at all - so those go on being asked what they mean. A line whose values alone have moved is the same sentence about different numbers, which is the shape every one of these lessons is teaching.";
  "Only a line standing for a value is dealt at all. A statement has no value the learner was shown, so there is nothing for a dealing to agree with, and dealing it would only offer arrangements nothing could judge. That test is the whole of what this adds to the dealings themselves.";
  "The dealing is bounded so a long line declines rather than counting out its factorial, and where that bound sits is asked of the maker of dealings rather than repeated here - the checker that looks for holes in this pool asks the same maker, so neither can walk a different set from the other. Nothing is lost by declining: everything here is over and above the pool the other makers already fill.";
  arguments_assert(arguments, 1);
  let none = [];
  let expression_is = js_expression_is(code);
  if (not(expression_is)) {
    return none;
  }
  let dealings = app_code_quiz_value_dealings_alike(code);
  return dealings;
}
