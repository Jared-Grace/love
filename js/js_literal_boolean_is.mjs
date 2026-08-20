import { boolean_is } from "./boolean_is.mjs";
import { js_literal_value_try } from "./js_literal_value_try.mjs";
export function js_literal_boolean_is(node) {
  "Whether this piece of code is a value written out in place, and that value is a plain yes or no.";
  "The twin next door asks the same pair of questions about words, and it is what two readers of a function body already lean on. A yes or no had no such reader, which is why the one place that has to write one could not check what it had written.";
  let value = js_literal_value_try(node);
  let b = boolean_is(value);
  return b;
}
