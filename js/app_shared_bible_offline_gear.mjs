import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_offline_text } from "./app_shared_bible_offline_text.mjs";
import { app_shared_bible_offline_panel } from "./app_shared_bible_offline_panel.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_bible_offline_gear(bar, content, languages_chosen) {
  "The way into keeping the chosen languages on the device, offered from the bar of a page that is not the bible reader itself.";
  "It stands beside the gear that chooses the languages, because the two questions arrive together: a reader who has just said which languages they read is exactly the reader who wants those languages to keep working without a signal.";
  "The panel it opens is the bible app's own, handed the same languages, so there is one place that knows what downloading a language means and every app that offers it offers the same thing.";
  "Back is a plain reload, because the page underneath is drawn from the address and comes back unchanged.";
  arguments_assert(arguments, 3);
  let text = app_shared_bible_offline_text();
  function on_gear() {
    app_shared_bible_offline_panel(content, languages_chosen, window_reload);
  }
  app_shared_button(bar, text, on_gear);
}
