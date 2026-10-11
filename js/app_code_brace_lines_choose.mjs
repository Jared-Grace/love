import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_braces_color_next } from "./app_code_braces_color_next.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_brace_lines_draw } from "./app_code_brace_lines_draw.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { each } from "./each.mjs";
import { app_code_expression_operator_chip } from "./app_code_expression_operator_chip.mjs";
import { list_clear } from "./list_clear.mjs";
import { property_set } from "./property_set.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
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
  ("A line tapped right wears the pair's colour and stays so; a line tapped wrong is turned red until a right one is tapped, and a line already chosen does nothing when tapped again.");
  let color = app_code_braces_color_next();
  html_div_text(parent, "Tap every line between the coloured braces:");
  let entries = app_code_brace_lines_draw(parent, question, color, true);
  let wanted = [];
  let refused = [];
  let state = {
    chosen: 0,
  };
  function brace_paint(span) {
    html_style_background_color_set(span, color);
    html_font_color_set_white(span);
  }
  function line_add(drawn) {
    let chip = property_get(drawn, "chip");
    let between = property_get(drawn, "between");
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
      let right = list_size(wanted);
      if (equal(chosen, right)) {
        on_success();
        return;
      }
      happy_mark();
    }
    html_on_click(chip, on_tap);
  }
  each(entries, line_add);
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
