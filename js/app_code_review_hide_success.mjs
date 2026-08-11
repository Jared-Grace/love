import { arguments_assert } from "./arguments_assert.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
export function app_code_review_hide_success(success_container) {
  arguments_assert(arguments, 1);
  html_visibility_hidden(success_container);
}
