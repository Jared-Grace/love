import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_initialize_lambda } from "./global_function_initialize_lambda.mjs";
export function app_code_braces_colors_bag() {
  arguments_assert(arguments, 0);
  ("the one bag of brace colours the whole app draws from, so a colour comes back only after every other has been used; it lives as long as the page");
  function lambda() {
    let bag = {
      remaining: [],
    };
    return bag;
  }
  let bag = global_function_initialize_lambda(
    app_code_braces_colors_bag,
    lambda,
  );
  return bag;
}
