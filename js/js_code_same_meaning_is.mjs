import { equal } from "./equal.mjs";
import { js_node_meaning_key } from "./js_node_meaning_key.mjs";
import { js_parse_expression_try } from "./js_parse_expression_try.mjs";
import { null_is } from "./null_is.mjs";
export function js_code_same_meaning_is(before, after) {
  "Whether two lines say the same thing, however differently the two are written. 9 + 7 + 4 and 4 + 9 + 7 do; 11 - 3 === 44 / 4 and 11 - 3 === 4 / 44 do not, even though both of those come out false.";
  "A line that will not read at all answers no rather than throwing, because the asking is done over rearrangements and most rearrangements of a line are not a line. Two unreadable ones are not each other either - nothing was said by either, so there is nothing they agreed on.";
  let expression = js_parse_expression_try(before);
  let expression_after = js_parse_expression_try(after);
  let missing = null_is(expression) || null_is(expression_after);
  if (missing) {
    let unreadable = false;
    return unreadable;
  }
  let key = js_node_meaning_key(expression);
  let key_after = js_node_meaning_key(expression_after);
  let same = equal(key, key_after);
  return same;
}
