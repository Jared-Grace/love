import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_token_places_of_kind } from "./app_code_quiz_token_places_of_kind.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_size } from "./list_size.mjs";
import { multiply } from "./multiply.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_places_set_copy } from "./list_places_set_copy.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_code_quiz_tile_dealings_or_null(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("One line's tiles, and every line its own tiles can be dealt into - each tile handed round among the places of its own kind, values among value places and signs among sign places - or nothing at all, when there are more ways than anybody would walk.");
  ("Both makers of alternative answers begin here and they must begin identically, because one of them exists to check the other: a maker that walked a different set from the checker would report a hole that is only a disagreement about where to look.");
  ("THE SIGNS ARE DEALT AS WELL AS THE VALUES, and they were not always. A learner shown true and handed the tiles of (3 > 5) !== (6 < 7) can build (3 < 5) !== (7 > 6) - the same tiles, the same shape, and true - and was told the sign they pressed was wrong, because only the values were ever handed round. There is nothing on the screen that picks one of those two lines out from the other, so a walk that reaches only one of them was never walking the learner's real choices.");
  ("What keeps a dealt sign honest is asked further down rather than here: a sign in another sign's place can change what binds to what, and the keeper of dealings holds every dealt line to the shape of the question. Walking them and keeping them are two jobs, and this is the walking one - it offers every deal and judges none.");
  ("The ceiling counts the dealt lines rather than the tiles, so a line whose tiles repeat is not refused for a length it does not really have. Declining costs nothing: everything reached this way is over and above the answers a lesson already holds.");
  let tokens = app_code_quiz_tokens(code);
  let value_places = app_code_quiz_token_places_of_kind(tokens, "value");
  let sign_places = app_code_quiz_token_places_of_kind(tokens, "sign");
  let values = list_places_get(tokens, value_places);
  let signs = list_places_get(tokens, sign_places);
  let value_orderings = list_permutations(values);
  let sign_orderings = list_permutations(signs);
  let value_count = list_size(value_orderings);
  let sign_count = list_size(sign_orderings);
  let count = multiply(value_count, sign_count);
  let ceiling = 5040;
  let too_many = greater_than(count, ceiling);
  if (too_many) {
    return null;
  }
  let dealings = [];
  function deal_values(value_ordering) {
    let valued = list_places_set_copy(tokens, value_places, value_ordering);
    function deal_signs(sign_ordering) {
      let dealt = list_places_set_copy(valued, sign_places, sign_ordering);
      list_add(dealings, dealt);
    }
    each(sign_orderings, deal_signs);
  }
  each(value_orderings, deal_values);
  let r = {
    tokens,
    dealings,
  };
  return r;
}
