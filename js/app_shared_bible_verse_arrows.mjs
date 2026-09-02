import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verse_previous } from "./app_shared_bible_verse_previous.mjs";
import { app_shared_bible_verse_next } from "./app_shared_bible_verse_next.mjs";
import { app_shared_bible_top_ask_key } from "./app_shared_bible_top_ask_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { emoji_arrow_up } from "./emoji_arrow_up.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
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
  "Where the screen has said how to get back to the top of what is being read, a small mark for that stands between the two arrows. It was a button across the whole width at the end of the reading, which had to be scrolled to like everything else and took a line of the page to say one thing; between the two arrows it is always there, and the width it does not take is width the two arrows keep.";
  "What holds them there belongs to the foot rather than to this row, so a screen that wants these arrows somewhere else can put them there and nothing here has to know.";
  arguments_assert(arguments, 4);
  async function lambda() {
    await app_shared_bible_verse_previous(context, chapter_code, verse_current);
  }
  async function lambda7() {
    await app_shared_bible_verse_next(context, chapter_code, verse_current);
  }
  let key = app_shared_bible_top_ask_key();
  let top_ask = property_get_or_null(context, key);
  function middle(row) {
    if (null_is(top_ask)) {
      return;
    }
    let text_up = emoji_arrow_up();
    app_shared_button(row, text_up, top_ask);
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
