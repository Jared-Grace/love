import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_tokens_rows_braces } from "./app_code_tokens_rows_braces.mjs";
import { app_code_lesson_token_order_example_choose_generic } from "./app_code_lesson_token_order_example_choose_generic.mjs";
export function app_code_lesson_token_order_example_choose_braces_only(
  component,
  code,
  container,
) {
  arguments_assert(arguments, 3);
  ("a worked example whose tokens are chosen in order on the page itself, with nothing showing which comes next, every pair of braces in a colour of its own, and under the code only the braces chosen, in their colours");
  ("Takes the example's outer box as well because that is how every worked example is drawn; the choosing needs only the box it is drawn in.");
  let rows = app_code_tokens_rows_braces();
  app_code_lesson_token_order_example_choose_generic(
    component,
    code,
    false,
    rows,
    true,
  );
}
