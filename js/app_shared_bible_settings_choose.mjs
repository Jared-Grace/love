import { html_clear } from "./html_clear.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { window_reload } from "./window_reload.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { app_shared_bible_languages_choose } from "./app_shared_bible_languages_choose.mjs";
import { app_shared_bible_offline_panel } from "./app_shared_bible_offline_panel.mjs";
import { app_shared_bible_settings_render } from "./app_shared_bible_settings_render.mjs";
export function app_shared_bible_settings_choose(
  bar,
  content,
  languages_chosen,
  context,
) {
  "the chapter reader's in-place settings hub: language choice and offline downloads, each returning here; leaving the hub reloads back to the reading";
  "clear the reading bar too, so its verse-selecting hint and chapter nav do not linger over the settings menu";
  html_clear(bar);
  app_shared_bible_panel_open(content, window_reload);
  function back() {
    app_shared_bible_settings_choose(bar, content, languages_chosen, context);
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
  app_shared_bible_settings_render(content, on_languages, on_offline, context);
}
