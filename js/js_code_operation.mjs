import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function js_code_operation(left, symbol, right) {
  arguments_assert(arguments, 3);
  ("Two values with an operator between them, written out as code, with a space on each side of the operator.");
  ("The two values are turned into text here rather than by the caller. Every caller had a number and was writing that turning itself, three lines above the line that mattered, and a lesson reading its own source should not have to.");
  ("Nothing is wrapped in brackets here. Whether this operation needs them depends on what stands beside it, which only the caller can see - so the wrapping stays a separate step with its own name.");
  let left_text = text_to(left);
  let right_text = text_to(right);
  let code = text_combine_multiple([left_text, " ", symbol, " ", right_text]);
  return code;
}
