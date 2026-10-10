import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_token_order_example_choose_generic } from "./app_code_lesson_token_order_example_choose_generic.mjs";
import { js_code_brace_is } from "./js_code_brace_is.mjs";
export function app_code_lesson_token_order_example_choose_braces(
  component,
  code,
  container,
) {
  arguments_assert(arguments, 3);
  ("a worked example whose tokens are chosen in order on the page itself, with nothing showing which comes next, every pair of braces in a colour of its own and only the braces written out under the code");
  ("Takes the example's outer box as well because that is how every worked example is drawn; the choosing needs only the box it is drawn in.");
  app_code_lesson_token_order_example_choose_generic(
    component,
    code,
    false,
    js_code_brace_is,
    "Braces chosen:",
    true,
  );
}
