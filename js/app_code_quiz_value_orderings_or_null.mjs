import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { app_code_quiz_token_places_of_kind } from "./app_code_quiz_token_places_of_kind.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
export function app_code_quiz_value_orderings_or_null(code) {
  "$plain code";
  "One line's tiles, the places among them that hold a value, and every way those values could be handed round those places - or nothing at all, when there are more ways than anybody would walk.";
  "Both makers of alternative answers begin here and they must begin identically, because one of them exists to check the other: a maker that walked a different set of orderings from the checker would report a hole that is only a disagreement about where to look.";
  "The ceiling is a count of orderings rather than a count of values, so a line whose values repeat is not refused for a length it does not really have. Declining costs nothing here - everything reached this way is over and above the answers a lesson already holds - while a line with eight loose values would be walked forty thousand ways for an answer no lesson asks.";
  arguments_assert(arguments, 1);
  let tokens = app_code_quiz_tokens(code);
  let value_places = app_code_quiz_token_places_of_kind(tokens, "value");
  let values = list_places_get(tokens, value_places);
  let orderings = list_permutations(values);
  let ceiling = 5040;
  let too_many = list_size_greater_than(orderings, ceiling);
  if (too_many) {
    return null;
  }
  let r = {
    tokens,
    value_places,
    orderings,
  };
  return r;
}
