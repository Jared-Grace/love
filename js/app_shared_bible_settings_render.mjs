import { app_shared_bible_history_text } from "./app_shared_bible_history_text.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { app_shared_bible_languages_text } from "./app_shared_bible_languages_text.mjs";
import { app_shared_bible_offline_text } from "./app_shared_bible_offline_text.mjs";
import { app_shared_about_text } from "./app_shared_about_text.mjs";
export function app_shared_bible_settings_render(
  container,
  open_history,
  open_languages,
  open_offline,
  open_about,
  context,
) {
  "the single source for what the settings menu offers and in what order; each reader supplies only how to open each entry — a screen for the verse reader, an in-place panel for the chapter reader";
  "about comes last, because the two above it change what the reader is reading and it does not";
  "a reader with no way given to open the languages has none to choose from, and the entry is left out rather than shown leading nowhere";
  "where you were reading comes first of the entries, because it is the only one anybody opens in a hurry. a reader who has lost the tab they were reading in is looking for one thing, and they should not have to read past the size of the letters and a list of languages to find it.";
  "Each entry fills its own line, asked for by name rather than left to the page: a plain button keeps a hair of margin at its sides for standing next to a neighbour in a row, and an entry in a stack has no neighbour beside it - so that margin only held every entry a couple of hairs in from the way out above them, which is the one thing on the screen they are read against.";
  app_shared_font_size_buttons(container, context);
  let history_text = app_shared_bible_history_text();
  app_shared_button_wide(container, history_text, open_history);
  let languages_offered = null_not_is(open_languages);
  if (languages_offered) {
    let languages_text = app_shared_bible_languages_text();
    app_shared_button_wide(container, languages_text, open_languages);
  }
  let offline_text = app_shared_bible_offline_text();
  app_shared_button_wide(container, offline_text, open_offline);
  let about_text = app_shared_about_text();
  app_shared_button_wide(container, about_text, open_about);
}
