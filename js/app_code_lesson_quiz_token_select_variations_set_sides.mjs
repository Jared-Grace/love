import { arguments_assert } from "./arguments_assert.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_lesson_quiz_token_select_variations_set_sides(
  a,
  b,
  node,
) {
  arguments_assert(arguments, 3);
  property_set(node, "left", a);
  property_set(node, "right", b);
}
