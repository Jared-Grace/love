import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_hash_property_set } from "./html_hash_property_set.mjs";
import { app_bible_mode_switch } from "./app_bible_mode_switch.mjs";
import { app_shared_bible_mode_verse } from "./app_shared_bible_mode_verse.mjs";
export function app_bible_verse_switch_button(
  context,
  actions,
  chapter_code,
  verse_number,
) {
  "chapter view: focus this one verse in verse mode, mirroring verse view's whole-chapter button";
  "chapter_code is not read here and stays all the same - this function is handed to app_shared_bible_read as a value, so the four places belong to that caller and dropping one would slide the verse number into the slot before it";
  async function to_verse_view() {
    let property_name = app_shared_bible_verse_hash_key();
    html_hash_property_set(property_name, verse_number);
    let mode = app_shared_bible_mode_verse();
    await app_bible_mode_switch(context, mode);
  }
  app_shared_button(actions, "🔎 This verse", to_verse_view);
}
