import { app_shared_gear_settings_text } from "./app_shared_gear_settings_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_bible_settings_choose } from "./app_shared_bible_settings_choose.mjs";
export function app_shared_bible_settings_gear(bar, content, languages_chosen) {
  "one gear on the reading bar; language choice and keeping the bible on the device both live behind it, so the bar stays about reading";
  function on_gear() {
    app_shared_bible_settings_choose(bar, content, languages_chosen);
  }
  let text = app_shared_gear_settings_text();
  app_shared_button(bar, text, on_gear);
}
