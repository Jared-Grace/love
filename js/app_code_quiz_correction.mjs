import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_centered } from "./html_centered.mjs";
import { property_get } from "./property_get.mjs";
import { property_text_to } from "./property_text_to.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
import { text_includes } from "./text_includes.mjs";
import { html_div } from "./html_div.mjs";
import { html_span } from "./html_span.mjs";
import { html_display_inline_block } from "./html_display_inline_block.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_quiz_correction(container, qa) {
  "reveal the correct answer after a wrong attempt, so the mistake teaches; qa.question is always the code/thing and qa.answer always its result, so this works for every quiz kind and every lesson; a neutral arrow avoids a lesson-specific verb (a symbols lesson HAS a count, it does not 'write' one). The arrow is the app's shared blue arrow so it matches the Next/nav arrows the learner already knows";
  "CODE ON MORE THAN ONE LINE STANDS ON ITS OWN LINES ABOVE THE ARROW. Written into the run with the arrow it was held on one line that never wraps, and holding it there folds its line breaks into spaces - so a four-line program became one line six hundred and fifty pixels long. Hidden, it still widened the slot it shares with the success message, and a phone then scrolled sideways under a success message twice the width of the screen; shown, it was one unreadable line. So it keeps its breaks and may wrap, the way the question showed it, and the arrow and the answer follow underneath.";
  let box = app_code_container_light_blue(container);
  html_centered(box);
  let code = property_get(qa, "question");
  let output = property_text_to(qa, "answer");
  let arrow = emoji_arrow_right();
  let lines_many = text_includes(code, "\n");
  if (lines_many) {
    let code_row = html_div(box);
    let chip = html_span(code_row);
    html_display_inline_block(chip);
    html_text_set_code_dark_lines(chip, code);
    let arrow_before = text_combine(arrow, " ");
    html_div_cycle_code(box, [arrow_before, output]);
    return;
  }
  let middle = text_combine_multiple([" ", arrow, " "]);
  html_div_cycle_code(box, ["", code, middle, output]);
}
