import { app_shared_bible_chapters_card } from "./app_shared_bible_chapters_card.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_back_to } from "./app_shared_button_back_to.mjs";
import { app_shared_bible_code_open } from "./app_shared_bible_code_open.mjs";
import { app_shared_bible_code_verses_open } from "./app_shared_bible_code_verses_open.mjs";
import { app_shared_bible_books_choose } from "./app_shared_bible_books_choose.mjs";
import { app_shared_bible_passage_kept_get } from "./app_shared_bible_passage_kept_get.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
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
  let book_name = ebible_book_code_to_name(books, book_code);
  let kept = app_shared_bible_passage_kept_get(context);
  let nothing = null_is(kept);
  let destination = "";
  if (nothing) {
    app_shared_button(bar, book_name, on_book);
    await chapters();
    return;
  }
  let chapter_code_kept = property_get(kept, "chapter_code");
  let verse_numbers = property_get(kept, "verse_numbers");
  destination = ebible_parts_chapter_code_to_reference(
    chapter_code_kept,
    books,
    verse_numbers,
  );
  function back() {
    app_shared_bible_code_verses_open(chapter_code_kept, verse_numbers);
  }
  app_shared_button_back_to(bar, destination, back);
  app_shared_button(bar, book_name, on_book);
  await chapters();
  function on_book() {
    app_shared_bible_books_choose(content, books, book_code, destination);
  }
  async function chapters() {
    let current_chapter_code = "";
    await app_shared_bible_chapters_card(
      content,
      book_name,
      folder,
      book_code,
      app_shared_bible_code_open,
      current_chapter_code,
    );
  }
}
