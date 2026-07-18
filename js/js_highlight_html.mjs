import { js_tokenizer } from "./js_tokenizer.mjs";
import { html_escape } from "./html_escape.mjs";
import { html_code_element } from "./html_code_element.mjs";
import { js_highlight_token_class } from "./js_highlight_token_class.mjs";
// Turns JS source into HTML with each token wrapped in a colored span. Slices the
// original source by token offsets so quotes/spacing survive exactly; the gaps
// between tokens (whitespace) are emitted verbatim. Non-JS input (e.g. an empty
// placeholder) can't tokenize, so it falls back to plain escaped text.
export function js_highlight_html(code) {
  let tokens;
  try {
    tokens = js_tokenizer(code);
  } catch (unparseable) {
    return html_escape(code);
  }
  let out = "";
  let cursor = 0;
  for (let token of tokens) {
    let gap = code.substring(cursor, token.start);
    out = out + html_escape(gap);
    let text = code.substring(token.start, token.end);
    let class_name = js_highlight_token_class(token);
    let span = html_code_element("span", { class: class_name }, html_escape(text));
    out = out + span;
    cursor = token.end;
  }
  let tail = code.substring(cursor);
  out = out + html_escape(tail);
  return out;
}
