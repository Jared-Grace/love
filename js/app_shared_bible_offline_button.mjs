import { app_shared_bible_offline_panel } from "./app_shared_bible_offline_panel.mjs";
import { app_shared_bible_offline_text } from "./app_shared_bible_offline_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { window_reload } from "./window_reload.mjs";
export function app_shared_bible_offline_button(bar, content, languages) {
  function on_click() {
    "standing on its own, so back is a plain reload to the reading it came from";
    app_shared_bible_offline_panel(content, languages, window_reload);
  }
  let text = app_shared_bible_offline_text();
  let button = app_shared_button(bar, text, on_click);
  return button;
}
