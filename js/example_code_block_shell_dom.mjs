import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { html_style_set } from "./html_style_set.mjs";
// The styled (dark, scrollable, padded) code block container WITHOUT contents.
// Shared by the highlighted code block and the empty-state "before" placeholder,
// so both look identical.
export function example_code_block_shell_dom(parent) {
  let block = html_div_code_dark(parent);
  html_style_set(block, "white-space", "pre");
  html_style_set(block, "overflow-x", "auto");
  html_style_set(block, "padding", "0.75rem");
  html_style_set(block, "border-radius", "6px");
  html_style_set(block, "font-size", "0.82rem");
  return block;
}
