import { app_code_quiz_token_kind } from "./app_code_quiz_token_kind.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_get } from "./list_get.mjs";
import { list_join } from "./list_join.mjs";
import { list_map } from "./list_map.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_set } from "./list_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { multiply } from "./multiply.mjs";
import { range } from "./range.mjs";
export function app_code_lesson_quiz_token_select_shape_variations(code) {
  "Every way the question's own tiles can be dealt back into the question's own shape - the brackets, commas and names stay exactly where the question put them, and the values and the signs are handed round among the places of their own kind.";
  "It is here for the lines the other two makers cannot reach. One of them only swaps the two sides of a sign, so it can never move a sign itself; the other permutes every tile and declines above seven of them. A line like (3 !== 2) !== (8 === 6) has eleven tiles and needs a sign moved - (8 !== 6) === (2 !== 3) is the same statement dealt out differently - so neither maker offered it and a learner who built it was told they were wrong.";
  "Dealing rather than re-printing is what keeps the brackets. A line written back out from its tree loses a bracket the tree does not need, and a lesson about brackets then loses the very answer it teaches; here nothing is parsed and nothing is printed, so a bracket cannot go missing.";
  "Nothing is judged here. Every dealing is offered and the caller asks of each whether it still says what the question said - which is the only thing that keeps this from handing a learner a line that merely lands on the right answer.";
  "The dealing is bounded so that a long line declines rather than counting out its factorial. That costs a lesson nothing it had before: everything this reaches is over and above the two makers already there, and the question's own wording is put in the pool by hand.";
  let tokens = app_code_quiz_tokens(code);
  let value_kind = "value";
  let sign_kind = "sign";
  let places = range(list_size(tokens));
  function places_of(kind) {
    let found = [];
    function keep(at) {
      let token = list_get(tokens, at);
      let token_kind = app_code_quiz_token_kind(token);
      let wanted = equal(token_kind, kind);
      if (wanted) {
        list_add(found, at);
      }
    }
    each(places, keep);
    return found;
  }
  function tiles_at(at_list) {
    function tile_of(at) {
      let token = list_get(tokens, at);
      return token;
    }
    let tiles = list_map(at_list, tile_of);
    return tiles;
  }
  let value_places = places_of(value_kind);
  let sign_places = places_of(sign_kind);
  let value_orderings = list_permutations(tiles_at(value_places));
  let sign_orderings = list_permutations(tiles_at(sign_places));
  let dealings = multiply(
    list_size(value_orderings),
    list_size(sign_orderings),
  );
  let ceiling = 5040;
  let too_many = greater_than(dealings, ceiling);
  if (too_many) {
    let none = [];
    return none;
  }
  let codes = [];
  function deal(value_ordering) {
    function deal_signs(sign_ordering) {
      let dealt = list_copy(tokens);
      function place_value(index) {
        let at = list_get(value_places, index);
        let tile = list_get(value_ordering, index);
        list_set(dealt, at, tile);
      }
      each(range(list_size(value_places)), place_value);
      function place_sign(index) {
        let at = list_get(sign_places, index);
        let tile = list_get(sign_ordering, index);
        list_set(dealt, at, tile);
      }
      each(range(list_size(sign_places)), place_sign);
      let separator = " ";
      let written = list_join(dealt, separator);
      list_add(codes, written);
    }
    each(sign_orderings, deal_signs);
  }
  each(value_orderings, deal);
  let unique = list_unique(codes);
  return unique;
}
