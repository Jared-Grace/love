import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { app_code_if_blocks_kept } from "./app_code_if_blocks_kept.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { app_code_value_logged_output } from "./app_code_value_logged_output.mjs";
import { app_code_label_of_code } from "./app_code_label_of_code.mjs";
import { app_code_example_answer_label } from "./app_code_example_answer_label.mjs";
import { equal } from "./equal.mjs";
import { app_code_style_normal_text } from "./app_code_style_normal_text.mjs";
import { html_height } from "./html_height.mjs";
import { html_height_animate } from "./html_height_animate.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { sleep } from "./sleep.mjs";
export async function app_code_braces_run_output_show(
  parent,
  code,
  on_success,
) {
  arguments_assert(arguments, 3);
  ("once every section is answered, what the program left writes out appears under it: first the room for it opens, pushing what is below down, then the words fade into it, and only then is the answer counted");
  ("Asked for by the human 2026-10-11: the lesson after each of these asks what such a program writes out, and what is left here is straight-line code, so its output is the one step from this answer to that question. The room opens before the words come so that nothing jumps - a box arriving whole moves everything under it at once. Not picked: the output shown from the start, which would tell which sections run before they are asked; and asking for the output as one more question, which is the next lesson's quiz.");
  ("Its own function rather than a step inside ",
    fn_name("app_code_braces_run_choose"),
    ", because that one reads letters by number and so cannot be proved safe to edit; this way the change there is one call.");
  let duration = app_shared_animation_duration();
  let kept = app_code_if_blocks_kept(code);
  let output = eval_console_log_lines(kept);
  let out = html_div(parent);
  html_style_opacity(out, "0");
  let value = app_code_value_logged_output();
  let label = app_code_label_of_code(value);
  app_code_example_answer_label(out, label);
  if (equal(output, "")) {
    output = "Nothing is logged";
  }
  app_code_style_normal_text(out, output);
  let height = html_height(out);
  await html_height_animate(out, 0, height, duration);
  let timing = text_combine_multiple(["opacity ", duration, "ms"]);
  html_transition_set(out, timing);
  html_style_opacity(out, "1");
  await sleep(duration);
  on_success();
}
