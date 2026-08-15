import { app_shared_encouragement_exclamation } from "./app_shared_encouragement_exclamation.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_expression_replace_say(note, solved_code, value_text) {
  arguments_assert(arguments, 3);
  ("say what the operator a learner just chose comes to, and that the piece it stands in is about to be swapped for it: 3 * 7 === 21, so we replace the 3 * 7 with 21");
  ("Said with === rather than becomes, because that is how the track has written what a line comes to since the very first lesson that printed an answer, and the learner is looking at the green block the same words are about.");
  let equals = js_operator_triple_equal_symbol();
  let worked_out = text_combine_multiple([
    solved_code,
    " ",
    equals,
    " ",
    value_text,
  ]);
  ("praised in the same words the quiz praises a finished question with, taken from the one list both of them read");
  let praise = app_shared_encouragement_exclamation();
  html_div_cycle_code(note, [
    praise,
    worked_out,
    ", so we replace the ",
    solved_code,
    " with ",
    value_text,
  ]);
}
