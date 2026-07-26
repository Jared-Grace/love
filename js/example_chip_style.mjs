import { html_border_radius } from "./html_border_radius.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
('The dark "code chip" look (terminal tile), shared by the plain text chip and');
("the clickable function chip so they stay identical.");
export function example_chip_style(chip) {
  html_style_code_dark(chip);
  html_border_radius(chip, app_shared_border_radius());
  html_style_padding(chip, "0.3rem 0.5rem");
  html_style_font_size(chip, "0.9rem");
}
