import { arguments_assert } from "./arguments_assert.mjs";
import { html_code_page_background } from "./html_code_page_background.mjs";
export function html_code_attributes_html(name) {
  "$plain name";
  arguments_assert(arguments, 1);
  ("What the page element itself says: the language it is written in, and the colour it is");
  ("painted before anything of it has arrived.");
  ("Every app names a colour now, so there is no longer an app to make an exception of.");
  let background = html_code_page_background(name);
  let v = {
    lang: "en",
    style: background,
  };
  return v;
}
