import { list_add } from "./list_add.mjs";
import { app_shared_encouragement_step_exclamation } from "./app_shared_encouragement_step_exclamation.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle } from "./html_div_cycle.mjs";
import { html_style_code_dark_nowrap } from "./html_style_code_dark_nowrap.mjs";
import { app_code_expression_chosen_code_nowrap } from "./app_code_expression_chosen_code_nowrap.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { noop } from "./noop.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_expression_replace_say(note, solved_code, value_text) {
  arguments_assert(arguments, 3);
  ("say what the operator a learner just chose comes to, and that the piece it stands in is about to be swapped for it: 3 * 7 === 21, so now we replace the 3 * 7 with 21");
  ("Said with === rather than becomes, because that is how the track has written what a line comes to since the very first lesson that printed an answer, and the learner is looking at the green block the same words are about.");
  let equals = js_operator_triple_equal_symbol();
  let worked_out = text_combine_multiple([
    solved_code,
    " ",
    equals,
    " ",
    value_text,
  ]);
  ("praised from the words said DURING a piece of work rather than the ones said at the end of it, because there is more of the same line still to solve underneath this sentence");
  ("It used to read from the one list every place in the app praised from, and so a learner one step into three was told Congratulations - which is what a person is told when they have arrived, so the two steps still to come read as something having gone wrong rather than as the rest of the work.");
  let praise = app_shared_encouragement_step_exclamation();
  ("the working out is dark, and the two pieces named after it are green: the first is the block standing green on the line at this very moment, and the second is what that block is about to say instead - so the sentence points at the line rather than merely describing it");
  ("The working out stays dark on purpose. It is arithmetic being shown, not a piece of the line being pointed at, and green on all three would leave nothing for the green to mean.");
  ("the two green pieces are kept as they are made and handed back, because the swap on the line is shown travelling to the first of them and the second one travelling back down to the line - so the caller needs the very pieces of the page, not another copy of the words in them");
  let greens = [];
  function green(span) {
    "style a piece green and remember it, in the one pass that makes it";
    app_code_expression_chosen_code_nowrap(span);
    list_add(greens, span);
  }
  let cycles = [noop, html_style_code_dark_nowrap, noop, green, noop, green];
  html_div_cycle(note, cycles, [
    praise,
    worked_out,
    ", so now we replace the ",
    solved_code,
    " with ",
    value_text,
  ]);
  return greens;
}
