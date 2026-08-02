import { property_text_to } from "./property_text_to.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_centered } from "./html_centered.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_quiz_correction(container, qa) {
  "reveal the correct answer after a wrong attempt, so the mistake teaches; qa.question is always the code/thing and qa.answer always its result, so this works for every quiz kind and every lesson; a neutral arrow avoids a lesson-specific verb (a symbols lesson HAS a count, it does not 'write' one). The arrow is the app's shared blue arrow so it matches the Next/nav arrows the learner already knows";
  let box = app_code_container_light_blue(container);
  html_centered(box);
  let code = property_get(qa, "question");
  let output = property_text_to(qa, "answer");
  let arrow = emoji_arrow_right();
  let middle = text_combine_multiple([" ", arrow, " "]);
  html_div_cycle_code(box, ["", code, middle, output]);
}
