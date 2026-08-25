import { regex_punctuation_apostrophe_kept } from "./regex_punctuation_apostrophe_kept.mjs";
export function text_punctuation_apostrophe_kept_removed(t) {
  "One piece of text with its punctuation taken out, except for the apostrophe, which is left standing as a letter of the word it sits inside.";
  "The curly apostrophe a typesetter writes is turned into the plain one first, because a dictionary is written with the plain one and the two look alike to a reader and not at all alike to a lookup.";
  let straight = t.replace(/[‘’]/g, "'");
  let r = regex_punctuation_apostrophe_kept();
  let bare = straight.replace(r, "");
  return bare;
}
