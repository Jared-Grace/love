import { js_literal_is } from "./js_literal_is.mjs";
import { not } from "./not.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
export function js_literal_value_try(node) {
  "The value a written word holds, and nothing at all when the node is not a written word - nothing included.";
  "Nothing rather than a refusal, because this is asked of whatever happens to be standing somewhere, and most of what stands anywhere is not a written word. A refusal would make the ordinary case the loud one, and every caller would answer it with the same two lines this holds.";
  let literal = js_literal_is(node);
  if (not(literal)) {
    return null;
  }
  let value = js_literal_value_get(node);
  return value;
}
