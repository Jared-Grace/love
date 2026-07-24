import { html_clear } from "./html_clear.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { window_reload } from "./window_reload.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { app_shared_bible_languages_choose } from "./app_shared_bible_languages_choose.mjs";
import { app_shared_bible_offline_panel } from "./app_shared_bible_offline_panel.mjs";
import { app_shared_bible_languages_text } from "./app_shared_bible_languages_text.mjs";
import { app_shared_bible_offline_text } from "./app_shared_bible_offline_text.mjs";
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
  let languages_text = app_shared_bible_languages_text();
  app_shared_button(content, languages_text, on_languages);
  function on_offline() {
    let languages = ebible_languages_from_codes(languages_chosen);
    app_shared_bible_offline_panel(content, languages, back);
  }
  let offline_text = app_shared_bible_offline_text();
  app_shared_button(content, offline_text, on_offline);
}
