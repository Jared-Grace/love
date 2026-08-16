import { arguments_assert } from "./arguments_assert.mjs";
import { html_p } from "./html_p.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { app_shared_bible_biblehub_buttons } from "./app_shared_bible_biblehub_buttons.mjs";
export function app_shared_bible_verse_buttons_row(
  p_verse,
  chapter_name,
  book_name,
  verse_number,
) {
  arguments_assert(arguments, 4);
  let bottom = html_p(p_verse);
  html_centered(bottom);
  ("the row under the verse is simply shown. It was reached through a name holding whether it was hidden and a function flipping that name, but the flipping was asked for exactly once and nothing else ever read the name, so the pair could only ever end one way - hidden set to true and immediately turned over. Whatever once turned it back has gone, and until it returns the machinery said nothing the one line does not.");
  html_display_none_or_block(false, bottom);
  app_shared_bible_biblehub_buttons(
    bottom,
    chapter_name,
    book_name,
    verse_number,
  );
  return bottom;
}
