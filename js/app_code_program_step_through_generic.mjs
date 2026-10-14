import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { html_div } from "./html_div.mjs";
import { html_flex_column_stretch } from "./html_flex_column_stretch.mjs";
import { app_code_flex_gap } from "./app_code_flex_gap.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_overflow_hidden } from "./html_style_overflow_hidden.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_add } from "./list_add.mjs";
import { app_shared_code_padding_x } from "./app_shared_code_padding_x.mjs";
import { html_style_bleed_x } from "./html_style_bleed_x.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { text_size } from "./text_size.mjs";
import { app_code_expression_chosen_background_color } from "./app_code_expression_chosen_background_color.mjs";
import { app_code_lesson_quiz_wrong_code_background_color } from "./app_code_lesson_quiz_wrong_code_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { list_get } from "./list_get.mjs";
import { list_set } from "./list_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { text_slice } from "./text_slice.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_note_name_mark_open } from "./app_code_note_name_mark_open.mjs";
import { app_code_note_name_mark } from "./app_code_note_name_mark.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_note_runs } from "./app_code_note_runs.mjs";
import { app_code_note_runs_cut } from "./app_code_note_runs_cut.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { list_first } from "./list_first.mjs";
import { html_bounding_client_rect } from "./html_bounding_client_rect.mjs";
import { html_copy_fly_text_rect } from "./html_copy_fly_text_rect.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { null_is } from "./null_is.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { html_height_change_animate } from "./html_height_change_animate.mjs";
import { property_get } from "./property_get.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { greater_than_equal } from "./greater_than_equal.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { sleep_success_color } from "./sleep_success_color.mjs";
import { promise_later_catch_ignore } from "./promise_later_catch_ignore.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { app_code_program_step_guide_line_next } from "./app_code_program_step_guide_line_next.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { app_code_quiz_choice_button_answer } from "./app_code_quiz_choice_button_answer.mjs";
import { text_to } from "./text_to.mjs";
import { boolean_is } from "./boolean_is.mjs";
import { error } from "./error.mjs";
import { app_code_expression_value_choose_await } from "./app_code_expression_value_choose_await.mjs";
import { html_opacity_animate } from "./html_opacity_animate.mjs";
import { html_opacity_transition } from "./html_opacity_transition.mjs";
import { sleep } from "./sleep.mjs";
import { app_code_value_logged_output } from "./app_code_value_logged_output.mjs";
import { app_code_label_of_code } from "./app_code_label_of_code.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { app_code_style_normal_box } from "./app_code_style_normal_box.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_program_step_guide_action } from "./app_code_program_step_guide_action.mjs";
export function app_code_program_step_through_generic(
  parent,
  code,
  on_wrong,
  on_success,
  guide,
) {
  arguments_assert(arguments, 5);
  ("guide: where to say what to do and why before each question, as the order lesson's example guides step by step, at the human's asking 2026-10-14; null when nothing is to be said, as in a quiz. The caller puts it on top, above the program, where the human asked for it the same day. Not picked: writing the guide under the program, just over the question, tried first and taken back.");
  ("a program the learner runs as the computer would, one step at a time. They are asked what the next line of code to run is, and press a line of the program, or that the program is complete; then what that line does, until they say it is complete: declare a variable, evaluate an expression, assign a value, log a value to the console. A name declared gets a note above its line saying what it holds, what is logged is written under the program, and a name evaluated is asked for and then stands in the line as its value. Asked for by the human 2026-10-13, so every step of the computing is done by the learner before they are asked what a program logs.");
  ("What runs, and what each line does, is ",
    fn_name("app_code_program_trace"),
    "'s to say, so the steps asked for here are the ones the computer takes.");
  ("A line is pressed in the program itself rather than picked from a list of copies, since the question is where in the program the computer is. A wrong line turns red until the right one is pressed. The answers are the choices of every other question in this app, so a wrong one turns red and is spent and the right one turns green.");
  ("2026-10-14, at the human's asking: a name solved into its value stays solved in its line while the program runs, so if (true) { stays in sight while what it decided runs; every line goes back to how it is written once the program is complete, since the program itself does not change. Not picked: putting the line back as soon as it is complete, done first and taken back, since the value then turned back into the name before the learner had used it. Not picked: leaving the solved lines once the program is complete, which would show a program nobody wrote.");
  ("Not built yet: an expression with an operator in it, which is meant to be worked out by the pressing the expression lessons already teach; until then such a line is refused where it arrives.");
  let trace = app_code_program_trace(code);
  let wrap = html_div(parent);
  html_flex_column_stretch(wrap);
  app_code_flex_gap(wrap);
  ("2026-10-14, at the human's asking: every question is asked under the program, which line runs next as well as what a line does. Not picked: asking which line runs next above the program, tried 2026-10-13 and taken back the next day.");
  let program = html_div(wrap);
  html_style_code_dark(program);
  ("2026-10-14, at the human's asking: the program keeps its rounded corners when its first or last line is coloured, since a line's colour now runs edge to edge and would otherwise square them off; what reaches past the corners is cut away");
  html_style_overflow_hidden(program);
  html_style_white_space(program, "pre-wrap");
  html_text_align_left(program);
  let lines = text_split_newline(code);
  let rows = [];
  let starts = [];
  let line_start = 0;
  let slots = [];
  let comments = [];
  ("what each line says right now, which is its code until a name in it is evaluated; kept, so a piece of it can be cut out to be sent somewhere");
  let shown = [];
  ("the value each line's note says right now, null until there is a note; kept, so the value can fade out of the note before a new one arrives");
  let noted = [];
  for (let line of lines) {
    let slot = html_div(program);
    let comment = html_div(slot);
    list_add(slots, slot);
    list_add(comments, comment);
    let row = html_div(program);
    ("2026-10-14, at the human's asking: a line's colour runs to both edges of the program rather than stopping at its padding, and its text stays where it was");
    let padding = app_shared_code_padding_x();
    html_style_bleed_x(row, padding);
    html_text_set(row, line);
    list_add(shown, line);
    list_add(noted, null);
    list_add(rows, row);
    list_add(starts, line_start);
    line_start = line_start + text_size(line) + 1;
  }
  let logged = html_div(wrap);
  let ask = html_div(wrap);
  html_flex_column_stretch(ask);
  app_code_flex_gap(ask);
  ("asked: what the line is asked to do next while that is asked, so a line pressed then can be judged; null while nothing is asked of a line, as while it is doing what was chosen");
  let state = {
    index: 0,
    pressing: false,
    logged_box: null,
    asked: null,
  };
  let highlight = app_code_expression_chosen_background_color();
  let wrong_color = app_code_lesson_quiz_wrong_code_background_color();
  function rows_plain() {
    for (let row of rows) {
      html_style_background_color_set(row, "transparent");
    }
  }
  function row_text_set(line_index, text) {
    let row = list_get(rows, line_index);
    html_text_set(row, text);
    list_set(shown, line_index, text);
  }
  function line_restore(line_index) {
    let text = list_get(lines, line_index);
    row_text_set(line_index, text);
  }
  function row_piece(line_index, from, to) {
    "the line written again as three pieces, the middle one from to to, handed back so a copy of it can be sent somewhere; the line looks as it did";
    let row = list_get(rows, line_index);
    let text = list_get(shown, line_index);
    html_clear(row);
    let text3 = text_slice(text, 0, from);
    html_span_text(row, text3);
    let text4 = text_slice(text, from, to);
    let piece = html_span_text(row, text4);
    let to3 = text_size(text);
    let text5 = text_slice(text, to, to3);
    html_span_text(row, text5);
    return piece;
  }
  function comment_draw(line_index, name, value_text, part) {
    "the note above a declared name saying what it holds, drawn as every other note in this app is; part is name or value, and the spans that part is drawn in are handed back hidden, for a copy to arrive into";
    let comment = list_get(comments, line_index);
    ("the name is marked as every note in this course marks one, at the human's asking 2026-10-14");
    let open = app_code_note_name_mark_open();
    let marked = app_code_note_name_mark(name);
    let before = "// ";
    let note = text_combine_multiple([before, marked, " value: ", value_text]);
    list_set(noted, line_index, value_text);
    let name_from = text_size(before) + text_size(open);
    let size = text_size(note);
    let right3 = text_size(value_text);
    let from = equal(part, "name") ? name_from : subtract(size, right3);
    let to = equal(part, "name") ? name_from + text_size(name) : size;
    html_clear(comment);
    let runs = app_code_note_runs(note);
    let cut = app_code_note_runs_cut(runs, from, to);
    let hidden = [];
    for (let run of cut) {
      let text2 = list_get(run, 0);
      let span = html_span_text(comment, text2);
      let color = list_get(run, 1);
      html_font_color_set(span, color);
      let value4 = list_get(run, 2);
      html_style_opacity(span, value4);
      if (list_get(run, 3)) {
        html_visibility_hidden(span);
        list_add(hidden, span);
      }
    }
    return hidden;
  }
  async function piece_send(line_index, from, to, hidden, duration) {
    "a copy of the line from to to goes up into the note, where the part it fills is waiting hidden, and the part shows once it has arrived; asked for by the human 2026-10-14, so the name and the value are seen going from the line into the note";
    let piece = row_piece(line_index, from, to);
    let target = list_first(hidden);
    let rect = html_bounding_client_rect(target);
    await html_copy_fly_text_rect(piece, rect, duration);
    for (let span of hidden) {
      html_visibility_visible(span);
    }
  }
  async function guide_say(sentences) {
    "the guide's sentences written in place of what it said before, when this example guides";
    if (null_is(guide)) {
      return;
    }
    ("2026-10-14, at the human's asking: the words go, the guide grows or shrinks to the new ones, and they show once it has arrived, as the order lesson's guide does - by the same function, so the two cannot come to move differently. Not awaited: the question under the program is asked at once, and only the guide's own room is slowed");
    ("Not picked: a fade, which the order lesson does not do; the words are hidden while anything moves, so nothing is read while it slides");
    function change() {
      html_clear(guide);
      for (let sentence of sentences) {
        html_div_cycle_code(guide, sentence);
      }
    }
    let duration = app_shared_animation_duration();
    await html_height_change_animate(guide, guide, change, duration);
  }
  function entry_get() {
    let index = property_get(state, "index");
    let entry = list_get(trace, index);
    return entry;
  }
  for (let i = 0; less_than(i, list_size(rows)); i++) {
    let row = list_get(rows, i);
    async function on_row() {
      "a line pressed while the next line to run is being asked for";
      let b = property_get(state, "pressing");
      if (not(b)) {
        ("2026-10-14, at the human's asking: pressing a line while what this line does is asked is a shortcut for choosing that this line is complete and then pressing that line - so it is right only where saying complete is right, and otherwise it is a wrong answer like any other. Not picked: ignoring the press, as before, which told the learner nothing. Not picked: taking the press as complete whatever was asked, which would let a line be left with its work undone");
        let asked = property_get(state, "asked");
        if (null_is(asked)) {
          return;
        }
        let b5 = equal(asked, "complete");
        if (not(b5)) {
          on_wrong();
          let object2 = entry_get();
          let current = property_get(object2, "line");
          let b8 = equal(i, current);
          if (not(b8)) {
            html_style_background_color_set(row, wrong_color);
          }
          return;
        }
        property_set(state, "asked", null);
        let object3 = entry_get();
        let value6 = property_get(object3, "line");
        await action_do(
          {
            kind: "complete",
          },
          value6,
        );
        next_line_ask();
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
      rows_plain();
      ("2026-10-14, at the human's asking: the right line goes green first, for as long as any right answer in this app is, and only then blue - green says it was right, as a right choice does, and blue then says where the computer is. Not picked: blue at once, which was the one right answer here that did not say so");
      ("2026-10-14, at the human's asking again: the next question is asked at once, while the line is still green, so being right costs the learner no wait. Not picked: holding everything until the green is over, which was the first version. The turn to blue is skipped when the learner has already moved on to another line, since the line pressed then is no longer where the computer is");
      let green = app_shared_button_background();
      html_style_background_color_set(row, green);
      html_font_color_set_white(row);
      async function blue_later() {
        await sleep_success_color();
        let left9 = property_get(state, "index");
        if (equal(left9, index)) {
          html_style_background_color_set(row, highlight);
        }
      }
      promise_later_catch_ignore(blue_later);
      actions_ask(0);
    }
    html_on_click(row, on_row);
  }
  function next_line_ask() {
    "the learner says which line runs next, or that the program is complete";
    html_clear(ask);
    let index = property_get(state, "index");
    let r = app_code_program_step_guide_line_next(lines, trace, index);
    guide_say(r);
    html_div_cycle_code(ask, ["What is the next line of code to run?"]);
    let b3 = list_size(trace);
    let done = greater_than_equal(index, b3);
    property_set(state, "pressing", true);
    ("the line that runs next is marked as the way on, where being right is already decided, so a walk of the whole course can answer this question as it answers every other");
    if (not(done)) {
      let object = entry_get();
      let line_next = property_get(object, "line");
      let component = list_get(rows, line_next);
      html_data_set_test_happy(component);
    }
    let choices = html_div(ask);
    let answered = {
      answered: false,
    };
    async function on_complete() {
      property_set(state, "pressing", false);
      await sleep_success_color();
      rows_plain();
      for (
        let line_index = 0;
        less_than(line_index, list_size(lines));
        line_index++
      ) {
        line_restore(line_index);
      }
      html_clear(ask);
      guide_say([]);
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
      let said = text_to(value);
      guide_say([
        ["The note above the line that declares ", name, " says what it holds"],
        ["So choose: ", said],
      ]);
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
      row_text_set(line_index, evaluated);
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
      ("2026-10-14, at the human's asking: the note comes in with its ( ) empty, and then a copy of the name on the line goes up into them");
      let box = {
        hidden: [],
      };
      function note_write() {
        let hidden2 = comment_draw(line_index, name4, "undefined", "name");
        property_set(box, "hidden", hidden2);
      }
      await html_height_change_animate(slot, comment2, note_write, duration);
      await html_opacity_animate(comment2, "1", duration);
      let line_from2 = list_get(starts, line_index);
      let left3 = property_get(action, "from");
      let name_from = subtract(left3, line_from2);
      let left4 = property_get(action, "to");
      let name_to = subtract(left4, line_from2);
      let value5 = property_get(box, "hidden");
      await piece_send(line_index, name_from, name_to, value5, duration);
      return;
    }
    if (equal(kind, "assign")) {
      let name2 = property_get(action, "name");
      let value2 = property_get(action, "value");
      let t = text_to(value2);
      ("2026-10-14, at the human's asking: the value in the note goes, and a copy of what is right of the = goes up into its place. What is right of the = is found from its two ends: it starts where it was written, and what follows it is untouched, so it ends that far from the end of the line as it now stands - which holds whether or not a name there was evaluated into a value");
      ("2026-10-14, at the human's asking: the value the note said before fades out first, so it is seen going rather than vanishing as the new one sets off. Not picked: hiding it at once and pausing before the new one sets off, offered by the human as the other way; a fade is how this note already comes in, so it goes the same way");
      let old = list_get(noted, line_index);
      let old_spans = comment_draw(line_index, name2, old, "value");
      let duration2 = app_shared_animation_duration();
      for (let span of old_spans) {
        html_visibility_visible(span);
        html_opacity_transition(span, "0", duration2);
      }
      await sleep(duration2);
      let hidden3 = comment_draw(line_index, name2, t, "value");
      let line_from3 = list_get(starts, line_index);
      let left5 = property_get(action, "from");
      let right_from = subtract(left5, line_from3);
      let original = list_get(lines, line_index);
      let left6 = text_size(original);
      let left7 = property_get(action, "to");
      let right4 = subtract(left7, line_from3);
      let after_size = subtract(left6, right4);
      let now = list_get(shown, line_index);
      let left8 = text_size(now);
      let right_to = subtract(left8, after_size);
      await piece_send(line_index, right_from, right_to, hidden3, duration2);
      return;
    }
    if (equal(kind, "log")) {
      ("2026-10-14, at the human's asking: what is logged comes in as the guide's words do - the room grows, and the words show once it has arrived - by the same function, so the two cannot come to move differently. Only what is new is hidden while it grows, so what was logged before stays readable");
      ("2026-10-14, at the human's asking: every line logged goes into the one box, under the one label, as the output of a program is drawn everywhere else in this course; the first log brings the label and the box, and each one after it adds a line to the box. Not picked: a box for each log, done first, which drew one output as several");
      let value3 = property_get(action, "value");
      let answer = text_to(value3);
      let duration3 = app_shared_animation_duration();
      let box2 = property_get(state, "logged_box");
      if (null_is(box2)) {
        let entry = html_div(logged);
        function log_first() {
          let output = app_code_value_logged_output();
          let label = app_code_label_of_code(output);
          app_code_example_answer_label(entry, label);
          let box3 = app_code_style_normal_box(entry);
          html_div_text(box3, answer);
          property_set(state, "logged_box", box3);
        }
        await html_height_change_animate(logged, entry, log_first, duration3);
        return;
      }
      let line = html_div(box2);
      function log_more() {
        html_text_set(line, answer);
      }
      await html_height_change_animate(logged, line, log_more, duration3);
      return;
    }
    ("the line that ran stays highlighted while the next line is asked for, at the human's asking 2026-10-14, so the learner can see where the computer is coming from; pressing the next line moves the highlight there");
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
    property_set(state, "asked", kind);
    html_clear(ask);
    let r10 = app_code_program_step_guide_action(entry, k);
    guide_say(r10);
    let question = equal(k, 0)
      ? "What does this line do?"
      : "What else does this line do?";
    html_div_cycle_code(ask, [question]);
    let choices = html_div(ask);
    let answered = {
      answered: false,
    };
    async function on_right() {
      property_set(state, "asked", null);
      ("2026-10-14, at the human's asking: the right choice stays green for at least as long as any other success in this app before the question is taken away");
      ("2026-10-14, at the human's asking again: what the choice does starts at once, while it is still green, since the question stays up until that is done. Only completing a line has nothing to show, so only it waits out the green. Not picked: the same pause before every action, the first version, which held the learner up for a green the animation already covers");
      if (equal(kind, "complete")) {
        await sleep_success_color();
      }
      await action_do(action, line_index);
      if (equal(kind, "complete")) {
        next_line_ask();
        return;
      }
      actions_ask(k + 1);
    }
    let options = [
      ["declare", "Declare a variable"],
      ["evaluate", "Solve an expression"],
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
