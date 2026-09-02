import { list_size_subtract } from "./list_size_subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
export function js_tokens_join_repeated_is(tokens) {
  "whether a line writes the very same word immediately either side of a join, the way a chain broken in two writes its middle number twice - 1 < 2 && 2 < 3 does and 1 < 2 && 3 < 4 does not";
  "A join is asked about and not every operator, because this is about the one shape where a repeat carries meaning: two comparisons that share an end are saying something about the thing they share, and a reader who cannot see the same word twice cannot see that they do.";
  "The ends of the line are not looked at. A join needs something on both sides of it to repeat, so a first or last token cannot be one, and asking would read past the list.";
  arguments_assert(arguments, 1);
  let joins = ["&&", "||"];
  let last = list_size_subtract(tokens, 1);
  let index = 1;
  while (less_than(index, last)) {
    let token = list_get(tokens, index);
    let joining = list_includes(joins, token);
    if (joining) {
      let before_index = subtract(index, 1);
      let after_index = add(index, 1);
      let before = list_get(tokens, before_index);
      let after = list_get(tokens, after_index);
      let same = equal(before, after);
      if (same) {
        return true;
      }
    }
    index = add(index, 1);
  }
  return false;
}
