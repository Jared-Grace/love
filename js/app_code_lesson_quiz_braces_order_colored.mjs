import { app_code_label_text } from "./app_code_label_text.mjs";
import { app_shared_spaced_frame_gap } from "./app_shared_spaced_frame_gap.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_braces_colors_next } from "./app_code_braces_colors_next.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { less_than } from "./less_than.mjs";
import { js_code_brace_is } from "./js_code_brace_is.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_braces_pair_color } from "./app_code_braces_pair_color.mjs";
import { list_add } from "./list_add.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { app_code_expression_chip_border_width } from "./app_code_expression_chip_border_width.mjs";
import { html_edge_color_set } from "./html_edge_color_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { list_clear } from "./list_clear.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
export function app_code_lesson_quiz_braces_order_colored(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "A quiz where the student writes out the braces of a program in the order they stand, with the program's pairs of braces coloured and a coloured piece for every brace in it, as the human asked 2026-10-11: each pair wears a colour of its own in the code, on its two pieces, and on what has been written so far.";
  "Every brace has a piece of its own, so each piece is tapped exactly once and there is nothing to count. The pieces stand in a random order, so their order says nothing about the answer. A wrong tap is turned red until a right one is tapped; a piece tapped right goes out of sight but keeps its place, so nothing in the row moves.";
  "The code is drawn here rather than in the question above, because the code and the pieces must wear the one list of colours.";
  "Rejected: colouring the pieces of the quiz every other brace lesson uses. It has a single { piece and a single } piece, which cannot wear the colours of two pairs at once.";
  let code = property_get(qa, "question");
  let sequence = property_get(qa, "answer");
  correction_code_set(sequence);
  let colors = app_code_braces_colors_next(code);
  let code_div = html_div(parent);
  app_code_code_dark_lines_braces_paired_colors(code_div, code, colors);
  app_code_label_text(parent, "Its braces:");
  let answer_div = html_div(parent);
  let chosen = [];
  function show() {
    let text = list_join_space(chosen);
    if (list_empty_is(chosen)) {
      text = text_space_nb();
    }
    app_code_code_dark_lines_braces_paired_colors(answer_div, text, colors);
  }
  show();
  let pieces = [];
  for (let i = 0; less_than(i, code.length); i++) {
    if (js_code_brace_is(code[i])) {
      let piece = {
        order: list_size(pieces),
        brace: code[i],
        color: app_code_braces_pair_color(code, i, colors),
      };
      list_add(pieces, piece);
    }
  }
  let row = html_div(parent);
  let shuffled = list_copy(pieces);
  list_shuffle(shuffled);
  let state = {
    next: 0,
  };
  let buttons = [];
  let refused = [];
  function paint(b, color) {
    html_style_code_dark(b);
    html_style_background_color_set(b, color);
    html_font_color_set_white(b);
    let width = app_code_expression_chip_border_width();
    html_edge_color_set(b, color, width);
  }
  function piece_draw(piece) {
    let brace = property_get(piece, "brace");
    let color = property_get(piece, "color");
    let order = property_get(piece, "order");
    let b = app_shared_button(row, brace, on_click);
    paint(b, color);
    let style_value = app_shared_spaced_frame_gap();
    html_style_set(b, "margin-right", style_value);
    let entry = {
      b,
      order,
      color,
    };
    list_add(buttons, entry);
    function on_click() {
      let next = property_get(state, "next");
      let b2 = equal(order, next);
      if (not(b2)) {
        app_code_lesson_quiz_wrong_set(b);
        list_add(refused, entry);
        on_wrong();
        return;
      }
      for (let r of refused) {
        let value = property_get(r, "b");
        let value2 = property_get(r, "color");
        paint(value, value2);
      }
      list_clear(refused);
      html_data_set_test_happy_remove(b);
      html_visibility_hidden(b);
      list_add(chosen, brace);
      show();
      let after = add(next, 1);
      property_set(state, "next", after);
      let right = list_size(pieces);
      if (equal(after, right)) {
        on_success();
        return;
      }
      happy_mark();
    }
  }
  each(shuffled, piece_draw);
  function happy_mark() {
    "the piece to tap next is marked for a walk that gets everything right; the learner is shown nothing";
    let next = property_get(state, "next");
    for (let e of buttons) {
      let left = property_get(e, "order");
      if (equal(left, next)) {
        let component = property_get(e, "b");
        html_data_set_test_happy(component);
      }
    }
  }
  happy_mark();
}
