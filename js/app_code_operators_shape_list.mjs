import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { each_index } from "./each_index.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function app_code_operators_shape_list(
  parent,
  placeholder_tile,
  operators,
) {
  "the shape shown in a comparison lesson's title: a greyed placeholder value (built by the placeholder_tile function), then a colon, then each operator the lesson teaches in its OWN code tile, separated by commas. Separate tiles on purpose - the operators listed with commas between them are not one valid expression, so a single tile would present invalid code as real; each tile alone is valid.";
  let tile = placeholder_tile(parent);
  html_span_text(parent, ": ");
  function operator_render(operator, index) {
    "render one operator tile, with a comma-space before it except for the first";
    let first = equal(index, 0);
    let rest = not(first);
    if (rest) {
      html_span_text(parent, ", ");
    }
    html_span_text_code_dark(parent, operator);
    return null;
  }
  each_index(operators, operator_render);
  return tile;
}
