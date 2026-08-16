import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export function text_quote_end_index(value, from) {
  "Where the quoted run opening at this place ends - the place just past its closing mark, or the end of the text when nothing closes it.";
  "The mark that opened the run is the only one that can close it, so a mark of the other kind inside is ordinary text. A backslash inside the double kind hides whatever follows, which is how a closing mark is written without closing anything; inside the single kind nothing is hidden, and that is the same rule a shell keeps.";
  "An unclosed run is answered with the end of the text rather than refused, because every caller is reading rather than running, and a reader that stopped on a half-written line would give back nothing about the part that is whole.";
  let quote = value[from];
  let index = from + 1;
  while (less_than(index, value.length)) {
    let character = value[index];
    let hides = equal(quote, '"') && equal(character, "\\");
    if (hides) {
      index = index + 2;
      continue;
    }
    let closes = equal(character, quote);
    if (closes) {
      let r = index + 1;
      return r;
    }
    index = index + 1;
  }
  let r2 = value.length;
  return r2;
}
