import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
import { add } from "./add.mjs";
import { html_span } from "./html_span.mjs";
import { app_code_lesson_repeat_grid_style } from "./app_code_lesson_repeat_grid_style.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_grid_cell } from "./html_style_grid_cell.mjs";
import { app_code_lesson_number_chip_lifted } from "./app_code_lesson_number_chip_lifted.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_expression_repeated_generic_final_count } from "./app_code_lesson_expression_repeated_generic_final_count.mjs";
import { app_code_lesson_expression_repeated_generic_running_count } from "./app_code_lesson_expression_repeated_generic_running_count.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_font_jetbrains_mono } from "./html_font_jetbrains_mono.mjs";
import { range } from "./range.mjs";
import { each } from "./each.mjs";
import { subtract } from "./subtract.mjs";
export function app_code_lesson_expression_repeated_generic_expanded_counted(
  parent,
  left,
  left_color,
  count_color,
  count,
  expand_symbol,
) {
  arguments_assert(arguments, 6);
  ("the left number repeated and joined by the smaller operator, with the running count 1..count OUTSIDE the code, on the light background below each repeat: row 1 is one continuous black pill (left chips joined by the smaller operator), row 2 holds the counts (no black behind them), the last count in the count colour so how-many visibly becomes the second number of the short form");
  let doubled = multiply(2, count);
  let column_count = add(doubled, 1);
  let end_column = column_count;
  let grid = html_span(parent);
  app_code_lesson_repeat_grid_style(grid, column_count);
  function spacer(column) {
    "a thin empty cell at each end so the black pill has a little padding beyond the outer chips";
    let s = html_span(grid);
    html_style_set(s, "width", "0.3em");
    html_style_grid_cell(s, 1, column);
  }
  function place_repeat(index) {
    let position = add(index, 1);
    let doubled2 = multiply(2, index);
    let column = add(doubled2, 2);
    let chip = app_code_lesson_number_chip_lifted(grid, left, left_color);
    html_style_grid_cell(chip, 2, column);
    let last = equal(position, count);
    let numeral = null;
    if (last) {
      numeral = app_code_lesson_expression_repeated_generic_final_count(
        grid,
        position,
        count_color,
      );
    } else {
      numeral = app_code_lesson_expression_repeated_generic_running_count(
        grid,
        position,
      );
    }
    html_style_grid_cell(numeral, 1, column);
  }
  function place_operator(gap) {
    let doubled3 = multiply(2, gap);
    let column = add(doubled3, 3);
    let op = html_span_text(grid, expand_symbol);
    html_font_color_set(op, "white");
    html_font_jetbrains_mono(op);
    html_style_grid_cell(op, 2, column);
  }
  spacer(1);
  spacer(end_column);
  let list = range(count);
  each(list, place_repeat);
  let count2 = subtract(count, 1);
  let list3 = range(count2);
  each(list3, place_operator);
}
