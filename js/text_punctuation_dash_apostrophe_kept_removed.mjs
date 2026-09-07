import { regex_punctuation_dash_apostrophe_kept } from "./regex_punctuation_dash_apostrophe_kept.mjs";
export function text_punctuation_dash_apostrophe_kept_removed(t) {
  "One piece of text with its punctuation taken out, except for the dash and the apostrophe, which are both left standing as letters of the word they sit inside.";
  "The curly apostrophe a typesetter writes is turned into the plain one first, for the same reason the sibling does it: the two look alike to a reader and not at all alike to anything that looks a word up or files it away under its own name.";
  "★ EITHER MARK IS DROPPED AGAIN WHERE IT STANDS AT AN END OF THE WORD, BECAUSE THERE IT WAS PUNCTUATION AFTER ALL. An apostrophe at an end is the quotation mark a translator opens a quotation inside a quotation with, and a dash at an end was standing between things rather than inside one. Only position tells either apart from its letter-shaped self, which is why it is done here and not in the pattern.";
  let straight = t.replace(/[‘’]/g, "'");
  let r = regex_punctuation_dash_apostrophe_kept();
  let bare = straight.replace(r, "");
  let trimmed = bare.replace(/^['-]+/, "").replace(/['-]+$/, "");
  return trimmed;
}
