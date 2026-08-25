export function regex_punctuation_apostrophe_kept() {
  "Everything that is not part of a word itself, in any script, except that the apostrophe is left standing.";
  "A pronouncing dictionary spells a possessive as an entry of its own - LORD'S sits beside LORD - so a reader that drops the apostrophe goes looking for LORDS instead, which is a different word and often not there at all. That would turn every possessive in the Bible into a word the dictionary does not know, and make the dictionary look far thinner than it is.";
  "The two readers beside this one keep a dash and keep nothing. Neither is right here, because a dash between two words and a dash inside one look alike, while an apostrophe inside a word is the only place an apostrophe stands at all once the quotation marks are gone.";
  let r = /[^\p{L}\p{M}\p{N}']/gu;
  return r;
}
