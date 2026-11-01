import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_share } from "./app_shared_bible_share.mjs";
import { html_button_share_text } from "./html_button_share_text.mjs";
import { app_shared_bible_biblehub_buttons } from "./app_shared_bible_biblehub_buttons.mjs";
export function app_shared_bible_read_verse_actions({
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
}) {
  arguments_assert(arguments, 1);
  let actions = html_div(content);
  html_centered(actions);
  html_display_none(actions);
  ("The row reads: copy, share, the three ways out to biblehub, then the switch to this verse alone - the order the human asked for. What is done with the picked verses comes first, as on the single-verse screen; the ways out after.");
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
  let verse_buttons = html_div(actions);
  app_shared_bible_biblehub_buttons(
    verse_buttons,
    verse_chapter_name,
    verse_book_name,
    verse_number_v,
  );
  ("The verse action is handed both places: the whole row of buttons, and the part of it shown only while a single verse is picked. A button about one verse - the switch to that verse alone - goes in the second, so it hides when several are picked, as the human asked; the chapter grouping needs the whole row, because it finds the verse drawn just before it.");
  let places = {
    actions,
    verse_buttons,
  };
  verse_action(context, places, verse_chapter_code, verse_number_v);
  let r = {
    actions,
    verse_buttons,
  };
  return r;
}
