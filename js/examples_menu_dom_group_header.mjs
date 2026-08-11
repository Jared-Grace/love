import { arguments_assert } from "./arguments_assert.mjs";
import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { app_shared_text_category } from "./app_shared_text_category.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
export function examples_menu_dom_group_header(name, parent) {
  arguments_assert(arguments, 2);
  let header = html_element(parent, "h2");
  html_text_set(header, name);
  app_shared_text_category(header);
  html_style_font_size(header, "1rem");
  html_style_margin(header, "1.5rem 0 0.5rem");
}
