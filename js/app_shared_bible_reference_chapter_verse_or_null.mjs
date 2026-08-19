import { property_list_first } from "./property_list_first.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { ebible_reference_parts } from "./ebible_reference_parts.mjs";
import { ebible_references_names } from "./ebible_references_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function app_shared_bible_reference_chapter_verse_or_null(
  ref_line,
) {
  "The chapter and the verse a reference is asking for - John 3:16 read as the chapter John 3 and the verse 16 - or nothing at all when the line names no book we have.";
  "The first verse is the one taken where a reference names a run of them. A screen that shows one verse at a time has to start somewhere, and the start of what was asked for is the only place that is not a choice made on the reader's behalf.";
  "No verse is fetched to answer this. Which chapter a reference names is a question about the book list and the numbers written after the book, and the reading beside this one that goes and gets the words as well is a great deal of waiting for a page that only wanted to know where to open.";
  arguments_assert(arguments, 1);
  let books_en = await app_shared_bible_read_books_en();
  let v = ebible_references_names(books_en, [ref_line]);
  let book_names = property_get(v, "book_names");
  let placed_not = list_empty_is(book_names);
  if (placed_not) {
    return null;
  }
  let book_name = list_first(book_names);
  let chapter_verses = property_list_first(v, "chapter_verses_list");
  let v2 = ebible_reference_parts(books_en, book_name, chapter_verses);
  let chapter_code = property_get(v2, "chapter_code");
  let verse_number = property_get(v2, "verse_start");
  let r = {
    chapter_code,
    verse_number,
  };
  return r;
}
