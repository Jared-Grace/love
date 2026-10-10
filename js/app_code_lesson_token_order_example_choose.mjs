import { app_code_tokens_rows_all } from "./app_code_tokens_rows_all.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_token_order_example_choose_generic } from "./app_code_lesson_token_order_example_choose_generic.mjs";
export function app_code_lesson_token_order_example_choose(
  component,
  code,
  container,
) {
  arguments_assert(arguments, 3);
  ("a worked example whose tokens are chosen in order on the page itself, the next one always in blue");
  ("Takes the example's outer box as well because that is how every worked example is drawn; the choosing needs only the box it is drawn in.");
  let rows = app_code_tokens_rows_all();
  app_code_lesson_token_order_example_choose_generic(
    component,
    code,
    true,
    rows,
    false,
  );
}
