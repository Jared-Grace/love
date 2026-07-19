import { html_span } from "./html_span.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { example_note_code_style } from "./example_note_code_style.mjs";
// Inline code inside note prose for a literal (e.g. `let`, a path) — monospace
// with a subtle background, lighter than the prominent function/command chips.
// Real fn references use example_note_link_dom (same look, clickable) instead.
export function example_note_code_dom(parent, text) {
  let code = html_span(parent);
  html_text_content_set(code, text);
  example_note_code_style(code);
  return code;
}
