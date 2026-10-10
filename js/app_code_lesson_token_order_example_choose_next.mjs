import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_token_order_example_choose_generic } from "./app_code_lesson_token_order_example_choose_generic.mjs";
export function app_code_lesson_token_order_example_choose_next(
  component,
  code,
) {
  arguments_assert(arguments, 2);
  ("a worked example whose tokens are chosen in order on the page itself, with nothing showing which comes next");
  app_code_lesson_token_order_example_choose_generic(component, code, false);
}
