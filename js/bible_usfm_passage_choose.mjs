import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { bible_usfm_chapters_render } from "./bible_usfm_chapters_render.mjs";
import { bible_usfm_books_render } from "./bible_usfm_books_render.mjs";
export async function bible_usfm_passage_choose(
  parent,
  version,
  book_code_current,
  on_chosen,
) {
  arguments_assert(arguments, 4);
  ("$plain parent");
  ("$plain version");
  ("$plain book_code_current");
  ("Choosing a passage of a usfm bible in one place: the canon first, then the chapters of whichever book was pressed, then the choice handed back as a book and a number.");
  ("THE TWO PICKERS SHARE ONE PLACE ON THE PAGE ON PURPOSE. Choosing a book and choosing a chapter are two halves of one act, and drawing them side by side would leave a list of chapters of a book nobody has chosen yet sitting under the canon, which is a screen that has to be read before it can be used.");
  ("What is handed back is the book code and the chapter as a number, because that is what everything downstream of a choice wants - a file to read, a passage to name, a document to write. The chapter code the picker speaks in stops here.");
  async function on_book(book) {
    let book_code = property_get(book, "book_code");
    function on_chapter(chapter_code) {
      let chapter_number = ebible_chapter_code_to_number(chapter_code);
      on_chosen(book_code, chapter_number);
    }
    await bible_usfm_chapters_render(parent, version, book_code, on_chapter);
  }
  await bible_usfm_books_render(parent, version, book_code_current, on_book);
}
