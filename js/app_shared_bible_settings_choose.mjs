import { html_clear } from "./html_clear.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { window_reload } from "./window_reload.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { app_shared_bible_languages_choose } from "./app_shared_bible_languages_choose.mjs";
import { app_shared_bible_offline_panel } from "./app_shared_bible_offline_panel.mjs";
import { app_shared_bible_settings_render } from "./app_shared_bible_settings_render.mjs";
export function app_shared_bible_settings_choose(content, languages_chosen) {
  "the chapter reader's in-place settings hub: language choice and offline downloads, each returning here; leaving the hub reloads back to the reading";
  html_clear(content);
  app_shared_button_back(content, window_reload);
  function back() {
    app_shared_bible_settings_choose(content, languages_chosen);
  }
  function on_languages() {
    let languages = ebible_languages();
    app_shared_bible_languages_choose(
      content,
      languages,
      languages_chosen,
      back,
    );
  }
  function on_offline() {
    let languages = ebible_languages_from_codes(languages_chosen);
    app_shared_bible_offline_panel(content, languages, back);
  }
  app_shared_bible_settings_render(content, on_languages, on_offline);
}
