import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { app_shared_bible_screen_home_set } from "./app_shared_bible_screen_home_set.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export async function app_shared_bible_button_back_to_reader(parent, context) {
  "a book/chapter/verse picker is a transient one-job screen; name the escape by its destination so the reader can see exactly which verse they will return to, e.g. \"Back to John 3:16\"";
  "there is nothing to go back to until a chapter has been chosen, so when the link names none this draws no button at all. it used to insist on the chapter and stop when there was none, and because every picker screen opens by building this bar, one missing word took the book picker, the chapter picker and the verse picker down together and left a blank page. a way out that cannot be named yet is simply absent; the picker underneath is still the whole screen and still works";
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let unchosen = text_empty_is(chapter_code);
  if (unchosen) {
    return null;
  }
  let verse_number = app_shared_bible_hash_v_get(hash);
  let e = ebible_folder_english();
  let books = await ebible_version_books_browser(e);
  let reference = ebible_parts_chapter_code_to_reference(chapter_code, books, [
    verse_number,
  ]);
  let v = emoji_arrow_left();
  let text = text_combine_multiple([v, " Back to ", reference]);
  async function lambda() {
    await app_shared_bible_screen_home_set(context);
  }
  let button = app_shared_button_uncolored(parent, text, lambda);
  return button;
}
