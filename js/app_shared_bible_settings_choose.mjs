import { app_shared_bible_history_panel } from "./app_shared_bible_history_panel.mjs";
import { app_shared_bible_languages_chosen_get } from "./app_shared_bible_languages_chosen_get.mjs";
import { app_shared_bible_language_codes_chosen } from "./app_shared_bible_language_codes_chosen.mjs";
import { app_shared_bible_passage_kept_reference } from "./app_shared_bible_passage_kept_reference.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_shared_bible_languages_offered } from "./app_shared_bible_languages_offered.mjs";
import { app_shared_bible_languages_choosable_is } from "./app_shared_bible_languages_choosable_is.mjs";
import { app_shared_bible_languages_choose } from "./app_shared_bible_languages_choose.mjs";
import { app_shared_bible_offline_panel } from "./app_shared_bible_offline_panel.mjs";
import { app_shared_bible_settings_render } from "./app_shared_bible_settings_render.mjs";
import { app_shared_bible_about_panel } from "./app_shared_bible_about_panel.mjs";
export async function app_shared_bible_settings_choose(bar, content, context) {
  "the chapter reader's in-place settings hub: language choice and offline downloads, each returning here; leaving the hub reloads back to the reading";
  "clear the reading bar too, so its verse-selecting hint and chapter nav do not linger over the settings menu";
  "the way out names the reading it returns to. the hub is drawn over that reading rather than instead of it, and the tab remembers which one, so it can be said rather than left to be guessed at from a bare arrow.";
  "each panel asks which languages are chosen at the moment it opens. The hub used to be handed that list once, when the gear was drawn, and then hand the same list on for as long as the reader stayed in it - so a language chosen here was missing from the downloads a tap later, and missing again from the very menu that had just accepted it. The choice lives in the address of the page; reading it there is the only way to be told about a change made since.";
  html_clear(bar);
  let destination = await app_shared_bible_passage_kept_reference(context);
  app_shared_bible_panel_open(content, destination, window_reload);
  async function back() {
    await app_shared_bible_settings_choose(bar, content, context);
  }
  ("the sub-panels return to this hub rather than to a reading, so they have no passage to name and say a plain Back");
  let unnamed = "";
  function on_languages() {
    let languages = app_shared_bible_languages_offered(context);
    let languages_chosen = app_shared_bible_language_codes_chosen();
    app_shared_bible_languages_choose(
      content,
      languages,
      languages_chosen,
      back,
      unnamed,
    );
  }
  ("an app with one language to offer has no choice to show, so the entry is left out here the same way the screen reader leaves it out");
  let choosable = app_shared_bible_languages_choosable_is(context);
  let open_languages = null;
  if (choosable) {
    open_languages = on_languages;
  }
  function on_offline() {
    let languages = app_shared_bible_languages_chosen_get();
    app_shared_bible_offline_panel(content, languages, back);
  }
  function on_about() {
    app_shared_bible_about_panel(content, back);
  }
  async function on_history() {
    await app_shared_bible_history_panel(content, back, context);
  }
  app_shared_bible_settings_render(
    content,
    on_history,
    open_languages,
    on_offline,
    on_about,
    context,
  );
}
