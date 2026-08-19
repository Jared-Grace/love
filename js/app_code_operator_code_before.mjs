import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_code_operator_code_before(symbol, right_code) {
  arguments_assert(arguments, 2);
  ("an operator standing in front of the piece of code it acts on, with no space between them: !true, or !(3 < 5)");
  ("The one-sided twin of the spelling with a space on each side. The absence of the space is the whole of it, and it is exactly the kind of thing that shows up as code a learner reads oddly rather than as anything that fails, so it is worth having in one place.");
  let code = text_combine(symbol, right_code);
  return code;
}
