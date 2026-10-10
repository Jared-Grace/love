import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_token_order_example_choose_generic } from "./app_code_lesson_token_order_example_choose_generic.mjs";
export function app_code_lesson_token_order_example_choose(component, code) {
  arguments_assert(arguments, 2);
  ("a worked example whose tokens are chosen in order on the page itself, the next one always in blue");
  app_code_lesson_token_order_example_choose_generic(component, code, true);
}
