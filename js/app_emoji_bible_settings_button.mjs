import { arguments_assert } from "./arguments_assert.mjs";
import { app_emoji_bible_settings } from "./app_emoji_bible_settings.mjs";
import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_emoji_bible_settings_button(bar, context) {
  "the gear on the picture Bible's bar, standing in the same place and wearing the same word as the gear on the bible reader's bar.";
  "It is drawn on the list of chapters as well as inside a chapter, because the size of the text is the one setting that is worth changing before a reader has opened anything - the list is words, and a reader who cannot read the list cannot reach a chapter to fix it from.";
  arguments_assert(arguments, 2);
  function open_settings() {
    app_emoji_bible_settings(context);
  }
  let text = app_shared_gear_settings_text();
  app_shared_button(bar, text, open_settings);
}
