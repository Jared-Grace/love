import { app_shared_bible_panel_unnamed_open } from "./app_shared_bible_panel_unnamed_open.mjs";
import { app_shared_money_body } from "./app_shared_money_body.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_bible_money_panel(content, back) {
  "what this app does with money, opened in place by the chapter reader; back is supplied by the caller and returns to the about hub";
  "the way out is unnamed, because the only place this is opened from is a hub, and a hub is a menu rather than a passage - there is nothing to call it but Back";
  arguments_assert(arguments, 2);
  let container = app_shared_bible_panel_unnamed_open(content, back);
  app_shared_money_body(container);
}
