import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_color_green_tint } from "./app_shared_color_green_tint.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { app_shared_color_green_light } from "./app_shared_color_green_light.mjs";
import { html_border } from "./html_border.mjs";
import { app_shared_color_green_dark } from "./app_shared_color_green_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { each } from "./each.mjs";
import { null_is } from "./null_is.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_first } from "./list_first.mjs";
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
      ("the arrow turns the dark green twin of its dark blue, the same green a finished lesson's category word wears, and the title is led by the check a finished lesson's row wears - so a finished group says so the way a finished lesson does, at the human's request");
      let caret_mark = property_get(entry, "caret_mark");
      let caret_color = app_shared_color_green_dark();
      html_font_color_set(caret_mark, caret_color);
      let title_mark = property_get(entry, "title_mark");
      let title = property_get(entry, "title");
      let check = emoji_check();
      let title_checked = text_combine_multiple([check, " ", title]);
      html_text_set(title_mark, title_checked);
    }
  }
  each(cards, green);
  let chosen = opened;
  if (null_is(chosen)) {
    ("the FIRST unfinished group, out of however many there are - a finder that expects exactly one match throws on a new learner, whose every group is unfinished");
    let unfinished = list_filter_property(cards, "complete", false);
    if (list_empty_not_is(unfinished)) {
      chosen = list_first(unfinished);
    }
  }
  if (null_is(chosen)) {
    chosen = list_last(cards);
  }
  chosen.collapsed_set(false);
}
