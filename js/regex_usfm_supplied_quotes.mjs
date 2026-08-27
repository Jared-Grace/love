export function regex_usfm_supplied_quotes() {
  "Brackets holding nothing but quote marks, which is how a printing writes a quote mark it supplied rather than found.";
  "Square brackets in this translation mean the words inside them were supplied - they stand in the English because the sentence needs them, not because a word stood there in the Hebrew or the Greek. Supplied words are scripture and stay. Supplied punctuation is not: a bracketed pair of closing quotes says where a speech that was never closed would close, which is a note to a typesetter about a page.";
  "The publisher's own plain-text edition settles it. The same verse that ends with a bracketed pair of quotes in the marked-up file ends without them there, so dropping them is the publisher's reading and not ours.";
  "Only brackets whose whole content is quote marks are found, so a bracketed word is left exactly where it is.";
  let r = /\[[‘’“”'"]+\]/g;
  return r;
}
