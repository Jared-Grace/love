import { app_shared_font_size_buttons } from "./app_shared_font_size_buttons.mjs";
import { app_shared_bible_history_text } from "./app_shared_bible_history_text.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_shared_bible_languages_text } from "./app_shared_bible_languages_text.mjs";
import { app_shared_bible_offline_text } from "./app_shared_bible_offline_text.mjs";
import { app_shared_bible_licences_text } from "./app_shared_bible_licences_text.mjs";
import { app_shared_money_text } from "./app_shared_money_text.mjs";
import { app_shared_device_report_text } from "./app_shared_device_report_text.mjs";
import { app_shared_device_report_send } from "./app_shared_device_report_send.mjs";
import { text_combine } from "./text_combine.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_shared_bible_settings_render({
  container,
  open_history,
  open_languages,
  open_offline,
  open_licences,
  open_money,
  context,
}) {
  "the single source for what the settings menu offers and in what order; each reader supplies only how to open each entry — a screen for the verse reader, an in-place panel for the chapter reader";
  "the credits and what happens with money come last, because the entries above them change what the reader is reading and they do not. They used to sit one level down, behind an About entry of their own; the human moved them up here, because this menu and that one were both short, and a reader finds an entry they can see more easily than one behind another tap. The credits come before money, as they did in About: they are owed to somebody, and money is a promise about us that can wait one line.";
  "a reader with no way given to open the languages has none to choose from, and the entry is left out rather than shown leading nowhere";
  "where you were reading comes first of the entries, because it is the only one anybody opens in a hurry. a reader who has lost the tab they were reading in is looking for one thing, and they should not have to read past the size of the letters and a list of languages to find it.";
  "Each entry fills its own line, asked for by name rather than left to the page: a plain button keeps a hair of margin at its sides for standing next to a neighbour in a row, and an entry in a stack has no neighbour beside it - so that margin only held every entry a couple of hairs in from the way out above them, which is the one thing on the screen they are read against.";
  "The device report comes after money, the very last, because it is for the rare reader whose screen is drawn wrong and nobody else should have to read past it. It stays on this screen rather than opening one, and the tick on it afterwards is the whole of the answer - the human asked for it 2026-11-08, so a fault seen only on one phone arrives as numbers rather than a photo.";
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
  let licences_text = app_shared_bible_licences_text();
  app_shared_button_wide(container, licences_text, open_licences);
  let money_text = app_shared_money_text();
  app_shared_button_wide(container, money_text, open_money);
  let report_text = app_shared_device_report_text();
  let report_button = null;
  async function report_send() {
    await app_shared_device_report_send(context);
    let left = emoji_check();
    let sent_text = text_combine(left, report_text);
    html_text_set(report_button, sent_text);
  }
  report_button = app_shared_button_wide(container, report_text, report_send);
}
