import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_quiz_tokens_places } from "./app_code_quiz_tokens_places.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_get } from "./list_get.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { each_index } from "./each_index.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function app_code_tokens_painted(parent, code, colors, spaced) {
  arguments_assert(arguments, 4);
  ("a piece of code with every token wearing a colour of its own, taken in turn from colors, so the same colours seen two ways show which written piece became which token");
  ("Not spaced, it is the very chip a piece of code in a sentence is drawn as, with nothing added round any token - only the ground behind each token coloured - so it reads as the plain code above it with colour put on, as the human asked 2026-10-10.");
  ("Spaced, every token is a chip of its own, one space apart and with no dark line behind them, the way tokens apart are drawn plain, so the coloured tokens and the plain ones differ only in colour.");
  let div = html_div(parent);
  let places = app_code_quiz_tokens_places(code);
  if (spaced) {
    function chip_add(place, index) {
      let first = equal(index, 0);
      if (not(first)) {
        html_span_text(div, " ");
      }
      let start = property_get(place, "start");
      let end = property_get(place, "end");
      let text = text_slice(code, start, end);
      let color = list_get(colors, index);
      html_span_text_code_background(div, text, color);
    }
    each_index(places, chip_add);
    return;
  }
  let chip = html_span(div);
  html_style_code_dark_nowrap(chip);
  let cursor = 0;
  function token_add(place, index) {
    let start = property_get(place, "start");
    let end = property_get(place, "end");
    let between = text_slice(code, cursor, start);
    html_span_text(chip, between);
    let text = text_slice(code, start, end);
    let span = html_span_text(chip, text);
    let color = list_get(colors, index);
    html_style_background_color_set(span, color);
    html_font_color_set_white(span);
    cursor = end;
  }
  each_index(places, token_add);
  let rest = text_slice_from(code, cursor);
  html_span_text(chip, rest);
}
