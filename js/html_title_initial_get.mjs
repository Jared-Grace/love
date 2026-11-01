import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_initialize_lambda } from "./global_function_initialize_lambda.mjs";
export function html_title_initial_get() {
  arguments_assert(arguments, 0);
  ("The title the page opened with, remembered the first time it is asked for, so a tab renamed afterwards can still be built from it rather than from its own renamed self - a second rename would otherwise put the passage in front of the passage before it.");
  ("Every page has one, unlike the sharing title, which only the apps on the front page carry: the sermon reader has none, and asking for it there threw before the sermon was ever drawn.");
  function value_get() {
    let title = document.title;
    return title;
  }
  let value = global_function_initialize_lambda(
    html_title_initial_get,
    value_get,
  );
  return value;
}
