import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verse_previous } from "./app_shared_bible_verse_previous.mjs";
import { app_shared_bible_verse_next } from "./app_shared_bible_verse_next.mjs";
import { app_shared_bible_verse_previous_text_get } from "./app_shared_bible_verse_previous_text_get.mjs";
import { app_shared_bible_verse_next_text_get } from "./app_shared_bible_verse_next_text_get.mjs";
import { app_shared_arrows_wide } from "./app_shared_arrows_wide.mjs";
import { html_sticky_bottom } from "./html_sticky_bottom.mjs";
export function app_shared_bible_verse_arrows(
  context,
  chapter_code,
  verse_current,
  content,
) {
  "The two ways on from the verse being read - back one and forward one - kept in sight at the foot of the screen the whole time a chapter is open.";
  "They stay put for the same reason the bar of controls at the top does. A reader partway down a long chapter had to scroll to the end of it to find them, which asks somebody to leave the verse they are reading in order to reach the next one.";
  arguments_assert(arguments, 4);
  async function lambda() {
    await app_shared_bible_verse_previous(context, chapter_code, verse_current);
  }
  async function lambda7() {
    await app_shared_bible_verse_next(context, chapter_code, verse_current);
  }
  let text_previous = app_shared_bible_verse_previous_text_get();
  let text_next = app_shared_bible_verse_next_text_get();
  let row = app_shared_arrows_wide(
    content,
    text_previous,
    text_next,
    lambda,
    lambda7,
  );
  html_sticky_bottom(row);
}
