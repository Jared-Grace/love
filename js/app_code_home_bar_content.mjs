import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
import { property_get } from "./property_get.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_code_home_next_lesson_button } from "./app_code_home_next_lesson_button.mjs";
import { app_code_home_settings_gear } from "./app_code_home_settings_gear.mjs";
export function app_code_home_bar_content(root, context) {
  "the frame the lesson list is drawn in: a bar stuck to the top of the window carrying the way on and the gear, and the list scrolling underneath it.";
  "neither of the two can simply sit at the top of the list. The list is ninety-odd rows long and this screen comes back scrolled to the lesson the learner just left, which measured five and a half thousand pixels down - so anything written first is a thing nobody ever sees. On the bar they are in view at every scroll position, which is where the bible reader keeps its own gear too.";
  "The bar is handed back beside the list, because once every lesson and review is done the bar is painted the same green as the page under it - it keeps its own colour to hide what scrolls beneath it, so left alone it would stay a plain strip across a green page, at the human's request, 2026-09-27.";
  arguments_assert(arguments, 2);
  let frame = app_shared_bar_content_root_sticky(root);
  let bar = property_get(frame, "bar");
  html_centered(bar);
  ("the way on comes before the gear, so the bar reads left to right as the thing to do next and then the thing to change");
  let next = app_code_home_next_lesson_button(bar, context);
  ("before anything is finished the way in is also drawn big above the list, so the copy up here is handed back for the caller to show only once the big one has scrolled away. Two buttons saying the same thing both in view was what kept it off the bar before; shown only when the big one is out of sight, there is never more than one, at the human's request, 2026-09-28");
  app_code_home_settings_gear(bar, context);
  let content = property_get(frame, "content");
  ("the frame pads the body away from the window edges already, so the list needs no container of its own");
  let r = {
    bar,
    content,
    next,
  };
  return r;
}
