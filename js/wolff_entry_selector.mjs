export function wolff_entry_selector() {
  "Where in Wolff's page one dictionary entry sits.";
  "The book's own divisions are what this leans on: the entries live inside the seventeen sections the dictionary opens for the letters of the alphabet, and one entry is one paragraph directly inside a section's body. Everything the volume carries that is not the dictionary - the preface, the introduction, the notes on how to read it - sits outside those sections and so is left where it is without anything having to name it.";
  "The addenda is asked for by name alongside them, because it is the one part of the dictionary the book does not file under a letter. It holds seven hundred forms that were settled after the main body was set, and a word looked up in the letters and not found there may be sitting in it - so leaving it out would answer that the dictionary does not carry a word it does carry.";
  "Both sections open with a paragraph that is prose about the section rather than an entry, and this does not try to tell them apart. A paragraph with no headword in it is not an entry, and that is a thing to notice while reading one rather than while describing where they live.";
  let selector = "div.letter div.divBody > p, div#addenda div.divBody > p";
  return selector;
}
