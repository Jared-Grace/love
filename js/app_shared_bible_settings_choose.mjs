import { app_shared_bible_passage_kept_reference } from "./app_shared_bible_passage_kept_reference.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { window_reload } from "./window_reload.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { app_shared_bible_languages_choose } from "./app_shared_bible_languages_choose.mjs";
import { app_shared_bible_offline_panel } from "./app_shared_bible_offline_panel.mjs";
import { app_shared_bible_settings_render } from "./app_shared_bible_settings_render.mjs";
import { app_shared_bible_about_panel } from "./app_shared_bible_about_panel.mjs";
export async function app_shared_bible_settings_choose(
  bar,
  content,
  languages_chosen,
  context,
) {
  "the chapter reader's in-place settings hub: language choice and offline downloads, each returning here; leaving the hub reloads back to the reading";
  "clear the reading bar too, so its verse-selecting hint and chapter nav do not linger over the settings menu";
  "the way out names the reading it returns to. the hub is drawn over that reading rather than instead of it, and the tab remembers which one, so it can be said rather than left to be guessed at from a bare arrow.";
  html_clear(bar);
  let destination = await app_shared_bible_passage_kept_reference(context);
  app_shared_bible_panel_open(content, destination, window_reload);
  async function back() {
    await app_shared_bible_settings_choose(
      bar,
      content,
      languages_chosen,
      context,
    );
  }
  ("the sub-panels return to this hub rather than to a reading, so they have no passage to name and say a plain Back");
  let unnamed = "";
  function on_languages() {
    let languages = ebible_languages();
    app_shared_bible_languages_choose(
      content,
      languages,
      languages_chosen,
      back,
      unnamed,
    );
  }
  function on_offline() {
    let languages = ebible_languages_from_codes(languages_chosen);
    app_shared_bible_offline_panel(content, languages, back);
  }
  function on_about() {
    app_shared_bible_about_panel(content, back);
  }
  app_shared_bible_settings_render(
    content,
    on_languages,
    on_offline,
    on_about,
    context,
  );
}
