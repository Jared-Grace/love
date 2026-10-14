import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { html_div } from "./html_div.mjs";
import { html_flex_column_stretch } from "./html_flex_column_stretch.mjs";
import { app_code_flex_gap } from "./app_code_flex_gap.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_add } from "./list_add.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_size } from "./text_size.mjs";
import { app_code_expression_chosen_background_color } from "./app_code_expression_chosen_background_color.mjs";
import { app_code_lesson_quiz_wrong_code_background_color } from "./app_code_lesson_quiz_wrong_code_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_code_note_runs } from "./app_code_note_runs.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { equal } from "./equal.mjs";
import { property_set } from "./property_set.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { each } from "./each.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { app_code_quiz_choice_button_answer } from "./app_code_quiz_choice_button_answer.mjs";
import { boolean_is } from "./boolean_is.mjs";
import { error } from "./error.mjs";
import { app_code_expression_value_choose_await } from "./app_code_expression_value_choose_await.mjs";
import { subtract } from "./subtract.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_to } from "./text_to.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { html_height_change_animate } from "./html_height_change_animate.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { sleep } from "./sleep.mjs";
import { app_code_value_logged_output } from "./app_code_value_logged_output.mjs";
import { app_code_label_of_code } from "./app_code_label_of_code.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
export function app_code_program_step_through(
  parent,
  code,
  on_wrong,
  on_success,
) {
  arguments_assert(arguments, 4);
  ("a program the learner runs as the computer would, one step at a time. They are asked what the next line of code to run is, and press a line of the program, or that the program is complete; then what that line does, until they say it is complete: declare a variable, evaluate an expression, assign a value, log a value to the console. A name declared gets a note above its line saying what it holds, what is logged is written under the program, and a name evaluated is asked for and then stands in the line as its value. Asked for by the human 2026-10-13, so every step of the computing is done by the learner before they are asked what a program logs.");
  ("What runs, and what each line does, is ",
    fn_name("app_code_program_trace"),
    "'s to say, so the steps asked for here are the ones the computer takes.");
  ("A line is pressed in the program itself rather than picked from a list of copies, since the question is where in the program the computer is. A wrong line turns red until the right one is pressed. The answers are the choices of every other question in this app, so a wrong one turns red and is spent and the right one turns green.");
  ("A line evaluated goes back to how it is written once it is complete, since the program itself does not change as it runs; what it came to is kept in the notes above the names. Not picked: leaving if (false) { in the program, which would show a program nobody wrote.");
  ("Not built yet: an expression with an operator in it, which is meant to be worked out by the pressing the expression lessons already teach; until then such a line is refused where it arrives.");
  let trace = app_code_program_trace(code);
  let wrap = html_div(parent);
  html_flex_column_stretch(wrap);
  app_code_flex_gap(wrap);
  let top = html_div(wrap);
  html_flex_column_stretch(top);
  app_code_flex_gap(top);
  ("2026-10-13, at the human's asking: which line runs next is asked above the program, since the answer is pressed in the program below it; what a line does is asked under it, beside the names and what is logged.");
  let program = html_div(wrap);
  html_style_code_dark(program);
  html_style_white_space(program, "pre-wrap");
  html_text_align_left(program);
  let lines = text_split_newline(code);
  let rows = [];
  let starts = [];
  let line_start = 0;
  let slots = [];
  let comments = [];
  for (let line of lines) {
    let slot = html_div(program);
    let comment = html_div(slot);
    list_add(slots, slot);
    list_add(comments, comment);
    let row = html_div(program);
    html_text_set(row, line);
    list_add(rows, row);
    list_add(starts, line_start);
    line_start = line_start + text_size(line) + 1;
  }
  let logged = html_div(wrap);
  let ask = html_div(wrap);
  html_flex_column_stretch(ask);
  app_code_flex_gap(ask);
  let state = {
    index: 0,
    pressing: false,
    logged_labeled: false,
  };
  let highlight = app_code_expression_chosen_background_color();
  let wrong_color = app_code_lesson_quiz_wrong_code_background_color();
  function rows_plain() {
    for (let row of rows) {
      html_style_background_color_set(row, "transparent");
    }
  }
  function line_restore(line_index) {
    let row = list_get(rows, line_index);
    let text = list_get(lines, line_index);
    html_text_set(row, text);
  }
  function comment_draw(line_index, name, value_text) {
    "the note above a declared name saying what it holds, drawn as every other note in this app is";
    let comment = list_get(comments, line_index);
    let note = text_combine_multiple(["// ", name, " value: ", value_text]);
    html_clear(comment);
    let runs = app_code_note_runs(note);
    for (let run of runs) {
      let span = html_span(comment);
      let text2 = list_get(run, 0);
      html_span_text(span, text2);
      let color = list_get(run, 1);
      html_font_color_set(span, color);
      let value4 = list_get(run, 2);
      html_style_opacity(span, value4);
    }
  }
  function entry_get() {
    let index = property_get(state, "index");
    let entry = list_get(trace, index);
    return entry;
  }
  for (let i = 0; less_than(i, list_size(rows)); i++) {
    let row = list_get(rows, i);
    function on_row() {
      "a line pressed while the next line to run is being asked for";
      let b = property_get(state, "pressing");
      if (not(b)) {
        return;
      }
      let index = property_get(state, "index");
      let b2 = list_size(trace);
      let done = greater_than_equal(index, b2);
      let right = not(done) && equal(i, property_get(entry_get(), "line"));
      if (not(right)) {
        on_wrong();
        html_style_background_color_set(row, wrong_color);
        return;
      }
      property_set(state, "pressing", false);
      html_data_set_test_happy_remove(row);
      html_clear(top);
      rows_plain();
      html_style_background_color_set(row, highlight);
      html_font_color_set_white(row);
      actions_ask(0);
    }
    html_on_click(row, on_row);
  }
  function next_line_ask() {
    "the learner says which line runs next, or that the program is complete";
    each([ask, top], html_clear);
    html_div_cycle_code(top, ["What is the next line of code to run?"]);
    let index = property_get(state, "index");
    let b3 = list_size(trace);
    let done = greater_than_equal(index, b3);
    property_set(state, "pressing", true);
    ("the line that runs next is marked as the way on, where being right is already decided, so a walk of the whole course can answer this question as it answers every other");
    if (not(done)) {
      let object = entry_get();
      let line_next = property_get(object, "line");
      let component2 = list_get(rows, line_next);
      html_data_set_test_happy(component2);
    }
    let choices = html_div(top);
    let answered = {
      answered: false,
    };
    async function on_complete() {
      property_set(state, "pressing", false);
      rows_plain();
      html_clear(top);
      ("no success message of its own: the caller shows one, as for every other answerer in this app; showing one here as well put two on the page");
      await on_success();
    }
    app_code_quiz_choice_button_answer(
      choices,
      "The program is complete",
      done,
      answered,
      on_complete,
      on_wrong,
    );
  }
  async function action_do(action, line_index) {
    "what the right answer to what this line does then does";
    let kind = property_get(action, "kind");
    if (equal(kind, "evaluate")) {
      let name = property_get(action, "name");
      let value = property_get(action, "value");
      html_clear(ask);
      html_div_cycle_code(ask, ["What is ", name, "?"]);
      let b4 = boolean_is(value);
      if (not(b4)) {
        error({
          message: "only a name holding true or false is asked for here",
          code,
          name,
        });
      }
      let n = not(value);
      await app_code_expression_value_choose_await(ask, value, [n], on_wrong);
      let line_from = list_get(starts, line_index);
      let left = property_get(action, "from");
      let from = subtract(left, line_from);
      let left2 = property_get(action, "to");
      let to = subtract(left2, line_from);
      let text = list_get(lines, line_index);
      let to2 = text_size(text);
      let evaluated =
        text_slice(text, 0, from) + text_to(value) + text_slice(text, to, to2);
      let component = list_get(rows, line_index);
      html_text_set(component, evaluated);
      return;
    }
    if (equal(kind, "declare")) {
      ("2026-10-14, at the human's asking: declaring a name puts a note above its line saying it holds undefined; the room opens first, moving the program down, and then the note fades in, so nothing jumps. Assigning then writes the value over the undefined.");
      ("Not picked: keeping the list of names under the program as well, which would say every value twice; the note stands by the line that made it, where the program is being read.");
      let name4 = property_get(action, "name");
      let slot = list_get(slots, line_index);
      let comment2 = list_get(comments, line_index);
      let duration = app_shared_animation_duration();
      html_style_opacity(comment2, "0");
      function note_write() {
        comment_draw(line_index, name4, "undefined");
      }
      await html_height_change_animate(slot, comment2, note_write, duration);
      let timing = text_combine_multiple(["opacity ", duration, "ms"]);
      html_transition_set(comment2, timing);
      html_style_opacity(comment2, "1");
      await sleep(duration);
      return;
    }
    if (equal(kind, "assign")) {
      let name2 = property_get(action, "name");
      let value2 = property_get(action, "value");
      let t = text_to(value2);
      comment_draw(line_index, name2, t);
      return;
    }
    if (equal(kind, "log")) {
      let b6 = property_get(state, "logged_labeled");
      if (not(b6)) {
        let output = app_code_value_logged_output();
        let label = app_code_label_of_code(output);
        app_code_example_answer_label(logged, label);
        property_set(state, "logged_labeled", true);
      }
      let value3 = property_get(action, "value");
      let answer = text_to(value3);
      app_code_style_normal_text(logged, answer);
      return;
    }
    line_restore(line_index);
    rows_plain();
    property_set(state, "index", property_get(state, "index") + 1);
  }
  function actions_ask(k) {
    "the learner says what the line does next, until they say it is complete";
    let entry = entry_get();
    let line_index = property_get(entry, "line");
    let actions = property_get(entry, "actions");
    let b7 = list_size(actions);
    let action = less_than(k, b7)
      ? list_get(actions, k)
      : {
          kind: "complete",
        };
    let kind = property_get(action, "kind");
    html_clear(ask);
    let question = equal(k, 0)
      ? "What does this line do?"
      : "What else does this line do?";
    html_div_cycle_code(ask, [question]);
    let choices = html_div(ask);
    let answered = {
      answered: false,
    };
    async function on_right() {
      await action_do(action, line_index);
      if (equal(kind, "complete")) {
        next_line_ask();
        return;
      }
      actions_ask(k + 1);
    }
    let options = [
      ["declare", "Declare a variable"],
      ["evaluate", "Evaluate an expression"],
      ["assign", "Assign a value"],
      ["log", "Log a value to the console"],
      ["complete", "This line is complete; continue to the next line"],
    ];
    for (let option of options) {
      let option_kind = list_get(option, 0);
      let words = list_get(option, 1);
      let right2 = equal(option_kind, kind);
      app_code_quiz_choice_button_answer(
        choices,
        words,
        right2,
        answered,
        on_right,
        on_wrong,
      );
    }
  }
  next_line_ask();
}
