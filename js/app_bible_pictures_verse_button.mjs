import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_bible_pictures_button } from "./app_bible_pictures_button.mjs";
export function app_bible_pictures_verse_button(bar) {
  arguments_assert(arguments, 1);
  ("The way into the picture Bible put in the bar of the verse screen, for whichever chapter the address names.");
  ("IT READS THE CHAPTER OUT OF THE ADDRESS BECAUSE A BAR IS BUILT BEFORE THE SCREEN HAS WORKED OUT WHICH CHAPTER IT IS SHOWING. On a first visit the address names no chapter yet, and then this draws nothing; the screen settles, writes the chapter into the address and draws itself again, so the button arrives one moment later rather than never.");
  ("NO GAP IS SET ABOVE IT, unlike the same button at the foot of a whole chapter. A bar is a row, and a margin on the top of one thing in a row lifts it off the line its neighbours stand on.");
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let empty = text_empty_is(chapter_code);
  if (empty) {
    return;
  }
  app_bible_pictures_button(bar, chapter_code);
}
