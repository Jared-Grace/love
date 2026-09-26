import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_color_green_tint } from "./app_shared_color_green_tint.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { each } from "./each.mjs";
import { null_is } from "./null_is.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_last } from "./list_last.mjs";
export function app_code_home_groups_finish(cards, opened) {
  arguments_assert(arguments, 2);
  ("once every lesson is drawn: a group whose lessons are all finished turns green, and one group is left open - the one handed in, or else the first group not yet finished, or else the last");
  ("The open one is chosen after drawing because only then is it known which group the learner just left and which are finished. Opening it shuts every other, so this one call leaves exactly one open.");
  function green(entry) {
    let complete = property_get(entry, "complete");
    if (complete) {
      let card = property_get(entry, "card");
      let background = app_shared_color_green_tint();
      html_style_background_color_set(card, background);
      let border_width = app_shared_spaced_frame_gap();
      let border_color = app_shared_color_green_light();
      html_border(card, border_width, border_color);
    }
  }
  each(cards, green);
  let chosen = opened;
  if (null_is(chosen)) {
    chosen = list_find_property_or_null(cards, "complete", false);
  }
  if (null_is(chosen)) {
    chosen = list_last(cards);
  }
  chosen.collapsed_set(false);
}
