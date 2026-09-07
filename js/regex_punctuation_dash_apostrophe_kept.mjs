export function regex_punctuation_dash_apostrophe_kept() {
  "Everything that is not part of a word itself, in any script, except that a plain dash and a plain apostrophe are both left standing.";
  "The two beside this one each keep one of the marks and cut at the other, because each was written for a question about a language: does a dash join two words here, and is a possessive its own dictionary entry. This one is for a different question - not what the words of a language are, but what a person writing about a passage will treat as one word - and there both marks are inside.";
  "★ THE ANSWER WAS READ OFF WHAT SOMEBODY HAD ALREADY WRITTEN RATHER THAN DECIDED. The Urdu gloss store, at two and a half thousand entries, holds demon-possessed, mother-in-law and well-pleasing whole, and holds abraham's, don't and it's whole as well. A reader that cut at either mark would have left every one of those with a button that plays nothing.";
  let r = /[^\p{L}\p{M}\p{N}'-]/gu;
  return r;
}
