import { list_map_unique } from "./list_map_unique.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_quiz_tile_dealings_or_null } from "./app_code_quiz_tile_dealings_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
export function app_code_lesson_quiz_token_select_shape_variations(code) {
  "$plain code";
  arguments_assert(arguments, 1);
  ("Every way the question's own tiles can be dealt back into the question's own shape, written out as lines - the brackets, commas and names stay exactly where the question put them, and the values and the signs are handed round among the places of their own kind.");
  ("It is here for the lines the other two makers cannot reach. One of them only swaps the two sides of a sign, so it can never move a sign itself; the other permutes every tile and declines above seven of them. A line like (3 !== 2) !== (8 === 6) has eleven tiles and needs a sign moved - (8 !== 6) === (2 !== 3) is the same statement dealt out differently - so neither maker offered it, and a learner who built it was told they were wrong.");
  ("The dealing itself is not done here. It is one walk, asked for by name, and the checker of these answers asks the same one - because a maker that walked a different set from its checker would report a hole that is only a disagreement about where to look. What is left here is the writing out: a dealing is a list of tiles, and a lesson wants a line.");
  ("Dealing rather than re-printing is what keeps the brackets. A line written back out from its tree loses a bracket the tree does not need, and a lesson about brackets then loses the very answer it teaches; here nothing is parsed and nothing is printed, so a bracket cannot go missing.");
  ("Nothing is judged here. Every dealing is offered, and the caller asks of each whether it still says what the question said - which is the only thing that keeps this from handing a learner a line that merely lands on the right answer.");
  ("A line too long to deal is answered with no variations rather than with nothing at all, because a lesson asking for extra answers can use an empty list and has no use for a null. That costs a lesson nothing it had before: everything this reaches is over and above the two makers already there, and the question's own wording is put in the pool by hand.");
  let laid = app_code_quiz_tile_dealings_or_null(code);
  let too_many = null_is(laid);
  if (too_many) {
    let none = [];
    return none;
  }
  let dealings = property_get(laid, "dealings");
  let unique = list_map_unique(dealings, list_join_space);
  return unique;
}
