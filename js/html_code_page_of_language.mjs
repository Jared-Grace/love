import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_code_page_language_code } from "./html_code_page_language_code.mjs";
export function html_code_page_of_language(page, body) {
  "$plain body";
  arguments_assert(arguments, 2);
  ("One app's page in one language - its own title and description, its app's everything else, and the could-not-start notice in the page's own language rather than the app's.");
  ("Both places that write a language page ask here, so the page written fresh and the page written back over itself cannot come to disagree about which language it speaks.");
  let title_text = property_get(page, "title");
  let app = property_get(page, "app");
  let description = property_get(page, "description");
  let code = property_get(page, "code");
  let r = html_code_page_language_code(
    title_text,
    app,
    description,
    body,
    code,
  );
  return r;
}
