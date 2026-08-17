export function permission_grant_words_scripture() {
  "the parameter-name words that say a code is a place in the Bible rather than something to run";
  "a code is only ever refused because it might be source text handed to a function that runs it, and a book, a chapter and a verse are none of those - they are an address, and the whole of what a caller can do with a wrong one is read the wrong passage";
  "the word has to sit beside code in the same name for either to mean anything here, so this list is read only alongside the unsafe one and never on its own. Chapter alone is a chapter of a lesson as easily as a chapter of scripture, and code alone is the thing being guarded against";
  "the plural is covered without being spelled, because the reading asks whether the name contains the word rather than whether it equals it - chapters_codes carries both chapter and code and is a list of Bible chapters, which is exactly the name a spelled-out list would have missed";
  let words = ["book", "chapter", "verse"];
  return words;
}
