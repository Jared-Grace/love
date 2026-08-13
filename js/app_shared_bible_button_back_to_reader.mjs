import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_shared_bible_passage_kept_get } from "./app_shared_bible_passage_kept_get.mjs";
import { app_shared_bible_passage_kept_restore } from "./app_shared_bible_passage_kept_restore.mjs";
import { app_shared_bible_hash_verse_numbers } from "./app_shared_bible_hash_verse_numbers.mjs";
import { app_shared_bible_screen_home_set } from "./app_shared_bible_screen_home_set.mjs";
import { app_shared_button_back_to } from "./app_shared_button_back_to.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_parts_chapter_code_to_reference } from "./ebible_parts_chapter_code_to_reference.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_bible_button_back_to_reader(parent, context) {
  "a book/chapter/verse picker is a transient one-job screen; name the escape by its destination so the reader can see exactly which verse they will return to, e.g. \"Back to John 3:16\"";
  "there is nothing to go back to until a chapter has been chosen, so when neither the tab nor the link names one this draws no button at all. it used to insist on the chapter and stop when there was none, and because every picker screen opens by building this bar, one missing word took the book picker, the chapter picker and the verse picker down together and left a blank page. a way out that cannot be named yet is simply absent; the picker underneath is still the whole screen and still works";
  "the passage the tab remembers is asked before the link is, and it is what makes this a way of changing your mind rather than only a way of going back. the link stops saying where somebody came from the moment they tap a book, because the chapter picker is handed its book by having a chapter written into the link - so from the second screen onward the link names where they are heading, and only the tab still knows where they were. it also answers the commoner case, a page opened with no passage written in the link at all: the reader was showing one anyway, so there is somewhere to return to and it can now be named";
  "every reader that comes here remembers its passage the same way, so every one of them is named the same way and this stays one button rather than one per app. what differs between them is only how many verses they were standing on, and the remembering already carries that - a verse reader keeps the one, a whole-chapter reader keeps whichever are picked, and a chapter with none picked is named by its chapter alone";
  let kept = app_shared_bible_passage_kept_get(context);
  let b = null_is(kept);
  let remembered = not(b);
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let verse_numbers = app_shared_bible_hash_verse_numbers(hash);
  if (remembered) {
    chapter_code = property_get(kept, "chapter_code");
    let unsaid = list_empty_is(verse_numbers);
    if (unsaid) {
      verse_numbers = property_get(kept, "verse_numbers");
    }
  }
  let unchosen = text_empty_is(chapter_code);
  if (unchosen) {
    return null;
  }
  let e = ebible_folder_english();
  let books = await ebible_version_books_browser(e);
  let reference = ebible_parts_chapter_code_to_reference(
    chapter_code,
    books,
    verse_numbers,
  );
  async function lambda() {
    app_shared_bible_passage_kept_restore(context);
    await app_shared_bible_screen_home_set(context);
  }
  let button = app_shared_button_back_to(parent, reference, lambda);
  return button;
}
