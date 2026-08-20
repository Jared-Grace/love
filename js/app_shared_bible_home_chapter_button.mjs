import { app_shared_bible_chapter_whole_text_get } from "./app_shared_bible_chapter_whole_text_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { app_shared_bible_mode_switch } from "./app_shared_bible_mode_switch.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_bible_home_chapter_button(
  context,
  app_fn,
  chapter_reader_is,
  bottom,
) {
  arguments_assert(arguments, 4);
  async function lambda3() {
    let mode = app_shared_bible_mode_chapter();
    await app_shared_bible_mode_switch(context, mode, app_fn);
  }
  ("only the app that actually draws a whole-chapter reader offers the way into it. the others are verse-only: the button was there for all of them, and in three of the four it switched to a mode nothing renders, so the reader was handed a way to a page that does not exist. which kind an app is cannot be read from here - it is the app that knows, so it says.");
  if (chapter_reader_is) {
    let text = app_shared_bible_chapter_whole_text_get();
    app_shared_button(bottom, text, lambda3);
  }
}
