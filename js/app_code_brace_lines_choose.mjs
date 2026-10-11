import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { app_code_braces_color_next } from "./app_code_braces_color_next.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { add } from "./add.mjs";
import { text_size } from "./text_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_indent_size } from "./text_indent_size.mjs";
import { text_take } from "./text_take.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_expression_operator_chip } from "./app_code_expression_operator_chip.mjs";
import { equal } from "./equal.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { each } from "./each.mjs";
import { list_clear } from "./list_clear.mjs";
import { property_set } from "./property_set.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { list_size } from "./list_size.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_code_brace_lines_choose(
  parent,
  question,
  on_wrong,
  on_success,
) {
  arguments_assert(arguments, 4);
  ("a program with one pair of braces drawn in a colour, where every line can be tapped, and the learner taps every line between the two braces of the pair; asked for by the human 2026-10-11");
  ("A line is between the pair when it starts after the { and ends before the }, so the line holding either brace is not between it. A line tapped right wears the pair's colour and stays so; a line tapped wrong is turned red until a right one is tapped, and a line already chosen does nothing when tapped again.");
  ("Every line is a pale chip from the start, the same chip every other choosing in this app is drawn with, so the learner can see what can be tapped. The spaces a line is indented by are left outside its chip, so the shape of the code stays as it is written.");
  let unmarked = app_code_brace_unmarked(question);
  let code = property_get(unmarked, "code");
  let open = property_get(unmarked, "index");
  let close = js_code_brace_partner_index(code, open);
  let color = app_code_braces_color_next();
  html_div_text(parent, "Tap every line between the coloured braces:");
  let div = html_div(parent);
  html_style_code_dark(div);
  html_style_white_space(div, "pre-wrap");
  html_text_align_left(div);
  let lines = text_split_newline(code);
  let wanted = [];
  let refused = [];
  let state = {
    chosen: 0,
  };
  let line_start = 0;
  function brace_paint(span) {
    html_style_background_color_set(span, color);
    html_font_color_set_white(span);
  }
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
    app_code_expression_operator_chip(chip);
    let cursor = add(start, indent);
    for (let i = cursor; less_than(i, end); i++) {
      if (equal(i, open) || equal(i, close)) {
        let before = text_slice(code, cursor, i);
        html_span_text(chip, before);
        let to = add(i, 1);
        let brace = text_slice(code, i, to);
        let brace_span = html_span_text(chip, brace);
        brace_paint(brace_span);
        cursor = add(i, 1);
      }
    }
    let rest = text_slice(code, cursor, end);
    html_span_text(chip, rest);
    let entry = {
      chip,
      done: false,
    };
    if (between) {
      list_add(wanted, entry);
    }
    function on_tap() {
      if (property_get(entry, "done")) {
        return;
      }
      if (not(between)) {
        app_code_lesson_quiz_wrong_set(chip);
        list_add(refused, chip);
        on_wrong();
        return;
      }
      each(refused, app_code_expression_operator_chip);
      list_clear(refused);
      property_set(entry, "done", true);
      html_data_set_test_happy_remove(chip);
      brace_paint(chip);
      let left = property_get(state, "chosen");
      let chosen = add(left, 1);
      property_set(state, "chosen", chosen);
      let right2 = list_size(wanted);
      if (equal(chosen, right2)) {
        on_success();
        return;
      }
      happy_mark();
    }
    html_on_click(chip, on_tap);
  }
  each(lines, line_add);
  function happy_mark() {
    "the first line still to be chosen is marked for a walk that gets everything right; the learner is shown nothing";
    for (let e of wanted) {
      let b = property_get(e, "done");
      if (not(b)) {
        let component = property_get(e, "chip");
        html_data_set_test_happy(component);
        return;
      }
    }
  }
  happy_mark();
}
