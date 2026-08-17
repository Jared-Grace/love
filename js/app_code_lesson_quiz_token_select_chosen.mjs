import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_quiz_token_select_buttons } from "./app_code_lesson_quiz_token_select_buttons.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_quiz_token_select_chosen(r) {
  arguments_assert(arguments, 1);
  let r2 = app_code_lesson_quiz_token_select_buttons(r);
  let buttons = property_get(r2, "buttons");
  let variations = property_get(r2, "variations");
  let tokens_unique = property_get(r2, "tokens_unique");
  let chosen = [];
  let r3 = {
    buttons,
    variations,
    tokens_unique,
    chosen,
  };
  return r3;
}
