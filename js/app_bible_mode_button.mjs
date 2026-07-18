import { app_shared_button } from "./app_shared_button.mjs";
import { app_bible_mode_get } from "./app_bible_mode_get.mjs";
import { app_bible_mode_toggle } from "./app_bible_mode_toggle.mjs";
import { app_bible_mode_label } from "./app_bible_mode_label.mjs";
import { window_reload } from "./window_reload.mjs";
export function app_bible_mode_button(bar) {
  let mode = app_bible_mode_get();
  let label = app_bible_mode_label(mode);
  function on_click() {
    app_bible_mode_toggle();
    ("reload so app_bible re-dispatches to the other reader; the hash keeps your place");
    window_reload();
  }
  app_shared_button(bar, label, on_click);
}
