import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_replace_button_wide } from "../../../love/public/src/app_replace_button_wide.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let lessons = app_code_lessons();
  function lambda(item) {
    let name = property_get(item, "name");
    let id = property_get(item, "id");
    function lambda3() {}
    let b = app_replace_button_wide(parent, name, lambda3);
  }
  each(lessons, lambda);
}
