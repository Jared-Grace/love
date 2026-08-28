import { arguments_assert } from "./arguments_assert.mjs";
import { html_code_page_background_or_null } from "./html_code_page_background_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function html_code_attributes_html(name) {
  "$plain name";
  arguments_assert(arguments, 1);
  ("What the page element itself says: the language it is written in, and - for an app that");
  ("asks for one - the colour it is painted before anything of it has arrived.");
  let v = {
    lang: "en",
  };
  let background = html_code_page_background_or_null(name);
  let plain = null_is(background);
  if (plain) {
    return v;
  }
  v.style = background;
  return v;
}
