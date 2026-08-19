import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function bible_storage_books_entry_empty_is(entry) {
  "Whether storage holds no file at all for one bible in the storage record.";
  "IT IS THE ONE FINDING THAT IS ALWAYS A FAULT HERE. A bible holding some books and not others is a real translation published in parts, and there are hundreds of those - a gospel on its own, a New Testament on its own, an Old Testament on its own. A bible holding nothing is a reader being offered a language that will answer every verse with an apology, and it is either an upload that never ran or a folder spelled here differently from how it was spelled there.";
  "COUNTED IN FILES AND NOT IN BOOKS, because a file whose name says nothing about a book still proves that something is there. A bible uploaded under an older layout has thousands of files and no book name readable off any of them, and calling that empty would send somebody to upload what is already uploaded.";
  let files = property_get(entry, "files");
  let none = equal(files, 0);
  return none;
}
