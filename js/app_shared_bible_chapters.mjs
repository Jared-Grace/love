import { app_shared_bible_index_flat_offered } from "./app_shared_bible_index_flat_offered.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { ebible_languages_to_bible_folders } from "./ebible_languages_to_bible_folders.mjs";
import { ebible_index_flat_book_chapter_codes } from "./ebible_index_flat_book_chapter_codes.mjs";
import { app_shared_bible_chapters_card } from "./app_shared_bible_chapters_card.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_book_code } from "./app_shared_bible_hash_book_code.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_screen_home_set } from "./app_shared_bible_screen_home_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_chapters_before } from "./app_shared_bible_chapters_before.mjs";
import { app_shared_bible_chapter_open_curried } from "./app_shared_bible_chapter_open_curried.mjs";
export async function app_shared_bible_chapters(context) {
  "A chapter picker needs a book before it can list anything, and a link that names neither a book nor a chapter gives it none. That happens on an ordinary load, because the screen somebody was last on is remembered per tab: leave the tab on this picker, come back to a bare address, and this is what opens first with nothing to open on.";
  "There is no honest list to draw, so it hands the tab back to the reader, which is the one screen that knows where to start from nothing.";
  let hash = html_hash_object_get();
  let book_code_asked = app_shared_bible_hash_book_code(hash);
  let unknown = text_empty_is(book_code_asked);
  if (unknown) {
    await app_shared_bible_screen_home_set(context);
    return;
  }
  let r = await app_shared_bible_chapters_before(context);
  let content = property_get(r, "content");
  let book_name = property_get(r, "book_name");
  let book_code = property_get(r, "book_code");
  ("only the chapters of this book the reader's own bibles have between them, on the same footing as the book list before it: one of the chosen bibles holding a chapter is enough to offer it, and a chapter none of them holds is left off rather than opened on nothing.");
  ("and only the chapters this app is willing to offer, on the same footing again: a chapter nobody has written this app's work for is left off rather than offered and opened on a page that cannot do what the reader came for.");
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  let bible_folders = ebible_languages_to_bible_folders(languages_chosen);
  let list = await app_shared_bible_index_flat_offered(context, bible_folders);
  let chapter_codes = ebible_index_flat_book_chapter_codes(list, book_code);
  let oc = app_shared_bible_chapter_open_curried(context);
  let current = property_get(r, "chapter_code");
  app_shared_bible_chapters_card(
    content,
    book_name,
    chapter_codes,
    oc,
    current,
  );
}
