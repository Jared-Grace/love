import { each } from "../../../love/public/src/each.mjs";
import { app_code_lessons } from "../../../love/public/src/app_code_lessons.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
export function app_code_home(context) {
  let root = html_clear_context(context);
  let lessons = app_code_lessons();
  function lambda(item) {}
  each(lessons, lambda);
}
