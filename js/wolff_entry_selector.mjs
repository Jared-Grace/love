export function wolff_entry_selector() {
  "Where in Wolff's page one dictionary entry sits.";
  "The book's own divisions are what this leans on: the entries live inside the seventeen sections the dictionary opens for the letters of the alphabet, and one entry is one paragraph directly inside a section's body. Everything the volume carries that is not the dictionary - the preface, the introduction, the notes on how to read it - sits outside those sections and so is left where it is without anything having to name it.";
  let selector = "div.letter div.divBody > p";
  return selector;
}
