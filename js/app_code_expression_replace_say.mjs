import { app_shared_encouragement_step_exclamation } from "./app_shared_encouragement_step_exclamation.mjs";
import { app_code_expression_equals_text } from "./app_code_expression_equals_text.mjs";
import { app_code_expression_replace_swap_say } from "./app_code_expression_replace_swap_say.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle } from "./html_cycle.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { noop } from "./noop.mjs";
export function app_code_expression_replace_say(note, solved_code, value_text) {
  arguments_assert(arguments, 3);
  ("say what the operator a learner just chose comes to, and that the piece it stands in is about to be swapped for it: 3 * 7 === 21, so now we replace the 3 * 7 with 21");
  ("Both halves of the sentence are said from the one place each of them lives in, because the lesson that comes after this one tells the learner about this very press afterwards and has to tell them about it in the words they were shown.");
  let worked_out = app_code_expression_equals_text(solved_code, value_text);
  ("praised from the words said DURING a piece of work rather than the ones said at the end of it, because there is more of the same line still to solve underneath this sentence");
  ("It used to read from the one list every place in the app praised from, and so a learner one step into three was told Congratulations - which is what a person is told when they have arrived, so the two steps still to come read as something having gone wrong rather than as the rest of the work.");
  let praise = app_shared_encouragement_step_exclamation();
  ("the working out is dark, and the two pieces named after it are blue: the first is the block standing blue on the line at this very moment, and the second is what that block is about to say instead - so the sentence points at the line rather than merely describing it");
  ("The working out stays dark on purpose. It is arithmetic being shown, not a piece of the line being pointed at, and blue on all three would leave nothing for the blue to mean.");
  ("the two chosen pieces are kept as they are made and handed back, because the swap on the line is shown travelling to the first of them and the second one travelling back down to the line - so the caller needs the very pieces of the page, not another copy of the words in them");
  let line = html_div(note);
  let cycles = [noop, html_style_code_dark_nowrap];
  html_cycle(line, cycles, [praise, worked_out]);
  let chosen_pieces = app_code_expression_replace_swap_say(
    line,
    ", so now we replace the ",
    solved_code,
    value_text,
  );
  return chosen_pieces;
}
