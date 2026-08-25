import { regex_punctuation_apostrophe_kept } from "./regex_punctuation_apostrophe_kept.mjs";
export function text_punctuation_apostrophe_kept_removed(t) {
  "One piece of text with its punctuation taken out, except for the apostrophe, which is left standing as a letter of the word it sits inside.";
  "The curly apostrophe a typesetter writes is turned into the plain one first, because a dictionary is written with the plain one and the two look alike to a reader and not at all alike to a lookup.";
  "★ AN APOSTROPHE AT EITHER END OF THE WORD IS DROPPED AGAIN, BECAUSE THERE IT IS A QUOTATION MARK RATHER THAN A LETTER. The same character does both jobs and only its position tells them apart: inside a word it is the possessive in LORD'S and the missing letter in DON'T, and at an end it is the single quotation mark a translator opens a quotation inside a quotation with. Keeping it there made words like 'WOMAN' and GARDEN' that nothing has ever heard of, and there were seven hundred and ninety-one of them.";
  let straight = t.replace(/[‘’]/g, "'");
  let r = regex_punctuation_apostrophe_kept();
  let bare = straight.replace(r, "");
  let trimmed = bare.replace(/^'+/, "").replace(/'+$/, "");
  return trimmed;
}
