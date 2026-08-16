import { app_code_lesson_name_id_category_then } from "./app_code_lesson_name_id_category_then.mjs";
import { html_span_text_multiple } from "./html_span_text_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
export function app_code_lesson_name_id_function(left, rights) {
  let paint = function app_code_lesson_name_id_function_paint(parent) {
    let r = list_first_remaining(rights);
    let remaining = property_get(r, "remaining");
    let first = property_get(r, "first");
    html_span_text_code_dark(parent, first);
    ("a gap between the code chip and the words after it, because the chip is a dark tile with its own edge and a word set straight against that edge reads as part of the code rather than as English about it");
    ("It is only put there when there are words to separate, so a title that is nothing but the function name does not end in a space nobody can see.");
    let named_only = list_empty_is(remaining);
    if (named_only) {
      return;
    }
    let space = text_space_nb();
    html_span_text(parent, space);
    html_span_text_multiple(parent, remaining);
  };
  let name_id = app_code_lesson_name_id_category_then(rights, left, paint);
  return name_id;
}
