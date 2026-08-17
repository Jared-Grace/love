import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_parse_expression_try } from "./js_parse_expression_try.mjs";
import { list_filter } from "./list_filter.mjs";
export function fruits_of_the_spirit_identifiers() {
  ("the fruits of the Spirit that a name in JS is allowed to be spelled with");
  ("Eight of the nine. Self-control has a dash in it, and a dash between two words is JS for one taken away from the other, so a line naming a value that reads as a subtraction is not a name at all - it does not run.");
  ("Asked of the parser rather than written down as a shorter list of its own, because a second list would say the same thing as the first one and could stop agreeing with it. A word added to the fruits later is judged here the moment it arrives.");
  let words = fruits_of_the_spirit();
  function identifier_is(word) {
    let expression = js_parse_expression_try(word);
    let ii = js_identifier_is(expression);
    return ii;
  }
  let kept = list_filter(words, identifier_is);
  return kept;
}
