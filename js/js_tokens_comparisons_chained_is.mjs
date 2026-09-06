import { arguments_assert } from "./arguments_assert.mjs";
import { js_operators_comparison } from "./js_operators_comparison.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size_subtract } from "./list_size_subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { add } from "./add.mjs";
import { list_includes } from "./list_includes.mjs";
export function js_tokens_comparisons_chained_is(tokens) {
  "whether a line chains two comparisons on the value they share: the very same word written immediately either side of an and, with a comparison sign on the far side of each. 1 < 2 && 2 < 3 does, and 1 < 2 && 3 < 4 does not.";
  "The chain is the one shape where a repeat carries meaning: two comparisons that share an end are saying something about the thing they share, and a reader who cannot see the same word twice cannot see that they do. So all three of those parts are asked for, and a line holding only some of them is not a chain.";
  "AN OR IS NOT A CHAIN. 4 === 4 || 4 >= 5 writes the same word either side of its join and says nothing at all about it jointly - each comparison stands on its own, and the line is true if either one is. Asked as any join, this called that a chain and refused every other true arrangement of its four values, on a lesson whose subject is the or.";
  "NEITHER IS A PAIR OF PLAIN VALUES. true && true is a repeat either side of an and, and there is no comparison on either side of it for the repeated word to be the shared end of; the two words are the whole of what is being joined. Asked without the signs, this called that a chain too.";
  "The ends of the line are not looked at. A chain needs a comparison on both sides of the join, so nothing before the third token can be one, and asking would read past the list.";
  arguments_assert(arguments, 1);
  let join = "&&";
  let operators = js_operators_comparison();
  let signs = list_map_property(operators, "operator");
  let last = list_size_subtract(tokens, 1);
  let index = 2;
  while (less_than(index, last)) {
    let token = list_get(tokens, index);
    let joining = equal(token, join);
    if (joining) {
      let before_index = subtract(index, 1);
      let after_index = add(index, 1);
      let before = list_get(tokens, before_index);
      let after = list_get(tokens, after_index);
      let same = equal(before, after);
      if (same) {
        let sign_before_index = subtract(index, 2);
        let sign_after_index = add(index, 2);
        let sign_before = list_get(tokens, sign_before_index);
        let sign_after = list_get(tokens, sign_after_index);
        let compared_before = list_includes(signs, sign_before);
        let compared_after = list_includes(signs, sign_after);
        let chained = compared_before && compared_after;
        if (chained) {
          return true;
        }
      }
    }
    index = add(index, 1);
  }
  return false;
}
