import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_books } from "./bible_usfm_version_books.mjs";
import { property_get } from "./property_get.mjs";
import { bible_usfm_book_interlinear_words_apart } from "./bible_usfm_book_interlinear_words_apart.mjs";
import { add } from "./add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function bible_usfm_interlinear_words_apart() {
  arguments_assert(arguments, 0);
  ("Every chapter of the Berean where the reading this repo makes off the usfm shelf and the interlinear's English do not say the same words, each with the words one side holds over the other, and beside them how many chapters were actually set side by side.");
  ("★ THIS IS THE ONLY CHECK ON THE COPIED PASSAGE THAT IS NOT BLIND. Everything else that reads the shelf reads it through the same reader, so whatever that reader drops and whatever it lets through is invisible to it. The interlinear's English is the same translation published a second time by another road, so a line that is apparatus rather than scripture is words on one side and nothing on the other, and stands here as words over.");
  ("It is what a caller copying a chapter onto a slide or a card is trusting, so it is asked of every chapter both sides carry rather than of a sample. A sample would be silent about exactly the chapters nobody thought to look at.");
  ("Chapters the two sides agree about are left out, so an empty list means the whole shelf and the whole table say the same words - which is why the count of what was compared comes back beside it, and why an empty list on its own is never the answer.");
  ("The whole Bible costs about five seconds, because the tables are read once for the run and every chapter after the first is free. That is what makes this affordable as a standing check rather than something somebody remembers to do.");
  let books = await bible_usfm_version_books("bsb");
  let rows = [];
  let compared = 0;
  for (let book of books) {
    let book_code = property_get(book, "book_code");
    let book_apart = await bible_usfm_book_interlinear_words_apart(book_code);
    let book_compared = property_get(book_apart, "compared");
    let book_rows = property_get(book_apart, "rows");
    compared = add(compared, book_compared);
    list_add_multiple(rows, book_rows);
  }
  let r = {
    compared,
    rows,
  };
  return r;
}
