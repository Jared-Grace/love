import { app_code_quiz_token_places_of_kind } from "./app_code_quiz_token_places_of_kind.mjs";
import { app_code_quiz_tokens } from "./app_code_quiz_tokens.mjs";
import { each } from "./each.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { list_permutations } from "./list_permutations.mjs";
import { list_places_get } from "./list_places_get.mjs";
import { list_places_set_copy } from "./list_places_set_copy.mjs";
import { list_size } from "./list_size.mjs";
import { list_unique } from "./list_unique.mjs";
import { multiply } from "./multiply.mjs";
export function app_code_lesson_quiz_token_select_shape_variations(code) {
  "Every way the question's own tiles can be dealt back into the question's own shape - the brackets, commas and names stay exactly where the question put them, and the values and the signs are handed round among the places of their own kind.";
  "It is here for the lines the other two makers cannot reach. One of them only swaps the two sides of a sign, so it can never move a sign itself; the other permutes every tile and declines above seven of them. A line like (3 !== 2) !== (8 === 6) has eleven tiles and needs a sign moved - (8 !== 6) === (2 !== 3) is the same statement dealt out differently - so neither maker offered it, and a learner who built it was told they were wrong.";
  "Dealing rather than re-printing is what keeps the brackets. A line written back out from its tree loses a bracket the tree does not need, and a lesson about brackets then loses the very answer it teaches; here nothing is parsed and nothing is printed, so a bracket cannot go missing.";
  "Nothing is judged here. Every dealing is offered, and the caller asks of each whether it still says what the question said - which is the only thing that keeps this from handing a learner a line that merely lands on the right answer.";
  "The dealing is bounded so that a long line declines rather than counting out its factorial. That costs a lesson nothing it had before: everything this reaches is over and above the two makers already there, and the question's own wording is put in the pool by hand.";
  let tokens = app_code_quiz_tokens(code);
  let value_places = app_code_quiz_token_places_of_kind(tokens, "value");
  let sign_places = app_code_quiz_token_places_of_kind(tokens, "sign");
  let list = list_places_get(tokens, value_places);
  let value_orderings = list_permutations(list);
  let list2 = list_places_get(tokens, sign_places);
  let sign_orderings = list_permutations(list2);
  let left = list_size(value_orderings);
  let right = list_size(sign_orderings);
  let dealings = multiply(left, right);
  let ceiling = 5040;
  let too_many = greater_than(dealings, ceiling);
  if (too_many) {
    let none = [];
    return none;
  }
  let codes = [];
  function deal_values(value_ordering) {
    let valued = list_places_set_copy(tokens, value_places, value_ordering);
    function deal_signs(sign_ordering) {
      let dealt = list_places_set_copy(valued, sign_places, sign_ordering);
      let separator = " ";
      let written = list_join(dealt, separator);
      list_add(codes, written);
    }
    each(sign_orderings, deal_signs);
  }
  each(value_orderings, deal_values);
  let unique = list_unique(codes);
  return unique;
}
