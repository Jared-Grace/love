import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_indent_size } from "./text_indent_size.mjs";
import { text_take } from "./text_take.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_expression_operator_chip } from "./app_code_expression_operator_chip.mjs";
import { equal } from "./equal.mjs";
import { text_slice } from "./text_slice.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function app_code_brace_lines_draw(parent, question, color, chips) {
  arguments_assert(arguments, 4);
  ("a program with the pointed-at { and the } that closes it drawn in color, every line a pale chip; hands back one record per line, its chip and whether the line stands between the two braces");
  ("A line is between the pair when it starts after the { and ends before the }, so the line holding either brace is not between it.");
  ("Every line is a pale chip, the same chip every other choosing in this app is drawn with, so the learner can see what can be tapped; when chips is false the lines are drawn plain, for code that is only read, as the human asked 2026-10-11 so the worked example does not look like buttons. The spaces a line is indented by are left outside its chip, so the shape of the code stays as it is written.");
  ("Drawn once here for the line choosing and for the worked example shown above it, so the example a learner reads and the code they then tap look the same.");
  let unmarked = app_code_brace_unmarked(question);
  let code = property_get(unmarked, "code");
  let open = property_get(unmarked, "index");
  let close = js_code_brace_partner_index(code, open);
  let div = html_div(parent);
  html_style_code_dark(div);
  html_style_white_space(div, "pre-wrap");
  html_text_align_left(div);
  let lines = text_split_newline(code);
  let entries = [];
  let line_start = 0;
  function line_add(line) {
    let start = line_start;
    let right = text_size(line);
    let end = add(start, right);
    line_start = add(end, 1);
    let between = less_than(open, start) && less_than(end, close);
    let line_div = html_div(div);
    let indent = text_indent_size(line);
    let spaces = text_take(line, indent);
    html_span_text(line_div, spaces);
    let chip = html_span_text(line_div, "");
    if (chips) {
      app_code_expression_operator_chip(chip);
    }
    let cursor = add(start, indent);
    for (let i = cursor; less_than(i, end); i++) {
      if (equal(i, open) || equal(i, close)) {
        let before = text_slice(code, cursor, i);
        html_span_text(chip, before);
        let to = add(i, 1);
        let brace = text_slice(code, i, to);
        let brace_span = html_span_text(chip, brace);
        html_style_background_color_set(brace_span, color);
        html_font_color_set_white(brace_span);
        cursor = add(i, 1);
      }
    }
    let rest = text_slice(code, cursor, end);
    html_span_text(chip, rest);
    list_add(entries, {
      chip,
      between,
    });
  }
  each(lines, line_add);
  return entries;
}
