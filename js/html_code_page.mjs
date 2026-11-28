import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_language_code_app } from "./app_shared_language_code_app.mjs";
import { html_code_page_language_code } from "./html_code_page_language_code.mjs";
export function html_code_page(title_text, name, description, body) {
  arguments_assert(arguments, 4);
  ("the notice is the one piece of writing on the page that cannot ask the app what language its reader reads, because it is wanted exactly when the app never started. So it is told here, while the page is being built, out of the one place that says which language each app speaks.");
  let language_code = app_shared_language_code_app(name);
  let r = html_code_page_language_code(
    title_text,
    name,
    description,
    body,
    language_code,
  );
  return r;
}
