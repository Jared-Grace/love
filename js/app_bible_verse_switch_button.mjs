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
  async function to_verse_view() {
    html_hash_property_set("v", verse_number);
    await app_bible_mode_switch(context, app_shared_bible_mode_verse());
  }
  app_shared_button(actions, "🔎 This verse", to_verse_view);
}
