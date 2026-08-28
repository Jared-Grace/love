import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { bible_glyph_chapters_by_book } from "./bible_glyph_chapters_by_book.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { app_shared_bible_pictures_chapter_hash } from "./app_shared_bible_pictures_chapter_hash.mjs";
import { app_shared_button_wide_link_hash_name } from "./app_shared_button_wide_link_hash_name.mjs";
export function app_emoji_bible_chapter_index(content, chapters) {
  arguments_assert(arguments, 2);
  ("The list of every chapter of the picture Bible that has been written, gathered under its book, each chapter a link that opens it.");
  ("IT LISTS WHAT EXISTS RATHER THAN WHAT THE CANON HOLDS, which is the one place this page's shape departs from the bible reader next door. That reader offers the sixty six books because it has all of them; a book picker here would offer eleven hundred and sixty four chapters that are not written and twenty five that are, which is a picker that mostly says no.");
  ("The departure is about coverage and not about design, and it ends by itself. The moment the picture Bible holds whole books, the picker it grows into is the reader's own.");
  ("THE BOOKS ARE HEADINGS BECAUSE A FLAT LIST OF TWENTY FIVE HIDES THE ONE FACT WORTH SEEING. Read as one column the chapters look like twenty five scattered pieces; gathered, they say that four books are complete and that seven chapters of John are here, which is the difference between a sampler and something a person can sit down and read.");
  ("THE ORDER IS THE CANON'S AND NOT THE ORDER THESE WERE WRITTEN IN, which ",
    fn_name("bible_glyph_chapters_by_book"),
    " decides. The stored order is a build log and belongs to whoever is building; a reader is looking for a book and expects Exodus before John.");
  ("EACH ROW IS A REAL LINK RATHER THAN SOMETHING ONLY THIS PAGE CAN RUN, because a chapter is the thing here most likely to be handed to somebody. A browser offers to copy where something goes, or to open it in a new tab, or to keep it for later, only when the thing pressed really is a link.");
  ("The width of a thumb, for the reason the songs next door are: on a phone this list is the whole way in, and a wide card is the difference between reaching a chapter in one tap and in three.");
  ("EVERY ROW SAYS THE BOOK AGAIN under a heading that just said it, and that is on purpose. The row is what gets copied, kept and sent, and a card reading only a number is a card nobody can place once it has left the list it was standing in.");
  let heading = "The chapters written so far.";
  html_p_text(content, heading);
  let books = bible_glyph_chapters_by_book(chapters);
  for (let book of books) {
    let book_text = property_get(book, "book_text");
    let title = html_div_text_bold(content, book_text);
    app_shared_button_gap_above(title);
    let held = property_get(book, "chapters");
    for (let chapter of held) {
      let reference = property_get(chapter, "reference");
      let chapter_code = property_get(chapter, "chapter_code");
      let hash = app_shared_bible_pictures_chapter_hash(chapter_code);
      let button = app_shared_button_wide_link_hash_name(
        content,
        hash,
        reference,
      );
      app_shared_button_gap_above(button);
    }
  }
}
