import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_to } from "./text_to.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_quiz_correction(container, qa) {
  "reveal the correct example (the code and what it writes) after a wrong answer, so the mistake teaches the concept; qa.question is always the code and qa.answer always the output, so this works for every quiz kind (forwards, backwards, unscramble) and every lesson";
  let box = app_code_container_light_blue(container);
  let code = property_get(qa, "question");
  let output = text_to(property_get(qa, "answer"));
  html_div_cycle_code(box, ["", code, " writes ", output]);
}
