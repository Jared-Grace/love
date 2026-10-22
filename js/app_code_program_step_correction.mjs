import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { number_is } from "./number_is.mjs";
import { app_code_program_step_clicks } from "./app_code_program_step_clicks.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { app_shared_border_radius } from "./app_shared_border_radius.mjs";
import { less_than } from "./less_than.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { equal } from "./equal.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { app_shared_button_inline } from "./app_shared_button_inline.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { app_shared_button_background } from "./app_shared_button_background.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { html_font_color_set_white } from "./html_font_color_set_white.mjs";
import { app_shared_glow_look_here } from "./app_shared_glow_look_here.mjs";
export function app_code_program_step_correction(container, qa) {
  arguments_assert(arguments, 2);
  ("the answer to a step-by-step question: every right press in order, one numbered row each, ending with The program is complete. 2026-10-23, at the human's asking. Not picked: the program and its kept lines, the answer every other quiz shows, which said what the program comes to and not how to get there - and getting there is what the question asks");
  ("2026-10-23, at the human's asking: what is pressed as a button is drawn as one, the steps already pressed are green, and the next one glows. How many are pressed is the answer the quiz hands in as the learner goes; before it hands one in, the program itself stands there, and none is pressed yet. Not picked: a count kept by this drawing, which is drawn again on every press and so keeps nothing");
  let code = property_get(qa, "question");
  let answer = property_get(qa, "answer");
  let done = number_is(answer) ? answer : 0;
  let clicks = app_code_program_step_clicks(code);
  let box = app_code_container_light_blue(container);
  html_text_align_left(box);
  let radius = app_shared_border_radius();
  function ignore() {}
  for (let index = 0; less_than(index, list_size(clicks)); index++) {
    let click = list_get(clicks, index);
    let row = html_div(box);
    html_style_assign(row, {
      padding: "0.15em 0.4em",
      "border-radius": radius,
    });
    html_span_text(row, index + 1 + ". ");
    for (let piece of click) {
      let text = property_get(piece, "text");
      let kind = property_get(piece, "kind");
      if (equal(kind, "code")) {
        html_span_text_code_dark(row, text);
      } else if (equal(kind, "button")) {
        ("a picture of the button, not one to press: pressing it here would do nothing, and a button that does nothing reads as broken");
        let shown = app_shared_button_inline(row, text, ignore);
        html_style_set(shown, "pointer-events", "none");
      } else {
        html_span_text(row, text);
      }
    }
    if (less_than(index, done)) {
      let green = app_shared_button_background();
      html_style_background_color_set(row, green);
      html_font_color_set_white(row);
    } else if (equal(index, done)) {
      app_shared_glow_look_here(row);
    }
  }
}
