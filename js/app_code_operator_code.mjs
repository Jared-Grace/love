import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_operator_code(left_code, symbol, right_code) {
  arguments_assert(arguments, 3);
  ("two pieces of code with an operator standing between them, a space on each side of it: 3 === 5, or (2 < 5) !== true");
  ("The one line every lesson that builds a two-sided line was writing out for itself. It is three lines of punctuation - a space, the symbol, a space - and getting one of them wrong shows up as code the learner reads rather than as anything that fails, so it is worth having in one place.");
  let code = text_combine_multiple([left_code, " ", symbol, " ", right_code]);
  return code;
}
