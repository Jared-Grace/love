import { app_shared_money_body } from "./app_shared_money_body.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_bible_money_panel(content, back) {
  "what this app does with money, opened in place by the chapter reader; back is supplied by the caller and returns to the about hub";
  "the way out is unnamed, because the only place this is opened from is a hub, and a hub is a menu rather than a passage - there is nothing to call it but Back";
  arguments_assert(arguments, 2);
  let unnamed = "";
  app_shared_bible_panel_open(content, unnamed, back);
  let container = html_div(content);
  app_shared_money_body(container);
}
