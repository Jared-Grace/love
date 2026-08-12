import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_book_code } from "./app_shared_bible_hash_book_code.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_screen_home_set } from "./app_shared_bible_screen_home_set.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_chapters_before } from "./app_shared_bible_chapters_before.mjs";
import { app_shared_bible_chapter_open_curried } from "./app_shared_bible_chapter_open_curried.mjs";
import { app_shared_bible_chapters_render } from "./app_shared_bible_chapters_render.mjs";
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
  let card = property_get(r, "card");
  let book_code = property_get(r, "book_code");
  let e = ebible_folder_english();
  let oc = app_shared_bible_chapter_open_curried(context);
  let current = property_get(r, "chapter_code");
  await app_shared_bible_chapters_render(card, e, book_code, oc, current);
}
