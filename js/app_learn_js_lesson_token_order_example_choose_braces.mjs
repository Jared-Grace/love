import { arguments_assert } from "./arguments_assert.mjs";
import { app_learn_js_tokens_rows_braces_all } from "./app_learn_js_tokens_rows_braces_all.mjs";
import { app_learn_js_lesson_token_order_example_choose_generic } from "./app_learn_js_lesson_token_order_example_choose_generic.mjs";
export function app_learn_js_lesson_token_order_example_choose_braces(
  component,
  code,
  container,
) {
  arguments_assert(arguments, 3);
  ("a worked example whose tokens are chosen in order on the page itself, with nothing showing which comes next, every pair of braces in a colour of its own, and under the code every token chosen and then, on a line of their own, the braces chosen");
  ("Takes the example's outer box as well because that is how every worked example is drawn; the choosing needs only the box it is drawn in.");
  let rows = app_learn_js_tokens_rows_braces_all();
  app_learn_js_lesson_token_order_example_choose_generic(
    component,
    code,
    false,
    rows,
    true,
  );
}
