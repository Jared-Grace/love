import { floor } from "./floor.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { range } from "./range.mjs";
import { list_map } from "./list_map.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { html_div } from "./html_div.mjs";
import { text_to } from "./text_to.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { list_includes } from "./list_includes.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
import { and } from "./and.mjs";
import { each } from "./each.mjs";
export function app_code_number_line(parent, low, high, step, ends, middle) {
  arguments_assert(arguments, 6);
  ("$plain middle");
  ("a picture of a number line from low to high, a tick every step: the two ends a question is about filled blue and the middle filled green, so a reader can see the middle sit the same distance from both ends");
  ("Every number is a code chip, as numbers are in the writing beside it. A step of 0.5 draws every half as well as every whole, so the line keeps its proportions; a half gets a shorter tick and a smaller, fainter chip, unless it is one the question is about.");
  ("EQUAL SPACING AND CENTRING HOLD BY CONSTRUCTION, not by the widths of the labels. Every number owns one equal column of a grid, its tick stands at the column's centre, and its chip is placed with its own centre on that same point, so a wide 4.5 grows out both sides of its tick instead of pushing its neighbours along. Halves are written on a lower row than wholes, so a wide chip cannot run into the one beside it. A faint half is placed at 3.07 of its own smaller em, which is 2.3 of the line's, the same row a pointed half stands on.");
  let top2 = subtract(high, low);
  let count = divide(top2, step) + 1;
  let indexes = range(count);
  function value_at(index) {
    let value = low + multiply(index, step);
    return value;
  }
  let values = list_map(indexes, value_at);
  function whole_is(value) {
    let left2 = floor(value);
    let whole = equal(left2, value);
    return whole;
  }
  function not_whole_is(value) {
    let whole = whole_is(value);
    let n = not(whole);
    return n;
  }
  let halves = list_filter(values, not_whole_is);
  let halves_any = list_empty_not_is(halves);
  let cell_height = "2.4em";
  if (halves_any) {
    cell_height = "3.6em";
  }
  let line_color = app_shared_color_blue_dark();
  let end_color = app_code_highlight_color();
  let middle_color = app_code_highlight_color_second();
  let plain = app_shared_color_code_background();
  let row = html_div(parent);
  let t = text_to(count);
  let input = multiply(count, 2.4);
  let left3 = text_to(input);
  html_style_assign(row, {
    display: "grid",
    "grid-template-columns": text_combine_multiple(["repeat(", t, ", 1fr)"]),
    position: "relative",
    width: "100%",
    "max-width": text_combine(left3, "em"),
    margin: "0.5em auto",
  });
  let input2 = multiply(count, 2);
  let t2 = text_to(input2);
  let edge = text_combine_multiple(["calc(100% / ", t2, ")"]);
  let line = html_div(row);
  html_style_assign(line, {
    position: "absolute",
    top: "0.6em",
    height: "3px",
    "margin-top": "-1.5px",
    left: edge,
    right: edge,
  });
  html_style_background_color_set(line, line_color);
  function cell_draw(value) {
    let whole = whole_is(value);
    let cell = html_div(row);
    html_style_assign(cell, {
      position: "relative",
      height: cell_height,
    });
    let tick = html_div(cell);
    let tick_height = "0.4em";
    if (whole) {
      tick_height = "0.8em";
    }
    html_style_assign(tick, {
      position: "absolute",
      left: "50%",
      top: "0.6em",
      width: "2px",
      height: tick_height,
      transform: "translate(-50%, -50%)",
    });
    html_style_background_color_set(tick, line_color);
    let color = plain;
    if (list_includes(ends, value)) {
      color = end_color;
    }
    if (equal(value, middle)) {
      color = middle_color;
    }
    let text = text_to(value);
    let chip = html_span_code_dark_colored(cell, [text], [color]);
    html_style_background_color_set(chip, color);
    let label_top = "1.2em";
    if (not(whole)) {
      label_top = "2.3em";
    }
    html_style_assign(chip, {
      position: "absolute",
      left: "50%",
      top: label_top,
      transform: "translateX(-50%)",
      "white-space": "nowrap",
    });
    let b = equal(color, plain);
    let pointed = not(b);
    let left4 = not(whole);
    let right2 = not(pointed);
    if (and(left4, right2)) {
      html_style_assign(chip, {
        "font-size": "0.75em",
        opacity: "0.55",
        top: "3.07em",
      });
    }
  }
  each(values, cell_draw);
  return row;
}
