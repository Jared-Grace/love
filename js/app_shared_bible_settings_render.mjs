import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_languages_text } from "./app_shared_bible_languages_text.mjs";
import { app_shared_bible_offline_text } from "./app_shared_bible_offline_text.mjs";
export function app_shared_bible_settings_render(
  container,
  open_languages,
  open_offline,
  context,
) {
  "the single source for what the settings menu offers and in what order; each reader supplies only how to open each entry — a screen for the verse reader, an in-place panel for the chapter reader";
  app_shared_font_size_buttons(container, context);
  let languages_text = app_shared_bible_languages_text();
  app_shared_button(container, languages_text, open_languages);
  let offline_text = app_shared_bible_offline_text();
  app_shared_button(container, offline_text, open_offline);
}
