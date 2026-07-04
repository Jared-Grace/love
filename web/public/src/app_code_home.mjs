import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let lessons = app_code_lessons();
  function lambda(item) {
    function lambda3() {}
    let b = app_replace_button_wide(parent, text, lambda3);
  }
  each(lessons, lambda);
}
