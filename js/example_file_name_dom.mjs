import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
("A small filename caption above a file's code block (e.g. app_x.mjs). Not uppercased");
("like the section labels — a filename keeps its real casing.");
export function example_file_name_dom(parent, name) {
  let caption = html_div(parent);
  html_text_set(caption, name);
  html_style_set(caption, "font-size", "0.75rem");
  html_style_set(caption, "font-weight", "600");
  html_style_set(caption, "color", app_shared_color_blue_dark());
  html_style_set(caption, "margin", "0.4rem 0 0.2rem");
  return caption;
}
