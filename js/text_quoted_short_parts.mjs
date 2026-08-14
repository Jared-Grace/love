import { list_add } from "./list_add.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function text_quoted_short_parts(value) {
  "A piece of text cut into its plain runs and the short pieces written in single quotes, in the order they appear: a plain run comes back as text, and a quoted piece as the symbol it holds.";
  "A quoted piece counts only when it is one to three characters with no space among them, which is what keeps an apostrophe inside a word from opening a quote and keeps a whole quoted phrase part of the sentence it belongs to.";
  let pattern = /'([^'\s]{1,3})'/g;
  let parts = [];
  let taken = 0;
  function plain_add(until) {
    let words = value.slice(taken, until);
    if (text_empty_not_is(words)) {
      list_add(parts, words);
    }
  }
  let match = pattern.exec(value);
  while (match) {
    plain_add(match.index);
    let symbol = match[1];
    list_add(parts, {
      symbol,
    });
    taken = match.index + match[0].length;
    match = pattern.exec(value);
  }
  plain_add(value.length);
  return parts;
}
