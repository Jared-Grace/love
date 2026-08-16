import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { app_shared_bible_biblehub_buttons } from "./app_shared_bible_biblehub_buttons.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_share } from "./app_shared_bible_share.mjs";
import { html_button_share_text } from "./html_button_share_text.mjs";
export function app_shared_bible_read_verse_actions(
  content,
  verse_chapter_name,
  verse_book_name,
  verse_number_v,
  verse_action,
  context,
  verse_chapter_code,
  t,
  copy,
  verse_numbers_chosen,
  languages_chosen,
) {
  arguments_assert(arguments, 11);
  let actions = html_div(content);
  html_centered(actions);
  html_display_none(actions);
  let verse_buttons = html_div(actions);
  app_shared_bible_biblehub_buttons(
    verse_buttons,
    verse_chapter_name,
    verse_book_name,
    verse_number_v,
  );
  ("the switch to the other reader stands right after the reference buttons and before copy, in the order the single-verse view puts the same row in, so moving between the two readers does not move the buttons under your thumb");
  verse_action(context, actions, verse_chapter_code, verse_number_v);
  app_shared_button(actions, t, copy);
  async function share() {
    await app_shared_bible_share(
      verse_book_name,
      verse_chapter_name,
      verse_numbers_chosen,
      languages_chosen,
    );
  }
  let text = html_button_share_text();
  app_shared_button(actions, text, share);
  let r = {
    actions,
    verse_buttons,
  };
  return r;
}
