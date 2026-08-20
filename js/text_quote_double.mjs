import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function text_quote_double(text) {
  "One piece of writing with a double quotation mark put either side of it.";
  "Written here once so that a search for a name as code spells it - in quotation marks, rather than loose in a sentence - reads as what it is at the place that asks for it.";
  let mark = '"';
  let quoted = text_combine_multiple([mark, text, mark]);
  return quoted;
}
