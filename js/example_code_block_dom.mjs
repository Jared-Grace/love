import { example_code_block_shell_dom } from "./example_code_block_shell_dom.mjs";
import { js_highlight_dom } from "./js_highlight_dom.mjs";
// A dark, scrollable, syntax-highlighted code block: the shared dark shell filled
// with per-token colored spans.
export function example_code_block_dom(parent, code) {
  let block = example_code_block_shell_dom(parent);
  js_highlight_dom(block, code);
  return block;
}
