import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export function app_code_lesson_quiz_token_select_buttons(r) {
  arguments_assert(arguments, 1);
  let variation_buildable = property_get(r, "variation_buildable");
  let tokens_unique = property_get(r, "tokens_unique");
  let variations = property_get(r, "variations");
  variations = list_filter(variations, variation_buildable);
  list_sort_text(tokens_unique);
  let buttons = null;
  let r2 = {
    tokens_unique,
    variations,
    buttons,
  };
  return r2;
}
