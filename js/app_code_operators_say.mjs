import { app_code_definition_term } from "./app_code_definition_term.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_operators_arithmetic } from "./app_code_operators_arithmetic.mjs";
export function app_code_operators_say(parent) {
  arguments_assert(arguments, 1);
  ("the one sentence that hands the learner the word operator, said as the four signs themselves: Symbols like + - * and / are operators");
  ("Said with the signs rather than with a definition, because the learner has met all four of them one at a time and has never seen them stood together under one word. What this sentence adds is the word, not the signs.");
  ("It belongs wherever a lesson starts ASKING for an operator by that word. A word used in an instruction has to have been given before the instruction, or the instruction is naming something the learner has no name for.");
  ("The word itself is written the one way this app writes a word it is defining, out of the one place that says what that way is, so it looks like every other word a lesson has handed over rather than like a word this line chose to emphasise.");
  let line = html_div(parent);
  html_span_text(line, "Symbols like ");
  app_code_operators_arithmetic(line);
  html_span_text(line, " are ");
  app_code_definition_term(line, "operators");
  return line;
}
