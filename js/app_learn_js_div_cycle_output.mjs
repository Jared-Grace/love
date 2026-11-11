import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_js_style_normal_span } from "./app_learn_js_style_normal_span.mjs";
import { each_index } from "./each_index.mjs";
export function app_learn_js_div_cycle_output(parent, parts) {
  arguments_assert(arguments, 2);
  ("a line of writing woven with written-out values - words in the even places, values in the odd ones - each value wearing the look the logged output box gives it rather than the dark look of code");
  ("Asked for by the human 2026-11-11: a sentence saying what a program writes out, such as So joy then patience are written out, names the very thing shown under logged output, so the two have to look alike. Its code twin draws the same weave with the values as code, which reads as a line of the program rather than what the program wrote.");
  let div = html_div(parent);
  function part_add(part, index) {
    let left = modulo(index, 2);
    if (equal(left, 0)) {
      html_span_text(div, part);
      return;
    }
    app_learn_js_style_normal_span(div, part);
  }
  each_index(parts, part_add);
  return div;
}
