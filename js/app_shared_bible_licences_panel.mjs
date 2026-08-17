import { app_shared_bible_licences_fill } from "./app_shared_bible_licences_fill.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
export async function app_shared_bible_licences_panel(content, back) {
  "who each bible in this app belongs to and on what terms, opened in place by the chapter reader; back is supplied by the caller and returns to the about hub";
  "the way out is unnamed, because the only place this is opened from is a hub, and a hub is a menu rather than a passage - there is nothing to call it but Back";
  arguments_assert(arguments, 2);
  let unnamed = "";
  app_shared_bible_panel_open(content, unnamed, back);
  let container = html_div(content);
  await app_shared_bible_licences_fill(container);
}
