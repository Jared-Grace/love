export function text_letters_digits_none_is(t) {
  "$plain t";
  "the text is any run of characters to look at. It is text and nothing that runs.";
  "Whether the text holds no letter and no digit anywhere in it, so that everything in it is punctuation, a mark, or a space.";
  ("IT IS THE READING OF UNPRONOUNCEABLE. A run with a letter in it can be said out loud and a run with a digit in it can be counted; a run with neither is something a reader looks at and cannot speak, which is the property callers actually want when they ask this.");
  ("IT ASKS ABOUT ENGLISH LETTERS AND NOT LETTERS EVERYWHERE. A word of Greek or Hebrew has no A to Z in it and comes back true here, which would be wrong for a caller holding original text and is right for a caller holding a column of English. Ask this about English.");
  ("EMPTY TEXT COMES BACK TRUE, because empty holds no letter and no digit, which is the plain reading of the question rather than a special case. A caller that means something different by empty is asking two questions and should ask them separately.");
  let letters = text_letters_only(t);
  let digits = text_digits_only(t);
  let no_letters = text_empty_is(letters);
  let no_digits = text_empty_is(digits);
  let none = and(no_letters, no_digits);
  return none;
}
