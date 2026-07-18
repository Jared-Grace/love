import { js_highlight_keyword_value_is } from "./js_highlight_keyword_value_is.mjs";
// Maps one tokenizer token to a CSS class. Real keywords have a lowercase-letter
// label (import/export/function/return); punctuation labels are symbols.
export function js_highlight_token_class(token) {
  let label = token.type.label;
  if (label === "string") {
    return "t-str";
  }
  if (label === "num") {
    return "t-num";
  }
  if (label === "name") {
    if (js_highlight_keyword_value_is(token.value)) {
      return "t-kw";
    }
    return "t-name";
  }
  let first = label[0];
  if (first >= "a" && first <= "z") {
    return "t-kw";
  }
  return "t-punct";
}
