import { arguments_assert } from "./arguments_assert.mjs";
import { js_literal_is } from "./js_literal_is.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { text_is } from "./text_is.mjs";
import { not } from "./not.mjs";
export function js_literal_text_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this piece of code is a value written out in place and that value is words rather than a number, a yes-or-no, or nothing at all.");
  ("It is two questions that only mean anything together, and the second one cannot be asked until the first has been answered. Asking what a piece of code says when it is not a written-out value at all reaches for something that is not there, so the order is part of the question rather than a habit of the caller.");
  ("Two readers of a function body both had to ask it before they could ask their own - one recognising a paragraph written as a lone string, the other a paragraph written with a comma and a name after it - and neither could say so, because the pair had no name.");
  let literal_is = js_literal_is(node);
  if (not(literal_is)) {
    return false;
  }
  let value = js_literal_value_get(node);
  let string_is = text_is(value);
  return string_is;
}
