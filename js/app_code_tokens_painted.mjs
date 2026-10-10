import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { app_code_quiz_tokens_places } from "./app_code_quiz_tokens_places.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { list_get } from "./list_get.mjs";
import { html_span_text_code_background } from "./html_span_text_code_background.mjs";
import { each_index } from "./each_index.mjs";
import { not } from "./not.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function app_code_tokens_painted(parent, code, colors, spaced) {
  arguments_assert(arguments, 4);
  ("a line of code with every token wearing a colour of its own, taken in turn from colors; spaced, the tokens stand one space apart, otherwise they stand exactly as the code writes them - so the same colours seen both ways show which written piece became which token");
  let div = html_div(parent);
  html_style_code_dark(div);
  html_style_white_space(div, "pre-wrap");
  html_text_align_left(div);
  let places = app_code_quiz_tokens_places(code);
  let cursor = 0;
  function token_add(place, index) {
    let start = property_get(place, "start");
    let end = property_get(place, "end");
    let between = text_slice(code, cursor, start);
    if (spaced) {
      let first = equal(index, 0);
      between = " ";
      if (first) {
        between = "";
      }
    }
    html_span_text(div, between);
    let text = text_slice(code, start, end);
    let color = list_get(colors, index);
    html_span_text_code_background(div, text, color);
    cursor = end;
  }
  each_index(places, token_add);
  if (not(spaced)) {
    let rest = text_slice_from(code, cursor);
    html_span_text(div, rest);
  }
}
