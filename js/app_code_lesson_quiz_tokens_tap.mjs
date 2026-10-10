import { app_code_token_chip_thin } from "./app_code_token_chip_thin.mjs";
import { each } from "./each.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { list_clear } from "./list_clear.mjs";
import { app_code_expression_operator_chip_uncolored } from "./app_code_expression_operator_chip_uncolored.mjs";
import { app_code_expression_chosen_style_assign } from "./app_code_expression_chosen_style_assign.mjs";
import { html_box_shadow_set } from "./html_box_shadow_set.mjs";
import { app_code_label_text } from "./app_code_label_text.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_visibility_hidden } from "./html_visibility_hidden.mjs";
import { app_code_quiz_tokens_places } from "./app_code_quiz_tokens_places.mjs";
import { text_slice } from "./text_slice.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_visibility_visible } from "./html_visibility_visible.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { list_get } from "./list_get.mjs";
import { each_index } from "./each_index.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function app_code_lesson_quiz_tokens_tap(
  parent,
  qa,
  on_success,
  on_wrong,
  correction_code_set,
  guided,
  kept,
  kept_label,
) {
  arguments_assert(arguments, 8);
  ("a program drawn as it stands, where every token can be tapped, and the learner taps them in the order they are read, left to right and then top to bottom; under it the tokens tapped so far are written out in that order, so the order is seen growing. Asked for by the human 2026-10-10.");
  ("Only the tokens kept says to keep are written out under the code, under kept_label, so a quiz may gather only one kind of token, such as the braces, into its order while every token is still tapped.");
  ("When guided, the token to tap next wears the blue every pointing in this app leads with, so the learner is first shown the order one token at a time, and only later asked for it with nothing to follow.");
  ("Every token is a pale chip from the start, chosen the same way the operators of a line are chosen in the expression lessons, as the human asked 2026-10-10: a wrong choice is turned red until the right one is chosen, and a token already chosen goes plain and faint. Every token wears its chip the whole time, so nothing on the line moves as the choosing goes along.");
  let code = property_get(qa, "question");
  let answer = property_get(qa, "answer");
  correction_code_set(answer);
  let div = html_div(parent);
  html_style_code_dark(div);
  html_style_white_space(div, "pre-wrap");
  html_text_align_left(div);
  app_code_label_text(parent, kept_label);
  let tapped_div = html_div(parent);
  html_style_code_dark(tapped_div);
  html_style_white_space(tapped_div, "pre-wrap");
  html_text_align_left(tapped_div);
  let nothing = text_space_nb();
  html_text_set(tapped_div, nothing);
  let note_div = html_div_text(
    parent,
    "Which token comes next, reading left to right, then top to bottom?",
  );
  html_visibility_hidden(note_div);
  let places = app_code_quiz_tokens_places(code);
  let spans = [];
  let tapped = [];
  let refused = [];
  let state = {
    next: 0,
  };
  let cursor = 0;
  function token_add(place, index) {
    let start = property_get(place, "start");
    let end = property_get(place, "end");
    let between = text_slice(code, cursor, start);
    html_span_text(div, between);
    let text = text_slice(code, start, end);
    let span = html_span_text(div, text);
    app_code_token_chip_thin(span);
    function on_tap() {
      let next = property_get(state, "next");
      let right = equal(index, next);
      if (not(right)) {
        html_visibility_visible(note_div);
        app_code_lesson_quiz_wrong_set(span);
        list_add(refused, span);
        on_wrong();
        return;
      }
      html_visibility_hidden(note_div);
      each(refused, app_code_token_chip_thin);
      list_clear(refused);
      html_data_set_test_happy_remove(span);
      app_code_expression_operator_chip_uncolored(span);
      html_style_opacity(span, 0.4);
      let keep = kept(text);
      if (keep) {
        list_add(tapped, text);
        let line = list_join_space(tapped);
        html_text_set(tapped_div, line);
      }
      let after = add(next, 1);
      property_set(state, "next", after);
      let count = list_size(spans);
      let done = equal(after, count);
      if (done) {
        on_success();
        return;
      }
      highlight();
    }
    html_on_click(span, on_tap);
    list_add(spans, span);
    cursor = end;
  }
  function highlight() {
    "the token to tap next is always marked as the right answer for a walk that gets everything right, and only shown in blue when guided";
    let next = property_get(state, "next");
    let span = list_get(spans, next);
    html_data_set_test_happy(span);
    if (not(guided)) {
      return;
    }
    app_code_expression_chosen_style_assign(span);
    html_box_shadow_set(span, "none");
  }
  each_index(places, token_add);
  let rest = text_slice_from(code, cursor);
  html_span_text(div, rest);
  highlight();
}
