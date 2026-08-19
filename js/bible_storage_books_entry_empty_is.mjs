import { property_list_empty_is } from "./property_list_empty_is.mjs";
export function bible_storage_books_entry_empty_is(entry) {
  "Whether storage holds no book at all for one bible in the storage record.";
  "IT IS THE ONE FINDING THAT IS ALWAYS A FAULT HERE. A bible holding some books and not others is a real translation published in parts, and there are hundreds of those - a gospel on its own, a New Testament on its own, an Old Testament on its own. A bible holding no books is a reader being offered a language that will answer every verse with an apology, and it is either an upload that never ran or a folder spelled here differently from how it was spelled there.";
  "COUNTED IN BOOKS AND NOT IN FILES, and it was written the other way first. Counting files reads a folder holding one index of what is in it as a folder with something in it, which is exactly backwards - an index of nothing is what an empty bible looks like from the outside. Two of these had an index uploaded to them between one sweep and the next, and the file count went quietly from refusing them to passing them with nothing changed about what a reader would get.";
  let none = property_list_empty_is(entry, "book_codes");
  return none;
}
