export function permission_grant_words_scripture() {
  "the parameter-name words that say a code is a place in the Bible rather than something to run";
  "a code is only ever refused because it might be source text handed to a function that runs it, and a book, a chapter and a verse are none of those - they are an address, and the whole of what a caller can do with a wrong one is read the wrong passage";
  "the word has to sit beside code in the same name for either to mean anything here, so this list is read only alongside the unsafe one and never on its own. Chapter alone is a chapter of a lesson as easily as a chapter of scripture, and code alone is the thing being guarded against";
  "each plural is spelled out beside its single form, because a part of a name is matched whole rather than searched inside. chapters_codes is a list of Bible chapters and is written in the plural at both ends, so leaving the plurals unspelled would miss it; spelling them is what lets the matching stay whole, which is what keeps a name like codebook from clearing anything";
  let words = ["book", "books", "chapter", "chapters", "verse", "verses"];
  return words;
}
