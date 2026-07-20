import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_centered } from "./html_centered.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_quiz_correction_operand(role) {
  "build a 'Show me the answer' correction for the choose-the-operand quizzes that NAMES the role - 'In 14 / 4 the dividend is 14' - instead of the generic 'question -> answer' arrow, which for these reads like a division result (14 / 4 -> 14 could be misread as 14 / 4 = 14). role is 'dividend' / 'divisor' / 'quotient'";
  function correction(container, qa) {
    let box = app_code_container_light_blue(container);
    html_centered(box);
    let code = property_get(qa, "question");
    let answer = text_to(property_get(qa, "answer"));
    let middle = text_combine_multiple([" the ", role, " is "]);
    html_div_cycle_code(box, ["In ", code, middle, answer]);
  }
  return correction;
}
