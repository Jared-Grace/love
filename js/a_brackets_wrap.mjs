import { js_code_bracket_close } from "./js_code_bracket_close.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { js_code_bracket_open } from "./js_code_bracket_open.mjs";
export function a_brackets_wrap(parent, inner) {
  let b = js_code_bracket_open();
  html_span_text(parent, b);
  inner();
  let v = js_code_bracket_close();
  html_span_text(parent, v);
}
