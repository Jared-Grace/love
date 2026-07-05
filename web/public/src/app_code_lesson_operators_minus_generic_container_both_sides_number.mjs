import { word_add_ing } from "../../../love/public/src/word_add_ing.mjs";
import { app_code_lesson_operators_minus_generic_container_both_sides } from "../../../love/public/src/app_code_lesson_operators_minus_generic_container_both_sides.mjs";
export function app_code_lesson_operators_minus_generic_container_both_sides_number(
  root,
  operator,
  left_transform,
  verb,
) {
  app_code_lesson_operators_minus_generic_container_both_sides(
    root,
    operator,
    left_transform,
    word_add_ing(verb) + " two numbers",
    "number",
  );
}
