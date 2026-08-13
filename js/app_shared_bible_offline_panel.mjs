import { app_shared_bible_offline_body } from "./app_shared_bible_offline_body.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_bible_offline_panel(content, languages, back) {
  "opened in place by the chapter reader; back is supplied by the caller, either a reload to the reading or a return to the settings hub";
  app_shared_bible_panel_open(content, "", back);
  let container = html_div(content);
  app_shared_bible_offline_body(container, languages);
}
