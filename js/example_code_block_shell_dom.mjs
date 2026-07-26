import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_style_padding } from "./html_style_padding.mjs";
import { html_border_radius } from "./html_border_radius.mjs";
import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
("The styled (dark, scrollable, padded) code block container WITHOUT contents.");
('Shared by the highlighted code block and the empty-state "before" placeholder,');
("so both look identical.");
export function example_code_block_shell_dom(parent) {
  let block = html_div_code_dark(parent);
  html_style_white_space(block, "pre");
  html_style_set(block, "overflow-x", "auto");
  html_style_padding(block, "0.75rem");
  html_border_radius(block, "6px");
  html_style_font_size(block, "0.82rem");
  return block;
}
