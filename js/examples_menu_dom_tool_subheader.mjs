import { arguments_assert } from "./arguments_assert.mjs";
import { html_element } from "./html_element.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_bold_semi } from "./html_bold_semi.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
export function examples_menu_dom_tool_subheader(name, parent) {
  arguments_assert(arguments, 2);
  ("a lighter label than the tier header — clusters same-tool cards inside a tier");
  let header = html_element(parent, "h3");
  html_text_set(header, name);
  html_style_font_size(header, "0.8rem");
  html_style_set(header, "text-transform", "uppercase");
  html_style_set(header, "letter-spacing", "0.05em");
  html_font_color_set(header, "#888");
  html_bold_semi(header);
  html_style_margin(header, "0.75rem 0 0.35rem");
}
