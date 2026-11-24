import { html_code_page } from "./html_code_page.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_title } from "./app_shared_title.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
export function html_code(name, body) {
  "$plain name";
  "$plain body";
  arguments_assert(arguments, 2);
  let title_text = app_shared_title(name);
  let description = app_shared_description(name);
  let r = html_code_page(title_text, name, description, body);
  return r;
}
