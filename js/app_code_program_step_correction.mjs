import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_program_step_clicks } from "./app_code_program_step_clicks.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { list_first } from "./list_first.mjs";
import { list_slice } from "./list_slice.mjs";
import { list_size } from "./list_size.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_program_step_correction(container, qa) {
  arguments_assert(arguments, 2);
  ("the answer to a step-by-step question: every right press in order, one numbered row each, ending with The program is complete. 2026-10-23, at the human's asking. Not picked: the program and its kept lines, the answer every other quiz shows, which said what the program comes to and not how to get there - and getting there is what the question asks");
  let code = property_get(qa, "question");
  let clicks = app_code_program_step_clicks(code);
  let box = app_code_container_light_blue(container);
  html_text_align_left(box);
  let number = 0;
  for (let click of clicks) {
    number = number + 1;
    let first = list_first(click);
    let index_b = list_size(click);
    let rest = list_slice(click, 1, index_b);
    html_div_cycle_code(box, [number + ". " + first, ...rest]);
  }
}
