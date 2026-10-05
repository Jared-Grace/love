import { app_code_grid_edge_line_pair_draw } from "./app_code_grid_edge_line_pair_draw.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_code_grid_edge_line_draw } from "./app_code_grid_edge_line_draw.mjs";
import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { app_shared_spaced_tiny_gap } from "./app_shared_spaced_tiny_gap.mjs";
import { list_size } from "./list_size.mjs";
import { html_div } from "./html_div.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_includes } from "./list_includes.mjs";
import { range } from "./range.mjs";
import { equal } from "./equal.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
export function app_code_meetings_hours_draw(
  parent,
  first_hour,
  last_hour,
  meetings,
) {
  arguments_assert(arguments, 4);
  ("a picture of meetings as bars of hours, one row each, under a ruler of the hours from first_hour to last_hour; meetings is a list of [start, end], the first filled with the first rectangle's colour and the second with the second's, as the rectangle pictures colour two shapes");
  ("The hours sit on the lines between squares and not on the squares, as the rectangle pictures number their edges, because a meeting from 9 to 11 is two squares: the hours are where it starts and ends. An hour a meeting starts at wears the start colour and an hour one ends at the end colour, as in the meetings lessons; an hour that is both wears both, the end colour on its left half and the start colour on its right, and its line is the two side by side, the end colour on the left and the start colour on the right - asked by the human 2026-10-05 for two meetings that touch, where the plain hour was the one number in the picture that did not say what it was. Not picked: one of the two colours, which would say the hour is only an end or only a start. The line was first striped, the end colour dashed over the start colour; the human found the dashes showed the two colours unequally, and two lines side by side also say which comes first, as the rectangle pictures draw a shared edge.");
  ("Each hour has a line drawn down through the bars in its own colour, asked by the human 2026-10-04 after a student read the hours as columns rather than as the lines between them; a coloured line lies above a plain one.");
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let plain = app_shared_color_code_background();
  let color2 = app_code_highlight_color_fourth();
  let color3 = app_code_highlight_color_fifth();
  let fills = [color2, color3];
  let border_color = app_shared_color_blue_dark();
  let gap = app_shared_spaced_tiny_gap();
  let columns = subtract(last_hour, first_hour);
  let rows = list_size(meetings);
  let grid = html_div(parent);
  let t = text_to(columns);
  let t2 = text_to(rows);
  html_style_assign(grid, {
    display: "grid",
    "grid-template-columns": text_combine_multiple(["repeat(", t, ", 2.2em)"]),
    "grid-template-rows": text_combine_multiple([
      "1.6em repeat(",
      t2,
      ", 2.2em)",
    ]),
    gap,
    "justify-content": "center",
    margin: "0.5em 0",
  });
  let starts = list_map(meetings, list_first);
  let ends = list_map(meetings, list_second);
  function hour_color(hour) {
    let is_start = list_includes(starts, hour);
    let is_end = list_includes(ends, hour);
    if (is_start && is_end) {
      return plain;
    }
    if (is_start) {
      return start_color;
    }
    if (is_end) {
      return end_color;
    }
    return plain;
  }
  for (let offset of range(columns + 1)) {
    let last = equal(offset, columns);
    let column_line = last ? columns : offset + 1;
    let style = last
      ? {
          "justify-self": "end",
          "align-self": "center",
          transform: "translateX(50%)",
        }
      : {
          "justify-self": "start",
          "align-self": "center",
          transform: "translateX(-50%)",
        };
    let hour = first_hour + offset;
    let cell = html_div(grid);
    html_style_assign(cell, {
      "grid-row": "1",
      "grid-column": text_to(column_line),
      ...style,
    });
    let color = hour_color(hour);
    let t3 = text_to(hour);
    let both = list_includes(starts, hour) && list_includes(ends, hour);
    let halves = text_combine_multiple([
      "linear-gradient(to right, ",
      end_color,
      " 50%, ",
      start_color,
      " 50%)",
    ]);
    if (both) {
      let chip_both = html_span(cell);
      html_style_code_dark(chip_both);
      html_span_text(chip_both, t3);
      html_style_set(chip_both, "background", halves);
    } else {
      let chip = app_code_explain_number_colored(t3, color);
      chip(cell);
    }
    let b = equal(color, plain);
    let colored = not(b);
    let layer = colored ? "2" : "1";
    if (both) {
      app_code_grid_edge_line_pair_draw(
        grid,
        end_color,
        start_color,
        column_line,
        last,
        rows,
        true,
        "2",
      );
    } else {
      app_code_grid_edge_line_draw(
        grid,
        color,
        column_line,
        last,
        rows,
        true,
        layer,
      );
    }
  }
  for (let row of range(rows)) {
    let [start, end] = list_get(meetings, row);
    let fill = list_get(fills, row);
    for (let offset of range(columns)) {
      let hour = first_hour + offset;
      let square = html_div(grid);
      html_style_assign(square, {
        "grid-row": text_to(row + 2),
        "grid-column": text_to(offset + 1),
        border: text_combine("1px solid ", border_color),
        "border-radius": "0.3em",
      });
      let during = less_than_equal(start, hour) && less_than(hour, end);
      if (during) {
        html_style_background_color_set(square, fill);
      }
    }
  }
  return grid;
}
