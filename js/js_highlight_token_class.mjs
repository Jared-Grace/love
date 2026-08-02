import { equal } from "./equal.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { js_highlight_keyword_value_is } from "./js_highlight_keyword_value_is.mjs";
("Maps one tokenizer token to a CSS class. Real keywords have a lowercase-letter");
("label (import/export/function/return); punctuation labels are symbols.");
export function js_highlight_token_class(token) {
  let label = token.type.label;
  if (equal(label, "string")) {
    let r = "t-str";
    return r;
  }
  if (equal(label, "num")) {
    let r2 = "t-num";
    return r2;
  }
  if (equal(label, "name")) {
    if (js_highlight_keyword_value_is(token.value)) {
      let r3 = "t-kw";
      return r3;
    }
    let r4 = "t-name";
    return r4;
  }
  let first = label[0];
  if (greater_than_equal(first, "a") && less_than_equal(first, "z")) {
    let r5 = "t-kw";
    return r5;
  }
  let r6 = "t-punct";
  return r6;
}
