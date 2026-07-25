import { html_clear } from "./html_clear.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
export function app_shared_bible_panel_open(content, back) {
  "start an in-place bible panel: clear the area, then lead with the back button that leaves it";
  html_clear(content);
  app_shared_button_back(content, back);
}
