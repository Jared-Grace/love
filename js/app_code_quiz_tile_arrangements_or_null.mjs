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
export function app_code_quiz_tile_arrangements_or_null(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("One line's tiles, and every line those tiles can be laid out into with no rule at all about which tile may stand where - or nothing at all, when there are more layouts than anybody would walk.");
  ("It exists to be the one walk that assumes nothing. The pool of other right answers is built by handing each tile round among the places of its own kind, and a walk like that can only ever find what its own idea of a kind lets it reach: while signs were held still, a learner who moved one was told they were wrong, and nothing in the repo could say so, because the only thing looking for missed answers was walking the very same restricted set. A checker that shares the walk with the thing it checks can catch a spelling rule dropping a line, and can never catch the walk itself being too narrow.");
  ("So this one lays every movable tile in every movable place. Whether a layout is a line at all, whether it says what the question said, and whether it is built to the question's own shape are all asked afterwards by the reader that judges dealings, which is shared on purpose - the two must agree about what a right answer is, and disagree only about where to look for one.");
  ("The parentheses, the commas and the names are the movable tiles' opposite: the learner is never handed one, so a layout that moved one is not something they could have built. Holding those still is not a rule about kinds, it is the row of tiles the screen actually gives them.");
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
  let r = {
    tokens,
    arrangements,
  };
  return r;
}
