import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_buttons_mark_current } from "./app_shared_buttons_mark_current.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { app_reply_languages_codes_text } from "./app_reply_languages_codes_text.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_reply_languages_show_choose(
  root,
  languages_chosen_held,
  languages_show_held,
  copy_refresh,
) {
  "A row asking whether the copied message ends with the line naming its languages, the first button showing that line as it stands now.";
  "Showing them is chosen to begin with, because the message always ended with them before there was a choice. Choosing copies again at once, since the press is what a browser lets write to the clipboard and the message has just changed.";
  "The line in the first button goes stale whenever the chosen languages change, so the refresh is handed back through the holder for whoever changes them to call.";
  arguments_assert(arguments, 4);
  let card = app_shared_container_blue(root);
  app_shared_text_body(card, "7. Languages at the end of the message?");
  let buttons = [];
  let items = [true, false];
  function mark() {
    let current = property_get(languages_show_held, "languages_show");
    app_shared_buttons_mark_current(buttons, items, current);
  }
  async function show_click() {
    property_set(languages_show_held, "languages_show", true);
    mark();
    await copy_refresh();
  }
  async function hide_click() {
    property_set(languages_show_held, "languages_show", false);
    mark();
    await copy_refresh();
  }
  let show = app_shared_button(card, "", show_click);
  let hide = app_shared_button(
    card,
    "Do not show languages at the end of the message",
    hide_click,
  );
  list_add_multiple(buttons, [show, hide]);
  function label_refresh() {
    let languages_chosen = property_get(
      languages_chosen_held,
      "languages_chosen",
    );
    let codes = app_reply_languages_codes_text(languages_chosen);
    let label = text_combine_multiple([
      "Show languages at the end of the message (",
      codes,
      ")",
    ]);
    html_text_set(show, label);
  }
  property_set(languages_show_held, "label_refresh", label_refresh);
  label_refresh();
  mark();
  property_set(languages_show_held, "mark", mark);
}
