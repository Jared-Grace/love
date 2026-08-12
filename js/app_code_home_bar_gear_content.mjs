import { app_code_home_settings_gear } from "./app_code_home_settings_gear.mjs";
import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_centered } from "./html_centered.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_home_bar_gear_content(root, context) {
  "the frame the lesson list is drawn in: a bar stuck to the top of the window carrying the gear, and the list scrolling underneath it.";
  "the gear cannot simply sit at the top of the list. The list is ninety-odd rows long and this screen comes back scrolled to the lesson the learner just left, which measured five and a half thousand pixels down - so a gear written first is a gear nobody ever sees. On the bar it is in view at every scroll position, which is where the bible reader keeps its own gear too.";
  arguments_assert(arguments, 2);
  let frame = app_shared_bar_content_root_sticky(root);
  let bar = property_get(frame, "bar");
  html_centered(bar);
  app_code_home_settings_gear(bar, context);
  let content = property_get(frame, "content");
  ("the frame pads the body away from the window edges already, so the list needs no container of its own");
  return content;
}
