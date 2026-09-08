import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_token_places_of_kind } from "./app_code_quiz_token_places_of_kind.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_places_set_copy } from "./list_places_set_copy.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { app_code_quiz_tokens_parentheses_balanced_is } from "./app_code_quiz_tokens_parentheses_balanced_is.mjs";
export function app_code_quiz_tile_arrangements_or_null(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("One line's tiles, and every line those tiles can be laid out into with no rule at all about which tile may stand where - or nothing at all, when there are more layouts than anybody would walk.");
  ("It exists to be the one walk that assumes nothing. The pool of other right answers is built by handing each tile round among the places of its own kind, and a walk like that can only ever find what its own idea of a kind lets it reach: while signs were held still, a learner who moved one was told they were wrong, and nothing in the repo could say so, because the only thing looking for missed answers was walking the very same restricted set. A checker that shares the walk with the thing it checks can catch a spelling rule dropping a line, and can never catch the walk itself being too narrow.");
  ("So this one lays every movable tile in every movable place. Whether a layout is a line at all, whether it says what the question said, and whether it is built to the question's own shape are all asked afterwards by the reader that judges dealings, which is shared on purpose - the two must agree about what a right answer is, and disagree only about where to look for one.");
  ("A PARENTHESIS MOVES TOO, AND SAYING IT COULD NOT WAS A MISTAKE ABOUT THE SCREEN. This walk once held the parentheses, the commas and the names still, on the grounds that the learner is never handed one - and the row of tiles is built from the line's own pieces named once each, so it holds an opening and a closing bracket like it holds everything else, and a learner presses them in whatever order they like. Holding them still made this the third walk in a row that could not see past a bracket, which is exactly how a learner came to be the one who found that the sides of an or may be exchanged.");
  ("So there are two roads here and the arrangements are both of them together. One lays every value and sign in every value and sign place, which is what this always did. The other lays EVERY tile in every place, brackets included, and is the one that assumes nothing at all.");
  ("THE SECOND ROAD IS ADDED AND NEVER SUBSTITUTED, so that widening the walk cannot narrow it. Its ceiling is counted over all the tiles rather than the movable ones, so a long line - a console.log, a Math.floor - is over it while its movable tiles are well under, and if the wide road replaced the narrow one those lines would stop being checked at all. Added, the worst a full row does is decline the extra road and keep the check it already had.");
  ("The wide road throws out a row whose brackets do not close before the row is read, because such a row is a line in no language and the reader would refuse it anyway. That is a saving and not a judgment: everything it lets through is judged in full, by the same reader as ever.");
  ("The ceiling is larger than the dealer's because this walk is wider by construction, and a line over it declines rather than counting out its factorial. Declining costs a check rather than an answer: nothing here is offered to a learner.");
  let tokens = app_code_quiz_tokens(code);
  let value_places = app_code_quiz_token_places_of_kind(tokens, "value");
  let sign_places = app_code_quiz_token_places_of_kind(tokens, "sign");
  let places = list_concat(value_places, sign_places);
  let tiles = list_places_get(tokens, places);
  let count = list_size(tiles);
  let ceiling = 8;
  let too_many = greater_than(count, ceiling);
  if (too_many) {
    return null;
  }
  let layouts = list_permutations(tiles);
  let arrangements = [];
  function lay(layout) {
    let laid = list_places_set_copy(tokens, places, layout);
    list_add(arrangements, laid);
  }
  each(layouts, lay);
  let held_places = app_code_quiz_token_places_of_kind(tokens, "placed");
  let nothing_held = list_empty_is(held_places);
  let all_count = list_size(tokens);
  let all_too_many = greater_than(all_count, ceiling);
  let wide_road = not(nothing_held) && not(all_too_many);
  if (wide_road) {
    let all_layouts = list_permutations(tokens);
    function lay_all(layout) {
      let balanced = app_code_quiz_tokens_parentheses_balanced_is(layout);
      if (balanced) {
        list_add(arrangements, layout);
      }
    }
    each(all_layouts, lay_all);
  }
  let r = {
    tokens,
    arrangements,
  };
  return r;
}
