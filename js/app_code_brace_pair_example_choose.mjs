import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_brace_unmarked } from "./app_code_brace_unmarked.mjs";
import { property_get } from "./property_get.mjs";
import { js_code_brace_partner_index } from "./js_code_brace_partner_index.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { text_slice } from "./text_slice.mjs";
import { html_text_code_breakable_add } from "./html_text_code_breakable_add.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { add } from "./add.mjs";
import { equal } from "./equal.mjs";
import { app_code_span_text_code_highlight } from "./app_code_span_text_code_highlight.mjs";
import { app_code_token_chip_thin } from "./app_code_token_chip_thin.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { not } from "./not.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { html_on_click } from "./html_on_click.mjs";
import { less_than } from "./less_than.mjs";
import { js_code_brace_is } from "./js_code_brace_is.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export function app_code_brace_pair_example_choose(component, text, container) {
  "$plain text";
  "$plain container";
  arguments_assert(arguments, 3);
  ("a worked example where one brace is pointed at and every other brace can be tapped, and the learner taps the brace that pairs with it, as the human asked 2026-10-11, so the pairing is done on the page before any quiz asks for it");
  ("Every other brace can be tapped, both kinds, as the human asked: other braces are choosable. Rejected: only the braces of the other kind, which halves the choosing and leaves the learner nothing to get wrong about which kind closes which.");
  ("Nothing is counted here, as in the worked examples of The order of the tokens: a wrong brace is turned red until the right one is tapped, and the right one takes the colour of the brace pointed at, with the praise those examples end with under it.");
  ("Takes the example's outer box as well because that is how every worked example is drawn; the choosing needs only the box it is drawn in.");
  let unmarked = app_code_brace_unmarked(text);
  let code = property_get(unmarked, "code");
  let index = property_get(unmarked, "index");
  let partner = js_code_brace_partner_index(code, index);
  let div = html_div(component);
  html_style_code_dark(div);
  html_style_white_space(div, "pre-wrap");
  html_text_align_left(div);
  html_div_text(component, "Tap the brace that pairs with the one pointed at");
  let refused = [];
  let state = {
    done: false,
  };
  let cursor = 0;
  function brace_add(i) {
    let between = text_slice(code, cursor, i);
    html_text_code_breakable_add(div, between, html_span_text);
    cursor = add(i, 1);
    let brace = code[i];
    if (equal(i, index)) {
      app_code_span_text_code_highlight(div, brace);
      return;
    }
    let span = html_span_text(div, brace);
    app_code_token_chip_thin(span);
    let right = equal(i, partner);
    if (right) {
      html_data_set_test_happy(span);
    }
    function on_tap() {
      let done = property_get(state, "done");
      if (done) {
        return;
      }
      if (not(right)) {
        app_code_lesson_quiz_wrong_set(span);
        list_add(refused, span);
        return;
      }
      property_set(state, "done", true);
      each(refused, app_code_token_chip_thin);
      html_data_set_test_happy_remove(span);
      let color = app_code_highlight_color();
      html_style_background_color_set(span, color);
      html_font_color_set_white(span);
      app_shared_success_message(component);
    }
    html_on_click(span, on_tap);
  }
  for (let i = 0; less_than(i, code.length); i++) {
    let is = js_code_brace_is(code[i]);
    if (is) {
      brace_add(i);
    }
  }
  let rest = text_slice_from(code, cursor);
  html_text_code_breakable_add(div, rest, html_span_text);
}
