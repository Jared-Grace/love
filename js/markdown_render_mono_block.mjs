import { arguments_assert } from "./arguments_assert.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function markdown_render_mono_block(block_lines, parent) {
  arguments_assert(arguments, 2);
  let text = block_lines.join("\n");
  let pre = html_pre_text(parent, text);
  html_style_assign(pre, {
    "font-family": "monospace",
    "font-size": "0.82em",
    background: "rgba(0, 0, 0, 0.06)",
    padding: "0.5em 0.7em",
    "border-radius": "0.3em",
    overflow: "auto",
    margin: "0.5em 0",
    "white-space": "pre",
  });
}
