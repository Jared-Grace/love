import { html_style_padding_y_none } from "./html_style_padding_y_none.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { text_split_empty } from "./text_split_empty.mjs";
import { list_map_index_1 } from "./list_map_index_1.mjs";
import { app_code_symbol_separated } from "./app_code_symbol_separated.mjs";
import { html_flex_column_center } from "./html_flex_column_center.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_code_symbols_separated_on_question_generic(
  parent,
  question,
  on_symbol,
) {
  html_style_code_dark(parent);
  html_style_padding_y_none(parent);
  let symbols = text_split_empty(question);
  html_style_assign(parent, {
    display: "flex",
    "flex-wrap": "wrap",
  });
  html_style_padding_x(parent, "0.15em");
  function lambda(d, index_1) {
    let row_item = html_span(parent);
    html_flex_column_center(row_item);
    let digit = app_code_symbol_separated(row_item, d);
    on_symbol(row_item, index_1, symbols);
    return digit;
  }
  let spans = list_map_index_1(symbols, lambda);
}
