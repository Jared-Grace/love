import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { html_centered } from "./html_centered.mjs";
import { property_get } from "./property_get.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { text_includes } from "./text_includes.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { app_learn_js_arrow_inline } from "./app_learn_js_arrow_inline.mjs";
import { app_learn_js_cycle_code } from "./app_learn_js_cycle_code.mjs";
export function app_learn_js_quiz_correction(container, qa) {
  "reveal the correct answer after a wrong attempt, so the mistake teaches; qa.question is always the code/thing and qa.answer always its result, so this works for every quiz kind and every lesson; a neutral arrow avoids a lesson-specific verb (a symbols lesson HAS a count, it does not 'write' one). The arrow is the code app's drawn dark blue arrow, chosen by the human 2026-11-09: it says 'this gives that', as the arrows in the lessons' own boxes do, while the emoji arrow stays on buttons, where it says 'go'. Not kept: the emoji arrow, chosen earlier to match the Next button";
  "CODE ON MORE THAN ONE LINE STANDS ON ITS OWN LINES ABOVE THE ARROW. Written into the run with the arrow it was held on one line that never wraps, and holding it there folds its line breaks into spaces - so a four-line program became one line six hundred and fifty pixels long. Hidden, it still widened the slot it shares with the success message, and a phone then scrolled sideways under a success message twice the width of the screen; shown, it was one unreadable line. So it keeps its breaks and may wrap, the way the question showed it, and the arrow and the answer follow underneath.";
  let box = app_learn_js_container_light_blue(container);
  html_centered(box);
  let code = property_get(qa, "question");
  let output = property_text_to(qa, "answer");
  let lines_many = text_includes(code, "\n");
  if (lines_many) {
    let code_row = html_div(box);
    let chip = html_span(code_row);
    html_display_inline_block(chip);
    html_text_set_code_dark_lines(chip, code);
    let answer_row = html_div(box);
    app_learn_js_arrow_inline(answer_row, 0);
    app_learn_js_cycle_code(answer_row, [" ", output]);
    return;
  }
  let row = html_div(box);
  app_learn_js_cycle_code(row, ["", code, " "]);
  app_learn_js_arrow_inline(row, 0);
  app_learn_js_cycle_code(row, [" ", output]);
}
