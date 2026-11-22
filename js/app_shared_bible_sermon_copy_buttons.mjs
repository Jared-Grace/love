import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_verse_buttons_row } from "./app_shared_bible_verse_buttons_row.mjs";
import { app_shared_bible_sermon_and_bible_copy_text } from "./app_shared_bible_sermon_and_bible_copy_text.mjs";
import { property_get } from "./property_get.mjs";
import { list_copy } from "./list_copy.mjs";
import { app_shared_bible_copy } from "./app_shared_bible_copy.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_sermon_copy_text } from "./app_shared_bible_sermon_copy_text.mjs";
import { list_join_newline_2_copy } from "./list_join_newline_2_copy.mjs";
export function app_shared_bible_sermon_copy_buttons(parent, screen, lines) {
  "Two buttons under a sermon: one copies the sermon alone, one copies the passage with the sermon after it. The passage goes through the same copy every verse goes through, so it pastes with its reference on top exactly as the copy above does, and the sermon's lines follow it.";
  "The verses and bibles are read from the screen when a button is pressed, not when it is drawn, because the screen fills its list of bibles after it has answered.";
  arguments_assert(arguments, 3);
  ("the row is made by the same helper as the row of buttons under the verse, so the space above and below it is the same as there");
  let row = app_shared_bible_verse_buttons_row(parent);
  ("the passage with its sermon comes first, the human asked for it on 2026-11-22: it is the whole of what the screen shows, and the sermon alone is the narrower choice.");
  let text_both = app_shared_bible_sermon_and_bible_copy_text();
  async function copy_both() {
    let verse_numbers_shown = property_get(screen, "verse_numbers_shown");
    let verse_numbers = list_copy(verse_numbers_shown);
    let languages_verses = property_get(screen, "languages_verses");
    let chapter_code = property_get(screen, "chapter_code");
    await app_shared_bible_copy(
      verse_numbers,
      languages_verses,
      chapter_code,
      lines,
    );
  }
  app_shared_button(row, text_both, copy_both);
  let text_sermon = app_shared_bible_sermon_copy_text();
  async function copy_sermon() {
    await list_join_newline_2_copy(lines);
  }
  app_shared_button(row, text_sermon, copy_sermon);
}
