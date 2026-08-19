import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
export function app_shared_bible_panel_unnamed_open(content, back) {
  "Open a panel in place over the chapter reader whose way out is called nothing but Back, and hand back the box its own writing goes in.";
  "All three panels of the settings hub open exactly this way, and each was saying it in the same three lines. What differs between them is what goes in the box, which is what each of them is actually about.";
  "The way out is unnamed, because the only place any of them is opened from is a hub, and a hub is a menu rather than a passage - there is nothing to call it but Back.";
  arguments_assert(arguments, 2);
  let unnamed = "";
  app_shared_bible_panel_open(content, unnamed, back);
  let container = html_div(content);
  return container;
}
