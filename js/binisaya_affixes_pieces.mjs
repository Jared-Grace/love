import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_split } from "./text_split.mjs";
export function binisaya_affixes_pieces(affixes) {
  "The separate pieces of one word's construction, taken out of the single run of shorthand binisaya.com writes them in.";
  "They come apart at the tilde because that is what the site puts between them, and the empty piece a trailing tilde leaves behind is dropped - it is punctuation running out, not a piece with nothing in it.";
  "Three readers were splitting this same string the same two ways before answering three different questions about it, so the splitting is here and the questions are elsewhere.";
  let split = text_split(affixes, "~");
  function readable_is(piece) {
    let kept = text_empty_not_is(piece);
    return kept;
  }
  let r = list_filter(split, readable_is);
  return r;
}
