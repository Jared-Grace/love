import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { app_shared_bible_passage_kept_get } from "./app_shared_bible_passage_kept_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { app_shared_button_back_to } from "./app_shared_button_back_to.mjs";
import { app_shared_bible_books_text } from "./app_shared_bible_books_text.mjs";
import { app_shared_bible_code_verses_open } from "./app_shared_bible_code_verses_open.mjs";
import { app_shared_bible_books_choose } from "./app_shared_bible_books_choose.mjs";
import { ebible_book_code_to_chapter_codes_browser } from "./ebible_book_code_to_chapter_codes_browser.mjs";
import { app_shared_bible_chapters_card } from "./app_shared_bible_chapters_card.mjs";
import { app_shared_bible_code_open } from "./app_shared_bible_code_open.mjs";
export async function app_shared_bible_choose_chapter(
  bar,
  content,
  book_code,
  books,
  folder,
  context,
) {
  "the whole-chapter reader's chapter picker: what it shows when the url names a book and no chapter yet, drawn in place rather than as its own screen, and otherwise the same carded numbers the verse reader shows";
  "no chapter is marked as current here, and truthfully so: this view is reached by clearing the chapter out of the url, so at this moment there is no chapter being read";
  "a way back to the chapter that was being read before any of this, named by it, because this screen is the middle of choosing rather than a place anybody meant to end up. it is the tab that remembers the chapter, not the link - the link had the chapter taken out of it to get here, which is the whole reason there was nothing to offer before.";
  "a tab that has read nothing yet is offered nothing, and rightly: somebody who opened straight onto a book has no reading to be returned to.";
  "the way on to the book list is named the way the verse reader names it - back to the books - rather than by the book already being looked at, and is drawn by the same two units the verse reader draws it with. both readers stack the same two pickers in the same order, so a reader who has learnt the way out of one has learnt the way out of the other; and the book being looked at is written over the numbers anyway, so naming it on the button said it a second time.";
  "the two ways out are put down before the numbers rather than once for each way through, because whether a reading is remembered changes only whether there is a first button, never anything about the second or about the numbers under them.";
  arguments_assert(arguments, 6);
  let book_name = ebible_book_code_to_name(books, book_code);
  let kept = app_shared_bible_passage_kept_get(context);
  let kept_is = null_not_is(kept);
  let chapter_code_kept = "";
  let verse_numbers = [];
  let destination = "";
  if (kept_is) {
    chapter_code_kept = property_get(kept, "chapter_code");
    verse_numbers = property_get(kept, "verse_numbers");
    destination = ebible_parts_chapter_code_to_reference(
      chapter_code_kept,
      books,
      verse_numbers,
    );
    app_shared_button_back_to(bar, destination, back);
  }
  let books_text = app_shared_bible_books_text();
  app_shared_button_back_to(bar, books_text, on_book);
  await chapters();
  function back() {
    app_shared_bible_code_verses_open(chapter_code_kept, verse_numbers);
  }
  function on_book() {
    app_shared_bible_books_choose(content, books, book_code, destination);
  }
  async function chapters() {
    let current_chapter_code = "";
    ("this reader is reading one version, so the chapters it offers are that version's own");
    let chapter_codes = await ebible_book_code_to_chapter_codes_browser(
      folder,
      book_code,
    );
    app_shared_bible_chapters_card(
      content,
      book_name,
      chapter_codes,
      app_shared_bible_code_open,
      current_chapter_code,
    );
  }
}
