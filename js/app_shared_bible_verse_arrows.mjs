import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verse_previous } from "./app_shared_bible_verse_previous.mjs";
import { app_shared_bible_verse_next } from "./app_shared_bible_verse_next.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_scroll_top_window } from "./html_scroll_top_window.mjs";
import { app_shared_bible_verse_previous_text_get } from "./app_shared_bible_verse_previous_text_get.mjs";
import { app_shared_bible_verse_next_text_get } from "./app_shared_bible_verse_next_text_get.mjs";
import { app_shared_arrows_wide } from "./app_shared_arrows_wide.mjs";
export function app_shared_bible_verse_arrows(
  context,
  chapter_code,
  verse_current,
  foot,
) {
  "The two ways on from the verse being read - back one and forward one - put in the held foot of the page, so they stay in sight the whole time a chapter is open.";
  "They stay put for the same reason the bar of controls at the top does. A reader partway down a long chapter had to scroll to the end of it to find them, which asks somebody to leave the verse they are reading in order to reach the next one.";
  "Between the two stands a small mark back to the top. The gloss readers had one as a button across the whole width at the end of the words, where it could only be pressed by somebody who had already scrolled to the very bottom - which is the one place a reader wanting to go up is not. Here it is always in reach, it costs no line of the page, and every bible screen gets it rather than only the ones that had thought to draw it.";
  "It takes the whole page back to its beginning rather than putting some chosen piece of the page at the top of the screen. A piece put at the top of the screen lands underneath the bar that is held there, so its first line is behind something; the beginning of the page is the one place nothing is covering.";
  "It takes only the room its own face needs, so the width it does not take is width the two arrows keep.";
  "What holds them there belongs to the foot rather than to this row, so a screen that wants these arrows somewhere else can put them there and nothing here has to know.";
  arguments_assert(arguments, 4);
  async function lambda() {
    await app_shared_bible_verse_previous(context, chapter_code, verse_current);
  }
  async function lambda7() {
    await app_shared_bible_verse_next(context, chapter_code, verse_current);
  }
  function middle(row) {
    let text_up = emoji_arrow_up();
    app_shared_button(row, text_up, html_scroll_top_window);
  }
  let text_previous = app_shared_bible_verse_previous_text_get();
  let text_next = app_shared_bible_verse_next_text_get();
  app_shared_arrows_wide(
    foot,
    text_previous,
    text_next,
    lambda,
    lambda7,
    middle,
  );
}
