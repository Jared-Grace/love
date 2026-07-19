import { js_tokenizer } from "./js_tokenizer.mjs";
import { js_highlight_token_class } from "./js_highlight_token_class.mjs";
import { example_token_color } from "./example_token_color.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
// The DOM twin of js_highlight_html: append one colored span per token (and the
// whitespace gaps verbatim) into a code container. Colors are set per-span since
// the DOM app has no stylesheet. Non-JS input (a placeholder) can't tokenize, so
// it drops in as one plain span.
export function js_highlight_dom(parent, code) {
  let tokens;
  try {
    tokens = js_tokenizer(code);
  } catch (unparseable) {
    html_span_text(parent, code);
    return;
  }
  let cursor = 0;
  for (let token of tokens) {
    let gap = code.substring(cursor, token.start);
    if (gap) {
      html_span_text(parent, gap);
    }
    let text = code.substring(token.start, token.end);
    let span = html_span_text(parent, text);
    let color = example_token_color(js_highlight_token_class(token));
    if (color) {
      html_font_color_set(span, color);
    }
    cursor = token.end;
  }
  let tail = code.substring(cursor);
  if (tail) {
    html_span_text(parent, tail);
  }
}
