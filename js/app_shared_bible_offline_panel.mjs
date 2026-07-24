import { app_shared_bible_offline_body } from "./app_shared_bible_offline_body.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div } from "./html_div.mjs";
import { window_reload } from "./window_reload.mjs";
export function app_shared_bible_offline_panel(content, languages) {
  "the chapter reader opens this in place, so back is a plain reload to the reading it came from";
  html_clear(content);
  app_shared_button_back(content, window_reload);
  let container = html_div(content);
  app_shared_bible_offline_body(container, languages);
}
