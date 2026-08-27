import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_screen_go_tab } from "./app_shared_screen_go_tab.mjs";
import { app_code_examples } from "./app_code_examples.mjs";
import { app_shared_button_numbered_progress } from "./app_shared_button_numbered_progress.mjs";
import { app_shared_spaced_gap } from "./app_shared_spaced_gap.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { app_code_lesson_title_render } from "./app_code_lesson_title_render.mjs";
export function app_code_home_lesson_button(
  g,
  context,
  item,
  index,
  complete,
  complete_all_previous,
) {
  "$plain item";
  "$plain index";
  "$plain complete";
  "$plain complete_all_previous";
  "One lesson's button on the home screen - numbered, coloured by whether that lesson is finished and whether everything above it is, titled, spaced from the button above it, and opening that lesson when it is pressed.";
  "WHETHER EVERY LESSON ABOVE IT IS FINISHED IS HANDED IN RATHER THAN WORKED OUT HERE. It is what decides whether this button is the one to go to next, and it is carried along the run of lessons by the caller, which is the only place that knows the order they are drawn in.";
  "It asks about EVERY lesson above rather than only the one immediately above, so that exactly one row in the whole list wears the pointing hand: the lowest-numbered lesson not yet finished. A learner who finished a later lesson out of order would otherwise open a second run of pointed-at rows below it.";
  "It hands back the button rather than nothing, because the caller marks one of them as the way through and scrolls to the one the learner just left, and both of those need the button itself.";
  arguments_assert(arguments, 6);
  let id = property_get(item, "id");
  async function on_click() {
    await app_shared_screen_go_tab(context, "lesson_id", id, app_code_examples);
  }
  let r = app_shared_button_numbered_progress(
    g,
    complete,
    complete_all_previous,
    index,
    on_click,
  );
  let button = property_get(r, "button");
  let gap = app_shared_spaced_gap();
  html_style_margin_top(button, gap);
  let title = property_get(r, "title");
  app_code_lesson_title_render(title, item);
  return button;
}
