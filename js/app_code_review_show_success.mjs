import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
export function app_code_review_show_success(success_container) {
  arguments_assert(arguments, 1);
  html_clear(success_container);
  app_shared_success_message(success_container);
  html_visibility_visible(success_container);
}
