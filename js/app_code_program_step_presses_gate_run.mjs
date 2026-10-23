import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_program_step_presses_unexplained } from "./app_code_program_step_presses_unexplained.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export function app_code_program_step_presses_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every wrong press a step-by-step quiz can be given says why it is wrong. Throws so the dispatcher seam exits nonzero.");
  ("IT RATCHETS AGAINST NOTHING. Measured 2026-10-23 over five rounds of every lesson: thirty seven step lessons, three hundred and twelve programs, about six thousand wrong presses, every one with a reason, the last two found that day being a later } else if pressed while an earlier one was due. So a lesson of a new shape, a while say, fails here before a learner presses into the silence");
  let r = app_code_program_step_presses_unexplained();
  let walked = property_get(r, "walked");
  let found = property_get(r, "found");
  let hint = text_combine_multiple([
    "these presses in a step-by-step quiz are wrong and say nothing about why - add the rule that decides the line due to ",
    fn_name("app_code_program_step_line_press_words"),
  ]);
  let result = list_empty_is_assert_walked_generic(walked, found, hint);
  return result;
}
