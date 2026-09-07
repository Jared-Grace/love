import { arguments_assert } from "./arguments_assert.mjs";
import { js_expression_is } from "./js_expression_is.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_tile_dealings_alike } from "./app_code_quiz_tile_dealings_alike.mjs";
export function app_code_quiz_tile_dealings(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("Every other line a learner could reasonably build out of an unscramble's own tiles: the question's shape exactly as it wrote it - every parenthesis, every comma and every name left standing where it stands - with the tiles handed round among the places of their own kind, values among value places and signs among sign places, and only the dealings kept that come out to the value the learner was shown and go on saying it the way the question said it.");
  ("This exists because the backwards unscramble shows a value and nothing else. A learner given the tiles of (2 > 9) === (5 === 4) and told the answer is true has nothing on the screen that picks that line out from (2 > 4) === (5 === 9), so both are right answers to the question that was actually put to them, and the quiz used to accept only the first. Every expression lesson in the course can draw a line with another answer as good as the one it wants, and a few of them can draw nothing else.");
  ("THE SIGNS ARE HANDED ROUND TOO, and for exactly the same reason the values are. Shown true and the tiles of (3 > 5) !== (6 < 7), a learner can build (3 < 5) !== (7 > 6) out of the very same tiles and be just as right, and while only the values moved they were told the sign they pressed was wrong. Nothing on the screen tells those two lines apart, so nothing here may either.");
  ("What stops a moved sign from writing a different sentence is not that it cannot move but that the line it makes is held to the question's own tree: 1 < 9 && 3 < 9 dealt into 1 && 9 < 3 < 9 is true and is not a comparison of two comparisons at all, so it is refused for its shape rather than for where its signs came from. That judgment lives with the keeper of dealings, which is where the pool and the checker of the pool both read it from.");
  ("Only a line standing for a value is dealt at all. A statement has no value the learner was shown, so there is nothing for a dealing to agree with, and dealing it would only offer arrangements nothing could judge. That test is the whole of what this adds to the dealings themselves.");
  ("The dealing is bounded so a long line declines rather than counting out its factorial, and where that bound sits is asked of the maker of dealings rather than repeated here - the checker that looks for holes in this pool asks the same maker, so neither can walk a different set from the other. Nothing is lost by declining: everything here is over and above the pool the other makers already fill.");
  let none = [];
  let expression_is = js_expression_is(code);
  if (not(expression_is)) {
    return none;
  }
  let dealings = app_code_quiz_tile_dealings_alike(code);
  return dealings;
}
