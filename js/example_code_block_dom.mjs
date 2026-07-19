import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { js_highlight_dom } from "./js_highlight_dom.mjs";
// A dark, scrollable, syntax-highlighted code block built with the shared dark
// code styling (html_div_code_dark) + per-token colored spans.
export function example_code_block_dom(parent, code) {
  let block = html_div_code_dark(parent);
  html_style_set(block, "white-space", "pre");
  html_style_set(block, "overflow-x", "auto");
  html_style_set(block, "padding", "0.75rem");
  html_style_set(block, "border-radius", "6px");
  html_style_set(block, "font-size", "0.82rem");
  js_highlight_dom(block, code);
  return block;
}
