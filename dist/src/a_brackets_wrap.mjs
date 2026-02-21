import { js_code_bracket_close } from "../../../love/public/src/js_code_bracket_close.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { js_code_bracket_open } from "../../../love/public/src/js_code_bracket_open.mjs";
export function a_brackets_wrap(parent, inner) {
  let b = js_code_bracket_open();
  let span5 = html_span_text(parent, b);
  inner();
  let v3 = js_code_bracket_close();
  let span6 = html_span_text(parent, v3);
}
