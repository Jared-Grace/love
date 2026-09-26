import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { html_cycle_code } from "./html_cycle_code.mjs";
import { app_code_lessons_range_text } from "./app_code_lessons_range_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_wrap_parenthesis } from "./text_wrap_parenthesis.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function app_code_home_group_title_render(entry) {
  arguments_assert(arguments, 1);
  ("a group's title on the home list, written into the title its folding card made: the check a finished lesson's row wears when every lesson in the group is finished, the group's name with any code in it written as code, and the run of lesson numbers it holds in parentheses - at the human's request");
  ("Written once every lesson is drawn, because only then is it known where the group ends and whether it is finished.");
  let title_mark = property_get(entry, "title_mark");
  html_clear(title_mark);
  let complete = property_get(entry, "complete");
  if (complete) {
    let check = emoji_check();
    html_span_text(title_mark, check);
    html_span_space(title_mark);
  }
  let parts = property_get(entry, "parts");
  html_cycle_code(title_mark, parts);
  let first = property_get(entry, "first");
  let last = property_get(entry, "last");
  let range = app_code_lessons_range_text(first, last);
  let range_named = text_combine("Lessons ", range);
  let range_wrapped = text_wrap_parenthesis(range_named);
  html_span_space(title_mark);
  let range_mark = html_span_text(title_mark, range_wrapped);
  ("the range is quieter than the name - lighter and not bold, but the same size, so it stays easy to read - at the human's request, so the name reads first");
  html_style_opacity(range_mark, "0.6");
  html_style_set(range_mark, "font-weight", "normal");
}
